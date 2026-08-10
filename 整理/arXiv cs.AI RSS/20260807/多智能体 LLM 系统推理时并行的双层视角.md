---
published: 2026-08-07
title: "多智能体 LLM 系统推理时并行的双层视角"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Two-Tier Perspective on Inference-Time Parallelism in Multi-Agent LLM Systems.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Two-Tier Perspective on Inference-Time Parallelism in Multi-Agent LLM Systems]]"
source_sha256: b6d9f47f8e1e8d614a7a997fa327f7416e34328bbbab5549466cb1f0c3ecc50c
original_url: "https://arxiv.org/abs/2608.05791"
processed: 2026-08-07
language: zh-CN
---

# 多智能体 LLM 系统推理时并行的双层视角

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zihan Xu, Haolin Tian, Hai Jiang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05791)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Two-Tier Perspective on Inference-Time Parallelism in Multi-Agent LLM Systems|查看原始文件]]

## 摘要

- 大语言模型驱动的多智能体系统在推理时通常需要多次模型调用与复杂协调，执行策略直接影响系统精度、延迟与计算成本。
- 论文将多智能体系统中的并行建模为两个层次的决策过程：副本并行（Replica Parallelism，在任务层面探索多条完整解路径）与结构并行（Structural Parallelism，通过任务分解在单条解路径内并发执行）。
- 提出 TIPEX 可控执行框架，在统一执行语义下整合两个层次的并行并协调其作用，支持不同并行策略与参数配置的系统化组合与分析。
- GAIA 基准上的系统实验表明：推理时并行可显著提升精度、降低端到端延迟，代价是 token 消耗增加；副本并行与结构并行在不同任务复杂度上呈互补效应，中等难度任务受益最大，而过激的并行策略不一定带来更好性能。

## 正文

大语言模型（LLM）驱动的多智能体系统在推理时通常需要多次模型调用与复杂协调，其执行策略直接影响系统精度、延迟与计算成本。并行执行是提升推理时效率的一种手段。从推理时执行的视角，本文将多智能体系统中的并行建模为两个不同层次的决策过程：副本并行（Replica Parallelism）在任务层面探索多条完整解路径；结构并行（Structural Parallelism）通过任务分解实现单条解路径内的并发执行。然而，不同形式的并行及其相互关系在统一组织与协调方面仍缺乏系统性研究。因此，我们提出 TIPEX，一个可控执行框架：在统一执行语义下整合这两个层次的并行并协调其在推理过程中的作用，同时支持不同并行策略与参数配置的系统化组合与分析。在 GAIA 基准上的系统实验表明，推理时并行能以增加 token 消耗为代价显著提升精度并降低端到端延迟。进一步分析显示，副本并行与结构并行在不同任务复杂度上表现出互补效应，中等难度任务从二者协调中获益最大，而过激的并行策略并不一定带来更优性能。

## 关键词

#多智能体 #推理时并行 #LLM #TIPEX
