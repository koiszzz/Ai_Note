---
title: "面向复杂顺序决策任务的混合 LLM 增强强化学习智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Hybrid LLM-Augmented Reinforcement Learning Agents for Complex Sequential Decision Tasks.md"
source_note: "[[信息源/arXiv cs.AI RSS/Hybrid LLM-Augmented Reinforcement Learning Agents for Complex Sequential Decision Tasks]]"
source_sha256: 9a769411a3be8ce4f9f6b3114e1746fe65328025ad939aba9c5f846ae0c675db
original_url: "https://arxiv.org/abs/2608.03502"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 面向复杂顺序决策任务的混合 LLM 增强强化学习智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Christophe D. Hounwanou、John Emeka Eze、Yaé Ulrich Gaba
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03502)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Hybrid LLM-Augmented Reinforcement Learning Agents for Complex Sequential Decision Tasks|查看原始文件]]

## 摘要

- 提出 LLM 增强强化学习智能体：把 LLM 驱动的规划与基于 RL 的动作优化集成——LLM 生成子目标、结构化计划与上下文指导，RL 智能体通过与环境的交互精化低层动作。
- 顺序决策任务上的实验显示：相比纯 RL 与纯 LLM 基线，样本效率提升、成功率更高、动作轨迹更连贯。
- 该混合范式凸显了构建更强自主系统的有前景方向。

## 正文

论文编号：arXiv:2608.03502v1（更新类型：new）。以下为摘要全文翻译。

大语言模型（LLM）近期在推理、规划与工具使用方面展现出强大能力，催生了新形式的自主智能体。然而，基于 LLM 的智能体在需要精确动作优化与环境交互的长视界顺序决策任务上表现困难。强化学习（RL）虽然对顺序控制有效，但往往缺乏复杂场景所需的高层抽象与任务分解能力。本文引入 LLM 增强强化学习智能体，把 LLM 驱动的规划与基于 RL 的动作优化集成。所提架构利用 LLM 生成子目标、结构化计划与上下文指导，而 RL 智能体通过与环境的交互精化低层动作。在顺序决策任务上的实验表明，相比仅 RL 与仅 LLM 基线，样本效率提升、成功率更高、动作轨迹更连贯。这种混合范式凸显了构建更强自主系统的有前景方向。

## 关键词

#强化学习 #LLM智能体 #顺序决策 #混合架构
