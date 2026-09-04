import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const repoDir = path.join(root, "wiki", "repos")
const conceptDir = path.join(root, "wiki", "concepts")
const rawDir = path.join(root, "raw")
const outputDir = path.join(root, "public")

const stripQuotes = (value) => value.replace(/^['"]|['"]$/g, "")
const parseValue = (value) => {
  const clean = value.trim()
  if (clean.startsWith("[") && clean.endsWith("]")) {
    return clean
      .slice(1, -1)
      .split(",")
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean)
  }
  if (/^-?\d+(\.\d+)?$/.test(clean)) return Number(clean)
  if (clean === "true" || clean === "false") return clean === "true"
  return stripQuotes(clean)
}

function parseMarkdown(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  const frontmatter = {}
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const pair = line.match(/^([\w-]+):\s*(.*)$/)
      if (pair) frontmatter[pair[1]] = parseValue(pair[2])
    }
  }
  const body = source.slice(match?.[0].length ?? 0)
  const sections = {}
  const heading = /^##\s+(.+)$/gm
  const matches = [...body.matchAll(heading)]
  matches.forEach((item, index) => {
    sections[item[1].trim()] = body
      .slice(item.index + item[0].length, matches[index + 1]?.index ?? body.length)
      .trim()
  })
  return { frontmatter, body, sections }
}

function plain(value = "") {
  return value
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, (_, target, label) => label || target)
    .replace(/^[-*>#]+\s*/gm, "")
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function links(value = "") {
  return [...value.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)].map(
    ([, label, url]) => ({ label, url }),
  )
}

function githubKey(url = "") {
  return url
    .replace(/\.git$/, "")
    .match(/github\.com\/([^/]+\/[^/#?]+)/i)?.[1]
    ?.toLowerCase()
}

async function loadMarkdownFolder(folder) {
  const names = (await readdir(folder)).filter((name) => name.endsWith(".md")).sort()
  return Promise.all(
    names.map(async (name) => ({
      slug: name.replace(/\.md$/, ""),
      source: await readFile(path.join(folder, name), "utf8"),
    })),
  )
}

async function loadResearchCandidates() {
  let names = []
  try {
    names = (await readdir(rawDir)).filter(
      (name) => name.startsWith("research") && name.endsWith(".md"),
    )
  } catch {
    return []
  }

  const candidates = []
  for (const name of names.sort()) {
    const source = await readFile(path.join(rawDir, name), "utf8")
    const headings = [...source.matchAll(/^###\s+(.+)$/gm)]
    for (let index = 0; index < headings.length; index += 1) {
      const title = headings[index][1]
      const block = source.slice(
        headings[index].index,
        headings[index + 1]?.index ?? source.length,
      )
      const status = block.match(/判断：\*\*(accept|maybe|reject)/i)?.[1]?.toLowerCase()
      if (!status || status === "reject") continue
      const url = block.match(/https:\/\/github\.com\/[\w.-]+\/[\w.-]+/i)?.[0]?.replace(
        /[).,;，。；]+$/,
        "",
      )
      if (!url) continue
      const fullName = githubKey(url)
      const recommended =
        block.match(/建议一句话：[`“"]?([^\n`”"]+)/)?.[1] ??
        block.match(/具体实现[：：]\s*([^\n]+)/)?.[1] ??
        "已通过初步酝酿，等待正式入馆。"
      const linkedConcepts = [
        ...block.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g),
      ].map((item) => item[1])
      const suggestedConcepts =
        block
          .match(/建议(?:的)?(?:概念|支系)：([^。\n]+)/)?.[1]
          ?.split(/[、，,]/)
          .map((item) =>
            item
              .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, "$1")
              .replace(/[`。]/g, "")
              .trim(),
          )
          .filter(Boolean) ?? []
      candidates.push({
        id: `candidate:${fullName}`,
        title: title.replace(/^\d+\.\s*/, "").replace(/[`]/g, ""),
        fullName,
        url,
        status,
        summary: plain(recommended),
        concepts: [...new Set([...linkedConcepts, ...suggestedConcepts])],
        source: `raw/${name}`,
      })
    }
  }
  return [...new Map(candidates.map((item) => [item.fullName, item])).values()]
}

const repoFiles = await loadMarkdownFolder(repoDir)
const conceptFiles = await loadMarkdownFolder(conceptDir)
const concepts = conceptFiles.map(({ slug, source }) => {
  const parsed = parseMarkdown(source)
  return {
    slug,
    title: parsed.frontmatter.title ?? slug,
    definition: plain(parsed.sections["定义"] ?? ""),
  }
})

let snapshot = {}
try {
  snapshot = JSON.parse(
    await readFile(path.join(root, "archive", "github-snapshot.json"), "utf8"),
  )
} catch {}

const repositories = repoFiles.map(({ slug, source }) => {
  const parsed = parseMarkdown(source)
  const meta = snapshot[githubKey(parsed.frontmatter.url)] ?? {}
  const evidence = links(parsed.sections["证据"] ?? "")
  return {
    id: `repo:${slug}`,
    slug,
    title: parsed.frontmatter.title ?? slug,
    url: parsed.frontmatter.url,
    status: parsed.frontmatter.status ?? "accept",
    concepts: parsed.frontmatter.concepts ?? [],
    language: parsed.frontmatter.language ?? meta.language ?? "未标注",
    stars: parsed.frontmatter.stars ?? meta.stars ?? null,
    forks: parsed.frontmatter.forks ?? meta.forks ?? null,
    createdAt: meta.createdAt ?? null,
    pushedAt: meta.pushedAt ?? null,
    archived: meta.archived ?? false,
    checkedAt: parsed.frontmatter.last_checked ?? parsed.frontmatter.last_updated,
    summary: plain(parsed.sections["摘要"] ?? ""),
    reason: plain(
      parsed.sections["为什么是大便"] ?? parsed.sections["为什么收录"] ?? "",
    ),
    evidence,
  }
})

const repositoryKeys = new Set(repositories.map((item) => githubKey(item.url)))
const research = (await loadResearchCandidates())
  .filter((item) => !repositoryKeys.has(item.fullName))
  .map((item) => {
    const meta = snapshot[item.fullName] ?? {}
    return { ...item, ...meta }
  })

const culturalEvents = JSON.parse(
  await readFile(path.join(root, "archive", "cultural-events.json"), "utf8"),
)

const data = {
  generatedAt: new Date().toISOString(),
  repositories,
  concepts,
  research,
  culturalEvents,
}

await rm(outputDir, { recursive: true, force: true })
await mkdir(outputDir, { recursive: true })
await cp(path.join(root, "site"), outputDir, { recursive: true })
await writeFile(path.join(outputDir, "archive.json"), JSON.stringify(data, null, 2))

console.log(
  `Built archive: ${repositories.length} collections, ${research.length} field notes, ${concepts.length} branches.`,
)
