# Variational Approximated Restricted Maximum Likelihood Estimation for Spatial Data

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Debjoy Thakur　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2604.07635)

------

arXiv:2604.07635v2 Announce Type: replace-cross

Abstract: This research considers a scalable inference for spatial data modeled through Gaussian intrinsic conditional autoregressive (ICAR) structures. The classical estimation method, restricted maximum likelihood (REML), requires repeated inversion and factorization of large, sparse precision matrices, which makes this computation costly. To sort this problem out, we propose a variational restricted maximum likelihood (VREML) framework that approximates the intractable marginal likelihood using a Gaussian variational distribution. By constructing an evidence lower bound (ELBO) on the restricted likelihood, we derive a computationally efficient coordinate-ascent algorithm for jointly estimating the spatial random effects and variance components. In this article, we theoretically establish the monotone convergence of ELBO and mathematically exhibit that the variational family is exact under Gaussian ICAR settings, which is an indication of nullifying approximation error at the posterior level. We empirically establish the supremacy of our VREML over MLE and INLA.
