---
published: 2026-08-06
title: k-means++的可解释Good-Turing重启准则
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/An interpretable Good--Turing restart criterion for k-means++.md
source_note: "[[信息源/arXiv cs.LG RSS/An interpretable Good--Turing restart criterion for k-means++]]"
source_sha256: c708a38d13acdad1b6472b1594d1357cf06727d54360a225b24ae6ecbe155087
original_url: https://arxiv.org/abs/2607.08243
processed: 2026-08-07
language: zh-CN
---

# k-means++的可解释Good-Turing重启准则

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.08243)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/An interpretable Good--Turing restart criterion for k-means++|查看原始文件]]

## 摘要

- 提出 Good–Turing 重启准则（GTRC），为 k-means++ 的多重重启提供可解释的停止条件。
- GTRC 结合 Good–Turing 估计、已被证明的无条件上界与基于置信度的界，当进一步重启改善当前结果的概率低于用户指定容差时停止。
- 在 34 个真实数据集上，GTRC 在重启次数与聚类质量的平衡上优于三种现有停止规则和流行的固定重启次数。

## 正文

k-means++ 算法通常会被多次重启以避免陷入较差的局部最优，然而重启次数几乎总是任意选择，并且不考虑数据集的难度而统一施加。这破坏了任何依赖该选择的比较，在简单数据集上浪费了计算资源，同时可能对困难数据集服务不足（under-serving）。

在此，我们引入 Good–Turing 重启准则（Good-Turing Restart Criterion, GTRC）。它结合了 Good–Turing 估计、一个已被证明的无条件上界，以及一个基于置信度的、关于进一步重启会改善当前结果的概率的界，当该概率低于用户指定的容差（tolerance）时停止。

我们在 34 个真实数据集上的实验表明，GTRC 能够识别出继续 k-means++ 重启只会带来可忽略改进的点，在重启次数与聚类质量之间实现了比三种现有的多起点（multistart）局部搜索停止规则和流行的固定重启次数更有利的平衡。软件：https://github.com/RCdeAmorim/Good-Turing-Restart-Criterion。

## 关键词

#k-means++ #Good-Turing #重启准则 #聚类 #停止规则
