---
published: 2026-08-06
title: "EndoVLM：基于解剖引导稀疏与渐进对齐的内镜视觉-语言预训练模型"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive.md
source_note: "[[信息源/arXiv cs.CL RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive]]"
source_sha256: d40d4b93764475d4c56b3379a10b8679f6c7fb6981b7cd393e2fa0f15eb72c86
original_url: https://arxiv.org/abs/2608.04472
processed: 2026-08-07
language: zh-CN
---

# EndoVLM：基于解剖引导稀疏与渐进对齐的内镜视觉-语言预训练模型

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04472)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive|查看原始文件]]

## 摘要

- 基础模型（FMs）对推进内镜图像分析至关重要，但现有内镜 FM 主要依赖单模态图像或视频的自监督学习，忽略了临床报告中丰富的语义知识
- 模态差距阻碍记录利用：结构化的解剖描述无法自然映射到高冗余、未整理视觉流中的特定帧
- 提出 EndoVLM：在超 34.8 万次内镜检查（每次检查配对临床报告与图像集合）上预训练的视觉-语言 FM；解剖引导稀疏池化以文本描述为查询驱动稀疏注意力，在冗余图像集中高效聚合语义显著帧为解剖特定视觉表征
- 渐进语义感知对齐用结构化软目标建模临床分类体系（解剖与病理状态），弥合从全局患者级匹配到细粒度局部对齐的差距；语义集中掩码自编码器仅作用于语义丰富帧，融合低层视觉精度与稳健高层语义表征；实验在多项下游任务上超越现有基础模型并与任务专用方法相当，且表现出稳健的零样本泛化能力

## 正文

基础模型（FMs）的发展对于推进内镜图像分析至关重要。然而，现有的内镜 FM 主要依赖单模态图像或视频的自监督学习，忽视了临床报告中所包含的丰富语义知识。此外，有效利用这些记录受到一个根本性模态差距的阻碍：结构化的解剖描述无法自然地映射到高冗余、未整理的视觉流中的特定帧。在本文中，我们介绍 EndoVLM，一个新颖的视觉-语言 FM，在超过 34.8 万次内镜检查上进行了预训练，每次检查都将一份临床报告与其对应的图像集合配对。解剖引导稀疏池化（Anatomy-Guided Sparse Pooling）机制利用文本描述作为查询来驱动稀疏注意力，在冗余的图像集合中高效地将语义显著的帧聚合为解剖特定的视觉表征。接下来，渐进语义感知对齐（Progressive Semantic-Aware Alignment）策略通过结构化软目标对临床分类体系（解剖与病理状态）进行建模，弥合了从全局患者级匹配到细粒度局部对齐之间的差距。最后，语义集中掩码自编码器（Semantic-Concentrated Masked Autoencoder）仅应用于这些语义丰富的帧，将低层视觉精度与稳健的高层语义表征相整合。跨多种下游任务的大量实验表明，EndoVLM 优于现有的基础模型，并且与任务专用方法相比仍具有竞争力。值得注意的是，EndoVLM 还展现出稳健的零样本泛化能力，凸显了其更广泛临床应用潜力。

## 关键词

#内镜图像分析 #视觉语言模型 #基础模型 #医学影像 #自监督预训练
