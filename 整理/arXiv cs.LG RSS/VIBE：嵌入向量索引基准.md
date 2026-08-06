---
title: "VIBE：嵌入向量索引基准"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/VIBE- Vector Index Benchmark for Embeddings.md"
source_note: "[[信息源/arXiv cs.LG RSS/VIBE- Vector Index Benchmark for Embeddings.]]"
source_sha256: af8cc9e985617e8084fb3789c0d75c043db3af27b0a6eb5ffc0fdaed23c5bf68
original_url: "https://arxiv.org/abs/2505.17810"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# VIBE：嵌入向量索引基准

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Elias Jääsaari、Ville Hyvönen、Matteo Ceccarello、Teemu Roos、Martin Aumüller
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2505.17810)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/VIBE- Vector Index Benchmark for Embeddings.|查看原始文件]]

## 摘要

- 近似最近邻（ANN）搜索是许多机器学习流水线的性能关键组件，严格基准测试对评估 ANN 搜索向量索引的性能至关重要；但现有基准数据集不再代表现代 ANN 应用，需要更新的基准。
- 引入嵌入向量索引基准（VIBE），一个开源 ANN 算法基准测试框架。
- VIBE 提供生成基准数据集的流水线：用代表现代应用（包括检索增强生成 RAG）的稠密嵌入模型。
- 为代表真实世界工作负载，还包含查询与语料来自不同分布的分布外（OOD）数据集：包括多模态检索数据集与最大内积搜索（MIPS）数据集，覆盖两个近期用例：近似注意力计算与多向量检索到单向量 MIPS 的归约。
- 用 VIBE 对 22 个开源向量索引实现进行全面评估，覆盖 11 个分布内与 8 个分布外数据集。
- 基准见 https://github.com/vector-index-bench/vibe

## 正文

论文编号：arXiv:2505.17810v2（更新类型：replace）。以下为摘要全文翻译。

近似最近邻（ANN）搜索是许多机器学习流水线中性能关键的组件，严格的基准测试对评估 ANN 搜索向量索引的性能至关重要。然而，现有基准的数据集不再代表现代 ANN 应用，创造了对最新基准的需求。为填补这一空白，我们引入嵌入向量索引基准（Vector Index Benchmark for Embeddings，VIBE），一个用于基准测试 ANN 算法的开源框架。VIBE 提供一个用代表现代应用（包括检索增强生成 RAG）的稠密嵌入模型生成基准数据集的流水线。为代表真实世界工作负载，我们还纳入查询与语料来自不同分布的分布外（OOD）数据集。这些包括多模态检索数据集与最大内积搜索（MIPS）数据集，覆盖两个近期用例：近似注意力计算与多向量检索到单向量 MIPS 的归约。我们用 VIBE 对 22 个开源向量索引实现进行综合评估，覆盖 11 个分布内与 8 个分布外数据集。该基准可在 https://github.com/vector-index-bench/vibe 获取。

## 关键词

#ANN搜索 #向量索引 #基准 #嵌入 #RAG
