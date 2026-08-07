---
published: 20260806
title: "CheckOne：视觉 Transformer 的轻量故障检测与缓解"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CheckOne- Lightweight Fault Detection and Mitigation for Vision Transformers.md"
source_note: "[[信息源/arXiv cs.AI RSS/CheckOne- Lightweight Fault Detection and Mitigation for Vision Transformers]]"
source_sha256: 605cf4f2644d7b5aee9bb64308d897fb9583f6d4c98805e52707506e4eadb0fc
original_url: "https://arxiv.org/abs/2608.04035"
processed: 2026-08-06
language: zh-CN

---

# CheckOne：视觉 Transformer 的轻量故障检测与缓解

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mohammad Hasan Ahmadilivani, Sven-Markus Loorits, Jaan Raik
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04035)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CheckOne- Lightweight Fault Detection and Mitigation for Vision Transformers|查看原始文件]]

## 摘要

- 视觉 Transformer（ViT）在安全关键应用中的广泛采用引发与硬件故障相关的可靠性担忧；基于算法的容错（ABFT）方法已作为 DNN 的轻量对称保护机制出现，但对 ViT 特别具挑战性，因其计算需求显著。
- 本文全面评估 ViT 的可靠性，强调其层中对称保护的需求；提出 CheckOne，一种新颖、高性价比的 ViT 故障检测与缓解方法，大幅降低与传统 ABFT 相比的计算成本。
- 通过多个 ViT 的广泛实验，CheckOne 缓解关键故障最高 26 倍，在 ViT 中实现比 ABFT 平均高 3.8 倍的性能。

## 正文

视觉 Transformer（ViT）在安全关键应用中的广泛采用引发与硬件故障相关的可靠性担忧。基于算法的容错（ABFT）方法已作为 DNN 的轻量对称保护机制出现。然而，它们对 ViT 特别具挑战性，因其计算需求显著。本工作全面评估 ViT 的可靠性，强调其层中对称保护的需求。此外，我们提出 CheckOne，一种新颖、高性价比的 ViT 故障检测与缓解方法，显著降低与传统 ABFT 相比的计算成本。通过多个 ViT 的广泛实验，CheckOne 缓解关键故障最高 26 倍，并在 ViT 中实现平均比 ABFT 高 3.8 倍的性能。

## 关键词

#视觉Transformer #容错 #故障检测 #可靠性 #arXiv