# Hybrid Probabilistic Zonotopes for Identifiable and Refinable Predictive Uncertainty

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zhen Zhang, Amr Alanwar　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05454)

------

arXiv:2608.05454v1 Announce Type: new

Abstract: Probabilistic prediction heads in neural networks typically output either a Gaussian mixture or a single conformal region. Neither separates the distinct sources of uncertainty often present in real prediction tasks: a discrete choice among modes, bounded systematic drift within the chosen mode, and irreducible stochastic noise. We introduce the Hybrid Probabilistic Zonotope (HProbZ), an output head that represents these three sources as binary, bounded, and stochastic generators of a zonotope, and admits a closed-form likelihood by convolution. Sharing the bounded generator across prediction steps couples future predictions algebraically, so observing one step refines the predictive distribution at every remaining step in a single forward pass. We establish that the three generators are identifiable from the likelihood up to permutation, and that an HProbZ density is representationally distinct from any finite Gaussian mixture. The same shared structure provides analytic per-mode risk and distribution-free multi-modal conformal sets at inference time. Empirical analysis on representative prediction benchmarks supports the effectiveness of the design relative to same-encoder mixture baselines, while offering structural properties that mixture or convex-conformal predictors do not jointly provide.
