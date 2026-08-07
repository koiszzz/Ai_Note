---
published: 2026-08-06
title: CROSS：面向遥感指代分割的级联蒸馏与双约束锚定
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/CROSS- Cascaded Distillation and Dual-Constraint Grounding for Remote Sensing Referring Segmentation.md
source_note: "[[信息源/arXiv cs.CV RSS/CROSS- Cascaded Distillation and Dual-Constraint Grounding for Remote Sensing Referring Segmentation]]"
source_sha256: 873247784ddbcdcf90685a674908e108a26d881f7de05288f7a9adf29b17e169
original_url: https://arxiv.org/abs/2608.03147
processed: 2026-08-07
language: zh-CN
---

# CROSS：面向遥感指代分割的级联蒸馏与双约束锚定

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03147)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/CROSS- Cascaded Distillation and Dual-Constraint Grounding for Remote Sensing Referring Segmentation|查看原始文件]]

## 摘要

- 指出 RRSIS 的两个根本局限：架构弱耦合（单向信息流导致依赖粗糙 VLM 提示、浪费 SAM 的像素级结构引导、定位漂移）和目标中心语义偏差（过度强调主导目标语义而对空间推理不敏感）
- 提出 CROSS 紧密集成范式：语言引导级联蒸馏（LGCD）将 SAM 的几何亲和度作为软正则化器蒸馏进 VLM 中间层，注入稠密结构先验以精化定位
- 视角-空间对比学习（PSCL）通过挖掘掩码过滤的欺骗性干扰项和空间-语言反事实作为硬负样本施加跨锚点约束，打破语义捷径、强制真实逻辑一致性
- 在 RRSIS 基准上达到最先进性能，严重空间描述扰动下仍保持精确定位

## 正文

遥感指代分割（Referring Remote Sensing Image Segmentation，RRSIS）通过整合 VLM 与分割一切模型（Segment Anything Model，SAM）取得了显著进展。然而，这种进展在很大程度上依赖强大的预训练能力，同时有两个根本局限未得到充分解决：（1）架构弱耦合（Architectural Weak-Coupling），即单向信息流迫使系统依赖粗糙的 VLM 提示，浪费了 SAM 的像素级结构引导，导致定位漂移；（2）目标中心语义偏差（Object-Centric Semantic Bias），即模型过度强调主导目标语义，而对 RRSIS 至关重要的空间推理不敏感。基于这些观察，我们提出 CROSS，一种紧密集成的 RRSIS 范式。首先，我们引入语言引导级联蒸馏（Linguistic-Guided Cascaded Distillation，LGCD）来弥合架构差距，它将 SAM 的几何亲和度作为软正则化器蒸馏进 VLM 中间层，注入稠密结构先验以精化定位。其次，视角-空间对比学习（Perspective-Spatial Contrastive Learning，PSCL）通过挖掘掩码过滤的欺骗性干扰项和空间-语言反事实作为硬负样本施加跨锚点约束，显式打破语义捷径以强制真实的逻辑一致性。在 RRSIS 基准上的大量实验表明，CROSS 达到了最先进的性能，即使在严重的空间描述扰动下也保持精确定位，是 RRSIS 的一种稳健新范式。

## 关键词

#遥感指代分割 #视觉语言模型 #SAM #蒸馏 #对比学习
