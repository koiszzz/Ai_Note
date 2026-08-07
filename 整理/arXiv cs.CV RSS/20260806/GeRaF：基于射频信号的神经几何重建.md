---
published: 2026-08-06
title: GeRaF：基于射频信号的神经几何重建
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/GeRaF- Neural Geometry Reconstruction from Radio Frequency Signals.md
source_note: "[[信息源/arXiv cs.CV RSS/GeRaF- Neural Geometry Reconstruction from Radio Frequency Signals]]"
source_sha256: b85b1e8aaa33827ef2c2f36e51efb01556de2425e67a4bc4b2756ef7721e7083
original_url: https://arxiv.org/abs/2605.29097
processed: 2026-08-07
language: zh-CN
---

# GeRaF：基于射频信号的神经几何重建

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.29097)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/GeRaF- Neural Geometry Reconstruction from Radio Frequency Signals|查看原始文件]]

## 摘要

- GeRaF 是首个使用神经隐式学习从射频（RF）信号进行近距 3D 几何重建的方法，可穿透遮挡，但需应对无透镜成像带来的低分辨率、噪声与镜面反射挑战
- 提出（1）基于滤波的渲染抑制无关信号，（2）基于物理的 RF 体渲染流水线，（3）新颖的无透镜采样与无透镜 alpha 混合策略，使训练期间的全空间采样可行
- 通过学习 MLP 与可训练参数下的符号距离函数、反射率和信号功率，迈出在现实场景中从 RF 信号重建毫米级几何的第一步

## 正文

GeRaF 是首个使用神经隐式学习从射频（RF）信号进行近距 3D 几何重建的方法。与基于 RGB 或 LiDAR 的方法不同，RF 感知可以穿透遮挡，但由于其无透镜成像的本质，分辨率低且噪声大。RGB 成像中的透镜将采样约束在一维光线上，而 RF 信号在整个空间传播，引入显著噪声并导致体渲染的立方复杂度。此外，RF 信号通过镜面反射与表面交互，需要根本不同的建模方式。为应对这些挑战，GeRaF（1）引入基于滤波的渲染以抑制无关信号，（2）实现基于物理的 RF 体渲染流水线，（3）提出新颖的无透镜采样与无透镜 alpha 混合策略，使训练期间的全空间采样成为可能。通过学习 MLP 和可训练参数下的符号距离函数、反射率和信号功率，GeRaF 迈出了在现实场景中从 RF 信号重建毫米级几何的第一步。

## 关键词

#射频感知 #神经隐式表示 #3D重建 #体积渲染
