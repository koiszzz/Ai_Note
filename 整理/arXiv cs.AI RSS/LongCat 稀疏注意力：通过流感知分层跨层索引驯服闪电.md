---
title: "LongCat 稀疏注意力：通过流感知分层跨层索引驯服闪电"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LongCat Sparse Attention- Taming the Lightning via Streaming-aware Hierarchical Cross-Layer Indexing.md"
source_note: "[[信息源/arXiv cs.AI RSS/LongCat Sparse Attention- Taming the Lightning via Streaming-aware Hierarchical Cross-Layer Indexing]]"
source_sha256: d3d3d34e3fc3627c573054ba766f41e3e677bd1e0208b0b3324366eaae1ea0fa
original_url: "https://arxiv.org/abs/2608.01662"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LongCat 稀疏注意力：通过流感知分层跨层索引驯服闪电

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Wen Zan 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01662)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LongCat Sparse Attention- Taming the Lightning via Streaming-aware Hierarchical Cross-Layer Indexing|查看原始文件]]

## 摘要

- 引入 LongCat 稀疏注意力（LSA），硬件-算法协同设计框架，含三项互补且正交的策略：流感知索引（把分散的 KV 条目选择性转换为硬件对齐的连续布局，实现合并的 HBM 访问）；跨层索引（复用单层结果于连续层，配合跨层蒸馏，摊销索引开销）；分层索引（采用从粗到精的评分方案，逐步缩小每个查询的候选集，大幅减少索引计算）。
- 从 69B-A3B 到 560B-A27B 模型的广泛扩展实验显示，LSA 在通用与长上下文基准上都一致取得与全注意力相当的性能。
- LSA 支持最长百万 token 上下文长度的原生训练，并支撑 LongCat-2.0（1.6T-A48B）的开发。
- 开源 LongCat-Flash-Lite-Sparse（69B-A3B），把 LSA 集成进 LongCat-Flash-Lite 并纳入更新的长上下文训练语料。

## 正文

论文编号：arXiv:2608.01662v2（更新类型：replace）。以下为摘要全文翻译。

DeepSeek 稀疏注意力（DSA）通过其闪电索引器（Lightning Indexer）实现高效长上下文建模。然而，实际部署仍受索引器昂贵的 O(L²) 评分开销及其输出导致的硬件低效、不连续内存访问模式限制。为应对这些系统级瓶颈，我们引入 LongCat 稀疏注意力（LSA），一个硬件-算法协同设计框架，包含三项互补且正交的策略：（1）流感知索引（Streaming-Aware Indexing），把分散的 KV 条目选择性转换为硬件对齐的连续布局，以实现合并的 HBM 访问；（2）跨层索引（Cross-Layer Indexing），通过复用单层在连续层产生的结果（辅以跨层蒸馏）摊销索引开销；（3）分层索引（Hierarchical Indexing），采用从粗到精的评分方案逐步缩小每个查询的候选集，从而大幅减少索引计算。从 69B-A3B 到 560B-A27B 模型的广泛扩展实验表明，LSA 在通用与长上下文基准上一致取得与全注意力相当的性能。此外，LSA 支持最长百万 token 上下文长度的原生训练，并支撑 LongCat-2.0（1.6T-A48B）的开发。为进一步促进研究，我们还引入并开源 LongCat-Flash-Lite-Sparse（69B-A3B），它把 LSA 集成进 LongCat-Flash-Lite，并纳入更新的长上下文训练语料。

## 关键词

#稀疏注意力 #长上下文 #索引 #硬件协同设计
