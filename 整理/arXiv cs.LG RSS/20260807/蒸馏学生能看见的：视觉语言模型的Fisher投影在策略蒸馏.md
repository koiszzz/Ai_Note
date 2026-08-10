---
published: 2026-08-07
title: "蒸馏学生能看见的：视觉语言模型的 Fisher 投影在策略蒸馏"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Distill What the Student Can See- Fisher-Projected On-Policy Distillation for Vision-Language Models.md"
source_note: "[[信息源/arXiv cs.LG RSS/Distill What the Student Can See- Fisher-Projected On-Policy Distillation for Vision-Language Models]]"
source_sha256: 22a8c2c7d0663481545eb6b156aefa5923c64a06284cf061b3f99ab6809de1d1
original_url: "https://arxiv.org/abs/2608.01263"
processed: 2026-08-07
language: zh-CN
---

# 蒸馏学生能看见的：视觉语言模型的 Fisher 投影在策略蒸馏

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Leyan Xue, Feng Xiong, Mingjun Ma, Changqing Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.01263)

## 摘要

- 在策略蒸馏（OPD）从当前学生策略采样轨迹并最小化轨迹前缀上的 token 级师生分歧，使蒸馏状态与学生自身生成分布对齐，但仍假设完整教师分布是各学生容量的合适目标。
- 视觉-语言推理中教师校正可能依赖紧凑学生无法表征的视觉区分；目标缩放研究表明，目标逼近完整教师分布时学生实现更少的指定偏移并获得更差下游性能。
- 提出 Fisher 投影在策略蒸馏（FP-OPD），只蒸馏局部可实现（locally realizable）的教师校正：用连续视觉扰动估计学生局部视觉切空间，在学生 Fisher 度量下将居中师生对数概率差距投影到该空间。
- 8B→2B 蒸馏中 FP-OPD 提升全部 7 个多模态基准，平均分较预训练学生高 2.77、较标准 OPD 高 1.60。

## 正文

在策略蒸馏（OPD）从当前学生策略采样轨迹，并最小化这些轨迹前缀处学生与教师下一 token 分布之间的 token 级分歧，使蒸馏状态与学生自身生成分布对齐。然而，它仍假设完整教师分布是跨学生容量的合适目标。在视觉-语言推理中，教师校正可能依赖紧凑学生无法表征的视觉区分。目标缩放研究显示，随着目标逼近完整教师分布，学生实现的指定偏移更少，下游性能更差。研究因此提出 Fisher 投影在策略蒸馏（FP-OPD），只蒸馏局部可实现的教师校正。FP-OPD 使用连续视觉扰动估计学生的局部视觉切空间，并在学生 Fisher 度量下将居中的师生对数概率差距投影到该空间。所得容量感知目标在学生轨迹上用全词汇反向 KL 优化，保留标准 OPD 框架。在 8B→2B 蒸馏中，FP-OPD 提升全部 7 个评估的多模态基准：平均分较预训练学生提高 2.77，较标准 OPD 提高 1.60。结果表明，局部可实现的教师校正为蒸馏紧凑视觉-语言模型提供了更有效的目标。

## 关键词

知识蒸馏、视觉语言模型、在策略蒸馏、Fisher 度量、容量感知
