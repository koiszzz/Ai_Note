---
published: 2026-08-05
title: "MoECa：在扩散 Transformer 中把特征复用与专家分解对齐"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MoECa- Aligning Feature Reuse with Expert Decomposition in Diffusion Transformers.md"
source_note: "[[信息源/arXiv cs.LG RSS/MoECa- Aligning Feature Reuse with Expert Decomposition in Diffusion Transformers.]]"
source_sha256: 6793262b7e1339dee0f0be3ed7c4c81cd6e0854b375bb2a325ea02bdee0b22a1
original_url: "https://arxiv.org/abs/2606.15615"
processed: 2026-08-05
language: zh-CN
---

# MoECa：在扩散 Transformer 中把特征复用与专家分解对齐

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Maoliang Li、Haojing Chen、Jiayu Chen、Zihao Zheng、Xinhao Sun、Hailong Zou、Xiang Chen
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.15615)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MoECa- Aligning Feature Reuse with Expert Decomposition in Diffusion Transformers.|查看原始文件]]

## 摘要

- 带专家混合的扩散 Transformer（DiT-MoE）在稀疏激活下提升模型容量，但扩散推理仍受跨时间步冗余计算瓶颈制约。
- 现有缓存方法主要在 token 级运作，在 DiT-MoE 中变得次优，因为每个 token 更新在内部被分解为多个路由专家分支。
- 分析表明：DiT-MoE 中的跨时间步冗余在专家分支级比在整 token 级刻画得更好。
- 基于该观察提出 MoECa，一个跨时间步执行分支级特征复用的细粒度缓存框架。
- MoECa 进一步引入专家感知自适应控制与跨 MoE 与注意力路径的同步缓存更新，以维持稳定的中间状态。
- 在多个 DiT-MoE 模型上的实验显示有利的速度—质量权衡：在保持生成质量的同时实现高达 2.93 倍加速。

## 正文

论文编号：arXiv:2606.15615v2（更新类型：replace）。以下为摘要全文翻译。

带专家混合的扩散 Transformer（DiT-MoE）在稀疏激活下提高模型容量，但扩散推理仍受跨时间步的冗余计算瓶颈制约。现有缓存方法主要在 token 级运作，这在 DiT-MoE 中变得次优，因为每个 token 更新在内部被分解为多个路由专家分支。我们的分析表明，DiT-MoE 中的跨时间步冗余在专家分支级比在整 token 级刻画得更好。基于这一观察，我们提出 MoECa，一个跨时间步执行分支级特征复用的细粒度缓存框架。MoECa 进一步引入专家感知的自适应控制，以及跨 MoE 与注意力路径的同步缓存更新，以维持稳定的中间状态。在多个 DiT-MoE 模型上的实验显示了有利的速度—质量权衡：在保持生成质量的同时实现高达 2.93 倍的加速。

## 关键词

#扩散模型 #专家混合 #缓存 #加速 #DiT
