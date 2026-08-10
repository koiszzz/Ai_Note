---
published: 2026-08-07
title: "通过跨动作高效价值共享加速 Q-learning"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Accelerating Q-learning through Efficient Value-Sharing across Actions.md"
source_note: "[[信息源/arXiv cs.AI RSS/Accelerating Q-learning through Efficient Value-Sharing across Actions]]"
source_sha256: 8b1b32d9e4dd80e8c2ada97338910160abd50c916a15006623e1882ffea50c3e
original_url: "https://arxiv.org/abs/2606.29806"
processed: 2026-08-07
language: zh-CN
---

# 通过跨动作高效价值共享加速 Q-learning

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Prabhat Nagarajan, Brett Daley, Martha White, Marlos C. Machado
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.29806)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Accelerating Q-learning through Efficient Value-Sharing across Actions|查看原始文件]]

## 摘要

- 动作价值（action value）是 Q-learning 等控制算法的基础，但学习它们可能很慢：需要大量更新将价值从接近零的初始值移动到可能远离零的真实值。
- 现有动作价值学习算法通常独立更新每个状态-动作对，没有学习一个状态内所有动作共享的价值。
- 提出均值展开层（mean-expansion layer）：通过在状态内跨动作共享价值、并将问题从直接学习可能很大的动作价值改为学习其低范数表示，加速动作价值学习。
- 在深度 RL 中，该层可作为 Q 网络架构上的免参数附加层而不改变底层算法；应用于深度 Q 网络与隐式分位数网络后，在 57 个 Atari 2600 游戏上提升总体性能，同时增大动作间隙、大幅降低价值过估计。

## 正文

动作价值是 Q-learning 等许多控制算法的基础。因此，高效的动作价值学习是强化学习（RL）的核心。然而，学习动作价值可能很慢：需要大量更新才能将价值从初始值（通常接近零）移动到真实值（可能远离零）。此外，动作价值学习算法通常独立更新每个状态-动作对，而不学习状态内所有动作共有的价值。在本文中，我们通过引入均值展开层（mean-expansion layer）来解决这些低效问题：该层通过在状态内跨动作共享价值，并将问题从直接学习可能很大的动作价值转变为学习其低范数表示，从而加速动作价值学习。在深度 RL 中，该层可以作为 Q 网络架构上免参数的附加层应用，而不改变底层算法。应用于深度 Q 网络和隐式分位数网络时，它在 57 个 Atari 2600 游戏上提升了总体性能，同时增大了动作间隙并显著降低价值过估计。

## 关键词

#强化学习 #Q-learning #动作价值 #深度Q网络
