---
published: 2026-08-06
title: UniHEAR：面向知识型视觉问答的统一异构来源注意力检索
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/UniHEAR- Unified Heterogeneous-Source Attentive Retrieval for Knowledge-Based Visual Question Answer.md
source_note: "[[信息源/arXiv cs.CL RSS/UniHEAR- Unified Heterogeneous-Source Attentive Retrieval for Knowledge-Based Visual Question Answer]]"
source_sha256: 457f1a89ef522b6f6377024d35cf490b9756546d5ff88a43e527e38df67ded77
original_url: https://arxiv.org/abs/2608.01147
processed: 2026-08-07
language: zh-CN
---

# UniHEAR：面向知识型视觉问答的统一异构来源注意力检索

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01147)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/UniHEAR- Unified Heterogeneous-Source Attentive Retrieval for Knowledge-Based Visual Question Answer|查看原始文件]]

## 摘要

- 知识型视觉问答（KB-VQA）需要从外部来源检索实体知识来回答基于视觉的问题；现有检索增强系统存在两个关键局限：依赖单一检索模态造成"单一来源检索瓶颈"，漏掉只能通过互补来源访问的真实实体；双塔逐点重排序器存在"检索来源盲重排"，忽略检索来源与候选级检索先验，导致冗余的模态依赖
- 提出 UniHEAR，一个统一的轻量级异构来源实体检索与重排序框架：为每个候选实体构建粗粒度检索描述符（Coarse Retrieval Descriptor），并引入检索引导的注意力模态门控（Retrieval-Guided Attentive Modality Gating），以该描述符为条件调整模态注意力权重，辅以粗检索先验的熵加权来源融合（Entropy-Weighted Source Fusion）
- 混合训练策略结合对比学习与辅助模态保持损失，在单一模型内统一实体级与节级检索
- 在 E-VQA 和 InfoSeek 上的大量实验表明，UniHEAR 取得当前最优的检索与 VQA 性能，Recall@1 较最强基线分别提升 6.7 和 1.2 个百分点，同时保持轻量级重排序架构；代码与模型见 https://github.com/iven-luo/UniHEAR

## 正文

知识型视觉问答（KB-VQA）需要从外部来源检索实体知识，以回答基于视觉的问题。现有的检索增强系统存在两个关键局限。第一，依赖单一检索模态会造成"单一来源检索瓶颈"（Single-Source Retrieval Bottleneck），漏掉只能通过互补来源访问的真实实体。第二，双塔逐点重排序器存在"检索来源盲重排"（Retrieval-Source-Blind Reranking）问题，因为它们忽略检索来源和候选级检索先验，导致冗余的模态依赖。为应对这些挑战，我们提出 UniHEAR，一个用于异构来源实体检索与重排序的统一轻量级框架。UniHEAR 为每个候选实体构建粗粒度检索描述符（Coarse Retrieval Descriptor），并引入检索引导的注意力模态门控（Retrieval-Guided Attentive Modality Gating），以该描述符为条件来调节模态注意力权重，辅以粗检索先验的熵加权来源融合（Entropy-Weighted Source Fusion）。一种结合对比学习与辅助模态保持损失的混合训练策略，在单一模型内统一了实体级与节级检索。在 E-VQA 和 InfoSeek 上的大量实验表明，UniHEAR 取得了当前最优的检索和 VQA 性能，Recall@1 较最强基线分别提升 6.7 和 1.2 个百分点，同时保持了轻量级的重排序架构。代码与模型可在 https://github.com/iven-luo/UniHEAR 获取。

## 关键词

#视觉问答 #异构检索 #重排序 #多模态 #模态门控 #KB-VQA #arXiv
