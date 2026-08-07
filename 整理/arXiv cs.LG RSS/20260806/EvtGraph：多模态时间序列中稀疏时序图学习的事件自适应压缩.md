---
published: 2026-08-06
title: EvtGraph：多模态时间序列中稀疏时序图学习的事件自适应压缩
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/EvtGraph- Event-Adaptive Compression for Sparse Temporal Graph Learning in Multimodal Time Series.md
source_note: "[[信息源/arXiv cs.LG RSS/EvtGraph- Event-Adaptive Compression for Sparse Temporal Graph Learning in Multimodal Time Series]]"
source_sha256: e645d738e72e7ad94f5c86ecb8875d3eb88c1064b5f57c53e865398544549dee
original_url: https://arxiv.org/abs/2608.04368
processed: 2026-08-07
language: zh-CN
---

# EvtGraph：多模态时间序列中稀疏时序图学习的事件自适应压缩

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04368)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/EvtGraph- Event-Adaptive Compression for Sparse Temporal Graph Learning in Multimodal Time Series|查看原始文件]]

## 摘要

- 提出 EvtGraph：在显式预算约束下将计算与时间显著性对齐的统一框架
- 通过事件自适应压缩（EAMC）、节点预算选择（NBC）与时间约束稀疏图推理（T2SG）实现
- 在 MIMIC-IV + CXR 等基准上优于 Transformer 与循环基线，同时显著提升效率

## 正文

多模态时序数据在信息密度上天生不规则、不均匀，然而大多数模型依赖均匀离散化，导致表示效率低下。

我们提出 EvtGraph，一个在显式预算约束下将计算与时间显著性对齐的统一框架。EvtGraph 通过事件自适应压缩（event-adaptive compression, EAMC）将序列重新参数化为事件级 token，使用节点预算（node budget, NBC）选择紧凑子集，并执行时间约束的稀疏图推理（temporally constrained sparse graph reasoning, T2SG）。这将在显著事件上高度冗余的稠密序列转化为结构化计算，在降低复杂度的同时保留关键转换。

我们表明，这一设计为在固定预算下分配表示容量提供了实用机制，产生一致的性能-效率权衡，在实践中往往很小的预算就足够了。在多模态临床（MIMIC-IV + CXR）和跨领域基准上的实验表明，EvtGraph 在显著提升效率的同时，优于基于 Transformer 和基于循环的基线。

这些结果表明，受预算约束的、以事件为中心的表示提供了一种从高冗余时序数据中学习的一般范式。

## 关键词

#多模态时间序列 #稀疏图 #事件驱动 #医学AI #表示学习
