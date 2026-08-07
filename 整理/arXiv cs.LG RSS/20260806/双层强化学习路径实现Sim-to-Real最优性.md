---
published: 2026-08-06
title: 双层强化学习路径实现Sim-to-Real最优性
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Bi-Level Reinforcement Learning Pathway for Sim-to-Real Optimality.md
source_note: "[[信息源/arXiv cs.LG RSS/Bi-Level Reinforcement Learning Pathway for Sim-to-Real Optimality]]"
source_sha256: a7c8e4023ec1c761e2d05fa4155a2c4b62d2ee40118a4471776e2d1e2928fcaa
original_url: https://arxiv.org/abs/2510.17709
processed: 2026-08-07
language: zh-CN
---

# 双层强化学习路径实现Sim-to-Real最优性

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.17709)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Bi-Level Reinforcement Learning Pathway for Sim-to-Real Optimality|查看原始文件]]

## 摘要

- 推导 actor-critic 设置下用随机策略梯度（SPG）训练的局部收敛策略对仿真参数的敏感性，用于基于梯度的仿真模型适应。
- 提出双层 RL 方法：用真实世界策略性能的梯度学习仿真参数，直接将仿真模型适应与策略性能耦合，应对 sim-to-real 目标错配。
- 给出所提双层 RL 方法的收敛性分析，并以概念验证的双层 PPO 算法加以说明。

## 正文

在部署到真实环境之前使用仿真模型训练强化学习（RL）策略，是真实交互成本高昂时的一种常见策略。这种方法用于 sim-to-real RL 和 dyna 风格的基于模型的 RL。

这种方法的一个关键局限是，在仿真中训练的策略在真实世界中往往表现不佳，原因是仿真模型与真实环境之间的差异，称为 sim-to-real 差距（sim-to-real gap）。这一差距反映了目标错配（objective mismatch）：仿真模型通常是为预测准确性而构建的，而策略的训练目标是最大化任务性能。

由于在仿真中学习的策略由仿真参数隐式定义，理解所学策略对这些参数的敏感性，使得能够基于梯度调整仿真模型以改善真实世界策略性能。受此启发，我们推导了在 actor-critic 设置中使用随机策略梯度（Stochastic Policy Gradient, SPG）方法训练的局部收敛策略的敏感性——actor-critic 是 RL 中最广泛使用的方法。

基于这一敏感性分析，我们提出一种双层 RL（bi-level RL）方法，通过使用真实世界策略性能的梯度学习仿真参数来应对目标错配问题，从而将仿真模型适应与策略性能直接耦合。我们对所提出的双层 RL 方法进行了全面的收敛性分析，并通过一个概念验证（proof-of-concept）的双层 PPO 算法来说明这一思想。

## 关键词

#强化学习 #Sim-to-Real #双层优化 #策略梯度 #目标错配
