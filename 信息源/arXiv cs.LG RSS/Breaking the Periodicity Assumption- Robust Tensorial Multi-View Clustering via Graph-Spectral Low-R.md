# Breaking the Periodicity Assumption: Robust Tensorial Multi-View Clustering via Graph-Spectral Low-Rank Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jintian Ji, Xingsu Li, Songhe Feng　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.25295)

------

arXiv:2607.25295v2 Announce Type: replace

Abstract: Tensorial multi-view clustering (TMC) has achieved strong performance due to its ability to capture high-order correlations across multiple views. Most existing t-SVD-based TMC frameworks apply the Fast Fourier Transform (FFT) along the sample mode to impose frequency-domain low-rank constraints. However, we reveal that this widely adopted design critically relies on an implicit ``periodicity assumption'' induced by the sample arrangement. When samples are ordered by class, neighboring indices tend to be semantically similar, creating artificial local continuity along the sample mode and a favorable spectral structure for FFT-based low-rank regularization. Once this ordering is removed by random permutation, existing t-SVD-based TMC methods suffer severe performance degradation. This strong sensitivity to class ordering conflicts with the permutation-invariant nature of clustering and indicates that part of the reported performance may be attributed to a privileged sample arrangement rather than genuine high-order structure modeling. In this paper, we systematically investigate this phenomenon and its underlying algebraic and spectral mechanisms. To address this fundamental flaw, we further propose a graph-spectral low-rank tensor learning framework based on the Graph Fourier Transform (GFT), which replaces the fixed Fourier basis along the sample mode with a data-driven graph spectral basis, thereby capturing the intrinsic manifold structure without relying on a particular sample ordering. Moreover, we develop an anchor-based variant to address large-scale datasets efficiently. Extensive experiments on various benchmarks validate our findings and demonstrate the competitive or superior performance of the proposed methods compared with state-of-the-art TMC approaches.
