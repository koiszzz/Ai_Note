# VIBE: Vector Index Benchmark for Embeddings

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Elias J\"a\"asaari, Ville Hyv\"onen, Matteo Ceccarello, Teemu Roos, Martin Aum\"uller　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2505.17810)

------

arXiv:2505.17810v2 Announce Type: replace

Abstract: Approximate nearest neighbor (ANN) search is a performance-critical component of many machine learning pipelines, and rigorous benchmarking is essential for assessing the performance of vector indexes for ANN search. However, the datasets of existing benchmarks no longer represent modern ANN applications, creating a need for an up-to-date benchmark. To address this gap, we introduce Vector Index Benchmark for Embeddings (VIBE), an open-source framework for benchmarking ANN algorithms. VIBE provides a pipeline for generating benchmark datasets with dense embedding models representative of modern applications, including retrieval-augmented generation (RAG). To represent real-world workloads, we also include out-of-distribution (OOD) datasets where the queries and the corpus are drawn from different distributions. These include multimodal retrieval datasets and maximum inner product search (MIPS) datasets covering two recent use cases: approximate attention computation and reductions of multi-vector retrieval to single-vector MIPS. We use VIBE to conduct a comprehensive evaluation of 22 open-source vector-index implementations across 11 in-distribution and 8 out-of-distribution datasets. The benchmark is available at https://github.com/vector-index-bench/vibe
