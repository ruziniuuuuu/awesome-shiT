# Awesome ShiT 维护协议

这个仓库不是传统意义上的 awesome list。它是一个面向 GitHub 的中文互联网抽象 repo 索引：认真地收集不正经的东西，尤其是烂梗、抽象文化、恶俗玩具、低技术力高节目效果项目，以及少量被公开材料支持的真实屎山样本。

核心任务很简单：在 GitHub 上找大便，把值得留档的大便整理成可互链、可发布、可继续生长的 Markdown 知识库。

这里的“抽象”不是泛泛的 weird、brainrot、AI 玄学、互联网热词或“看起来有点怪”。默认语境是中国互联网恶俗烂梗与中文抽象文化：梗必须有明确的中文公共语境、恶俗传播痕迹、人物/事件/话术锚点，或 repo 本身把这种语境做成工具、档案、玩具、语言、bot、表情包系统。热度、stars、工程完整度、AI 技术栈、海外 meme 属性都不能单独构成收录理由。

## 语言原则

- 本项目面向中文读者和中文互联网语境，默认使用简体中文写作。
- 页面标题、说明、分类名展示、维护记录和面向用户的操作说明优先使用中文。
- repo 名、GitHub owner、URL、代码术语、Quartz/Obsidian/Markdown 等工具名保持原文。
- `[[WikiLinks]]` target、文件名和 frontmatter 字段名保持稳定，不为了翻译而频繁重命名。
- 必要时使用中文展示名加稳定 target，例如 `[[DingZhenUniverse|丁真宇宙]]`。

## 仓库结构

```text
README.md            # 公开入口：短列表，适合 GitHub 直接阅读。
wiki/                # 未来的双向链接知识层，也是 Quartz/Obsidian content source。
  index.md           # 所有 wiki 页面目录。
  log.md             # 只追加的操作记录。
  repos/             # 每个 GitHub repo 一页。
  concepts/          # 梗、人物、抽象类型、技术形态、事件等概念页。
raw/                 # 可选：repo README、metadata、issue 等证据快照。
graph/               # 可选：生成的图谱文件。
```

当前仓库可以只维护 `README.md` 和 `AGENTS.md`。当用户要求做成完整双链库、接入 Obsidian 或接入 Quartz 时，再创建 `wiki/` 结构。

## 核心规则

- 只收录公开 GitHub repo，不收集私密材料、个人隐私、泄露数据或无法验证来源的截图传言。
- 评价可以玩梗，但事实描述必须可追溯到 repo 本身、README、release、issue、commit、GitHub metadata 或其他公开来源。
- 不要把“我觉得烂”写成事实。可以写“节目效果来自 X”“抽象点在 Y”“屎山点被 Z 公开材料支持”。
- `README.md` 保持短、密、可扫读；长解释放进 `wiki/`。
- `wiki/` 里的页面使用 `[[WikiLinks]]` 做内部引用。面向 GitHub/Quartz 的关键交叉引用同时保留普通 Markdown 链接。
- 只要新增或修改 `wiki/` 内容，就同步更新 `wiki/index.md` 和 `wiki/log.md`。
- 除非用户明确要求，不要引入 Quartz、Node 依赖、Python scripts 或 GitHub Actions。

## 收录标准

优先收录：

- 中文互联网抽象梗 repo：奶龙、哈基米、丁真、牢大、坤、张维为表情包等。
- 梗驱动工具：编码器、检测器、生成器、bot 插件、小游戏、语音合成、表情包检索。
- 玩具编程语言、整活编译器、赛博方言、逆天 DSL。
- 公开 repo 中有明确材料支持的工程屎山、公司式抽象管理样本或技术事故纪念碑。
- 具有“低创但难绷”“严肃实现荒谬目标”“README 本身就是节目”的项目。

收录硬门槛：

- 必须能说清“它对应哪个中文互联网恶俗烂梗 / 抽象语境 / 公开屎山事件”。如果只能说“很 weird”“很 brainrot”“有 AI”“很赛博”“星很多”，不够。
- repo 名、README、description、主要功能或素材中至少一个要直接体现梗点；不能靠维护者脑补、外部联想或宽泛解释强行归类。
- 一句话收录理由必须包含具体梗对象和具体实现方式，例如“用 YOLO 检测奶龙表情包”“把哈基米做成编码器”“把张维为表情包做 embedding 检索”。写不出这种句子，默认不收。
- 对边界样本采取保守策略：宁可输出为 `maybe` 等用户拍板，也不要为了“新”“热”“技术完整”直接入坑。
- 除非用户明确要求扩展国际分支，不收纯海外 brainrot / skibidi / Italian brainrot / 泛英语 meme repo；它们最多作为对照资料，不进入主榜。
- 除非 repo 本身强绑定中文恶俗梗，不收泛 AI 玄学、赛博占卜、通用生成器、通用播放器、通用自动化工具。技术栈再认真也不能替代梗语境。

不要收录：

- 主要目标是网暴、开盒、骚扰或人肉的 repo。
- 恶意软件、钓鱼、诈骗、绕过付费服务或明显违法内容。
- 只有截图、传闻或二手转述，无法定位到公开 GitHub repo 的材料。
- 纯普通项目，只是代码质量差但没有公共语境、梗语境或可说明的抽象价值。
- 只有海外 meme / generic brainrot / skibidi 语境，缺少中文互联网恶俗传播链路的 repo。
- 只有“AI + 玄学 / 赛博 / prompt / agents / skills”包装，缺少中文烂梗对象或恶俗语境的 repo。
- 只有技术功能或产品功能，但“抽象点”需要靠维护者长篇解释才能成立的 repo。

反例：

- `Brainrotlang/brainrot`、`awesome-italian-brainrot`、`brainrot.js` 这类纯海外 brainrot 项目，除非用户明确开国际 brainrot 分支，否则不配进主榜。
- `FANzR-arch/Numerologist_skills` 这类 AI 玄学工程化项目，虽然“赛博半仙”听起来抽象，但没有强绑定中文恶俗烂梗，不配进主榜。

## 链接规则

在 `wiki/` 中，每个项目页面应链接到相关概念页面；每个概念页面应反向列出相关项目页面。这样 Obsidian、Quartz backlinks 和普通阅读都能工作。

推荐写法：

```markdown
[[NailongDetection]] ([GitHub](https://github.com/search?q=nailong&type=repositories)) 属于 [[Nailong]] 与 [[MemeDetection]] 的交叉样本。
```

内部链接规则：

- 项目页面的链接 target 使用稳定 repo 名，例如 `[[hajimi-encoder]]`。
- 概念页面的链接 target 使用稳定英文或拼音式 slug，例如 `[[Hajimi]]`、`[[Nailong]]`、`[[DingZhenUniverse]]`。
- 中文展示名用 alias，例如 `[[DingZhenUniverse|丁真宇宙]]`。
- 不要频繁重命名已有页面；必须重命名时同步改所有 `[[WikiLinks]]`。

## README 条目格式

`README.md` 的条目保持一行一个 repo：

```markdown
- [repo-name](https://github.com/owner/repo): 一句话说明它为什么是大便。
```

一句话说明应包含至少一个具体点：做了什么、使用了什么梗、节目效果在哪里。不要只写“很抽象”“太逆天”。

## 项目页面格式

当 `wiki/` 存在时，每个项目页面使用这个最小格式：

```yaml
---
title: "repo-name"
type: repo
url: https://github.com/owner/repo
tags: []
concepts: []
last_checked: YYYY-MM-DD
last_updated: YYYY-MM-DD
---
```

正文：

```markdown
## 摘要

## 为什么是大便

## 证据

## 关联

## 备注
```

`## 证据` 中优先放 repo README、description、release、issue、commit 或官方页面的简短引用/转述，并链接到来源。

## 概念页面格式

```yaml
---
title: "概念展示名"
type: concept
tags: []
repos: []
last_updated: YYYY-MM-DD
---
```

正文：

```markdown
## 定义

## 抽象机制

## 相关项目

## 相关概念
```

概念页负责解释梗、人物、事件、技术形态或抽象类型，不要把每个 repo 的长描述都堆进去。

## 原子操作

核心生产链路是：

```text
找屎 -> 酝酿 -> 入坑 -> 验屎
```

### 找屎

触发方式：用户说“找屎”“找 repo”“找大便”“source <梗名>”“帮我补充 awesome-shit”等。

目标：发现候选，不直接入库。

1. 先读 `README.md`，避免重复候选。
2. 如果 `wiki/index.md` 存在，也读它，确认已有项目页面和概念页面。
3. 在 GitHub 搜索候选 repo。可从这些关键词扩展：`奶龙`、`nailong`、`哈基米`、`hajimi`、`丁真`、`蔡徐坤`、`ikun`、`牢大`、`otto`、`张维为`、`抽象`、`逆天`、`发病`、`表情包`、`赛博`。
4. 输出候选列表：repo URL、梗点、为什么可能是大便、建议继续看的理由。
5. 不在这个阶段修改 `README.md` 或 `wiki/`。

### 酝酿

触发方式：用户给出候选 repo，或要求“酝酿一下这些项目”。

目标：把候选变成可入库判断。

1. 打开候选 repo，检查 README、description、stars、最近更新时间、主要文件和是否仍可访问。
2. 先做“中文恶俗烂梗锚点”判断：它是不是强绑定中文互联网抽象梗、恶俗人物/事件/话术，或公开材料支持的中文技术屎山样本。
3. 判断它属于哪些概念，例如 `[[Hajimi]]`、`[[Nailong]]`、`[[DingZhenUniverse]]`、`[[MemeDetection]]`。
4. 写出一句话收录理由，必须包含具体点：做了什么、使用了什么梗、节目效果在哪里。
5. 如果一句话理由只能靠“weird / brainrot / AI / 赛博 / 抽象”这类泛词支撑，必须给 `reject` 或 `maybe`，不能给 `accept`。
6. 给出 `accept`、`reject` 或 `maybe`。
7. 对 `accept` 项给出建议的 `README.md` 条目和 wiki links；对 `reject` / `maybe` 项说明跳过原因。

### 入坑

触发方式：用户确认收录，或明确说“入坑”“收了”“写进 README/wiki”。

目标：正式写入仓库。

1. 只处理已经酝酿为 `accept` 的 repo。
2. 更新 `README.md`，保持一行一个 repo。
3. 如果 `wiki/` 存在，创建或更新项目页面和相关概念页面。
4. 如果 `wiki/index.md` 存在，同步登记新增或修改的页面。
5. 如果 `wiki/log.md` 存在，追加：`## [YYYY-MM-DD] ingest | repo-name`。
6. 汇报 changed files、新增条目、新增或更新的概念链接。

### 验屎

触发方式：`health`、`lint`、`验屎`、用户要求检查双链结构。

目标：检查库的卫生状况，除非用户要求修复，否则只报告 findings。

检查：

- `README.md` 是否有重复 repo URL。
- `README.md` 条目是否是有效 Markdown link。
- `wiki/index.md` 是否收录所有 `wiki/repos/` 和 `wiki/concepts/` 页面。
- `[[WikiLinks]]` 是否指向存在的 page。
- 项目页面是否有 `url`、`last_checked` 和至少一个相关概念。
- 概念页面是否有反向 repo 列表。

## 发布说明

未来接入 Quartz + GitHub Pages 时：

- 把 `wiki/` 作为 Quartz content directory。
- 不要把 `wiki/` 复制到 `content/` 后再维护两份。
- Quartz 命令应显式指定 content dir，例如 `npx quartz build -d wiki`。
- GitHub Pages workflow 只负责构建和发布，不改变 wiki 内容。

Obsidian 使用方式：打开 `wiki/` 目录，而不是 repo root。

## 写作风格

- 默认使用简体中文。
- 语气可以抽象，但信息结构要清楚。
- 保留 repo 名、GitHub owner、技术名和梗名原文。
- 避免长篇输出；每个 repo 的核心判断应能被快速扫读。
- 可以写“难绷”“节目效果”“大便味很正”，但要给出具体依据。
