---
published: 2026-06-11
title: "新 Claude 模型 Fable"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/New Claude model - Fable.md"
source_note: "[[信息源/Ben's Bites/New Claude model - Fable]]"
source_sha256: d90d6938f4cc677d2e0053aeea2e86b8d942881c2d963b2945415c63f0459fbd
original_url: "https://www.bensbites.com/p/new-claude-model-fable"
processed: 2026-08-07
language: zh-CN
---

# 新 Claude 模型 Fable

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-06-11
> - 原文链接：[打开原文](https://www.bensbites.com/p/new-claude-model-fable)
> - Vault 原文件：[[信息源/Ben's Bites/New Claude model - Fable|查看原始文件]]

## 摘要

- Fable 5 是 Anthropic 的新模型，即 Mythos（Anthropic 未发布、据称有重大网络安全风险、只向特定公司提供的模型）的"更安全"版本；基准上相对 Opus 4.8 有大幅跃升，且能可靠地衍生数十个子智能体。
- Fable 只开放到 6 月 22 日（Claude 订阅内），之后转为付费额度使用，价格为 Opus 的 2 倍；Anthropic 还推出了一项引发巨大反弹的"秘密破坏你的工作"政策，随后部分收回。
- Gemini 3.5 Live Translate 支持 70+ 语言的实时语音到语音翻译；Keshav 用 3-4 天构建了本地语音转文字应用 Option AFK。

## 正文

大家好，

和很多人一样，我在试 Fable。但我觉得我还没给它真正困难的任务，来感受人们声称的那种巨大飞跃。不过因为我在为我的参考手册做可视化、交互式文章，我一直在测试各种话题的一次性生成，用来陪孩子玩：怎么弹钢琴、俄罗斯方块是怎么运作的、火山是怎么运作的。他们特别喜欢砸我的键盘，看那些组件活过来。

它比 Opus 话少。我把智能体用作来回对话，所以我需要一点话痨感：GPT 模型非常直接，Claude 模型通常更啰嗦。所以我觉得 Fable 对我来说是个甜蜜点，因为目前我还是更喜欢 Claude 模型与我思考时的"氛围"。

它慢。速度对我来说极其重要，因为我没法同时活跃运行很多智能体，我的 ADHD 上下文切换已经够糟了。但我需要速度。所以我考虑从 High 或 XHigh 推理切到更低的档位，但选更低智能感觉不对。尽管我知道那可能是在浪费 token。

Cursor 的 Composer 2.5 Fast 是我试过最快的模型，我非常喜欢在 Pi 里用它，它给我打破了天花板，说实话 GPT 5.5 也是。它们很快，所以我能在短时间内处理一大堆工作。

永远是在价格、速度和氛围之间做权衡。

我相信 GPT 5.6 或 6 就在眼前，而且我猜 OpenAI 真的在努力确保"氛围"能比肩 Claude 模型，如果他们想维持 Codex 的热度的话。

Ben's Bites 由 [Plaid](https://plaid.com/state-of-intelligent-finance-report/?utm_source=BensBites&amp;utm_medium=PaidNewsletter&amp;utm_campaign=BensBites_Paid_Newsletter_Ad_Buy&amp;utm_content=Primary_StateofIntelligentFinance) 赞助

过去 12 个月里，超过一半的美国人用 AI 管理财务。他们对金融产品的期望从未如此之高。Plaid 的最新报告《智能金融现状》（The State of Intelligent Finance）分析了消费者对 AI 的期望及其对你团队的意义。[获取报告](https://plaid.com/state-of-intelligent-finance-report/?utm_source=BensBites&amp;utm_medium=PaidNewsletter&amp;utm_campaign=BensBites_Paid_Newsletter_Ad_Buy&amp;utm_content=Primary_StateofIntelligentFinance)。

头条

- [Fable 5，Claude 的新模型](https://www.anthropic.com/news/claude-fable-5-mythos-5)，是 Mythos（Anthropic 未发布的模型，他们称其有重大网络安全风险，只向特定公司开放）的"更安全"版本。Fable 在基准测试上相对 Opus 4.8 有巨大跃升（相对 GPT 5.5 倒没那么大）。[Ethan Mollick](https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos) 和 [Dan Shipper](https://every.to/vibe-check/anthropic-mythos-our-fable-vibe-check) 都认为它解锁了新能力——很大一部分是它能够工作更长时间，并可靠地衍生几十个子智能体而不丢失主任务上下文。根据这张图，Fable medium 的表现优于 Opus xhigh，还更便宜。Fable 只在 Claude 订阅套餐里开放到 6 月 22 日。Anthropic 计划在那之后把 Fable 的使用转为付费额度，直到他们有容量为所有人提供服务。它的价格是 Opus 的 2 倍（Mythos 则是 Opus 的 5 倍）

- Anthropic 在推出 Fable 时引入了一项新政策：如果你把 Fable 用于任何 ML/AI 相关工作，它将["秘密地"破坏你的工作](https://x.com/SemiAnalysis_/status/2064482714149896431)。这引发了巨大的反弹，随后 Anthropic [部分收回了](https://x.com/ClaudeDevs/status/2064949876463645026)这项政策中"秘密"的部分。

- Fable 的其他使用案例——[做重构](https://x.com/dexhorthy/status/2064747631885398231)得到干净的代码、[剪辑视频](https://x.com/trq212/status/2064826394589442448)，甚至[做一个 Markdown 编辑器](https://x.com/sawyerhood/status/2064444395727036811)。

- [Gemini 3.5 Live Translate](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/)——Google 的新模型，做 70+ 种语言的实时语音到语音翻译。已上线 Gemini API 和 Google Translate，即将登陆 Google Meet。

- [大规模测试时计算的影响](http://Implications of Large-Scale Test-Time Compute)——模型性能受完成任务可用的时间、算力或预算影响，因此公司在报告基准时应注明这些变量。

- 2026 年的 AI 定价到底是什么样？[Orb](https://www.withorb.com/?utm_source=bensbites&utm_medium=newsletter&utm_campaign=2026_AI_pricing_report) 分析了 80 家 AI 智能体公司，包括 GitHub Copilot、Replit、Factory 和 Intercom 等领导者，找出行业中浮现的定价模型、打包策略和变现趋势。[下载报告](https://www.withorb.com/2026-state-of-ai-agent-pricing-report?utm_source=bensbites&utm_medium=newsletter&utm_campaign=2026_AI_pricing_report)。*

[立即订阅](https://www.bensbites.com/subscribe?)

我的信息流

- Claude Code 现在支持[嵌套子智能体](https://x.com/bcherny/status/2064327225504403752)——每个子智能体还能再衍生子智能体。目前最深 5 层。

- ChatGPT 的[模型选择器](https://help.openai.com/en/articles/6825453)已更新：a) 显示所有 GPT-5 系列模型，b) 思考级别简化为 Instant、Medium、High、Extra High 和 Pro——和 Codex 里一样。

- [Missions](https://x.com/FactoryAI/status/2064764834928107914) 现已在 Factory Desktop 上线。

- [Skribe](https://www.skribe-editor.com/)——本地优先的 Markdown 写作应用，带 AI 评审伙伴。

- [小型 python harness](https://github.com/adewale/skill-eval-harness) 用来给技能跑评估——这项技能是在提升还是损害模型表现？

- Mainframe 的 [pr.video](https://mainframe.app/review)——把任何 GitHub PR 变成带讲解的视频走查来评审改动（无需代码 diff）。

- Dario Amodei 关于[政策制定](https://darioamodei.com/post/policy-on-the-ai-exponential)的新文章，探讨如何跟上 AI 发展的步伐。值得一读，但很多地方有"相信我"的味道。

- [Supermemory](https://x.com/DhravyaShah/status/2064749237498519923) 现在可以本地自托管。

- [DiffusionGemma](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/)——Google 的新开源权重模型，采用不同架构（扩散而非 transformer），获得 3-5 倍加速，性能大致相当。

- [智能体现在可以在 Firecrawl 上注册了](https://x.com/firecrawl/status/2064387335794434281)。

构建日志——作者 [Keshav](https://www.x.com/keshavatearth)

我正在构建一个完全本地的语音转文字应用（有点像 Wispr flow、Monologue、Superwhisper 等），但没有任何数据发送到它们的服务器。一部分源于我想玩本地模型，一部分源于我为买了一个不怎么用的类似工具而感到内疚。

我叫它"Option AFK"，以下是我在过去几周里用 3-4 天构建它的过程：

- 让 Opus 4.7 写一个简单的 Python 脚本，把 Nvidia 的 Parakeet 0.6B 跑在我的 M3 Air 上。我在浏览器里测试了，准确率/速度比我预期的好。

- 用 Codex 的 Computer Use 对我付费的那个工具做了逐屏审计，用截图记录它拥有的所有功能。我在 20 美元套餐里用一次会话就完成了（只碰到一次 5 小时限制）。

- 然后开始用 Opus 4.8 构建 MacOS 应用（以审计结果作为参考）。构建过程中，Opus 4.8 选了一个我完全不知道存在的 SDK，用来实现把长语音笔记拆分成块、加快模型处理之类的事情。

就是那个 SDK：

- [fluidaudio](https://github.com/FluidInference/FluidAudio)——在 MacOS 上本地运行转录和 TTS 模型。

我昨天用 Fable 5 做出了一个可用版本，已经在自己设备上用起来了。这是它的样子：

它还支持把语音笔记（包括较长的）作为文件上传并转录，无需额外费用。

我计划在注册完 Apple Developer Program 后发布这个应用。你想用吗？

Afters

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@_nicolealonso](https://x.com/_nicolealonso/status/2064810963551846449)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Fable #Anthropic #Claude #Mythos #Gemini #语音转文字
