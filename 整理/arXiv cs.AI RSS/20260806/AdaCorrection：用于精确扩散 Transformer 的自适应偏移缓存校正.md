---
published: 20260806
title: "AdaCorrection：用于精确扩散 Transformer 的自适应偏移缓存校正"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AdaCorrection- Adaptive Offset Cache Correction for Accurate Diffusion Transformers.md"
source_note: "[[信息源/arXiv cs.AI RSS/AdaCorrection- Adaptive Offset Cache Correction for Accurate Diffusion Transformers]]"
source_sha256: c5dd45c21d6d0f09cc484e9ed4086143d736cae79a880b5ff37c71a14f82446f
original_url: "https://arxiv.org/abs/2602.13357"
processed: 2026-08-06
language: zh-CN

---

# AdaCorrection：用于精确扩散 Transformer 的自适应偏移缓存校正

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dong Liu, Yanxuan Yu, Ben Lengerich, Ying Nian Wu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.13357)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AdaCorrection- Adaptive Offset Cache Correction for Accurate Diffusion Transformers|查看原始文件]]

## 摘要

- 扩散 Transformer（DiT）在高保真图像和视频生成中达到最先进性能，但迭代去噪结构导致推理昂贵；先前方法通过缓存中间特征加速采样，但依赖静态重用调度或粗粒度启发式，常导致时间漂移和缓存错位。
- 本文引入 AdaCorrection，一个自适应偏移缓存校正框架，在扩散推理期间跨 Transformer 层保持高生成保真度同时实现高效缓存重用：每一步用轻量时空信号估计缓存有效性，自适应混合缓存和新鲜激活。
- 校正即时计算，无需额外监督或重训练；在图像和视频扩散基准上，AdaCorrection 保持近乎原始 FID 的同时提供中等加速，代码已集成到 FastCache-xDiT。

## 正文

扩散 Transformer（DiT）在高保真图像和视频生成中达到最先进性能，但因其迭代去噪结构而推理昂贵。先前方法通过缓存中间特征加速采样，但它们依赖静态重用调度或粗粒度启发式，常常导致时间漂移和缓存错位，显著降低生成质量。我们引入 AdaCorrection，一个自适应偏移缓存校正框架，在扩散推理期间跨 Transformer 层保持高生成保真度同时实现高效缓存重用。在每个时间步，AdaCorrection 用轻量时空信号估计缓存有效性，并自适应混合缓存和新鲜激活。此校正即时计算，无需额外监督或重训练。我们的方法以最小计算开销实现强生成质量，保持近乎原始 FID 同时提供中等加速。在图像和视频扩散基准上的实验表明，AdaCorrection 持续改进生成性能。我们的代码已集成到 FastCache-xDiT：https://github.com/NoakLiu/FastCache-xDiT。

## 关键词

#扩散Transformer #缓存 #推理加速 #图像生成 #arXiv