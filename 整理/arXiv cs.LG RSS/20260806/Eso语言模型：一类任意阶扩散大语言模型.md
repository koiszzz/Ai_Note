---
published: 2026-08-06
title: Eso语言模型：一类任意阶扩散大语言模型
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Esoteric Language Models- A Family of Any-Order Diffusion LLMs.md
source_note: "[[信息源/arXiv cs.LG RSS/Esoteric Language Models- A Family of Any-Order Diffusion LLMs]]"
source_sha256: c36d6ec0d8673ca72115cd186f9719cb152808726f0cbdd239ad944cfa582ead
original_url: https://arxiv.org/abs/2506.01928
processed: 2026-08-07
language: zh-CN
---

# Eso语言模型：一类任意阶扩散大语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2506.01928)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Esoteric Language Models- A Family of Any-Order Diffusion LLMs|查看原始文件]]

## 摘要

- 提出 Eso-LMs：融合自回归（AR）与掩码扩散模型（MDM）范式的新模型家族
- 采用因果注意力，首次能够计算 MDM 的精确似然并为 MDM 引入 KV 缓存
- 结合优化采样调度，在无条件生成的速度-质量帕累托前沿上建立新 SOTA

## 正文

基于扩散的语言模型通过支持并行和可控生成，为自回归（AR）模型提供了一种有吸引力的替代方案。在这一家族中，掩码扩散模型（Masked Diffusion Models, MDMs）目前表现最好，但在困惑度上仍不如 AR 模型，并且缺乏关键的推理时效率特性，最显著的是 KV 缓存。

我们提出 Eso-LMs，一个新的模型家族，它融合了 AR 与 MDM 两种范式，在两者的困惑度之间平滑插值，同时克服它们各自的局限。与先前使用双向注意力 Transformer 作为 MDM 去噪器的工作不同，我们利用 MDM 与任意阶自回归模型（Any-Order autoregressive models）之间的联系，采用因果注意力。这一设计使我们首次能够计算 MDM 的精确似然，并且关键的是，首次能够在保持并行生成的同时为 MDM 引入 KV 缓存，显著提升推理效率。

结合优化的采样调度，Eso-LMs 在无条件生成的速度-质量帕累托前沿上建立了新的最先进水平。我们在项目页面提供了代码、模型检查点以及视频教程：https://s-sahoo.com/Eso-LMs

## 关键词

#扩散语言模型 #自回归模型 #KV缓存 #并行生成 #Eso-LMs
