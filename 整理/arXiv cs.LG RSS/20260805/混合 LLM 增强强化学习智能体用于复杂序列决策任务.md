---
published: 2026-08-05
title: "混合 LLM 增强强化学习智能体用于复杂序列决策任务"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Hybrid LLM-Augmented Reinforcement Learning Agents for Complex Sequential Decision Tasks.md"
source_note: "[[信息源/arXiv cs.LG RSS/Hybrid LLM-Augmented Reinforcement Learning Agents for Complex Sequential Decision Tasks.]]"
source_sha256: 28e56e8add6453a099f5a6f16c30925bdd75d4a2145993cd8c9e21b3299562a2
original_url: "https://arxiv.org/abs/2608.03502"
processed: 2026-08-05
language: zh-CN
---

# 混合 LLM 增强强化学习智能体用于复杂序列决策任务

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Christophe D. Hounwanou、John Emeka Eze、Yaé Ulrich Gaba
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03502)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Hybrid LLM-Augmented Reinforcement Learning Agents for Complex Sequential Decision Tasks.|查看原始文件]]

## 摘要

- 大语言模型（LLM）近期在推理、规划与工具使用方面展现出强大能力，催生了新型自主智能体；但基于 LLM 的智能体在需要精确动作优化与环境交互的长视界序列决策任务上表现挣扎。
- 强化学习（RL）虽然对序列控制有效，却常缺乏复杂场景所需的高层抽象与任务分解能力。
- 提出 LLM 增强强化学习智能体（LLM-Augmented Reinforcement Learning Agent），整合 LLM 驱动的规划与基于 RL 的动作优化。
- 架构利用 LLM 生成子目标、结构化计划与上下文引导，同时 RL 智能体通过与环境交互细化底层动作。
- 序列决策任务实验表明：相比纯 RL 与纯 LLM 基线，样本效率更高、成功率更高、动作轨迹更连贯；该混合范式为构建更强的自主系统指明了一条有前景的方向。

## 正文

论文编号：arXiv:2608.03502v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）近期在推理、规划与工具使用方面表现出强大能力，使新型自主智能体成为可能。然而，基于 LLM 的智能体在需要精确动作优化与环境交互的长视界序列决策任务上表现挣扎。强化学习（RL）虽然对序列控制有效，却常常缺乏复杂场景所需的高层抽象与任务分解能力。本文介绍一个 LLM 增强强化学习智能体（LLM-Augmented Reinforcement Learning Agent），把 LLM 驱动的规划与基于 RL 的动作优化整合起来。所提出的架构利用 LLM 生成子目标、结构化计划与上下文引导，而 RL 智能体通过与环境的交互细化底层动作。在序列决策任务上的实验表明，与纯 RL 与纯 LLM 基线相比，样本效率更高、成功率更高、动作轨迹更连贯。这种混合范式为构建更强大的自主系统指明了一个有前景的方向。

## 关键词

#LLM智能体 #强化学习 #规划 #序列决策 #混合架构
