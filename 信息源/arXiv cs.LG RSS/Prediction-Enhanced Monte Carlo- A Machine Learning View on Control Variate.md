# Prediction-Enhanced Monte Carlo: A Machine Learning View on Control Variate

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Fengpei Li, Haoxian Chen, Jiahe Lin, Arkin Gupta, Xiaowei Tan, Honglei Zhao, Gang Xu, Yuriy Nevmyvaka, Agostino Capponi, Henry Lam　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2412.11257)

------

arXiv:2412.11257v4 Announce Type: replace-cross

Abstract: For many complex simulation tasks spanning areas such as healthcare, engineering, and finance, Monte Carlo (MC) methods are invaluable due to their unbiased estimates and precise error quantification. Nevertheless, Monte Carlo simulations often become computationally prohibitive, especially for nested, multi-level, or path-dependent evaluations lacking effective variance reduction techniques. While machine learning (ML) surrogates appear as natural alternatives, naive replacements typically introduce unquantifiable biases. We address this challenge by introducing Prediction-Enhanced Monte Carlo (PEMC), a framework that leverages modern ML models as learned predictors, using cheap and parallelizable simulation as features, to output unbiased evaluation with reduced variance and runtime. PEMC can also be viewed as a "modernized" view of control variates, where we consider the overall computation-cost-aware variance reduction instead of per-replication reduction, while bypassing the closed-form mean function requirement and maintaining the advantageous unbiasedness and uncertainty quantifiability of Monte Carlo.

We illustrate PEMC's broader efficacy and versatility through three examples: first, equity derivatives such as variance swaps under stochastic local volatility models; second, interest rate derivatives such as swaption pricing under the Heath-Jarrow-Morton (HJM) interest-rate model. Finally, we showcase PEMC in a socially significant context - ambulance dispatch and hospital load balancing - where accurate mortality rate estimates are key for ethically sensitive decision-making. Across these diverse scenarios, PEMC consistently reduces variance while preserving unbiasedness, highlighting its potential as a powerful enhancement to standard Monte Carlo baselines.
