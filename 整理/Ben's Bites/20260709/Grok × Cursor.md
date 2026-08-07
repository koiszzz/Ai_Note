---
published: 2026-07-09
title: "Grok × Cursor"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/Grok x Cursor.md"
source_note: "[[信息源/Ben's Bites/Grok x Cursor]]"
source_sha256: 2931847d0420fe48a18e6ac39b230e6f436331f3e9c91972b5c54e9baca83d7b
original_url: "https://www.bensbites.com/p/grok-x-cursor"
processed: 2026-08-07
language: zh-CN
---

# Grok × Cursor

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-07-09
> - 原文链接：[打开原文](https://www.bensbites.com/p/grok-x-cursor)
> - Vault 原文件：[[信息源/Ben's Bites/Grok x Cursor|查看原始文件]]

## 摘要

- SpaceXAI 与 Cursor 联合训练了 Opus 级模型 Grok 4.5，性能介于 Opus 4.7 与 4.8 之间，但每 token 便宜得多，总成本约为 Opus 模型的 1/6、GPT-5.5 的 1/3。
- OpenAI 宣布 GPT-5.6 系列（Sol、Terra、Luna）当天晚些时候向所有用户开放；早期测试者反馈 Sol 不如 Fable 聪明，但可靠得多。
- ChatGPT Voice 迎来新模型 GPT-Live-1 和 Live-1-mini；Claude Cowork 的轻量版将支持 Web 和移动端。

## 正文

大家好，

Anthropic 将 Fable 5 在 Claude 订阅中的使用期限延长到 7 月 12 日。和之前一样的套路：每周额度最多 50% 用于 Fable，7 月 12 日之后要用预付的使用额度。但这种"胡萝卜吊着"的做法让我不再相信他们的截止日期了。

另一方面，OpenAI 宣布 GPT-5.6 系列（Sol、Terra 和 Luna）将在今天晚些时候向所有用户开放。X 上的普遍反馈（来自早期测试者）是：Sol 不比 Fable 聪明，但可靠得多，让人不想再用别的东西。

好吧，走着瞧。

Ben's Bites 由 [Flodesk](https://studio.flodesk.com/?utm_source=bensbites&utm_medium=newsletter&utm_campaign=studio-launch) 赞助

大多数 AI 工具替你生成邮件。Flodesk Studio 与你一起设计——描述你想要的，几秒钟内得到一封漂亮、符合品牌的邮件，然后在聊天中打磨或手动精修。真正的设计师功底、AI 加速、由你收尾。[试试吧](https://studio.flodesk.com/?utm_source=bensbites&utm_medium=newsletter&utm_campaign=studio-launch)。

头条

- [我们有了一个优秀的 Grok 模型——Grok 4.5](https://x.ai/news/grok-4-5)。SpaceXAI 和 Cursor 一起训练了它，这是一个 Opus 级的模型。它的表现应该大致介于 Opus 4.7 和 4.8 之间。但按 token 计算便宜得多，token 利用率也高——整体比 Opus 模型便宜 6 倍，比 GPT-5.5 便宜 3 倍。它已在 Cursor 中可用（额度提升），[也提供 API](https://docs.x.ai/developers/grok-4-5)。

- ChatGPT Voice 终于迎来新模型——[GPT-Live-1 和 Live-1-mini](https://openai.com/index/introducing-gpt-live/)。新架构让这些模型 a) 可以在你说话时同步回应而不打断你，b) 在后台使用 GPT-5.5。对话流畅度大幅提升，智能程度相比旧版高级语音模式也有明显飞跃。

- [Claude Cowork 的轻量版将支持 Web 和移动端](https://claude.com/blog/cowork-web-mobile)——会话将在远程运行并保存到你的账户，所以你可以在笔记本上发起任务、合上盖子，再从手机查看进度。桌面应用的 Cowork 仍然是完整版。测试版将在未来几周逐步推出。

- [Muse Image 和 Video](https://ai.meta.com/blog/introducing-muse-image-muse-video-msl)——Meta 的新多模态生成模型。图像更有 AI 感，但模型在图像编辑和文字渲染方面似乎不错，还能联网搜索以确保事实准确等。它们还有一个即将发布的视频模型预览版。

[立即订阅](https://www.bensbites.com/subscribe?)

我的信息流

- [Render Workflows](https://render.com/workflows)——用轻量 SDK 定义长期运行的任务，SDK 负责排队、编排和重试。[试试吧](https://dashboard.render.com/?utm_source=partner&utm_medium=newsletter&utm_campaign=2026_product_bensbitesnewsletter)——使用代码 RENDER-BENSBITES 获得 50 美元额度。*

- [Cognition 发布 SWE-1.7](https://x.com/cognition/status/2074882968770728416)——迄今最强模型，接近顶级前沿模型，成本更低，速度 1000 token/s。

- [Cloudflare Drop](https://developers.cloudflare.com/changelog/post/2026-07-08-cloudflare-drag-and-drop/)——把文件夹拖进浏览器，得到一个在线网站，无需账号。

- [Toya](https://toyo.ai/)——住在 iMessage 里的行政助理，能给你打电话，了解你和工作。（我是投资人；可以在 [Product Hunt](https://www.producthunt.com/products/toyo) 和 [Twitter](https://x.com/dctanner/status/2075117506793226345) 上看看）

- [Ora Directory](https://directory.ora.ai/)——搜索网络上智能体可以使用的工具和资源。

- 64 个 Claude 仅用 11 天就[用 Rust 重写了 Bun](https://bun.com/blog/bun-in-rust)。

- [Clicky 中的空间上下文](https://x.com/FarzaTV/status/2074973272463310905)——在屏幕上画圈，让模型知道该看哪里。

- [LoginWithChatGPT](https://x.com/leodev/status/2074827747189465388)——在应用中添加"使用 ChatGPT 登录"的非官方 SDK。

- 如何成为[应用型 AI 工程师](https://x.com/eyad_khrais/article/2074519552277336571)。

- Claude Code 中的[模型 vs 思考力度](https://x.com/ClaudeDevs/article/2074900291062034618)："大模型低思考"还是"小模型高思考"，什么时候选哪个？

- 如何把原始 Markdown 笔记变成 [LLM 知识库](https://bholmes.dev/blog/llm-knowledge-bases/)。

- 一个[托管在 Notion 上的小型 worker 集合](https://x.com/colebemis/status/2074546478232850512)，用于同步 Twitter 书签、Readwise、以 Markdown 读取网页等。（[仓库](https://github.com/colebemis/notion-workers)）

- [Perplexity Teammate](https://x.com/CharlesRollet1/status/2074635907098112193)——据报道是类似 Claude Code/Codex 的内部编码智能体。

- 技能合集：[mattpocock/skills v1.1](https://x.com/mattpocockuk/status/2074860312423997800)——/wayfinder、/research、/implement、/to-spec 和 /to-tickets。

- [Meng To 的 Agent Skills](https://x.com/MengTo/status/2074511787073106194)——面向智能体的 75 个设计、动效、WebGL 和落地页技能。

Afters

annals-kingdom.netlify.app

—— Ethan Mollick，2026-07-08

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@keshavatearth](https://x.com/Keshavatearth)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Grok #Cursor #xAI #GPT-5-6 #OpenAI #Claude
