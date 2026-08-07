---
published: 2026-08-06
title: GeoReward：缓解视觉语言模型跨市场偏好预测中的上下文变量高估
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/GeoReward- Mitigating Contextual Variable Overestimation in Vision-Language Models for Cross-Market .md
source_note: "[[信息源/arXiv cs.CV RSS/GeoReward- Mitigating Contextual Variable Overestimation in Vision-Language Models for Cross-Market ]]"
source_sha256: 219aa5ee3dcf37bf410b06db4f997c923babe4b19f70fcb1e2e7a8fa1c74b6a8
original_url: https://arxiv.org/abs/2608.04504
processed: 2026-08-07
language: zh-CN
---

# GeoReward：缓解视觉语言模型跨市场偏好预测中的上下文变量高估

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04504)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/GeoReward- Mitigating Contextual Variable Overestimation in Vision-Language Models for Cross-Market |查看原始文件]]

## 摘要

- 诊断视觉语言模型（VLM）的"上下文变量高估"（CVE）失败模式：高估占主导的视觉—文本线索，同时低估稀疏但决定决策的上下文变量
- 收集包含真实广告素材及其多国点击率表现的新多模态数据集；提出 GeoReward 奖励模型，整合市场感知检索增强、上下文引导的视觉调制与选择性敏感度损失三种特制机制
- GeoReward 可引导 VLM 的 RL 微调为文本到图像模型生成市场感知的广告背景设计；实验验证框架缓解 CVE 并优于现有基线

## 正文

视觉语言模型（VLM）在许多多模态任务中表现出色，但仍易出现一种微妙而影响深远的失败模式：它们往往高估占主导的视觉—文本线索，同时低估稀疏但决定决策的上下文变量。我们将这一问题称为上下文变量高估（Contextual Variable Overestimation，CVE），它在预测不同地理市场广告图像偏好等现实应用中尤为明显。例如，当要求 VLM 在两张针对不同国家定制的产品图像之间做选择时，它往往输出固定结果，忽略真实的地域差异。这种坍缩源于海量高容量信号（如产品属性和密集图像块）压倒了编码市场特定上下文的少量关键令牌。为解决 CVE，我们首先收集了一个新的多模态数据集，包含真实广告素材及其在多个国家的点击率表现。随后我们提出 GeoReward，一个旨在跨不同地理市场预测广告图像偏好的奖励模型。GeoReward 整合了三个特制机制：（1）市场感知检索增强（Market-Aware Retrieval Augmentation），（2）上下文引导的视觉调制（Context-Guided Visual Modulation），（3）选择性敏感度损失（Selective Sensitivity Loss）。此外，我们展示了 GeoReward 如何引导 VLM 的 RL 微调，为文本到图像模型生成背景设计，产出市场感知的广告素材。实验验证了我们的框架缓解了 CVE 并优于现有基线。这项工作不仅诊断了 VLM 偏向主导感知特征的系统性偏差，还为稀疏上下文变量主导决策的应用提供了针对性解决方案。

## 关键词

#视觉语言模型 #奖励模型 #跨市场广告 #偏好预测
