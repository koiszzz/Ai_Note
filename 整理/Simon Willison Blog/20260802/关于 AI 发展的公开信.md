---
published: 2026-08-02
title: 关于 AI 发展的公开信
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/Open letters about AI development.md
source_note: "[[信息源/Simon Willison Blog/Open letters about AI development]]"
source_sha256: e35606aaa9379bfe0bf6be5c6ad9c5b8236bf85c2acc7af64b069ceb21b08ef3
original_url: https://simonwillison.net/2026/Aug/2/open-letters/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# 关于 AI 发展的公开信

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-02
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/2/open-letters/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/Open letters about AI development|查看原始文件]]

## 摘要

- 微软主导的《开放权重与美国 AI 领导力》公开信（7 月 24 日）由 235 家 AI 相关公司签署，包括 NVIDIA（黄仁勋第一次发推）、Amazon、Y Combinator、Linux 基金会以及后来加入的 OpenAI；信中指出仅依赖封闭模型并非天生安全，开放权重模型让社区能检查行为、识别漏洞并改进。
- 信中出人意料地支持蒸馏（用其他模型的输出来训练/改进模型），提醒政策制定者不要把合法模型开发技术与盗用混为一谈。
- Anthropic 缺席签名，三天后发表《我们对开放权重模型的立场》：CEO Dario Amodei 强调威权政府构建"比美国更强的 AI 模型"以及模型被"用于网络攻击或生物攻击"的风险，呼吁打击工业级蒸馏运营，同时声明"Anthropic 从未主张禁止开放权重模型"。
- 7 月 28 日《Pacing the Frontier》公开信发布，1324 名前沿 AI 公司员工（Jakub Pachocki、Ilya Sutskever、Dario Amodei、Jack Clark 等）联署，请求美国政府支持国际合作，开发有意为自动化 AI 发展"定速"的技术与治理工具。

## 正文

#### 关于 AI 发展的公开信

*我把过去几周关于公开信的总结写成了[我的赞助者专属通讯](https://simonwillison.net/2026/Aug/2/july-newsletter/)的一个章节，但决定也在这里分享。*

**[《开放权重与美国 AI 领导力》](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)** 由微软牵头，日期为 7 月 24 日，签署方包括 235 家 AI 相关公司：NVIDIA（参见黄仁勋的[有史以来第一条推文](https://twitter.com/jensenhuang/status/2080643682408321103)）、Amazon、Y Combinator、Linux 基金会，以及（后来加入的）OpenAI。

这显然是一份旨在反驳当前美国政府出于"安全"担忧而禁止或限制开放权重模型的[任何冲动](https://www.axios.com/2026/07/20/ai-us-china-open-source-kimi)的论证——考虑到[Claude Fable 5 的遭遇](https://simonwillison.net/2026/Jun/13/us-government-directive-to-suspend-access/)，这是合理的顾虑！

> 仅依赖封闭模型并非天生安全：它们可能被攻破、被滥用，或以外部人士无法察觉的方式失效。把先进 AI 能力集中在一小批封闭模型背后会加剧这种风险：这会导致少数几个单点故障，削弱竞争，并把关键技术留在少数提供商手中。相比之下，开放权重模型让广泛的研究者和开发者社区能够检查其行为、识别漏洞、制定防护措施，并随时间推移不断改进它们。

信中一个出人意料的观点是，它支持蒸馏——用其他模型的输出训练模型：

> 在塑造这一生态时，政策制定者应小心不要把合法的模型开发技术与盗用混为一谈。蒸馏，即使用一个模型的输出来帮助训练或改进另一个模型，是一种广泛使用的模型改进、评估和验证技术。它反映了学习、借鉴并改进现有技术的悠久传统——自开源软件运动兴起以来，这一传统一直在推动创新。

值得注意的是，签署名单中没有 Anthropic——他们三天后发表了自有回应《[我们对开放权重模型的立场](https://www.anthropic.com/news/position-open-weights-models)》。CEO Dario Amodei 进一步强调了威权政府构建"比美国构建的更强大的 AI 模型"、以及模型被"滥用来实施网络攻击或生物攻击"的风险，并呼吁"打击工业规模的[蒸馏运营](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks)"，同时声明"Anthropic 从未主张禁止开放权重模型"。

随后在 7 月 28 日，《[Pacing the Frontier](https://www.pacingthefrontier.com)》发布，署名包括"前沿 AI 公司的 1324 名员工"——例如 Jakub Pachocki（OpenAI 首席科学家）、Ilya Sutskever（Safe Superintelligence Inc，前 OpenAI）、Dario Amodei（Anthropic）、Jack Clark（Anthropic）等。他们的核心信息：

> 我们请求美国政府支持一项国际努力，开发有意为自动化 AI 发展前沿"定速"所需的技术与治理工具。

他们的担忧是激烈的竞争压力加上自动化 AI 研究带来的 AI 进展加速——考虑到 Anthropic [80% 的代码由 Claude Code 生成](https://www.anthropic.com/institute/recursive-self-improvement)、OpenAI 让 Sol [把端到端服务成本降低 20%](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency/)、Kimi K3 [设计了一款芯片来服务基于自身架构构建的 nano 模型](https://www.kimi.com/blog/kimi-k3#chip-design)，你就能理解为什么人们现在更认真地看待这种风险。

标签：anthropic、generative-ai、openai、ai、llms、ai-ethics

## 关键词

#AI伦理 #开放权重 #公开信 #Anthropic #OpenAI #蒸馏 #AI治理
