---
published: 2026-08-05
title: "重访 Q 学习不确定性下的 TD 目标聚合"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Revisiting TD Target Aggregation under Uncertainty in Q-Learning.md"
source_note: "[[信息源/arXiv cs.LG RSS/Revisiting TD Target Aggregation under Uncertainty in Q-Learning.]]"
source_sha256: 1cb97fb1b6e6c7e4e63dc1658a6ad7d853aa976db7ba7a3edd9b778dc9e88240
original_url: "https://arxiv.org/abs/2608.03069"
processed: 2026-08-05
language: zh-CN
---

# 重访 Q 学习不确定性下的 TD 目标聚合

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Lipeng Zu、Xiaonan Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03069)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Revisiting TD Target Aggregation under Uncertainty in Q-Learning.|查看原始文件]]

## 摘要

- 深度 Q 网络（DQN）通过自举时间差分更新学习价值函数，未来回报用对下一状态动作值的贪心最大化近似；该聚合规则本质对估计噪声敏感：Q 值不确定时最大化算子确定性地偏好最大估计（无论其可靠性），通过自举放大误差。
- 提出后继 rollout 聚合深度 Q 网络（SADQ），一个对 Q 学习的简单修改：正则化 TD 目标的形成方式。
- SADQ 用来自学得动力学模型的一步 rollout 预测指导候选下一状态动作间的比较，在不改变底层学习框架的情况下为聚合步骤引入额外结构；所得混合 Bellman 更新减弱不可靠极大值，同时在模型误差递减下保持标准不动点。
- 理论分析表明 SADQ 以逐点方式减少自举诱导的高估。
- 实证上，与强 DQN 变体相比，SADQ 在经典控制任务、真实世界向量环境与 Atari 基准上一致改善训练稳定性。

## 正文

论文编号：arXiv:2608.03069v1（更新类型：new）。以下为摘要全文翻译。

深度 Q 网络（DQN）通过自举的时间差分更新学习价值函数，其中未来回报用对下一状态动作值的贪心最大化来近似。虽然有效，这种聚合规则本质上对估计噪声敏感：当 Q 值不确定时，最大化算子确定性地偏好最大的估计，无论其可靠性如何，导致误差通过自举被放大。在这项工作中，我们提出后继 rollout 聚合深度 Q 网络（Successor Rollout Aggregation Deep Q-Network，SADQ），一个对 Q 学习的简单修改，正则化 TD 目标的形成方式。SADQ 使用来自学得动力学模型的一步 rollout 预测来指导候选下一状态动作之间的比较，在不改变底层学习框架的情况下为聚合步骤引入额外的结构。由此产生的混合 Bellman 更新在模型误差递减下保持标准不动点的同时，减弱不可靠的极大值。我们提供理论分析，表明 SADQ 以逐点方式减少自举诱导的高估。实证上，与强 DQN 变体相比，SADQ 在经典控制任务、真实世界基于向量的环境与 Atari 基准上一致改善训练稳定性。

## 关键词

#Q学习 #时序差分 #强化学习 #高估 #动力学模型
