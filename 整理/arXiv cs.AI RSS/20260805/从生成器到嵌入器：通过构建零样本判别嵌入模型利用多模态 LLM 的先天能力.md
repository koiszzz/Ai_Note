---
published: 2026-08-05
title: "从生成器到嵌入器：通过构建零样本判别嵌入模型利用多模态 LLM 的先天能力"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/From Generator to Embedder- Harnessing Innate Abilities of Multimodal LLMs via Building Zero-Shot Di.md"
source_note: "[[信息源/arXiv cs.AI RSS/From Generator to Embedder- Harnessing Innate Abilities of Multimodal LLMs via Building Zero-Shot Di]]"
source_sha256: 18c61fdd7c9901a9628da6abc604063db39532c604e8d63b7ec12c5a6c2b4256
original_url: "https://arxiv.org/abs/2508.00955"
processed: 2026-08-05
language: zh-CN
---

# 从生成器到嵌入器：通过构建零样本判别嵌入模型利用多模态 LLM 的先天能力

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yeong-Joon Ju、Seong-Whan Lee
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.00955)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/From Generator to Embedder- Harnessing Innate Abilities of Multimodal LLMs via Building Zero-Shot Di|查看原始文件]]

## 摘要

- 提出高度数据高效的框架，绕过大量预训练构建稳健的多模态表示空间：先引入层级嵌入提示提供强潜条件（在系统级显式锚定任务定义，有效弥合模态差距，解锁强零样本嵌入能力）。
- 提出自感知硬负采样（SaHa）：把机制转移到查询空间，把检索候选映射回其所有者查询以严格过滤语义假阴性。
- 构建互难聚类，最大化任务内判别与批效率，无需冗余前向传播。
- 大量实验显示：统一方法在 Massive Multimodal Embedding Benchmark 上仅用标准训练数据的一小部分即取得极具竞争力的微调性能。

## 正文

论文编号：arXiv:2508.00955v3（更新类型：replace-cross）。以下为摘要全文翻译。

把生成式多模态大语言模型（MLLM）适配为通用嵌入模型通常需要资源密集的对比预训练，而传统硬负挖掘方法遭受严重的假阴性污染。在本文中，我们提出一个高度数据高效的框架，绕过大量预训练来构建稳健的多模态表示空间。我们首先引入层级嵌入提示（hierarchical embedding prompt），提供强潜条件。通过在系统层面显式锚定任务定义，这种提示策略有效弥合模态差距，并解锁强大的零样本嵌入能力。在此潜条件之上，我们提出自感知硬负采样（SaHa）。与常规候选空间挖掘不同，SaHa 把机制转移到查询空间：把检索到的候选映射回其所有者查询，以严格过滤语义假阴性。此外，我们的方法构建互难聚类（mutually hard clusters），最大化任务内判别与批效率，无需冗余前向传播。大量实验表明，我们的统一方法在 Massive Multimodal Embedding Benchmark 上仅用标准训练数据的一小部分，就取得了极具竞争力的微调性能。

## 关键词

#多模态嵌入 #零样本 #负采样 #MLLM
