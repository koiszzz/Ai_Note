---
published: 2026-08-07
title: "GSBF：用于环境感知波束成形的 3D 高斯泼溅"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GSBF- Gaussian Splatting for Environment-Aware Beamforming.md"
source_note: "[[信息源/arXiv cs.AI RSS/GSBF- Gaussian Splatting for Environment-Aware Beamforming]]"
source_sha256: 47687e9b06f89db19dc1d0ff50225014da36a3809859928c215b911b9907d07a
original_url: "https://arxiv.org/abs/2608.05896"
processed: 2026-08-07
language: zh-CN
---

# GSBF：用于环境感知波束成形的 3D 高斯泼溅

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yijie Bian, Wei Guo, Zixin Wang, Shenghui Song, Jun Zhang, Khaled B. Letaief
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05896)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GSBF- Gaussian Splatting for Environment-Aware Beamforming|查看原始文件]]

## 摘要

- 波束成形在多输入多输出（MIMO）通信系统中发挥关键作用，但常规波束成形设计通常需要准确瞬时信道状态信息（CSI）与迭代优化，带来大量导频开销与计算复杂度。
- 认识到无线电传播本质上受物理几何支配，开发基于多模态数据的 3D 高斯泼溅环境感知波束成形（GSBF）流水线：通过持久 3D 高斯表示刻画环境。
- GSBF 用保持互易性的双向球面高斯（Bi-SG）核建模环境散射响应，并执行双侧电磁栅格化渲染角传播器图；渲染图经超完备阵列流形字典聚合，投影到恒模波束成形器，从而直接从接入点（AP）姿态与用户位置合成波束，无需在线瞬时 CSI。
- 仿真表明 GSBF 一致优于穷举波束对齐（EBA）等基线且延迟更低。

## 正文

波束成形（beamforming）在多输入多输出（multiple-input-multiple-output，MIMO）通信系统中发挥关键作用。然而，常规波束成形设计通常需要准确的瞬时信道状态信息（CSI）与迭代优化，带来大量导频开销与计算复杂度。认识到无线电传播本质上受物理几何支配，我们开发一个基于多模态数据的 3D 高斯泼溅环境感知波束成形（GSBF）流水线，通过持久 3D 高斯表示刻画环境。具体而言，GSBF 用保持互易性的双向球面高斯（reciprocity-preserving bidirectional spherical Gaussian，Bi-SG）核建模环境散射响应，并执行双侧电磁栅格化（two-sided electromagnetic rasterization）渲染角传播器图（angular propagator map）。渲染图随后通过超完备阵列流形字典聚合，并投影到恒模波束成形器（constant-modulus beamformers），从而直接从接入点（AP）姿态与用户位置合成波束，无需在线瞬时 CSI。仿真表明，GSBF 一致优于穷举波束对齐（exhaustive beam alignment，EBA）等基线，且延迟更低。

## 关键词

#波束成形 #高斯泼溅 #MIMO #环境感知
