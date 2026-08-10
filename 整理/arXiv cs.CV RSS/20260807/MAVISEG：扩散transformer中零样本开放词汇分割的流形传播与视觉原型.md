---
published: 2026-08-07
title: "MAVISEG：扩散 transformer 中零样本开放词汇分割的流形传播与视觉原型"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/MAVISEG- Manifold Propagation and Visual Prototypes for Zero-Shot Open-Vocabulary Segmentation in Di.md"
source_note: "[[信息源/arXiv cs.CV RSS/MAVISEG- Manifold Propagation and Visual Prototypes for Zero-Shot Open-Vocabulary Segmentation in Di]]"
source_sha256: bef67792bf07329a80e77767fc0ad29fdd08743d288132e5daa488ddc823f061
original_url: "https://arxiv.org/abs/2608.05878"
processed: 2026-08-07
language: zh-CN
---

# MAVISEG：扩散 transformer 中零样本开放词汇分割的流形传播与视觉原型

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Rajatsubhra Chakraborty, Xujun Che, Ritabrata Chakraborty, Xi Niu, Depeng Xu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05878)

## 摘要

- 文生图扩散 transformer 通过学习生成对象与场景来学习它们，是免训练零样本开放词汇语义分割的强候选；SOTA 归因方法独立评分每个像素，将其特征与固定文本派生类表征比较（输出空间相似性或交叉注意力权重）。
- 该方法丢弃模型自身暴露的结构化信号：生成轨迹的时间结构、每个概念的视觉外观统计与图像自身的成对特征几何。
- 呈现 MAVISEG：免训练精化层，恢复这些信号；其算子只消费逐像素概念分数场与像素特征空间，因此 MAVISEG 捕获无关（不绑定单一归因方法）。
- 六个基准上取得免训练方法中最强总体结果，包括每个基准最佳 mIoU；有趣的是增益在初始捕获最弱处最大，各算子贡献取决于其精化场的噪声；扩散 transformer 携带的概念级信息比当前归因方法恢复的更多，且大部分在通往掩码途中丢失而非模型中缺失。

## 正文

文生图扩散 transformer 通过学习生成对象与场景来学习关于它们，使其成为免训练零样本开放词汇语义分割的强候选。最先进的归因方法独立评分每个像素，将其特征与一个固定的文本派生类表征比较——无论是输出空间相似性还是交叉注意力权重。这丢弃了模型自身暴露的结构化信号：生成轨迹的时间结构、每个概念的视觉外观统计，以及图像自身的成对特征几何。研究呈现 MAVISEG，一个免训练精化层，恢复这些信号。因为其算子只消费逐像素概念分数场与一个像素特征空间，MAVISEG 是捕获无关（capture-agnostic）的，而非绑定于单一归因方法。跨六个基准，它在免训练方法中取得最强总体结果，包括每个基准上最佳 mIoU。有趣的是，增益在初始捕获最弱处最大，且各个算子按它们精化的场中的噪声做出贡献。结果表明，扩散 transformer 携带的概念级信息比当前归因方法恢复的更多，且其中大部分是在通往掩码的路上丢失的，而非模型中缺失。

## 关键词

开放词汇分割、扩散 transformer、零样本、归因、语义分割
