import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN
const model = process.env.HISTORIAN_MODEL ?? "qwen3:1.7b"
const ollamaUrl = process.env.OLLAMA_URL ?? "http://127.0.0.1:11434"
const maxCandidates = Number(process.env.HISTORIAN_MAX_CANDIDATES ?? 18)
const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date())

if (!token) throw new Error("找史官需要 GITHUB_TOKEN 或 GH_TOKEN")

const githubHeaders = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "github-chinese-archive-historian",
}

const searchTerms = [
  "抽象",
  "中文互联网 梗",
  "桌宠 梗",
  "鬼畜",
  "表情包 bot",
  "哈基米",
  "奶龙",
  "曼波",
  "耄耋",
  "大狗叫",
  "牛来",
  "弱智吧",
  "原神启动",
  "吗喽",
]

const branchSlugs = [
  "Hajimi",
  "Nailong",
  "Manbo",
  "Maodie",
  "DagouJiao",
  "NiulaiNaiwa",
  "Ruozhiba",
  "GenshinLaunch",
  "Taffy",
  "WorkerMemes",
  "Ikun",
  "Laoda",
  "Otto",
  "DingZhenUniverse",
  "Jijiguo",
  "MemeArchives",
  "MemeCodecs",
  "MemeBots",
  "MemeDesktopPets",
  "BrainrotGames",
  "VoiceSynthesisShitpost",
  "MemeProgramming",
  "EmergingMemes",
]
const branchSet = new Set(branchSlugs)
const localAnchor = /哈基米|奶龙|曼波|耄耋|大狗叫|牛来|奶蛙|弱智吧|原神启动|吗喽|蔡徐坤|ikun|牢大|科比|电棍|otto|丁真|吉吉国|鬼畜|抽象|恶俗|发病文学|表情包|贴吧|天涯|永雏塔菲/i

const repoKey = (url = "") =>
  url
    .replace(/\.git$/, "")
    .match(/github\.com\/([^/]+\/[^/#?]+)/i)?.[1]
    ?.toLowerCase()

async function markdownFiles(folder) {
  const absolute = path.join(root, folder)
  const entries = await readdir(absolute, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const relative = path.join(folder, entry.name)
    if (entry.isDirectory()) files.push(...(await markdownFiles(relative)))
    else if (entry.name.endsWith(".md")) files.push(relative)
  }
  return files
}

const known = new Set()
for (const file of [
  ...(await markdownFiles("wiki/repos")),
  ...(await markdownFiles("raw")),
]) {
  const source = await readFile(path.join(root, file), "utf8")
  for (const match of source.matchAll(/https:\/\/github\.com\/[\w.-]+\/[\w.-]+/gi)) {
    const key = repoKey(match[0])
    if (key) known.add(key)
  }
}

async function githubJson(url) {
  const response = await fetch(url, { headers: githubHeaders })
  if (!response.ok) {
    const details = await response.text()
    throw new Error(`GitHub HTTP ${response.status}: ${details.slice(0, 240)}`)
  }
  return response.json()
}

const since = new Date(Date.now() - 21 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10)
const discovered = new Map()

for (const term of searchTerms) {
  const query = `${term} created:>=${since} in:name,description,readme`
  const url = new URL("https://api.github.com/search/repositories")
  url.searchParams.set("q", query)
  url.searchParams.set("sort", "updated")
  url.searchParams.set("order", "desc")
  url.searchParams.set("per_page", "10")
  const result = await githubJson(url)
  for (const repo of result.items ?? []) {
    const key = repo.full_name.toLowerCase()
    if (known.has(key) || discovered.has(key) || repo.fork || repo.archived) continue
    const metadataText = `${repo.name} ${repo.description ?? ""} ${(repo.topics ?? []).join(" ")}`
    discovered.set(key, { repo, metadataText, term })
  }
}

const candidates = []
for (const item of discovered.values()) {
  if (candidates.length >= maxCandidates) break
  let readme = ""
  try {
    const data = await githubJson(
      `https://api.github.com/repos/${item.repo.full_name}/readme`,
    )
    readme = Buffer.from(data.content ?? "", "base64").toString("utf8")
  } catch (error) {
    console.warn(`${item.repo.full_name}: README 不可读（${error.message}）`)
  }
  const evidence = `${item.metadataText}\n${readme}`
  if (!localAnchor.test(evidence)) continue
  candidates.push({
    fullName: item.repo.full_name,
    url: item.repo.html_url,
    description: item.repo.description ?? "",
    createdAt: item.repo.created_at,
    pushedAt: item.repo.pushed_at,
    stars: item.repo.stargazers_count,
    language: item.repo.language ?? "未标注",
    matchedTerm: item.term,
    readme: readme.slice(0, 5200),
  })
}

if (!candidates.length) {
  console.log("找史官：最近 21 天没有发现通过本地锚点预筛的新仓库。")
  process.exit(0)
}

async function judge(batch) {
  const prompt = `你是“GitHub 中文史料馆”的找史官。只根据下面的 GitHub metadata 与 README 判断，不许靠联想补事实。

硬门槛：仓库必须直接绑定中国互联网恶俗烂梗、抽象文化、公开人物/事件/话术，或者把这种语境做成工具、档案、游戏、Bot、桌宠、编码器。只有 AI、weird、海外 brainrot、普通表情包、普通低质量代码都必须 reject。只有边界证据不足才 maybe。

输出一个 JSON 对象，唯一顶级字段为 decisions。每项必须有 fullName、status（accept/maybe/reject）、anchor（明确的中文梗锚点）、implementation（仓库具体如何实现）、branch（只能从下列 slug 选一个）、reason、summary（一句中文收录语，必须同时包含梗对象和实现方式）。

可选 branch：${branchSlugs.join(", ")}

候选材料：
${batch
  .map(
    (item) => `---
fullName: ${item.fullName}
description: ${item.description}
matchedTerm: ${item.matchedTerm}
README:\n${item.readme}`,
  )
  .join("\n")}`

  const response = await fetch(`${ollamaUrl}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      prompt,
      stream: false,
      format: "json",
      think: false,
      options: { temperature: 0.1, num_predict: 1800 },
    }),
  })
  if (!response.ok) throw new Error(`Ollama HTTP ${response.status}: ${await response.text()}`)
  const result = await response.json()
  const parsed = JSON.parse(result.response)
  return Array.isArray(parsed.decisions) ? parsed.decisions : []
}

const decisions = []
for (let index = 0; index < candidates.length; index += 3) {
  const batch = candidates.slice(index, index + 3)
  try {
    decisions.push(...(await judge(batch)))
  } catch (error) {
    console.warn(`AI 判读批次失败：${error.message}`)
  }
}

const candidateByName = new Map(
  candidates.map((item) => [item.fullName.toLowerCase(), item]),
)
const clean = (value = "") =>
  String(value).replace(/[`\r\n]+/g, " ").replace(/\s+/g, " ").trim()
const accepted = []

for (const decision of decisions) {
  const item = candidateByName.get(clean(decision.fullName).toLowerCase())
  const status = clean(decision.status).toLowerCase()
  const branch = clean(decision.branch)
  if (!item || !["accept", "maybe"].includes(status) || !branchSet.has(branch)) continue
  const anchor = clean(decision.anchor)
  const implementation = clean(decision.implementation)
  const reason = clean(decision.reason)
  const summary = clean(decision.summary)
  if (!anchor || !implementation || !summary) continue
  accepted.push({ item, status, branch, anchor, implementation, reason, summary })
}

if (!accepted.length) {
  console.log(`找史官：审阅 ${candidates.length} 个候选，没有 accept/maybe。`)
  process.exit(0)
}

const report = `# ${today} 找史官每日巡检

> 自动史官：Ollama ${model}（本地推理，无外部模型 API key）  
> 范围：GitHub 最近 21 天新建仓库；已排除馆内 URL、fork 与 archived repo。  
> 说明：模型结论只作为 PR 初筛，合并前必须由人复核 README 与源码证据。

## 候选

${accepted
  .map(
    ({ item, status, branch, anchor, implementation, reason, summary }, index) => `### ${index + 1}. \`${item.fullName}\`

- repo：[GitHub](${item.url})
- README：[README](${item.url}#readme)
- GitHub metadata：创建 ${item.createdAt}；最近推送 ${item.pushedAt}；${item.stars} stars；${item.language}
- 中文梗锚点：${anchor}
- 具体实现：${implementation}
- 判断：**${status}**。${reason}
- 建议支系：\`${branch}\`
- 建议一句话：\`${summary}\`
`,
  )
  .join("\n")}
`

await mkdir(path.join(root, "raw"), { recursive: true })
const destination = path.join(root, "raw", `research-daily-${today}.md`)
await writeFile(destination, report)
console.log(`找史官：写入 ${path.relative(root, destination)}，${accepted.length} 个 accept/maybe。`)
