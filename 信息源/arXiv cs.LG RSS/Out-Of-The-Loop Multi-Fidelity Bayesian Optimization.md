# Out-Of-The-Loop Multi-Fidelity Bayesian Optimization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Gustavo Sutter, Hao Wang, Luis Ricardez-Sandoval, Pascal Poupart, Agustinus Kristiadi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04113)

------

arXiv:2608.04113v1 Announce Type: new

Abstract: Black-box optimization is a ubiquitous problem in science and engineering, often dealing with expensive objective functions with cheaper lower-fidelity proxies available. Multi-fidelity Bayesian optimization (MF-BO) is a principled approach to this problem, leveraging correlations across different fidelities when querying the objective. However, for many important MF-BO tasks, the true highest-fidelity function is prohibitively expensive to be part of the optimization loop. Nevertheless, practitioners often have gold standard data (observations of the highest-fidelity function) obtained from previous experiments that might provide information for the current task. For instance, in molecular optimization, chemists often pick the top-$k$ candidate molecules using various computer simulations, and later reveal their true objective function values. In this work, we demonstrate the suboptimality of standard MF-BO algorithms in the real-world scenarios above, even under ideal assumptions. Next, we mitigate this problem by incorporating historical high-fidelity data accompanied by task descriptors---which can be explicitly given or extracted from unstructured metadata. We demonstrate the effectiveness of our methods on synthetic functions, as well as real-world problems in chemistry and hyperparameter optimization.
