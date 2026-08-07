---
published: 2026-07-28
title: "Opus 5 优于 Fable 5"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/Opus 5 -- Fable 5.md"
source_note: "[[信息源/Ben's Bites/Opus 5 -- Fable 5]]"
source_sha256: 5949a74962145a719c7219f4b6c33e759e05e82a43eb805d57ca52ad7e7d351e
original_url: "https://www.bensbites.com/p/opus-5-fable-5"
processed: 2026-08-07
language: zh-CN
---

# Opus 5 优于 Fable 5

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-07-28
> - 原文链接：[打开原文](https://www.bensbites.com/p/opus-5-fable-5)
> - Vault 原文件：[[信息源/Ben's Bites/Opus 5 -- Fable 5|查看原始文件]]

## 摘要

- Claude Opus 5 发布，Anthropic 称其以一半价格接近 Fable 5；作者 Claire 在盲测中把它评为第一，尽管她讨厌用它；Anthropic 还删掉了 Opus 5 和 Fable 5 超过 80% 的 Claude Code 系统提示词，编码评测无损。
- ChatGPT Voice 现在可以操作 ChatGPT 桌面应用，能在新会话中委派任务并向主线程汇报；Claude 的语音模式也扩展到 Sonnet 和 Opus。
- 围绕美国可能禁止中国开源权重模型的传言，NVIDIA CEO Jensen Huang 首次在 X 发帖支持开源 AI，150+ 公司签署声明（OpenAI、Google、Microsoft 等），唯独 Anthropic 未签。

## 正文

大家好，

度假回来了，直接继续折腾构建。我最近对 tldraw 的演示有点痴迷和着迷。它是一个免费的画布/白板应用，但他们的离线应用（最近[更新过](https://offline.tldraw.com/)）很酷，因为智能体可以用它做各种事：创建可视化来解释东西、做游戏、做交互式博客文章，以及一大堆其他东西。

比如把我们的 logo 变成一个小动画吉祥物。顺便说一句，他叫 "bites"。

或者像时区检查器这样的小部件

@tldraw offline（tldraw 离线版）

或者一个每日天气时间线

@tldraw

（引用的推文：@tldraw offline 里的时区检查器—— Ben Tossell，2026-07-27）

当所有东西都只是文件里的文本时，我不擅长用智能体。太无聊了，我不会去读，更别说做点什么了。所以如果它是可视化的、都在一个画布上，也许我会？

我的想法是创建一个"一站式"画布，放我常用的几个小部件，同时显示我的待办/待处理的邮件之类的东西。然后我计划把我的个人网站也做成交互式画布，之后再做更多解释性内容。

也许我还会把吉祥物接上一个智能体，这样我就能把他拖到待办上，让他去做事……

很快分享更多 😊

Ben's Bites 由 [Ability AI](http://github.com/Abilityai/trinity) 赞助

这家初创公司靠 [17 个 AI 智能体](https://youtu.be/8j6q-kABRqc)运转——并且开源了平台。营销、客户健康、竞争情报、财务——真实运营，不是演示，每个智能体动作都有 git 追踪，任何对外操作都需人工批准。你拥有的智能体，而不是租来的。Apache 2.0：[github.com/Abilityai/trinity](http://github.com/Abilityai/trinity)

### 头条

[Claude Opus 5 发布了](https://www.anthropic.com/news/claude-opus-5)——Anthropic 说它在一半价格下接近 Fable 5。Claire 讨厌用 Opus 5，但在被要求盲测给模型输出排名时，[她最后把它排在了第一](https://www.youtube.com/watch?v=dfre9hN0HCs)。

[Every 的评测](https://every.to/vibe-check/opus-5)列出了一些可能解释这一点的行为：它会争辩、提前停止，还会对抗人们为旧模型构建的技能。

也许是我们过度提示它了。

Anthropic 说，他们为 Opus 5 和 Fable 5 删除了超过 80% 的 [Claude Code 系统提示词](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models)，编码评测无可见损失。

[ChatGPT Voice 现在可以运行 ChatGPT 桌面应用](https://x.com/OpenAI/status/2080378182469857576)。你可以在 ChatGPT Work 和 Codex 中使用；只需开始一个"Voice"会话并对它说话。它可以为单个任务创建新会话，然后在主线程里向你汇报结果。感觉很像带语音的 OpenClaw。

我使用 ChatGPT Voice 做"严肃"工作时体验不太好。通过 ChatGPT Voice 把任务委派给新会话，感觉不如在 Codex 里和 5.6 Sol 聊天来得聪明。也许是因为无法控制每个新会话使用什么模型/思考级别。

我设想 Voice 非常适合生产力类任务：查邮件、起草回复、从仪表盘拉点数据做个图表等。

对于严肃的工作，我还是更喜欢用语音转文字应用（目前用我自己做的——[optionafk.com](https://www.optionafk.com)），把它发给我想用的智能体，完全控制模型/思考力度。

—— Keshav

另外，你错过了也不怪你，[Claude 也有语音模式](https://x.com/claudeai/status/2080376094939603366)。以前只能用 Haiku，现在可以用 Sonnet 和 Opus，还可以在对话中途调用 Gmail、Calendar 和 Slack 等多种工具。我不记得上次用 Claude 的聊天选项是什么时候了。好久以来都是 Claude Code。

Kimi K3 的[权重](https://huggingface.co/moonshotai/Kimi-K3)和[技术报告](https://github.com/MoonshotAI/Kimi-K3/blob/main/k3_tech_report.pdf)发布了。它已经在 [Droid 上以 5 折提供，直到 8 月 10 日](https://x.com/FactoryAI/status/2081762743305273369)。

随着美国可能禁止公司使用中国开源权重模型的传言，NVIDIA CEO Jensen Huang [在 X 上发了他的历史首帖](https://x.com/JensenHuang/status/2080643682408321103)——一篇支持开源 AI 的长声明。上周末，[所有人都签署了那份声明](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)（OpenAI、Google、Microsoft 和 150 多家）——除了 Anthropic。

当然，这引发了一些反弹，Anthropic 做了它一贯的事：[发了一篇文章](https://www.anthropic.com/news/position-open-weights-models)挽回颜面，说它从未推动过开源权重禁令。人们的反应是谴责 Anthropic 的虚伪——只要模型是[可爱的 80 亿参数小玩具](https://x.com/roanoke_gal/status/2081865754501161229)它们就接受开源，但如果是"大而危险的模型"（威胁 Anthropic 生意的那种）就不行。

@AnthropicAI "只有我们有能力决定什么想法是危险的。贱民。"

—— Nacho Business，2026-07-27

[立即订阅](https://www.bensbites.com/subscribe?)

### 快速链接

- [FLUX 3](https://x.com/bfl_ai/status/2080308988961554582)——一个模型搞定图像、视频、音频和动作预测；视频处于早期访问阶段。

- [ChatGPT 中的健康功能](https://openai.com/index/health-in-chatgpt/)——美国用户可以可选地连接 Apple Health 和支持的医疗记录，然后询问上下文中的变化。

- [BackSearch](https://x.com/GenReasoning/status/2080582292901154920)——按过去某个日期搜索当时的网络。目前只支持 2026 年的新闻。

- [here.now Workspaces](https://here.now/blog/workspaces)——你的智能体发布的网站、文档和仪表盘的私有团队主页。

- 软件工厂为什么会失败——[第 1 部分](https://x.com/dexhorthy/status/2080697380379427275)、[第 2 部分](https://x.com/dexhorthy/status/2081058573556306030)、[第 3 部分](https://x.com/dexhorthy/status/2081797628552270027)。

- [open-git](https://open-git.com/home)——为智能体打造的代码托管平台，CI 变红时自动修复你的 PR。

- [OpenWorker](https://openworker.com/)——开源 Mac 智能体，完成日常工作，在后果性操作前征询同意。

- [Pilot Protocol](https://pilotprotocol.network/)——一个超过 25 万智能体的网络，你可以用它为应用获取分发。（我是投资人）

- [Notion 即代码](https://x.com/NotionHQ/status/2080331924732850687)——用 TypeScript 定义整个工作区，通过 API 部署。（测试版）

- [The Stack v3](https://x.com/eliebakouch/status/2080322879015584240)——开放代码数据集，约 5T 过滤后 token，覆盖 770 种语言。

- [box](https://x.com/AniC_dev/status/2081101746051367307)——为智能体提供完整 VM 沙箱，每秒 0.00001 美元，带快照、SSH 和桌面。

- [Mintlify](https://x.com/mintlify/status/2080306288974827596)——把已解决的工单变成建议的文档修复。

- [Cognition 收购了 Interaction](https://x.com/cognition/status/2080311229256540194)——Poke 背后的团队加入 Devin 团队。

### 技能板块

- [Interface Craft](https://www.interfacecraft.dev/)——四节高级动效新课，外加为时间线更新的 DialKit 技能。（[推文](https://x.com/joshpuckett/status/2081924687916105832)）

- [/prototype](https://github.com/emilkowalski/skills)——让智能体给出几个 UI 版本，把选中的那个保存到可分享 URL。（[示例运行](https://x.com/emilkowalski/status/2080645760530448733)）

- [Transitions.dev](https://transitions.dev/)——33+ 个精致 UI 过渡效果，可复制为 CSS 或 React，或作为可安装的智能体技能。（[推文](https://x.com/Jakubantalik/status/2081036752924352811)）

- [sharechat](https://sharechat.val.run/)——把 Claude Code 或 Codex 会话作为未列出链接分享；无需注册，无需登录即可阅读。

Afters

@PjoyAI @lakshyaag 我觉得宣布这种事的方式不是改个人简介，而是贴出我刚发给团队的十段文章？

—— Andrej Karpathy，2026-07-26

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@keshavatearth](https://x.com/Keshavatearth)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Claude-Opus-5 #Fable-5 #Anthropic #开源权重 #ChatGPT-Voice #AI
