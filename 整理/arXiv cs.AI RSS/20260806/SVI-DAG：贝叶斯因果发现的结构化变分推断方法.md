---
published: 2026-08-06
title: SVI-DAG：贝叶斯因果发现的结构化变分推断方法
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/SVI-DAG- A Structured Variational Inference Approach to Bayesian Causal Discovery.md
source_note: "[[信息源/arXiv cs.AI RSS/SVI-DAG- A Structured Variational Inference Approach to Bayesian Causal Discovery]]"
source_sha256: e9de832f6bcf85b3502d6f0c0d4c1fa3878c18c5b2b2d57c2d235ab801c698cf
original_url: https://arxiv.org/abs/2608.04930
processed: 2026-08-07
language: zh-CN
---

# SVI-DAG：贝叶斯因果发现的结构化变分推断方法

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04930)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SVI-DAG- A Structured Variational Inference Approach to Bayesian Causal Discovery|查看原始文件]]

## 摘要

- 提出 SVI-DAG，一种基于观测数据与先验信念的结构化变分推断贝叶斯因果发现方法
- 使用归一化流（normalizing flows）对边之间的依赖关系建模，支持对 DAG 的富有表达力且多模态的后验学习
- 采用 Stein 变分梯度下降在无环性空间中更新节点势能，缓解证据下界优化中的模式寻求行为并促进模式覆盖
- 与 5 种最先进的贝叶斯 DAG 学习方法对比，在不确定性量化上表现优越，同时在结构精度上保持竞争力

## 正文

贝叶斯因果发现旨在确定因果理论的后验分布，其中因果理论被解释为能够解释观测数据的有向无环图（DAG）。由此得到的后验分布允许对理论内部的认知不确定性进行系统推理。尽管如此，由于可识别性问题以及观测数据的有限性，寻找这样的图是困难的。此外，考虑到潜在 DAG 的庞大范围，精确逼近图上的后验分布也颇具挑战。

近期的贝叶斯方法解决了其中部分挑战，但它们仍然存在局限：它们未能编码边与边之间的依赖关系，也缺乏在搜索过程中将领域知识作为归纳偏置纳入的原则性方式。为了克服这些局限，我们提出了 SVI-DAG，一种使用观测数据和先验信念的贝叶斯因果发现结构化变分推断方法。该方法利用归一化流对边之间的依赖关系建模，支持对 DAG 的富有表达力且多模态的后验学习。

为缓解证据下界（ELBO）优化中的模式寻求行为并促进模式覆盖，我们使用 Stein 变分梯度下降（SVGD），借助无环性空间中的核函数更新节点势能。我们将 SVI-DAG 与 5 种最先进的贝叶斯 DAG 学习方法进行对比评估，结果表明其在不确定性量化方面表现优越，同时在结构精度方面保持竞争力。

## 关键词

#arXiv #因果发现 #变分推断 #贝叶斯
