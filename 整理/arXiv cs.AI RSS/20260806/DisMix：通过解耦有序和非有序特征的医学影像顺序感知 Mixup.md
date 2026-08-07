---
published: 20260806
title: "DisMix：通过解耦有序和非有序特征的医学影像顺序感知 Mixup"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DisMix- Order-Aware Mixup for Medical Imaging via Disentangling Ordinal and Non-Ordinal Features.md"
source_note: "[[信息源/arXiv cs.AI RSS/DisMix- Order-Aware Mixup for Medical Imaging via Disentangling Ordinal and Non-Ordinal Features]]"
source_sha256: 3d8c94bc70ef77d19f35ab291e5e8f54786ad7d7a4139a443022b1752109ebee
original_url: "https://arxiv.org/abs/2608.04652"
processed: 2026-08-06
language: zh-CN

---

# DisMix：通过解耦有序和非有序特征的医学影像顺序感知 Mixup

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dileepa Pitawela, Gustavo Carneiro, Hsiang-Ting Chen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04652)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DisMix- Order-Aware Mixup for Medical Imaging via Disentangling Ordinal and Non-Ordinal Features|查看原始文件]]

## 摘要

- 图像 mixup 是广泛采用的数据增强策略，但不适合医学疾病分级等有序分类任务，其中标签编码严重程度进展；标准 mixup 不加区分混合疾病严重性线索（有序）与外观级变化（非有序），产生扭曲支撑临床严重性分级的有序结构的样本。
- 本文引入 DisMix，一个用于有序分类的顺序感知 mixup 框架：通过双码本 VQ-VAE 解耦有序和非有序特征，允许每个子空间独立混合——有序码插值产生有意义的中间等级，非有序码变化引入外观多样性而不破坏有序信号。
- 跨四个医学影像数据集，DisMix 在六个图像 mixup 基线与六个有序分类器配对中显示最佳聚合性能，并在数据稀缺和临床分级变异性下保持有效。

## 正文

图像 mixup 是广泛采用的数据增强策略，然而它不适合医学疾病分级等有序分类任务，其中标签编码严重程度的进展。通过不加区分混合疾病严重性线索（有序）与外观级变化（非有序），标准 mixup 产生扭曲支撑临床严重性分级的顺序结构的样本。我们引入 DisMix，一个用于有序分类的顺序感知 mixup 框架。DisMix 通过双码本 VQ-VAE 解耦有序和非有序特征，允许每个子空间独立混合：有序码插值产生有意义的中间等级，而非有序码变化引入外观多样性而不破坏有序信号。跨四个医学影像数据集，DisMix 在六个图像 mixup 基线与六个有序分类器配对中显示最佳聚合性能，并在数据稀缺和临床分级变异性下保持有效。

## 关键词

#医学影像 #有序分类 #Mixup #数据增强 #arXiv