---
published: 2026-08-07
title: "FoRM：图像恢复关系流形上的流映射蒸馏"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Flow-Map Distillation on Relation Manifolds for Image Restoration.md"
source_note: "[[信息源/arXiv cs.CV RSS/Flow-Map Distillation on Relation Manifolds for Image Restoration]]"
source_sha256: 7e9067df12a858923acbe465851f81c44b2f807322a6c4bc694ac8dbadaf2261
original_url: "https://arxiv.org/abs/2608.05769"
processed: 2026-08-07
language: zh-CN
---

# FoRM：图像恢复关系流形上的流映射蒸馏

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zihao He, Songhua Liu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05769)

## 摘要

- 图像恢复的知识蒸馏通常将教师与学生网络间的中间特征或关系矩阵作为静态目标对齐，忽视知识迁移过程的动态结构。
- 提出关系流形上的流映射蒸馏（FoRM）：将基于关系的知识迁移重构为关系流形上的连续流映射问题。
- 不在学生与教师关系状态之间回归恒定速度场，FoRM 学习流映射算子 F_θ(z,t,s)：给定当前状态在时间 t，直接预测任意目标时间 s 的关系状态，实现更丰富的轨迹级监督。
- 为保证学习流映射的全局自一致性，引入安全半群一致性约束：用真值桥接状态强制组合一致，消除幻影状态误差累积；端点锚定损失进一步防止算子偏离教师目标。
- 五个图像恢复任务（超分辨率、去雨、去噪、去模糊与低光增强）大量实验显示相对多个骨干架构的 SOTA 蒸馏基线一致增益，训练方差相对朴素流匹配蒸馏降低约 50%，同时取得更优恢复质量。

## 正文

图像恢复的知识蒸馏通常将教师与学生网络之间的中间特征或关系矩阵作为静态目标对齐，忽视知识迁移过程的动态结构。本文提出关系流形上的流映射蒸馏（Flow-Map Distillation on Relation Manifolds, FoRM），将基于关系的知识迁移重构为关系流形上的连续流映射问题。不是在学生与教师关系状态之间回归一个恒定速度场，FoRM 学习一个流映射算子 F_θ(z,t,s)：给定时间 t 的当前状态，直接预测任意目标时间 s 的关系状态，实现更丰富的轨迹级监督。为保证学习流映射的全局自一致性，研究引入一个安全半群一致性约束（safe semigroup consistency constraint）：使用真值桥接状态强制组合一致，消除幻影状态误差累积。一个端点锚定损失进一步防止算子偏离教师目标。五个图像恢复任务（包括超分辨率、去雨、去噪、去模糊与低光增强）上的大量实验表明，相对多个骨干架构的最先进蒸馏基线取得一致增益，同时相对朴素流匹配蒸馏将训练方差降低约 50%，并实现更优的恢复质量。

## 关键词

知识蒸馏、流映射、图像恢复、关系流形、轨迹监督
