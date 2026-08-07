---
published: 2026-08-06
title: GPTKB 2.0：直接从大语言模型构建消歧知识库
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/GPTKB 2.0- Direct Construction of Disambiguated Knowledge Bases from Large Language Models.md
source_note: "[[信息源/arXiv cs.CL RSS/GPTKB 2.0- Direct Construction of Disambiguated Knowledge Bases from Large Language Models]]"
source_sha256: d9a6baefdeb8cad8f67780b53b44000e8283c9c103a2efb51b882d2c69e7464a
original_url: https://arxiv.org/abs/2608.03729
processed: 2026-08-07
language: zh-CN
---

# GPTKB 2.0：直接从大语言模型构建消歧知识库

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03729)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/GPTKB 2.0- Direct Construction of Disambiguated Knowledge Bases from Large Language Models|查看原始文件]]

## 摘要

- LLM 直接构建知识库是 AKBC 的新方向，但 LLM 天然缺乏实体表示，导致重复条目与概念混淆；GPTKB 2.0 对实体、关系和类别进行即时消歧。
- 方法精心设计以满足可扩展性与消歧准确性，并刻画了准确性、规模与成本之间的权衡。
- 大规模执行获得超过 100 万消歧实体与 3,840 万条三元组的物化知识库，是首个百万级、LLM 原生、含显式内部规范化（canonicalization）的知识库，区别于以往以 Wikimedia 为中心的工作。

## 正文

本文编号：arXiv:2608.03729v2（公告类型：replace），以下为摘要全文翻译。

自动知识库构建（Automated Knowledge Base Construction, AKBC）是核心 NLP 任务，近期工作提出直接从大语言模型（LLM）生成知识库，将模型本身视为知识源。然而，LLM 天然不具备实体的表示，导致重复条目和概念混淆。我们提出 GPTKB 2.0，一种直接从 LLM 构建消歧知识库的方法论。GPTKB 2.0 对实体、关系和类别进行即时（on-the-fly）消歧，并精心设计以满足可扩展性和消歧准确性。我们分析了核心设计决策，刻画了准确性、规模与成本之间的权衡。我们大规模执行 GPTKB 2.0，获得了包含超过 100 万个消歧实体和 3,840 万条三元组的物化知识库。这是首个百万级、LLM 原生、对实体、关系和类别进行显式内部规范化（canonicalization）的知识库，与以往以 Wikimedia 为中心的工作形成显著区别。GPTKB 2.0 可在 https://gptkb.org/ 获取。

## 关键词

#GPTKB #知识库构建 #消歧 #大语言模型 #AKBC
