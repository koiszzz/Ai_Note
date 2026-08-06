---
title: "3D 膝关节 MRI 分割强度归一化方法与跨域泛化的系统基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom]]"
source_sha256: 705a488fefc4722066ac71e88ee8c27e3d8cf5d08bbcddfeb4eac1c27a1dee0a
original_url: "https://arxiv.org/abs/2607.20028"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 3D 膝关节 MRI 分割强度归一化方法与跨域泛化的系统基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.20028)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Systematic Benchmark of Intensity Normalisation Methods for 3D Knee MRI Segmentation and Cross-Dom|查看原始文件]]

## 摘要

- 深度学习模型要在医学影像临床部署，必须具备稳健的开箱即用性能；影响泛化能力但研究不足的因素之一是强度归一化。
- 论文系统比较七种归一化方法对膝关节 MRI 半月板分割 3D U-Net 模型性能的影响，方法包括标准缩放、基于直方图的技术和基于高斯混合模型的方法。
- 模型在 IWOAI 2019 数据集上训练，并在内部和外部测试集 SKM-TEA 上评估跨域泛化。
- 内部测试性能相近，但外部数据差异显著；Z-score、Nyúl 直方图匹配和 CLAHE 比其他方法更稳健。不过，数据集之间的域偏移造成的性能下降远大于归一化方法差异。

## 正文

对于深度学习模型在医学影像中的临床部署，稳健的开箱即用性能十分重要。影响模型泛化能力、但尚未得到充分研究的一个因素是强度归一化，尤其是在磁共振成像（MRI）中，因为不同扫描仪和协议会导致图像强度发生变化。

本文系统比较了七种归一化方法，以及它们对使用膝关节 MRI 进行半月板分割的 3D U-Net 模型性能的影响。比较的方法包括标准缩放方法、基于直方图的技术和基于高斯混合模型（GMM）的方法。模型在 IWOAI 2019 数据集上训练，并在内部测试集和外部测试集 SKM-TEA 上评估，以检验跨域泛化能力。

内部数据上的性能相近，但在外部数据上差异显著。与其他方法相比，Z-score、Nyúl 直方图匹配和 CLAHE 表现出更强的稳健性。不过，这些方法之间的差异较小，相比之下，不同数据集之间的显著性能下降更为明显。

总体而言，强度归一化确实会对模型泛化能力产生可测量影响，但其影响相对于域偏移仍然有限，这说明要实现稳健部署，还需要配合其他策略。

## 关键词

#医学影像 #MRI #图像分割 #跨域泛化
