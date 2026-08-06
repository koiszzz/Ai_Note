---
title: "3D 膝关节 MRI 分割与跨域泛化中强度归一化方法的系统基准测试"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom]]"
source_sha256: 705a488fefc4722066ac71e88ee8c27e3d8cf5d08bbcddfeb4eac1c27a1dee0a
original_url: "https://arxiv.org/abs/2607.20028"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 3D 膝关节 MRI 分割与跨域泛化中强度归一化方法的系统基准测试

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Oliver Mills、Philip Conaghan、Samuel Relton
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.20028)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom|查看原始文件]]

## 摘要

- 系统比较七种归一化方法对 3D U-Net 膝关节 MRI 半月板分割性能的影响，包括标准缩放、直方图技术与高斯混合模型（GMM）方法。
- 在 IWOAI 2019 数据集训练，并在内部与外部测试集（SKM-TEA）评估泛化性：内部表现相近，但外部数据差异显著，Z-score、Nyúl 直方图匹配和 CLAHE 的鲁棒性优于其他方法。
- 与数据集之间的显著性能下降相比，这些差异较小：强度归一化对泛化性有可测影响，但其影响相对域移效应有限，凸显需要互补策略来实现稳健部署。

## 正文

论文编号：arXiv:2607.20028v2（更新类型：replace-cross）。以下为摘要全文翻译。

稳健的开箱即用性能对深度学习模型在医学影像中的临床部署至关重要。影响模型泛化性的一个重要但未被充分探索的因素是强度归一化，尤其对磁共振成像（MRI）而言，图像强度会随扫描仪和协议而变化。在本研究中，我们系统比较了七种归一化方法及其对膝关节 MRI 半月板分割 3D U-Net 模型性能的影响。方法包括标准缩放方法、基于直方图的技术以及基于高斯混合模型（GMM）的方法。模型在 IWOAI 2019 数据集上训练，并在内部和外部测试集（SKM-TEA）上评估以检验泛化性。内部性能相近，但外部数据的差异显著：Z-score、Nyúl 直方图匹配和 CLAHE 表现出比其他方法更强的鲁棒性。然而，与数据集之间显著的性能下降相比，这些差异较小。总体而言，虽然强度归一化对模型泛化性有可测量的影响，但其影响相对于域移效应仍然有限，这凸显了需要互补策略来实现稳健部署。

## 关键词

#医学影像 #MRI分割 #强度归一化 #跨域泛化
