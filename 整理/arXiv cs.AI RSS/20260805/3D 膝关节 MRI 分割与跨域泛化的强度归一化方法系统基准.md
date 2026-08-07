---
published: 20260805
title: "3D 膝关节 MRI 分割与跨域泛化的强度归一化方法系统基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom]]"
source_sha256: 705a488fefc4722066ac71e88ee8c27e3d8cf5d08bbcddfeb4eac1c27a1dee0a
original_url: "https://arxiv.org/abs/2607.20028"
processed: 2026-08-06
language: zh-CN

---

# 3D 膝关节 MRI 分割与跨域泛化的强度归一化方法系统基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Oliver Mills, Philip Conaghan, Samuel Relton
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.20028)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom|查看原始文件]]

## 摘要

- 开箱即用的稳健性能对医学影像中深度学习模型的临床部署至关重要；影响模型泛化的一个重要但未被充分探索的因素是强度归一化，尤其是 MRI 中图像强度随扫描仪和协议变化。
- 本研究系统比较七种归一化方法及其对膝关节 MRI 半月板分割 3D U-Net 模型性能的影响，模型在 IWOAI 2019 数据集训练，并在内部和外部测试集（SKM-TEA）上评估。
- 内部性能相似，但外部数据差异显著：Z-score、Nyúl 直方图匹配和 CLAHE 比其他方法更稳健；然而这些差异与数据集间显著的性能下降相比很小，凸显了领域漂移的影响。

## 正文

开箱即用的稳健性能对于深度学习模型在医学影像中的临床部署至关重要。影响模型泛化的一个重要但未被充分探索的因素是强度归一化，尤其是磁共振成像（MRI），其中图像强度随扫描仪和协议变化。在本研究中，我们系统比较了七种归一化方法及其对膝关节 MRI 半月板分割 3D U-Net 模型性能的影响。这些方法包括标准缩放方法、基于直方图的技术和基于高斯混合模型（GMM）的方法。模型在 IWOAI 2019 数据集上训练，并在内部和外部测试集（SKM-TEA）上评估以检验泛化能力。内部性能相似，但外部数据的差异显著，Z-score、Nyúl 直方图匹配和 CLAHE 比其他方法表现出更强的鲁棒性。然而，与数据集之间观察到的显著性能下降相比，这些差异很小。总体而言，虽然强度归一化对模型泛化有可测量的影响，但其影响相对于领域漂移的效应是有限的，凸显了对补充策略以实现稳健部署的需求。

## 关键词

#医学影像 #MRI #强度归一化 #分割 #arXiv