---
published: 2026-08-06
title: ConlangBench：通过多样化人工语言探索 LLM 的语言知识与学习
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/ConlangBench- Exploring Language Knowledge and Learning in LLMs through Diverse Constructed Language.md
source_note: "[[信息源/arXiv cs.CL RSS/ConlangBench- Exploring Language Knowledge and Learning in LLMs through Diverse Constructed Language]]"
source_sha256: 09e3fc2f4524f57b08340cf52086ae7e12e796f86a9bbfcfdb12695dc12e964f
original_url: https://arxiv.org/abs/2608.03505
processed: 2026-08-07
language: zh-CN
---

# ConlangBench：通过多样化人工语言探索 LLM 的语言知识与学习

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03505)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/ConlangBench- Exploring Language Knowledge and Learning in LLMs through Diverse Constructed Language|查看原始文件]]

## 摘要

- 提出 ConlangBench，第一个在 21 种现有人工语言上评估和训练 LLM 的大规模基准
- 收集超过 2,100 万条人工语言-英语平行句对（含 20 种非世界语人工语言的 430K 句对）与 321K 词条
- 双向翻译实验显示，模型在先验式（a posteriori）人工语言上表现更好，其词汇源自自然语言
- 模型可学习所有八种拥有足够平行语料的人工语言，学习曲线因人工语言创造方式而异

## 正文

人工语言（conlangs）是有意创造的人类语言，具有丰富的语言创造力传统。尽管它们具有研究大语言模型（LLM）语言学习的潜力，但现有人工语言在 LLM 研究中仍很大程度上未被探索。

我们提出 ConlangBench，第一个用于在 21 种现有人工语言上评估和训练 LLM 的大规模基准。我们收集了超过 2,100 万条人工语言-英语平行句对（包括 20 种非世界语人工语言中的 430K 句对）和 321K 词条。

在双向翻译实验中，我们发现模型在先验式（a posteriori）人工语言上表现更好，这些语言的词汇源自自然语言，反映了人工语言的设计特征。在 ConlangBench 上训练还表明，模型可以学习所有八种拥有足够平行语料的人工语言，而其学习曲线因人工语言的创造方式而异。我们的发现表明，人工语言为研究 LLM 如何习得低资源语言提供了一个独特的试验场。

## 关键词

#人工语言 #LLM #低资源语言 #机器翻译 #ConlangBench #arXiv
