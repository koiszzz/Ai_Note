---
published: 2026-08-06
title: 把比特花在查询关注之处：利用保持注意力的变换进行KV缓存向量量化
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Spend Bits Where Queries Look- KV Cache Vector Quantization with Attention-Preserving Transforms.md
source_note: "[[信息源/arXiv cs.LG RSS/Spend Bits Where Queries Look- KV Cache Vector Quantization with Attention-Preserving Transforms]]"
source_sha256: 614ed249d30bb6e7460c2c757f761ff8155fce5e3de5b31a8243e8bcf323d556
original_url: https://arxiv.org/abs/2608.04074
processed: 2026-08-07
language: zh-CN
---

# 把比特花在查询关注之处：利用保持注意力的变换进行KV缓存向量量化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04074)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Spend Bits Where Queries Look- KV Cache Vector Quantization with Attention-Preserving Transforms|查看原始文件]]

## 摘要

- 将 KV 缓存量化表述为变换编码问题，其中失真为注意力乘积中的误差，并在高分辨率模型下推导键与值的闭式最优变换。
- 证明最优键变换不是正交的，且满足广义 Parseval 关系：注意力感知失真在变换域中成为 MSE。
- 每元素 2 比特下，所提方法 NOVA-KV 以相近吞吐量恢复了标量量化方法丢失的大部分长上下文检索精度。

## 正文

长上下文 LLM 解码在每一步都要读取键值（KV）缓存。加载它比在它之上计算注意力花费更长时间，因此吞吐量受限于带宽。由此，减小缓存大小可以同时提高解码速度与服务容量。挑战在于在保持注意力乘积的同时缩小缓存、保持重建廉价，并使用固定的每令牌比特数。在每元素 2 比特下，最具竞争力的方法依赖正交变换。然而，现有技术要么与数据无关，要么使用查询统计量却不从失真准则推导变换。此外，它们依赖建立在随机或 Hadamard 旋转之上的变换，这些变换会均衡各条目间的方差而非压缩能量，并且使用固定宽度的标量量化器，后者在低码率下是次优的。本文将 KV 缓存量化表述为一个变换编码问题，其中失真为注意力乘积中的误差。我们在高分辨率模型下从校准统计量推导键与值的闭式最优变换。我们证明最优键变换不是正交的，并满足广义 Parseval 关系：注意力感知的失真在变换域中成为均方误差（MSE）。因此，我们可以将 MSE 最优的向量量化器直接应用于变换后的键系数。为满足固定宽度布局要求，我们证明将系数分组为等体积分区后，等大小码本能在同一高分辨率模型下达到变长码率最优。在每元素 2 比特下，我们的方法（称为 NOVA-KV）恢复了标量量化方法在相近吞吐量下丢失的大部分长上下文检索精度。

## 关键词

#KV缓存 #向量量化 #变换编码 #长上下文 #LLM推理
