---
published: 2026-08-07
title: "TRACE：不可靠接触条件下足式机器人的学习本体感觉里程计"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TRACE- Learned Proprioceptive Odometry for Legged Robots under Unreliable Contact Conditions.md"
source_note: "[[信息源/arXiv cs.AI RSS/TRACE- Learned Proprioceptive Odometry for Legged Robots under Unreliable Contact Conditions]]"
source_sha256: 09eaa201422e611637b3a12ee476a90948ac5106223f0c546b6895c2b111dae6
original_url: "https://arxiv.org/abs/2608.05975"
processed: 2026-08-07
language: zh-CN
---

# TRACE：不可靠接触条件下足式机器人的学习本体感觉里程计

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Taehyeon Kong, Woojin Kim, Jemin Hwangbo
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05975)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TRACE- Learned Proprioceptive Odometry for Legged Robots under Unreliable Contact Conditions|查看原始文件]]

## 摘要

- 呈现 TRACE（Tokenized Robust Attention for Contact-Aware Estimation，接触感知估计的 token 化稳健注意力）：端到端学习的足式机器人本体感觉里程计估计器，用于不可靠接触条件——直接预测相对位移、相对旋转与身体坐标系速度，来自近期机载惯性与关节测量历史。
- 引入脚感知交叉注意力模块，自适应加权 IMU 与逐腿运动学 token，不依赖手工定义接触或滑动阈值；估计器用直接监督与两个物理启发辅助损失训练，促进运动学一致性并可靠利用腿部信息。
- 减少策略特定过拟合并改进模拟到现实迁移，仿真训练纳入策略随机化，随后对时序编码器与预测头进行部分真实微调。
- 多样室内外地形实验显示相对经典滤波、混合与纯学习基线一致降低位置漂移；消融研究验证训练目标、策略随机化与真实微调的贡献，尤其在不可靠接触与模拟到现实失配下。

## 正文

本文中，我们呈现 TRACE（Tokenized Robust Attention for Contact-Aware Estimation），一个端到端学习的足式机器人本体感觉里程计（proprioceptive odometry）估计器，用于不可靠接触条件。所提估计器直接从近期机载惯性与关节测量历史预测相对位移、相对旋转与身体坐标系速度。为在不可靠接触条件下提升稳健性，我们引入一个脚感知交叉注意力（foot-aware cross-attention）模块，自适应加权 IMU 与逐腿运动学 token，不依赖手工定义的接触或滑动阈值。该估计器以直接监督与两个物理启发的辅助损失训练，促进运动学一致性并可靠利用腿部信息。为减少策略特定的过拟合并因此改进模拟到现实迁移，仿真训练纳入策略随机化，随后对时序编码器与预测头进行部分真实世界微调。在多样室内外地形上的实验表明，相对经典滤波、混合与纯学习基线，位置漂移一致减少。消融研究进一步验证了所提训练目标、策略随机化与真实世界微调的贡献，尤其在不可靠接触与模拟到现实失配下。

## 关键词

#足式机器人 #本体感觉里程计 #交叉注意力 #接触感知
