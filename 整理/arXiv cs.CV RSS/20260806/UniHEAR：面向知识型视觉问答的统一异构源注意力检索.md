---
published: 2026-08-06
title: UniHEAR：面向知识型视觉问答的统一异构源注意力检索
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/UniHEAR- Unified Heterogeneous-Source Attentive Retrieval for Knowledge-Based Visual Question Answer.md
source_note: "[[信息源/arXiv cs.CV RSS/UniHEAR- Unified Heterogeneous-Source Attentive Retrieval for Knowledge-Based Visual Question Answer]]"
source_sha256: b3ea2c5e9a73652c992bb6ad7cfadc889fa1f04fc96408c14b4638eb8249c727
original_url: https://arxiv.org/abs/2608.01147
processed: 2026-08-07
language: zh-CN
---

# UniHEAR：面向知识型视觉问答的统一异构源注意力检索

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01147)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/UniHEAR- Unified Heterogeneous-Source Attentive Retrieval for Knowledge-Based Visual Question Answer|查看原始文件]]

## 摘要

- 针对知识型视觉问答（KB-VQA）提出 UniHEAR，一个用于异构来源实体检索与重排序的统一轻量级框架。
- 指出现有系统的两大局限：单源检索瓶颈与检索源盲区重排序。
- 引入粗检索描述符、检索引导注意力模态门控与熵加权来源融合。
- 在 E-VQA 和 InfoSeek 上取得最先进检索与 VQA 性能，Recall@1 提升 6.7 和 1.2 个百分点。

## 正文

基于知识的视觉问答（KB-VQA）需要从外部来源检索实体知识来回答视觉基础的问题。现有的检索增强系统存在两个关键局限。首先，依赖单一检索模态会产生单源检索瓶颈，漏掉只能通过互补来源获取的真实实体。其次，双塔点式重排序器存在检索源盲区重排序问题，因为它们忽略了检索来源和候选级检索先验，导致对模态的冗余依赖。

为应对这些挑战，我们提出 UniHEAR，一个用于异构来源实体检索和重排序的统一轻量级框架。UniHEAR 为每个候选实体构建粗检索描述符，并引入检索引导的注意力模态门控，使模态注意力权重以该描述符为条件，辅以粗检索先验的熵加权来源融合。结合对比学习与辅助模态保持损失的混合训练策略，在单一模型中统一了实体级和段落级检索。在 E-VQA 和 InfoSeek 上的大量实验表明，UniHEAR 取得了最先进的检索和 VQA 性能，在最强基线上将 Recall@1 分别提升 6.7 和 1.2 个百分点，同时保持轻量级重排序架构。代码和模型可在 https://github.com/iven-luo/UniHEAR 获取。

## 关键词

#视觉问答 #检索增强 #多模态 #重排序
