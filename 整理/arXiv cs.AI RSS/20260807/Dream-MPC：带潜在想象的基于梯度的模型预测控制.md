---
published: 2026-08-07
title: "Dream-MPC：带潜在想象的基于梯度的模型预测控制"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Dream-MPC- Gradient-Based Model Predictive Control with Latent Imagination.md"
source_note: "[[信息源/arXiv cs.AI RSS/Dream-MPC- Gradient-Based Model Predictive Control with Latent Imagination]]"
source_sha256: 9e030ba7f86b3ad056adb6b573f3cfb5ec936b84f96c2f3e8cfe9b9c6507934e
original_url: "https://arxiv.org/abs/2605.04568"
processed: 2026-08-07
language: zh-CN
---

# Dream-MPC：带潜在想象的基于梯度的模型预测控制

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jonathan Spieler, Sven Behnke
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.04568)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Dream-MPC- Gradient-Based Model Predictive Control with Latent Imagination|查看原始文件]]

## 摘要

- 最先进的基于模型的强化学习（RL）方法要么使用无梯度、基于群体的规划，要么使用学习的策略网络，要么结合策略网络与规划；将模型预测控制（MPC）与学习模型及策略先验结合的混合方法已显示有前景，但通常依赖无梯度优化方法，对高维控制任务计算昂贵。
- 基于梯度的方法是前景替代，但近期工作实证表明基于梯度的方法通常比无梯度对应物表现更差。
- 提出 Dream-MPC：新方法，从展开的策略生成少量候选轨迹，并使用学习世界模型通过梯度上升优化每条轨迹，配以不确定性正则化，并通过复用先前优化的动作随时间分摊优化迭代。
- 在 24 个连续控制任务上的结果表明，Dream-MPC 能显著提升底层策略性能，并优于无梯度 MPC 与最先进基线；代码与视频见 https://dream-mpc.github.io。

## 正文

最先进的基于模型的强化学习（RL）方法要么使用无梯度、基于群体的规划方法，要么使用学习的策略网络，要么组合策略网络与规划。将模型预测控制（Model Predictive Control，MPC）与学习模型及策略先验结合以利用两种范式优势的混合方法已显示有前景的结果。然而，这些方法通常依赖无梯度优化方法，对高维控制任务可能计算昂贵。基于梯度的方法是有前景的替代，但近期工作实证表明，基于梯度的方法通常比无梯度对应物表现更差。我们提出 Dream-MPC，一种新方法：从展开的策略生成少量候选轨迹，并使用学习世界模型通过梯度上升优化每条轨迹，配以不确定性正则化，并通过复用先前优化的动作随时间分摊优化迭代。我们在 24 个连续控制任务上的结果表明，Dream-MPC 能显著提升底层策略的性能，并可能优于无梯度 MPC 与最先进的基线。代码与视频见 https://dream-mpc.github.io。

## 关键词

#模型预测控制 #强化学习 #梯度优化 #世界模型
