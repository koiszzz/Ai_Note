---
published: 2026-08-06
title: EndoVLM：通过解剖引导稀疏性和渐进对齐进行内窥镜视觉-语言预训练
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive.md
source_note: "[[信息源/arXiv cs.CV RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive]]"
source_sha256: 56a12a08ade7bb8c850a056213e7b2fcb85e4dc8e5eb47bc67ecef8dd2e885a8
original_url: https://arxiv.org/abs/2608.04472
processed: 2026-08-07
language: zh-CN
---

# EndoVLM：通过解剖引导稀疏性和渐进对齐进行内窥镜视觉-语言预训练

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04472)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive|查看原始文件]]

## 摘要

- 基础模型（FM）的发展对推进内窥镜图像分析至关重要，但现有内窥镜 FM 主要依赖单模态图像或视频的自监督学习，忽视了临床报告中丰富的语义知识。
- 根本性的模态鸿沟阻碍了这些记录的利用：结构化的解剖描述无法自然映射到高冗余、未经整理的视觉流中的特定帧。
- 提出 EndoVLM，一个在超过 34.8 万次内窥镜检查（每次检查将临床报告与其对应图像集合配对）上预训练的新型视觉-语言 FM。
- 解剖引导稀疏池化机制以文本描述为查询驱动稀疏注意力，在冗余图像集合中将语义显著帧高效聚合为解剖特异的视觉表示；渐进语义感知对齐策略通过结构化软目标建模临床分类法（解剖与病理状态），弥合从全局患者级匹配到细粒度局部对齐的鸿沟；语义集中掩码自编码器仅应用于这些语义丰富帧，融合低级视觉精度与稳健的高层语义表示。
- 跨多种下游任务的大量实验表明，EndoVLM 优于现有基础模型，且与任务专用方法相当；并展现出稳健的零样本泛化能力。

## 正文

基础模型（FM）的发展对推进内窥镜图像分析至关重要。然而，现有内窥镜 FM 主要依赖单模态图像或视频的自监督学习，忽视了临床报告中蕴含的丰富语义知识。此外，一个根本性的模态鸿沟阻碍了对这些记录的有效利用：结构化的解剖描述无法自然地映射到高冗余、未经整理的视觉流中的特定帧。本文提出 EndoVLM，一个在超过 34.8 万次内窥镜检查上预训练的新型视觉-语言 FM，每次检查都将临床报告与其对应的图像集合配对。解剖引导稀疏池化（Anatomy-Guided Sparse Pooling）机制以文本描述作为查询驱动稀疏注意力，在冗余图像集合中将语义显著的帧高效聚合为解剖特异的视觉表示。接着，渐进语义感知对齐（Progressive Semantic-Aware Alignment）策略通过结构化软目标对临床分类法（解剖与病理状态）建模，弥合了从全局患者级匹配到细粒度局部对齐的鸿沟。最后，语义集中掩码自编码器（Semantic-Concentrated Masked Autoencoder）仅应用于这些语义丰富的帧，将低级视觉精度与稳健的高层语义表示相结合。跨各种下游任务的大量实验表明，EndoVLM 优于现有基础模型，并与任务专用方法保持竞争力。值得注意的是，EndoVLM 还展现出稳健的零样本泛化能力，凸显了其在更广泛临床应用中的潜力。

## 关键词

#内窥镜 #视觉语言模型 #预训练 #基础模型 #医学图像分析
