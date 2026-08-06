---
published: 2026-08-05
title: "LongCat 稀疏注意力：通过流式感知的分层跨层索引驯服闪电"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LongCat Sparse Attention- Taming the Lightning via Streaming-aware Hierarchical Cross-Layer Indexing.md"
source_note: "[[信息源/arXiv cs.LG RSS/LongCat Sparse Attention- Taming the Lightning via Streaming-aware Hierarchical Cross-Layer Indexing.]]"
source_sha256: 421168c1ebb4d926cc01085cd15a28d71002509783b42e61749e4deaf686e9df
original_url: "https://arxiv.org/abs/2608.01662"
processed: 2026-08-05
language: zh-CN
---

# LongCat 稀疏注意力：通过流式感知的分层跨层索引驯服闪电

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Wen Zan、Jiaqi Zhang、Jianchao Tan、Hong Liu、Cunguang Wang、Xiang Li、Duyue Ma、Guanyu Wu、Yifan Lu、Fengcun Li、Yerui Sun、Peng Pei、Yuchen Xie、Xunliang Cai
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01662)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LongCat Sparse Attention- Taming the Lightning via Streaming-aware Hierarchical Cross-Layer Indexing.|查看原始文件]]

## 摘要

- DeepSeek 稀疏注意力（DSA）通过其 Lightning Indexer 实现高效长上下文建模；但实际部署仍受限于索引器昂贵的 O(L²) 评分开销及其输出导致的硬件低效、不连续内存访问模式。
- 引入 LongCat 稀疏注意力（LSA），一个硬件—算法协同设计框架，包含三种互补且正交的策略：
- (1) 流式感知索引（Streaming-Aware Indexing）：选择性地把分散的 KV 条目转换为硬件对齐的连续布局，实现合并的 HBM 访问；
- (2) 跨层索引（Cross-Layer Indexing）：复用单层结果于连续层，配合跨层蒸馏，摊销索引开销；
- (3) 分层索引（Hierarchical Indexing）：采用由粗到细的评分方案逐步缩小每个查询的候选集，显著减少索引计算。
- 从 69B-A3B 到 560B-A27B 模型的大规模扩展实验显示：LSA 在通用与长上下文基准上都持续取得与全注意力相当的性能。
- LSA 支持长达一百万个 token 上下文的原生训练，并支撑 LongCat-2.0（1.6T-A48B）的开发；还开源 LongCat-Flash-Lite-Sparse（69B-A3B），把 LSA 集成进 LongCat-Flash-Lite 并纳入更新的长上下文训练语料。

## 正文

论文编号：arXiv:2608.01662v2（更新类型：replace-cross）。以下为摘要全文翻译。

DeepSeek 稀疏注意力（DSA）通过其 Lightning Indexer 实现高效的长上下文建模。然而，实际部署仍受制于索引器昂贵的 O(L²) 评分开销，以及其输出导致的硬件低效、不连续的内存访问模式。为应对这些系统级瓶颈，我们引入 LongCat 稀疏注意力（LSA），一个硬件—算法协同设计框架，包含三种互补且正交的策略：(1) 流式感知索引，选择性地把分散的 KV 条目转换为硬件对齐的连续布局，实现合并的 HBM 访问；(2) 跨层索引，通过复用单层在连续层上产生的结果，并辅以跨层蒸馏，摊销索引开销；(3) 分层索引，采用由粗到细的评分方案，逐步缩小每个查询的候选集，从而大幅减少索引计算。从 69B-A3B 到 560B-A27B 模型的大规模扩展实验表明，LSA 在通用与长上下文基准上都持续取得与全注意力相当的性能。此外，LSA 支持上下文长度达一百万个 token 的原生训练，并支撑 LongCat-2.0（1.6T-A48B）的开发。为促进进一步研究，我们还引入并开源 LongCat-Flash-Lite-Sparse（69B-A3B），它把 LSA 集成进 LongCat-Flash-Lite，并纳入更新后的长上下文训练语料。

## 关键词

#稀疏注意力 #长上下文 #跨层索引 #DeepSeek #MoE
