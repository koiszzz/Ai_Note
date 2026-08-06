# When Proxy Prediction Becomes Equation Reconstruction: Diagnostics and Residual Learning for Factor-Derived Proxy Supervision

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chayan Lahiri, Ahmed Shafee, Cody Fehringer　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04393)

------

arXiv:2608.04393v1 Announce Type: new

Abstract: Scientific machine learning often relies on proxy targets computed from known domain factors when direct observations are limited. When those same factors are used as model inputs, however, high predictive accuracy may reflect reconstruction of the proxy-generating equation rather than robustness to degraded factor information. We study this problem in RUSLE-derived soil-loss proxy prediction under controlled degradation of the soil-erodibility factor $K$. We introduce a diagnostic framework that combines degraded-formula references, classical tree-based baselines, matched direct and formula-feature predictors, contextual ablations, tail-error analysis, and degradation robustness scoring. We then propose RASPL, a formula-preserving residual framework that retains the degraded formula estimate as the prediction anchor and learns an adaptively gated contextual correction. RASPL substantially outperforms matched direct prediction and provides stronger degradation and tail robustness than treating the formula estimate as an ordinary input feature. Within RASPL, a compact statistical encoder achieves the highest macro-averaged $R^2$ and lowest computational cost, whereas a convolutional encoder achieves the strongest degradation robustness and lowest Tail95 mean absolute error (MAE). These results establish formula preservation as the central design principle for robust learning from factor-derived proxy targets.
