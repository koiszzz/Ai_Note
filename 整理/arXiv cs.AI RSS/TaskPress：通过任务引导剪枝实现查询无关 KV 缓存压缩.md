---
title: "TaskPress：通过任务引导剪枝实现查询无关 KV 缓存压缩"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TaskPress- Query-Agnostic KV Cache Compression via Task-Guided Pruning.md"
source_note: "[[信息源/arXiv cs.AI RSS/TaskPress- Query-Agnostic KV Cache Compression via Task-Guided Pruning]]"
source_sha256: 762db2562d902f474199f8ac06c4cf8d6f5174b18649eade409bd88a9dbd0d75
original_url: "https://arxiv.org/abs/2608.03276"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# TaskPress：通过任务引导剪枝实现查询无关 KV 缓存压缩

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Wonpyo Park、Seung-won Hwang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03276)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TaskPress- Query-Agnostic KV Cache Compression via Task-Guided Pruning|查看原始文件]]

## 摘要

- 提出 TaskPress，任务引导、查询无关的 KV 缓存驱逐框架：不针对单一查询优化缓存，而是构建条件于高层任务引导的可复用记忆表示——引导在预填充期间充当元查询，在下游查询发出前过滤无关 token；并利用量化缩放因子作为零成本信号检测有影响的表示异常值，提供 token 重要性的高效代理。
- 大语言模型长上下文推理受键值缓存随序列长度线性增长约束；剪枝提供缓解，但主流方法确定查询特定的 token 重要性，无法跨未见查询复用。
- 各种长上下文输入任务的实验显示：TaskPress 高效地为多样查询创建紧凑、可复用的缓存。

## 正文

论文编号：arXiv:2608.03276v1（更新类型：new）。以下为摘要全文翻译。

大语言模型的长上下文推理受键值（KV）缓存随序列长度线性增长的约束。虽然剪枝提供缓解，但主流方法确定查询特定的 token 重要性，无法跨未见查询复用。相比之下，我们引入 TaskPress，一个任务引导、查询无关的 KV 缓存驱逐框架。TaskPress 不是为单一查询优化缓存，而是构建一个条件于高层任务引导的可复用记忆表示。该引导在预填充期间充当元查询，在下游查询发出之前过滤无关 token。此外，TaskPress 利用量化缩放因子作为零成本信号，检测有影响的表示异常值，为 token 重要性提供高效代理。在带长上下文输入的各种任务上进行的实验表明，TaskPress 高效地为多样查询创建紧凑、可复用的缓存。

## 关键词

#KV缓存 #长上下文 #缓存压缩 #查询无关
