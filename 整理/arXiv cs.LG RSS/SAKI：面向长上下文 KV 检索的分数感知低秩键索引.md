---
title: "SAKI：面向长上下文 KV 检索的分数感知低秩键索引"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SAKI- Score-Aware Low-Rank Key Indexing for Long-Context KV Retrieval.md"
source_note: "[[信息源/arXiv cs.LG RSS/SAKI- Score-Aware Low-Rank Key Indexing for Long-Context KV Retrieval.]]"
source_sha256: 6b637a314cdecbbfed4e3fde1596da2d850e2b3ebf4037e1e01aa7da6129e1ea
original_url: "https://arxiv.org/abs/2608.03228"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SAKI：面向长上下文 KV 检索的分数感知低秩键索引

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Lin Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03228)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SAKI- Score-Aware Low-Rank Key Indexing for Long-Context KV Retrieval.|查看原始文件]]

## 摘要

- 现有低秩 KV 缓存方法保留模型权重或键方差，两者都不直接反映推理时使用的注意力分数；推导秩 r 键压缩引起的期望注意力分数失真，表明其产生协方差加权低秩目标。
- 边际条件下控制该失真也改善 top-k 召回；最优秩 r 解具有从协方差加权查询键算子 SVD 得到的闭式非对称分解。
- 这启发 SAKI，一个免训练 KV 缓存索引：直接保留注意力分数而非键重建质量。
- 在 LLaMA 3.1 8B、Qwen 2.5 7B、Mistral 7B v0.1 与 Llama 3.2 3B 上，SAKI 在每个测试秩上都优于键 PCA；秩 32 时移除 PCA 剩余 top-64 召回误差的 13–30%，包括 LLaMA 3.1 8B 从 0.748 到 0.799、Qwen 2.5 7B 从 0.786 到 0.850 的提升。
- 每模型改善 68–89% 的注意力头，深层增益最大；预测分数 MSE 减少与经验测量紧密匹配（Pearson 相关 0.997），消融研究确认增益来自优化注意力分数目标而非仅协方差加权。
- 评分算子分析进一步解释为何仅权重、不变子空间与键重建方法可能次优。

## 正文

论文编号：arXiv:2608.03228v1（更新类型：new）。以下为摘要全文翻译。

现有的低秩 KV 缓存方法保留模型权重或键方差，两者都不直接反映推理期间使用的注意力分数。我们推导秩 r 键压缩引起的期望注意力分数失真，并表明它产生一个协方差加权的低秩目标。在边际条件下，控制这种失真也改善 top-k 召回。最优秩 r 解有一个从协方差加权查询键算子的 SVD 获得的闭式非对称分解。这启发 SAKI，一个免训练的 KV 缓存索引，直接保留注意力分数而非键重建质量。在 LLaMA 3.1 8B、Qwen 2.5 7B、Mistral 7B v0.1 与 Llama 3.2 3B 上，SAKI 在每个测试秩上都优于键 PCA。在秩 32 时，它移除 PCA 剩余 top-64 召回误差的 13 到 30%，包括 LLaMA 3.1 8B 从 0.748 到 0.799、Qwen 2.5 7B 从 0.786 到 0.850 的提升。它改善每模型 68 到 89% 的注意力头，深层增益最大。预测的分数 MSE 减少与经验测量紧密匹配（Pearson 相关 0.997），而消融研究确认增益来自优化注意力分数目标而非仅协方差加权。对评分算子的分析进一步解释了为什么仅权重、不变子空间与键重建方法可能次优。

## 关键词

#KV缓存 #低秩 #注意力分数 #长上下文 #推理加速
