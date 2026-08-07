---
published: 2026-07-14
title: "如何使用 GPT-5.6"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/How to use GPT-5.6.md"
source_note: "[[信息源/Ben's Bites/How to use GPT-5.6]]"
source_sha256: 27eb49b8000551ea55c42dcb654a9d990bb50d46e541eb1961e357c7e6986ee8
original_url: "https://www.bensbites.com/p/how-to-use-gpt-56"
processed: 2026-08-07
language: zh-CN
---

# 如何使用 GPT-5.6

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-07-14
> - 原文链接：[打开原文](https://www.bensbites.com/p/how-to-use-gpt-56)
> - Vault 原文件：[[信息源/Ben's Bites/How to use GPT-5.6|查看原始文件]]

## 摘要

- OpenAI 向所有人开放 GPT-5.6 系列（Luna、Terra、Sol），ChatGPT macOS 应用与 Codex 应用合并，新增 ChatGPT Work 模式与 ChatGPT Sites 插件。
- GPT-5.6 每个模型有 5 档思考级别（light、medium、high、xhigh、max）和新的 Ultra 模式，高思考级别会快速消耗使用额度。
- 作者推荐默认使用 Sol medium 做构建/创意工作，后台智能体做更难任务，日常生产力用 Luna xhigh；Sol 在计算机使用（Computer Use）上表现出色。

## 正文

大家好，

OpenAI 终于向所有人[发布了 GPT-5.6 系列](https://openai.com/index/gpt-5-6/)，伴随大量产品改动。ChatGPT 的 macOS 应用和 Codex 应用现已合并，新增了一个叫 [ChatGPT Work](https://x.com/OpenAI/status/2075274271845404744) 的模式。你可以更新 Codex 应用获得新的合并应用。Codex 和 Work 看起来很像，细节针对编码相关与非编码相关工作做了微调。还有一个叫"ChatGPT Sites"的新插件，让你构建托管网站，并可选择启用"Login with ChatGPT"功能。它用于分享很不错，但一直让我烦——它把我在 ChatGPT Sites 上问的所有东西都做成站点，所以我把它关掉了。

GPT-5.6 系列有三个模型：Luna、Terra 和 Sol。每个都带 5 档思考级别——light、medium、high、xhigh、max——还有一个新模式：Ultra 模式。Ultra 模式基本上让这些模型带着子智能体"放飞自我"。

现在……这些模型在较高思考级别下会更快消耗你的使用额度。所以别一上来就 Ultra 拉满；这是我第一次在 Codex 里差点用完额度。我的默认配置是：大部分构建/创意工作用 Sol medium，更难的任务交给后台智能体，日常生产力用 Luna xhigh。

我注意到的一些通用规律：

- Sol 很擅长 UI，但一旦你给它一些参考，它会更强。Max 思考下的 Sol 写作很好，聊天也很有趣。

- Terra 感觉像是 5.5 的替代品，UI 和写作能力有小幅提升。它也更好驾驭，所以技能（skills）对它很有用。

- Luna 有点"迷你模型"的味道，比如在模糊的提示词下它有时"get 不到"你的意思。但定义清楚的任务它不会失败。

上周末，OpenAI 在修复应用合并引入的 bug 期间重置了 4-5 次使用额度，并暂时取消了 5 小时使用限制。注意这一点，因为你可能一次性用完一周的额度。

Codex 应用里的这些模型在 Computer Use 上非常强，也就是让光标自己动，打开应用、点击按钮、看着屏幕使用它们。你一定要试试，用 Sol medium/high 跑个小任务看看效果。

延伸阅读：

- [Sol 帮助后训练了 Luna](https://x.com/jxnlco/status/2075437278596669799)。

- [在你的 iMessages 上训练模型](https://x.com/skirano/status/2075283308276220011)。

- [不烧额度地使用 GPT-5.6](https://x.com/theo/status/2076078865060151465)。

Ben's Bites 由 [Voices](https://www.voices.com/landing/off-the-shelf-catalogue?utm_source=bens_bites&utm_medium=newsletter&utm_campaign=client_ots-bulk-sales-play_2026) 赞助

在构建或训练语音模型？别再去抓取了。[Voices](https://www.voices.com/landing/off-the-shelf-catalogue?utm_source=bens_bites&utm_medium=newsletter&utm_campaign=client_ots-bulk-sales-play_2026) 提供现成的、专业指导且完全授权的语音数据——这是 10 万+ 小时定制高级数据的一部分。角色表演、43 种情绪状态、8 种语言。[今天申请样品](https://www.voices.com/landing/off-the-shelf-catalogue?utm_source=bens_bites&utm_medium=newsletter&utm_campaign=client_ots-bulk-sales-play_2026)。

头条

- Anthropic 再次[延长 Fable 5](https://x.com/claudeai/status/2076351399999557669) 在付费套餐和 Claude Code 中的使用期限，每周额度提高 50%，直到 7 月 19 日。这感觉像在开玩笑。

- [Claude Code 有了应用内浏览器](https://x.com/ClaudeDevs/status/2075635283211772279)——让 Claude 打开并点击浏览文档、设计稿或你的应用。[Claude Code Artifacts](https://x.com/ClaudeDevs/status/2076789349145092230) 现在支持公开链接和多人在线编辑，包括通过 Slack 中的 Claude Tag 创建的页面。

- [Meta 发布 Muse Spark 1.1](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/)——面向编码、计算机使用和智能体任务的多模态模型，上下文窗口 100 万 token。Meta 也开始在 API 中提供模型，Muse Spark 1.1 的定价相对同类更便宜。

- [Apple 起诉 OpenAI](https://apnews.com/article/apple-openai-lawsuit-trade-secrets-theft-6fff8833f5889d86406b89a02dd8fb16) 和两名前员工，指控其为即将推出的 AI 硬件窃取商业机密。Apple 称候选人被告知要分享机密信息、把实体零部件带到面试现场；OpenAI 表示对别人的机密没有兴趣，正在审视此案。

- [Notion Ship OS](https://www.notion.com/product/ship-os) 在一个工作区里跑完从客户反馈到合并 PR 的整个产品开发流程。智能体负责分诊、路由和总结工作，人来做判断，全部基于 Notion 现有的文档和数据库。

[立即订阅](https://www.bensbites.com/subscribe?)

我的信息流

- [值得构建的未来是人本的](https://thinkingmachines.ai/blog/the-future-worth-building-is-human/)——Thinking Machines 的新使命宣言，为"许多由本地知识塑造的 AI"辩护。

- [Tend](https://x.com/every/status/2075619608325922989)——面向收件箱、招聘或客服的开源 ChatGPT Work 循环，从你的批准中学习。

- [v0 Design Systems 2.0](https://x.com/v0/status/2075589636227735902)——导入组件、Figma 和 Storybook，让生成的应用使用你真实的系统。

- [NameThat](https://namethatui.com/)——UI 模式的可视化词典，让你看得见却不知道怎么向智能体描述的界面。

- [OptionAFK](https://optionafk.com/)——私有且快速的听写 + 转录工具箱，你的智能体可用。

- [shadcn/typeset](https://x.com/shadcn/status/2075600582518124657)——一个可编辑的 CSS 文件，用于给博客、文档和流式聊天中的 Markdown 排版。

- [Inference AutoTune](https://x.com/samhogan/status/2076044602554159240)——号称约 2 小时、不到 250 美元就能把一个前沿模型蒸馏成你自己的 1-30B 专家模型。

- [Cloud Run 沙箱](https://x.com/steren/status/2075248370587697213)——Google Cloud 为智能体提供的隔离计算机。

- [关于 AI 记忆的热议观点](https://x.com/samzliu/status/2075737137341940098)——为什么检索和更长上下文解决不了公司级记忆问题。

- [一个运转良好的软件工厂](https://x.com/piersonmarks/status/2075361336381555096)——定时智能体创建 Linear issue；一个标签触发 Claude 去修复它们。（[什么是软件工厂？](https://x.com/chamath/status/2075514068064944593)）

- [控制想法，而不是代码](https://antirez.com/news/169)——智能体擅长局部代码；人类应该掌握设计、测试和方向。

- [AI 最大的赢家可能是利润率最低的](https://x.com/dkfromdk/status/2075696599242821979)——智能体可以降低实体企业的协调成本。

- [反向信息悖论](https://x.com/satyanadella/status/2076323181154230284)——Satya Nadella 认为，企业应该拥有让 AI 变得有用的修正和反馈。

Afters

@aiDotEngineer，我发布了 2026 年 AI 工程调查：1000+ 名 AI 工程师关于模型选择、自建还是购买、谁在用 AI 交付产品，以及（当然）GPU 是否会去太空。

今年我们与 @NotionHQ 和 @vercel 合作完成。一些亮点 🧵

—— Barr Yaron，2026-07-08

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@keshavatearth](https://x.com/Keshavatearth)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#GPT-5-6 #OpenAI #ChatGPT-Work #Codex #模型评测
