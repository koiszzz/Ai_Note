---
title: "GENESIS：迈向可解释的因果发现"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GENESIS- Towards Explainable Causal Discovery.md"
source_note: "[[信息源/arXiv cs.AI RSS/GENESIS- Towards Explainable Causal Discovery]]"
source_sha256: 7a132517f243c757d8a06dac9468f11ea970a850753beda9de8108d29546322e
original_url: "https://arxiv.org/abs/2608.03868"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# GENESIS：迈向可解释的因果发现

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Abhinav Thorat 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03868)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GENESIS- Towards Explainable Causal Discovery|查看原始文件]]

## 摘要

- 把决策可追溯性形式化：要求每条推断的边由可审计的统计证据、马尔可夫毯一致性或显式领域推理支持；提出 GENESIS，可解释的混合 CD 框架，把图构建分解为可解释的决策点。
- GENESIS 先识别并评分三节点结构基元（链、叉、碰撞器）建立透明的结构先验，再把先验与观测证据整合逐步精化图，仅在统计证据不足时调用领域知识。
- 实验显示 GENESIS 在所有设置下实现 100% 的决策可追溯性，把可解释性确立为因果发现的一等目标。
- 在多数基准数据集、所有样本规模下，GENESIS 在结构汉明距离（SHD）上持续优于纯统计 CD 方法，性能与最先进的 LLM 辅助方法相当。

## 正文

论文编号：arXiv:2608.03868v1（更新类型：cross）。以下为摘要全文翻译。

从观测数据做因果发现（CD）面临两个根本挑战。第一，纯统计方法在低样本场景中往往缺乏解决结构歧义的能力。第二，尽管 LLM 辅助的混合方法通过语义推理改善结构恢复，但该推理对单个边决策的影响在很大程度上仍不透明。因此，现有混合方法无法满足一个基本要求：解释为什么特定边在学习的 DAG（有向无环图）中被包含或排除。这在真实世界应用中至关重要：那里不存在真实 DAG，每个结构决策都必须独立证明。我们把这个要求形式化为决策可追溯性：要求每条推断的边由可审计的统计证据、马尔可夫毯一致性或显式领域推理支持。我们提出 GENESIS，一个可解释的混合 CD 框架，把图构建分解为可解释的决策点。GENESIS 首先识别并评分三节点结构基元（包括链、叉与碰撞器），以建立透明的结构先验；随后把这些先验与观测证据整合，逐步精化图，仅在统计证据不足时调用领域知识。按设计，每条边决策都通过可审计的证据来源解决。实验表明，GENESIS 在所有设置下实现 100% 的决策可追溯性，把可解释性确立为因果发现的一等目标。尽管有这一额外要求，GENESIS 在多数基准数据集与所有样本规模下，于结构汉明距离（SHD）方面持续优于纯统计 CD 方法，同时性能与最先进的 LLM 辅助方法相当。

## 关键词

#因果发现 #可解释AI #结构因果模型 #决策可追溯
