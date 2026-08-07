---
published: 2026-08-06
title: Grassmann核近似的随机特征：有界秩一投影
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Random features for Grassmannian kernel approximation with bounded rank-one projections.md
source_note: "[[信息源/arXiv cs.LG RSS/Random features for Grassmannian kernel approximation with bounded rank-one projections]]"
source_sha256: 9dc246520c0419297fd8536d66470f5185d7463a5c2cf8c2636d8e5a2a3379fd
original_url: https://arxiv.org/abs/2608.04227
processed: 2026-08-07
language: zh-CN
---

# Grassmann核近似的随机特征：有界秩一投影

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04227)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Random features for Grassmannian kernel approximation with bounded rank-one projections|查看原始文件]]

## 摘要

- 提出一族基于秩一投影加有界非线性变换的随机特征映射，用于 Grassmann 流形上可扩展的核机器。
- 证明随机特征空间内积可逼近依赖子空间主夹角的旋转不变 Grassmann 核，周期性变换具有闭式核，二值变换产生紧凑一位特征。
- 实验表明秩一嵌入在保持 Grassmann 几何的同时减少计算、内存与存储，是经典 Grassmann 核的可扩展替代方案。

## 正文

我们提出一族随机特征映射，用于低维子空间（即 Grassmann 流形）上的可扩展核机器。当数据类别或聚类能由少量样本的张成（span）很好地描述时，这类表示非常有用。经典 Grassmann 核（包括投影核和 Binet-Cauchy 核）需要完整的 Gram 矩阵，这导致大规模高维子空间数据集的计算和内存成本高得难以承受。我们通过基于子空间投影矩阵的秩一投影并施加以周期性或二值化的有界非线性变换的随机特征来解决这一限制，以控制产生的分布。

我们证明，随机特征空间中的内积能很好地逼近良定义的、旋转不变的 Grassmann 核，这些核只依赖于子空间之间的主夹角。当特征数量相对内在子空间维数足够大时，近似以高概率对所有固定维数的子空间一致成立。对于周期变换，被近似的核具有闭式表达式，其行为在逆 Binet-Cauchy 与高斯型之间可调。二值变换产生紧凑的一位子空间特征，尽管没有已知的闭式核。基于随机化快速傅里叶变换的结构化秩一投影在保持实用精度的同时进一步减少了计算。在合成数据和 ETH-80 分类任务上的实验表明，这些特征在保持 Grassmann 几何的同时减少了计算、内存与存储。因此，秩一嵌入为经典 Grassmann 核提供了一种实用且可扩展的替代方案。

## 关键词

#随机特征 #Grassmann流形 #核近似 #秩一投影 #可扩展机器学习
