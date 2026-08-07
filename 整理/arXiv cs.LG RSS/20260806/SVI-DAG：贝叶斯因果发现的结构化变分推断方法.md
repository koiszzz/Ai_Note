---
published: 2026-08-06
title: SVI-DAG：贝叶斯因果发现的结构化变分推断方法
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SVI-DAG- A Structured Variational Inference Approach to Bayesian Causal Discovery.md
source_note: "[[信息源/arXiv cs.LG RSS/SVI-DAG- A Structured Variational Inference Approach to Bayesian Causal Discovery]]"
source_sha256: 19c4279979d517f2f536cdebd3b832d191157915aa2da0539312756efba0c67b
original_url: https://arxiv.org/abs/2608.04930
processed: 2026-08-07
language: zh-CN
---

# SVI-DAG：贝叶斯因果发现的结构化变分推断方法

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04930)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SVI-DAG- A Structured Variational Inference Approach to Bayesian Causal Discovery|查看原始文件]]

## 摘要

- 贝叶斯因果发现受限于可辨识性、有限观测数据及 DAG 后验难以精确近似，现有方法未编码边间依赖、缺乏纳入领域知识的原则性方式。
- SVI-DAG 使用归一化流对边间依赖关系建模，并借助 Stein 变分梯度下降在无环性空间更新节点势，缓解模式寻求行为。
- 与 5 种最先进的贝叶斯 DAG 学习方法相比，在不确定性量化上表现优越，结构准确性保持竞争力。

## 正文

贝叶斯因果发现旨在确定因果理论的后验分布，这些因果理论被解释为解释观测数据的有向无环图（DAG）。所得后验允许对这些理论内的认知不确定性进行系统推理。尽管如此，由于可辨识性问题和有限的观测数据，找到这样的图是困难的。此外，考虑到潜在 DAG 的巨大范围，精确近似图上的后验也颇具挑战。最近的贝叶斯方法已经解决了其中一些挑战，但它们仍然有限，因为它们未能编码边之间的依赖关系，并且缺乏在搜索过程中将领域知识作为归纳偏置纳入的原则性方式。为克服这些局限，我们提出 SVI-DAG，一种使用观测数据和先验信念的贝叶斯因果发现结构化变分推断方法，它使用归一化流对边之间的依赖关系建模，支持在 DAG 上进行富有表现力的多模态后验学习。为缓解证据下界优化中的模式寻求行为并促进模式覆盖，我们使用 Stein 变分梯度下降，在无环性空间中使用核来更新节点势。我们将 SVI-DAG 与 5 种最先进的贝叶斯 DAG 学习方法进行对比评估，并证明其在不确定性量化方面具有优越性能，同时在结构准确性上保持竞争力。

## 关键词

#SVI-DAG #贝叶斯因果发现 #变分推断 #归一化流 #Stein变分梯度下降 #DAG
