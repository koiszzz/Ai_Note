---
published: 2026-08-07
title: "CFGPNet：多光谱目标检测的交叉注意力融合梯度编程网络框架"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/CFGPNet- Cross-Attention-Based Fused Gradient Programmed Network Framework for Multispectral Object .md"
source_note: "[[信息源/arXiv cs.CV RSS/CFGPNet- Cross-Attention-Based Fused Gradient Programmed Network Framework for Multispectral Object ]]"
source_sha256: ccb2854fe3b001864c60a7bc0389ab1a0ccfc4a81d2c3c92958de39064c6cc48
original_url: "https://arxiv.org/abs/2608.06205"
processed: 2026-08-07
language: zh-CN
---

# CFGPNet：多光谱目标检测的交叉注意力融合梯度编程网络框架

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Nima Hatami, Karim Faez, Saeed Sharifian, Hamidreza Amindavar
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06205)

## 摘要

- RGB-T 目标检测利用可见与红外图像的互补优势，支持低光、恶劣天气与复杂多尺度环境的稳健感知；现有方法仍有跨模态交互不足、模态分布差距导致的融合不稳定与重注意力架构的高计算成本问题。
- 提出 CFGPNet：多光谱目标检测的交叉注意力融合梯度编程网络框架；用改进 GELAN 骨干与 RepViT 风格重参数化块强化特征表征同时保持计算效率。
- 引入交叉计算高效注意力（CrossCEA）增强跨模态特征交互、减少可见与热分支间冗余信息传输；注意力选择聚合融合（ASAF）网络结合稠密特征聚合与选择性注意力强调生成紧凑判别融合表征；可编程梯度辅助分支集成进每个 CFGPNet 变体改进梯度传递与优化质量。
- 五个公开多光谱基准（FLIR、M3FD、LLVIP、VEDAI、MFAD）实验显示跨多样场景、对象尺度与模态平衡强且一致的性能：FLIR 80.7% mAP50/45.0% mAP50:95、M3FD 89.9%/63.4%、LLVIP 97.8%/68.9%、VEDAI 83.3%/56.9%、MFAD 83.4%/61.8%；三个模型规模提供有效精度-效率权衡。

## 正文

RGB-T 目标检测利用可见与红外图像的互补优势，支持低光、恶劣天气与复杂多尺度环境中的稳健感知。然而，现有方法仍存在跨模态交互不足、模态分布差距导致的融合不稳定，以及重型注意力架构的高计算成本。为解决这些问题，研究提出 CFGPNet，一个多光谱目标检测的交叉注意力融合梯度编程网络（Cross-Attention-Based Fused Gradient Programmed Network）框架。CFGPNet 使用改进的 GELAN 骨干与 RepViT 风格重参数化块，在保持计算效率的同时强化特征表征。研究引入交叉计算高效注意力（Cross Computation Efficient Attention, CrossCEA）模块增强跨模态特征交互并减少可见与热分支间的冗余信息传输。为生成紧凑且判别的融合表征，注意力选择聚合融合（Attention Selection and Aggregation Fusion, ASAF）网络结合稠密特征聚合与选择性注意力强调。此外，可编程梯度辅助分支集成进每个 CFGPNet 变体，改进梯度传递与优化质量。五个公开多光谱基准（FLIR、M3FD、LLVIP、VEDAI 与 MFAD）的实验表明，CFGPNet 跨多样场景、对象尺度与模态平衡实现强且一致的性能。特别地，框架在 FLIR 上达到 80.7% mAP50/45.0% mAP50:95、M3FD 上 89.9%/63.4%、LLVIP 上 97.8%/68.9%；VEDAI 上达 83.3%/56.9%、MFAD 上 83.4%/61.8%。这些结果表明 CFGPNet 是有效的实用解决方案，跨三个模型规模提供有用的精度-效率权衡。代码、数据与微调模型见 https://github.com/NimaHatami99/CFGPNet。

## 关键词

RGB-T 检测、交叉注意力、多光谱、梯度编程、融合
