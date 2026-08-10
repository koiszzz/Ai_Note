---
published: 2026-08-07
title: "DistMedVL：面向不确定性感知医学图像分割的分布视觉-语言对齐"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DistMedVL- Distributional Vision-Language Alignment for Uncertainty-Aware Medical Image Segmentation.md"
source_note: "[[信息源/arXiv cs.AI RSS/DistMedVL- Distributional Vision-Language Alignment for Uncertainty-Aware Medical Image Segmentation]]"
source_sha256: 050fd521c8ecae39555c5c23938fb4d013df60e707bceedda5c20ceb5b518405
original_url: "https://arxiv.org/abs/2608.05683"
processed: 2026-08-07
language: zh-CN
---

# DistMedVL：面向不确定性感知医学图像分割的分布视觉-语言对齐

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiaxuan Li, Qing Xu, Xiangjian He, Yue Li, Daokun Zhang, Fiseha B. Tesema, Rong Qu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05683)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DistMedVL- Distributional Vision-Language Alignment for Uncertainty-Aware Medical Image Segmentation|查看原始文件]]

## 摘要

- 视觉与文本表示的跨模态对齐是多模态医学图像理解的基础，但在真实临床条件下两种模态的不确定性阻碍对齐；现有视觉-语言分割方法依赖确定性跨模态匹配，忽视模糊边界带来的偶然不确定性与训练数据有限带来的认知不确定性，导致域偏移下性能脆弱。
- 提出 DistMedVL：概率视觉-语言框架，在冻结编码器上引入轻量概率跨模态适配器（PCM-Adapter）显式建模表示不确定性。
- PCM-Adapter 由两个用于渐进概率对齐的顺序模块组成：马氏对齐模块（MAM）将文本 token 建模为高斯分布，用马氏距离计算补丁-文本兼容性，产生降低不可靠特征维度权重的方差条件匹配；分布流模块（DFM）估计模态级置信参数并进行视觉引导的文本分布精炼，适应跨成像模态的分布变化。
- 在八个医学分割基准上的大量实验表明，DistMedVL 仅用 6.3M 可训练参数即超越最先进方法，展现卓越数据效率、扰动稳健性与跨数据集泛化。

## 正文

视觉与文本表示的跨模态对齐是多模态医学图像理解的基础，但在真实临床条件下，两种模态的不确定性仍阻碍对齐。现有视觉-语言分割方法依赖确定性跨模态匹配，忽视了模糊边界带来的偶然不确定性（aleatoric uncertainty）与训练数据有限带来的认知不确定性（epistemic uncertainty），导致域偏移下性能脆弱。为解决这一问题，我们提出 DistMedVL，一个概率视觉-语言框架，在冻结编码器上引入轻量概率跨模态适配器（Probabilistic Cross-Modal Adapter，PCM-Adapter），显式建模表示不确定性。具体而言，PCM-Adapter 由两个顺序模块组成，用于渐进式概率对齐。我们首先设计马氏对齐模块（Mahalanobis Alignment Module，MAM），将文本 token 建模为高斯分布，并通过马氏距离计算补丁-文本兼容性，产生降低不可靠特征维度权重的方差条件匹配。此外，我们设计分布流模块（Distribution Flow Module，DFM），估计模态级置信参数并进行视觉引导的文本分布精炼，适应跨成像模态的分布变化。在八个医学分割基准上的大量实验表明，DistMedVL 仅以 6.3M 可训练参数超越最先进方法，展现出卓越的数据效率、扰动稳健性与跨数据集泛化。

## 关键词

#医学图像分割 #视觉语言模型 #不确定性 #概率对齐
