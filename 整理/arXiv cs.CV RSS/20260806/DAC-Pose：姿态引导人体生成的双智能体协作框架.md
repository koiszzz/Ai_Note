---
published: 2026-08-06
title: DAC-Pose：姿态引导人体生成的双智能体协作框架
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/DAC-Pose- Dual-Agent Collaborative Framework for Pose-Guided Human Generation.md
source_note: "[[信息源/arXiv cs.CV RSS/DAC-Pose- Dual-Agent Collaborative Framework for Pose-Guided Human Generation]]"
source_sha256: b3cf3ae24f09b333b9f06ec7bb51dab3d6134f5e52aea844897648efdf6768ee
original_url: https://arxiv.org/abs/2608.04622
processed: 2026-08-07
language: zh-CN
---

# DAC-Pose：姿态引导人体生成的双智能体协作框架

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04622)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/DAC-Pose- Dual-Agent Collaborative Framework for Pose-Guided Human Generation|查看原始文件]]

## 摘要

- 提出 DAC-Pose：智能体驱动的多模态框架，将单视图人体生成重构为双智能体协作系统
- 先验语义推理（PSR）智能体作为认知引擎，通过协作推理推导未见区域的细粒度属性；差异感知视觉编码（DAVE）智能体量化并编码视角引起的空间错位，向生成过程持续反馈稳健空间约束
- 语义推理与视觉感知之间的自主反馈闭环保证高保真细节合成
- 在 DeepFashion 和 Market-1501 基准上验证优越性，剧烈视角变化下保持纹理对齐和身份一致性

## 正文

AI 智能体已成为生成式图像合成中一种强大的新范式，使系统能够执行复杂的语义推理，而非被动的像素级映射。在姿态引导的人体生成中，传统方法在剧烈视角变化下不可避免地产生严重的视觉伪影，根本原因在于它们缺乏逻辑推理未见区域和建模复杂空间形变的认知能力。为弥合这一差距，我们提出 DAC-Pose，一种新颖的智能体驱动多模态框架，将单视图人体生成重构为协作式双智能体系统。DAC-Pose 整合两个互补组件：先验语义推理（Prior Semantic Reasoning，PSR）智能体和差异感知视觉编码（Discrepancy-Aware Visual Encoding，DAVE）智能体。作为认知引擎，PSR 利用协作推理推导未见区域的细粒度属性。与此同时，作为专门的视觉感知智能体，DAVE 量化并编码视角引起的空间错位，持续向生成过程反馈稳健的空间约束。语义推理与视觉感知之间的自主反馈闭环确保了高保真细节合成。在 DeepFashion 和 Market-1501 基准上的大量实验验证了我们智能体驱动范式的优越性。值得注意的是，DAC-Pose 在剧烈视角变化下擅长保持纹理对齐和身份一致性。代码可在 https://github.com/AIVRC/DAC-Pose 获取。

## 关键词

#姿态引导生成 #AI智能体 #人体生成 #多模态 #DeepFashion
