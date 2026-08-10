---
published: 2026-08-07
title: "TRU：面向高效多模态推荐遗忘的靶向逆向更新"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TRU- Targeted Reverse Update for Efficient Multimodal Recommendation Unlearning.md"
source_note: "[[信息源/arXiv cs.AI RSS/TRU- Targeted Reverse Update for Efficient Multimodal Recommendation Unlearning]]"
source_sha256: 28375740119608154516049edbf42efeb12bed0e3ad606438ddb388aedadd4a2
original_url: "https://arxiv.org/abs/2604.02183"
processed: 2026-08-07
language: zh-CN
---

# TRU：面向高效多模态推荐遗忘的靶向逆向更新

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhanting Zhou, KaHou Tam, Ziqiang Zheng, Zeyu Ma, Yang Yang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.02183)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TRU- Targeted Reverse Update for Efficient Multimodal Recommendation Unlearning|查看原始文件]]

## 摘要

- 多模态推荐系统（MRS）联合建模用户-项目交互图与丰富项目内容，但该紧密耦合使已学用户数据难以移除；近似机器遗忘提供完全重训的高效替代，但当前 MRS 遗忘 largely 均匀地跨模型组件应用逆向更新。
- 表明该均匀处理与现代 MRS 错位：删除数据的影响在排序行为、模态分支与模型模块间不均分布——该非均匀性产生 MRS 遗忘三个瓶颈：协作图中目标项目持续、跨特征分支模态失衡与参数空间集中模块级敏感性。
- 提出靶向逆向更新（TRU）：MRS 即插即用遗忘框架——不在模型层级应用均匀全局反转，TRU 执行三项协调干预：抑制排序中残留目标项目影响的排序融合门、保留保留多模态表示的逐分支模态缩放，以及将逆向更新定位到删除敏感模块的容量感知参数组选择。
- 跨两个骨干、三个数据集与三种遗忘机制，TRU 在多数设置比 MMRecUn 取得更强保留-遗忘权衡；两个挑战性用户级案例中，TRU 也在所有评估基线中达到有利工作点；安全审计报告两个审计设置中近似方法最低 MIA BalAcc 与最低 ASR 并列，墙钟轨迹显示更快收敛到有利保留-遗忘区域。

## 正文

多模态推荐系统（Multimodal recommendation systems，MRS）联合建模用户-项目交互图与丰富的项目内容，但这种紧密耦合使已学习的用户数据难以移除。近似机器遗忘（approximate machine unlearning）提供了完全重训的高效替代，然而当前 MRS 遗忘 largely 跨模型组件均匀地应用逆向更新。我们表明这种均匀处理与现代 MRS 错位：删除数据的影响在排序行为、模态分支与模型模块之间分布不均。这种非均匀性产生 MRS 遗忘中的三个瓶颈：协作图中的目标项目持续（target-item persistence）、跨特征分支的模态失衡（modality imbalance），以及参数空间中集中的模块级敏感性（module-level sensitivity）。为解决这一失配，我们提出靶向逆向更新（targeted reverse update，TRU），一个 MRS 的即插即用遗忘框架。TRU 不在模型层级应用均匀的全局反转，而是跨模型层级执行三项协调干预：一个排序融合门以抑制排序中残留的目标项目影响，逐分支的模态缩放以保留保留的多模态表示，以及容量感知的参数组选择，将逆向更新定位到删除敏感的模块。跨两个骨干、三个数据集与三种遗忘机制，TRU 在大多数设置中取得比 MMRecUn 更强的保留-遗忘权衡。在两个具有挑战性的用户级案例中，TRU 也达到所有评估基线中的有利工作点。安全审计报告在两个审计设置中，近似方法的最低 MIA BalAcc 与并列最低 ASR，而墙钟轨迹显示更早收敛到有利的保留-遗忘区域。

## 关键词

#机器遗忘 #多模态推荐 #靶向更新 #隐私
