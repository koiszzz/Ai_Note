---
published: 2026-08-07
title: "MASS：带权威共享状态的多玩家世界模型"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/MASS- Multiplayer World Models with Authoritative Shared State.md"
source_note: "[[信息源/arXiv cs.CV RSS/MASS- Multiplayer World Models with Authoritative Shared State]]"
source_sha256: d13b514a251308db7df47533594338affd016e836462a114fc4dc93c72e63261
original_url: "https://arxiv.org/abs/2608.06257"
processed: 2026-08-07
language: zh-CN
---

# MASS：带权威共享状态的多玩家世界模型

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Ziqi Cai, Siqi Yang, Yimu Wang, Zixian Gao, Yunheng Liu, Shuchen Weng, Erwin Wu, Kaipeng Zhang, Boxin Shi
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06257)

## 摘要

- 当前视频世界模型在多玩家环境中困难，因为它们将世界状态与视图依赖视觉潜变量纠缠，导致冗余计算、视图不一致与可扩展性差；提出 MAS（带权威共享状态的多玩家世界模型）解决该局限。
- 受多玩家游戏架构启发，MAS 解耦世界动力学与视图渲染；学习逻辑引擎（Logic Engine）从联合动作推进全局、权威、带类型状态（无需手写转移函数），作为唯一循环记忆与同步参考。
- 从该共享状态，学习渲染引擎（Rendering Engine）按需为任何请求相机生成独立且一致的视图。
- 该显式解耦使 MAS 在匹配多玩家 Snake 基准上相对 SOTA 多视图基线实现更优状态准确率与更低跨视图不一致；以 1024 个并发玩家推进预测世界 10000 个循环步；显式权威状态建模为可扩展一致多智能体世界仿真提供实用基础。

## 正文

当前视频世界模型在多玩家环境中困难，因为它们将世界状态与视图依赖的视觉潜变量纠缠，导致冗余计算、视图不一致与可扩展性差。研究提出 MAS（Multiplayer world models with Authoritative Shared State）解决该局限。受多玩家游戏架构启发，MAS 解耦世界动力学与视图渲染。一个学习到的逻辑引擎（Logic Engine）从联合动作推进全局、权威、带类型的状态，无需任何手写转移函数，充当唯一循环记忆与同步参考。从这个共享状态，一个学习到的渲染引擎（Rendering Engine）按需为任何请求的相机生成独立且一致的视图。该显式解耦使 MAS 在匹配的多玩家 Snake 基准上相对最先进多视图基线实现更优的状态准确率与更低的跨视图不一致。它以 1,024 个并发玩家推进预测世界 10,000 个循环步。结果显示，显式、权威的状态建模为可扩展且一致的多智能体世界仿真提供了实用基础。

## 关键词

世界模型、多玩家、权威状态、视图渲染、可扩展性
