---
published: 2026-08-06
title: 基于 KAN 隐式神经表示的形变医学图像配准
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Deformable Medical Image Registration with KAN-based Implicit Neural Representations.md
source_note: "[[信息源/arXiv cs.CV RSS/Deformable Medical Image Registration with KAN-based Implicit Neural Representations]]"
source_sha256: b2f7a4efe7d87d33d31d8137570ad55d12399b19755562b5957f8e8275aaa43c
original_url: https://arxiv.org/abs/2509.22874
processed: 2026-08-07
language: zh-CN
---

# 基于 KAN 隐式神经表示的形变医学图像配准

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2509.22874)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Deformable Medical Image Registration with KAN-based Implicit Neural Representations|查看原始文件]]

## 摘要

- 提出 KAN-IDIR 与 RandKAN-IDIR：首个基于 Kolmogorov–Arnold 网络（KAN）的隐式神经表示（INR）配准框架，用于逐对优化、分辨率无关的形变图像配准（DIR），无需数据集级训练
- KAN 使用可学习激活函数，适合连续、有物理结构的形变场；RandKAN-IDIR 通过随机基采样进一步降低成本，用更少的基函数保持配准质量
- 在肺 CT、脑 MRI 和心脏 MRI 数据集上，KAN-IDIR 与 RandKAN-IDIR 在 INR 方法中准确率最高，计算开销低且对随机初始化稳定性优越
- RandKAN-IDIR 略优于自适应基选择变体，同时避免其额外训练时间开销，适合可复现的临床研究

## 正文

形变图像配准（deformable image registration，DIR）是医学图像分析的核心，支持纵向研究的空间对齐和多模态融合。基于学习的方法（如 CNN 和 Transformer）提供快速推理，但通常需要大型训练数据集，并且在特定解剖结构或模态上可能不如经典迭代方法。隐式神经表示（implicit neural representations，INRs）通过将形变场建模为连续坐标到位移的映射，提供了一种数据高效的替代方案，但其逐对优化使得运行效率和初始化鲁棒性至关重要。我们提出 KAN-IDIR 和 RandKAN-IDIR，首个基于 Kolmogorov–Arnold 网络（KAN）的 INR 配准框架，用于逐对优化、分辨率无关的 DIR，旨在无需数据集级训练的情况下提高种子稳定性和资源效率。KAN 使用可学习激活函数，非常适合连续、具有物理结构的形变场。RandKAN-IDIR 通过随机化基采样进一步降低成本，用更少的基函数保持配准质量。我们在肺 CT、脑 MRI 和心脏 MRI 数据集上，将方法同逐对 INR 方法、数据集训练的深度模型和经典基线进行了评估。KAN-IDIR 和 RandKAN-IDIR 在基于 INR 的方法中准确率最高，计算开销低，并且在随机初始化下稳定性优越。RandKAN-IDIR 略优于自适应基选择变体，同时避免了它们额外的训练时间复杂度。这使得该方法对于可复现的临床研究具有实用性。源代码可在 https://github.com/anac0der/KAN-IDIR 获取。

## 关键词

#图像配准 #KAN #隐式神经表示 #医学影像 #形变场
