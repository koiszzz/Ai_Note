---
published: 2026-08-06
title: PADFormer：基于稀疏视角图像的姿态无关异常检测
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/PADFormer- Pose-agnostic Anomaly Detection from Sparse View Images.md
source_note: "[[信息源/arXiv cs.CV RSS/PADFormer- Pose-agnostic Anomaly Detection from Sparse View Images]]"
source_sha256: d5c71fa4e943dd4e11281ae00ae63093ad69def083e76178fd251dc3b305005c
original_url: https://arxiv.org/abs/2608.04210
processed: 2026-08-07
language: zh-CN
---

# PADFormer：基于稀疏视角图像的姿态无关异常检测

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04210)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/PADFormer- Pose-agnostic Anomaly Detection from Sparse View Images|查看原始文件]]

## 摘要

- 提出纯图像空间的姿态无关异常检测方法，利用 ViT 直接重建查询图像的无异常版本并保留姿态信息。
- 关键设计：仅用正常数据训练的跨视角掩码重建，配合动态补丁选择与空间对齐，从稀疏参考视角学习。
- 推理时以多种掩码模式多次前向生成无异常重建集成；在 PAD 基准取得 SOTA，且无需三维重建。

## 正文

姿态无关异常检测（PAD）仍具挑战性，因为异常可能出现在任意视角下，要求方法应对显著的姿态变化。现有方法依赖复杂的三维重建，计算开销大，且需要大量的多视角数据。我们提出 PADFormer，一种新颖的图像空间方法，利用视觉 Transformer（ViT）直接重建查询图像的无异常版本，同时保留姿态信息。我们的关键洞察是将跨视角掩码重建适配到异常检测：仅用正常数据进行训练，并结合动态补丁选择与空间对齐机制，使其能在显著姿态变化下从稀疏参考视角有效学习。推理时，我们使用不同掩码模式执行多次前向传播，生成无异常重建的集成结果，确保对查询图像的全覆盖。通过比较这些重建与查询图像来检测异常。PADFormer 在 PAD 基准上取得了最先进的结果，同时在经典少样本异常检测（FSAD）任务上保持了相当的性能，且无需三维重建，展现出卓越的效率与泛化能力。

## 关键词

#异常检测 #视觉Transformer #掩码重建 #少样本学习 #姿态无关
