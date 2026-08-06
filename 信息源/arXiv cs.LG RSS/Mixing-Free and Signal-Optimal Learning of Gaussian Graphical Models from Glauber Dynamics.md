# Mixing-Free and Signal-Optimal Learning of Gaussian Graphical Models from Glauber Dynamics

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Vignesh Tirukkonda, Gautam Dasarathy　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2607.18559)

------

arXiv:2607.18559v2 Announce Type: replace-cross

Abstract: Gaussian graphical model selection is usually studied under independent sampling, but in many applications the data arise as a single trajectory of a dependent stochastic process. We study exact recovery of the graph from one trajectory of random-scan Gaussian Glauber dynamics. Existing techniques for this problem either inherit the mixing time of the chain, which can be super-polynomial in the dimension $p$ without strong assumptions, or are suboptimal in the minimum normalized edge strength $\kappa$. We propose two algorithms that are mixing-free and attain the $\kappa^{-2}$ dependence of the information-theoretic lower bounds. Both instantiate a shared dueling-neighborhood search meta-algorithm with a local statistic built directly from the update sequence. For every fixed precision matrix and deterministic initialization, the first algorithm fits a least-squares regression at the updates of each node and has pointwise recovery horizon $\widetilde O(pd^{2}/\kappa^{2})$, where $d$ is the maximum degree. Its horizon depends logarithmically on a local conditioning quantity and on the initialization potential. The second algorithm is based on counting occurences of a specific update pattern and requires $\widetilde O(pd^{4}/\kappa^{2})$ updates, with no dependence on any condition number. The central technical challenge is that both statistics are built from dependent, non-stationary observations. Our analysis tackles this by demonstrating how to extract fresh Gaussian innovations from the update sequence, which yields mixing-free control of appropriate quantities. Neither the algorithms nor their analyses invoke stationarity, a spectral gap, or mixing conditions.
