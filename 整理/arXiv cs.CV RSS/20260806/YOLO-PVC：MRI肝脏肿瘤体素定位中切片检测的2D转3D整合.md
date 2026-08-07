---
published: 2026-08-06
title: YOLO-PVC：MRI肝脏肿瘤体素定位中切片检测的2D转3D整合
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/YOLO-PVC- 2D-to-3D Consolidation of Slice-wise Detections for Volumetric Liver Tumor Localization in.md
source_note: "[[信息源/arXiv cs.CV RSS/YOLO-PVC- 2D-to-3D Consolidation of Slice-wise Detections for Volumetric Liver Tumor Localization in]]"
source_sha256: 441aaac851d8d8730c03eb3272237231abb544c08abf7a411970c5b122d3ada7
original_url: https://arxiv.org/abs/2608.04642
processed: 2026-08-07
language: zh-CN
---

# YOLO-PVC：MRI肝脏肿瘤体素定位中切片检测的2D转3D整合

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04642)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/YOLO-PVC- 2D-to-3D Consolidation of Slice-wise Detections for Volumetric Liver Tumor Localization in|查看原始文件]]

## 摘要

- 提出 YOLO-PVC，一个轻量级、模型无关的框架，用于切片式 2D 检测的 2D 转 3D 整合。
- 强制深度连续性，用稳健百分位统计聚合边界框坐标，并通过轻量级 MLP 校准模块细化轴向范围。
- 显式处理深度维度的缺失检测和离群切片，优于朴素堆叠或平均策略。
- 启发式 PVC 整体 IoU3D 为 0.665，校准变体提升至 0.710，BEV IoU 约 0.78。

## 正文

切片式 2D 目标检测器因其计算效率和可扩展性而越来越多地应用于体量数据，但它们往往在深度轴上产生碎片化和不稳定的预测。我们提出 YOLO-PVC，一个轻量级且模型无关的框架，用于切片检测的 2D 转 3D 整合。该方法强制深度连续性，使用稳健的百分位统计聚合边界框坐标，并通过轻量级基于 MLP 的校准模块进一步细化轴向范围。与朴素的堆叠或平均策略不同，YOLO-PVC 显式处理深度维度上的缺失检测和离群切片。

在三种肿瘤类别上的 3D 肝脏 MRI 体量实验表明，相比多个聚合基线有一致的改进。启发式 PVC 实现了 0.665 的整体 IoU3D，而校准变体进一步将性能提升到 0.710，并具有高平面重叠度（BEV IoU 约 0.78）。这些结果表明，结构化几何整合为临床 MRI 中的体素肝脏肿瘤定位提供了有效且实用的解决方案。

## 关键词

#目标检测 #肝脏肿瘤 #医学影像 #2D转3D整合
