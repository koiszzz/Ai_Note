---
title: "LLM 可以标注归因图"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LLMs Can Annotate Attribution Graphs.md"
source_note: "[[信息源/arXiv cs.LG RSS/LLMs Can Annotate Attribution Graphs.]]"
source_sha256: 19cafc22be6ef4ecdb366d8ada8d2476f09c0f2498ba58111d361236cb2913aa
original_url: "https://arxiv.org/abs/2608.02632"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LLM 可以标注归因图

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Ameen Patel、Max Zhang、Nathan Hu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02632)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LLMs Can Annotate Attribution Graphs.|查看原始文件]]

## 摘要

- 电路追踪是揭示语言模型内部计算的一项令人兴奋的技术，但它需要耗时的手动步骤：把单个特征或 MLP 神经元分组为超级节点。
- 提出一个自动化该步骤的简单流水线：把特征描述直接呈现给语言模型，由其把它们分组为超级节点。
- 用自动化可解释性指标确认：流水线生成的超级节点与人类标注者生成的同样可解释。
- 在两跳 Capitals 任务上，流水线在 100 个提示中的 97 个上恢复了对应中间跳的超级节点。
- 提供使用流水线进行开放式探索的概念验证：自动标注来自 Wikipedia 提示补全的 1000 个归因图，然后用 LLM 评判者标记值得人工审阅的有趣图。
- 希望这项工作表明即使简单的自动化也能产生有意义的归因图标注，激励进一步研究自动化电路追踪。

## 正文

论文编号：arXiv:2608.02632v1（更新类型：new）。以下为摘要全文翻译。

电路追踪是揭示语言模型内部计算的一项令人兴奋的技术，但它需要耗时的手动步骤：把单个特征或 MLP 神经元分组为超级节点。我们提出一个自动化该步骤的简单流水线：直接把特征描述呈现给语言模型，由其把它们分组为超级节点。使用自动化的可解释性指标，我们确认流水线生成的超级节点与人类标注者生成的超级节点同样可解释。在两跳 Capitals 任务上，我们的流水线在 100 个提示中的 97 个中恢复了对应中间跳的超级节点。最后，我们提供一个使用该流水线进行开放式探索的简单概念验证：自动标注来自 Wikipedia 提示补全的 1000 个归因图，然后用 LLM 评判者标记值得人工审阅的有趣图。我们希望这项工作表明，即使是简单的自动化也能产生有意义的归因图标注，从而激励自动化电路追踪的进一步研究。

## 关键词

#电路追踪 #可解释性 #LLM标注 #机械解释 #归因图
