---
published: 2026-08-06
title: 优化策略的学习来源：可恢复性感知的rollout干预学习
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Optimizing What Policies Learn From- Recoverability-aware Rollout Intervention Learning.md
source_note: "[[信息源/arXiv cs.CL RSS/Optimizing What Policies Learn From- Recoverability-aware Rollout Intervention Learning]]"
source_sha256: cef6a3d11798cc2c191f0c113457242ebec63fcafaaef4330f54ef177c7d4667
original_url: https://arxiv.org/abs/2608.05080
processed: 2026-08-07
language: zh-CN
---

# 优化策略的学习来源：可恢复性感知的rollout干预学习

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05080)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Optimizing What Policies Learn From- Recoverability-aware Rollout Intervention Learning|查看原始文件]]

## 摘要

- 无评论家（critic-free）组式强化学习为 LLM 后训练提供可扩展方案，但现有方法对每个任务和轨迹状态分配相同数量的 rollout
- 提出 RAIL：将干预选择建模为在线上下文赌博机问题，用 shadow-to-live 过程收集的干预轨迹训练可恢复性控制器
- 在有限 rollout 预算下，RAIL 持续提升性能，生成信息量更大、冗余更少的 rollout

## 正文

无评论家（critic-free）的基于组的强化学习已成为大语言模型后训练的可扩展方法。然而，大多数现有方法为每个任务和轨迹状态分配相同数量的 rollout，尽管一些 rollout 提供的学习信号远比其他的更有用。最近的工作开始将 rollout 生成视为自适应决策，但仍有两个重要局限：首先，干预策略通常基于固定启发式，因此无法随训练中策略的变化而调整；其次，这些方法通常只决定生成多少 rollout，而不显式控制在哪里以及如何干预。

为解决这些局限，我们提出可恢复性感知干预学习（Recoverability-Aware Intervention Learning，RAIL），一种训练时框架，基于每次干预所产生的改进来学习如何生成 rollout。RAIL 将干预选择建模为在线上下文赌博机问题，并利用通过 shadow-to-live 过程收集的干预轨迹训练一个可恢复性控制器。这使得控制器能在底层策略演化的同时持续学习。

我们从有效性、适应性、表达力和效率四个方面评估 RAIL。在多种设置下，RAIL 在有限 rollout 预算下持续提升性能。这些结果表明，可恢复性感知干预为生成信息量更大、冗余更少的 rollout 提供了原则性方法，从而在后训练期间产生更强的学习信号。

## 关键词

#RAIL #强化学习 #LLM后训练 #rollout #上下文赌博机
