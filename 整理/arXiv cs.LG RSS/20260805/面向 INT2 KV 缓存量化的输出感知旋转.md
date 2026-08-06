---
published: 2026-08-05
title: "面向 INT2 KV 缓存量化的输出感知旋转"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Output-Aware Rotation for INT2 KV-Cache Quantization.md"
source_note: "[[信息源/arXiv cs.LG RSS/Output-Aware Rotation for INT2 KV-Cache Quantization.]]"
source_sha256: d44e6cd3b17ee81d245507e4d70bfc33a8b806867b6cfa2bb04946bcee1a1b3f
original_url: "https://arxiv.org/abs/2608.02691"
processed: 2026-08-05
language: zh-CN
---

# 面向 INT2 KV 缓存量化的输出感知旋转

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Vincent-Daniel Yun、Woosang Lim、Minsoo Cheong、Sunwoo Lee、Murali Annavaram、Sai Praneeth Karimireddy、Sungjoo Yoo
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02691)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Output-Aware Rotation for INT2 KV-Cache Quantization.|查看原始文件]]

## 摘要

- KV 缓存已成为长上下文大语言模型推理的主要内存与带宽瓶颈，使超低位量化日益重要；但现有基于旋转的 INT2 方法在完整注意力读出前优化缓存统计量或代理误差，而模型最终受经注意力与输出投影 W_O 传播的误差影响。
- 提出 OptR，一个最小化 W_O 后注意力输出误差的输出感知旋转方法：把 W_O 后注意力输出误差分解为键诱导与值诱导项，并通过完整 INT2 量化与注意力路径为每头学习正交校正。
- OptR 进一步应用注意力等价键重参数化，在不改变 softmax 分布的情况下减少大的通道偏移。
- 在三个模型与五个推理与编程基准上，OptR 一致改善 QuaRot 与 OSCAR，并增强长上下文检索，同时保留分页 KV 缓存格式且推理开销可忽略。

## 正文

论文编号：arXiv:2608.02691v1（更新类型：new）。以下为摘要全文翻译。

键值（KV）缓存已成为长上下文大语言模型推理的主要内存与带宽瓶颈，使超低位量化日益重要。然而，现有基于旋转的 INT2 方法在完整注意力读出之前优化缓存统计量或代理误差，尽管模型最终受到经注意力与输出投影 W_O 传播的误差影响。为应对这一错配，我们提出 OptR，一个最小化 W_O 后注意力输出误差的输出感知旋转方法。OptR 把 W_O 后注意力输出误差分解为键诱导与值诱导项，并通过完整 INT2 量化与注意力路径为每个头学习正交校正。OptR 还应用一个注意力等价的键重参数化，在不改变 softmax 分布的情况下减少大的通道偏移。在三个模型与五个推理和编程基准上，OptR 一致改善 QuaRot 与 OSCAR 并增强长上下文检索，同时保留分页 KV 缓存格式且推理开销可忽略。

## 关键词

#KV缓存 #INT2量化 #旋转 #长上下文 #LLM推理
