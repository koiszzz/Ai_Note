# Non-asymptotic implicit bias of logistic regression at early-stage gradient descent dynamics

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Han Bao　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04382)

------

arXiv:2608.04382v1 Announce Type: new

Abstract: Gradient descent has been of particular interest in modern machine learning beyond sole focus on optimization. Implicit bias emerging from optimization, though not being encoded by the learning objective, often prevents from overfitting to spurious patterns. A typical instance is the max-margin implicit bias of a linear classifier, widely established for exponentially tailed loss functions. Even after having a given dataset separated, the parameter vector continues to evolve towards the max-margin direction asymptotically along the gradient descent dynamics. This phenomenon corroborates a frequent empirical observation of "train longer, generalize better." However, the max-margin convergence is an asymptotic phenomenon, and what is worse, this asymptotic convergence rate is significantly slower than pure convex optimization. Even so, the parameter vector along gradient descent dynamics commonly correlates with the max-margin direction positively (though not exactly) within considerably fewer iterations than the asymptotic rate. By shedding another light on this classical problem, this work aims to understand the mechanism of this early-stage alignment phenomenon. Our theoretical results demonstrate that the parameter vector weakly aligns with the max-margin direction within $O(\exp(\exp(-\delta)))$ iterations, where $\delta>0$ is the permissible alignment error, which is shown to be tight. By tracking the radial and tangential flows, our proof operates on the alignment dynamics directly with dataset geometry and gets rid of the asymptotic expansion, which is a key insight to establishing faster weak alignment.
