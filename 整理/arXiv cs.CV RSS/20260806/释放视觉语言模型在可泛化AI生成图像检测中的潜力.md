---
published: 2026-08-06
title: 释放视觉语言模型在可泛化AI生成图像检测中的潜力
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Unleashing the Potential of Vision-Language Models for Generalizable AI-Generated Image Detection.md
source_note: "[[信息源/arXiv cs.CV RSS/Unleashing the Potential of Vision-Language Models for Generalizable AI-Generated Image Detection]]"
source_sha256: 3b81e2acdb07e51100703f43436ba220ba0bd2d4227002f12cdff83e39800129
original_url: https://arxiv.org/abs/2608.04935
processed: 2026-08-07
language: zh-CN
---

# 释放视觉语言模型在可泛化AI生成图像检测中的潜力

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04935)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Unleashing the Potential of Vision-Language Models for Generalizable AI-Generated Image Detection|查看原始文件]]

## 摘要

- 发现视觉语言模型的感知编码器（PE）比 DINOv3 具有更大的 AIGI（AI 生成图像）检测潜力，其冻结特征空间具有更强的局部溯源组织。
- 指出语义无关的线性探测无法利用该结构，PE-Linear 在 In-the-Wild 上仍比 DINOv3-Linear 低 4.1%。
- 提出语义原型校准（SPC），从取证语义信息构建类别原型并用监督数据校准，得到检测器 PE-SPC。
- 在跨生成器、后处理和野外基准上超越 DINOv3 基线，取得新的最先进结果。

## 正文

近期研究表明，在现代视觉基础模型（VFM）的冻结表示上使用简单的线性探针即可实现最先进的 AIGI 检测性能，在具有挑战性的野外场景中大幅超越专门检测器。这一发现确立了 DINOv3 作为后续改进的主导基础模型基线。然而，我们发现视觉语言模型的感知编码器（PE）在 AIGI 检测方面具有更大的潜力，因为其语言对齐表示保留了高层溯源语义。具体而言，PE 在其冻结特征空间中表现出比 DINOv3 更强的局部溯源组织。

然而，语义无关的线性探测无法利用这种结构，因为 PE-Linear 在 In-the-Wild 上仍比 DINOv3-Linear 低 4.1%。基于这一观察，我们提出语义原型校准（SPC），从取证语义信息中构建类别原型，并用监督数据进行校准。我们将 SPC 应用于 PE，并将得到的检测器称为 PE-SPC。我们的分析表明，这一简单设计实现了更强的泛化。在跨生成器、后处理和野外基准上，PE-SPC 超越了之前的 DINOv3 基线，取得了新的最先进结果。

## 关键词

#AI生成图像检测 #视觉语言模型 #取证分析 #语义原型
