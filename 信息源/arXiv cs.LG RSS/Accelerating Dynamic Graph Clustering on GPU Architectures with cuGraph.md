# Accelerating Dynamic Graph Clustering on GPU Architectures with cuGraph

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nelson Aloysio Reis de Almeida Passos, Emanuele Carlini, Salvatore Trani　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.DC　|　原文：[打开链接](https://arxiv.org/abs/2608.03695)

------

arXiv:2608.03695v1 Announce Type: cross

Abstract: This work addresses community detection in temporal networks through GPU-accelerated extensions of spectral clustering and modularity-based algorithms originally designed for static graphs. Built on the NVIDIA RAPIDS ecosystem, the framework enables the characterization and tracking of communities in snapshot-based dynamic graphs, either by Leiden greedy optimization with multi-GPU support via Dask-based workload distribution, or eigendecomposition of a symmetric Bethe-Hessian operator. Our multislice modularity backend achieves up to roughly three orders of magnitude speedup over the CPU reference under an equal-work budget, depending on graph density and snapshot count, while preserving compatibility with existing graph analytics pipelines. We demonstrate its applicability on real-world and synthetic datasets, facilitating exploratory analysis of structural network properties over time. Such capabilities are relevant across several application domains, such as epidemic spreading, financial systems, cybersecurity, and trajectory and mobility analysis. We release our implementation as free and open-source software, including Python bindings through the NetworkX-Temporal library for ease of use and zero-code acceleration with existing codebases.
