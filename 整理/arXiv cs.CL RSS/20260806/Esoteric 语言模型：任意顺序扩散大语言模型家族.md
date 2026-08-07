---
published: 2026-08-06
title: Esoteric 语言模型：任意顺序扩散大语言模型家族
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Esoteric Language Models- A Family of Any-Order Diffusion LLMs.md
source_note: "[[信息源/arXiv cs.CL RSS/Esoteric Language Models- A Family of Any-Order Diffusion LLMs]]"
source_sha256: b90ba9ce9c7fdaf1888e1a8cc7801dd220e83946cd7d2e4dae6d280d2b37b0eb
original_url: https://arxiv.org/abs/2506.01928
processed: 2026-08-07
language: zh-CN
---

# Esoteric 语言模型：任意顺序扩散大语言模型家族

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2506.01928)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Esoteric Language Models- A Family of Any-Order Diffusion LLMs|查看原始文件]]

## 摘要

- 掩码扩散模型（MDM）是当前性能最好的扩散式语言模型，但在困惑度上仍逊于自回归（AR）模型，且缺少 KV 缓存等关键推理效率特性。
- Eso-LMs 融合 AR 与 MDM 范式，采用因果注意力，首次能够计算 MDM 的精确似然，并在保持并行生成的同时首次为 MDM 引入 KV 缓存。
- 结合优化采样调度，Eso-LMs 在无条件生成的速度-质量帕累托前沿上确立了新的最先进水平。

## 正文

本文编号：arXiv:2506.01928v5（公告类型：replace），以下为摘要全文翻译。

基于扩散的语言模型通过支持并行和可控生成，为自回归（AR）模型提供了一种有吸引力的替代方案。在这一家族中，掩码扩散模型（Masked Diffusion Models, MDMs）目前表现最佳，但在困惑度上仍逊于自回归模型，并且缺乏关键的推理期效率特性，最典型的是 KV 缓存（KV caching）。我们引入了 Eso-LMs——一个融合 AR 与 MDM 范式的新模型家族，能够在二者的困惑度之间平滑插值，同时克服各自局限。与先前使用双向注意力 Transformer 作为 MDM 去噪器的研究不同，我们利用 MDM 与任意顺序自回归模型之间的联系，采用因果注意力。这一设计使我们首次能够计算 MDM 的精确似然，并且关键的是，首次在保持并行生成的同时为 MDM 引入 KV 缓存，显著提升推理效率。结合优化的采样调度，Eso-LMs 在无条件生成的速度-质量帕累托前沿上确立了新的最先进水平。我们在项目页面提供了代码、模型检查点和视频教程：https://s-sahoo.com/Eso-LMs 。

## 关键词

#扩散语言模型 #掩码扩散模型 #KV缓存 #任意顺序生成 #Eso-LMs
