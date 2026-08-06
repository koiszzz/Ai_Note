# Robust Low-Tubal-Rank Tensor Completion under Cross-Concentrated Sampling

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Hanqin Cai, Longxiu Huang, Jing Qin, Chengyue Wu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.03928)

------

arXiv:2608.03928v1 Announce Type: cross

Abstract: Tensor cross-concentrated sampling (t-CCS) bridges entrywise sampling and t-CUR slice-wise sampling by observing entries only within selected horizontal and lateral slices. Existing t-CCS completion methods, however, assume that the observations are free of gross corruption. In this work, we study robust recovery of a third-order low-tubal-rank tensor from partial t-CCS observations contaminated by sparse, arbitrarily large outliers. We propose Robust Iterative t-CUR (R-ItCUR), a tensor-native algorithm that partitions the sampled tensor cross into two exterior blocks and an intersection block, applies adaptive blockwise Welsch correction for outlier suppression, and updates the low-rank component through projected blockwise gradient descent. By operating directly on the sampled cross, R-ItCUR avoids reconstructing the full tensor throughout the iterations, resulting in substantial memory and computational savings. Experiments on synthetic tensors, cardiac MRI data, and three-dimensional seismic data demonstrate accurate recovery and strong robustness to sparse gross corruptions. The results further highlight the importance of explicitly exploiting the cross-concentrated sampling structure in robust tensor completion.
