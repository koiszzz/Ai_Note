---
published: 2026-08-06
title: STEP-OPD：重新思考扩散模型在策略蒸馏中的输出目标与内部动力学
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/STEP-OPD- Rethinking Output Targets and Internal Dynamics in On-Policy Distillation for Diffusion Mo.md
source_note: "[[信息源/arXiv cs.CV RSS/STEP-OPD- Rethinking Output Targets and Internal Dynamics in On-Policy Distillation for Diffusion Mo]]"
source_sha256: 8d5d385673afed946ac5f0f10f72975e64ba4bca135dbf8ce74e8a896564bbbc
original_url: https://arxiv.org/abs/2608.04887
processed: 2026-08-07
language: zh-CN
---

# STEP-OPD：重新思考扩散模型在策略蒸馏中的输出目标与内部动力学

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04887)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/STEP-OPD- Rethinking Output Targets and Internal Dynamics in On-Policy Distillation for Diffusion Mo|查看原始文件]]

## 摘要

- 提出 STEP-OPD，一个面向图像生成的在策略蒸馏（OPD）框架：不把教师当最终目标，而将各任务教师与共享基础模型的速度差作为进一步学习方向，并加回教师的输出速度。
- 对齐学生与教师表示变化的"方向与幅度"，使学生学会表示如何在网络块间渐进变换。
- 将 DiffusionOPD 的 GenEval 得分从 0.927 提升到 0.961，同时改进 OCR 与所有基于偏好的指标；统一学生模型在三类能力上均超越单任务教师。

## 正文

在策略蒸馏（OPD）已成为将多个任务特化图像生成模型整合为单个学生模型的有效方法。然而，现有 OPD 方法主要优化学生以匹配教师的输出速度（velocity），使教师成为优化目标的上限。而仅靠输出级监督会让学生模型的逐块（blockwise）表示演化约束不足，削弱那些必须跨层渐进发展的能力的迁移。我们提出 STEP-OPD，一个面向图像生成的在策略蒸馏框架，将学生的学习目标扩展到教师之外，并对其内部表示演化引入显式约束。我们不再将教师视为最终目标，而是把每个任务特化教师与共享基础模型之间的速度差用作进一步学习的方向，并将该差值的缩放版本加到教师速度上。此外，我们对齐学生与教师之间表示变化的"方向与幅度"，使学生能够学习表示如何跨网络块被渐进变换。在组合对齐、文本渲染和人类偏好上的实验表明，我们的方法一致改进标准 OPD 方法。特别是，它将 DiffusionOPD 的 GenEval 得分从 0.927 提升到 0.961，同时改善了 OCR 以及所有基于偏好的指标。由此得到的统一学生模型在三类能力上均超越相应的单任务教师，表明输出外推能够实现超越教师的学习，而表示变化对齐则为学生的内部变换提供了互补的指导。

## 关键词

#扩散模型 #知识蒸馏 #在策略蒸馏 #图像生成
