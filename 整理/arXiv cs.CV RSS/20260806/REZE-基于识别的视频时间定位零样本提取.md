---
published: 2026-08-06
title: REZE：基于识别的视频时间定位零样本提取
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/REZE- Recognition-Based Zero-Shot Extraction for Video Temporal Grounding.md
source_note: "[[信息源/arXiv cs.CV RSS/REZE- Recognition-Based Zero-Shot Extraction for Video Temporal Grounding]]"
source_sha256: 2d9749db8d9f04575694320f171bc2c4f056e04a36c19652466f2d398b0345f2
original_url: https://arxiv.org/abs/2608.04480
processed: 2026-08-07
language: zh-CN
---

# REZE：基于识别的视频时间定位零样本提取

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04480)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/REZE- Recognition-Based Zero-Shot Extraction for Video Temporal Grounding|查看原始文件]]

## 摘要

- 提出 REZE（基于识别的零样本提取），一个简单的免训练方法：将视频切成短片段，让模型给出查询的片段级置信度分数，再用确定性算法把得分曲线转换成任务所需输出。
- 时间聚合在模型之外完成，REZE 因此适配多种任务输出：单区间与多区间片段检索、高光检测。
- 在 QVHighlights 上把免训练片段检索 mAP 从 38.23 提升到 40.32；高光检测达到 44.18 mAP 和 73.41 HIT@1，均为免训练方法新 SOTA，且 HIT@1 超越 QVHighlights 测试划分上所有全监督 SOTA。

## 正文

视频时间定位（VTG）指识别视频中与给定自然语言查询对应的时区间的任务。一种常见的零样本策略是让大型视觉语言模型（VLM）直接生成起止时间戳，因此结果高度依赖模型的设计与训练，不同 VLM 之间的定位精度差异很大。

为此我们提出基于识别的零样本提取（REZE），一种简单的免训练方法：将视频切成短片段，请模型给出查询的片段级置信度分数，并使用确定性算法将所得分数曲线转换为任务所需输出。由于时间聚合在模型外部完成，REZE 适配不同的任务输出，从单区间和多区间片段检索到高光检测。在 QVHighlights 上，REZE 将已报道的最佳免训练片段检索 mAP 从 38.23 提升至 40.32，在高光检测上达到 44.18 mAP 和 73.41 HIT@1，在免训练方法中建立新 SOTA。其 HIT@1 在 QVHighlights 测试划分上也超越了所有全监督 SOTA。

我们在来自三个模型家族的七个骨干上评估 REZE。在 Charades-STA 和 QVHighlights 上，它在所有可用对比中都优于直接生成时间戳。我们进一步观察到，借助 REZE，早期世代模型可以接近其家族中较新模型的原生性能。

## 关键词

#视频时间定位 #零样本 #高光检测 #视觉语言模型
