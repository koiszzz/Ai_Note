---
published: 20260805
title: "ACE-GraphRAG：层级 GraphRAG 的智能体上下文工程"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG.md"
source_note: "[[信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG]]"
source_sha256: 2b1c712b7d03b71ccf31322b7fcf6a80ed8ea47e932b9048cac6ff745d66adb4
original_url: "https://arxiv.org/abs/2608.01269"
processed: 2026-08-06
language: zh-CN

---

# ACE-GraphRAG：层级 GraphRAG 的智能体上下文工程

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yongfeng Huang, Yuren Lai, Ruiying Chen, Haoyu Huang, Mingming Zhao, James Cheng
> - 发布时间：20260805
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01269)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG|查看原始文件]]

## 摘要

- 层级图检索增强生成（GraphRAG）在多个粒度级别组织语料知识，但固定上下文构建可能无法将这些多分辨率表示转化为适合当前查询的上下文；本文将此不匹配识别为表示-推理差距。
- 提出 ACE-GraphRAG，一个推理时上下文策略层，将上下文构建表述为基于差距感知细化、检索分支和任务条件适应的策略；并行差分检索从深度导向事实分支和广度导向语义分支获取补充证据。
- 在 HotpotQA、2WikiMultiHopQA 和四个 UltraDomain 子集上评估，Full-ACE 在两个任务族上均优于评估的 RAG 和 GraphRAG 基线，Adaptive-ACE 进一步改进多跳 QA。

## 正文

层级图检索增强生成（GraphRAG）在多个粒度级别组织语料知识，然而固定上下文构建可能无法将这些多分辨率表示转化为适合当前查询的上下文。我们将这种不匹配识别为表示-推理差距（representation-inference gap）。我们提出用于层级 GraphRAG 的智能体上下文工程（ACE-GraphRAG），一个推理时上下文策略层，补充并适应生成用初始上下文。ACE-GraphRAG 将上下文构建表述为基于差距感知细化、检索分支和任务条件适应的策略。并行差分检索（Parallel Differential Retrieval）从深度导向的事实分支和广度导向的语义分支获取补充证据。这些证据增量与初始上下文整合，同时保留来源和抽象级别。Full-ACE 在每个任务族内统一应用完整策略，而 Adaptive-ACE 为单个查询选择任务和拓扑特定策略。我们在 HotpotQA、2WikiMultiHopQA 和四个 UltraDomain 子集上，跨多跳 QA 和查询聚焦摘要评估 ACE-GraphRAG。Full-ACE 在两个任务族上均优于评估的 RAG 和 GraphRAG 基线，而 Adaptive-ACE 进一步改进多跳 QA，并在全部四个 UltraDomain 子集上优于 Full-ACE。消融和拓扑分析支持将上下文构建视为查询和任务相关的推理策略，而非固定程序。

## 关键词

#GraphRAG #检索增强生成 #上下文工程 #智能体 #arXiv