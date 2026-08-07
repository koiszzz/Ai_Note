---
published: 2026-05-28
title: "我又注册了一个 SaaS"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/I signed up for another SaaS.md"
source_note: "[[信息源/Ben's Bites/I signed up for another SaaS]]"
source_sha256: cb2f14c8e231623c570cedefb6e2e077ec94fd6369bff1aeb49ff8ac5dd7fc5d
original_url: "https://www.bensbites.com/p/i-signed-up-for-another-saas"
processed: 2026-08-07
language: zh-CN
---

# 我又注册了一个 SaaS

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-05-28
> - 原文链接：[打开原文](https://www.bensbites.com/p/i-signed-up-for-another-saas)
> - Vault 原文件：[[信息源/Ben's Bites/I signed up for another SaaS|查看原始文件]]

## 摘要

- 作者为了制作课程/参考手册中的交互式组件，尝试了无数模型和工具，最终通过 Magic Path 找到了解决方案——多个智能体可以在一个大共享画布上生成设计资产、组件和动画。
- Claude Code 现在有安全插件，会在代码写入时检查常见风险模式；DeepSWE 基准用 113 个原创长程任务测试智能体，当前榜首是 GPT-5.5（70%）。
- Madison 从董事会加入 Factory 团队，作者认为这是该公司的重要信号。

## 正文

大家好，

"SaaS 可能已死"——我，星期二

刚又注册了一个 SaaS 工具——我，昨天

我正非常努力地为正在做的课程/参考手册制作交互式组件。这样你作为用户可以"感受"概念，帮助理解它们。

我试过太多模型、工具和方法来开发自己的组件风格，既要好看又要感觉对。我想我终于找到了……

我在推上吐槽了我的挫败感，去年在 OpenAI Dev Day 认识的 Pietro 提醒我试试 Magic Path。你可以让多个智能体在一个大共享画布上生成设计资产、组件、动画等。

我先拿一个有趣的实验试了试，它生成了一些非常棒的机械风格组件。

@skirano

（引用的推文：设计圈的朋友们，帮个忙？

我在构建交互式、带动画的组件

我在用 shadcn、tailwind、motion、tegaki、rough-notation。

我想要一个组件生成器，帮我轮换变体、主题、布局，混搭不同组件之类的东西……

—— Ben Tossell，2026-05-27）

所以现在我有了真正的工作流和工具来生成我想要的组件。我可以玩不同的风格，调整组件的细节部分——按钮、提示输入框等。

早期不同风格的实验

于是我很快用完了 Magic Path 的免费套餐，然后果断注册了专业版 😬。

Ben's Bites 由 [Palabra.ai](http://palabra.ai/) 赞助——实时语音 AI 翻译器

比人工口译便宜 9.3 倍。Palabra.ai 为电话、活动和直播提供 60+ 种语言的实时语音翻译——或通过 [API](http://palabra.ai/voice-translation-api?utm_campaign=newsletter_promo&utm_source=bensbites&utm_medium=emai) 嵌入任何应用。DHL、UNICEF、Paramount、BCG 和 Deloitte 都在使用。[免费试用](https://www.palabra.ai/?utm_campaign=newsletter_promo&utm_source=bensbites&utm_medium=emai)。

头条

- [Claude Code 现在有安全插件](https://claude.com/plugins/security-guidance)，会在 Claude 写代码时检查，并在发现常见风险模式时发出警告，比如不安全的命令执行、不安全的 HTML 处理或危险的 Python 代码。

- [DeepSWE](https://deepswe.datacurve.ai/) 在 91 个活跃仓库和五种语言中用 113 个原创长程任务测试智能体。提示比 SWE-bench Pro 更短，但修复要大得多：平均 668 行、7 个文件。当前排行榜：GPT-5.5 70%、GPT-5.4 56%、Claude Opus 4.7 54%、Claude Sonnet 4.6 32%。

- 从董事会到[构建软件工厂](https://x.com/maddiehfaulkner/status/2059356186135458227)。这种事不常发生，但我最近见过几次——公司的投资人离开，去加入他们投资的公司。Madison 加入 Factory 是一个重大信号，也是团队的重要补充。还记得吗，我是 Factory 的投资人，去年加入，但今年早些时候离开了，因为我们家一群小屁孩把我生活搅得天翻地覆，留给工作的时间越来越少。3 个 3 岁以下的孩子工作量真的很大 😅。

[立即订阅](https://www.bensbites.com/subscribe?)

我的信息流

- [Software after software](https://x.com/thorstenball/status/2059304318055150066?s=20)——非常值得一读，强烈推荐。Thorsten 运营编码 harness Amp，对这个领域总有独到见解。

- [Clanker](https://lucumr.pocoo.org/2026/5/26/clankers/)——为机器造一个词。

- [Mainframe](https://mainframe.app/)——把智能体完成的工作变成给团队的短视频回顾。

- [Granite](https://www.producthunt.com/products/granite)——所有文件的长期文档。丢进去，不用打标签/建文件夹，之后用自然语言搜索。

- [Surya OCR 2](https://huggingface.co/datalab-to/surya-ocr-2)——6.5 亿参数的 OCR/文档模型。

- [Claude Code 技巧](https://x.com/trq212/status/2059363113963540788)，用于非技术任务——把一堆文件放进文件夹，告诉 Claude Code 它可以写脚本、做 HTML。

- Ramp 用 1 万个自建安全智能体，在六天内[发现、验证并修复了近 100 个安全问题](https://engineering.ramp.com/post/100-vulnerabilities-patched-with-0-humans)，合并前由人工审查 PR。

- [Slippery Slope](https://x.com/MaxBrodeurUrbas/status/2059736090937081980)——让智能体插在人和手艺之间是很容易的事。

- [Supermemory](https://supermemory.ai/)——为你的智能体添加上下文的基础组件。

- [Cursor 训练 Composer 2.5](https://x.com/sonyatweetybird/status/2059323965219491937) 的方式，是在 Cursor 真实的 harness 里做强化学习。

- [Polar](https://x.com/billxbf/status/2059323616009838703)——把你的智能体 harness 作为训练环境微调模型，无需改代码。

- [Parse 2.0](https://www.extend.ai/resources/parse-2-and-realdocbench-launch)——全球最准确的文档解析 API。

- OpenAI 正在[吸纳大量有才华的开发者](https://repoprompt.com/blog/repo-prompt-next-chapter/)，最近一位是构建了 RepoPrompt 的 Eric。对 OAI 来说是重大收获，恭喜 Eric 😊

- 来自全能发货人 Peter Steinberger 的[自动评审技能](https://github.com/openclaw/agent-skills/blob/main/skills/autoreview/SKILL.md)。

- [howtoeval](https://www.howtoeval.com/)——关于评估 AI 智能体的干货指南。

Afters

openaifoundation.org/news/economic-…

—— Sam Altman，2026-05-27

@thdxr（还有很多真话炸弹：）

时间戳：

00:00 开场
07:03 Dax 进入科技行业的路径
09:04 早期创业经历
13:16 参与开源

—— Gergely Orosz，2026-05-27

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@keshavatearth](https://www.x.com/keshavatearth)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Claude-Code #DeepSWE #智能体 #SaaS #AI工具
