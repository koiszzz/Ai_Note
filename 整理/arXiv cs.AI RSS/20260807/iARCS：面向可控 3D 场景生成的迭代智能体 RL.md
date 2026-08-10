---
published: 2026-08-07
title: "iARCS：面向可控 3D 场景生成的迭代智能体 RL"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/iARCS- Iterative Agentic RL for Controllable 3D Scene Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/iARCS- Iterative Agentic RL for Controllable 3D Scene Generation]]"
source_sha256: 6576379c3e1a74f04fd8ffb9dc961c9a83cb8f4a562072f3e3e5edc0071b3584
original_url: "https://arxiv.org/abs/2608.06161"
processed: 2026-08-07
language: zh-CN
---

# iARCS：面向可控 3D 场景生成的迭代智能体 RL

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Saugat Adhikari, Ashok Prasad Neupane, Pramish Paudel, Ajad Chhatkuli, Danda Pani Paudel
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06161)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/iARCS- Iterative Agentic RL for Controllable 3D Scene Generation|查看原始文件]]

## 摘要

- 合成 3D 场景生成日益用作计算机视觉与具身 AI 的数据源，但现有生成器常优化感知真实感而不可靠满足任务关键功能约束；这种失配限制合成数据对下游训练的用处，其中可及性、可穿越性与空间规则合规常至关重要。
- 呈现 iARCS：迭代智能体强化学习框架，使预训练场景生成器适应自然语言任务要求。
- iARCS 使用两阶段策略：通用奖励预训练提升物理合理性与布局质量，随后进行任务特定微调，使用从训练反馈迭代精炼的 LLM 生成奖励程序。
- 实验显示在可步行性、可达性与净空聚焦任务上约束保真改进、有效任务特定约束优化与竞争性场景多样性；还表明 iARCS 生成的数据改进基础生成器，支持其作为实用合成数据生成工具（而非仅可控场景编辑方法）的价值。

## 正文

合成 3D 场景生成日益用作计算机视觉与具身 AI 的数据源，但现有生成器往往优化感知真实感，而不可靠地满足任务关键的功能约束。这种失配限制了合成数据对下游训练的有用性，其中可及性（accessibility）、可穿越性（traversability）与空间规则合规（spatial rule compliance）常常至关重要。我们呈现 iARCS，一个迭代智能体强化学习框架，使预训练场景生成器适应自然语言任务要求。iARCS 使用两阶段策略：通用奖励预训练以改进物理合理性与布局质量，随后进行任务特定微调，使用从训练反馈迭代精炼的 LLM 生成奖励程序。实验显示在可步行性、可达性与净空聚焦任务上约束保真改进、有效的任务特定约束优化与竞争性场景多样性。我们还表明，iARCS 生成的数据改进基础生成器，支持其作为实用合成数据生成工具（而非仅可控场景编辑方法）的价值。

## 关键词

#3D场景生成 #强化学习 #智能体 #可控生成
