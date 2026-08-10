---
published: 2026-08-07
title: "预测社交媒体用户行为：Bluesky 常见与罕见行为预测的混合方法"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Predicting Social Media User Actions- A Hybrid Approach for Common and Rare Behavior Prediction on B.md"
source_note: "[[信息源/arXiv cs.CL RSS/Predicting Social Media User Actions- A Hybrid Approach for Common and Rare Behavior Prediction on B]]"
source_sha256: fbacfd51a98c11f2f08dfc07a0a13c6c4f142b239f270d643e6e687ca8dfc941
original_url: "https://arxiv.org/abs/2511.17241"
processed: 2026-08-07
language: zh-CN
---

# 预测社交媒体用户行为：Bluesky 常见与罕见行为预测的混合方法

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Benjamin White, Anastasia Shimorina
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2511.17241)

## 摘要

- 理解与预测社交媒体平台用户行为对内容推荐与平台设计至关重要；现有方法主要聚焦转推与点赞等常见动作，罕见但显著行为预测基本未探索。
- 呈现混合方法论：处理多样动作词汇中频繁与不频繁动作的社交媒体用户行为预测。
- 大规模 Bluesky 数据集评估：640 万对话线程、25 个人格簇的 12 种不同用户动作；方法论组合四种互补方法：(i) 基于历史响应模式的查找数据库系统；(ii) 带工程时间与语义特征的人格特定 LightGBM 模型（常见动作）；(iii) 融合文本与时间表征的专用混合神经架构（罕见动作分类）；(iv) 文本回复生成。
- 人格特定模型常见动作预测平均宏观 F1 0.64；罕见动作分类器 10 种罕见动作宏观 F1 0.56；有效社交媒体行为预测需识别动作类型根本差异的定制建模策略；方法在 COLM 2025 LLM 社会仿真研讨会 SocialSim 挑战赛获第一名。

## 正文

理解与预测社交媒体平台上的用户行为，对内容推荐与平台设计至关重要。虽然现有方法主要聚焦转推与点赞等常见动作，罕见但显著行为的预测仍基本未被探索。本文呈现一个用于社交媒体用户行为预测的混合方法论：处理一个多样动作词汇中的频繁与不频繁动作。研究在一个大规模 Bluesky 数据集上评估该方法，该数据集包含 640 万个对话线程，跨 25 个人格簇的 12 种不同用户动作。方法论组合四种互补方法：(i) 一个基于历史响应模式的查找数据库系统；(ii) 为常见动作设计、带工程化时间与语义特征的人格特定 LightGBM 模型；(iii) 一个融合文本与时间表征、用于罕见动作分类的专门混合神经架构；以及 (iv) 文本回复的生成。人格特定模型在常见动作预测上实现平均宏观 F1 分数 0.64，而罕见动作分类器在 10 种罕见动作上实现 0.56 的宏观 F1 分数。这些结果表明，有效的社交媒体行为预测需要认识到动作类型之间根本差异的定制建模策略。该方法在语言建模会议（COLM 2025）的 LLM 社会仿真研讨会上组织的 SocialSim：基于社交媒体的角色挑战赛中获得第一名。

## 关键词

社交媒体、行为预测、混合方法、Bluesky、罕见行为
