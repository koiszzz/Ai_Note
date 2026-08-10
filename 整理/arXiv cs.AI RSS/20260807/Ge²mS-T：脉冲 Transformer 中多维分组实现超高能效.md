---
published: 2026-08-07
title: "Ge²mS-T：脉冲 Transformer 中多维分组实现超高能效"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Ge$^-text{2}$mS-T- Multi-Dimensional Grouping for Ultra-High Energy Efficiency in Spiking Transforme.md"
source_note: "[[信息源/arXiv cs.AI RSS/Ge$^-text{2}$mS-T- Multi-Dimensional Grouping for Ultra-High Energy Efficiency in Spiking Transforme]]"
source_sha256: 53082a1a71fff7a323fd59c72d02954e038a436271a98a5a78bc18273ca92c8a
original_url: "https://arxiv.org/abs/2604.08894"
processed: 2026-08-07
language: zh-CN
---

# Ge²mS-T：脉冲 Transformer 中多维分组实现超高能效

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zecheng Hao, Shenghao Xie, Kang Chen, Wenxuan Liu, Zhaofei Yu, Tiejun Huang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.08894)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Ge$^\text{2}$mS-T- Multi-Dimensional Grouping for Ultra-High Energy Efficiency in Spiking Transformer|查看原始文件]]

## 摘要

- 脉冲神经网络（SNN）提供优于人工神经网络（ANN）的能效，但应用于脉冲视觉 Transformer（S-ViT）时训练与推理指标显著不足；包括 ANN-SNN 转换与时空反向传播（STBP）在内的现有范式受固有局限，无法同时优化内存、精度与能耗。
- 提出 Ge²mS-T：在时间、空间与网络结构维度实现分组计算的新架构——引入基于分组指数编码的 IF（ExpG-IF）模型，实现恒定训练开销的无损转换与脉冲模式的精确调控；开发分组脉冲自注意力（GW-SSA），通过多尺度 token 分组与混合注意力-卷积框架内的免乘运算降低计算复杂度。
- 实验确认方法在挑战性基准上以超高能效取得优越性能；据其所知，这是首个系统建立多维分组计算以解决 S-ViT 中内存开销、学习能力与能耗预算三元组的工作。
- 代码见 https://github.com/hzc1208/Ge2mST。

## 正文

脉冲神经网络（Spiking Neural Networks，SNNs）提供优于人工神经网络（ANNs）的能效。然而，应用于脉冲视觉 Transformer（Spiking Vision Transformers，S-ViTs）时，它们在训练与推理指标上遭遇显著不足。包括 ANN-SNN 转换与时空反向传播（Spatial-Temporal Backpropagation，STBP）在内的现有范式受固有局限，无法同时优化内存、精度与能耗。为解决这些问题，我们提出 Ge²mS-T，一个在时间、空间与网络结构维度实现分组计算的新架构。具体而言，我们引入基于分组指数编码的 IF（Grouped-Exponential-Coding-based IF，ExpG-IF）模型，实现恒定训练开销的无损转换与对脉冲模式的精确调控。此外，我们开发分组脉冲自注意力（Group-wise Spiking Self-Attention，GW-SSA），通过混合注意力-卷积框架内的多尺度 token 分组与免乘运算降低计算复杂度。实验确认我们的方法能在挑战性基准上以超高能效取得优越性能。据我们所知，这是首个系统建立多维分组计算以解决 S-ViT 中内存开销、学习能力与能耗预算三元组的工作。代码见 https://github.com/hzc1208/Ge2mST。

## 关键词

#脉冲神经网络 #脉冲Transformer #能效 #分组计算
