---
published: 20260806
title: "差分数据流在高动态设置中用于 Datalog 解释的适用性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/On The Suitability of Differential Dataflow For Datalog Interpretation In Highly Dynamic Settings.md"
source_note: "[[信息源/arXiv cs.AI RSS/On The Suitability of Differential Dataflow For Datalog Interpretation In Highly Dynamic Settings]]"
source_sha256: 3441045726bf58b16a5d8f76f1851fd54d192148c5d59932a666f648bfffe8e2
original_url: "https://arxiv.org/abs/2308.04214"
processed: 2026-08-06
language: zh-CN

---

# 差分数据流在高动态设置中用于 Datalog 解释的适用性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Bruno Rucy Carneiro Alves de Lima, Merlin Kramer, Kalmer Apinis
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2308.04214)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/On The Suitability of Differential Dataflow For Datalog Interpretation In Highly Dynamic Settings|查看原始文件]]

## 摘要

- 在 AI 知识表示和推理领域，datalog 引擎发挥日益关键作用；其操作核心在于物化：评估 datalog 程序并将其纳入数据库，此操作在数据高度动态时（分布式环境常见）变得复杂且资源密集。
- 增量物化（将计算调整为新数据而非重启）是常态，但数据删除处理因被移除内容级联效应比添加复杂得多；差分数据流提供有效解决此问题的计算模型，确保数据添加和删除的一致性能。
- 本文用三种不同 datalog 实现深入物化效率：一种基于精简关系引擎，另两种实现相同算法但一种用差分数据流、一种不用；洞察为动态数据环境（如云）中增强 datalog 驱动计算提供路线图。

## 正文

在 AI 知识表示和推理领域，datalog 引擎发挥日益关键的作用。其操作核心在于物化（materialization）：评估 datalog 程序并将其纳入数据库。此操作在数据高度动态时（分布式环境中常见）变得复杂且资源密集。因此，增量物化（将计算调整为新数据而非重启）是常态。然而，处理数据删除比添加显著更复杂，因为被移除内容有级联效应。差分数据流（Differential Dataflow）提供有效解决此问题的计算模型，确保数据添加和删除的一致性能。在本文中，我们用三种不同 datalog 实现深入物化效率：一种基于精简关系引擎，另两种实现相同算法，但一种利用差分数据流，另一种不利用。我们的洞察为增强 datalog 驱动计算提供路线图，特别是在云等动态数据环境中。

## 关键词

#Datalog #差分数据流 #增量物化 #知识表示 #arXiv