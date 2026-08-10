# Localized Anomaly Detection via Differentiable D-vine Copulas

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Nicholas Andrea Pearson, Francesca Zanello, Davide Russo, Luca Bortolussi, Francesca Cairoli　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.25020)

------

arXiv:2607.25020v2 Announce Type: replace

Abstract: Vine copulas provide a flexible framework for modeling complex multivariate distributions through a hierarchical decomposition into bivariate pair-copulas. Fitting a D-vine requires selecting a copula family and parameter configuration for each pair-copula from a set of candidates encoding different dependence patterns. As the number of variables and candidate families increases, the number of possible configurations grows combinatorially. Existing fitting procedures address this challenge through sequential greedy decisions, committing to a single locally optimal family at each step and potentially discarding configurations that would yield a better global fit. To overcome this limitation, we propose a novel estimation framework that combines gradient-based maximum likelihood estimation, enabled by our fully differentiable implementation, with a beam-search strategy that maintains multiple competing D-vine configurations throughout the fitting process. This allows a broader exploration of the configuration space while remaining computationally tractable. Building on the fitted D-vine, we introduce a localized anomaly detection framework that exploits the hierarchical decomposition to produce both global anomaly scores and edge-level explanations. Statistical guarantees are provided through Mondrian conformal prediction, while the pair-copula structure enables the localization of anomalies to specific variable relationships. We evaluate the proposed framework on both benchmark and real-world datasets, demonstrating its effectiveness for interpretable anomaly detection with uncertainty quantification.
