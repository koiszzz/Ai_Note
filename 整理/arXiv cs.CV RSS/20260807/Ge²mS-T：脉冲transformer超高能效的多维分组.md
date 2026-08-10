---
published: 2026-08-07
title: "Ge²mS-T：脉冲 transformer 超高能效的多维分组"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Ge$^-text{2}$mS-T- Multi-Dimensional Grouping for Ultra-High Energy Efficiency in Spiking Transforme.md"
source_note: "[[信息源/arXiv cs.CV RSS/Ge$^-text{2}$mS-T- Multi-Dimensional Grouping for Ultra-High Energy Efficiency in Spiking Transforme]]"
source_sha256: bb4524a77811a4ea6001959135c27088671ec1f939d505ff8168317a6ee511b8
original_url: "https://arxiv.org/abs/2604.08894"
processed: 2026-08-07
language: zh-CN
---

# Ge²mS-T：脉冲 transformer 超高能效的多维分组

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zecheng Hao, Shenghao Xie, Kang Chen, Wenxuan Liu, Zhaofei Yu, Tiejun Huang
> - **发布时间**：2026-08-07
> - **分类**：cs.NE
> - **原文**：[打开链接](https://arxiv.org/abs/2604.08894)

## 摘要

- 脉冲神经网络（SNN）相对人工神经网络（ANN）提供优越能效，但应用于脉冲视觉 transformer（S-ViT）时在训练与推理指标遭遇显著缺陷。
- 现有范式（ANN-SNN 转换与时空反向传播 STBP）有固有局限，无法同时优化内存、精度与能耗。
- 提出 Ge²mS-T：跨时间、空间与网络结构维度实现分组计算的新架构；引入分组指数编码 IF（ExpG-IF）模型，实现恒定训练开销的无损转换与脉冲模式的精确调控；开发分组脉冲自注意力（GW-SSA）：经多尺度 token 分组与混合注意力-卷积框架内的免乘法运算降低计算复杂度。
- 实验确认方法在挑战性基准上以超高能效取得优越性能；据研究所知，这是首个系统建立多维分组计算解决 S-ViT 内存开销、学习能力与能量预算三元问题的架构；代码公开。

## 正文

脉冲神经网络（Spiking Neural Networks, SNNs）相对人工神经网络（ANNs）提供优越的能效。然而，应用于脉冲视觉 transformer（Spiking Vision Transformers, S-ViTs）时，它们在训练与推理指标上遭遇显著缺陷。现有范式（包括 ANN-SNN 转换与时空反向传播（STBP））有固有局限，无法同时优化内存、精度与能耗。为解决这些问题，研究提出 Ge²mS-T，一个跨时间、空间与网络结构维度实现分组计算的新颖架构。具体地，研究引入分组指数编码 IF（Grouped-Exponential-Coding-based IF, ExpG-IF）模型，实现恒定训练开销的无损转换与脉冲模式的精确调控。此外，研究开发分组脉冲自注意力（Group-wise Spiking Self-Attention, GW-SSA），通过多尺度 token 分组与混合注意力-卷积框架内的免乘法操作降低计算复杂度。实验确认方法可以在挑战性基准上以超高能效取得优越性能。据研究所知，这是首个系统建立多维分组计算以解决 S-ViT 中内存开销、学习能力与能量预算三元问题的架构。代码见 https://github.com/hzc1208/Ge2mST。

## 关键词

脉冲神经网络、视觉 transformer、分组计算、能效、ANN-SNN 转换
