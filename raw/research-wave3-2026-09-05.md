# 2026-09-05 第三轮高强度 GitHub 史料检索与酝酿

> 检索日：2026-09-05（Asia/Shanghai）  
> 范围：仅公开 GitHub repo；事实取 repo description、README、公开源码与 GitHub REST metadata。  
> 状态：`accept` 表示已达到收录硬门槛但尚未入库；`maybe` 等维护者拍板；`reject` 留作边界反例。  
> 日期：下文“创建 / 更新”均为 GitHub metadata 日期，不冒充梗的文化起源日期。

## 方法、去重与总览

- 已逐 URL 对照 `wiki/repos/` 的 61 份正式史料以及 `raw/research-2026-09-04.md`、`raw/research-expanded-2026-09-04.md`；本报告 40 个 repo 均为新增候选。
- 检索重心放在 2024–2026 年，先要求 repo 本身出现明确的中文梗对象，再核验梗是否进入数据、代码、交互、素材或工作流；只在标题里谐音、普通游戏工具、泛 AI 套壳均降级或拒绝。
- 共酝酿 **40 个 repo：28 accept / 8 maybe / 4 reject**。
- 可新建的当代支系：**原神圣经/米学长（4）**、**鸣潮菲比表情包（4）**、**三角洲摸金/曼德尔砖（3）**、**周礼体（1）**、**当代热梗档案与动态采集（5）**、**发疯文学再工程化（4）**、**电子木鱼/赛博仪式（3）**。
- 既有支系可补强：**牛来视频生成**、**科目三素材档案**、**恐龙扛狼游戏生成**；黑神话、绝区零方向搜到的近似项没有过硬门槛，不为“新”而硬收。

## Accept：原神圣经、米学长与“好想玩云原神”

### 1. `Hikari31768/astrbot_plugin_genshinimpact` — accept

- 史料：[repo / README](https://github.com/Hikari31768/astrbot_plugin_genshinimpact)；[metadata](https://api.github.com/repos/Hikari31768/astrbot_plugin_genshinimpact)。创建 / 更新：**2025-12-09 / 2025-12-09**。
- 具体实现：AstrBot 检测群聊中的“原神”关键词后，自动回复“你说得对，但是《原神》……”圣经文本。
- 建议支系：`GenshinBible`、`MihoyoMeme`、`ChatBot`。一句话：`谁在群里提到“原神”，机器人就自动请出“你说得对”圣经完成护教。`

### 2. `1824239290/maibot_plugin_genshinimpact` — accept

- 史料：[repo / README](https://github.com/1824239290/maibot_plugin_genshinimpact)；[metadata](https://api.github.com/repos/1824239290/maibot_plugin_genshinimpact)。创建 / 更新：**2026-07-26 / 2026-07-26**。
- 具体实现：将原神圣经移植到 MaiBot，内置 29 条回复，支持群白名单、随机抽取和命中后拦截普通回复。
- 建议支系：`GenshinBible`、`MihoyoMeme`、`ChatBot`。一句话：`把 29 条米学长圣经接进 MaiBot，关键词一命中，正常对话当场让位给护教语录。`

### 3. `posuidexin/genshin` — accept

- 史料：[repo / README](https://github.com/posuidexin/genshin)；[metadata](https://api.github.com/repos/posuidexin/genshin)。创建 / 更新：**2026-05-12 / 2026-08-09**。
- 具体实现：把原神抽象护教话术做成群聊 Skill，收录“648、跳剧情、文化输出、海灯节”等 19 个梗档案，并按语义触发。
- 建议支系：`GenshinBible`、`MihoyoMeme`、`AgentSkill`。一句话：`把 648、跳剧情和文化输出等 19 套米学长话术整理成能语义触发的群聊 Skill。`

### 4. `IPF-Sinon/astrbot_plugin_cloud_genshin` — accept

- 史料：[repo / README](https://github.com/IPF-Sinon/astrbot_plugin_cloud_genshin)；[metadata](https://api.github.com/repos/IPF-Sinon/astrbot_plugin_cloud_genshin)。创建 / 更新：**2026-06-07 / 2026-06-14**。
- 具体实现：把“啊？云朵……好想玩原神”做成 AstrBot 插件，提供 11 段随机变体及图片、语音、视频回复。
- 建议支系：`CloudGenshin`、`GenshinBible`、`ChatBot`。一句话：`群聊见到云朵就触发“好想玩原神”，还随机附送图、声、视频三种病情。`

## Accept：鸣潮菲比表情包支系

### 5. `Kato-Shoko705/Phoebe-Hub` — accept

- 史料：[repo / README](https://github.com/Kato-Shoko705/Phoebe-Hub)；[metadata](https://api.github.com/repos/Kato-Shoko705/Phoebe-Hub)。创建 / 更新：**2026-06-17 / 2026-09-04**。
- 具体实现：将《鸣潮》菲比二创表情包整理成数据仓库和在线检索站，形成可继续投稿和调用的素材底座。
- 建议支系：`PhoebeMeme`、`WutheringWaves`、`MemeArchive`。一句话：`给鸣潮菲比二创表情包修了一座可检索、可继续进货的数据仓库。`

### 6. `timetetng/astrbot_plugin_phoebehub` — accept

- 史料：[repo / README](https://github.com/timetetng/astrbot_plugin_phoebehub)；[metadata](https://api.github.com/repos/timetetng/astrbot_plugin_phoebehub)。创建 / 更新：**2026-06-27 / 2026-07-20**。
- 具体实现：将 Phoebe Hub 做成 AstrBot 的“啾比 / 搜比 / 传比”插件，并能把群友投稿自动提交为 GitHub PR。
- 建议支系：`PhoebeMeme`、`WutheringWaves`、`ChatBot`。一句话：`用“啾比、搜比、传比”在群里取用菲比表情，投稿还能自动变成 GitHub PR。`

### 7. `MimoKit/PhoebeHubUID` — accept

- 史料：[repo / README](https://github.com/MimoKit/PhoebeHubUID)；[metadata](https://api.github.com/repos/MimoKit/PhoebeHubUID)。创建 / 更新：**2026-07-11 / 2026-08-14**。
- 具体实现：将菲比表情包接入 GsCore，实现“啾比 / 搜比”触发、模糊检索、缓存与 AI 工具调用。
- 建议支系：`PhoebeMeme`、`WutheringWaves`、`MemeSearch`。一句话：`把菲比表情包变成 GsCore 可模糊搜索、可缓存、还能被 AI 主动调用的工具。`

## Accept：三角洲摸金与曼德尔砖

### 8. `Cori-anba/MandelBrick` — accept

- 史料：[repo / README](https://github.com/Cori-anba/MandelBrick)；[metadata](https://api.github.com/repos/Cori-anba/MandelBrick)。创建 / 更新：**2026-07-28 / 2026-08-29**。
- 具体实现：仿制《三角洲行动》官方 Relink 彩蛋站，把“曼德尔砖·算力即基石”包装成企业发布会式概念网站。
- 建议支系：`MandelBrick`、`DeltaForceMeme`、`ParodyWebsite`。一句话：`把曼德尔砖一本正经包装成“算力基石”，给游戏道具开了一场企业级发布会。`

### 9. `panedioic/delta-force-loot-simulator` — accept

- 史料：[repo / README](https://github.com/panedioic/delta-force-loot-simulator)；[metadata](https://api.github.com/repos/panedioic/delta-force-loot-simulator)。创建 / 更新：**2025-04-16 / 2026-07-13**。
- 具体实现：把《三角洲行动》“舔包、主播清图后炒菜”的社群话术做成限时舔包模拟器。
- 建议支系：`DeltaForceMeme`、`LootSimulator`、`GamingSlang`。一句话：`把主播清完图后的“舔包炒菜”压成倒计时小游戏，限时决定这锅能不能出红。`

### 10. `Almango/SimulateMoki-sjzxd` — accept

- 史料：[repo / README](https://github.com/Almango/SimulateMoki-sjzxd)；[metadata](https://api.github.com/repos/Almango/SimulateMoki-sjzxd)。创建 / 更新：**2025-10-08 / 2026-06-04**。
- 具体实现：将烽火地带的“摸金、出红、全红高爆”体验做成 H5 模拟器。
- 建议支系：`DeltaForceMeme`、`LootSimulator`、`GamingSlang`。一句话：`不用进烽火地带也能 H5 摸金，在浏览器里反复体验出红与全红高爆。`

## Accept：周礼体与当代梗知识库

### 11. `Aspirin0000/zhouli-translator` — accept

- 史料：[repo / README](https://github.com/Aspirin0000/zhouli-translator)；[提示词源码](https://github.com/Aspirin0000/zhouli-translator/blob/main/lib/prompt.ts)；[metadata](https://api.github.com/repos/Aspirin0000/zhouli-translator)。创建 / 更新：**2026-06-22 / 2026-09-03**。
- 具体实现：README 明称“中文梗文案生成器”，用 DeepSeek 双向生成和解释“大周礼时代”翻译腔，并提供 Web、API、图片导出与 Skill。
- 建议支系：`ZhouliStyle`、`MemeTranslator`、`AITextGenerator`。一句话：`把鸡毛蒜皮先升格成大周礼时代劝诫，再一键释礼翻回人话。`

### 12. `MonloHua/geng-skill` — accept

- 史料：[repo / README](https://github.com/MonloHua/geng-skill)；[梗库 JSON](https://github.com/MonloHua/geng-skill/blob/master/gengku.json)；[metadata](https://api.github.com/repos/MonloHua/geng-skill)。创建 / 更新：**2026-05-31 / 2026-08-18**。
- 具体实现：将 933 个中文网络梗做成可查询 Skill/JSON，并按 B 站检索视频播放量分级，含 2024、2025、2026 当代条目。
- 建议支系：`MemeArchive`、`MemeSearch`、`BilibiliCulture`、`AgentSkill`。一句话：`把 933 个中文梗做成 Agent 速查库，还用 B 站前十视频播放量给梗评段位。`

### 13. `Frog1205/hot-meme-dict` — accept

- 史料：[repo](https://github.com/Frog1205/hot-meme-dict)；[结构化梗数据](https://github.com/Frog1205/hot-meme-dict/blob/main/data/memes.json)；[爬虫源码](https://github.com/Frog1205/hot-meme-dict/blob/main/crawler/crawl.js)；[metadata](https://api.github.com/repos/Frog1205/hot-meme-dict)。创建 / 更新：**2026-05-24 / 2026-05-24**。
- 具体实现：中文热梗聚合前后端与 B 站爬虫，数据记录 `City不City`、甲亢哥、证件在这呢、他们朝我扔粑粑等梗的 BV、作者、热度与时间。
- 建议支系：`MemeArchive`、`MemeCrawler`、`CityBuCity`、`BilibiliGhostEdit`。一句话：`把 City不City 等新梗连同 BV、作者、热度和时间一起抓进结构化词典。`

### 14. `NoNormalCreeper/meme-ai` — accept

- 史料：[repo / README](https://github.com/NoNormalCreeper/meme-ai)；[标签与提示词源码](https://github.com/NoNormalCreeper/meme-ai/blob/main/next-app/api.ts)；[metadata](https://api.github.com/repos/NoNormalCreeper/meme-ai)。创建 / 更新：**2025-11-25 / 2025-12-24**。
- 具体实现：用 DeepSeek 给中文文本贴具体梗词标签，提示词与标签直接覆盖“唐氏表演法则”等中文梗，不是泛文本分类。
- 建议支系：`MemeClassifier`、`TangStyle`、`AITextAnalysis`。一句话：`让 DeepSeek 给一句人话判定具体中了哪个中文梗，连“唐氏表演法则”都有专门标签。`

### 15. `Nayukiiii/astrbot_plugin_bili_slang` — accept

- 史料：[repo / README](https://github.com/Nayukiiii/astrbot_plugin_bili_slang)；[提炼与审核源码](https://github.com/Nayukiiii/astrbot_plugin_bili_slang/blob/main/main.py)；[metadata](https://api.github.com/repos/Nayukiiii/astrbot_plugin_bili_slang)。创建 / 更新：**2026-08-09 / 2026-08-11**。
- 具体实现：从 B 站游戏/鬼畜区排行抓高赞评论，仅提炼模型确知的短梗，经人工批准后再注入 AstrBot 群聊提示词。
- 建议支系：`BilibiliSlang`、`MemeLearningBot`。一句话：`让机器人巡 B 站热评学黑话，但必须经人类史官批准才准在群里开口。`

### 16. `ighti35/heybox_crawler` — accept

- 史料：[repo / README](https://github.com/ighti35/heybox_crawler)；[提炼源码](https://github.com/ighti35/heybox_crawler/blob/main/learn.py)；[metadata](https://api.github.com/repos/ighti35/heybox_crawler)。创建 / 更新：**2026-09-03 / 2026-09-04**。
- 具体实现：抓取小黑盒公开帖子与评论，用 DeepSeek 提炼热梗词条、用法、语气词、缩写和分圈说话方式，再生成 QQ Bot 人设片段。
- 建议支系：`GamingSlang`、`MemeLearningBot`。一句话：`把小黑盒当天帖子和评论蒸馏成游戏圈黑话词典，再喂给 QQ 机器人学会分圈说话。`

## Accept：发疯文学、短视频梗与玩具编程

### 17. `ming-14/O.o` — accept

- 史料：[repo](https://github.com/ming-14/O.o)；[核心源码](https://github.com/ming-14/O.o/blob/main/O.o.hpp)；[metadata](https://api.github.com/repos/ming-14/O.o)。创建 / 更新：**2025-02-04 / 2026-06-29**。
- 具体实现：把“尊嘟假嘟 / O.o”写成 C++ 双关 API，定义 `尊嘟`、`假嘟`类与 `尊嘟假嘟(bool)` 函数。
- 建议支系：`ZunDuJiaDu`、`MemeProgramming`、`CppToy`。一句话：`让“尊嘟假嘟”获得 C++ 类型系统认证，真假嘟终于可以进函数签名。`

### 18. `MisakaCirno/BuShiGeMen` — accept

- 史料：[repo](https://github.com/MisakaCirno/BuShiGeMen)；[Unity 素材与源码树](https://github.com/MisakaCirno/BuShiGeMen/tree/main/Assets)；[metadata](https://api.github.com/repos/MisakaCirno/BuShiGeMen)。创建 / 更新：**2024-09-15 / 2025-07-28**。
- 具体实现：Unity 工程把“不是，哥们？”梗图做成旋转交互玩具，仓库含梗图纹理、场景与 `RotateController.cs`。
- 建议支系：`BuShiGeMen`、`MemeGame`、`UnityToy`。一句话：`把“不是，哥们？”从静态梗图变成能亲手旋转观看的 Unity 质疑装置。`

### 19. `crazy985/ai_gen_game` — accept

- 史料：[repo](https://github.com/crazy985/ai_gen_game)；[梗分析器源码](https://github.com/crazy985/ai_gen_game/blob/main/src/core/services/meme_analyzer.py)；[metadata](https://api.github.com/repos/crazy985/ai_gen_game)。创建 / 更新：**2026-04-25 / 2026-04-25**。
- 具体实现：输入网络热梗后拆角色、动作、场景并生成 2D 游戏，仓库内已有“恐龙扛狼”跑酷成品；分析器目前强制走 mock，不能宣传成已接通 GPT。
- 建议支系：`KongLongKangLang`、`MemeGameGenerator`、`AIShovelware`。一句话：`把“恐龙扛狼”拆成角色动作场景再拼成跑酷游戏，只是所谓 AI 分析目前仍由 mock 顶班。`

### 20. `falafa/kemusan` — accept

- 史料：[repo / 素材文件](https://github.com/falafa/kemusan)；[metadata](https://api.github.com/repos/falafa/kemusan)。创建 / 更新：**2024-01-08 / 2024-01-08**。
- 具体实现：直接归档“科目三”短视频支系的完整版、慢速教学、讲解教学、激光人变体及 ZIP，不是驾考软件。
- 建议支系：`Kemusan`、`ShortVideoMeme`、`MemeArchive`。一句话：`把科目三完整版、慢教、讲解和激光人变体一起打包，留下短视频热舞的可下载标本。`

### 21. `liyupi/niulai-video-generator` — accept

- 史料：[repo / README](https://github.com/liyupi/niulai-video-generator)；[metadata](https://api.github.com/repos/liyupi/niulai-video-generator)。创建 / 更新：**2026-08-19 / 2026-09-01**。
- 具体实现：把任意故事转成《牛来》式粗糙低模、PPT 动作、无感情配音和无厘头台词动画，使用 Three.js、DeepSeek、TTS 与 FFmpeg，并提供“绊倒体”复刻模式。
- 建议支系：`Niulai`、`MemeVideoGeneration`。一句话：`一句故事经过低模牛、PPT 动作和无感情配音加工，自动长成一条牛来式抽象动画。`

### 22. `zhdbk3/CrazyLiteratureEncryption` — accept

- 史料：[repo / README](https://github.com/zhdbk3/CrazyLiteratureEncryption)；[核心源码](https://github.com/zhdbk3/CrazyLiteratureEncryption/tree/main/src/core)；[metadata](https://api.github.com/repos/zhdbk3/CrazyLiteratureEncryption)。创建 / 更新：**2024-09-17 / 2026-08-13**。
- 具体实现：以发疯文学为载体加密传输信息，实现 SHA-256 种子、分词映射和 GUI 加解密。
- 建议支系：`CrazyLiterature`、`MemeEncoding`。一句话：`把密文伪装成一大段发疯文学，表面精神状态堪忧，底层却能按种子无损解回。`

### 23. `caixiaoshun/DaiyuLM` — accept

- 史料：[repo / README](https://github.com/caixiaoshun/DaiyuLM)；[metadata](https://api.github.com/repos/caixiaoshun/DaiyuLM)。创建 / 更新：**2025-06-20 / 2025-11-27**。
- 具体实现：用 142 条林黛玉式对话微调 ChatGLM2-6B，生成婉转、含蓄、略带怨气的发疯文学回复，并提供 Gradio 流式对话。
- 建议支系：`CrazyLiterature`、`LinDaiyuStyle`。一句话：`拿 142 条林黛玉式阴阳语料微调 ChatGLM，让模型学会婉转而稳定地发疯。`

### 24. `yunmyuki/wenwen-jiezhu-ni` — accept

- 史料：[repo / README](https://github.com/yunmyuki/wenwen-jiezhu-ni)；[metadata](https://api.github.com/repos/yunmyuki/wenwen-jiezhu-ni)。创建 / 更新：**2026-05-26 / 2026-06-16**。
- 具体实现：把正常人话反向改写成“过度共情、过度理解、过度结构化”的刻板 AI 味发疯文学，含爆款短视频版与评论区疯版。
- 建议支系：`CrazyLiterature`、`AIToneParody`。一句话：`输入一句正常话，Skill 会把它膨胀成过度共情、层层分点的 AI 味发疯文学。`

## Accept：电子木鱼与赛博仪式

### 25. `liuwenji007/dsh-muyu` — accept

- 史料：[repo / README 与动图](https://github.com/liuwenji007/dsh-muyu)；[metadata](https://api.github.com/repos/liuwenji007/dsh-muyu)。创建 / 更新：**2026-08-19 / 2026-09-01**。
- 具体实现：DeepSeek Harness 右下角小肥鲸木鱼可敲头记功德，模型思考或流式输出时自动敲，功德按会话保存在本地。
- 建议支系：`ElectronicWoodfish`、`DeepSeekHarness`。一句话：`DeepSeek 一思考，小肥鲸就自动挨敲积功德，连击太狠头上还会起包。`

### 26. `1931840268/gongde-plus-plus` — accept

- 史料：[repo / README](https://github.com/1931840268/gongde-plus-plus)；[metadata](https://api.github.com/repos/1931840268/gongde-plus-plus)。创建 / 更新：**2026-07-26 / 2026-07-26**。
- 具体实现：把 Claude Code/Codex 工作状态转译为木鱼节拍和功德账本，含修行境界、朱印成就、分享卡，还可点按或长按木鱼审批 hook 权限。
- 建议支系：`ElectronicWoodfish`、`CodingAgentRitual`。一句话：`Agent 干活化成木鱼节拍，审批权限也不点按钮，改为短按准奏、长按驳回。`

### 27. `Polaris-Aeterna/cyber-shangxiang` — accept

- 史料：[repo / README](https://github.com/Polaris-Aeterna/cyber-shangxiang)；[metadata](https://api.github.com/repos/Polaris-Aeterna/cyber-shangxiang)。创建 / 更新：**2026-06-29 / 2026-06-29**。
- 具体实现：面向玄学编程的 Python 框架，给函数加 `@bless`、给 Web 服务挂“BUG 退散”中间件，并提供上香、求签、黄历、木鱼和功德 API。
- 建议支系：`CyberRitual`、`ElectronicWoodfish`。一句话：`给函数加 @bless、给服务挂 BUG 退散中间件，把上线玄学完整封装成 Python API。`

### 28. `huaiyuechusan/Muti-SBTI` — accept

- 史料：[repo / README](https://github.com/huaiyuechusan/Muti-SBTI)；[人格库源码](https://github.com/huaiyuechusan/Muti-SBTI/blob/main/src/data/libraries.ts)；[metadata](https://api.github.com/repos/huaiyuechusan/Muti-SBTI)。创建 / 更新：**2026-04-29 / 2026-08-04**。
- 具体实现：把 SBTI 扩展成抖音热梗人格测试，结果库含“主理人、邪修、如何呢又能怎、做完你的做你的、当个事儿办、来财、浪浪山小妖”等 65 个候选人格。
- 建议支系：`DouyinMemes`、`MemePersonalityTest`。一句话：`用 15 维测试在 65 个抖音人格里匹配你究竟是主理人、邪修还是浪浪山小妖。`

## Maybe：有锚点，但不宜自动进主榜

### 29. `Miorange02/astrbot_plugin_mhyBible` — maybe

- 史料：[repo / README](https://github.com/Miorange02/astrbot_plugin_mhyBible)；[metadata](https://api.github.com/repos/Miorange02/astrbot_plugin_mhyBible)。创建 / 更新：**2025-03-12 / 2025-03-13**。
- 具体实现：输入“原神”或“OP”后返回米学长圣经；梗与实现明确，但内容量小且与第 1 项高度同质。
- 建议支系：`GenshinBible`、`ChatBot`。一句话：`关键词触发米学长圣经的最小实现，能留档，但不必和功能更完整的同类一起占首页。`

### 30. `MeowAndy/fb-emoji` — maybe

- 史料：[repo / README](https://github.com/MeowAndy/fb-emoji)；[metadata](https://api.github.com/repos/MeowAndy/fb-emoji)。创建 / 更新：**2026-05-15 / 2026-05-15**。
- 具体实现：按“红温、无语、阴阳”等情绪分类菲比表情包，供 AstrBot 偷图插件导入；素材工程明确，但独立功能较弱。
- 建议支系：`PhoebeMeme`、`MemeDataset`。一句话：`把菲比表情按红温、无语、阴阳分桶，作为 Bot 的可导入弹药箱。`

### 31. `clen1/delta-blocker` — maybe

- 史料：[repo / README](https://github.com/clen1/delta-blocker)；[metadata](https://api.github.com/repos/clen1/delta-blocker)。创建 / 更新：**2026-03-29 / 2026-06-23**。
- 具体实现：针对“打三角洲红温、卸载后又重下”的场景，每 3 秒杀进程、监控下载目录并删除安装包；实现扎实，但红温只是使用语境而非作品主体。
- 建议支系：`HongWen`、`DeltaForce`、`SelfControlToy`。一句话：`为了防止三角洲红温后反复重装，它每三秒查进程，连下载回来的安装包也一并拿下。`

### 32. `zonghaoyuan/infiplot` — maybe

- 史料：[repo / README](https://github.com/zonghaoyuan/infiplot)；[metadata](https://api.github.com/repos/zonghaoyuan/infiplot)。创建 / 更新：**2026-06-02 / 2026-09-03**。
- 具体实现：README 用“AI 实时生成内容的《完蛋！我被美女包围了！》”定位多智能体实时剧情、角色、图像和配音；实现真实，但更像借作品范式解释通用产品。
- 建议支系：`WanDanGenre`、`InteractiveMovie`、`AIGame`。一句话：`让多智能体实时生成“完蛋式”互动影游，但梗更像产品比喻，尚不足以确认是主展品。`

### 33. `ALC888/MemeTrace` — maybe

- 史料：[repo](https://github.com/ALC888/MemeTrace)；[示例数据源码](https://github.com/ALC888/MemeTrace/blob/main/backend/app/sample_data.py)；[metadata](https://api.github.com/repos/ALC888/MemeTrace)。创建 / 更新：**2026-04-17 / 2026-08-23**。
- 具体实现：提供中文热词检测、表达聚类、来源归因、传播证据与 FastAPI/SQLite 管线；但“电子榨菜、遥遥领先、班味”的演示 URL 是占位数据，不能当史实。
- 建议支系：`MemeTrace`、`SourceAttribution`、`MemeArchaeology`。一句话：`这是一套很像史官工具的梗传播管线，但演示链接是假数据，暂时只能收工具不能收结论。`

### 34. `c4chuan/meme-collector` — maybe

- 史料：[repo](https://github.com/c4chuan/meme-collector)；[Skill](https://github.com/c4chuan/meme-collector/blob/main/SKILL.md)；[metadata](https://api.github.com/repos/c4chuan/meme-collector)。创建 / 更新：**2026-02-11 / 2026-02-11**。
- 具体实现：OpenClaw Skill 搜索最新中文热梗、语义去重并写入 Dify，目标每次 10–20 条；有实际操作脚本，但仓库没有随附已核验史料。
- 建议支系：`MemeCollector`、`AgentSkill`、`AutomatedArchiving`。一句话：`自动搜梗、去重、写入 Dify 的找史工具链已经有了，缺的是能随仓核验的史料产物。`

### 35. `Vincent-the-gamer/you-are-right` — maybe

- 史料：[repo / README](https://github.com/Vincent-the-gamer/you-are-right)；[随机抽取源码](https://github.com/Vincent-the-gamer/you-are-right/blob/main/get-meme/src/get_meme.rs)；[metadata](https://api.github.com/repos/Vincent-the-gamer/you-are-right)。创建 / 更新：**2024-01-02 / 2024-09-19**；仓库已归档。
- 具体实现：Rust/WASM 页面从内置语料随机展示发疯文学；梗锚点合格，但本质是语料播放器而非生成器，且已停止维护。
- 建议支系：`CrazyLiterature`、`CopypastaGenerator`。一句话：`用 Rust/WASM 随机端上发疯文学，能当早期标本，但不宜再叫“生成器”。`

### 36. `aidancedance/xhs-comic-illustrator` — maybe

- 史料：[repo / README](https://github.com/aidancedance/xhs-comic-illustrator)；[metadata](https://api.github.com/repos/aidancedance/xhs-comic-illustrator)。创建 / 更新：**2026-06-11 / 2026-08-14**。
- 具体实现：把正文做成 4–10 张小红书连环画梗图，按“钩子→铺垫→转折→金句→落点”组织横滑小剧场；平台格式具体，但没有绑定单一公共梗对象。
- 建议支系：`XiaohongshuMemeFormat`、`MemeImageGeneration`。一句话：`能把文章批量做成小红书横滑梗图，但它保存的是平台形式，还不是某条明确梗史。`

## Reject：检索命中，但硬门槛不够

### 37. `labi-xiaoxin/heiwukongTool` — reject

- 史料：[repo / README](https://github.com/labi-xiaoxin/heiwukongTool)；[metadata](https://api.github.com/repos/labi-xiaoxin/heiwukongTool)。创建 / 更新：**2024-09-29 / 2024-09-30**。
- 具体实现：JavaFX《黑神话：悟空》存档助手，虽包含“大圣残躯”等关卡存档，但没有把“广智救我”等传播梗写进功能。
- 建议：不建支系。一句话：`这是正常的黑神话存档工具，不因存了大圣残躯就自动成为中文梗史料。`

### 38. `Gin-7/dsh-pet-remielle` — reject

- 史料：[repo / README](https://github.com/Gin-7/dsh-pet-remielle)；[metadata](https://api.github.com/repos/Gin-7/dsh-pet-remielle)。创建 / 更新：**2026-08-15 / 2026-09-03**。
- 具体实现：将《绝区零》角色素材映射到任务状态的桌宠；README 只证明角色周边和状态可视化，没有中文公共梗或传播话术锚点。
- 建议：不建支系。一句话：`角色桌宠做得再完整，也不能把“某游戏角色”本身当成梗。`

### 39. `Starry-Night-Studio/nonebot-plugin-df-armor-repair-simulator` — reject

- 史料：[repo / README](https://github.com/Starry-Night-Studio/nonebot-plugin-df-armor-repair-simulator)；[metadata](https://api.github.com/repos/Starry-Night-Studio/nonebot-plugin-df-armor-repair-simulator)。创建 / 更新：**2025-05-31 / 2025-11-05**。
- 具体实现：《三角洲行动》护甲维修数值模拟器，没有摸金、出红、舔包、曼德尔砖等具体社群梗或抽象话术。
- 建议：不建支系。一句话：`它只是把护甲维修算明白了，尚未把三角洲玩家的抽象话术做成任何机制。`

### 40. `ykdeso/holyman-skills` — reject

- 史料：[repo / README](https://github.com/ykdeso/holyman-skills)；[metadata](https://api.github.com/repos/ykdeso/holyman-skills)。创建 / 更新：**2026-05-25 / 2026-08-08**。
- 具体实现：把 365 条 QQ/微信群复制粘贴文案蒸馏成“神人”人格；梗机制明确，但语料公开授权、来源可追溯性和隐私边界不足。
- 建议：不收录。一句话：`群聊神人语料很有节目效果，但来源与隐私边界说不清，不能拿不可追溯聊天记录冒充公共史料。`

## 建议的入坑顺序

1. 先建五条能立住的新支系：`GenshinBible`、`PhoebeMeme`、`DeltaForceMeme`、`ZhouliStyle`、`CrazyLiterature`。
2. “动态史官”优先收 `hot-meme-dict`、`geng-skill`、`astrbot_plugin_bili_slang`、`heybox_crawler`；它们分别保留结构化词条、热度、审核流和游戏社区话术。
3. 电子木鱼只选代表形态上首页：`dsh-muyu` 代表 Agent 桌宠，`gongde-plus-plus` 代表权限交互，`cyber-shangxiang` 代表玩具编程 API。
4. 原神圣经与菲比支系保留一个基础档案、一个 Bot 接口、一个检索工具即可；同质插件进支系详情，不在首页重复刷屏。
5. 首批建议入坑：`Phoebe-Hub`、`MandelBrick`、`zhouli-translator`、`hot-meme-dict`、`meme-ai`、`niulai-video-generator`、`CrazyLiteratureEncryption`、`dsh-muyu`、`Muti-SBTI`、`astrbot_plugin_cloud_genshin`。
