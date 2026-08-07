---
published: 2026-06-16
title: "再见，Fable"
source: "Ben's Bites"
original_file: "信息源/Ben's Bites/Bye bye Fable.md"
source_note: "[[信息源/Ben's Bites/Bye bye Fable]]"
source_sha256: d891ef79d11563e352242dcfd704ab7b2c80f66f5c1e4ecf82ea935b404c570d
original_url: "https://www.bensbites.com/p/bye-bye-fable"
processed: 2026-08-07
language: zh-CN
---

# 再见，Fable

> [!info] 来源信息
> - 数据源：Ben's Bites
> - 发布时间：2026-06-16
> - 原文链接：[打开原文](https://www.bensbites.com/p/bye-bye-fable)
> - Vault 原文件：[[信息源/Ben's Bites/Bye bye Fable|查看原始文件]]

## 摘要

- Fable 在约 3 天内从"新最佳模型"变成"不可用"：6 月 9 日 Claude Fable 5 发布，6 月 12 日美国政府因 Fable 发现的越狱而暂停所有外国国民（含外国 Anthropic 员工）对 Fable 5 与 Mythos 5 的访问，Anthropic 干脆对所有人关闭。
- shadcn 的应对思路被引用："把智能当作借来的"——趁拥有最好模型时留下持久的计划、规格与实现笔记，之后再用更便宜或自控的方案执行。
- 头条：Factory 2.0 发布、"软件工厂"讨论升温；Ramp SWE-Bench 显示 Fable 5 > GPT-5.5 ~ Opus 4.7 > Opus 4.8（每级性能提升约 1.5 倍成本）；DeepSeek 完成 74 亿美元首轮融资、估值超 500 亿美元。

## 正文

大家好，

Fable 从"新的最佳模型"到"不可用"只用了大约 3 天。

Anthropic 于 6 月 9 日发布了 [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)。Fable 是用于一般用途的 Mythos 级模型，但带有护栏。Mythos 是 Anthropic 的新模型，只向少数公司开放，因为他们说它是网络安全风险。

然后在 6 月 12 日，Anthropic 发文称，美国政府被 Fable 发现的一个越狱吓到了（Anthropic 声称 GPT-5.5 等其他模型也能发现它）。美国政府[暂停了所有外国国民对 Fable 5 和 Mythos 5 的访问](https://www.anthropic.com/news/fable-mythos-access)，无论其在美国境内还是境外，包括外国 Anthropic 员工。

所以 Anthropic 的回答基本是：我们没法干净利落地处理这件事，那就干脆对所有人关闭。

值得一读：

- [政府方面的说法](https://x.com/DavidSacks/status/2065853007619588171)，via David Sacks。

- [Armin 的"仅限美国人"帖](https://lucumr.pocoo.org/2026/6/13/americans-only/) - 如果一个模型显然太危险，为什么边界是国籍？

- Anthropic 正在[失去天命](https://x.com/haridigresses/status/2065574450183963134)

但我真的很喜欢 shadcn 帖子里这部分——

把智能当作借来的。趁你拥有最好的模型时，用它做出持久的计划、规格和实现笔记，之后再拿更便宜的、或你掌控得了的东西去执行。—— [shadcn](https://x.com/shadcn/status/2065826989769163068)

也值得一读 Simon 的评论，他把 Fable 形容为[毫不松懈地主动](https://x.com/simonw/status/2065216774992515342)。

总之，再见吧，Fable，我想。

Ben's Bites 由 Dropbox 的 [Working Smarter](https://bit.ly/4aEbT8Q) 为您呈现

没有合适工具时，现代工作会令人沮丧又混乱。从上下文工程到多模态搜索，Dropbox 的工程师们分享他们如何构建真正理解你的 AI，让你专注在最重要的活上。[现在收听](https://bit.ly/4aEbT8Q)。

### 头条

- [软件工厂](https://x.com/matanSF/status/2066578088184680920) - [Factory 2.0](https://x.com/FactoryAI/status/2066588050617249904) 发布了，最近围绕构建"软件工厂"的讨论很多——也就是造出能造机器的机器，或者更简单地说，创建用智能体生产软件的系统、基础设施和工作流。Factory 联合创始人 [Matan 上了 20VC](https://www.youtube.com/watch?v=lgo_QbgV198)，值得一看。

- [Ramp SWE-Bench](https://labs.ramp.com/swebench)：从 Ramp 内部真实工程问题构建的编码基准。Fable 5 > GPT-5.5 ~ Opus 4.7 > Opus 4.8，但性能每上一个台阶，成本都要 ×1.5。

- Vercel 有个新工具 [drop.new](https://drop.new) - 你只需上传一个文件夹、zip 或文件，它就会把它部署成网站或应用。显然是绕开 GitHub 的路子。

- OpenAI 现在允许你保存 Codex 的[速率限制重置](https://x.com/OpenAI/status/2065225362544726371)。之后 30 天内可以随时使用。

- The Information 报道 [DeepSeek 融了 74 亿美元](https://www.theinformation.com/articles/deepseek-closes-record-7-billion-plus-funding-unusual-deal-structure)，估值超 500 亿美元。这是它第一轮融资，CEO 本人是最大的出资方（约占总融资的 40%）。

- AI 芯片越来越快，但开发者依赖的基础设施没跟上。在这篇文章里，Runpod（又名 AI 开发者云）探讨了真正的瓶颈或许在硬件外围的整条技术栈，以及开发者优先的 AI 基础设施该是什么样：[https://fandf.co/4vQDUT4](https://fandf.co/4vQDUT4)*

[立即订阅](https://www.bensbites.com/subscribe?)

### 我的信息流

- [Extend CLI](https://github.com/extend-hq/extend-cli) - 让你的智能体能够解析和提取整个文档语料库。

- [Efecto](https://efecto.app/) - 底层是代码的设计工具，让智能体和你用同一个画布。

- [Figma 的 Chrome 扩展](https://chromewebstore.google.com/detail/figma/fkmaohpngenfoccdgceedjkfhkdcohmg?pli=1) 现在可以把网站复制/粘贴成可编辑的 Figma 图层。

- 一份[在移动端掌握 Codex](https://x.com/Dimillian/status/2066082395107758564)的指南，用于你的工程工作。

- 称自己为"[非技术创始人](https://x.com/paulg/status/2066145325056680089)"是个错误。

- 用递归智能体系统让"[1 个人 → 10,000 个智能体的组织](https://x.com/leerob/status/2065469795529588940)"运转起来。

- [OpenRouter 的 Fusion API](https://openrouter.ai/docs/guides/features/plugins/fusion) - 让多个模型处理你的任务，由裁判模型决定最终答案。

- 我如何[像穴居人一样和编码智能体共事](https://www.youtube.com/watch?v=DPgJjRdQWrg)。

- [React 安全医生](https://github.com/millionco/react-doctor) - 修复 React 应用中的安全漏洞。

- [Sonic-3.5 和 Ink-2](https://www.cartesia.ai/launch) - Cartesia 的新文本转语音和语音转文本模型。

- [没有生态系统的前沿是不稳定的](https://x.com/satyanadella/status/2066182223213293753)。- Satya Nadella

- [Castform](https://castform.com/blog/beta-launch/) - 带上你的数据，在开源模型上训练它们，不用操心 GPU 怎么用。

- [Fable 大概是怎么被造出来的](https://x.com/Rafa_Schwinger/status/2066230802439180447)。

Afters

@mvanhorn，一位非技术创始人，贡献过 100+ 开源项目、在没有技术背景的情况下拿到 44K+ GitHub stars（推文嵌入：Peter Yang）

@salesforce 将以约 36 亿美元收购 @fin_ai。交易预计在 Salesforce 2027 财年第四季度完成。"Fin 15 年前以 Intercom 起步。我们改名是为了标记这场转变"（推文嵌入：Eoghan McCabe）

[分享 Ben's Bites](https://www.bensbites.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

- 在 [X](https://x.com/bentossell/)、[Linkedin](https://www.linkedin.com/in/ben-tossell-70453537/) 或 [YouTube](https://www.youtube.com/@bentossell694) 上找到我

- 阅读[关于我](https://bensbites.substack.com/about)和 Ben's Bites 的介绍

- 📷 缩略图来自 [@sdmat123](https://x.com/sdmat123/status/2065634463418343487)

* 赞助商让这份时事通讯得以持续 :) 想在下个季度合作？发邮件到 [shanice@bensbites.com](mailto:shanice@bensbites.com) 或 [k@bensbites.com](mailto:k@bensbites.com)

Ben's Bites 是一份由读者支持的刊物。要接收新文章并支持我们的工作，欢迎成为免费或付费订阅者。

## 关键词

#Ben-s-Bites #Fable #Anthropic #DeepSeek #软件工厂 #AI资讯
