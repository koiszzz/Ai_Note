---
published: 2026-08-06
title: DisMix：通过解耦序数与非序数特征实现医学影像的顺序感知 Mixup
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/DisMix- Order-Aware Mixup for Medical Imaging via Disentangling Ordinal and Non-Ordinal Features.md
source_note: "[[信息源/arXiv cs.CV RSS/DisMix- Order-Aware Mixup for Medical Imaging via Disentangling Ordinal and Non-Ordinal Features]]"
source_sha256: 9d7dff9e860a1ea34bd5bd68a2e4253b55c35488f2a5791a869c900a89ebfca5
original_url: https://arxiv.org/abs/2608.04652
processed: 2026-08-07
language: zh-CN
---

# DisMix：通过解耦序数与非序数特征实现医学影像的顺序感知 Mixup

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04652)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/DisMix- Order-Aware Mixup for Medical Imaging via Disentangling Ordinal and Non-Ordinal Features|查看原始文件]]

## 摘要

- 指出标准 mixup 不适合序数分类任务：无差别混合疾病严重程度线索（序数）与外观层面变化（非序数）会扭曲支撑临床严重程度分级的序数结构
- 提出 DisMix：面向序数分类的顺序感知 mixup 框架，通过双码本 VQ-VAE 解耦序数与非序数特征，使各子空间独立混合
- 序数码插值产生有意义的中间等级，非序数码变化引入外观多样性而不破坏序数信号
- 在四个医学影像数据集上，与六个图像 mixup 基线配对六个序数分类器，DisMix 取得最佳综合性能，并在数据稀缺和临床分级变异性下保持有效

## 正文

图像 mixup 是一种被广泛采用的数据增强策略，但它不适合诸如医学疾病分级（medical disease grading）之类的序数分类任务，因为这类任务的标签编码了严重程度的进展。标准 mixup 无差别地混合疾病严重程度线索（序数）与外观层面变化（非序数），产生的样本扭曲了支撑临床严重程度分级的序数结构本身。我们引入 DisMix，一个面向序数分类的顺序感知 mixup 框架。DisMix 通过双码本 VQ-VAE（dual-codebook VQ-VAE）解耦序数与非序数特征，允许每个子空间独立混合：序数码被插值以产生有意义的中间等级，而非序数码被变化以引入外观多样性而不破坏序数信号。在四个医学影像数据集上，与六个图像 mixup 基线配对六个序数分类器相比，DisMix 表现出最佳综合性能，并且在数据稀缺和临床分级变异性下仍然有效。

## 关键词

#Mixup #序数分类 #医学影像 #VQ-VAE #数据增强
