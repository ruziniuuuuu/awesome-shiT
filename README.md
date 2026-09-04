# GitHub 中文史料馆

一座用公开 GitHub repo 当实物证据的中文互联网数字档案馆。

[在线进入史料馆](https://ruziniuuuuu.github.io/awesome-shiT/)

它保存中文互联网文化如何被工程化：从语录、音效盒和小游戏，到编码器、识别模型、桌宠与 Agent Skill。事实描述必须能回到 repo、README、源码或 GitHub metadata；馆员批注可以有态度，但不能把网传说法写成史实。

## 史料

- `wiki/repos/`：正式入馆的 repo 史料，一项一页。
- `wiki/concepts/`：人物、梗与技术支系的背景材料。
- `raw/`：仍在酝酿的田野调查报告与一手材料索引。
- `archive/github-snapshot.json`：GitHub metadata 离线核验快照。
- `archive/cultural-events.json`：文化传播节点；无可靠出处时必须标记“待考”。

这些 Markdown 是唯一内容源。前端只负责把它们编译成编年史，不再维护双向 Wiki 页面。

## 本地运行

```bash
npm run build
npm run preview
```

本机打开 <http://localhost:8090>；服务默认监听 `0.0.0.0`，同一内网可使用主机局域网 IP 访问。

## 维护

```bash
npm run historian # 用本地 Ollama 小模型搜索并初筛最近 21 天的新史
npm run ingest    # 把研究报告中的 accept 项编入正式史料
npm run snapshot # 更新 GitHub metadata 快照
npm run check    # 检查重复 URL 与失效支系
```

`.github/workflows/historian.yml` 是每日“找史官”：北京时间 09:23 在 GitHub Actions 中运行免费的本地 `qwen3:1.7b`，只使用仓库自带的 `GITHUB_TOKEN` 搜索公开 repo，并把结果开成 PR 供人工复核。它不会把小模型的判断直接推入 `main`。

收录协议见 [`AGENTS.md`](AGENTS.md)。
