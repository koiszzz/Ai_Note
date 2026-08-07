---
published: 2026-08-06
title: UG-UMRE：用于统一多模态关系抽取的不确定性引导模态增强与分布校准
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/UG-UMRE- Uncertainty-Guided Modality Augmentation and Distributional Calibration for Unified Multimo.md
source_note: "[[信息源/arXiv cs.CV RSS/UG-UMRE- Uncertainty-Guided Modality Augmentation and Distributional Calibration for Unified Multimo]]"
source_sha256: dc08e65b75dcc99f9752244888b1c07dfb168e3340f6256b0b6b2f2e57095a81
original_url: https://arxiv.org/abs/2608.04949
processed: 2026-08-07
language: zh-CN
---

# UG-UMRE：用于统一多模态关系抽取的不确定性引导模态增强与分布校准

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04949)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/UG-UMRE- Uncertainty-Guided Modality Augmentation and Distributional Calibration for Unified Multimo|查看原始文件]]

## 摘要

- 提出 UG-UMRE：UDUA 模块基于变分信息瓶颈将特征建模为高斯分布，结合不确定性感知的自监督对比学习，滤除噪声并保持语义一致性。
- JAUA 模块作为全局语义预校准机制，利用概率分布一致性构建共享潜空间，同步跨模态统计属性以消除分布差异。
- 在 UMRE、MORE 与 MNRE 三个基准上达到最先进性能；进一步分析验证了 UDUA 与 JAUA 模块的可插拔性与有效性。

## 正文

统一多模态关系抽取（UMRE）旨在识别文本实体与视觉对象之间的模态内与跨模态关系。然而，现有 UMRE 研究仍面临两个关键问题：忽略内在的偶然不确定性会导致噪声传播，不同模态分布之间根深蒂固的异质性阻碍了对齐。为解决这些问题，我们提出不确定性引导的 UMRE 网络（UG-UMRE）。具体而言，我们设计了不确定性驱动的单模态增强（UDUA）模块，基于变分信息瓶颈将特征建模为高斯分布。通过引入不确定性感知的自监督对比学习机制，UDUA 在保持语义一致性的同时有效滤除噪声。此外，我们提出联合偶然不确定性对齐（JAUA）模块，作为全局语义预校准机制。JAUA 利用概率分布一致性构建共享潜空间，通过同步跨模态统计属性消除分布差异，从而为细粒度交互奠定稳健基础。在三个基准数据集（UMRE、MORE 和 MNRE）上的实验表明，UG-UMRE 达到了最先进性能。进一步的分析验证了所提出的 UDUA 与 JAUA 模块可插拔且有效。

## 关键词

#多模态关系抽取 #不确定性 #信息瓶颈 #对比学习 #分布对齐
