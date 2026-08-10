# Worst-Case Distance-Aware Error Bounds for Neural Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Masoud Ataei, Vikas Dhiman, Mohammad Javad Khojasteh　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2510.22021)

------

arXiv:2510.22021v3 Announce Type: replace

Abstract: Safety-critical applications of machine learning require uncertainty estimates that support reliable worst-case analysis. Neural networks (NNs) provide expressive function approximation, while Gaussian processes (GPs) offer principled probabilistic uncertainty, but both face limitations in this setting: most modern neural architectures lack tractable worst-case error bounds, and Gaussian processes become computationally expensive at scale. For uncertainty to be interpretable, a central requirement is distance-awareness: that is, uncertainty increases with the distance between a test input and the nearest relevant training data. We present a general framework for worst-case distance-aware error bounds for NNs that combine dense layers with spline-based components. Our approach establishes error bounds that are both distance-aware, reflecting proximity of a test point to its nearest training data, and worst-case, providing deterministic guarantees under known Lipschitz constraints rather than probabilistic assumptions. Our algorithm, K-DAREK (Distance-Aware Error for Kurkova-Kolmogorov Networks), provides efficient and interpretable uncertainty quantification for NNs. K-DAREK is about four times faster and ten times more computationally efficient than an ensemble of KANs, 8.6 times more scalable than GP, eliminates up to 8.2% error-bound violation rate observed in DAREK, and reduces the average collision rate from 1.8% to 1.1% in the multi-agent safe control experiment. On high-dimensional real-world regression tasks (e.g., Real Estate Valuation), K-DAREK preserves distance-aware error bounds and achieves zero coverage violations, addressing the overgeneralization and inducing-point-coverage limitations exhibited by SNGP and DUE, respectively.
