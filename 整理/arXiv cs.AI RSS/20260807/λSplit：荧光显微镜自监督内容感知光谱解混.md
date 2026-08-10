---
published: 2026-08-07
title: "λSplit：荧光显微镜自监督内容感知光谱解混"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/{-lambda}Split- Self-Supervised Content-Aware Spectral Unmixing for Fluorescence Microscopy.md"
source_note: "[[信息源/arXiv cs.AI RSS/{-lambda}Split- Self-Supervised Content-Aware Spectral Unmixing for Fluorescence Microscopy]]"
source_sha256: a6b3e0fd81b60cd97c09d4c8265dc4f997814332baa99c31e7e1c0407ced13f0
original_url: "https://arxiv.org/abs/2603.23647"
processed: 2026-08-07
language: zh-CN
---

# λSplit：荧光显微镜自监督内容感知光谱解混

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Federico Carrara, Talley Lambert, Mehdi Seifi, Florian Jug
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.23647)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/{-lambda}Split- Self-Supervised Content-Aware Spectral Unmixing for Fluorescence Microscopy|查看原始文件]]

## 摘要

- 荧光显微镜中，光谱解混旨在从捕获混合荧光团发射的光谱图像恢复各荧光团浓度；经典方法逐像素操作并依赖最小二乘拟合，重叠发射谱与更高噪声水平下性能退化，提示可学习并利用结构先验的数据驱动方法可能带来更好结果。
- 基于学习的光谱成像方法存在，但要么未针对显微镜数据优化，要么为不适用于荧光显微镜设置的非常特定案例开发。
- 提出 λSplit：物理知情深度生成模型，用层级变分自编码器学习浓度图上的条件分布——完全可微光谱混合器强制与图像形成过程一致，学习结构先验实现最先进解混与隐式噪声去除。
- 在 3 个真实数据集上（合成铸造为共 66 个挑战性光谱解混基准）演示 λSplit；对照含经典方法与一系列学习方法共 10 个基线方法，结果一致显示竞争性能与高噪声、谱显著重叠或谱维降低时改进稳健性，使 λSplit 成为荧光显微镜数据光谱解混的新最先进；λSplit 与标准共聚焦显微镜产生的光谱数据兼容，无需专用硬件修改即可立即采用。

## 正文

在荧光显微镜中，光谱解混（spectral unmixing）旨在从捕获混合荧光团发射的光谱图像中恢复单个荧光团浓度。由于经典方法逐像素操作并依赖最小二乘拟合，其性能在发射谱日益重叠与噪声水平更高时退化，表明一种能学习并利用结构先验的数据驱动方法可能带来改进的结果。基于学习的光谱成像方法确实存在，但要么未针对显微镜数据优化，要么为不适用于荧光显微镜设置的非常特定案例开发。为解决该问题，我们提出 λSplit，一个物理知情的深度生成模型，使用层级变分自编码器（hierarchical Variational Autoencoder）学习浓度图上的条件分布。一个完全可微的光谱混合器（Spectral Mixer）强制与图像形成过程一致，而学习到的结构先验实现最先进的解混与隐式噪声去除。我们在 3 个真实世界数据集上演示 λSplit，将其合成铸造为共 66 个挑战性光谱解混基准。我们将结果对照共 10 个基线方法（包括经典方法与一系列学习方法）比较。我们的结果一致显示竞争性能与在高噪声机制、谱显著重叠或光谱维数降低时的改进稳健性，使 λSplit 成为荧光显微镜数据光谱解混的新最先进。重要的是，λSplit 与标准共聚焦显微镜产生的光谱数据兼容，无需专用硬件修改即可立即采用。

## 关键词

#光谱解混 #荧光显微镜 #变分自编码器 #物理知情
