---
published: 2026-08-06
title: CORF-GS：通过光-射频耦合高斯泼溅实现实时无线辐射场重建
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/CORF-GS- Real-Time Wireless Radiance Field Reconstruction via Coupled Optical-RF Gaussian Splatting.md
source_note: "[[信息源/arXiv cs.CV RSS/CORF-GS- Real-Time Wireless Radiance Field Reconstruction via Coupled Optical-RF Gaussian Splatting]]"
source_sha256: 3fc08b1746dbe380314acfaa34ac28106473c11f0f93c0842568ce345d60cdf2
original_url: https://arxiv.org/abs/2607.25569
processed: 2026-08-07
language: zh-CN
---

# CORF-GS：通过光-射频耦合高斯泼溅实现实时无线辐射场重建

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.25569)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/CORF-GS- Real-Time Wireless Radiance Field Reconstruction via Coupled Optical-RF Gaussian Splatting|查看原始文件]]

## 摘要

- 提出 CORF-GS：处理顺序光学与射频（RF）关键帧的实时无线辐射场（WRF）重建框架
- 为光学与 RF 构建共享几何、模态特定外观的统一高斯表示，利用高分辨率光学图像为 WRF 重建提供结构先验
- 新关键帧到达时先用光学引导高斯采样加密欠表示区域，再执行光-RF 耦合优化联合精化共享高斯
- 仿真中达到最先进的 RF 频谱合成质量，重建时间相比现有 WRF 方法缩短 6.4 倍

## 正文

基于 3D 高斯泼溅（3D Gaussian Splatting，3DGS）的无线辐射场（wireless radiance field，WRF）重建的最新进展为无线信道建模提供了高效解决方案。然而，现有 WRF 重建方法依赖预先收集的观测和离线优化，难以提供实时信道知识。为弥补这一差距，我们提出 CORF-GS，一个处理顺序光学和射频（radio frequency，RF）关键帧的实时 WRF 重建框架。具体而言，CORF-GS 为光学和 RF 构建具有共享几何和模态特定外观的统一高斯表示，使高分辨率光学图像能够为 WRF 重建提供结构先验。当新关键帧到达时，CORF-GS 首先采用光学引导的高斯采样，在欠表示区域加密 WRF。由于波长不匹配，光和无线电波对同一物体表面的响应可能不同，仅依赖光学引导可能忽略富含 RF 信息的区域。因此，CORF-GS 执行光-RF 耦合优化，联合精化共享高斯。与现有两阶段训练流程相比，这防止了 WRF 被动适应冻结的光学几何，并鼓励共享高斯同时适应光学结构和 RF 功率分布。仿真表明，CORF-GS 实现了最先进的 RF 频谱合成质量，并将重建时间相比现有 WRF 方法缩短了 `6.4×`。

## 关键词

#高斯泼溅 #无线辐射场 #信道建模 #实时重建 #3DGS
