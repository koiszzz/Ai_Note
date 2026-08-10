---
published: 2026-08-07
title: "CNM-BERT：经表意描述序列的汉字即插即用结构嵌入"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/CNM-BERT- A Drop-In Structural Embedding for Chinese Characters via Ideographic Description Sequence.md"
source_note: "[[信息源/arXiv cs.CL RSS/CNM-BERT- A Drop-In Structural Embedding for Chinese Characters via Ideographic Description Sequence]]"
source_sha256: 1d2ab6b3bdadc3f2886eda2b59ea175c8945f29dd38b2065ba356644a11ac30a
original_url: "https://arxiv.org/abs/2608.05167"
processed: 2026-08-07
language: zh-CN
---

# CNM-BERT：经表意描述序列的汉字即插即用结构嵌入

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Thomas Sing-wing Wu, Liqian Yan
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05167)

## 摘要

- BERT 等基于 token 的编码器将汉字视为原子标识符，忽视其递归正字法结构；模型依赖上下文共现，在罕见与词汇外（OOV）字符上性能退化。
- 提出组合网络模型（CNM）：轻量增广，将离散组合结构注入 transformer 编码器；CNM 将表意描述序列（IDS）解析为树，经递归 Tree-MLP 编码，将结构嵌入融合进 BERT 而不修改骨干。
- Wu 等（2025）结构探针基准评估：CNM-BERT 在长尾与 OOV 字符上超越最强基线（ChineseBERT）：结构准确率 +9.8、部首 F1 +7.7。
- CLUE、MRC 与 NER 任务基座与大两规模一致增益，显式结构注入同时交付稳健 OOV 理解与切实下游价值。

## 正文

基于 token 的编码器（如 BERT）将汉字视为原子标识符，忽视其递归的正字法结构。因此，模型依赖上下文共现，导致在罕见与词汇外（out-of-vocabulary, OOV）字符上性能退化。研究提出组合网络模型（Compositional Network Model, CNM），一种轻量增广：将离散的组合结构注入 transformer 编码器。CNM 将表意描述序列（Ideographic Description Sequences, IDS）解析为树，通过一个递归 Tree-MLP 编码它们，并将结构嵌入融合进 BERT，无需修改骨干。在 Wu 等人（2025）的结构探针基准上评估，CNM-BERT 在长尾与 OOV 字符上超越最强基线（ChineseBERT）：结构准确率 +9.8，部首 F1 +7.7。此外，CNM-BERT 在 CLUE、MRC 与 NER 任务上于基座与大两个规模取得一致增益，证明显式结构注入既交付稳健的 OOV 理解，也带来切实的下游价值。

## 关键词

中文、结构嵌入、IDS、BERT、OOV
