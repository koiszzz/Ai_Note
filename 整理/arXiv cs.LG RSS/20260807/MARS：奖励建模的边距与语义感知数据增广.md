---
published: 2026-08-07
title: "MARS：奖励建模的边距与语义感知数据增广"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MARS- Margin and Semantic-Aware Data Augmentation for Reward Modeling.md"
source_note: "[[信息源/arXiv cs.LG RSS/MARS- Margin and Semantic-Aware Data Augmentation for Reward Modeling]]"
source_sha256: 40b34464c48b07a53cb8c6d73108fbf0e2406c79c27646466086418632ee2ec8
original_url: "https://arxiv.org/abs/2602.17658"
processed: 2026-08-07
language: zh-CN
---

# MARS：奖励建模的边距与语义感知数据增广

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Payel Bhattacharjee, Osvaldo Simeone, Ravi Tandon
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2602.17658)

## 摘要

- 奖励建模是 RLHF、RLAIF 与 PPO 对齐的核心，但其可靠性常受稀缺与异质人类偏好数据限制。
- 引入 MARS（奖励建模的边距与语义感知数据增广）：受控低资源奖励建模的自适应增广框架。
- MARS 为低边距偏好对分配更多增广，并用基于语义距离的精化改进选/拒对比，再生成合成偏好样本。
- 三个偏好数据集、两个奖励模型骨干与下游对齐评估中，MARS 在平均 RewardBench 性能与对齐胜率上优于均匀增广、WoN 与 AdaBoost 风格基线；消融与独立评审评估表明增益不仅可由语义精化或 GPT-4.1 评审耦合解释。

## 正文

奖励建模是 RLHF、RLAIF 与基于 PPO 的对齐的核心，但其可靠性常受稀缺与异质的人类偏好数据限制。本文引入 MARS（奖励建模的边距与语义感知数据增广），一个用于受控低资源奖励建模的自适应增广框架。MARS 为低边距偏好对分配更多增广，并使用基于语义距离的精化改进选择/拒绝对比，然后生成合成偏好样本。在三个偏好数据集、两个奖励模型骨干与下游对齐评估中，MARS 在平均 RewardBench 性能与对齐胜率上优于均匀增广、WoN 与 AdaBoost 风格基线。消融与独立评审评估表明，增益不能仅由语义精化或 GPT-4.1 评审耦合单独解释。

## 关键词

奖励建模、数据增广、RLHF、对齐、偏好数据
