---
published: 2026-08-05
title: "GENESIS：迈向可解释的因果发现"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GENESIS- Towards Explainable Causal Discovery.md"
source_note: "[[信息源/arXiv cs.LG RSS/GENESIS- Towards Explainable Causal Discovery.]]"
source_sha256: 1f2770e94da1d67b076ac5e71a624071847bce5e6a2cdf191538337483ec403e
original_url: "https://arxiv.org/abs/2608.03868"
processed: 2026-08-05
language: zh-CN
---

# GENESIS：迈向可解释的因果发现

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Abhinav Thorat、Ravi Kumar Kolla、Vishak K Bhat、Harsh Vardhan Singh Chauhan、Niranjan Pedanekar
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03868)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/GENESIS- Towards Explainable Causal Discovery.|查看原始文件]]

## 摘要

- 因果发现（CD）面临两个基本挑战：纯统计方法在低样本情境下常缺乏解决结构歧义的能力；LLM 辅助混合方法虽通过语义推理改善结构恢复，但其推理对单条边决策的影响仍然很不透明。
- 现有混合方法因此无法满足一项基本要求：解释为何在学得的有向无环图（DAG）中纳入或排除某条边；这在真实应用中至关重要，因为不存在 ground-truth DAG，每个结构决策都必须能独立证明。
- 将这一要求形式化为"决策可追溯性"（decision traceability）：每条推断出的边必须得到可审计的统计证据、马尔可夫毯一致性或显式领域推理的支持。
- 提出 GENESIS，一个可解释的混合 CD 框架，将图构建分解为可解释的决策点：先识别并给三类节点结构基元（链、分叉、碰撞器）评分以建立透明的结构先验，再渐进细化图，仅在统计证据不足时引入领域知识。
- 设计上每条边决策都通过可审计的证据来源解决；实验显示 GENESIS 在所有设置下实现 100% 的决策可追溯性，把可解释性确立为因果发现中的一等目标。
- 尽管多出这一要求，GENESIS 在大多数基准数据集、所有样本情境下以结构汉明距离（SHD）衡量持续优于纯统计 CD 方法，同时取得与最先进 LLM 辅助方法相当的性能。

## 正文

论文编号：arXiv:2608.03868v1（更新类型：new）。以下为摘要全文翻译。

从观测数据中进行因果发现（CD）面临两个基本挑战。首先，纯统计方法在低样本情境下往往缺乏解决结构歧义的能力。其次，尽管 LLM 辅助的混合方法通过语义推理改善结构恢复，但该推理对单条边决策的影响在很大程度上仍然不透明。因此，现有混合方法无法满足一项基本要求：解释为什么在学得的有向无环图（DAG）中包含或排除某条特定边。这在真实世界应用中至关重要，因为那里不存在 ground-truth DAG，每个结构决策都必须独立证明其合理性。我们将这一要求形式化为决策可追溯性：要求每条推断出的边都得到可审计的统计证据、马尔可夫毯一致性或显式领域推理的支持。我们提出 GENESIS，一个可解释的混合 CD 框架，把图构建分解为可解释的决策点。GENESIS 首先识别并给三节点结构基元（包括链、分叉和碰撞器）评分，以建立透明的结构先验，然后把这些先验与观测证据整合、渐进细化图，并且只在统计证据不足时才调用领域知识。在设计上，每条边决策都通过可审计的证据来源解决。实验表明，GENESIS 在所有设置下实现 100% 的决策可追溯性，把可解释性确立为因果发现中的一等目标。尽管承担这一额外要求，GENESIS 在大多数基准数据集、所有样本情境下以结构汉明距离（SHD）衡量仍持续优于纯统计 CD 方法，同时取得与最先进 LLM 辅助方法相当的性能。

## 关键词

#因果发现 #可解释性 #决策可追溯 #LLM #结构学习
