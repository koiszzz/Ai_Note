# HiSC: Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jiuhe Qu, Yingping Liang, Ying Fu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04610)

------

arXiv:2608.04610v1 Announce Type: new

Abstract: 3D vision-language models (3D VLMs) enable spatial reasoning over multi-view scenes but suffer from substantial token redundancy due to duplicated observations and large uninformative regions, leading to high computational cost. Although visual token compression has shown promise in accelerating 2D VLMs, it fails to capture the structured nature of 3D scenes and leads to incomplete spatial coverage and loss of fine-grained details. In this paper, we propose \textbf{HiSC}, a training-free framework for hierarchical spatial clustering token compression in 3D VLMs. HiSC lifts token compression from token-level selection to cluster-level processing by organizing tokens into spatially grounded clusters using joint geometric and semantic cues. Specifically, we first introduce a \textbf{spatial graph-based merging (SGraM) strategy} that models cross-view redundancy as spatial connectivity and consolidates physically consistent regions, effectively merging extremely similar redundant tokens prior to LLM inference. We then propose a \textbf{spatial clustering-based pruning (SCluP) paradigm} within LLM inference, which performs hierarchical compression across clusters and within clusters, preserving object instance completeness while retaining fine-grained details for important regions. Extensive experiments on diverse 3D reasoning benchmarks show validate the effectiveness of HiSC, particularly under high visual token pruning ratios. Besides, HiSC achieves over 90\% token reduction with minimal performance degradation. Code is accessible at https://github.com/elecreak/HiSC.
