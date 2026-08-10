---
published: 2026-08-07
title: "Tree-NET：经高效低层特征训练增强 2D 医学图像分割"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Tree-NET- Enhancing 2D Medical Image Segmentation Through Efficient Low-Level Feature Training.md"
source_note: "[[信息源/arXiv cs.CV RSS/Tree-NET- Enhancing 2D Medical Image Segmentation Through Efficient Low-Level Feature Training]]"
source_sha256: 04df90f0be37d433a06287bde98a3c99cea7f15d989f25dc200ec1a0293f3047
original_url: "https://arxiv.org/abs/2501.02140"
processed: 2026-08-07
language: zh-CN
---

# Tree-NET：经高效低层特征训练增强 2D 医学图像分割

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Orhan Demirci, Bulent Yilmaz
> - **发布时间**：2026-08-07
> - **分类**：eess.IV
> - **原文**：[打开链接](https://arxiv.org/abs/2501.02140)

## 摘要

- 引入 Tree-NET：利用瓶颈监督增强分割准确率与计算效率的医学图像分割新框架；先前研究将瓶颈特征监督应用于分割任务，但通常限于训练阶段，推理时无计算收益。
- 据研究所知，这是首个采用双瓶颈监督的分割框架，在输入与输出阶段利用潜空间特征；以最小参数开销降低输入与标签维度同时保持准确率。
- Tree-NET 三组件架构：Encoder-Net 与 Decoder-Net 经自动编码压缩输入与标签数据，Bridge-Net 在这些压缩表征上训练的分割模型；完全在稠密低维特征上运行，Tree-NET 改进运行时效率，可集成进现有分割模型而不修改内部结构或增加模型大小。
- 两个关键分割任务评估：皮肤病变与息肉分割，用 U-NET、U-NET++ 与 Polyp-PVT 等多样骨干；结果显示 Tree-NET 将 FLOPs 降低 4–13 倍、减少内存使用，同时保持与基线相当的分割准确率；例如未训练 U-NET++ 骨干下 ISIC 2018 Dice 从 0.829 提至 0.862、IoU 从 0.736 提至 0.787；CVC-ClinicDB 上 Polyp-PVT 骨干 Dice 0.946、IoU 0.901，匹配或超越基线性能。

## 正文

本文引入 Tree-NET，一个利用瓶颈监督（bottleneck supervision）同时增强分割准确率与计算效率的医学图像分割新框架。虽然先前研究已将瓶颈特征监督应用于分割任务，它通常限于训练阶段，推理时不提供计算收益。据研究所知，这是第一个采用双瓶颈监督的分割框架，在输入与输出阶段都利用潜空间特征。该方法以最小的参数开销降低输入与标签维度，同时保持准确率。Tree-NET 具有三组件架构：Encoder-Net 与 Decoder-Net 通过自动编码压缩输入与标签数据，而 Bridge-Net 是在这些压缩表征上训练的分割模型。通过完全在稠密、低维特征上运行，Tree-NET 改进运行时效率，并可集成进现有分割模型，无需修改其内部结构或增加模型大小。研究在两个关键分割任务上评估 Tree-NET：皮肤病变与息肉分割，使用包括 U-NET、U-NET++ 与 Polyp-PVT 在内的多样骨干模型。实验结果显示，Tree-NET 将 FLOPs 降低 4 到 13 倍并减少内存使用，同时保持与基线模型相当的分割准确率。例如，使用未训练的 U-NET++ 骨干，Tree-NET 将 ISIC 2018 的 Dice 分数从 0.829 提升到 0.862、IoU 从 0.736 提升到 0.787。在 CVC-ClinicDB 上，使用 Polyp-PVT 骨干取得 Dice 0.946 与 IoU 0.901，匹配或超越基线性能。

## 关键词

医学图像分割、瓶颈监督、低维特征、高效、Tree-NET
