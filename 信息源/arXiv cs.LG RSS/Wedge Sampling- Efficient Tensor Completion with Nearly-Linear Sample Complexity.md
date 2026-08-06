# Wedge Sampling: Efficient Tensor Completion with Nearly-Linear Sample Complexity

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Hengrui Luo, Anna Ma, Ludovic Stephan, Yizhe Zhu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2602.05869)

------

arXiv:2602.05869v3 Announce Type: replace-cross

Abstract: We introduce Wedge Sampling, a new non-adaptive sampling scheme for low-rank tensor completion. We study recovery of an order-$k$ low-rank tensor of dimension $n\times\cdots\times n$ from structured observations of its entries. Unlike the standard uniform entry model (i.e., i.i.d. samples from $[n]^k$), wedge sampling allocates observations to structured length-two patterns (wedges) in an associated bipartite sampling graph. By directly promoting these length-two connections, the sampling design strengthens the spectral signal that underlies efficient initialization, in regimes where uniform sampling is too sparse to generate enough informative correlations.

Our main result shows that this change in sampling paradigm enables polynomial-time algorithms to achieve both weak and exact recovery with nearly linear sample complexity in $n$. The approach is also plug-and-play: wedge-sampling-based spectral initialization can be combined with existing refinement procedures (e.g., spectral or gradient-based methods) using only an additional $\tilde O(n)$ uniformly sampled entries, substantially improving over the $\tilde O(n^{k/2})$ sample complexity typically required under uniform entry sampling for efficient methods. We also formulate a noisy wedge-sampling extension for additive Gaussian observations and analyze both the spectral and gradient-descent procedures under suitable signal-to-noise conditions. Thus, the computational barrier in tensor completion is sensitive to the observation model: while it persists under uniform entry sampling, it can be bypassed by non-adaptive structured designs that provide a stronger initialization.
