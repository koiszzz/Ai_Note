# ArborEnum: Decision Tree Rashomon Sets over Continuous Features

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zakk Heile, Hayden McTavish, Margo Seltzer, Cynthia Rudin　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04310)

------

arXiv:2608.04310v1 Announce Type: new

Abstract: The Rashomon effect describes the phenomenon that many models can achieve nearly equivalent performance on the same learning task, with significant ramifications for robustness, feature importance, and customizability. These use cases motivate the computation of Rashomon sets: the set of all models whose regularized loss is near-optimal. Decision trees are one of the few model classes for which Rashomon sets can be fully enumerated, but this computation has always been conditional on a binarization of the original data, either restricting which splits each tree is allowed to make or substantially increasing the complexity of an already difficult combinatorial problem. We introduce the first algorithm that exactly enumerates decision-tree Rashomon sets while exploiting the ordered structure of continuous features. We further develop a relaxation for approximate enumeration and an anytime algorithm that progressively refines the set of candidate thresholds, producing increasingly detailed approximations that converge to the continuous-feature Rashomon set. Experiments show that coarse binarization can miss many trees, important features, and predictive multiplicity; our algorithms achieve orders-of-magnitude speedups over existing enumeration methods, with approximations providing further speedups while maintaining near-perfect recall.
