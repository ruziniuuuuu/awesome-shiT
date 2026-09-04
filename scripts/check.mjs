import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const conceptNames = new Set(
  (await readdir(path.join(root, "wiki", "concepts")))
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, "")),
)
const urls = new Map()
const findings = []

for (const name of await readdir(path.join(root, "wiki", "repos"))) {
  if (!name.endsWith(".md")) continue
  const source = await readFile(path.join(root, "wiki", "repos", name), "utf8")
  const url = source.match(/^url:\s*(\S+)/m)?.[1]?.replace(/\.git$/, "")
  if (!url) findings.push(`${name}: 缺少 url`)
  else if (urls.has(url)) findings.push(`${name}: 与 ${urls.get(url)} URL 重复`)
  else urls.set(url, name)
  const concepts = source.match(/^concepts:\s*\[([^\]]*)\]/m)?.[1]
  if (!concepts) findings.push(`${name}: 缺少 concepts`)
  else {
    for (const concept of concepts.split(",").map((item) => item.trim()).filter(Boolean)) {
      if (!conceptNames.has(concept)) findings.push(`${name}: 概念 ${concept} 不存在`)
    }
  }
}

if (findings.length) {
  console.error(findings.join("\n"))
  process.exitCode = 1
} else {
  console.log(`Archive check passed: ${urls.size} repository records.`)
}
