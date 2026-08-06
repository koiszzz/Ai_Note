# MINT: Tensor Decomposition on Stacked Recurrence Matrices for Time Series Data Mining

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kaamil Kaka, Audrey Der, Evangelos E. Papalexakis, Zachary Zimmerman, Vikram Jayaram　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04157)

------

arXiv:2608.04157v1 Announce Type: new

Abstract: Recurrence plots are a time series data mining primitive applied to a variety of domains (e.g. star light curves, sound waveforms, CCT telemetry). This work proposes tensorized self-similarity matrices as a primitive for univariate time series datasets ($N\times n$) of $N$ time series of length $n$ with a subsequence window of length $m$, and whose tensor-based nature is naturally extensible to multivariate datasets. The proposed method to compute this primitive computes dot plots of size $N \times (n-m+1) \times (n-m+ 1)$ from these datasets, where the subsequent tensor is mined using tensor decomposition methods to mine for co-clustered patterns. We demonstrate our results in mass rapid transit, electricity demand, wind turbine, and car traffic data, finding the MINT pipeline effectively co-clusters cross-sensor patterns in highly regular datasets containing motifs at regular intervals.
