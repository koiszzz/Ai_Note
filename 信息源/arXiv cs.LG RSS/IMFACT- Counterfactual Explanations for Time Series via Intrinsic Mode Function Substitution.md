# IMFACT: Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Udo Schlegel, Julian Rakuschek, Thomas Seidl, Andreas Holzinger, Tobias Schreck, Javier Del Ser　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04777)

------

arXiv:2608.04777v1 Announce Type: new

Abstract: Oscillatory signals, such as vibration, carry class-discriminative information in specific frequency bands; perturbing them in raw feature space for counterfactual analysis easily destroys their temporal structure and produces physically implausible results. In this work, we introduce IMFACT (IMF-based counterfACTuals), a model-agnostic framework for generating plausible counterfactual explanations for time series classifiers that operates in the decomposition space of Empirical Mode Decomposition. An input signal is split into Intrinsic Mode Functions (IMFs), and selected IMFs are progressively substituted with those of a Nearest Unlike Neighbour (NUN) until the classifier flips to the target class. We evaluate six IMF-selection strategies and a multi-NUN cycling extension on two UCR benchmarks (FaultDetectionA, FruitFlies). The variance-based strategy with three NUNs outperforms two prominent baseline techniques on reliability and plausibility metrics, while cycling across three NUNs yields the best proximity across both datasets.
