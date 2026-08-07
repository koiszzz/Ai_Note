---
published: 2026-08-06
title: 稀疏视角重建下重探基于Splat的CT位姿敏感性
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Revisiting Pose Sensitivity in Splat-based Computed Tomography under Sparse-view Reconstruction.md
source_note: "[[信息源/arXiv cs.CV RSS/Revisiting Pose Sensitivity in Splat-based Computed Tomography under Sparse-view Reconstruction]]"
source_sha256: 44f4c5d0fac56a16a66b7e08cb0081ea3a81f58b0e372bc05ef7d2dd67b17e7b
original_url: https://arxiv.org/abs/2608.04752
processed: 2026-08-07
language: zh-CN
---

# 稀疏视角重建下重探基于Splat的CT位姿敏感性

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04752)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Revisiting Pose Sensitivity in Splat-based Computed Tomography under Sparse-view Reconstruction|查看原始文件]]

## 摘要

- 发现基于 splat 的锥束稀疏视角 CT 在真实系统有限且非均匀的视角分布下，会出现比传统重建方法显著更明显的条状和带状伪影。
- 通过详细分析证明这些伪影主要源自采集几何的位姿不精确，而非视角稀疏本身。
- 推导出稳定的基于梯度的框架，在重建过程中联合精炼几何参数；该方案轻量且易集成，在真实稀疏视角条件下显著提升重建保真度。

## 正文

X 射线计算机断层扫描（CT）通过将 X 射线透射过目标获得的投影图像来重建物体的体积表示。近期基于 splat 的断层扫描将体积表示为三维高斯的连续分布，已在锥束稀疏视角 CT 中展示了高重建质量和快速收敛。然而，当部署在视角有限且非均匀分布的真实 CT 系统中时，我们观察到独特的条状和带状伪影，比传统重建方法中明显得多。

通过详细分析，我们表明这些伪影主要源自采集几何中的位姿不精确，而非视角稀疏本身。我们重新审视 splatting 公式中的位姿敏感性，并推导出一个稳定的基于梯度的框架，在重建过程中联合精炼几何参数。我们的研究不仅识别出位姿扰动如何通过可微投影算子传播，还揭示了为什么基于 splat 的 CT 对几何错位尤其脆弱。所得公式保持轻量，易于集成到现有流程，同时在实际稀疏视角条件下大幅提升重建保真度。

## 关键词

#CT重建 #高斯Splatting #稀疏视角 #位姿精化
