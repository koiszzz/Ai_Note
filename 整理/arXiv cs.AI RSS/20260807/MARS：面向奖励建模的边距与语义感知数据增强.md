---
published: 2026-08-07
title: "MARS：面向奖励建模的边距与语义感知数据增强"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MARS- Margin and Semantic-Aware Data Augmentation for Reward Modeling.md"
source_note: "[[信息源/arXiv cs.AI RSS/MARS- Margin and Semantic-Aware Data Augmentation for Reward Modeling]]"
source_sha256: 6248efb70357f7863652c2d21cdd51040cf499d2ab6d4525d2030cbf5fce4354
original_url: "https://arxiv.org/abs/2602.17658"
processed: 2026-08-07
language: zh-CN
---

# MARS：面向奖励建模的边距与语义感知数据增强

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Payel Bhattacharjee, Osvaldo Simeone, Ravi Tandon
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.17658)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MARS- Margin and Semantic-Aware Data Augmentation for Reward Modeling|查看原始文件]]

## 摘要

- 奖励建模是 RLHF、RLAIF 与基于 PPO 对齐的核心，但其可靠性常受稀缺与异构人类偏好数据限制。
- 引入 MARS（边距与语义感知奖励建模数据增强）：面向受控低资源奖励建模的自适应增强框架——为低边距偏好对分配更多增强，并使用基于语义距离的精炼在生成合成偏好样本前改进选择-拒绝对比。
- 在三个偏好数据集、两个奖励模型骨干与下游对齐评估上，MARS 相对均匀增强、WoN 与 AdaBoost 式基线改进平均 RewardBench 性能与对齐胜率。
- 消融与独立裁判评估表明，增益不能仅由语义精炼或 GPT-4.1 裁判耦合解释。

## 正文

奖励建模（reward modeling）是 RLHF、RLAIF 与基于 PPO 对齐的核心，但其可靠性常常受稀缺与异构人类偏好数据的限制。本文中，我们引入 MARS（Margin and Semantic-Aware Data Augmentation for Reward Modeling，边距与语义感知奖励建模数据增强），一个面向受控低资源奖励建模的自适应增强框架。MARS 为低边距偏好对分配更多增强，并使用基于语义距离的精炼在生成合成偏好样本前改进选择-拒绝（chosen-rejected）对比。在三个偏好数据集、两个奖励模型骨干与下游对齐评估上，MARS 相对均匀增强、WoN 与 AdaBoost 式基线改进平均 RewardBench 性能与对齐胜率。消融与独立裁判评估表明，增益不能仅由语义精炼本身或 GPT-4.1 裁判耦合解释。

## 关键词

#奖励建模 #数据增强 #RLHF #对齐
