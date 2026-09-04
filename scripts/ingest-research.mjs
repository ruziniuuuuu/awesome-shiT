import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const rawDir = path.join(root, "raw")
const repoDir = path.join(root, "wiki", "repos")
const conceptDir = path.join(root, "wiki", "concepts")
const checkedAt = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date())
const snapshot = JSON.parse(
  await readFile(path.join(root, "archive", "github-snapshot.json"), "utf8"),
)

const conceptDefinitions = {
  Manbo: ["曼波", "围绕“曼波”音声、讲故事配音与曼波语编码形成的新近工程化支系。"],
  Maodie: ["耄耋与哈气", "围绕圆头耄耋、哈气、老吴等传播元素形成的桌宠、游戏、Bot 与 Mod 支系。"],
  DagouJiao: ["大狗叫", "把“大、狗、叫”等音声拆成网页、键盘监听、歌声合成与硬件交互的支系。"],
  NiulaiNaiwa: ["牛来与奶蛙", "围绕“牛来”“妈妈”、奶蛙笑声及黄色动物群像形成的桌宠与游戏支系。"],
  Ruozhiba: ["弱智吧再工程化", "将弱智吧帖子整理为语料、数据集、索引与大模型民间评测的支系。"],
  GenshinLaunch: ["原神启动", "把“原神启动”做成网页仪式、系统模块与玩具编程接口的支系。"],
  Taffy: ["永雏塔菲二创", "围绕永雏塔菲公开内容、口癖、表情与虚拟主播文化形成的数字人格和桌宠支系。"],
  WorkerMemes: ["打工人抽象", "将吗喽、班味、摸鱼收入和职场人格测试做成软件的当代打工人支系。"],
  MemeDesktopPets: ["梗桌宠", "把具体中文互联网梗映射到桌面动作、系统状态或 Agent 生命周期的桌宠项目。"],
  MemeBots: ["梗聊天 Bot", "在 QQ、Telegram、AstrBot、NoneBot 等聊天场景中主动生成或投放具体梗内容。"],
  GameMods: ["整活游戏 Mod", "把具体中文互联网梗写进现有游戏的角色、实体、卡牌或规则系统。"],
  InteractiveMemeToys: ["音画互动玩具", "用点击、键盘、麦克风或音频分析驱动梗图与音声的互动项目。"],
  MemeHardware: ["梗硬件", "把中文互联网梗从网页和软件落到开发板、屏幕、扬声器等专用硬件。"],
  Jijiguo: ["吉吉国与贴吧抽象", "围绕吉吉国主播、贴吧黑话和祖安词库形成的中文恶俗话术支系。"],
  MemeImageProcessing: ["梗图像处理", "用镜像、倒放、万花筒等图像算法加工特定中文梗素材的项目。"],
  BigBanana: ["大香蕉", "围绕大香蕉音画素材形成的恶搞程序与交互项目。"],
  JipaiBro: ["鸡排哥", "围绕鸡排哥公开表达与景德镇摊位话术形成的工程化二创。"],
  EmergingMemes: ["新梗待考", "已经出现工程化实现、但尚未形成稳定独立支系的新近中文互联网文化项目。"],
}

const labelToSlug = new Map(
  [
    ["曼波", "Manbo"],
    ["耄耋", "Maodie"],
    ["耄耋/哈气", "Maodie"],
    ["大狗叫", "DagouJiao"],
    ["牛来", "NiulaiNaiwa"],
    ["奶蛙", "NiulaiNaiwa"],
    ["黄色三幻神", "NiulaiNaiwa"],
    ["弱智吧", "Ruozhiba"],
    ["原神启动", "GenshinLaunch"],
    ["永雏塔菲", "Taffy"],
    ["吗喽", "WorkerMemes"],
    ["SBTI", "WorkerMemes"],
    ["打工人抽象", "WorkerMemes"],
    ["Agent 桌宠潮", "MemeDesktopPets"],
    ["梗桌宠", "MemeDesktopPets"],
    ["MemeDesktopPets", "MemeDesktopPets"],
    ["群聊 Bot", "MemeBots"],
    ["表情包 Bot", "MemeBots"],
    ["MemeBots", "MemeBots"],
    ["游戏 Mod", "GameMods"],
    ["Minecraft 整活 Mod", "GameMods"],
    ["音画互动玩具", "InteractiveMemeToys"],
    ["键盘音效玩具", "InteractiveMemeToys"],
    ["音画同步玩具", "InteractiveMemeToys"],
    ["梗硬件", "MemeHardware"],
    ["吉吉国", "Jijiguo"],
    ["梗图像处理", "MemeImageProcessing"],
    ["MemeImageProcessing", "MemeImageProcessing"],
    ["新梗待考", "EmergingMemes"],
    ["梗游戏", "BrainrotGames"],
    ["文字冒险", "BrainrotGames"],
    ["梗语音合成", "VoiceSynthesisShitpost"],
    ["鬼畜配音生产线", "VoiceSynthesisShitpost"],
    ["鬼畜音乐工具", "VoiceSynthesisShitpost"],
    ["梗编码器", "MemeCodecs"],
    ["梗语料档案", "MemeArchives"],
    ["梗数据集", "MemeArchives"],
    ["梗史料索引", "MemeArchives"],
    ["互动档案", "MemeArchives"],
    ["LLM 民间评测", "AIAndRetrievalMemeTools"],
    ["虚拟主播数字人格", "AIAndRetrievalMemeTools"],
    ["WebGL 复刻", "MemeProgramming"],
    ["系统级整活", "MemeProgramming"],
    ["玩具编程接口", "MemeProgramming"],
  ],
)

const plain = (value = "") =>
  value
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, (_, target, label) => label || target)
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ")
    .trim()

const repoKey = (url = "") =>
  url
    .replace(/\.git$/, "")
    .match(/github\.com\/([^/]+\/[^/#?]+)/i)?.[1]
    ?.toLowerCase()

const existingUrls = new Set()
const existingByUrl = new Map()
const usedSlugs = new Set()
for (const name of await readdir(repoDir)) {
  if (!name.endsWith(".md")) continue
  usedSlugs.add(name.replace(/\.md$/, "").toLowerCase())
  const source = await readFile(path.join(repoDir, name), "utf8")
  const url = source.match(/^url:\s*(\S+)/m)?.[1]
  if (url) {
    existingUrls.add(repoKey(url))
    existingByUrl.set(repoKey(url), name.replace(/\.md$/, ""))
  }
}

const candidates = []
const candidateKeys = new Set()
for (const name of (await readdir(rawDir)).filter((file) => /^research.*\.md$/.test(file))) {
  const source = await readFile(path.join(rawDir, name), "utf8")
  const headings = [...source.matchAll(/^###\s+(.+)$/gm)]
  headings.forEach((heading, index) => {
    const block = source.slice(heading.index, headings[index + 1]?.index ?? source.length)
    const accepted =
      /判断：\*\*accept/i.test(block) ||
      /^###\s+.+(?:—|-)\s*accept\s*$/im.test(block)
    if (!accepted) return
    const url = block
      .match(/https:\/\/github\.com\/[\w.-]+\/[\w.-]+/i)?.[0]
      ?.replace(/[).,;，。；]+$/, "")
    const key = repoKey(url)
    if (!key || candidateKeys.has(key) || existingByUrl.has(key)) return
    const suggested =
      block
        .match(/建议(?:的)?(?:概念|支系)：([^\n]*?)(?:。?一句话：|$)/)?.[1]
        ?.split(/[、，,]/)
        .map((item) =>
          item
            .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, "$1")
            .replace(/[`。]/g, "")
            .replace(/^可新增\s+/, "")
            .trim(),
        )
        .filter(Boolean) ?? []
    const linked = [...block.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map(
      (item) => item[1],
    )
    const title = heading[1].replace(/^\d+\.\s*/, "").replace(/[`]/g, "")
    const summary =
      block.match(/(?:建议)?一句话：`([^`]+)`/)?.[1] ??
      block.match(/(?:建议)?一句话：[“"]([^\n]+)[”"]/)?.[1] ??
      block.match(/(?:建议)?一句话：([^\n]+)/)?.[1] ??
      block.match(/具体实现：([^\n]+)/)?.[1] ??
      "已通过公开仓库材料核验。"
    const reason =
      block.match(/判断：([^\n]+)/)?.[1] ??
      block.match(/具体实现：([^\n]+)/)?.[1] ??
      "符合收录门槛。"
    const links = [...block.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)].map(
      ([, label, link]) => ({ label, link }),
    )
    candidates.push({ title, url, key, block, summary: plain(summary), reason: plain(reason), suggested, linked, links })
    candidateKeys.add(key)
    existingUrls.add(key)
  })
}

function inferConcepts(candidate) {
  const concepts = new Set()
  for (const label of [...candidate.linked, ...candidate.suggested]) {
    concepts.add(labelToSlug.get(label) ?? label)
  }
  const text = `${candidate.key} ${candidate.block}`.toLowerCase()
  const rules = [
    [/哈基米|hajimi|hachimi|hakimi/, "Hajimi"],
    [/奶龙|nailong/, "Nailong"],
    [/奶蛙|牛来|naiwa|niulai/, "NiulaiNaiwa"],
    [/曼波|manbo|mambo/, "Manbo"],
    [/耄耋|maodie/, "Maodie"],
    [/大狗|dagou/, "DagouJiao"],
    [/弱智吧|ruozhiba/, "Ruozhiba"],
    [/原神|genshin/, "GenshinLaunch"],
    [/塔菲|taffy/, "Taffy"],
    [/吗喽|sbti|monkeyapp/, "WorkerMemes"],
    [/大香蕉|big-banana/, "BigBanana"],
    [/鸡排哥|jipai/, "JipaiBro"],
    [/电棍|otto/, "Otto"],
    [/丁真|dingzhen/, "DingZhenUniverse"],
    [/吉吉国|祖安|贴吧对线/, "Jijiguo"],
    [/桌宠|desktop.pet|deskpet/, "MemeDesktopPets"],
    [/astrbot|nonebot|telegram bot|群聊/, "MemeBots"],
    [/tts|语音|配音|音声/, "VoiceSynthesisShitpost"],
    [/编码|encoder|translator/, "MemeCodecs"],
    [/游戏|game|roguelike|minecraft|mod/, "BrainrotGames"],
    [/档案|语料|dataset|\.json/, "MemeArchives"],
  ]
  rules.forEach(([pattern, slug]) => pattern.test(text) && concepts.add(slug))
  return [...concepts].filter(Boolean)
}

await mkdir(repoDir, { recursive: true })
await mkdir(conceptDir, { recursive: true })
let created = 0
const usedConcepts = new Set()

for (const candidate of candidates) {
  const meta = snapshot[candidate.key] ?? {}
  const [owner, repo] = (meta.fullName ?? candidate.key).split("/")
  let slug = existingByUrl.get(candidate.key) ?? repo.replace(/[^a-z0-9._-]/gi, "-")
  if (!existingByUrl.has(candidate.key) && usedSlugs.has(slug.toLowerCase())) {
    slug = `${owner}--${slug}`
  }
  usedSlugs.add(slug.toLowerCase())
  const concepts = inferConcepts(candidate)
  concepts.forEach((concept) => usedConcepts.add(concept))
  const evidence = candidate.links
    .filter((item, index, all) => all.findIndex((other) => other.link === item.link) === index)
    .slice(0, 4)
    .map((item) => `- [${item.label}](${item.link})`)
    .join("\n")
  const content = `---
title: "${repo.replace(/"/g, "'")}"
type: repo
url: ${candidate.url}
tags: [repo]
concepts: [${concepts.join(", ")}]
status: accept
language: ${meta.language ?? "未标注"}
stars: ${meta.stars ?? 0}
forks: ${meta.forks ?? 0}
last_checked: ${checkedAt}
last_updated: ${checkedAt}
---

# ${repo}

## 摘要

${candidate.summary}

## 为什么收录

${candidate.reason}

## 证据

${evidence || `- [GitHub repo](${candidate.url})`}

## 关联

${concepts.map((concept) => `- ${concept}`).join("\n")}
`
  await writeFile(path.join(repoDir, `${slug}.md`), content)
  created += 1
}

for (const slug of usedConcepts) {
  const file = path.join(conceptDir, `${slug}.md`)
  try {
    await readFile(file)
    continue
  } catch {}
  const [title, definition] = conceptDefinitions[slug] ?? [slug, "由具体公开 GitHub 项目反推形成的中文互联网工程化支系。"]
  await writeFile(
    file,
    `---
title: "${title}"
type: concept
tags: []
repos: []
last_updated: ${checkedAt}
---

# ${title}

## 定义

${definition}

## 抽象机制

梗对象不是装饰，而是直接进入项目的输入、输出、交互或状态机。

## 相关项目

由前端根据项目 frontmatter 的 concepts 自动聚合。
`,
  )
}

console.log(`Ingested ${created} accepted repositories; ensured ${usedConcepts.size} concepts.`)
