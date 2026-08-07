---
published: 2026-08-06
title: SEAR：面向非配对RGB+热成像3D重建的视觉几何Transformer简单高效适配
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SEAR- Simple and Efficient Adaptation of Visual Geometric Transformers for Unpaired RGB+Thermal 3D R.md
source_note: "[[信息源/arXiv cs.CV RSS/SEAR- Simple and Efficient Adaptation of Visual Geometric Transformers for Unpaired RGB+Thermal 3D R]]"
source_sha256: b2a6af36cf92b0d84125d8ecaea7c9d87d8835003329f75bc56922766eaf3df5
original_url: https://arxiv.org/abs/2603.18774
processed: 2026-08-07
language: zh-CN
---

# SEAR：面向非配对RGB+热成像3D重建的视觉几何Transformer简单高效适配

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.18774)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SEAR- Simple and Efficient Adaptation of Visual Geometric Transformers for Unpaired RGB+Thermal 3D R|查看原始文件]]

## 摘要

- 观察到在 RGB 数据上预训练的视觉几何 transformer 对纯热成像重建泛化良好，但联合处理 RGB 与热模态时难以对齐两种模态。
- 提出 SEAR，一种简单高效的微调策略，将预训练几何 transformer 适配到多模态 RGB-T 输入；用较小的 RGB-T 数据集即可显著超越 3D 重建与相机位姿估计的 SOTA，推理时间开销可忽略。
- 引入新数据集（不同时间、视角、光照下采集的 RGB 与热序列）；代码与模型公开于 https://doi.org/10.5281/ZENODO.21077295。

## 正文

基础前馈视觉几何模型通过从海量 RGB 数据集学习强场景先验，实现准确高效的相机位姿估计与场景重建。然而，应用于混合感知模态（如 RGB-热成像 RGB-T 图像）时其有效性会下降。我们观察到，在 RGB 数据上预训练并锚定视觉几何的 transformer 对纯热成像重建泛化良好，但当联合处理 RGB 和热模态时却难以对齐两者。

为解决此问题，我们提出 SEAR，一种简单高效的微调策略，将预训练几何 transformer 适配到多模态 RGB-T 输入。尽管仅在相对较小的 RGB-T 数据集上训练，我们的方法在 3D 重建和相机位姿估计上显著优于 SOTA 方法，在所有指标上取得大幅改进，且相对原始预训练模型推理时间开销可忽略。值得注意的是，SEAR 即使在低光照和浓烟等挑战性条件下也能实现可靠的多模态位姿估计与重建。

我们通过大量消融研究验证架构，并展示模型如何对齐两种模态。此外，我们引入一个新数据集，包含在不同时间、视角和光照条件下采集的 RGB 与热序列，为多模态 3D 场景重建的未来工作提供稳健基准。代码和模型公开于 https://doi.org/10.5281/ZENODO.21077295。

## 关键词

#RGB热成像 #3D重建 #位姿估计 #视觉几何Transformer
