---
published: 2026-08-06
title: 免混合且信号最优的Glauber动力学高斯图模型学习
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Mixing-Free and Signal-Optimal Learning of Gaussian Graphical Models from Glauber Dynamics.md
source_note: "[[信息源/arXiv cs.LG RSS/Mixing-Free and Signal-Optimal Learning of Gaussian Graphical Models from Glauber Dynamics]]"
source_sha256: 190608dd5ad850c9bb382ec9cf5639e0474296b12eb3325c69d0d6c5b9996858
original_url: https://arxiv.org/abs/2607.18559
processed: 2026-08-07
language: zh-CN
---

# 免混合且信号最优的Glauber动力学高斯图模型学习

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.18559)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Mixing-Free and Signal-Optimal Learning of Gaussian Graphical Models from Glauber Dynamics|查看原始文件]]

## 摘要

- 从随机扫描高斯 Glauber 动力学的一条轨迹精确恢复图结构：提出的两种算法免混合（mixing-free），并达到信息论下界的 `κ^{-2}` 依赖
- 算法一在每个节点更新处拟合最小二乘回归，点式恢复视界为 `O~(pd^2/κ^2)`；算法二基于特定更新模式计数，需 `O~(pd^4/κ^2)` 次更新且不依赖任何条件数
- 核心技巧是从更新序列中提取新鲜的高斯创新量，从而在依赖、非平稳观测上获得免混合控制；算法与分析均不调用平稳性、谱隙或混合条件

## 正文

高斯图模型选择通常是在独立采样下研究的，但在许多应用中，数据来自依赖随机过程的单条轨迹。我们研究从随机扫描高斯 Glauber 动力学的一条轨迹精确恢复图结构。现有技术要么继承了链的混合时间——在没有强假设时，该混合时间在维度 `p` 上可以是超多项式的——要么在最小归一化边强度 `κ` 上不是最优的。我们提出两种免混合（mixing-free）算法，并达到信息论下界的 `κ^{-2}` 依赖。两者都实例化一个共享的决斗邻域搜索元算法，并配有一个直接从更新序列构建的局部统计量。对于每个固定的精度矩阵与确定性初始化，第一种算法在每个节点的更新处拟合最小二乘回归，其点式恢复视界为 `O~(pd^2/κ^2)`，其中 `d` 是最大度。其视界依赖于一个局部条件量以及初始化势的对数。第二种算法基于对一种特定更新模式的计数，需要 `O~(pd^4/κ^2)` 次更新，且不依赖任何条件数。核心的技术挑战在于：两种统计量都建立在依赖、非平稳的观测之上。我们的分析通过展示如何从更新序列中提取新鲜的高斯创新量来应对这一挑战，从而获得对相应量的免混合控制。算法及其分析都不使用平稳性、谱隙或混合条件。

## 关键词

#高斯图模型 #Glauber动力学 #结构学习 #免混合 #图恢复
