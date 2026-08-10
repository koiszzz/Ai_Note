---
published: 2026-08-07
title: "DishSeg24k：带随机专家解码的食物分割大规模基准"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DishSeg24k- A Large-Scale Benchmark for Food Segmentation with Stochastic Expert Decoding.md"
source_note: "[[信息源/arXiv cs.CV RSS/DishSeg24k- A Large-Scale Benchmark for Food Segmentation with Stochastic Expert Decoding]]"
source_sha256: 2e042091bfaf08a9a7d9de5b23bbd45f823163b1cc7e0faeb2b77d2be2141c13
original_url: "https://arxiv.org/abs/2607.23070"
processed: 2026-08-07
language: zh-CN
---

# DishSeg24k：带随机专家解码的食物分割大规模基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yilin Wang, Haochen Shi, Guanyu Chen, Weiqing Min, Jinkai Zheng, Chenggang Yan, Shuqiang Jiang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2607.23070)

## 摘要

- 食物分割对智能餐饮、膳食评估与推荐等应用必不可少；现有基准无法捕捉真实餐饮场景的复杂性：密集盘间重叠、细粒度类相似性与极端长尾类分布超出当前数据集保真度。
- 引入 DishSeg24k：真实餐饮环境中 24096 张图像、112281 实例与 278 个细粒度类别的大规模盘级分割基准。
- 提出食品专家自适应分割 transformer（FEAST）：将基于查询的解码建模为马尔可夫决策过程（MDP），每个解码器层更新视为沿盘边界探索不确定性的序贯决策步；用强化学习（RL）引导专家混合（MoE）模块重新设计解码器，其中双批评家解耦优化方案分离任务导向查询精化与结构感知专家路由；该设计促进专家专业化并防止长尾类分布下专家坍缩。
- DishSeg24k 大量实验显示 FEAST SOTA：mIoU +3.21%、mDice +3.68%、mAcc +4.00%；FoodSeg103 上进一步验证有效性；数据集与代码公开。

## 正文

食物分割对智能餐饮、膳食评估与推荐等应用必不可少。然而，现有基准无法捕捉真实世界餐饮场景的复杂性。密集的盘间重叠、细粒度的类相似性与极端的长期尾类分布等挑战超出了当前数据集的保真度。为填补该差距，研究引入 DishSeg24k，一个大规模盘级分割基准：真实餐饮环境中 24,096 张图像、112,281 个实例与 278 个细粒度类别。基于 DishSeg24k，研究进一步提出食品专家自适应分割 transformer（Food Expert-Adaptive Segmentation Transformers, FEAST）以应对这些挑战。FEAST 将基于查询的解码建模为马尔可夫决策过程（Markov Decision Process, MDP），每个解码器层更新被视为沿盘边界探索不确定性的序贯决策步骤。研究进一步用强化学习（RL）引导的专家混合（MoE）模块重新设计解码器，其中双批评家解耦优化方案（dual-critic decoupled optimization scheme）分离任务导向的查询精化与结构感知的专家路由。该设计促进专家专业化，并防止长尾类分布下的专家坍缩。最后，DishSeg24k 上的大量实验展示了 FEAST 的最先进性能，相对先前方法分别超越 +3.21% mIoU、+3.68% mDice 与 +4.00% mAcc。研究还在 FoodSeg103 上进一步验证 FEAST 的有效性。数据集与代码将公开。

## 关键词

食物分割、基准、专家混合、强化学习、长尾分布
