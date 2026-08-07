---
published: 2026-08-06
title: VibeSearchBench：现实场景中长期自主搜索的基准评测
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/VibeSearchBench- Benchmarking Long-horizon Proactive Search in the Wild.md
source_note: "[[信息源/arXiv cs.AI RSS/VibeSearchBench- Benchmarking Long-horizon Proactive Search in the Wild]]"
source_sha256: 8e9b097cb350e91da295aafd323b872c3de1a2baedfa3218ba61f152d78932fb
original_url: https://arxiv.org/abs/2605.27882
processed: 2026-08-07
language: zh-CN
---

# VibeSearchBench：现实场景中长期自主搜索的基准评测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.27882)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/VibeSearchBench- Benchmarking Long-horizon Proactive Search in the Wild|查看原始文件]]

## 摘要

- 基于 LLM 的智能体在搜索基准上得分很高，但真实用户始终对结果不满意，暴露出持续存在的评估-体验差距；原因在于现有基准依赖过度限定的查询、单轮交互和固定模式评估
- 真实搜索行为中，用户与智能体通过多轮对话协作细化模糊意图，作者将此范式命名为 VibeSearch，并推出 VibeSearchBench 基准
- 基准包含 20 个领域、200 个手工整理的双语（中英）任务，分为 VibeSearch-Pro（专业）与 VibeSearch-Daily（日常）两个子集；每个任务将用户角色与无模式真值知识图谱配对，通过渐进披露用户模拟器和图匹配评估框架评测
- 在 ReAct 框架和 OpenClaw 智能体 harness 下评测了七个前沿模型，所有模型对 VibeSearch 仍明显不足（最佳 F1 为 30.30），凸显长上下文推理、主动意图挖掘与结构化知识构建需要根本性进展

## 正文

基于 LLM 的智能体在搜索基准上得分很高，但真实用户始终对结果感到不满意，这揭示了一种持续存在的"评估-体验差距"（evaluation-experience gap）。我们将这一差距归因于现有基准对过度限定（over-specified）的查询、单轮交互和固定模式（fixed-schema）评估的依赖——这些都不反映真实的搜索行为：在现实中，用户与智能体通过多轮对话协作，逐步细化模糊的意图。

我们将这一范式命名为 VibeSearch，并推出 VibeSearchBench，一个包含 200 个手工整理的双语（中文与英文）任务、覆盖 20 个领域的基准，分为 VibeSearch-Pro（专业）和 VibeSearch-Daily（日常）两个子集。每个任务将一个用户角色与一个无模式（schema-free）的真值知识图谱配对，并通过渐进披露（progressive-disclosure）的用户模拟器和图匹配评估框架进行评测。

我们在 ReAct 框架和 OpenClaw 智能体 harness 两种设置下对七个前沿模型进行了基准测试。结果表明，所有模型对 VibeSearch 而言都仍明显不足（最佳 F1 仅为 30.30），这凸显了在长上下文推理、主动意图挖掘（proactive intent elicitation）和结构化知识构建方面需要根本性的进展。

## 关键词

#搜索智能体 #基准 #长时程 #主动交互
