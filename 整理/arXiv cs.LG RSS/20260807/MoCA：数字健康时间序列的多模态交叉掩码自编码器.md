---
published: 2026-08-07
title: "MoCA：数字健康时间序列的多模态交叉掩码自编码器"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MoCA- Multi-modal Cross-masked Autoencoder for Time Series in Digital Health.md"
source_note: "[[信息源/arXiv cs.LG RSS/MoCA- Multi-modal Cross-masked Autoencoder for Time Series in Digital Health]]"
source_sha256: 8379485f767e3e884fdb888c78a3d7fa4285fa629e53fec4a8c210964511d446
original_url: "https://arxiv.org/abs/2506.02260"
processed: 2026-08-07
language: zh-CN
---

# MoCA：数字健康时间序列的多模态交叉掩码自编码器

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Howon Ryu, Yuliang Chen, Yacun Wang, Andrea Z. LaCroix, Chongzhi Di, Loki Natarajan, Yu Wang, Jingjing Zou
> - **发布时间**：2026-08-07
> - **分类**：stat.ML
> - **原文**：[打开链接](https://arxiv.org/abs/2506.02260)

## 摘要

- 可穿戴设备实现连续多模态生理与行为监测，但数据分析面临缺乏金标准标签与传感器数据不完整等根本挑战；自监督学习有前景，现有扩展可更好利用同时记录可穿戴传感器数据中固有的丰富时间与跨模态相关。
- 提出多模态交叉掩码自编码器（MoCA）：结合 transformer 架构与掩码自编码器（MAE）方法的自监督学习框架，用原则性跨模态掩码方案显式利用传感器模态间的相关结构。
- 在多样基准数据集上，重建与下游分类任务取得强性能提升。
- 建立理论保证：通过再生核希尔伯特空间框架建立多模态 MAE 损失与核化典型相关分析之间的基本联系，为相关感知掩码策略设计提供原则性指导。

## 正文

可穿戴设备实现连续的多模态生理与行为监测，然而这些数据流的分析面临根本挑战，包括缺乏金标准标签与传感器数据不完整。虽然自监督学习方法对解决这些问题显示前景，现有扩展可以更好地利用同时记录的可穿戴传感器数据中固有的丰富时间与跨模态相关。研究提出多模态交叉掩码自编码器（Multi-modal Cross-masked Autoencoder, MoCA），一个结合 transformer 架构与掩码自编码器（MAE）方法论的自监督学习框架，使用显式利用传感器模态间相关结构的原则性跨模态掩码方案。MoCA 在多样基准数据集的重建与下游分类任务上显示强劲性能提升。研究还通过再生核希尔伯特空间（RKHS）框架建立多模态 MAE 损失与核化典型相关分析（kernelized canonical correlation analysis）之间的基本联系，确立理论保证，为相关感知掩码策略设计提供原则性指导。该方法为利用无标注多模态可穿戴数据（同时处理缺失模态）提供新颖解决方案，在数字健康领域有广泛应用。

## 关键词

自监督学习、多模态、掩码自编码器、可穿戴、数字健康
