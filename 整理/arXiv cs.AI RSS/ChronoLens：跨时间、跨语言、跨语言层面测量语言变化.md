---
title: "ChronoLens：跨时间、跨语言、跨语言层面测量语言变化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ChronoLens- Measuring Language Change Across Time, Languages, and Linguistic Levels.md"
source_note: "[[信息源/arXiv cs.AI RSS/ChronoLens- Measuring Language Change Across Time, Languages, and Linguistic Levels]]"
source_sha256: 7b36ef0e5a5c1d94b7e6d1f75b21549f008b33d0e9359e16f51e2ca3899b9a86
original_url: "https://arxiv.org/abs/2608.03507"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ChronoLens：跨时间、跨语言、跨语言层面测量语言变化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Gagan Bhatia、Julian Schlenker、Simone Paolo Ponzetto 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03507)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ChronoLens- Measuring Language Change Across Time, Languages, and Linguistic Levels|查看原始文件]]

## 摘要

- 提出 ChronoLens 框架：结合冻结的多语言语言模型、特征对齐的跨编码器（crosscoders）与事后语言干预，在统一分析空间中测量语言变化。
- 应用于 5 个议会传统的 44.98 百万份文档、约 172 亿 token（1803–2026 年）。
- 稀疏表示与语言统计的一致性（ρ=0.72）显著强于稠密嵌入（0.29）或池化稀疏自编码器（0.28）。
- 发现形态、句法、语义与语用通常在语言内部变化量相当，但不同语言在变化时间、幅度与方向上差异显著：历史语言变化是结构化的多维过程，跨语言比较需同时测量距离与方向。

## 正文

论文编号：arXiv:2608.03507v1（更新类型：cross）。以下为摘要全文翻译。

历史语言变化影响形态、句法、语义和语用，然而计算研究通常用不兼容的表示来考察这些层面，因此无法判断它们是否跨语言共同演化。我们通过研究在单一分析空间内，变化的大小和方向如何随语言层面、语言和历史时期而变化来解决这一问题。我们引入 ChronoLens，一个结合冻结多语言语言模型、特征对齐跨编码器和事后语言干预的框架，并将其应用于源自五种议会传统的 44.98 百万份文档、约 172 亿 token（时间跨度 1803–2026 年）。得到的稀疏表示与语言统计的一致性（ρ=0.72）显著强于稠密嵌入（0.29）或池化稀疏自编码器（0.28），并揭示：在一种语言内部，形态、句法、语义和语用通常变化幅度相当；而不同语言在何时变化、变化多远以及向哪个方向变化上差异显著。这些发现表明，历史语言变化是一个结构化的多维过程：相似的幅度可能掩盖不同的轨迹，有意义的跨语言比较需要同时测量距离与方向。

## 关键词

#语言变化 #历史语言学 #多语言模型 #稀疏表示
