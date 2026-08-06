# A Trust-region Framework for Moment Estimation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Oluwasegun A. Somefun　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04026)

------

arXiv:2608.04026v1 Announce Type: new

Abstract: In this paper, we develop a trust-region framework for understanding the behavior of adaptive moment estimation mechanisms, such as \textsc{Adam}, in stochastic gradient optimization. Specifically, in this framework, the magnitude of the update step for each individual weight is constrained within a trust-region governed by a moment constraint of order $p\in[2,4]$. The resulting derivation then leads to a family of learning-rate mechanisms based on second-moment estimation and a normalized $p$-th moment estimation. When $p=4$, this involves kurtosis-like estimation. The general mechanism, referred to as \textsc{Gmake}, provides a unified interpretation of normalization by moment estimation, learning-rate scheduling, spectral lowpass filtering as momentum, and operator-level spectral normalization within a common trust-region framework. Experiments on GPT2-124M trained on FineWeb-Edu and TinyStories suggest that the fourth-moment realization provides its greatest benefit when trust-region constraints are weak. As progressively stronger trust-region controls are introduced, the second-moment realization becomes increasingly competitive, often achieving slightly lower validation loss than its corresponding fourth-moment realization.
