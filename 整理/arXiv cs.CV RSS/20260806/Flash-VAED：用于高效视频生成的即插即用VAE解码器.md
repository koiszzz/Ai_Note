---
published: 2026-08-06
title: Flash-VAED：用于高效视频生成的即插即用VAE解码器
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Flash-VAED- Plug-and-Play VAE Decoders for Efficient Video Generation.md
source_note: "[[信息源/arXiv cs.CV RSS/Flash-VAED- Plug-and-Play VAE Decoders for Efficient Video Generation]]"
source_sha256: fe11e179f9e7775174db11ce5c54291b19967837879497a5ddb49125b12fa3b8
original_url: https://arxiv.org/abs/2602.19161
processed: 2026-08-07
language: zh-CN
---

# Flash-VAED：用于高效视频生成的即插即用VAE解码器

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.19161)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Flash-VAED- Plug-and-Play VAE Decoders for Efficient Video Generation|查看原始文件]]

## 摘要

- 潜扩散模型实现了高质量视频合成，但推理成本高、耗时长；随着扩散 transformer 日益高效，延迟瓶颈不可避免地转移到 VAE 解码器。
- 提出一个通用的 VAE 解码器加速框架，与原始潜分布保持完全对齐：独立性感知通道剪枝方法有效缓解严重通道冗余；分阶段主导算子优化策略应对 VAE 解码器中广泛使用的因果 3D 卷积的高推理成本。
- 基于这些创新构建 Flash-VAED 系列，并设计三阶段动态蒸馏框架，将原始 VAE 解码器的能力高效迁移到 Flash-VAED。
- 在 Wan 和 LTX-Video VAE 解码器上的大量实验表明，方法在质量和速度上均优于基线，实现约 6 倍加速，同时保持高达 96.9% 的重建性能；Flash-VAED 在 VBench-2.0 上以可忽略的质量下降将端到端生成流水线加速最高 36%。

## 正文

潜扩散模型已经实现了高质量的视频合成，但其推理仍然成本高昂且耗时。随着扩散 transformer 日益高效，延迟瓶颈不可避免地转移到了 VAE 解码器。为在保持质量的同时降低其延迟，我们提出一个通用的 VAE 解码器加速框架，它与原始潜分布保持完全对齐。具体而言，我们提出（1）一种独立性感知的通道剪枝方法，有效缓解严重的通道冗余；以及（2）一种分阶段的主导算子优化策略，以应对 VAE 解码器中广泛使用的因果 3D 卷积的高推理成本。基于这些创新，我们构建了 Flash-VAED 系列。此外，我们设计了一个三阶段动态蒸馏框架，将原始 VAE 解码器的能力高效迁移到 Flash-VAED。在 Wan 和 LTX-Video VAE 解码器上的大量实验表明，我们的方法在质量和速度上都优于基线，实现了约 6 倍的加速，同时将重建性能保持在高至 96.9%。值得注意的是，Flash-VAED 在 VBench-2.0 上以可忽略的质量下降将端到端生成流水线加速最高 36%。我们的代码可在 https://github.com/Aoko955/Flash-VAED 获取。

## 关键词

#视频生成 #VAE解码器 #加速 #通道剪枝 #潜扩散模型
