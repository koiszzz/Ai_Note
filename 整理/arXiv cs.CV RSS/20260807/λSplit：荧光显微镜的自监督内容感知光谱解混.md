---
published: 2026-08-07
title: "λSplit：荧光显微镜的自监督内容感知光谱解混"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/{-lambda}Split- Self-Supervised Content-Aware Spectral Unmixing for Fluorescence Microscopy.md"
source_note: "[[信息源/arXiv cs.CV RSS/{-lambda}Split- Self-Supervised Content-Aware Spectral Unmixing for Fluorescence Microscopy]]"
source_sha256: 77ac9675ee21f280c315d92e461c4da235a9a186075d127ba6b1020c9b71c0d3
original_url: "https://arxiv.org/abs/2603.23647"
processed: 2026-08-07
language: zh-CN
---

# λSplit：荧光显微镜的自监督内容感知光谱解混

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Federico Carrara, Talley Lambert, Mehdi Seifi, Florian Jug
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2603.23647)

## 摘要

- 荧光显微镜中，光谱解混旨在从捕捉混合荧光发射的光谱图像恢复单个荧光团浓度；经典方法逐像素运行并依赖最小二乘拟合，其性能随发射光谱重叠增加与噪声水平升高而退化，提示可利用结构先验的数据驱动方法可能改进结果。
- 光谱成像的学习方法确实存在，但要么未针对显微数据优化、要么为不适用于荧光显微镜设定的非常特定案例开发。
- 提出 λSplit：物理知情深度生成模型，用分层变分自编码器学习浓度映射上的条件分布；全可微光谱混合器强制与成像过程一致，学习结构先验实现 SOTA 解混与隐式噪声去除。
- 在 3 个真实数据集上演示，合成投射为 66 个具挑战光谱解混基准；对照含经典方法与多种学习方法的 10 个基线方法；结果显示高噪声、光谱显著重叠或光谱维度降低时性能竞争且稳健性改进，成为荧光显微数据光谱解混新 SOTA；与标准共聚焦显微镜兼容，无需专用硬件修改即立即采用。

## 正文

在荧光显微镜中，光谱解混（spectral unmixing）旨在从捕捉混合荧光发射的光谱图像恢复单个荧光团浓度。由于经典方法逐像素运行并依赖最小二乘拟合，其性能随发射光谱日益重叠与噪声水平升高而退化，这提示能够学习并利用结构先验的数据驱动方法可能带来改进结果。光谱成像的学习方法确实存在，但它们要么未针对显微数据优化，要么为不适用于荧光显微镜设定的非常特定案例开发。为解决该问题，研究提出 λSplit，一个物理知情的深度生成模型：用分层变分自编码器学习浓度映射上的条件分布。全可微的光谱混合器（Spectral Mixer）强制与成像过程一致，而学习到的结构先验实现最先进的解混与隐式噪声去除。研究在 3 个真实数据集上演示 λSplit，合成投射为总共 66 个具挑战性的光谱解混基准。研究将结果与包括经典方法与一系列学习方法在内的 10 个基线方法比较。结果一致显示竞争性能，并在高噪声、光谱显著重叠或光谱维度降低的机制下改进稳健性，使 λSplit 成为荧光显微数据光谱解混的新最先进方法。重要的是，λSplit 与标准共聚焦显微镜产生的光谱数据兼容，无需专用硬件修改即可立即采用。

## 关键词

光谱解混、荧光显微镜、变分自编码器、自监督、生成模型
