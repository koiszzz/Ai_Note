---
published: 2026-06-09
title: "嘿 Siri，认识一下 AI"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/Hey Siri, meet AI.md"
source_note: "[[信息源/Ben's Bites/Hey Siri, meet AI]]"
source_sha256: 5438bdc46c5c149b51ff1045be1609413a7ac9fc958129e3a36a659a88129524
original_url: "https://www.bensbites.com/p/hey-siri-meet-ai"
processed: 2026-08-07
language: zh-CN
---

# 嘿 Siri，认识一下 AI

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-06-09
> - 原文链接：[打开原文](https://www.bensbites.com/p/hey-siri-meet-ai)
> - Vault 原文件：[[信息源/Ben's Bites/Hey Siri, meet AI|查看原始文件]]

## 摘要

- Apple 终于推出了专门的 AI 产品 Siri AI，混合使用本地与云端模型（部分基于 Gemini），全部归属 AFM 3 模型家族。
- ChatGPT 的记忆系统升级到 Dreaming v3，可查看和编辑保存的记忆；NotebookLM 核心聊天从 RAG 升级为类智能体系统（Antigravity harness）。
- 作者分享了"设计循环"（designing the loop）的思考：把大任务拆解成计划文件中的小任务，让智能体自主执行并自我校验，再回到计划中拾取下一项。

## 正文

大家好，

最近 X 上关于"循环"（loops）的讨论很多。这也是我一直在琢磨的话题。我对 [Peter 发的内容](https://x.com/steipete/status/2063697162748260627)的理解是：

智能体就是循环：你给它一个任务，它用已有的上下文审视任务，用工具收集更多信息，并在它认为任务完成时给你输出。

但把那些部分模仿进一个更大的系统，让你的智能体更自主、更持久地运行，去啃更硬的工作块——我认为这才是"设计循环"（designing the loop）所谈论的。

所以你要预先设计一个更大的任务，比如一个 plan.md 文件，里面有一堆任务、要实现的新功能等。还要有一种让这些任务被判定为"完成且已核实"的方式——比如报告是否包含计划里的全部 10 点、UI 的所有功能是否正常、所有测试是否通过。然后提示智能体自己回到 plan.md 文件，拾取下一个任务。

我一直在为一个参考手册做这件事——我要做很多交互式组件，所以我尝试先设计好所有组件部件，然后构建一个工作流把它们组合成交互体验。

但这也是为什么很多人把技能（skills）带进工作流：先做规划技能，然后用 PRD 技能拆分任务，再用研究技能研究每个功能，然后是构建技能、评审技能、测试技能。

这一切都是在为智能体设计文本指令，并确保它能访问完成任务所需的任何工具。

延伸阅读：

- Addy Osmani 的 [Loop Engineering](https://x.com/addyosmani/status/2064127981161959567)

- Matt Van Horn 的 [WTF is a loop](https://x.com/mvanhorn/status/2063865685558903149?s=20)（虽然写得有点 AI 马虎）

Ben's Bites 由 [Smallest AI](https://smallest.ai/?utm_source=benbites&utm_medium=newsletter&utm_campaign=prime9june) 赞助

Smallest AI Voice Agents 为你提供生产级基础设施，大规模运行呼入与呼出营销活动，由自研的实时低延迟 STT 与 TTS 以及企业级电话系统驱动。企业信任它处理数百万分钟的通话。看看它能为你做什么——[预约演示](https://smallest.ai/book-a-demo?utm_source=benbites&utm_medium=newsletter&utm_campaign=prime9june)！

头条

- Apple 终于有了专门的 AI 产品——[Siri AI](https://www.apple.com/in/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/)。想象一下一年前的 ChatGPT——拥有出色的听写、图像分析，以及与 Messages 和 Maps 等外部应用的一些交互。如果它真能好用，那还不错。新的 Siri AI 混合使用本地和云端模型（部分基于 Gemini），全部属于 [AFM 3 模型家族](https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models)。这些模型还驱动嵌入应用中的其他["AI 功能"](https://www.apple.com/newsroom/2026/06/apple-intelligence-brings-powerful-ai-capabilities-into-everyday-experiences/)。我在关注那个能用纯英语 vibe-code Safari 扩展和 Apple Shortcuts 的功能。

- [ChatGPT 的记忆系统](https://openai.com/index/chatgpt-memory-dreaming/)通过一个后台进程保存记忆，你可以查看和编辑。他们称之为最新迭代 Dreaming v3，记忆召回更好，更贴合你的长期偏好，并会随着时间推移自我纠正。

- [Anthropic 的新博文](https://www.anthropic.com/institute/recursive-self-improvement)声称，开发者（在 Claude 的帮助下）写的代码量是 2025 年的 8 倍，而且这些代码现在正用于训练下一版 Claude。因此，他们主张为 AI 开发设置一个"暂停选项"，以备不时之需。

- [OpenAI 分享了下一阶段的三个目标](https://openai.com/index/built-to-benefit-everyone-our-plan/)：构建自动化 AI 研究员、加速经济、给地球上的每个人一个个人 AGI。他们还[秘密提交了 S-1](https://openai.com/index/openai-submits-confidential-s-1/)，同时声称对 IPO 并不着急。

- [NotebookLM 的核心聊天](https://blog.google/innovation-and-ai/products/notebooklm/better-research-notebooklm/)将从旧的 RAG 系统升级为类智能体系统（Antigravity harness）。每个笔记本都会获得一台云计算机，用来运行代码分析你上传的文件，配合最新的 Gemini 3.5 模型。

- 你的 Oura 戒指给睡眠打分。你的 Apple Watch 追踪心率。Workera Ambient 对你的职业生涯做同样的事：常开、从已经发生的工作中捕捉能力。你的数据，你做主。[从 Workera CEO 那里了解更多](https://www.linkedin.com/pulse/oura-ring-your-career-kian-katanforoosh-hlexc/)，并[加入候补名单](https://www.workera.ai/platform/ai-agent/ambient/join-waitlist?tab=individuals&utm_source=Email&utm_medium=email&utm_campaign=ai-agent-launch&utm_term=Ben%27sBites&utm_content=Ben%27sBites)。*

[立即订阅](https://www.bensbites.com/subscribe?)

我的信息流

- [Cursor 的 Canvas](https://cursor.com/docs/agent/tools/canvas) 让用户可以创建可分享给其他人的内部应用、仪表盘和报告。这是各家编码智能体"Claude Artifacts 但 2026 版"功能中的又一个新成员。

- Claude 能成为[化学家](https://www.anthropic.com/research/making-claude-a-chemist)吗？那为[生物学提供智能体](https://www.anthropic.com/research/agents-in-biology)呢？

- [Firecrawl Workflows](https://github.com/firecrawl/firecrawl-workflows)——用于可重复网络任务（如深度研究、SEO 审计等）的可安装技能。

- [Eloquent](https://developers.google.com/edge/eloquent)——Google 的本地转录应用（使用 Gemma）。

- [FrontierCode](https://cognition.ai/blog/frontier-code)——编码评估，测试代码是否真正可维护，而不只是通过测试。

- 在 Codex 中使用 [/goal 的指南](https://x.com/dkundel/status/2062650378089594955)。

- [Fin Voice 2](https://fin.ai/voice)——自然、快速、智能的电话客户支持。

- [Raindrop 2.0](https://x.com/benhylak/status/2062605176784187457)——捕获生产故障，交给你的编码智能体修复，并把它变成一个评估用例，防止复发。

- Cognition 保证，如果 Devin 在年度企业合同上表现不佳，将提供高达[1000 万美元的额度补偿](https://devin.ai/guarantee)。

- Vercel 的 [skills.sh](https://vercel.com/changelog/the-skills-sh-api-is-now-available) 现在提供 API，可以查询其 60 万+ 技能集合。

- [Upstash Agent Analytics](https://x.com/upstash/status/2062588002635825628)——3 行代码即可追踪网站上的 AI/智能体流量。

- Every 的 [Spiral](https://writewithspiral.com/)——面向人类和智能体的写作伙伴，具备风格计量、CLI、MCP/API 和团队风格。

- Google 正在让[廉价 AI 套餐更便宜](https://x.com/vikaskansalHQ/status/2064029977709084963)（每月 7.99 美元降到 4.99 美元），同时提供 2 倍存储空间。

Afters

@conductor_build 的 CEO 兼联合创始人 @charlieholtz 带我们详细了解他如何搭建编码和管理 AI 智能体的工作流。

00:00 – 用 Conductor 构建 Conductor
01:05 – 管理一个编码智能体团队

—— Y Combinator，2026-06-04

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@keshavatearth](https://www.x.com/keshavatearth)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Siri-AI #Apple #ChatGPT #Notion #循环工程 #智能体
