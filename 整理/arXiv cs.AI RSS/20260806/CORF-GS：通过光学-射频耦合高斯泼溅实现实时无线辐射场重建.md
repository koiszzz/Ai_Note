---
published: 20260806
title: "CORF-GS：通过光学-射频耦合高斯泼溅实现实时无线辐射场重建"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CORF-GS- Real-Time Wireless Radiance Field Reconstruction via Coupled Optical-RF Gaussian Splatting.md"
source_note: "[[信息源/arXiv cs.AI RSS/CORF-GS- Real-Time Wireless Radiance Field Reconstruction via Coupled Optical-RF Gaussian Splatting]]"
source_sha256: 513b5dff39fa6463d378128aff14b3c2f761d0594ff570505c620a757c8c66b6
original_url: "https://arxiv.org/abs/2607.25569"
processed: 2026-08-06
language: zh-CN

---

# CORF-GS：通过光学-射频耦合高斯泼溅实现实时无线辐射场重建

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jinya Zhang, Jiajia Guo, Chao-Kai Wen, Shi Jin
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.25569)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CORF-GS- Real-Time Wireless Radiance Field Reconstruction via Coupled Optical-RF Gaussian Splatting|查看原始文件]]

## 摘要

- 基于 3D 高斯泼溅（3DGS）的无线辐射场（WRF）重建近期进展为无线信道建模提供高效解决方案，但现有 WRF 重建方法依赖预收集观测和离线优化，难以提供实时信道知识。
- 本文提出 CORF-GS，一个处理顺序光学和射频（RF）关键帧的实时 WRF 重建框架：构建光学与 RF 的统一高斯表示，共享几何和模态特定外观，让高分辨率光学图像为 WRF 重建提供结构先验。
- 新关键帧到达时，CORF-GS 先用光学引导高斯采样在欠表示区域加密 WRF，再执行耦合光学-RF 优化联合细化共享高斯；模拟显示实现最先进 RF 频谱合成质量，重建时间比现有 WRF 方法减少 6.4 倍。

## 正文

基于 3D 高斯泼溅（3DGS）的无线辐射场（WRF）重建近期进展为无线信道建模提供高效解决方案。然而，现有 WRF 重建方法依赖预收集观测和离线优化，因此难以提供实时信道知识。为弥合此差距，我们提出 CORF-GS，一个处理顺序光学和射频（RF）关键帧的实时 WRF 重建框架。具体来说，CORF-GS 为光学和 RF 构建统一高斯表示，具有共享几何和模态特定外观，允许高分辨率光学图像为 WRF 重建提供结构先验。新关键帧到达时，CORF-GS 首先采用光学引导高斯采样在欠表示区域加密 WRF。由于光和无线电波可能因波长不匹配对同一物体表面响应不同，仅依赖光学引导可能忽视 RF 信息丰富区域。因此，CORF-GS 执行耦合光学-RF 优化，联合细化共享高斯。与现有两阶段训练流水线相比，这防止 WRF 被动适应冻结光学几何，并鼓励共享高斯同时适应光学结构和 RF 功率分布。模拟表明，CORF-GS 实现最先进的 RF 频谱合成质量，并将重建时间比现有 WRF 方法减少 6.4 倍。

## 关键词

#无线辐射场 #高斯泼溅 #实时重建 #信道建模 #arXiv