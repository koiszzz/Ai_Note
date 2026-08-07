---
published: 2026-07-30
title: "10 亿 ChatGPT 用户"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/1 Billion ChatGPT users.md"
source_note: "[[信息源/Ben's Bites/1 Billion ChatGPT users]]"
source_sha256: d9300b19b5a8af54dcd90dddb438875e4fd9403b5108a00d5095b63e5d1de586
original_url: "https://www.bensbites.com/p/1-billion-chatgpt-users"
processed: 2026-08-07
language: zh-CN
---

# 10 亿 ChatGPT 用户

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-07-30
> - 原文链接：[打开原文](https://www.bensbites.com/p/1-billion-chatgpt-users)
> - Vault 原文件：[[信息源/Ben's Bites/1 Billion ChatGPT users|查看原始文件]]

## 摘要

- 继续上周二"动手构建"的尝试，作者在画布上又做了几个小部件（X 书签、邮件、待办），并用 Codex 现场搭了一个录屏工具；软件越来越容易造，造工具的工具却没跟上。
- 作者将 Codex/ChatGPT 作为编排者指挥其他智能体（如 Claude）协作，Codex 为其他智能体生成提示词的能力令人印象深刻，能自动建立监控并回传截图。
- 头条摘要：OpenAI 用 Sol 优化 Sol 降低 20% 服务成本并登顶 ARC-AGI-3；HF 公布模型入侵事件 17,600 步回放、Modal Labs 客户账户被侵入；ChatGPT 周活逼近 10 亿；Grok 上线应用构建器。

## 正文

大家好，

继周二的"动手瞎折腾"之后，我又在我的画布上做了几个小部件。它能拉取我的 X 书签、邮件和待办事项。

@tldraw offline 太棒了（推文嵌入）。

在录这个视频之前，我根本没有安装 Loom（被收购之后它就烂透了），所以直接让 Codex 给我造了一个。

[![图片](https://substackcdn.com/image/fetch/$s_!bHFv!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd3be4c96-66db-4a4c-a8ba-ec53ed0592c0_2220x926.png)](https://substackcdn.com/image/fetch/$s_!bHFv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd3be4c96-66db-4a4c-a8ba-ec53ed0592c0_2220x926.png)

我画了左边的图，然后直接把那个提示词发过去，它立刻就成功了。

所以说，当软件和小工具越来越容易创建时，用来创建它们的工具却并没有……

我把 Codex 当作默认应用，因为它比所有其他应用都好用，而且移动端体验最佳。但我刚下载了 [t3](https://x.com/theo/status/2082277789395501263)，因为它基本是抄了它的界面和功能，但让你可以在不同智能体之间选择：codex、claude、cursor（pi + droid 即将推出）。它出自一位信誉良好的开发者之手（你以前可能在这里见过他），所以我相信它构建得很扎实。

目前，我会让 Codex/ChatGPT 当编排者，去让 claude 处理设计相关的问题。这勉强能用，但从用户体验的角度来说算不上好。

我通过这样操作注意到的是，Codex 为其他智能体生成提示词的能力有多强。我只要在会话里正常聊天，然后说"用 X 智能体实现这个。盯着它的进度，每有新工作落地就发截图给我。"然后它就会建立自己的监控，大约每 5 分钟一次，并在同一个线程里用截图向我更新。

接下来几天我打算整理一期"本周精选"邮件，总结当下发生的所有事情、大家在聊的主题（循环？！、软件工厂？！等等），并加以解释。

如果你有什么特别需要弄明白的，告诉我（我可能也需要）。

Ben's Bites 由 [Brief](https://briefhq.ai/bens-bites/) 为您呈现

被碎片化的上下文、缓慢的产品决策和返工折磨？Brief 将你关键的产品上下文提炼成一张有主见的图谱，然后在你工作的每个地方（如 Slack、Claude Code、电子邮件）部署一个 PM 智能体，降低对齐成本、加速循环。[了解更多。](http://briefhq.ai/bens-bites/)

### 头条

[OpenAI 用 Sol 优化 Sol 本身](https://x.com/OpenAI/status/2082577277246972300)，服务成本降低 20%，生成 token 的效率提高 15% 以上。而且事实证明，它也在 [ARC-AGI-3 上登顶](https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores/)。

但有个问题：OpenAI 表示，官方 ARC-AGI 测试框架会"忘记"Sol 每轮的推理、并禁用压缩，从而损害其表现。修复这两点后，Sol 的分数从 13.3% 提升三倍达到 38.3%，而且输出 token 少了 6 倍。

关于上周 OpenAI 模型入侵 Hugging Face 的闹剧——HF 发布了该模型约 [17,600 个动作的完整回放](https://huggingface.co/blog/agent-intrusion-technical-timeline)。[METR 和 Redwood Research](https://x.com/METR_Evals/status/2082644379895050339) 也将独立审查所发生的事情。

不过 OpenAI 还没脱困，一份[路透社报道](https://www.reuters.com/business/openais-rogue-agent-compromised-an-account-second-tech-firm-sources-say-2026-07-28/)称，同一个模型侵入了另一家公司（Modal Labs）的一个客户账户，有传言说受影响的公司更多。

Anthropic 还声称 [Claude Mythos 在两种加密算法上发现了更优的攻击](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)，不过两者都不影响目前使用的系统。

另外（当然完全不是对这一趋势的回应，对吧？），在领先 AI 公司（OpenAI、Anthropic 等）工作的约 1300 人希望美国政府帮助"[为前沿 AI 设定节奏](https://www.pacingthefrontier.com/)"。节奏变快时这有点意料之中，但这次很多"模型制造商"自己都赞成这种暂停/放缓。

顺便说一句，The Information 报道 [ChatGPT 正逼近每周 10 亿用户](https://x.com/theinformation/status/2082526654446940539)——这是 OpenAI 原本希望在七个月前达成的里程碑。本周 OpenAI 更多动态：[Codex Security CLI](https://github.com/openai/codex-security)、为[学术研究人员](https://openai.com/index/chatgpt-for-academic-researchers/)提供的免费前沿模型访问，以及[两个新的转录模型](https://x.com/OpenAIDevs/status/2082201169443905798)。

[Grok 应用构建器](https://x.com/nikitabier/status/2082140254237241588)——Grok 现在在其应用内有了 vibe coding 界面。创建游戏和应用，并可直接分享到 X 时间线。另见 [Drawesome](https://x.com/benjitaylor/status/2082539313796182268)——一个零依赖的 React 绘图工具栏，用 Grok Build 在周末完成。

[Pangram 4](https://www.pangram.com/blog/introducing-pangram-4) 声称能捕获 98.83% 的"人性化"AI 文本，约每 24,000 份文档出现一次误报。一个早期测试在一篇 1,198 词的短文中[找出了全部 38 个 AI 写的词](https://x.com/N8Programs/status/2082573906330652707)，尽管并非每次运行都能做到。它新的[图像检测器](https://www.pangram.com/blog/introducing-pangram-image-detection)也声称有 99.5% 的准确率。

[立即订阅](https://www.bensbites.com/subscribe?)

### 快速链接

- [Tavus](https://www.tavus.io/pal-maker) - 构建"活过来"的 AI：实时看、听、答的视频智能体，能做你想做的任何事。使用 TAVUS50 享 50% 折扣。

- 7 月用 [Mintlify](https://x.com/hahnbeelee/status/2082542239482614212) 构建的文档中，66% 的流量来自智能体。

- Resend [给自己的定价页加了个 MD 版本](https://x.com/zenorocha/status/2081752561028080026)，以免把智能体搞糊涂。

- [0%、50% 还是 200%](https://www.danshapiro.com/blog/2026/07/0-50-or-200/) - 忽略 AI、员工砍半，或者雄心翻倍。

- [Slackbot](https://x.com/SlackHQ/status/2082561315151687733) 现在可以在后台运行代码，用于数据分析、幻灯片制作，以及生成实时报告或小部件。

- [Gemini 的 macOS 应用](https://blog.google/innovation-and-ai/products/gemini-app/speak-naturally-gemini-app-mac-os/)有了语音模式，让你随意漫谈，应用会把它转成一条干净的提示词。按住 Fn 试试。

- [AI 的未来属于所有人](https://www.wsj.com/opinion/the-ai-future-is-for-everyone-a0c24e20) - Mark Zuckerberg

- [Replit Design](https://replit.com/design) - 从提示词、URL、Figma 文件或截图制作网站、原型和图形。

- [AI 与劳动力到底哪里出了问题](https://x.com/random_walker/status/2082163285588107752)。

- [Kami](https://www.trykami.app/) - 开源 Hermes 智能体：寻找客户、准备外联和内容，经你批准后再行动。

- [Coast](https://coast.app/) - 为你和你的智能体提供完全本地的记忆，基于你在 Mac 上看到的内容构建。

- 软件工厂中的[务实杠杆](https://x.com/dexhorthy/status/2082510831858893115)。

- [Crew Studio](https://x.com/joaomdmoura/status/2082133609264374271) - 找到智能体能帮你业务的有用点子，构建这些智能体，还能选择把代码带回家、在任何地方运行。

- [HeyGen 视频播客](https://app.heygen.com/apps/video-podcast) - 把文档、链接或想法变成双主持人视频，带场景、镜头切换和 B-roll。

- [Copper](https://shadcn.com/copper) - 本地暂存板，用于跨你的 AI 应用保存答案、链接和后续提示词。

- [FT Chart Doctor](https://github.com/Financial-Times/chart-doctor) - 选择适合你所需表达关系的图表的视觉词汇和示例。

- [Mitchell Hashimoto](https://x.com/mitchellh/status/2082489600715661389)（Ghostty）和 [Andrew Ng](https://x.com/AndrewYNg/status/2082199333920027009)（deeplearning.ai）都在创办新公司：[Superlogical](https://www.superlogical.com/) 和 [LearnVector](https://learnvector.ai/)。

- [MCP 的最大更新](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude)消除了服务器记住每个进行中连接的需求，让它们更容易运行和扩展。

Afters

@richardpenner 对 ASD-STE100 到底是什么的自指式解释（推文嵌入）。

引用的推文："解决办法是：只准用 ASD-STE100 简化技术英语向我汇报。"

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@keshavatearth](https://x.com/Keshavatearth)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Ben-s-Bites #ChatGPT #OpenAI #Sol #ARC-AGI-3 #Codex #AI资讯
