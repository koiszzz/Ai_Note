---
published: 2026-06-02
title: "Opus 4.8"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/Opus 4.8.md"
source_note: "[[信息源/Ben's Bites/Opus 4.8]]"
source_sha256: f9d53f504f4fb7f5ad40d5cd18e61ed08bbc129f10557e1eb364a5f98f673b7a
original_url: "https://www.bensbites.com/p/opus-48"
processed: 2026-08-07
language: zh-CN
---

# Opus 4.8

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-06-02
> - 原文链接：[打开原文](https://www.bensbites.com/p/opus-48)
> - Vault 原文件：[[信息源/Ben's Bites/Opus 4.8|查看原始文件]]

## 摘要

- Claude Opus 4.8 发布，Claude Code 引入动态工作流：Claude 会编写编排脚本，然后并行衍生子智能体处理复杂任务；Simon Willison 称之为"适度但有用的升级"。
- Anthropic 秘密提交 S-1 并完成 650 亿美元 H 轮融资（投后估值 9650 亿美元）；NVIDIA 与 Microsoft 推出面向个人 AI 智能体的 RTX Spark 芯片。
- Opus 4.8 在 ARC-AGI-3 上拿下榜首，分数是 GPT-5.5 的三倍；但 Datacurve 的新基准将其排在 GPT-5.5 之下。

## 正文

大家好，

我正尽可能多地离开 Twitter，以及任何一般的 doomscroll 分心源。我有工作要做（那个课程/手册/管它叫什么的东西）。

目标是这个月至少把"预览"课程发出来。

今天我不会在开场里硬挤什么智慧，那不是我的风格。

进入 AI 狂潮的精简版……

Ben's Bites 由 [Smallest AI](https://smallest.ai/?utm_source=benbites&utm_medium=newsletter&utm_campaign=prime2june) 赞助

Pulse 是世界上最快的声音转文字模型（在 [Sierra 的 μ-Bench](https://research.sierra.ai/mubench/) 的 P95 延迟上排名第一），准确率顶尖（[Artificial Analysis](https://artificialanalysis.ai/speech-to-text/non-streaming) 排行榜上 WER 低于 5%），支持 39 种语言和 100+ 口音。

使用代码 [BYTE25-N3CX3UKV](https://app.smallest.ai/dashboard?utm_source=benbites&utm_medium=newsletter&utm_campaign=prime2june) 获得 25 美元免费额度（有效期至 6/6）

头条

- [Claude Opus 4.8 发布了](https://www.anthropic.com/news/claude-opus-4-8)，Claude Code 带来动态工作流。Claude 现在会编写编排脚本，然后并行衍生子智能体来处理复杂任务。[Dex 的看法](https://x.com/dexhorthy/status/2060144982372340155)：这并不能证明松散的多元智能体系统可行。围绕小型智能体循环的确定性工作流更可靠。

- Claude Opus 4.8——[Simon Willison 称之为适度但有用的升级](https://simonwillison.net/2026/May/28/claude-opus-4-8/)，主要是因为它在不确定性面前更诚实，更不容易漏掉自己代码里的缺陷。[Every 的氛围检查](https://x.com/danshipper/status/2060061586018951546?s=20)则更乐观：他们发现相比 4.7 是一次大跃升，在编码/写作/知识工作方面很强，在他们内部的高级工程师基准上与 GPT-5.5 有竞争力。问题出在 harness 上：模型回来了，但 Claude 的应用仍然感觉比 Codex 乱。[在 ARC-AGI-3 上拿下第一](https://x.com/arcprize/status/2061512025638121516?s=20)，分数是 5.5 的三倍

- [Datacurve 的新基准](https://deepswe.datacurve.ai/)把它排在 GPT-5.5 之下，只比 5.4 略好。而且 token 消耗大得多……$$$。

- [Anthropic 秘密提交了 S-1](https://www.anthropic.com/news/confidential-draft-s1-sec)，并完成了[650 亿美元 H 轮融资，投后估值 9650 亿美元](https://www.anthropic.com/news/series-h?939688b5_page=1&refid=f12170c9-3765-478f-9679-5ed11bf6510b)。今年 IPO？

- [NVIDIA 和 Microsoft 正在为个人 AI 智能体重塑 Windows PC](https://nvidianews.nvidia.com/news/nvidia-microsoft-windows-pcs-agents-rtx-spark)——RTX Spark 是一颗 1 petaflop 的 Windows 超级芯片，最高 128GB 统一内存、完整 CUDA/RTX 支持、本地运行 120B 模型，以及新的 Windows 智能体安全原语 + NVIDIA OpenShell。Microsoft 的 [Surface Laptop Ultra](https://blogs.windows.com/devices/2026/05/31/introducing-surface-laptop-ultra-made-for-world-makers/) 是旗舰设备。

- [Codex 正在成为所有人的生产力工具](https://openai.com/index/codex-for-knowledge-work/)

- [Stacker 的 AI Accelerator](https://stacker.ai/?utm_source=bensbites&utm_medium=newsletter&utm_campaign=ai-accelerator) 为准备全面拥抱 AI 的企业提供 50 万美元推理额度。入选公司获得额度和手把手指导，在运营中部署 AI 智能体。申请 6 月 9 日截止。[立即申请](https://stacker.ai/ai-accelerator?utm_source=bensbites&utm_medium=newsletter&utm_campaign=ai-accelerator)。*

[立即订阅](https://www.bensbites.com/subscribe?)

我的信息流

- [Stacker](https://stacker.ai/?utm_source=bensbites&utm_medium=newsletter&utm_campaign=tool-placement) 是一个帮你把业务中的点连起来的 AI 同事。Stacker 住在 Slack 里，连接你的工具，做实事。*

- ChatGPT 有了针对长对话的新[目录 UI](https://x.com/ChatGPTapp/status/2060467129066070182)，以及一个可以把草稿保存到 Library 的[全屏长文写作模式](https://x.com/ChatGPTapp/status/2061571468992126982)。

- Codex 在 Windows 上获得了[计算机使用 + 移动端远程控制](https://x.com/OpenAI/status/2060428604727771421)以及一个 [Python SDK](https://x.com/reach_vb/status/2061569472792572163)。

- [Replit 加了 Canvas](https://docs.replit.com/learn/projects-and-artifacts/canvas)，用于创建变体、标注、比较设计方向并把改动应用回你的应用。

- [Figma Make 现在能作用于你的本地代码](https://www.figma.com/blog/figma-make-now-on-your-local-code/)——可视化编辑应用、标注、聊天和开 PR。

- Linear 的新产品 [Diffs](https://linear.app/changelog/2026-05-27-linear-diffs) 把 PR 评审带进 Linear，支持引导式评审和智能体迭代。

- [SkillSpector](https://github.com/nvidia/skillspector)——NVIDIA 为技能打造的新安全扫描器。

- [Google AI Studio](https://x.com/OfficialLoganK/status/2061568290984800740) 现在可以构建连接 Gmail、Drive、Sheets 等的应用，无需再跳各种 Google Cloud 界面。

- [Agent Cookie](https://x.com/mvanhorn/status/2061259423197372566)——把 cookie、CLI token 和 API 密钥从笔记本同步到运行 OpenClaw/Hermes 的 Mac mini。

- [面向员工的 Agent Handler](https://www.merge.dev/agent-handler/employees)：为每位员工提供安全的 AI 访问。

- [Impeccable 3.5](https://x.com/pbakaus/status/2060208540992880794)——面向编码智能体的设计技能，带特定模型的反模式规则。

- 帮助智能体[理解你的代码库](http://x.com/leerob/status/2061557826787344781)的四条建议。

- [Sandboxes](https://crystalxtang.substack.com/p/sandboxes) 正在成为智能体的操作系统。

- 关于 /goal 及如何在 Codex 中使用它的[30 分钟节目](https://x.com/clairevo/status/2059685739548336443)。

- 3 个月构建 Grok Imagine，以及 [Video Agents](https://www.latent.space/p/video-agents)。

- 今年你能听到的最[理性的 AI 观点](https://www.youtube.com/watch?v=BD3vLtWhT5A)

Afters

animations.dev/vocabulary

—— Emil Kowalski，2026-06-01

@benedictevans：

1. 我们正处于 AI 的 1997 年——它和互联网或移动一样重大，也只和互联网或移动一样重大。我们处在一个大多数东西还不太能用、人们将要构建的大多数东西还没被构建的阶段，……

—— Lenny Rachitsky，2026-06-01

（引用的推文：与 @benedictevans 进行一场关于 AI 真正走向何方的理性对话。20 多年来，Benedict 一直是关于技术走向及其如何影响我们生活的最清晰、最可靠的思考者之一。他担任 a16z 的驻企"思想家"超过 5 年，并花了……）

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@keshavatearth](https://www.x.com/keshavatearth)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Claude-Opus-4-8 #Anthropic #NVIDIA #RTX-Spark #Codex #AI模型
