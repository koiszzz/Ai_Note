---
published: 2026-08-06
title: YouTube-Occ：从YouTube视频学习室内3D语义占用预测
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/YouTube-Occ- Learning Indoor 3D Semantic Occupancy Prediction from YouTube Videos.md
source_note: "[[信息源/arXiv cs.CV RSS/YouTube-Occ- Learning Indoor 3D Semantic Occupancy Prediction from YouTube Videos]]"
source_sha256: 0580d370fd93f4ec5278abcd7e39c8fb28aa810a98444e7b81501096a35b318e
original_url: https://arxiv.org/abs/2506.18266
processed: 2026-08-07
language: zh-CN
---

# YouTube-Occ：从YouTube视频学习室内3D语义占用预测

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2506.18266)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/YouTube-Occ- Learning Indoor 3D Semantic Occupancy Prediction from YouTube Videos|查看原始文件]]

## 摘要

- 提出 YouTube-Occ，从丰富、未标定的野外互联网视频学习室内 3D 语义占用预测，规避大规模人工标注。
- 自动化数据流水线利用 2D 和 3D 基础模型估计相机几何、重建场景点云并生成密集语义伪标签。
- 提出特征蒸馏驱动、双重对齐的预训练框架：帧内对齐用体素锚定高斯化模块对齐 3D 特征与 2D 先验，跨场景对齐通过类别原型蒸馏实现全局语义一致性。
- 在 NYUv2 和 Occ-ScanNet 上对三种主流架构带来一致提升，尤其在数据有限条件下。

## 正文

3D 语义占用预测对于细粒度场景理解至关重要，然而其在隐私敏感的室内环境中的进展从根本上受到大规模标注 3D 数据稀缺的阻碍。为克服这一局限，我们探索从丰富、未标定的野外互联网视频中学习室内 3D 语义占用预测，同时绕过大量的人工标注。具体而言，我们引入 YouTube-Occ，包括一个自动化数据流水线，利用 2D 和 3D 基础模型处理原始网络视频，估计相机几何、重建场景点云，并用密集语义伪标签丰富它们。然而，这些看似合理的伪标签在朴素监督下未能带来性能提升。

为打破这一僵局，我们进一步提出一个由特征蒸馏驱动并采用双重对齐策略的预训练框架。在其中，帧内对齐利用体素锚定高斯化模块将 3D 特征与对应的 2D 先验对齐，而跨场景对齐通过类别原型蒸馏实现全局语义一致性。实验上，YouTube-Occ 在 NYUv2 和 Occ-ScanNet 基准上的三种主流架构上带来一致的提升，尤其是在数据有限的条件下。我们将公开发布代码和数据，希望能激发未来研究。

## 关键词

#语义占用预测 #自监督学习 #室内场景理解 #预训练
