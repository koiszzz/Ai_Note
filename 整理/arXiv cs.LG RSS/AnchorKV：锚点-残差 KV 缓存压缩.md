---
title: "AnchorKV：锚点-残差 KV 缓存压缩"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AnchorKV- Anchor-Residual KV Cache Compression.md"
source_note: "[[信息源/arXiv cs.LG RSS/AnchorKV- Anchor-Residual KV Cache Compression]]"
source_sha256: 91b92062c616dac30c02511b2a899bb128c083482bb40bb1bbb5483be7772ebf
original_url: "https://arxiv.org/abs/2608.02901"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# AnchorKV：锚点-残差 KV 缓存压缩

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Malik Khalaf、Yara Shamshoum、Nitzan Hodos 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02901)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/AnchorKV- Anchor-Residual KV Cache Compression|查看原始文件]]

## 摘要

- 提出 AnchorKV，压缩方案：把缓存缩小 20 倍而不丢弃单个 token——用一小撮精确存储的锚点表示缓存，每个其他 token 通过其最相似锚点表达，并只精化那些近似对模型输出影响最大的 token。
- 键值（KV）缓存是长上下文 LLM 推理的主要内存瓶颈；现有方法从相反两端攻击：驱逐方法永久丢弃 token（每当被丢弃 token 后来证明关键时性能退化），量化方法保留全部 token 于低精度但压缩有限。
- AnchorKV 跨模型与数据集一致保持准确率：70B 规模保留全缓存分数的 99%，同时整个上下文成本仅一小部分。

## 正文

论文编号：arXiv:2608.02901v1（更新类型：new）。以下为摘要全文翻译。

键值（KV）缓存是长上下文 LLM 推理的主要内存瓶颈。现有方法从相反两端攻击它：驱逐方法永久丢弃 token，每当一个被丢弃的 token 后来被证明关键时就退化性能；量化方法保留所有 token 于低精度，却提供有限压缩。我们提出 AnchorKV，一个压缩方案：把缓存缩小 20 倍，而不丢弃一个 token。AnchorKV 用一小撮精确存储的锚点表示缓存，通过其最相似的锚点表达每个其他 token，并只精化那些近似对模型输出影响最大的 token。AnchorKV 跨模型与数据集一致保持准确率：在 70B 规模保留全缓存分数的 99%，同时把整个上下文保持在成本的一小部分。

## 关键词

#KV缓存 #压缩 #锚点残差 #长上下文
