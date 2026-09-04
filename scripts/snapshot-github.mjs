import { execFileSync } from "node:child_process"
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const sources = []
for (const folder of ["wiki/repos", "raw"]) {
  for (const name of await readdir(path.join(root, folder))) {
    if (!name.endsWith(".md")) continue
    sources.push(await readFile(path.join(root, folder, name), "utf8"))
  }
}

const names = [
  ...new Set(
    sources.flatMap((source) =>
      [...source.matchAll(/https:\/\/github\.com\/([\w.-]+\/[\w.-]+)/gi)].map((match) =>
        match[1].replace(/\.git$/, "").toLowerCase(),
      ),
    ),
  ),
].sort()

const token =
  process.env.GITHUB_TOKEN ??
  process.env.GH_TOKEN ??
  execFileSync("gh", ["auth", "token"], { encoding: "utf8" }).trim()
const snapshot = {}
let cursor = 0

async function worker() {
  while (cursor < names.length) {
    const fullName = names[cursor++]
    const response = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    if (!response.ok) {
      console.warn(`Skipped ${fullName}: HTTP ${response.status}`)
      continue
    }
    const repo = await response.json()
    snapshot[fullName] = {
      fullName: repo.full_name,
      url: repo.html_url,
      description: repo.description,
      createdAt: repo.created_at,
      pushedAt: repo.pushed_at,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      archived: repo.archived,
    }
    process.stdout.write(".")
  }
}

await Promise.all(Array.from({ length: 6 }, worker))
await mkdir(path.join(root, "archive"), { recursive: true })
await writeFile(
  path.join(root, "archive", "github-snapshot.json"),
  JSON.stringify(snapshot, null, 2) + "\n",
)
console.log(`\nSaved ${Object.keys(snapshot).length} GitHub records.`)
