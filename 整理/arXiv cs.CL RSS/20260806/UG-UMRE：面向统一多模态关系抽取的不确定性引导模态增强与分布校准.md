---
published: 2026-08-06
title: UG-UMRE：面向统一多模态关系抽取的不确定性引导模态增强与分布校准
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/UG-UMRE- Uncertainty-Guided Modality Augmentation and Distributional Calibration for Unified Multimo.md
source_note: "[[信息源/arXiv cs.CL RSS/UG-UMRE- Uncertainty-Guided Modality Augmentation and Distributional Calibration for Unified Multimo]]"
source_sha256: 4989e08234bc408c95f9fc52ae9f7271d37821110ad1956137a7811369d07f8a
original_url: https://arxiv.org/abs/2608.04949
processed: 2026-08-07
language: zh-CN
---

# UG-UMRE：面向统一多模态关系抽取的不确定性引导模态增强与分布校准

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04949)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/UG-UMRE- Uncertainty-Guided Modality Augmentation and Distributional Calibration for Unified Multimo|查看原始文件]]

## 摘要

- 统一多模态关系抽取（UMRE）旨在识别文本实体与视觉对象之间的模态内和跨模态关系，但现有研究面临两个关键问题：忽视内在的偶然不确定性（aleatoric uncertainty）导致噪声传播，以及不同模态分布之间深层的异质性阻碍对齐
- 提出不确定性引导的 UMRE 网络（UG-UMRE）：设计不确定性驱动的单模态增强模块（UDUA），基于变分信息瓶颈将特征建模为高斯分布，并引入不确定性感知的自监督对比学习机制，在保持语义一致性的同时有效滤除噪声
- 引入联合偶然不确定性对齐模块（JAUA）作为全局语义预校准机制，利用概率分布一致性构建共享潜在空间，通过同步跨模态统计特性消除分布差距，为细粒度交互奠定坚实基础
- 在三个基准数据集（UMRE、MORE 和 MNRE）上的实验表明 UG-UMRE 达到当前最优性能，进一步分析验证了 UDUA 与 JAUA 模块的可插拔性和有效性

## 正文

统一多模态关系抽取（UMRE）旨在识别文本实体与视觉对象之间的模态内与跨模态关系。然而，现有的 UMRE 研究仍面临两个关键问题：忽视内在的偶然不确定性会导致噪声传播，而不同模态分布之间深层的异质性阻碍了对齐。为解决这些问题，我们提出了不确定性引导的 UMRE 网络（UG-UMRE）。具体而言，我们设计了不确定性驱动的单模态增强模块（Uncertainty-Driven Unimodal Augmentation, UDUA），它基于变分信息瓶颈（Variational Information Bottleneck）将特征建模为高斯分布。通过引入不确定性感知的自监督对比学习机制，UDUA 在保持语义一致性的同时有效滤除噪声。此外，我们引入了联合偶然不确定性对齐模块（Joint Aleatoric Uncertainty Alignment, JAUA）作为全局语义预校准机制。JAUA 利用概率分布一致性构建共享潜在空间，通过同步跨模态统计特性消除分布差距，从而为细粒度交互奠定坚实的基础。在三个基准数据集（UMRE、MORE 和 MNRE）上的实验表明，UG-UMRE 达到了当前最优性能。进一步的分析验证了所提出的 UDUA 和 JAUA 模块的可插拔性与有效性。

## 关键词

#多模态关系抽取 #不确定性建模 #对比学习 #变分信息瓶颈 #分布校准 #UG-UMRE #arXiv
