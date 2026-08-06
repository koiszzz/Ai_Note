---
title: "SP3O：无需奖励建模的片段偏好强化学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SP3O- Reinforcement Learning from Segment Preferences without Reward Modeling.md"
source_note: "[[信息源/arXiv cs.AI RSS/SP3O- Reinforcement Learning from Segment Preferences without Reward Modeling]]"
source_sha256: aa4ae749360821f9fd2faeabd15b2dd2388e621932737203bdc1e7b027256bdd
original_url: "https://arxiv.org/abs/2608.02951"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SP3O：无需奖励建模的片段偏好强化学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Evan Assmus、Qining Zhang、Lei Ying
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02951)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SP3O- Reinforcement Learning from Segment Preferences without Reward Modeling|查看原始文件]]

## 摘要

- 提出片段成对近端策略优化（SP3O）：新颖的免奖励模型、免批评者、基于梯度的 PbRL 算法，兼容片段偏好——用片段级偏好反馈通过离线策略重要性采样构建准确策略值差估计器，再用 PPO 型损失计算策略梯度。
- 一般随机 MDP 的基于偏好强化学习（PbRL）常需训练奖励模型；现有免奖励模型方法要么限于老虎机或确定性 MDP（如 DPO 或 P3O），要么用零阶无梯度优化（通常收敛慢于基于梯度的算法）；且几乎全部使用轨迹级反馈，长轨迹时给人类评估者带来大量负担；片段短得多，更易比较与评估。
- 提供算法理论基础并分析片段长度选择的权衡。
- 在机器人控制与 LLM 微调设置中与其他 PbRL/RLHF 算法实验比较，显示改进性能，尤其在长视界任务。

## 正文

论文编号：arXiv:2608.02951v1（更新类型：cross）。以下为摘要全文翻译。

一般随机 MDP 的基于偏好强化学习（PbRL）往往需要训练奖励模型。现有免奖励模型方法要么限于老虎机或确定性 MDP（如 DPO 或 P3O），要么使用零阶、无梯度优化（通常表现出比基于梯度的算法更慢的收敛率）。此外，现有免奖励模型基于偏好的 RL 算法几乎只使用轨迹级反馈，当轨迹很长时，这会给人类评估者带来大量负担。另一方面，片段短得多，因此更容易比较与评估。在本文中，我们引入片段成对近端策略优化（Segment Pairwise Proximal Policy Optimization，SP3O）：一种新颖的免奖励模型、免批评者、基于梯度的 PbRL 算法，兼容片段偏好。SP3O 利用片段级偏好反馈，通过离线策略重要性采样构建准确的策略值差估计器，然后用 PPO 型损失函数计算策略梯度。我们为算法提供理论基础，并分析选择片段长度的权衡。我们还在机器人控制与 LLM 微调设置中与其他 PbRL/RLHF 算法实验比较，展示其改进性能，尤其在长视界任务中。

## 关键词

#基于偏好的RL #片段偏好 #PPO #免奖励模型
