---
published: 2026-08-05
title: "SP3O：无需奖励建模的段偏好强化学习"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SP3O- Reinforcement Learning from Segment Preferences without Reward Modeling.md"
source_note: "[[信息源/arXiv cs.LG RSS/SP3O- Reinforcement Learning from Segment Preferences without Reward Modeling.]]"
source_sha256: a8976f36f5989ed031132b5c9f987e47ed6e4dd9ce8bd110940fb8eacc54d4aa
original_url: "https://arxiv.org/abs/2608.02951"
processed: 2026-08-05
language: zh-CN
---

# SP3O：无需奖励建模的段偏好强化学习

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Evan Assmus、Qining Zhang、Lei Ying
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02951)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SP3O- Reinforcement Learning from Segment Preferences without Reward Modeling.|查看原始文件]]

## 摘要

- 一般随机 MDP 的基于偏好强化学习（PbRL）通常需要训练奖励模型；现有免奖励模型方法要么局限于老虎机或确定性 MDP（如 DPO 或 P3O），要么使用零阶、无梯度优化（一般收敛率慢于基于梯度算法）。
- 现有免奖励模型偏好 RL 算法几乎只用轨迹级反馈，轨迹长时给人类评估者带来大量负担；段则短得多，更易比较与评估。
- 提出段成对近端策略优化（SP3O），一个与段偏好兼容的新颖免奖励模型、免评论家、基于梯度的 PbRL 算法：用段级偏好反馈经离线重要性采样构建准确策略价值差估计器，再用该估计器经 PPO 型损失函数计算策略梯度。
- 提供算法理论基础并分析选择段长度的权衡；在机器人控制与 LLM 微调设置中与其他 PbRL/RLHF 算法实验比较，展示改进性能，尤其在长视界任务中。

## 正文

论文编号：arXiv:2608.02951v1（更新类型：new）。以下为摘要全文翻译。

一般随机 MDP 的基于偏好强化学习（PbRL）通常需要训练奖励模型。现有免奖励模型方法要么局限于老虎机或确定性 MDP，如 DPO 或 P3O；要么使用零阶、无梯度的优化，其收敛率一般慢于基于梯度的算法。此外，现有免奖励模型的偏好 RL 算法几乎专门使用轨迹级反馈，当轨迹很长时这会给人类评估者带来大量负担。另一方面，段要短得多，更容易比较与评估。在本文中，我们引入一个新颖的免奖励模型、免评论家、基于梯度的 PbRL 算法，与段偏好兼容，名为段成对近端策略优化（Segment Pairwise Proximal Policy Optimization，SP3O）。SP3O 利用段级偏好反馈，通过离线重要性采样构建一个准确的策略价值差估计器，然后用该估计器通过一个 PPO 型损失函数计算策略梯度。我们为该算法提供理论基础，并分析选择段长度的权衡。我们还将其与其他 PbRL/RLHF 算法在机器人控制与 LLM 微调设置中进行实验评估，以展示其改进的性能，尤其在长视界任务中。

## 关键词

#基于偏好强化学习 #段偏好 #免奖励模型 #PPO #RLHF
