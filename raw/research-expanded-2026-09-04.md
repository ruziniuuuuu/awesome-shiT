# 2026-09-04 第二轮扩展史料检索与酝酿

> 检索日：2026-09-04（Asia/Shanghai）  
> 范围：仅公开 GitHub repo；事实优先取 repo description、README、源码与 GitHub REST metadata。  
> 状态：`accept` 表示达到收录硬门槛但尚未入库；`maybe` 等维护者拍板；`reject` 作为边界反例。  
> 日期：下文“创建 / 更新”均来自各 repo 的 GitHub API 快照，不冒充梗文化事件日期。

## 方法、去重与总览

- 已对照 `README.md`、`wiki/index.md`、`wiki/repos/` 与 `raw/research-2026-09-04.md`。本报告不重复现有正式条目，也不重复上一轮 14 个 `accept`。
- 以 2024–2026 新建 repo 为主，从 repo 的具体实现反推支系；2023 仅保留 `弱智吧` 和 `原神启动` 的源头节点。
- 共酝酿 **40 个 repo：37 accept / 2 maybe / 1 reject**。
- 可以立即形成独立支系：**曼波（4）**、**耄耋/哈气（7）**、**大狗叫（6）**、**牛来/奶蛙（6）**、**弱智吧再工程化（4）**、**原神启动（3）**、**V 圈塔菲抽象（3）**、**打工人吗喽/SBTI（2）**。
- 单点但足够标志性的“待成支系”：**大香蕉恶搞程序**、**鸡排哥 Skill**。

## Accept：曼波配音与曼波语

### 1. `Tsukimisaka/MamboTTS`

- 史料：[repo / README](https://github.com/Tsukimisaka/MamboTTS)；[metadata](https://api.github.com/repos/Tsukimisaka/MamboTTS)。创建 **2026-06-30**，更新 **2026-09-04**。
- 具体实现：README 明指 B 站/抖音“曼波讲故事”场景；Windows 本地 GPT-SoVITS 客户端支持长文切句、0.1–3.0 倍速、历史记录、约 8.2GB 引擎自动下载和 Premiere UXP 面板。
- 判断：**accept**。建议支系：`曼波`、`鬼畜配音生产线`。一句话：`为“曼波讲故事”搭了一整套本地 GPT-SoVITS 工作站，连 8.2GB 引擎和 Premiere 面板都安排了。`

### 2. `zoffyultraman/astrbot_plugin_manbo-tts`

- 史料：[repo / README](https://github.com/zoffyultraman/astrbot_plugin_manbo-tts)；[metadata](https://api.github.com/repos/zoffyultraman/astrbot_plugin_manbo-tts)。创建 **2026-02-27**，更新 **2026-08-21**。
- 具体实现：AstrBot 用 `/manbo` 生成曼波语音，支持速度、自定义 API、MD5 缓存与列表；仓库自带“我去，不早说”音频样本。
- 判断：**accept**。建议支系：`曼波`、`群聊 Bot`。一句话：`把“我去，不早说”式曼波配音接进 AstrBot，群里一句 /manbo 就能生成、缓存并回查。`

### 3. `xmimu/manbo-tts`

- 史料：[repo / README](https://github.com/xmimu/manbo-tts)；[metadata](https://api.github.com/repos/xmimu/manbo-tts)。创建 **2026-02-28**，更新 **2026-09-02**。
- 具体实现：Tauri + Vue 3 + TypeScript + Rust 的跨平台曼波 TTS 桌面端，支持 MP3/WAV、语速、历史记录和 MiloraAPI。
- 判断：**accept**。梗是产品唯一音色与目标，不是换皮。建议支系：`曼波`、`梗语音合成`。一句话：`把曼波配音做成跨平台 Tauri 客户端，输入文案即可出音频，还能调速翻历史。`

### 4. `TrainerPikachu/Manbonese`

- 史料：[repo](https://github.com/TrainerPikachu/Manbonese)；[核心源码](https://github.com/TrainerPikachu/Manbonese/blob/main/index.html)；[metadata](https://api.github.com/repos/TrainerPikachu/Manbonese)。创建并更新于 **2025-10-25**。
- 具体实现：页面把 UTF-8 位编码成“曼/波”字符并实时可逆解码，title 与核心函数都直接写“曼波编码器”。
- 判断：**accept**。建议支系：`曼波`、`梗编码器`。一句话：`把 UTF-8 二进制压成满屏“曼”和“波”，看似彻底失智，实际还能无损解码。`

## Accept：耄耋、哈气与老吴

这一支在 2026 年已跨越游戏、Agent Pet、Bot、模型检测和 Minecraft Mod。建议用 `动物抽象新纪元` 作上位支系，再把 `耄耋/哈气` 与 `大狗叫` 分开。

### 5. `Uzi-create/maodie_pet`

- 史料：[repo / README](https://github.com/Uzi-create/maodie_pet)；[metadata](https://api.github.com/repos/Uzi-create/maodie_pet)。创建并更新于 **2026-09-02**。
- 具体实现：圆头耄耋 Windows 桌宠包含哈气、蜘蛛爬、阴阳气泡，并读取 Codex token 数据做“老吴查账”。
- 判断：**accept**。梗动作和 Agent 用量被真正接入。建议支系：`耄耋`、`Agent 桌宠潮`。一句话：`让圆头耄耋趴在桌面哈气、蜘蛛爬，还会读取 Codex token 进行“老吴查账”。`

### 6. `generalgarnet/maodie-vs-dump-truck`

- 史料：[repo / README](https://github.com/generalgarnet/maodie-vs-dump-truck)；[metadata](https://api.github.com/repos/generalgarnet/maodie-vs-dump-truck)。创建并更新于 **2026-09-02**。
- 具体实现：Canvas roguelike 让耄耋对战泥头车，把“哈气”做成攻击、圆头做形态切换，并使用类《黑暗之魂 3》属性曲线。
- 判断：**accept**。梗直接进入战斗机制。建议支系：`耄耋`、`梗游戏`。一句话：`让耄耋用哈气硬刚泥头车，数值曲线还认真参考了魂 3。`

### 7. `HAAAAe1/roll_maodie`

- 史料：[repo / README](https://github.com/HAAAAe1/roll_maodie)；[metadata](https://api.github.com/repos/HAAAAe1/roll_maodie)。创建 **2026-08-17**，更新 **2026-08-18**。
- 具体实现：TRSS-Yunzai 的“今日耄耋”，从 187 种表情按日期与用户 ID 确定性抽取，记录收藏并生成彩色/灰色图鉴。
- 判断：**accept**。建议支系：`耄耋`、`表情包 Bot`。一句话：`把 187 种耄耋做成群聊每日抽卡，同日同人结果固定，还能攒出完整图鉴。`

### 8. `furina89757/MaodieMod`

- 史料：[repo / README](https://github.com/furina89757/MaodieMod)；[metadata](https://api.github.com/repos/furina89757/MaodieMod)。创建 **2026-08-07**，更新 **2026-08-11**。
- 具体实现：把耄耋做成《杀戮尖塔 2》角色，设计意图、瘟疫和牌序三套流派，并附三语梗文化介绍。
- 判断：**accept**。不是角色贴图替换，梗已形成完整卡牌机制。建议支系：`耄耋`、`游戏 Mod`。一句话：`把耄耋写成《杀戮尖塔 2》角色，连意图、瘟疫、牌序三套流派都配齐了。`

### 9. `mr-xiaying/MinecraftModMaodie`

- 史料：[repo / README](https://github.com/mr-xiaying/MinecraftModMaodie)；[metadata](https://api.github.com/repos/mr-xiaying/MinecraftModMaodie)。创建 **2026-07-25**，更新 **2026-08-12**。
- 具体实现：README 直接称其原型为“中文互联网上的一只小猫——耄耋”；Minecraft 实体可哈气破盾、飞扑、缴械，并在雷击后进化为“耄太祖”。
- 判断：**accept**。建议支系：`耄耋`、`Minecraft 整活 Mod`。一句话：`把耄耋做成能哈气破盾、缴械飞扑、挨雷进化成“耄太祖”的 Minecraft 实体。`

### 10. `LiYuuuuy/maodie-desktop-pet`

- 史料：[repo / README](https://github.com/LiYuuuuy/maodie-desktop-pet)；[metadata](https://api.github.com/repos/LiYuuuuy/maodie-desktop-pet)。创建 **2026-07-29**，更新 **2026-08-14**。
- 具体实现：跨平台圆头耄耋桌宠会随机哈气、把拖给它的文件送进回收站，并接大模型实时聊天。
- 判断：**accept**。梗动作参与文件操作，不是普通 AI 桌宠贴皮。建议支系：`耄耋`、`梗桌宠`。一句话：`圆头耄耋不只随机哈气，拖个文件给它还会当场吃掉并送进回收站。`

### 11. `LagerstroemiaHu/meowadventure`

- 史料：[repo / README](https://github.com/LagerstroemiaHu/meowadventure)；[metadata](https://api.github.com/repos/LagerstroemiaHu/meowadventure)。创建 **2026-01-16**，更新 **2026-04-08**。
- 具体实现：圆头耄耋 15 天文字冒险，以饱腹、健康、智力、哈气为四维；“哈气”归零会触发被收编结局。
- 判断：**accept**。梗特性决定资源与结局。建议支系：`耄耋`、`文字冒险`。一句话：`把圆头耄耋的一生压成 15 天四维冒险，其中“哈气值”归零就会被收编。`

## Accept：“大狗大狗叫”的多端实现

### 12. `lov-team/dagoujiao`

- 史料：[repo](https://github.com/lov-team/dagoujiao)；[中文 README](https://github.com/lov-team/dagoujiao/blob/main/README_CN.md)；[metadata](https://api.github.com/repos/lov-team/dagoujiao)。创建 **2026-07-21**，更新 **2026-08-25**。
- 具体实现：README 锚定 B 站“最爽哈基米模拟器”；点击或拖拽触发大狗开合嘴、叫声和全屏粒子。
- 判断：**accept**。建议支系：`大狗叫`、`音画互动玩具`。一句话：`点一下大狗就张嘴叫，拖动还能连叫并喷满屏粒子，把“最爽模拟器”做成网页。`

### 13. `123qewafdfg/dagou-tap-upgraded`

- 史料：[repo / README](https://github.com/123qewafdfg/dagou-tap-upgraded)；[metadata](https://api.github.com/repos/123qewafdfg/dagou-tap-upgraded)。创建 **2026-07-26**，更新 **2026-08-28**。
- 具体实现：把“大、狗、叫”三个音节扩展成 MIDI 演唱、音频旋律识别和麦克风自动复唱。
- 判断：**accept**。口号被工程化成简陋但完整的歌声合成器。建议支系：`大狗叫`、`鬼畜音乐工具`。一句话：`让“大狗叫”三个音节照着 MIDI 唱歌，还能听麦克风旋律自动复唱。`

### 14. `ywhhhhhhh/dagoujiao`

- 史料：[repo / README](https://github.com/ywhhhhhhh/dagoujiao)；[metadata](https://api.github.com/repos/ywhhhhhhh/dagoujiao)。创建并更新于 **2026-08-04**。
- 具体实现：Windows 全局键盘监听器；输入 `ting/tong/zhi/dai/kou/zhao` 等拼音时自动拼出叮咚鸡与大狗叫音效。
- 判断：**accept**。输入法级触发机制具体且难绷。建议支系：`大狗叫`、`键盘音效玩具`。一句话：`全局监听键盘，拼音打到指定音节时，电脑会擅自替你演奏叮咚鸡和大狗叫。`

### 15. `V-crescent/Da_gou_jiao`

- 史料：[repo / README](https://github.com/V-crescent/Da_gou_jiao)；[metadata](https://api.github.com/repos/V-crescent/Da_gou_jiao)。创建并更新于 **2026-08-05**。
- 具体实现：Windows 桌宠左键播“大狗”、中键播“叫”，同步切换张嘴/闭嘴画面。
- 判断：**accept**。建议支系：`大狗叫`、`梗桌宠`。一句话：`把“大狗大狗叫”拆成两个鼠标键：左键“大狗”，中键“叫”，按哪边就张嘴播哪段。`

### 16. `orangeTZ07/big-dog-bark`

- 史料：[repo / README](https://github.com/orangeTZ07/big-dog-bark)；[metadata](https://api.github.com/repos/orangeTZ07/big-dog-bark)。创建 **2026-07-26**，更新 **2026-08-18**。
- 具体实现：Vue + Web Audio 分析导入音频峰段，让大狗按强度切换闭嘴、小口、大口、分裂等口型，结束自动回到“住嘴”图。
- 判断：**accept**。梗图与音频分析直接耦合。建议支系：`大狗叫`、`音画同步玩具`。一句话：`用 Web Audio 测波峰，让大狗随声音实时切六种口型，没声就回到被捏住嘴。`

### 17. `shenjingnan/dagoujiao-esp32`

- 史料：[repo / README](https://github.com/shenjingnan/dagoujiao-esp32)；[metadata](https://api.github.com/repos/shenjingnan/dagoujiao-esp32)。创建并更新于 **2026-08-10**。
- 具体实现：ESP32-S3 圆屏固件把触摸屏分成“大、狗、叫”三列，板载扬声器发声，屏幕开闭嘴，BGM 以 128 BPM 四和弦实时合成。
- 判断：**accept**。梗从网页落到专用硬件。建议支系：`大狗叫`、`梗硬件`。一句话：`给 ESP32 圆屏做“大、狗、叫”三键专用固件，背景乐甚至由板子现场合成。`

## Accept：牛来、奶蛙与“黄色三幻神”

本支系几乎全部创建于 2026 年 8–9 月，是本轮最新的工程史；文化起源若只见于 repo 自述，前端应标“待考”，但工程日期可以做实线节点。

### 18. `AlexZeroZero/niulai-desktop-pet`

- 史料：[repo / README](https://github.com/AlexZeroZero/niulai-desktop-pet)；[metadata](https://api.github.com/repos/AlexZeroZero/niulai-desktop-pet)。创建并更新于 **2026-09-04**。
- 具体实现：股票/币价上涨时牛跑起来喊“牛来”，下跌时蹲下喊“妈妈”，休市睡觉；行情与名场面状态机绑定。
- 判断：**accept**。建议支系：`牛来`、`行情桌宠`。一句话：`让牛来负责看盘：涨了边跑边喊“牛来”，跌了蹲下喊“妈妈”，休市直接睡。`

### 19. `oscar-wang-xin/minecraft-niu`

- 史料：[repo / README](https://github.com/oscar-wang-xin/minecraft-niu)；[metadata](https://api.github.com/repos/oscar-wang-xin/minecraft-niu)。创建并更新于 **2026-09-03**。
- 具体实现：Three.js Minecraft 复刻加入 G 键“牛来事件”、打牛喊妈妈、牛雨合唱、牛粪经济，以及花豹、蛇、狼等影片节点。
- 判断：**accept**。梗已进入世界规则而非皮肤。建议支系：`牛来`、`梗游戏`。一句话：`在 Three.js 方块世界按 G 触发牛来：牛雨齐唱、挨打喊妈，牛粪甚至能进入经济系统。`

### 20. `MCapricorns/niu-lai-3d`

- 史料：[repo / README](https://github.com/MCapricorns/niu-lai-3d)；[metadata](https://api.github.com/repos/MCapricorns/niu-lai-3d)。创建 **2026-08-25**，更新 **2026-09-03**。
- 具体实现：IWBTG 式 3D 跳刺游戏，记录死亡数，含 GPT 老板关，终局对战 Anthropic Dario。
- 判断：**accept**。目标与关卡荒谬且实现明确。建议支系：`牛来`、`梗游戏`。一句话：`把牛来做成 3D 跳刺受苦游戏，先过 GPT 老板关，最后还得打 Dario。`

### 21. `retoursong/niulai-pet`

- 史料：[repo / README](https://github.com/retoursong/niulai-pet)；[metadata](https://api.github.com/repos/retoursong/niulai-pet)。创建并更新于 **2026-09-02**。
- 具体实现：Claude Code Hooks 桌宠；执行工具时牛奔跑，等待确认时盯人叫，收到 Stop 后大叫庆祝。
- 判断：**accept**。名场面动作映射到 agent 生命周期。建议支系：`牛来`、`Agent 桌宠潮`。一句话：`让牛来监听 Claude Code：工具执行就跑，等你确认就盯人叫，任务结束再大叫庆功。`

### 22. `wang-junjian/niulai`

- 史料：[repo / README](https://github.com/wang-junjian/niulai)；[metadata](https://api.github.com/repos/wang-junjian/niulai)。创建 **2026-08-31**，更新 **2026-09-02**。
- 具体实现：macOS 原生桌宠，启动时“妈妈—牛来”对喊，并把番茄钟、豹拉、云雀、蛇、狼等影片节点做成交互状态。
- 判断：**accept**。建议支系：`牛来`、`梗桌宠`。一句话：`把“妈妈—牛来”做成 macOS 原生启动仪式，番茄钟里还埋着豹、蛇、狼等整套影片节点。`

### 23. `Marshall-Jimmy/naiwa-universe`

- 史料：[repo / README](https://github.com/Marshall-Jimmy/naiwa-universe)；[metadata](https://api.github.com/repos/Marshall-Jimmy/naiwa-universe)。创建并更新于 **2026-09-02**。
- 具体实现：奶蛙互动站包含笑声连击、表情包工坊、“三幻神殿”、神谕和抽卡；README 中的文化起源年份只能记为仓库自述。
- 判断：**accept（文化史待考）**。建议支系：`奶蛙`、`黄色三幻神`、`互动档案`。一句话：`把奶蛙笑声、表情包工坊、三幻神殿和抽卡塞进同一互动站，像给一周热梗修了座庙。`

## Accept：弱智吧的再工程化

### 24. `Leymore/ruozhiba`（2023 源头节点）

- 史料：[repo / README](https://github.com/Leymore/ruozhiba)；[metadata](https://api.github.com/repos/Leymore/ruozhiba)。创建并更新于 **2023-05-01**。
- 具体实现：整理弱智吧年度佳贴、吧主推荐和普通帖子为 JSON；README 标出约 1.3k、2.6k、81.7k 三组规模，并明确服务于娱乐性使用 LLM。
- 判断：**accept（源头史料）**。建议支系：`弱智吧`、`梗语料档案`。一句话：`把弱智吧八万余条标题整理成 JSON，给后来一整代“弱智 AI”备好口粮。`

### 25. `FunnySaltyFish/Better-Ruozhiba`

- 史料：[repo / README](https://github.com/FunnySaltyFish/Better-Ruozhiba)；[metadata](https://api.github.com/repos/FunnySaltyFish/Better-Ruozhiba)。创建 **2024-04-20**，更新 **2026-08-29**。
- 具体实现：贡献者逐条人工审阅弱智吧精选 QA，剔除格式错误并修改或重写答案，产出中文模型精修数据。
- 判断：**accept**。建议支系：`弱智吧`、`梗数据集`。一句话：`逐条人工审阅、修改甚至重写弱智吧 QA，用最认真的数据清洗维护最不正经的问题。`

### 26. `dataxiv/data-ruozhiba`

- 史料：[repo / README](https://github.com/dataxiv/data-ruozhiba)；[metadata](https://api.github.com/repos/dataxiv/data-ruozhiba)。创建 **2026-02-09**，更新 **2026-05-15**。
- 具体实现：按年索引 2018–2025 年度佳贴，并串联贴吧原帖、旧数据集与其他公开资料入口。
- 判断：**accept**。建议支系：`弱智吧`、`梗史料索引`。一句话：`把 2018 到 2025 的弱智吧佳贴串成目录，让八年弱智智慧终于有了年表。`

### 27. `hzwer/LLM-Ruozhiba-QA`

- 史料：[repo / README](https://github.com/hzwer/LLM-Ruozhiba-QA)；[metadata](https://api.github.com/repos/hzwer/LLM-Ruozhiba-QA)。创建 **2026-02-11**，更新 **2026-03-06**。
- 具体实现：把针对 LLM 的弱智题逐题存成 JSON，记录分类，以及 Kimi K2.5 Fast 与 Step 3.5 Flash 的回答链接和摘要，再自动生成网页。
- 判断：**accept**。建议支系：`弱智吧`、`LLM 民间评测`。一句话：`把弱智题做成 JSON 试卷，让两家大模型回答并排留档，专门观察它们如何认真中招。`

## Accept：“原神启动”的源头与异常处理

### 28. `gamemcu/www-genshin`（2023 源头节点）

- 史料：[repo / README](https://github.com/gamemcu/www-genshin)；[metadata](https://api.github.com/repos/gamemcu/www-genshin)。创建 **2023-10-07**，更新 **2026-09-04**。
- 具体实现：用 xviewer.js/Three.js 把《原神》登录启动界面复刻成网页，README 和演示都以“原神启动”为对象。
- 判断：**accept（源头史料）**。建议支系：`原神启动`、`WebGL 复刻`。一句话：`用 WebGL 把“原神启动”复刻成网页，让登录仪式脱离游戏单独运行。`

### 29. `tiann/genshin_launch`

- 史料：[repo / README](https://github.com/tiann/genshin_launch)；[metadata](https://api.github.com/repos/tiann/genshin_launch)。创建 **2024-02-24**，更新 **2026-08-29**。
- 具体实现：把“原神启动”做成 KernelSU WebUI 模块，description 直接写“原神启动 for KernelSU！”。
- 判断：**accept**。建议支系：`原神启动`、`系统级整活`。一句话：`把“原神启动”塞进 KernelSU，让一句口号正式获得 Android root 模块形态。`

### 30. `Charley-xiao/nogenshin`

- 史料：[repo / README](https://github.com/Charley-xiao/nogenshin)；[metadata](https://api.github.com/repos/Charley-xiao/nogenshin)。创建 **2024-10-08**，更新 **2025-07-01**。
- 具体实现：Python 包提供 `@nogenshin.start` / `@nogenshin.stop`；被装饰函数报错时不修 bug，而是启动或关闭《原神》。README FAQ 明说它不能修代码。
- 判断：**accept**。建议支系：`原神启动`、`玩具编程接口`。一句话：`函数一报错，不抛栈，先执行 @nogenshin.start 把《原神》启动。`

## Accept：V 圈塔菲抽象的新工程形态

含有歧视意味的原始称呼只应作为 repo 史料转述，不应变成本站对人的称呼。

### 31. `ly-xxx/ace-taffy-skill`

- 史料：[repo / README](https://github.com/ly-xxx/ace-taffy-skill)；[metadata](https://api.github.com/repos/ly-xxx/ace-taffy-skill)。创建 **2026-04-09**，更新 **2026-09-02**。
- 具体实现：从微博、Bilibili、公开视频转写中蒸馏永雏塔菲的自称、喵喵句尾、梗词与表达习惯，做成 Codex/Claude Code Skill，并改善切片 STT。
- 判断：**accept（内容警示）**。建议支系：`永雏塔菲`、`虚拟主播数字人格`。一句话：`把塔菲公开动态、切片转写、口癖和表达 DNA 蒸馏成可安装 Skill，顺手提高切片语音识别。`

### 32. `quanizumi/taffy_deskpet`

- 史料：[repo / README](https://github.com/quanizumi/taffy_deskpet)；[metadata](https://api.github.com/repos/quanizumi/taffy_deskpet)。创建 **2026-07-21**，更新 **2026-09-04**。
- 具体实现：README 明确称“永雏塔菲唐笑桌宠”，循环语音并按参考 GIF 高频上下抖动。
- 判断：**accept（内容警示）**。梗动作而非普通立绘展示。建议支系：`永雏塔菲`、`梗桌宠`。一句话：`把塔菲的标志性笑声与上下抖动做成桌宠，循环起来像桌面局部发生地震。`

### 33. `vegetable-kun/DSH_Plugin_Taffy`

- 史料：[repo / README](https://github.com/vegetable-kun/DSH_Plugin_Taffy)；[metadata](https://api.github.com/repos/vegetable-kun/DSH_Plugin_Taffy)。创建 **2026-08-17**，更新 **2026-09-01**。
- 具体实现：把塔菲的笑、假哭、求饶、压力等表情映射到 agent 审批、工具调用、报错、压缩等状态，设有 19 级优先链。
- 判断：**accept（内容警示）**。梗素材成为 Agent 状态机。建议支系：`永雏塔菲`、`Agent 桌宠潮`。一句话：`用 19 级优先链把塔菲表情包接到 Agent 生命周期：审批、报错、压缩各有专属反应。`

## Accept：单点新史与打工人抽象

### 34. `2936401755/Big-Banana-Hoax-`

- 史料：[repo / README](https://github.com/2936401755/Big-Banana-Hoax-)；[metadata](https://api.github.com/repos/2936401755/Big-Banana-Hoax-)。创建 **2024-05-29**，更新 **2025-04-16**。
- 具体实现：Java 多线程不断生成大香蕉 GIF 窗口并播放 BGM，还借 nircmd 每 0.5 秒解除 Windows 静音并拉满音量，F12 才终止。
- 判断：**accept（安全提示、待成支系）**。一句话：`狂开大香蕉 GIF，还每半秒解除静音并拉满音量——F12 是作者留下的最后体面。`

### 35. `anxiong2025/jipai-skill`

- 史料：[repo / README](https://github.com/anxiong2025/jipai-skill)；[metadata](https://api.github.com/repos/anxiong2025/jipai-skill)。创建并更新于 **2026-04-08**。
- 具体实现：把景德镇“鸡排哥”的公开表达整理成 5 个心智模型、8 条启发式与表达 DNA，做成 Claude Code Skill；核心标语是“6 块钱鸡排，60 块钱人生道理”。
- 判断：**accept（待成支系）**。一句话：`把“6 块钱鸡排，60 块钱人生道理”拆成五套心智模型和八条启发式，让鸡排哥在 Claude Code 里继续训话。`

### 36. `openlablab/SBTI`

- 史料：[repo / README](https://github.com/openlablab/SBTI)；[metadata](https://api.github.com/repos/openlablab/SBTI)。创建 **2026-04-10**，更新 **2026-06-27**。
- 具体实现：戏仿 MBTI 的 31 题测试，输出 27 种中文互联网自嘲人格，如“死者、草者、吗喽、尤物”；README 还链接 B 站灵感来源。
- 判断：**accept**。梗话术直接成为测评分类与结果。建议支系：`SBTI`、`打工人抽象`。一句话：`用 31 道题把 MBTI 炸成 SBTI，最后测出你是“死者、草者、吗喽”还是“尤物”。`

### 37. `Scorcsoft/MonkeyApp`

- 史料：[repo / README](https://github.com/Scorcsoft/MonkeyApp)；[metadata](https://api.github.com/repos/Scorcsoft/MonkeyApp)。创建 **2024-07-22**，更新 **2026-03-27**。
- 具体实现：给“蓝队吗喽”做 macOS 状态栏下班倒计时，显示已上班百分比，并按秒增长“摸鱼收入”。
- 判断：**accept**。具体中文职场自嘲与功能强绑定。建议支系：`吗喽`、`打工人抽象`。一句话：`让蓝队吗喽常驻 Mac 状态栏，精确计算离下班还有多久，以及每秒摸到了多少钱。`

## Maybe：有锚点，但暂不宜占主榜

### 38. `ChrisChen667788/office-zoo`

- 史料：[repo / README](https://github.com/ChrisChen667788/office-zoo)；[metadata](https://api.github.com/repos/ChrisChen667788/office-zoo)。创建 **2026-04-26**，更新 **2026-08-24**。
- 具体实现：9 个 AI“鼠人”在被裁公司继续加班，自演“班味剧场”、职场狼人杀与劳动法闯关。
- 判断：**maybe（偏 accept）**。中文“鼠人/班味/拥抱变化”已进入玩法，但更像原创职场讽刺游戏，是否属于恶俗梗主榜需维护者定边界。

### 39. `AlexZeroZero/maodie-land`

- 史料：[repo / README](https://github.com/AlexZeroZero/maodie-land)；[metadata](https://api.github.com/repos/AlexZeroZero/maodie-land)。创建 **2026-07-28**，更新 **2026-08-19**。
- 具体实现：Unity 开放世界猫 RPG，确有“哈气神功、耄耋弹射”等技能，但 README 自称完成度约 20%。
- 判断：**maybe**。大部分机制仍是通用猫咪采集/战斗；等更多梗机制实际落地后复核。

## Reject：名字很像，机制不是

### 40. `wyq138/MaodieFire-Antivirus`

- 史料：[repo / README](https://github.com/wyq138/MaodieFire-Antivirus)；[metadata](https://api.github.com/repos/wyq138/MaodieFire-Antivirus)。创建 **2026-06-20**，更新 **2026-08-28**。
- 具体实现：.NET/WPF 安全套件，README 主体是 ClamAV、实时防护、防火墙等通用安全功能。
- 判断：**reject**。除“耄耋安全软件”命名和猫视觉外，没有哈气、圆头、老吴等具体传播锚点；不能因工程量大或标题碰梗就收。

## 建议编年锚点与入坑顺序

时间轴不要平均铺满 37 项，先用代表节点串史，再在支系页展开同类实现：

1. **2023-05**：`Leymore/ruozhiba`，弱智吧开始被整理为 LLM 可食用 JSON。
2. **2023-10**：`gamemcu/www-genshin`，“原神启动”成为可运行 WebGL 仪式。
3. **2024-04 至 10**：`Better-Ruozhiba` 进入人工精修；`Big-Banana-Hoax-` 形成 Windows 恶搞；`nogenshin` 把“启动”写进 Python 异常处理。
4. **2026-02 至 06**：曼波 TTS 连续出现；弱智吧、鸡排哥、塔菲进入 Agent Skill；`SBTI` 与“吗喽”将打工人自嘲变成测评和计时器。
5. **2026-07 至 08**：耄耋、大狗叫扩散到游戏、桌宠、Minecraft、Web Audio、Bot 与 ESP32，构成本轮最完整的技术谱系。
6. **2026-09**：牛来/奶蛙集中进入行情、Agent Hooks、Three.js 游戏与互动档案，是首页“今日考古”首选。

首批建议入坑：`Tsukimisaka/MamboTTS`、`generalgarnet/maodie-vs-dump-truck`、`furina89757/MaodieMod`、`123qewafdfg/dagou-tap-upgraded`、`shenjingnan/dagoujiao-esp32`、`AlexZeroZero/niulai-desktop-pet`、`oscar-wang-xin/minecraft-niu`、`FunnySaltyFish/Better-Ruozhiba`、`Charley-xiao/nogenshin`、`vegetable-kun/DSH_Plugin_Taffy`、`openlablab/SBTI`。

继续找史时，优先为 `鸡排哥` 与 `大香蕉` 各补一个独立实现；同类 TTS、桌宠不要全部占首页，完整谱系放支系详情，编年史只摆代表节点。
