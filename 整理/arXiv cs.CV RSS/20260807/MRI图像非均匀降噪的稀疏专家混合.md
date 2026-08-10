---
published: 2026-08-07
title: "MRI 图像非均匀降噪的稀疏专家混合"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Sparse Mixture-of-Experts for Non-Uniform Noise Reduction in MRI Images.md"
source_note: "[[信息源/arXiv cs.CV RSS/Sparse Mixture-of-Experts for Non-Uniform Noise Reduction in MRI Images]]"
source_sha256: 3fd543eda13088654871c87d9b92d8ec7140f36af3b0eb6bda8f45216844c358
original_url: "https://arxiv.org/abs/2501.14198"
processed: 2026-08-07
language: zh-CN
---

# MRI 图像非均匀降噪的稀疏专家混合

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zeyun Deng, Joseph Campbell
> - **发布时间**：2026-08-07
> - **分类**：eess.IV
> - **原文**：[打开链接](https://arxiv.org/abs/2501.14198)

## 摘要

- 磁共振成像（MRI）是临床环境必不可少的诊断工具，但其效用常受成像过程引入噪声伪影阻碍；有效去噪对提升图像质量同时保留解剖结构至关重要。
- 传统去噪方法常假设均匀噪声分布，难处理 MRI 图像中常见的非均匀噪声；在先前多分支 MRI 去噪方法基础上，引入细粒度稀疏专家混合框架用于 MRI 图像去噪。
- 方法将每个图像分解为基于补丁或基于分割的区域，按学习特征相似性分组区域，并将每区域路由到专用去噪卷积神经网络。
- 合成与真实脑 MRI 数据集上方法表现优于 SOTA 去噪技术；显示对未见数据集有效泛化，凸显稳健性与适应性。

## 正文

磁共振成像（Magnetic Resonance Imaging, MRI）是临床环境中必不可少的诊断工具，但其效用常受成像过程引入的噪声伪影阻碍。有效的去噪对提升图像质量、同时保留解剖结构至关重要。然而，传统去噪方法通常假设均匀的噪声分布，难以处理 MRI 图像中常见的非均匀噪声。基于先前的多分支 MRI 去噪方法，研究引入一个用于 MRI 图像去噪的细粒度稀疏专家混合（sparse mixture-of-experts）框架。方法将每个图像分解为基于补丁或基于分割的区域，根据学习到的特征相似性对区域分组，并将每个区域路由到一个专门的去噪卷积神经网络。方法在合成与真实世界的脑 MRI 数据集上表现优于最先进的去噪技术。此外，研究显示它能有效泛化到未见数据集，凸显其稳健性与适应性。

## 关键词

MRI、去噪、专家混合、非均匀噪声、稀疏路由
