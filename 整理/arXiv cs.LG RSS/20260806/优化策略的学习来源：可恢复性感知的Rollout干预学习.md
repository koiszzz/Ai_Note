---
published: 2026-08-06
title: 优化策略的学习来源：可恢复性感知的Rollout干预学习
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Optimizing What Policies Learn From- Recoverability-aware Rollout Intervention Learning.md
source_note: "[[信息源/arXiv cs.LG RSS/Optimizing What Policies Learn From- Recoverability-aware Rollout Intervention Learning]]"
source_sha256: 968bb61aeef68b27880210a76041f2ebca0632667d2b50057673aa500c49b24a
original_url: https://arxiv.org/abs/2608.05080
processed: 2026-08-07
language: zh-CN
---

# 优化策略的学习来源：可恢复性感知的Rollout干预学习

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05080)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Optimizing What Policies Learn From- Recoverability-aware Rollout Intervention Learning|查看原始文件]]

## 摘要

- 指出现有后训练方法为每个任务和轨迹状态分配相同数量的 rollout，干预策略基于固定启发式且只决定数量、不决定位置与方式
- 提出 RAIL（可恢复性感知的干预学习）：基于每次干预产生的改进学习如何生成 rollout
- 将干预选择建模为在线上下文赌博机问题，用影子到在线（shadow-to-live）过程收集的干预轨迹训练可恢复性控制器，随策略演化持续学习
- 从有效性、自适应性、表达性、效率四维评估，有限 rollout 预算下持续提升性能，产生更有信息量、更少冗余的 rollout

## 正文

无评论家（critic-free）的基于组的强化学习已成为大语言模型后训练的可扩展方法。然而，大多数现有方法为每个任务和轨迹状态分配相同数量的 rollout，尽管一些 rollout 比其他提供更多有用的学习信号。近期工作已开始将 rollout 生成视为自适应决策，但仍有两个重要局限。首先，干预策略通常基于固定启发式，无法在训练期间随策略变化而调整。其次，这些方法通常只决定生成多少 rollout，而不显式控制在哪里和如何干预。为应对这些局限，我们提出可恢复性感知的干预学习（Recoverability-Aware Intervention Learning, RAIL），一个训练时框架，基于每次干预产生的改进来学习如何生成 rollout。RAIL 将干预选择建模为在线上下文赌博机问题，并利用通过影子到在线（shadow-to-live）过程收集的干预轨迹训练一个可恢复性控制器。这使得控制器在底层策略演变时能持续学习。我们从有效性、自适应性、表达性和效率方面评估 RAIL。在多种设置下，RAIL 在有限的 rollout 预算下持续提升性能。这些结果表明，可恢复性感知干预为生成更有信息量、更少冗余的 rollout 提供了原则性方法，从而在后训练期间产生更强的学习信号。

## 关键词

#强化学习 #后训练 #Rollout #上下文赌博机 #大语言模型
