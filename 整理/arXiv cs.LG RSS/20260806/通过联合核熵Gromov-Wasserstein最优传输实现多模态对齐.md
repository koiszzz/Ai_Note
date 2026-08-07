---
published: 2026-08-06
title: 通过联合核熵 Gromov--Wasserstein 最优传输实现多模态对齐
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Multimodal Alignment Through Joint Kernel Entropic Gromov--Wasserstein Optimal Transport.md
source_note: "[[信息源/arXiv cs.LG RSS/Multimodal Alignment Through Joint Kernel Entropic Gromov--Wasserstein Optimal Transport|查看原始文件]]"
source_sha256: 852665306169fe7ae2d4bdcd329bc1050d144f4a640986d2388ce62e16a0b766
original_url: https://arxiv.org/abs/2608.04234
processed: 2026-08-07
language: zh-CN
---

# 通过联合核熵 Gromov--Wasserstein 最优传输实现多模态对齐

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04234)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Multimodal Alignment Through Joint Kernel Entropic Gromov--Wasserstein Optimal Transport|查看原始文件]]

## 摘要

- 研究将多模态数据对齐到共享表示空间的问题，重点场景是已有强预训练单模态编码器但跨模态配对数据稀缺
- 提出结构保持的对齐框架 JK-EGW（联合核熵 Gromov--Wasserstein 最优传输），通过最小化二次最优传输目标将多模态映射到公共潜在空间
- 理论上建立了 $n^{-1/2}$ 的参数化样本复杂度率，算法上通过低秩核近似与变分提升实现可扩展的交替求解，经验上在数据稀缺场景提升多模态检索性能

## 正文

我们研究将来自多个模态的数据对齐到共享表示空间的问题，重点考察已有强预训练单模态编码器但跨模态配对数据稀缺的设置。我们提出一个结构保持的对齐框架——联合核熵 Gromov--Wasserstein 最优传输（JK-EGW），它通过最小化一个二次最优传输目标，将多个模态映射到一个公共潜在空间。JK-EGW 利用模态内部与模态之间的细粒度相似度关系来构造全局亲和核，而不是依赖原始特征空间距离。我们的框架自然地提供了对潜在嵌入几何与分布的显式控制。在理论方面，我们建立了 $n^{-1/2}$ 的参数化样本复杂度率，与标准、熵正则化和 Gromov--Wasserstein 最优传输的相应速率相匹配。在算法方面，我们推导出一个可扩展的交替过程，通过低秩核近似和变分提升，以熵最优传输（EOT）更新求解 JK-EGW。这种提升方案有效减轻了二次目标带来的负担，使我们能够利用现有 EOT 求解器的优势。在经验方面，我们聚焦于数据稀缺场景下预训练编码器嵌入的事后对齐，结果表明我们提出的方法相比现有对齐基线实现了更好的多模态检索性能。

## 关键词

#最优传输 #多模态对齐 #Gromov-Wasserstein #表示学习 #检索
