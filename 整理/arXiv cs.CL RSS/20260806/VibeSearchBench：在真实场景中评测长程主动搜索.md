---
published: 2026-08-06
title: VibeSearchBench：在真实场景中评测长程主动搜索
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/VibeSearchBench- Benchmarking Long-horizon Proactive Search in the Wild.md
source_note: "[[信息源/arXiv cs.CL RSS/VibeSearchBench- Benchmarking Long-horizon Proactive Search in the Wild]]"
source_sha256: 2ca993add24db3dcd800257078e490bfc22ee4a65d6fc5dd780be19e7011afde
original_url: https://arxiv.org/abs/2605.27882
processed: 2026-08-07
language: zh-CN
---

# VibeSearchBench：在真实场景中评测长程主动搜索

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.27882)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/VibeSearchBench- Benchmarking Long-horizon Proactive Search in the Wild|查看原始文件]]

## 摘要

- 基于 LLM 的智能体在搜索基准上得分很高，但真实用户始终觉得结果不令人满意，暴露出持续的"评测-体验差距"
- 将差距归因于现有基准依赖过度指定的查询、单轮交互和固定模式的评测，这些都不反映真实搜索行为——用户与智能体通过多轮对话协作精炼模糊意图
- 将该范式命名为 VibeSearch，并引入 VibeSearchBench：包含 200 个手工策划的跨 20 个领域的中英双语任务，分为 VibeSearch-Pro（专业）和 VibeSearch-Daily（日常生活）两个子集
- 每个任务将用户画像与无固定模式的真实知识图谱配对，通过渐进披露式用户模拟器和图匹配评测框架进行评估
- 在 ReAct 框架与 OpenClaw 智能体框架下评测七个前沿模型，结果显示所有模型对 VibeSearch 均明显不足（最佳 F1：30.30），凸显长上下文推理、主动意图激发和结构化知识构建需要根本性进展

## 正文

基于 LLM 的智能体在搜索基准上得分很高，然而真实用户始终发现结果不尽如人意，这揭示出持续的"评测-体验差距"。我们将这一差距归因于现有基准对过度指定的查询、单轮交互和固定模式评测的依赖，而这些都不反映真实搜索行为——在真实搜索中，用户和智能体通过多轮对话协作精炼模糊的意图。我们将这一范式命名为 VibeSearch，并引入 VibeSearchBench，一个包含 200 个手工策划的、横跨 20 个领域的中英双语任务的基准，分为 VibeSearch-Pro（专业）和 VibeSearch-Daily（日常生活）两个子集。每个任务将一个用户画像与一个无固定模式的真实知识图谱配对，并通过一个渐进披露式用户模拟器和一个图匹配评测框架进行评估。我们在 ReAct 框架和 OpenClaw 智能体框架下评测了七个前沿模型。结果表明，所有模型对 VibeSearch 而言都仍然明显不足（最佳 F1：30.30），凸显了长上下文推理、主动意图激发和结构化知识构建需要根本性的进展。

## 关键词

#搜索智能体 #评测基准 #多轮对话 #长上下文 #主动搜索 #VibeSearch #arXiv
