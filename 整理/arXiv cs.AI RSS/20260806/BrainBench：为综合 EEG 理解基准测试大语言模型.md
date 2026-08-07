---
published: 20260806
title: "BrainBench：为综合 EEG 理解基准测试大语言模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BrainBench- Benchmarking Large Language Models for Comprehensive EEG Understanding.md"
source_note: "[[信息源/arXiv cs.AI RSS/BrainBench- Benchmarking Large Language Models for Comprehensive EEG Understanding]]"
source_sha256: 6e85db5d6c53458216f4e0101d50ebaf527c78c3659cdef99bf2e6e7018ee727
original_url: "https://arxiv.org/abs/2608.04156"
processed: 2026-08-06
language: zh-CN

---

# BrainBench：为综合 EEG 理解基准测试大语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yangxuan Zhou, Sha Zhao, Yuning Chen, Chen Wu, Jiquan Wang, Shijian Li, Gang Pan
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04156)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BrainBench- Benchmarking Large Language Models for Comprehensive EEG Understanding|查看原始文件]]

## 摘要

- 脑电图（EEG）分析超越为记录分配预定义标签：需要连接自然语言指令、信号处理、定量证据和科学解释的工作流，本文将此能力称为综合 EEG 理解；现有评估主要针对孤立解码任务或系统特定演示，使 LLM 能力量化不足。
- 本文引入 BrainBench，一个综合、指令条件 EEG 理解的统一基准：包含四个子集（基础分析、睡眠评估、神经认知评估和生理整合），覆盖 17 个数据集、多种任务和大量真实数据实例。
- 在两种范式（CodeAct 自主代码执行和 BrainAgent 结构化智能体分析）下跨超过 10 万次执行评估多个代表性 LLM，结果显示 EEG 能力取决于模型及其操作化方式。

## 正文

脑电图（EEG）分析超越为记录分配预定义标签：它需要连接自然语言指令、信号处理、定量证据和科学解释的工作流。我们将此能力称为综合 EEG 理解（comprehensive EEG understanding）。然而，现有评估主要针对孤立的解码任务或系统特定演示，使大语言模型（LLM）的能力量化不足。我们引入 BrainBench，一个综合、指令条件 EEG 理解的统一基准。它包含四个子集——基础分析、睡眠评估、神经认知评估和生理整合——覆盖 17 个数据集、多种任务和大量真实数据实例。给定指令和 EEG 记录（可选生理信号），系统必须执行分析并产生科学依据的报告，需要时产生工件。输出通过数值、分类、集合、序列、语义和工件验证评估。我们在两种范式下跨超过 10 万次执行评估多个代表性 LLM：CodeAct 自主代码执行和 BrainAgent 结构化智能体分析。结果跨模型、子集、难度级别和执行范式显著变化，表明 EEG 能力取决于模型及其操作化方式。BrainBench 为推进基于 LLM 的 EEG 理解提供可复现测试台。代码和基准将很快发布，评估结果持续更新。

## 关键词

#EEG #LLM基准 #脑机接口 #神经科学 #arXiv