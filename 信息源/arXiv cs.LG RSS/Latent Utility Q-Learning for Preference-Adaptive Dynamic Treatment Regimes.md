# Latent Utility Q-Learning for Preference-Adaptive Dynamic Treatment Regimes

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Joshua P. Zitovsky, Yating Zou, Leslie Wilson, Michael R. Kosorok　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2307.12022)

------

arXiv:2307.12022v3 Announce Type: replace-cross

Abstract: Optimizing individualized treatment sequences for patients who weigh multiple, competing outcomes differently poses a challenge for dynamic treatment regime (DTR) methods, which typically assume a single univariate outcome. We propose Latent Utility Q-Learning (LUQ-Learning), which estimates DTRs optimizing patient-specific preference-weighted combinations of multivariate outcomes $\mathbf{Y}\in\mathbb{R}^d$ across $K$ decision points. A conditional mean factorization decouples preference estimation from outcome regression, enabling flexible, modular learning under imperfectly observed and heterogeneous preferences without requiring explicit outcome ranking by patients. We establish consistency of the estimated value function and derive unified $\epsilon$-optimality guarantees that bound policy value loss in terms of posterior preference uncertainty, yielding interpretable criteria for data-driven policy selection. Simulations calibrated to Sequential Multiple Assignment Randomized Trials (SMARTs) demonstrate that LUQ-Learning outperforms Q-learning with naive outcome aggregation, last-reported satisfaction optimization, and existing preference-based methods.
