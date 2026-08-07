---
published: 2026-08-06
title: CLIP-Joint-Detect：通过对比视觉-语言监督进行目标检测器的端到端联合训练
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/CLIP-Joint-Detect- End-to-End Joint Training of Object Detectors with Contrastive Vision-Language Su.md
source_note: "[[信息源/arXiv cs.CV RSS/CLIP-Joint-Detect- End-to-End Joint Training of Object Detectors with Contrastive Vision-Language Su]]"
source_sha256: feeec552f15e09b88d6fd5b9ee7353a2b26edac188e798a4f6f5c3fff2a569bd
original_url: https://arxiv.org/abs/2512.22969
processed: 2026-08-07
language: zh-CN
---

# CLIP-Joint-Detect：通过对比视觉-语言监督进行目标检测器的端到端联合训练

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.22969)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/CLIP-Joint-Detect- End-to-End Joint Training of Object Detectors with Contrastive Vision-Language Su|查看原始文件]]

## 摘要

- 提出 CLIP-Joint-Detect：一种简单且与检测器无关的框架，通过端到端联合训练整合 CLIP 风格的对比视觉-语言监督
- 轻量并行头将区域或网格特征投影到 CLIP 嵌入空间，通过 InfoNCE 对比损失和辅助交叉熵项与可学习的类别特定文本嵌入对齐，同时优化所有标准检测损失
- 在 Faster R-CNN（Pascal VOC 2007+2012）和 YOLOv11（MS COCO 2017）上取得一致且显著的提升，同时保持实时推理速度

## 正文

传统目标检测器依赖交叉熵分类，这种分类方式容易受到类别不平衡和标签噪声的影响。我们提出 CLIP-Joint-Detect，这是一个简单且与检测器无关的框架，通过端到端联合训练整合 CLIP 风格的对比视觉-语言监督。一个轻量级的并行头将区域或网格特征投影到 CLIP 嵌入空间中，并通过 InfoNCE 对比损失和辅助交叉熵项将它们与可学习的类别特定文本嵌入对齐，同时所有标准检测损失都被同步优化。该方法可以无缝应用于两阶段和单阶段架构。我们在使用 Faster R-CNN 的 Pascal VOC 2007+2012 数据集上以及使用现代 YOLO 检测器（YOLOv11）的大规模 MS COCO 2017 基准上对其进行了验证，在保持实时推理速度的同时取得了一致且显著的改进。大量实验和消融研究表明，在多样化的架构和数据集上，与可学习文本嵌入的联合优化显著提升了闭集检测性能。

## 关键词

#目标检测 #视觉语言 #对比学习 #端到端训练
