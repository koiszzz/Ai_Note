---
published: 2026-08-06
title: CSGen：基于层级多模态扩散的多领域曲线结构生成模型
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/CSGen- A Multi-Domain Curvilinear Structure Generation Model via Hierarchical Multimodal Diffusion.md
source_note: "[[信息源/arXiv cs.CV RSS/CSGen- A Multi-Domain Curvilinear Structure Generation Model via Hierarchical Multimodal Diffusion]]"
source_sha256: a33cae458aa32da2ba0e7daa5b1147124f8f75aaf97c5ee59aaf4dbb983fe7fa
original_url: https://arxiv.org/abs/2608.04655
processed: 2026-08-07
language: zh-CN
---

# CSGen：基于层级多模态扩散的多领域曲线结构生成模型

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04655)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/CSGen- A Multi-Domain Curvilinear Structure Generation Model via Hierarchical Multimodal Diffusion|查看原始文件]]

## 摘要

- 提出 CSGen：层级多模态扩散模型，合成与多种控制条件精确对齐的高保真图像
- 构建多领域多模态数据集（5 个领域 7 类标注、超 2.4 万样本）训练统一生成模型
- 提出层级渐进控制策略，通过分阶段信号注入将拓扑线索与视觉上下文解耦，缓解语义漂移同时保证稀疏结构的拓扑完整性
- 设计稀疏感知损失重加权机制解决曲线结构的极端稀疏性，显著增强优化过程中对细薄脆弱结构的关注
- 生成图像结构精度与视觉真实感优越，显著提升下游分割性能且对多样提示保持稳健

## 正文

曲线结构分析是多媒体中一项重要且基础的任务。然而，对包含精确曲线结构物体的图像进行可控生成仍是一个开放挑战。为解决这一问题，我们提出 CSGen，一种层级多模态扩散模型，可合成与多种控制条件精确对齐的高保真图像。CSGen 建立在三项关键创新之上：1）我们构建了一个多领域、多模态数据集，包含来自 5 个领域的 24K 余个样本和 7 种不同类型的标注，用于训练统一生成模型。2）我们提出一种新颖的层级渐进控制策略，通过分阶段信号注入将拓扑线索与视觉上下文解耦，在保证稀疏结构拓扑完整性的同时缓解语义漂移。3）我们设计了一种稀疏感知的损失重加权机制，以应对曲线结构的极端稀疏性，显著增强优化过程中对细薄脆弱结构的关注。大量实验表明，CSGen 生成的图像具有卓越的结构精度和视觉真实感，显著提升下游分割性能，同时对多样化的提示保持稳健。我们的结果证实 CSGen 是面向多样化多媒体应用中复杂曲线结构分析的可扩展、以数据为中心的范式。代码和数据集可在 https://github.com/ShanZard/CSGen 获取。

## 关键词

#曲线结构 #扩散模型 #可控生成 #多模态 #拓扑保持
