---
published: 2026-08-06
title: StreamSplat：流式前馈3D高斯泼溅
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/StreamSplat- Streaming Feed-Forward 3D Gaussian Splatting.md
source_note: "[[信息源/arXiv cs.CV RSS/StreamSplat- Streaming Feed-Forward 3D Gaussian Splatting]]"
source_sha256: 0c8ddef126af69aa9f926648742a604bde17e774339543fec7b3a94fd93747e1
original_url: https://arxiv.org/abs/2608.01659
processed: 2026-08-07
language: zh-CN
---

# StreamSplat：流式前馈3D高斯泼溅

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01659)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/StreamSplat- Streaming Feed-Forward 3D Gaussian Splatting|查看原始文件]]

## 摘要

- 提出 StreamSplat，一个流式前馈 3DGS 框架：增量维护持久的、锚定几何的场景状态，在每个输入块后解码为可渲染的 3D 高斯。
- 核心组件：体素对齐因果缓存（VACC）以内存有界的体素结构存储历史 3D 令牌；历史投影深度锚定（HPDA）用缓存几何作为代价体估计的深度引导；缓存引导特征注入（CGFI）将缓存潜在证据注入高斯令牌回归。
- 在 DL3DV、RealEstate10K、ScanNet 上稀疏因果输入下与最先进前馈 3DGS 方法竞争力相当，并扩展到 256/512/1024 视角的长输入流，新视角合成质量随观测增多持续提升。

## 正文

前馈 3D 高斯泼溅（3D Gaussian Splatting）无需逐场景优化即可实现高效的新视角合成，但大多数现有方法假设一组固定的上下文视角并联合处理它们。这限制了其在在线场景中的适用性——在线场景中标定视图按顺序到达，场景必须以因果方式更新。我们提出 StreamSplat，一个流式前馈 3DGS 框架，增量维护一个持久的、锚定几何的场景状态，并在每个输入块之后将其解码为可渲染的 3D 高斯。StreamSplat 的核心是体素对齐因果缓存（Voxel-Aligned Causal Cache，VACC），它以内存有界的体素结构存储历史 3D 令牌，使内存随已探索的场景几何增长，而非随流长度增长。为了更好地在因果预测中复用历史，我们引入历史投影深度锚定（History-Projected Depth Anchoring，HPDA），将缓存的几何投影为当前代价体估计的深度引导，以及缓存引导特征注入（Cache-Guided Feature Injection，CGFI），将缓存的潜在证据注入高斯令牌回归。在 DL3DV、RealEstate10K 和 ScanNet 上的实验表明，在稀疏因果输入下，StreamSplat 与最先进的前馈 3DGS 方法保持竞争力，尽管不使用未来视图或全场景上下文。更重要的是，它可以扩展到 256、512 和 1024 视角的长输入流——固定视角基线在此类输入下会内存耗尽——随着更多观测到达，新视角合成质量获得持续提升。代码将在论文被接收后公开发布。

## 关键词

#3D高斯泼溅 #新视角合成 #流式处理 #前馈模型
