---
published: 2026-08-07
title: "Dream-MPC：带潜在想象的基于梯度的模型预测控制"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Dream-MPC- Gradient-Based Model Predictive Control with Latent Imagination.md"
source_note: "[[信息源/arXiv cs.LG RSS/Dream-MPC- Gradient-Based Model Predictive Control with Latent Imagination]]"
source_sha256: 92ad3710e7f443794e91ec28110634c24c5458a5aaefa1b2fdffb9dc9935d867
original_url: "https://arxiv.org/abs/2605.04568"
processed: 2026-08-07
language: zh-CN
---

# Dream-MPC：带潜在想象的基于梯度的模型预测控制

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Jonathan Spieler, Sven Behnke
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2605.04568)

## 摘要

- 最先进基于模型的 RL 使用无梯度群体方法、学习策略网络或两者结合；将 MPC 与学习模型及策略先验结合的混合方法有前景，但通常依赖计算昂贵的无梯度优化。
- 提出 Dream-MPC：从展开策略生成少量候选轨迹，用学习的世界模型进行梯度上升优化，并通过复用先前优化动作对优化迭代进行时间摊销，同时加入不确定性正则化。
- 在 24 个连续控制任务上显著提升底层策略性能，超越无梯度 MPC 与最先进基线。
- 代码与视频见项目主页。

## 正文

最先进的基于模型强化学习（RL）方法要么使用无梯度、基于群体的规划方法，要么使用学习策略网络，要么结合策略网络与规划。将模型预测控制（MPC）与学习模型及策略先验结合的混合方法已显示有前景，可兼取两种范式优势。然而，这些方法通常依赖无梯度优化方法，对高维控制任务计算昂贵。基于梯度的方法是很有前景的替代，但近期工作实证表明基于梯度的方法常比无梯度对应更差。研究提出 Dream-MPC：从展开策略生成少量候选轨迹，用学习的世界模型对每条轨迹进行梯度上升优化，并加入不确定性正则化，同时通过复用先前优化的动作对优化迭代进行时间摊销。在 24 个连续控制任务上的结果表明，Dream-MPC 能显著提升底层策略的性能，并超越无梯度 MPC 与最先进基线。代码与视频见 https://dream-mpc.github.io。

## 关键词

模型预测控制、基于模型强化学习、梯度优化、世界模型、连续控制
