---
published: 2026-08-06
title: stratum：面向大规模以智能体为中心的机器学习工作负载的系统基础设施
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/stratum- A System Infrastructure for Massive Agent-Centric ML Workloads.md
source_note: "[[信息源/arXiv cs.LG RSS/stratum- A System Infrastructure for Massive Agent-Centric ML Workloads]]"
source_sha256: 68026d6ad497caf1fced21be96845848764ed445afe0749241bc2d3a1070404b
original_url: https://arxiv.org/abs/2603.03589
processed: 2026-08-07
language: zh-CN
---

# stratum：面向大规模以智能体为中心的机器学习工作负载的系统基础设施

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.03589)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/stratum- A System Infrastructure for Massive Agent-Centric ML Workloads|查看原始文件]]

## 摘要

- LLM 催生了"智能体流水线搜索"这类新工作负载，但现有 Python ML 生态难以支撑大规模执行。
- stratum 将流水线执行与规划和推理解耦，将成批流水线编译为优化执行图，并在异构后端（含 Rust 运行时）上执行。
- 初步实验表明，stratum 可将大规模智能体流水线搜索加速至 16.6 倍。

## 正文

大型语言模型（LLM）的最新进展正在改变机器学习（ML）流水线的开发和评估方式。LLM 催生了一种新型工作负载——智能体流水线搜索（agentic pipeline search），其中自主或半自主智能体生成、验证并优化完整的 ML 流水线。这些智能体主要运行在流行的 Python ML 库之上，并表现出高度探索性的行为。这导致针对数据剖析、流水线生成以及流水线阶段迭代改进的数以千计的执行。然而，现有的基于 Python 的 ML 生态围绕 Pandas 和 scikit-learn 等库构建，这些库是为以人为中心、交互式、顺序的工作流设计的，并且仍然受到 Python 解释执行模型、库级隔离以及支持执行大量流水线的运行时能力有限的约束。与此同时，系统社区提出的许多高性能 ML 系统要么只针对狭窄的工作负载类别，要么要求专门的编程模型，这限制了它们与 Python ML 生态的集成，使其在很大程度上不适合基于 LLM 的智能体。这种日益增长的不匹配暴露了在大规模支持下进行智能体流水线搜索的根本性系统挑战。因此，我们提出 stratum，一种统一的系统基础设施，在智能体流水线搜索期间将流水线执行与规划和推理解耦。Stratum 与现有 Python 库无缝集成，将成批流水线编译为优化的执行图，并在异构后端（包括一种新颖的基于 Rust 的运行时）上高效执行它们。我们介绍了 stratum 的架构愿景及早期原型，讨论了关键设计决策，并概述了开放挑战和研究方向。最后，初步实验表明，stratum 可以将大规模智能体流水线搜索显著加速至 16.6 倍。

## 关键词

#stratum #智能体流水线搜索 #LLM #系统基础设施 #Rust
