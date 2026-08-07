---
published: 2026-08-06
title: StaticSegFormer：基于静态结构化剪枝的高效高性能语义分割
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/StaticSegFormer- An Efficient High-Performance Semantic Segmentation Based on Static Structured Prun.md
source_note: "[[信息源/arXiv cs.CV RSS/StaticSegFormer- An Efficient High-Performance Semantic Segmentation Based on Static Structured Prun]]"
source_sha256: cde7ff8e6b338599f7d52844e3a4c79fa046a56c8b12c0b23df4d2ec5e35cc7c
original_url: https://arxiv.org/abs/2608.04811
processed: 2026-08-07
language: zh-CN
---

# StaticSegFormer：基于静态结构化剪枝的高效高性能语义分割

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04811)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/StaticSegFormer- An Efficient High-Performance Semantic Segmentation Based on Static Structured Prun|查看原始文件]]

## 摘要

- 发现动态结构化剪枝方法在 GPU 平台上帧率低得惊人，远低于简单静态方法，而 mIoU 与 FLOPs 结果相当。
- 提出针对注意力层的静态结构化剪枝方法：同时实现更低 FLOPs 与高帧率，SegFormer 在 Cityscapes 上帧率相对提升最高 34%，且 mIoU 完全无下降。
- StaticSegFormer 对小编码器和大图像效果最强。

## 正文

结构化剪枝通过删除推理期间的参数组来提升深度神经网络（DNN）的效率。以往方法大多降低计算复杂度（FLOPs），而语义分割性能（mIoU）略有下降。相应地，近期的动态结构化剪枝方法旨在减小性能下降，同时进一步降低 FLOPs。然而，我们的研究揭示，在 ADE20K 和 Cityscapes 基准上，GPU 平台上此类动态方法的帧率低得惊人，远低于简单的静态方法，而 mIoU 和 FLOPs 结果相当。为解决这一问题，我们提出一种针对注意力层的静态结构化剪枝方法，同时实现更低的 FLOPs 和 SegFormer 网络的高帧率（fps），后者在 Cityscapes 数据集上相对提升最高达 34%，且 mIoU 性能完全没有下降。我们的 StaticSegFormer 方法对小编码器和大图像最为有效。

## 关键词

#语义分割 #结构化剪枝 #模型压缩 #SegFormer
