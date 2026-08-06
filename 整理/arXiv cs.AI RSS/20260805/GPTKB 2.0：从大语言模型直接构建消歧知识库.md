---
published: 2026-08-05
title: "GPTKB 2.0：从大语言模型直接构建消歧知识库"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GPTKB 2.0- Direct Construction of Disambiguated Knowledge Bases from Large Language Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/GPTKB 2.0- Direct Construction of Disambiguated Knowledge Bases from Large Language Models]]"
source_sha256: 43588160bda57c0438beda0aa15fff26198aa7ba38fd72aeaf90a334042ee25c
original_url: "https://arxiv.org/abs/2608.03729"
processed: 2026-08-05
language: zh-CN
---

# GPTKB 2.0：从大语言模型直接构建消歧知识库

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yujia Hu、Tuan-Phong Nguyen、Simon Razniewski
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03729)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GPTKB 2.0- Direct Construction of Disambiguated Knowledge Bases from Large Language Models|查看原始文件]]

## 摘要

- 提出 GPTKB 2.0：直接从 LLM 构建消歧知识库的方法论，纳入实体、关系与类的即时消歧，同时满足可扩展性与消歧准确率。
- 分析核心设计决策，刻画准确率、规模与成本之间的权衡。
- 规模化执行得到物化知识库：超过 100 万消歧实体与 3,840 万三元组，是首个百万级、显式内部规范化实体/关系/类的 LLM 原生知识库。
- 可用：https://gptkb.org/

## 正文

论文编号：arXiv:2608.03729v1（更新类型：cross）。以下为摘要全文翻译。

自动知识库构建（AKBC）是核心 NLP 任务，近期工作提出直接从大语言模型（LLM）生成知识库，把模型本身视为知识来源。然而，LLM 原生不具备实体表示，导致重复条目与合并混淆。我们提出 GPTKB 2.0，一种直接从 LLM 构建消歧知识库的方法论。GPTKB 2.0 纳入实体、关系与类的即时消歧，并经过精心设计以满足可扩展性与消歧准确率。我们分析核心设计决策，并刻画准确率、规模与成本之间的权衡。我们规模化执行 GPTKB 2.0，获得一个包含超过 100 万消歧实体与 3,840 万三元组的物化知识库。这是首个具有显式内部规范化实体、关系与类的百万级 LLM 原生知识库，与以往以 Wikimedia 为中心的工作有显著差异。GPTKB 2.0 可在 https://gptkb.org/ 获取。

## 关键词

#知识库构建 #LLM #实体消歧 #知识图谱
