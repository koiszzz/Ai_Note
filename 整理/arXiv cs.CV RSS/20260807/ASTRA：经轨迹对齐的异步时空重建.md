---
published: 2026-08-07
title: "ASTRA：经轨迹对齐的异步时空重建"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/ASTRA- Asynchronous Spatio-Temporal Reconstruction via Trajectory Alignment.md"
source_note: "[[信息源/arXiv cs.CV RSS/ASTRA- Asynchronous Spatio-Temporal Reconstruction via Trajectory Alignment]]"
source_sha256: 6807b9eb5d0ee2da48f4349720a8ebf1e4a3253d59e0536c9bd2512d90f753e2
original_url: "https://arxiv.org/abs/2608.02006"
processed: 2026-08-07
language: zh-CN
---

# ASTRA：经轨迹对齐的异步时空重建

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Junyu Zhu, Hao Zhu, Xinzhuo Zhang, Hongdong Li, Zhan Ma, Xun Cao
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.02006)

## 摘要

- 动态 3D 场景重建在严格同步多相机输入假设下取得显著成功；真实场景中采集设备间的时间异步仍是关键挑战，导致严重运动模糊与几何伪影。
- 现有异步重建方法通常经光度监督估计时间偏移，但大偏移与复杂运动下外观匹配提供弱时间线索；归因两大瓶颈：纹理诱导坍缩（低纹理区域提供几乎消失的对齐信号）与形变诱导耦合（时间误差被吸收进扭曲几何或运动而非显式校正）。
- 提出 ASTRA（经轨迹对齐的异步时空重建）：引入 2D 运动轨迹作为显式、纹理无关的异步动态重建监督；不用仅经渲染颜色残差同步相机，ASTRA 通过将对齐重建 3D 点的投影运动与观测 2D 轨迹联合优化时间偏移与动态 3D 表征，同时用动态与确定性掩码抑制不可靠轨迹约束。
- 不同动态高斯泼溅骨干的大量实验显示 ASTRA 保持高频空间细节，并在高达 25 帧偏移的严重异步下保持强稳健性：PSNR 约提升 1.4 dB、时间偏移 MAE 降低 54.0%、同步成功率近乎翻四倍。

## 正文

动态 3D 场景重建在严格同步多相机输入假设下取得显著成功。然而，真实世界场景中采集设备之间的时间异步仍是关键挑战，导致严重的运动模糊与几何伪影。现有异步重建方法通常通过光度监督估计时间偏移，但大偏移与复杂运动下，外观匹配提供微弱的时间线索。研究将该局限归因于两个主要瓶颈：纹理诱导坍缩（texture-induced collapse）——低纹理区域提供几乎消失的对齐信号；形变诱导耦合（deformation-induced coupling）——时间误差被吸收进扭曲的几何或运动，而非被显式校正。为解决这些问题，研究提出 ASTRA（Asynchronous Spatio-Temporal Reconstruction via Trajectory Alignment），一个引入 2D 运动轨迹作为显式、纹理无关监督的异步动态重建框架。不是仅通过渲染颜色残差同步相机，ASTRA 通过将重建 3D 点的投影运动与观测 2D 轨迹对齐，联合优化时间偏移与动态 3D 表征，同时使用动态与确定性掩码抑制不可靠的轨迹约束。在不同动态高斯泼溅（Gaussian Splatting）骨干上的大量实验表明，ASTRA 保持高频空间细节，并在高达 25 帧偏移的严重异步下维持强稳健性：实现约 1.4 dB 的 PSNR 改进、时间偏移 MAE 降低 54.0%，同步成功率近乎翻四倍。

## 关键词

异步重建、轨迹对齐、动态场景、高斯泼溅、时间偏移
