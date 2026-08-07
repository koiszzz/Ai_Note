---
published: 2026-08-06
title: AdaCorrection：精确扩散 Transformer 的自适应偏移缓存校正
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/AdaCorrection- Adaptive Offset Cache Correction for Accurate Diffusion Transformers.md
source_note: "[[信息源/arXiv cs.CV RSS/AdaCorrection- Adaptive Offset Cache Correction for Accurate Diffusion Transformers|查看原始文件]]"
source_sha256: 61e548250e4d1ee13829dc7846409f0a8c7f5191bb9a7a82da1bd71533f31371
original_url: https://arxiv.org/abs/2602.13357
processed: 2026-08-07
language: zh-CN
---

# AdaCorrection：精确扩散 Transformer 的自适应偏移缓存校正

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.13357)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/AdaCorrection- Adaptive Offset Cache Correction for Accurate Diffusion Transformers|查看原始文件]]

## 摘要

- 扩散 Transformer（DiT）在高保真图像与视频生成上达到最先进水平，但迭代去噪结构导致推理昂贵
- 先前方法通过缓存中间特征加速采样，但依赖静态复用调度或粗粒度启发式，常造成时间漂移与缓存错位、损害生成质量
- 提出 AdaCorrection 自适应偏移缓存校正框架：每个时间步用轻量时空信号估计缓存有效性，自适应混合缓存与新鲜激活
- 校正即时在线计算，无需额外监督或重训练；保持接近原始 FID 的同时提供中等加速，已集成到 FastCache-xDiT

## 正文

扩散 Transformer（DiT）在高保真图像和视频生成中取得了最先进的性能，但其迭代去噪结构导致推理成本高昂。此前的方法通过缓存中间特征来加速采样，然而它们依赖静态的复用调度或粗粒度的启发式规则，常常导致时间漂移和缓存错位，显著降低生成质量。

我们引入 **AdaCorrection**——一个自适应偏移缓存校正框架，在扩散推理过程中保持高生成保真度的同时，实现 Transformer 层间高效的缓存复用。在每个时间步，AdaCorrection 使用轻量级时空信号估计缓存有效性，并自适应地混合缓存激活与新鲜激活。这一校正是即时在线计算的，无需额外监督或重训练。

我们的方法以极小的计算开销实现了出色的生成质量，在保持接近原始 FID 的同时提供中等程度的加速。在图像和视频扩散基准上的实验表明，AdaCorrection 持续改善生成性能。我们的代码已集成到 FastCache-xDiT：https://github.com/NoakLiu/FastCache-xDiT。

## 关键词

#扩散模型 #Transformer #缓存加速 #推理优化 #图像生成
