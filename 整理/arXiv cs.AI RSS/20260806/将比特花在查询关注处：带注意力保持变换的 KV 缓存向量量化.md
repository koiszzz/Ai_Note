---
published: 20260806
title: "将比特花在查询关注处：带注意力保持变换的 KV 缓存向量量化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Spend Bits Where Queries Look- KV Cache Vector Quantization with Attention-Preserving Transforms.md"
source_note: "[[信息源/arXiv cs.AI RSS/Spend Bits Where Queries Look- KV Cache Vector Quantization with Attention-Preserving Transforms]]"
source_sha256: c25f60cb5c24bce6931684827c7ccf6723ec322505c315c33d500c10cf59f8fa
original_url: "https://arxiv.org/abs/2608.04074"
processed: 2026-08-06
language: zh-CN

---

# 将比特花在查询关注处：带注意力保持变换的 KV 缓存向量量化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Samuel Fern\'andez-Mendui\~na, Amir Ziashahabi, Eduardo Pavez, Antonio Ortega, Salman Avestimehr
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04074)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Spend Bits Where Queries Look- KV Cache Vector Quantization with Attention-Preserving Transforms|查看原始文件]]

## 摘要

- 长上下文 LLM 解码每一步读取键值（KV）缓存；加载它比在其上计算注意力耗时，因此吞吐量受带宽约束，减少缓存大小可提高解码速度和服务容量；挑战是在保持注意力乘积、保持重建廉价并使用固定每 token 位数下减少缓存大小。
- 每元素两位时，最有竞争力的方法依赖正交变换；但现有技术要么数据无关，要么使用查询统计而不从失真准则推导变换；且依赖基于随机或 Hadamard 旋转构建的变换（跨条目均衡方差而非压实能量）和固定宽度标量量化器（低速率下次优）。
- 本文将 KV 缓存量化表述为变换编码问题，其中失真为注意力乘积误差：从校准统计在分辨率模型下推导键和值的闭式最优变换，显示最优键变换非正交且满足广义 Parseval 关系——注意力感知失真变为变换域中的均方误差（MSE）；每元素两位时，方法 NOVA-KV 恢复标量量化方法在相当吞吐量下丢失的大部分长上下文检索准确率。

## 正文

长上下文 LLM 解码每一步读取键值（KV）缓存。加载它比在其上计算注意力耗时，因此吞吐量受带宽约束。因此，减少缓存大小可提高解码速度和服务容量。挑战是减少缓存大小，同时保持注意力乘积、保持重建廉价，并使用固定每 token 位数。每元素两位时，最有竞争力的方法依赖正交变换。然而，现有技术要么数据无关，要么使用查询统计而不从失真准则推导变换。此外，它们依赖基于随机或 Hadamard 旋转构建的变换（跨条目均衡方差而非压实能量），以及固定宽度标量量化器（低速率下次优）。在本文中，我们将 KV 缓存量化表述为变换编码问题，其中失真为注意力乘积中的误差。我们从校准统计在分辨率模型下推导键和值的闭式最优变换。我们证明最优键变换非正交，且满足广义 Parseval 关系：注意力感知失真变为变换域中的均方误差（MSE）。因此，我们可以将 MSE 最优向量量化器直接应用于变换后的键系数。为满足固定宽度布局要求，我们证明将系数分组为等体积分区使等大小码本在相同分辨率模型下达到变速率最优。每元素两位时，我们的方法 NOVA-KV 恢复标量量化方法在相当吞吐量下丢失的大部分长上下文检索准确率。

## 关键词

#KV缓存 #向量量化 #变换编码 #长上下文 #arXiv