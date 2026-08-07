---
published: 2026-08-06
title: 相似性一路到底：LLM 的多语言泛化依赖于语言级相似性结构
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Similarity All The Way Up- Multilingual Generalization in LLMs Relies on Language-Level Similarity S.md
source_note: "[[信息源/arXiv cs.CL RSS/Similarity All The Way Up- Multilingual Generalization in LLMs Relies on Language-Level Similarity S]]"
source_sha256: 2d40b434b8b2d02581cc9a5e32ee51cc736ae88060b6ceb2b637684f1fdecf47
original_url: https://arxiv.org/abs/2607.22699
processed: 2026-08-07
language: zh-CN
---

# 相似性一路到底：LLM 的多语言泛化依赖于语言级相似性结构

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22699)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Similarity All The Way Up- Multilingual Generalization in LLMs Relies on Language-Level Similarity S|查看原始文件]]

## 摘要

- 大语言模型（LLM）在多语言场景下的泛化能力难以量化，且缺乏对其在受限领域之外表现的深入理解，尤其是对英语以外、训练数据中记录较少的语言。
- 借鉴认知科学中"成功泛化源于相似性空间中的恰当表征"这一长期传统，本文考察 LLM 的潜在表征能否捕捉不同语言之间的层级相似性结构。
- 实验显示，LLM 的潜在表征在很大程度上恢复了印欧语系语言家族树的层级结构，且模型反映语言相似性结构的程度与其在 XNLI 多语言自然语言推理基准上的表现相关。

## 正文

随着大语言模型（LLM）在各种任务上的能力不断增强，它们的（不）泛化能力仍然难以量化，且除了有限的领域之外，人们对它的理解也很有限。特别是，众所周知，LLM 在跨语言泛化方面存在困难——即泛化到英语之外、在其训练数据中记录较少的语言。为了理解为什么会这样，以及是什么让某些模型比其他模型表现更好，我们转向认知科学领域漫长的研究历史，主张成功的泛化源于相似性空间中恰当的表征。我们考察 LLM 的表征能在多大程度上捕捉不同语言之间层级的相似性结构。引人注目的是，我们证明 LLM 的潜在表征在很大程度上恢复了印欧语系语言家族树的层级结构——将属于同一子语系的语系在表征空间中紧密地归组在一起。此外，我们证明，模型反映语言相似性结构的程度与其在 XNLI（一个多语言自然语言推理基准）上的表现相关。这项工作在更大规模上将经典"由相似性驱动的泛化"研究向前推进，展示了那些能对相似语言作出相似表征的模型，如何能更好地实现从一种语言到另一种语言的泛化。

## 关键词

#多语言泛化 #相似性结构 #LLM #XNLI #印欧语系 #表征学习
