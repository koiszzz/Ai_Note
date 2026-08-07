---
published: 2026-08-06
title: MoCA：面向数字健康测量的多模态交叉掩码自编码器
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MoCA- Multi-modal Cross-masked Autoencoder for Digital Health Measurements.md
source_note: "[[信息源/arXiv cs.LG RSS/MoCA- Multi-modal Cross-masked Autoencoder for Digital Health Measurements|查看原始文件]]"
source_sha256: fe3b9c2da17a81af27eb9fa6037d0936276857b01afebf1452d93d96dda7da86
original_url: https://arxiv.org/abs/2506.02260
processed: 2026-08-07
language: zh-CN
---

# MoCA：面向数字健康测量的多模态交叉掩码自编码器

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2506.02260)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MoCA- Multi-modal Cross-masked Autoencoder for Digital Health Measurements|查看原始文件]]

## 摘要

- 可穿戴设备能实现连续的多模态生理与行为监测，但数据分析面临缺乏金标准标签和不完整传感器数据等根本性挑战
- 提出 MoCA（多模态交叉掩码自编码器），将 Transformer 架构与掩码自编码器（MAE）方法相结合，采用有原则的跨模态掩码方案，显式利用传感器模态之间的相关结构
- 在重建和下游分类任务上取得显著的性能提升，并通过再生核希尔伯特空间（RKHS）框架建立了多模态 MAE 损失与核化典型相关分析之间的理论联系

## 正文

可穿戴设备能够实现连续的多模态生理和行为监测，然而对这些数据流的分析面临着根本性挑战，包括缺乏金标准标签以及传感器数据不完整。虽然自监督学习方法在解决这些问题上显示出潜力，但现有的多模态扩展仍有改进空间，可以更好地利用同步记录的可穿戴传感器数据中固有的丰富时间相关性和跨模态相关性。我们提出了多模态交叉掩码自编码器（MoCA），这是一种自监督学习框架，将 Transformer 架构与掩码自编码器（MAE）方法相结合，采用一种有原则的跨模态掩码方案，显式利用传感器模态之间的相关结构。MoCA 在多样化的基准数据集上的重建和下游分类任务中均展现出强劲的性能提升。我们还通过再生核希尔伯特空间框架建立了多模态 MAE 损失与核化典型相关分析之间的基本联系，从而确立了理论保证，为相关性感知的掩码策略设计提供了有原则的指导。我们的方法为利用无标注的多模态可穿戴数据并处理模态缺失问题提供了一种新颖的解决方案，在数字健康领域具有广泛的应用前景。

## 关键词

#自监督学习 #多模态 #可穿戴设备 #掩码自编码器 #数字健康
