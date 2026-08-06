---
published: 2026-08-05
title: "ACE-GraphRAG：用于分层 GraphRAG 的智能体式上下文工程"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG.md"
source_note: "[[信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG]]"
source_sha256: 2b1c712b7d03b71ccf31322b7fcf6a80ed8ea47e932b9048cac6ff745d66adb4
original_url: "https://arxiv.org/abs/2608.01269"
processed: 2026-08-05
language: zh-CN
---

# ACE-GraphRAG：用于分层 GraphRAG 的智能体式上下文工程

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yongfeng Huang、Yuren Lai、Ruiying Chen 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01269)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG|查看原始文件]]

## 摘要

- 识别分层 GraphRAG 的“表示-推理差距”：固定上下文构建无法把多分辨率表示转化为适应当前查询的上下文。
- 提出 ACE-GraphRAG，一个推理期上下文策略层：将上下文构建形式化为覆盖差距感知细化、检索分支与任务条件适应的策略。
- 并行差分检索（Parallel Differential Retrieval）从深度导向的事实分支与广度导向的语义分支获取补充证据，并保留来源与抽象层级。
- 在 HotpotQA、2WikiMultiHopQA 与四个 UltraDomain 子集上评估：Full-ACE 在两个任务族中均优于现有 RAG/GraphRAG 基线，Adaptive-ACE 进一步提升多跳 QA 并在全部 UltraDomain 子集上优于 Full-ACE。

## 正文

论文编号：arXiv:2608.01269v2（更新类型：replace-cross）。以下为摘要全文翻译。

分层图检索增强生成（GraphRAG）在多个粒度层级组织语料知识，然而固定上下文构建可能无法将这些多分辨率表示转化为适合当前查询的上下文。我们把这种不匹配识别为“表示-推理差距”。我们提出用于分层 GraphRAG 的智能体式上下文工程（ACE-GraphRAG），一个推理期上下文策略层，补充并适配用于生成的初始上下文。ACE-GraphRAG 将上下文构建形式化为覆盖差距感知细化、检索分支和任务条件适应的策略。并行差分检索（Parallel Differential Retrieval）从面向深度的事实分支和面向广度的语义分支获取补充证据。这些证据增量与初始上下文合并，同时保留来源与抽象层级。Full-ACE 在每个任务族内统一应用完整策略，而 Adaptive-ACE 为单个查询选择任务与拓扑特定的策略。我们在 HotpotQA、2WikiMultiHopQA 以及多跳 QA 和查询聚焦摘要的四个 UltraDomain 子集上评估 ACE-GraphRAG。Full-ACE 在两个任务族上均优于所评估的 RAG 与 GraphRAG 基线，Adaptive-ACE 则进一步提升多跳 QA，并在全部四个 UltraDomain 子集上优于 Full-ACE。消融与拓扑分析支持将上下文构建视为查询与任务相关的推理策略，而非固定流程。

## 关键词

#GraphRAG #检索增强生成 #智能体 #上下文工程
