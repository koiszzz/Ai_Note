---
published: 2026-08-06
title: BrainBench面向全面脑电理解的大语言模型基准
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/BrainBench- Benchmarking Large Language Models for Comprehensive EEG Understanding.md
source_note: "[[信息源/arXiv cs.LG RSS/BrainBench- Benchmarking Large Language Models for Comprehensive EEG Understanding]]"
source_sha256: be6316c5b0d86dfc354a6051f34752ec0bac8a06264178b643f83a6b76b2bc0d
original_url: https://arxiv.org/abs/2608.04156
processed: 2026-08-07
language: zh-CN
---

# BrainBench面向全面脑电理解的大语言模型基准

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04156)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/BrainBench- Benchmarking Large Language Models for Comprehensive EEG Understanding|查看原始文件]]

## 摘要

- 提出全面脑电理解（comprehensive EEG understanding）概念，并构建统一基准，包含四个子集、17 个数据集及大量真实数据实例。
- 系统须依据指令对脑电记录完成分析并生成有科学依据的报告，输出经数值、类别、集合、序列、语义和工件多种验证。
- 在 CodeAct 自主代码执行与 BrainAgent 结构化智能体分析两种范式下评估了多个代表性 LLM，共执行超过 10 万次，结果表明脑电能力取决于模型及其操作化方式。

## 正文

脑电图（EEG）分析不仅仅是为记录数据分配预定义标签；它需要将自然语言指令、信号处理、定量证据和科学解释连接起来的工作流。我们将这种能力称为全面脑电理解（comprehensive EEG understanding）。然而，现有评估主要针对孤立的解码任务或特定系统的演示，使得大语言模型（LLM）在此方面的能力没有得到充分量化。我们引入了 `\benchmarkname{}`，一个面向全面、指令条件下的脑电理解的统一基准。它包含四个子集——基础分析（Foundational Analysis）、睡眠评估（Sleep Assessment）、神经认知评估（Neurocognitive Assessment）和生理整合（Physiological Integration）——涵盖 17 个数据集、`\numcases{}` 个任务以及超过 `\numinstances{}` 个真实数据实例。给定指令以及带有可选生理信号的脑电记录，系统必须执行分析并生成有科学依据的报告，并在需要时生成工件（artifact）。输出通过数值、类别、集合、序列、语义和工件验证进行评估。我们在两种范式下评估了 `\nummodels{}` 个具有代表性的 LLM，执行超过 10 万次：使用 CodeAct 的自主代码执行，以及基于 BrainAgent 的结构化智能体分析。不同模型、子集、难度级别和执行范式之间的结果差异很大，表明脑电能力取决于模型及其操作化方式。`\benchmarkname{}` 为推进基于 LLM 的脑电理解提供了一个可复现的测试平台。代码和基准将很快发布，评估结果会持续更新。

## 关键词

#脑电 #EEG #大语言模型 #基准 #CodeAct #BrainAgent
