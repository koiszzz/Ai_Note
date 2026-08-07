---
published: 2026-08-06
title: UniWorld-View：基于视频扩散模型的大基线视角合成
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/UniWorld-View- Large-Baseline View Synthesis via Video Diffusion Models.md
source_note: "[[信息源/arXiv cs.CV RSS/UniWorld-View- Large-Baseline View Synthesis via Video Diffusion Models]]"
source_sha256: 5e45d1b884c244a41f3f07ed13044f91bbbe3e07dd490f5075d8543c60fe0a53
original_url: https://arxiv.org/abs/2608.04701
processed: 2026-08-07
language: zh-CN
---

# UniWorld-View：基于视频扩散模型的大基线视角合成

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04701)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/UniWorld-View- Large-Baseline View Synthesis via Video Diffusion Models|查看原始文件]]

## 摘要

- 提出 UniWorld-View，一个从单目输入进行可控大基线新视角合成的统一框架。
- 将显式 3D 几何引导与生成式扩散建模相结合，实现精确相机控制与几何一致的视角生成。
- 通过遮挡感知的点云渲染策略获取几何引导，解决可见性歧义。
- 在 WorldScore 基准和零样本 NVS 基准上验证了可控性、几何一致性与视觉保真度。

## 正文

社交媒体上大量随意拍摄的单目视频和图像为沉浸式内容创作提供了宝贵的素材，从这些稀疏观测中生成新视角可以极大地提升用户体验。然而，当输入覆盖极度有限时，生成具有精确相机控制的照片级真实且几何一致的视角仍然具有挑战性。基于重建的方法（如 NeRF 和 3D 高斯泼溅（3DGS））在稀疏输入下会严重退化，并且无法显式处理遮挡。生成式方法降低了数据需求，但由于不精确或隐式的几何引导，仍难以进行大基线视角合成。

为克服这些局限，我们提出 UniWorld-View，一个从单目输入进行可控大基线新视角合成的统一框架。UniWorld-View 将显式 3D 引导与生成式扩散建模相结合，实现精确的相机控制和几何一致的视角生成。几何引导通过一种遮挡感知的点云渲染策略获得，该策略解决可见性歧义，并为基于扩散的合成提供精确先验。通过将该渲染策略与强大的视频扩散主干耦合，UniWorld-View 即使在极端相机运动和宽基线变化下也能实现高保真新视角生成，并能进一步为下游动态 3DGS 重建提供多视角视频。在 WorldScore 基准和零样本 NVS 基准上的实验证明了 UniWorld-View 在可控性、几何一致性和视觉保真度方面的有效性。

## 关键词

#视角合成 #视频扩散模型 #3D高斯泼溅 #相机控制
