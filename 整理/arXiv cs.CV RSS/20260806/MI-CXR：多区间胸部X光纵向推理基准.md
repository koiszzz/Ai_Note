---
published: 2026-08-06
title: MI-CXR：多区间胸部X光纵向推理基准
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MI-CXR- A Benchmark for Longitudinal Reasoning over Multi-Interval Chest X-rays.md
source_note: "[[信息源/arXiv cs.CV RSS/MI-CXR- A Benchmark for Longitudinal Reasoning over Multi-Interval Chest X-rays|查看原始文件]]"
source_sha256: f37eb7c8ac3e31b7c4019f1478d85b99593fd3295e974df042bb21b1629feb61
original_url: https://arxiv.org/abs/2605.15574
processed: 2026-08-07
language: zh-CN
---

# MI-CXR：多区间胸部X光纵向推理基准

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.15574)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MI-CXR- A Benchmark for Longitudinal Reasoning over Multi-Interval Chest X-rays|查看原始文件]]

## 摘要

- 提出 MI-CXR：在多就诊胸部 X 光（CXR）序列上进行多区间纵向推理标准化评估的基准，无需自由文本报告生成或额外临床背景
- 采用五次就诊患者时间线上的五选一多项选择题，实例化三个互补任务族：时间事件定位、区间变化推理、全局轨迹概括
- 评估 14 个最先进视觉语言模型（VLM），平均准确率仅 29.3%，略高于随机猜测
- 阶段式诊断探测显示：模型常产生局部合理的区间描述，但无法执行时间约束或将证据整合为时间线上的全局一致决策

## 正文

纵向胸部 X 光（CXR）解读要求在多次患者就诊过程中推理疾病的演变，然而大多数现有的医学视觉问答（VQA）基准只关注单张图像或短时程的图像对。我们提出 MI-CXR，一个用于在多次就诊的 CXR 序列上进行多区间（Multi-Interval）纵向推理标准化评估的基准，它不需要自由形式的报告生成，也不需要额外的临床背景。MI-CXR 由基于五次就诊患者时间线的五选一多项选择题构成，并实例化了三个互补的任务族：时间事件定位（Temporal Event Localization）、区间变化推理（Interval-wise Change Reasoning）和全局轨迹概括（Global Trajectory Summarization），这些任务评估了在时间维度上基于临床的视觉推理能力。

对 14 个最先进的视觉语言模型（VLM）的评估显示出较低的整体表现，平均准确率为 29.3%，仅略高于随机猜测。通过分阶段（stage-wise）的诊断探测，我们发现模型经常生成局部合理的区间描述，却无法执行时间约束，也无法将证据整合为整个时间线上全局一致的决策。这些发现揭示了当前 VLM 的关键局限，并将 MI-CXR 确立为面向纵向医学推理的原则性基准。该基准可在 https://github.com/AIDASLab/MI-CXR 获取。

## 关键词

#医学影像 #胸部X光 #纵向推理 #视觉语言模型 #基准测试
