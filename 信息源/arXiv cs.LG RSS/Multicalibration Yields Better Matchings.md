# Multicalibration Yields Better Matchings

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Riccardo Colini Baldeschi, Simone Di Gregorio, Simone Fioravanti, Federico Fusco, Ido Guy, Daniel Haimovich, Stefano Leonardi, Fridolin Linder, Lorenzo Perini, Matteo Russo, Cem Sirin, Niek Tax　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.11413)

------

arXiv:2511.11413v2 Announce Type: replace

Abstract: Consider the problem of finding the best matching in a weighted graph where we only have access to predictions of the actual stochastic weights, based on an underlying context. If the predictor is the Bayes optimal one, then computing the best matching based on the predicted weights is optimal. However, in practice, this perfect information scenario is not realistic. Given an imperfect predictor, a suboptimal decision rule may compensate for the induced error and thus outperform the standard optimal rule.

In this paper, we propose multicalibration as a way to address this problem. This fairness notion requires a predictor to be unbiased on each element of a family of protected sets of contexts. Given a class of matching algorithms $\mathcal C$ and any predictor $\gamma$ of the edge-weights, we show how to construct a specific multicalibrated predictor $\hat \gamma$, with the following property. Picking the best matching based on the output of $\hat \gamma$ is competitive with the best decision rule in $\mathcal C$ applied onto the original predictor $\gamma$. We complement this result by providing sample complexity bounds, and by performing numerical experiments.
