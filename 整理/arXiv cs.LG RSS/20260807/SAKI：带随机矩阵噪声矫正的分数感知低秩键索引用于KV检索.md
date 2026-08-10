---
published: 2026-08-07
title: "SAKI：带随机矩阵噪声矫正的分数感知低秩键索引用于 KV 检索"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SAKI- Score-Aware Low-Rank Key Indexing with Random-Matrix Noise Correction for KV Retrieval.md"
source_note: "[[信息源/arXiv cs.LG RSS/SAKI- Score-Aware Low-Rank Key Indexing with Random-Matrix Noise Correction for KV Retrieval]]"
source_sha256: 30cd49a246958e0f4260f213c71dc947e3c4f4bcff1dd5d575dac5e05d7ffa39
original_url: "https://arxiv.org/abs/2608.03228"
processed: 2026-08-07
language: zh-CN
---

# SAKI：带随机矩阵噪声矫正的分数感知低秩键索引用于 KV 检索

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Lin Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.03228)

## 摘要

- 现有低秩 KV 缓存方法保留模型权重或键方差，都不直接反映推理时使用的注意力分数；推导秩 r 键压缩引起的期望注意力分数失真，显示其产生协方差加权低秩目标；间隔条件下控制该失真也改善 top-k 召回。
- 最优秩 r 解有闭式非对称因子分解，来自协方差加权查询-键算子的 SVD；由此提出 SAKI：免训练 KV 缓存索引，直接保留注意力分数而非键重建质量。
- LLaMA 3.1 8B、Qwen 2.5 7B、Mistral 7B v0.1 与 Llama 3.2 3B 上，SAKI 在每个测试秩都优于键 PCA；秩 32 时移除 PCA 剩余 top-64 召回误差的 13–30%，包括 LLaMA 3.1 8B 从 0.748 到 0.799、Qwen 2.5 7B 从 0.786 到 0.850 的改进；改善每模型 68–89% 的注意力头，最深层增益最大。
- 预测分数 MSE 降低与实测紧密匹配（Pearson 相关 0.997）；消融确认增益来自优化注意力分数目标而非仅协方差加权；分析评分算子解释纯权重、不变子空间与键重建方法为何次优；用随机矩阵理论从自相关采样噪声分离真实协方差信号，仅 512 个校准 token 即匹配 PCA，并在 PCA 看不到可靠信号处增加价值。

## 正文

现有低秩 KV 缓存方法要么保留模型权重、要么保留键方差，两者都不直接反映推理时使用的注意力分数。研究推导秩 r 键压缩引起的期望注意力分数失真，显示其产生一个协方差加权的低秩目标。在间隔（margin）条件下，控制该失真也改善 top-k 召回。最优秩 r 解具有闭式非对称因子分解，可从协方差加权查询-键算子的 SVD 获得。这启发 SAKI，一个免训练的 KV 缓存索引：直接保留注意力分数而非键重建质量。跨 LLaMA 3.1 8B、Qwen 2.5 7B、Mistral 7B v0.1 与 Llama 3.2 3B，SAKI 在每个测试秩都优于键 PCA。在秩 32 处，它移除 PCA 剩余 top-64 召回误差的 13% 到 30%，包括 LLaMA 3.1 8B 从 0.748 到 0.799、Qwen 2.5 7B 从 0.786 到 0.850 的改进。它改善每模型 68% 到 89% 的注意力头，最深层的增益最大。预测的分数 MSE 降低与实测紧密匹配，Pearson 相关 0.997；消融研究确认增益来自优化注意力分数目标，而非仅协方差加权。对评分算子的分析进一步解释了为什么纯权重、不变子空间与键重建方法可能次优。SAKI 使用随机矩阵理论将真实协方差信号与自相关采样噪声分离，仅用 512 个校准 token 即匹配 PCA，并在 PCA 看不到可靠信号的地方精确增加价值。

## 关键词

KV 缓存、低秩、注意力分数、随机矩阵理论、索引
