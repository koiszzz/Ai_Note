---
title: "ACE-GraphRAG：分层图 RAG 的智能体上下文工程"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG.md"
source_note: "[[信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG]]"
source_sha256: 2b1c712b7d03b71ccf31322b7fcf6a80ed8ea47e932b9048cac6ff745d66adb4
original_url: "https://arxiv.org/abs/2608.01269"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ACE-GraphRAG：分层图 RAG 的智能体上下文工程

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01269)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ACE-GraphRAG- Agentic Context Engineering for Hierarchical GraphRAG|查看原始文件]]

## 摘要

- 分层图检索增强生成（GraphRAG）在多个粒度层级组织语料知识，但固定的上下文构造方式可能无法把多分辨率表示转化为适合当前查询的上下文。
- 论文将这一错配定义为“表示—推理鸿沟”，并提出 ACE-GraphRAG：推理时的上下文策略层，用于补充和适配初始上下文。
- ACE-GraphRAG 将上下文构造表示为一种策略，包含面向鸿沟的细化、检索分支和任务条件适配；并行差异检索从事实深度和语义广度两个分支获取补充证据。
- 在多跳问答和面向查询的摘要任务上，Full-ACE 优于评测的 RAG 与 GraphRAG 基线；Adaptive-ACE 进一步提升多跳问答，并在四个 UltraDomain 子集上优于 Full-ACE。

## 正文

分层图检索增强生成（GraphRAG）以多个粒度层级组织语料知识，但固定的上下文构造方式可能无法将这些多分辨率表示转化为适合当前查询的上下文。本文将这种错配称为表示—推理鸿沟。

作者提出分层 GraphRAG 的智能体上下文工程（Agentic Context Engineering for Hierarchical GraphRAG，ACE-GraphRAG），一种在推理时运行的上下文策略层，用于补充和适配最初的上下文，使其更适合生成任务。ACE-GraphRAG 将上下文构造表示为一种策略，覆盖面向鸿沟的细化、检索分支和任务条件适配。

并行差异检索从面向深度的事实分支和面向广度的语义分支获取补充证据。新增证据会与初始上下文合并，同时保留来源信息和抽象层级。Full-ACE 在每个任务族内统一使用完整策略；Adaptive-ACE 则针对每个查询选择与任务及拓扑结构相关的策略。

作者在 HotpotQA、2WikiMultiHopQA 和四个 UltraDomain 子集上评估 ACE-GraphRAG，任务涵盖多跳问答和面向查询的摘要。Full-ACE 在两类任务上都优于评测的 RAG 与 GraphRAG 基线；Adaptive-ACE 进一步改善多跳问答，并在四个 UltraDomain 子集上都优于 Full-ACE。消融实验和拓扑分析支持这样一种观点：上下文构造应被视为依赖查询和任务的推理策略，而不是固定流程。

## 关键词

#GraphRAG #检索增强生成 #上下文工程 #智能体
