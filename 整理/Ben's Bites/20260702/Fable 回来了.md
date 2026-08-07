---
published: 2026-07-02
title: "Fable 回来了"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/Fable is back.md"
source_note: "[[信息源/Ben's Bites/Fable is back]]"
source_sha256: d5c9415cc10dd32d98442a1341d19b1abab41a116743c8d6a6287f8d6c4140bc
original_url: "https://www.bensbites.com/p/fable-is-back"
processed: 2026-08-07
language: zh-CN
---

# Fable 回来了

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-07-02
> - 原文链接：[打开原文](https://www.bensbites.com/p/fable-is-back)
> - Vault 原文件：[[信息源/Ben's Bites/Fable is back|查看原始文件]]

## 摘要

- Fable 5 面向所有付费用户回归，Anthropic 称重新发布时加入了更强的护栏；该模型在订阅套餐内仅限至 7 月 7 日，且只能用 50% 的额度。
- 与智能体协作的关键，是确保正确的上下文和工具可用；作者用自己的亲身经历（Codex 帮他订出租车）说明了这套工作方式。
- 还发布了 Claude Sonnet 5 和两款新的 Gemini 媒体模型（Nano Banana 2 Lite 与 Gemini Omni Flash）。

## 正文

大家好，

在希腊时，我需要订一辆从机场回家的出租车。我给 codex 发了条消息，1 分 37 秒后搞定了，收到短信说车已订好。

Codex 还给这张图加了脱敏的遮罩

这不是什么了不起的任务，但它能跑通是有系统原因的（而这个系统正是许多任务能跑通的方式）。

首先，我所有日常与智能体的对话都始于我的 "bites" 文件夹，里面有指向文件链接，存放着我的记忆、我正在做的事、ben's bites、关于我等信息。

Codex 加载我的 AGENTS.md，然后任务就开始执行了。

它连了默认的 Google Calendar 和 Gmail 工具，所以先检查我的航班是否在我的日历里（确实在，多亏了我出行前开的另一个 Codex 线程）。找到行程后，它又去邮件里翻有没有之前的接送安排邮件，找到一封，从中拿到我的家庭住址和出发时用过的那家公司（这些信息也可以记在我文件夹里的文件里，比如一个从 AGENTS.md 链接出去的 TRAVEL.md 文件）。

现在它拿到了所有需要的细节，这就是"智能体化"的部分——它收集了足够的上下文来完成我的任务。基于这些上下文，它决定下一步：进行预订。它知道自己手头有哪些工具，比如计算机使用能力，于是它打开出租车网站（我整个旅程都让电脑保持开机，以便连接），填好预订表格，完成了付款。

与智能体共事，很大程度上是确保正确的上下文和工具可用于完成任务。如果这两点都覆盖了，智能体就能在你不干预的情况下把事情办成。

我们必须这样思考任务——一个对你或你的任务一无所知的智能体（或人）需要什么？确保这些信息可用是你的职责。

进入正题吧。

p.s. 想给我朋友独自创业的第一家公司打个广告——[Fixxa](https://fixxa.ai/)，面向英国手艺人（tradespeople）的语音报价和发票工具，支持 WhatsApp 交付和 Stripe 链接。

Ben's Bites 由 [Attio](https://attio.com/?utm_source=bens_bites&utm_medium=newsletter_sponsorship&utm_campaign=bens_bites-Y26) 赞助

认识 Attio：智能体化 CRM。借助构建销售管道、捕捉信号并推动交易前进的智能体和自动化，[Attio](https://attio.com/?utm_source=bens_bites&utm_medium=newsletter_sponsorship&utm_campaign=bens_bites-Y26) 全天候编排你的营收工作。深受 Granola、Modal、Wispr Flow 等高增长初创公司喜爱。[今天就免费开始](https://attio.com/?utm_source=bens_bites&utm_medium=newsletter_sponsorship&utm_campaign=bens_bites-Y26)。

头条

- [Fable 5 回来了](https://www.anthropic.com/news/redeploying-fable-5)，面向所有付费用户。Anthropic 的博客提到这次重新发布加入了更强的护栏，但我还没撞上任何一条。Fable 5 只在 7 月 7 日前包含在订阅套餐里，而且你在 Fable 上只能用 50% 的额度。[这个基准测试](https://labs.scale.com/leaderboard/rli)声称 Fable 能完成 16% 的远程工作任务，是 Opus 4.8 的两倍。Theo 有关于[在接下来 5-6 天里榨干 Fable 价值](https://x.com/theo/status/2072481845363822914)的快速技巧。

- 在 Fable 回归之前，我们还迎来了 [Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5)——它在大多数智能体任务上的基准成绩接近 Opus 4.8，按 token 计更便宜，但实际上每个任务的花费和 Opus 差不多。它现在是 Free/Pro 套餐的默认模型，可在 Claude Code 和 API 中使用，8 月 31 日前有每百万 token 2/10 美元的发布价。我和其他人的体验是：它又贵又慢，我看不出它会成为我优先使用的模型。

- [两款新的 Gemini 媒体模型](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/)：Nano Banana 2 Lite 和 Gemini Omni Flash。两款模型都已在 Gemini 应用和 API 中可用。在 API 中，Nano Banana 2 Lite 可以快速（4 秒内）且廉价地生成图片（1 美元约 30 张 1K 分辨率的图）。Omni Flash 可以以 0.10 美元/秒的价格生成和编辑视频。

- [Bridgewater 和 Thinking Machines](https://thinkingmachines.ai/news/learning-to-replicate-expert-judgment-in-financial-tasks/)[训练了一个专家模型](https://thinkingmachines.ai/news/learning-to-replicate-expert-judgment-in-financial-tasks/)。它在金融分诊上达到 84.7% 的准确率，成本比测试过的最强前沿模型低 13.8 倍。[Factory 的 Droid Shield 2.0](https://factory.ai/news/droid-shield-2-0) 还微调了两个检测器，用于捕捉会话中暴露的密钥并减少误报。

[立即订阅](https://www.bensbites.com/subscribe?)

我的信息流

- [Modelence Mobile Builder](https://www.producthunt.com/products/modelence-app-builder?launch=modelence-mobile-builder&bc=1)——通过聊天构建原生移动应用，复用 Modelence 的认证和后端。（投资组合公司）

- [Browserbase Agents](https://www.browserbase.com/blog/introducing-browserbase-agents)——一个提示词或一次 API 调用即可在托管环境中完成浏览器自动化。

- [Safari MCP](https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/)——让智能体用 Safari 打开标签页、调试页面并捕捉 Safari 专属 bug。

- [Option AFK](https://buy.polar.sh/polar_cl_kE84Cj5hEEIDfMgLv2GEdo1zf371x0ml1qdjN4XViHE)——Wispr-flow 替代品：本地转录（数据不离开设备）、可转录多小时的录音文件、面向智能体的 CLI。

- [Claude Science](https://www.anthropic.com/news/claude-science-ai-workbench)——面向科学家的 Mac/Linux 工作台：代码支撑的图表、60+ 科学技能/连接器等。Pro、Max、Team 和 Enterprise 套餐开放内测。

- [Ramp PorTAL](https://x.com/RampLabs/status/2072383318516187380)——在模型之间迁移微调过的任务，成本约为平时的一半。

- [xAI Voice Agent Builder](https://x.com/xai/status/2072342803787702422)——无代码 Grok Voice 智能体，每分钟 0.05 美元。

- [plain-writing-skill](https://github.com/shreyashankar/plain-writing-skill)——让智能体用平实语言写作的规则，附带更改的 HTML diff。

- [Bond](https://www.bondapp.io/)——面向创始人和高管的 AI 幕僚长，跟踪上下文、障碍和跟进事项。

- [Interfere](https://x.com/interfere_/status/2072003433926676508)——监控生产环境，调查问题并在用户注意到之前修复。

- [AI 原生 PM 杠杆](https://www.lennysnewsletter.com/p/how-top-pms-increase-their-leverage)——产品经理如何从文字帮助走向原型、PR 和评估。（[课程](https://maven.com/tech-for-product/become-an-ai-native-builder)）

- [/wizard](https://x.com/mattpocockuk/status/2072042214188847178)——为烦人的设置任务构建交互式 CLI 的技能。

- [理解智能体写的代码](https://x.com/geoffreylitt/status/2072522251300409556)——关于当智能体写代码时，仍然应该理解代码在做什么的论证。

Afters

@dylan522p @shaunmmaguire 出现在今天的 Training Data 节目里。没有人比他更受信任、更了解历史上最大规模的基础设施建设内幕。

Dylan 成为 @SemiAnalysis_ 的故事更令人敬佩：一个年轻的汽车旅馆孩子……

—— Sonya Huang，2026-06-30

@saranormous。

—— Matt MacInnis，2026-06-30

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@keshavatearth](https://x.com/Keshavatearth)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Fable #Anthropic #Claude #Gemini #智能体 #AI模型
