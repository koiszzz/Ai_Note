# Can Training Logs Make Model Comparisons More Precise?

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Wei-Jung Huang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02705)

------

arXiv:2608.02705v1 Announce Type: cross

Abstract: Comparing stochastically trained models requires estimating both a performance difference and its uncertainty from repeated runs. We study whether training logs from those same runs can make such comparisons more precise. Because training-log covariates are produced during training rather than measured before it, we use arm-specific covariate adjustment: each model is adjusted only with statistics from its own runs, and the raw mean difference remains the reported effect. In a vision study spanning three architectures and three datasets, simple adjustments based on early training logs often reduce uncertainty in model comparisons. The main limitation is covariate selection. Broadly searching the log pool for the most correlated statistic often adds more noise than it removes, even when useful statistics exist in hindsight. Training logs therefore appear useful for more precise model comparisons, but only when the adjustment avoids large selection noise.
