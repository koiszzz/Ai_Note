# Scalable estimation of VARMA models

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Daniel Paulin, Victor Elvira　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.06340)

------

arXiv:2608.06340v1 Announce Type: cross

Abstract: Vector autoregressive moving-average (VARMA) models have long been considered impractical beyond moderate dimensions: the likelihood is non-convex, the parametrization is identified only up to equivalence, and every evaluation costs a pass over the entire series. Yet their moving-average term captures with a few parameters what a pure autoregression matches only with many lags. We introduce an estimation framework that removes this computational barrier: each optimization iteration is independent of the series length $T$. The framework combines a partial-autocorrelation reparametrization that guarantees stationarity and invertibility by construction, Gaussian priors on the reparametrized coefficients with separate scales for diagonal and off-diagonal entries, and losses that depend on the data only through fixed-size sufficient statistics, evaluated by a Parseval (Fourier) identity at near-linear cost in the truncation length. This yields two point estimators: a regularized least-squares fit and a covariance-marginalized maximum-a-posteriori estimator. We prove that both recover the infinite-autoregressive representation of the true process at a near-parametric rate in fixed dimension, so the truncation introduces no asymptotic bias. The same machinery extends, at the same leading cost, to seasonal dynamics, exogenous regressors (VARMAX), and rolling-window refits. Empirically, the estimators stay close to the oracle forecast error from $d=10$ to $d=40$ (where classical conditional MLE returns non-invertible fits whose forecasts diverge) and match or beat VAR, Bayesian-VAR, component-wise ARMA, and sparse-VARMA baselines on retail-demand, meteorological, and air-quality data. This brings likelihood-based VARMA estimation, at a per-iteration cost independent of the series length, to the problem sizes where practitioners have so far relied on VAR models.
