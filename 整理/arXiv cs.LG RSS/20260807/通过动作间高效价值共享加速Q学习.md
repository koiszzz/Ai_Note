---
published: 2026-08-07
title: "通过动作间高效价值共享加速 Q 学习"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Accelerating Q-learning through Efficient Value-Sharing across Actions.md"
source_note: "[[信息源/arXiv cs.LG RSS/Accelerating Q-learning through Efficient Value-Sharing across Actions]]"
source_sha256: 8d6e8110cd0289aab803e5584eada876a9f14617b98fcd98216452bc5907fba8
original_url: "https://arxiv.org/abs/2606.29806"
processed: 2026-08-07
language: zh-CN
---

# 通过动作间高效价值共享加速 Q 学习

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Prabhat Nagarajan, Brett Daley, Martha White, Marlos C. Machado
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2606.29806)

## 摘要

- 引入均值展开层（mean-expansion layer），通过共享状态内动作间价值，将学习大动作价值的问题转为学习其低范数表示，加速动作价值学习。
- 深度 RL 中可作为参数无关的附加层应用于 Q 网络架构，无需改动底层算法。
- 应用于深度 Q 网络与隐式分位数网络时，在 57 个 Atari 2600 游戏上提升总体性能，同时增大动作间隔并大幅减少价值过估计。

## 正文

动作价值是许多控制算法（如 Q 学习）的基础，因此高效的动作价值学习是强化学习（RL）的核心。然而，学习动作价值可能很慢，需要大量更新才能将价值从其通常接近零的初始化移到可能远离零的真值。此外，动作价值学习算法通常独立更新每个状态-动作对，不学习状态内所有动作共有的价值。本文通过引入均值展开层解决这些低效问题：该层共享状态内动作间的价值，并将直接学习可能很大的动作价值的问题转变为学习其更低范数表示的问题。在深度 RL 中，该层可作为参数无关的附加层应用于 Q 网络架构，无需改动底层算法。将其应用于深度 Q 网络与隐式分位数网络后，57 个 Atari 2600 游戏的总体性能得到提升，同时增大了动作间隔并大幅减少价值过估计。

## 关键词

Q 学习、动作价值、深度强化学习、价值共享、Atari
