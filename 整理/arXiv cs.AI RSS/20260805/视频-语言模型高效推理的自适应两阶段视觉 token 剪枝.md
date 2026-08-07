---
published: 20260805
title: "视频-语言模型高效推理的自适应两阶段视觉 token 剪枝"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models]]"
source_sha256: 0b3b55a5037616ddba2fd8215941317318a6fe1eeac5df932901c878915d391f
original_url: "https://arxiv.org/abs/2608.03112"
processed: 2026-08-06
language: zh-CN

---

# 视频-语言模型高效推理的自适应两阶段视觉 token 剪枝

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Paribesh Regmi, Qingshuang Chen, Chi Zhang, Heba Aly, Yelin Kim, Hongda Mao
> - 发布时间：20260805
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03112)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models|查看原始文件]]

## 摘要

- 视觉-语言模型在图像和视频理解上表现出色，但每图像数千 token 的处理需求导致高推理延迟，限制其在资源受限边缘设备和实时监控应用中的部署；现有 token 缩减技术主要为单图像输入开发，未考虑视频序列中的时间和帧间冗余。
- 本文提出专为视频处理设计的两阶段自适应 token 剪枝策略：第一阶段剪除冗余帧，第二阶段在保留帧内进行 token 级剪枝，剪枝比例根据每个视频内容自适应确定。
- 方法完全事后，无需额外训练或微调，在 10% token 保留率下视频字幕基准准确率提升 7%，同时计算 TFLOPs 减少 95%。

## 正文

视觉-语言模型在图像和视频理解上表现出色，但由于每图像需处理数千个 token 而遭受高推理延迟，限制其在资源受限边缘设备和实时监控应用中的部署。这一挑战在视频处理中进一步放大，因为必须同时分析多帧。现有 token 缩减技术主要为单图像输入开发，因此未能考虑视频序列中存在的时间和帧间冗余。此外，这些方法通常依赖跨所有输入应用的固定、统一剪枝比例，这是次优的，因为不同视频之间的冗余程度可能显著变化，需要内容相关的剪枝水平以保留关键信息。为解决这些局限，我们提出一个专为视频处理设计的两阶段自适应 token 剪枝策略。第一阶段，我们剪除冗余帧；第二阶段，在保留帧内应用 token 级剪枝。关键的是，第二阶段的剪枝比例根据每个视频的内容自适应确定。这是通过分析 token 嵌入的相关结构来量化冗余实现的，该冗余用于确定比例。重要的是，我们的方法完全事后，无需额外训练或微调，同时实现强实证收益；值得注意的是，它在 10% token 保留率下将视频字幕基准准确率提高 7%，同时将计算 TFLOPs 减少 95%。

## 关键词

#视频理解 #token剪枝 #高效推理 #视觉语言模型 #arXiv