# Adaptive Finite-Budget Training for CVaR Risk-Aware Q-Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yifan Wu, Junjie Lei, Wenjie Huang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04305)

------

arXiv:2608.04305v1 Announce Type: new

Abstract: Risk-aware Q-learning (RaQL) provides a model-free, two-timescale estimator for dynamic risk objectives, but its finite-budget behavior remains fragile: fixed inner-loop hyperparameters can produce unstable value estimates, persistent Bellman residuals, and inefficient sample reuse. This paper proposes an adaptive training controller for Conditional Value-at-Risk (CVaR) RaQL and evaluates it on a daily Bitcoin trading task. The controller preserves the original CVaR estimator and Bellman fixed point; instead, it redesigns the training procedure through six coordinated mechanisms: per-cell inner-step sizing, outer-rate-matched decay synchronization, a short early correction for the VaR-like inner variable, a coverage-first-then-greedy sample allocation rule, progressive suffix aggregation of mature inner estimates, and data-driven calibration of key scales from online-observable quantities. Across 20 random seeds and 856,000 inner-transition samples, the controller reduces the mean empirical CVaR Bellman residual by approximately 85% relative to the fixed-parameter baseline (MeanBEQ: 1.2202 to 0.1854; MeanBEV: 1.1624 to 0.0535) and maintains stability across CVaR levels, discount factors, and training budgets. On the chronological out-of-sample test set, the learned policy attains a Sharpe ratio of 0.9281 with a maximum drawdown of 6.46% after transaction costs. Although buy-and-hold yields a higher cumulative return (35.43% vs. 23.61%), the adaptive policy achieves far lower volatility (9.57% vs. 47.93%), drawdown, and CVaR loss. These results demonstrate that adaptive finite-budget training design, applied solely to the training procedure without altering the risk objective, can materially improve the reliability and risk-adjusted performance of risk-aware Q-learning in financial applications.
