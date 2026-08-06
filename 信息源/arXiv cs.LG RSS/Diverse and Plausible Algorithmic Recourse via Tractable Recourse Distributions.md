# Diverse and Plausible Algorithmic Recourse via Tractable Recourse Distributions

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Anagha Sabu, Hrithik Suresh, Narayanan C. Krishnan　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04677)

------

arXiv:2608.04677v1 Announce Type: new

Abstract: Algorithmic recourse seeks to help individuals reverse unfavorable automated decisions by recommending actionable changes that achieve a desired outcome. As an individual usually has several distinct routes to a favorable decision, and different people can act on different ones, a recourse system should offer multiple realistic alternatives rather than one. Existing approaches formulate recourse as an optimization problem that constructs one or a small set of counterfactuals rather than modeling the underlying space of feasible solutions, and in practice each sacrifices diversity, plausibility, or feasibility to secure the others. We propose Tractable Recourse Distributions, a probabilistic framework that represents the space of feasible alternatives for a given factual instance as a probability distribution over favorable outcomes. For commonly used cost functions based on proximity and the number of feature changes, we show that this distribution admits an exact representation as a probabilistic circuit, obtained by exponentially tilting the circuit; each individual's distribution is therefore available in closed form, without retraining the model. Sampling from these distributions naturally produces diverse and plausible recourses, while the tilting parameters provide explicit control over their proximity and sparsity. Experiments on standard algorithmic recourse benchmark datasets demonstrate that the proposed framework attains diversity, plausibility, and feasibility simultaneously, while retaining sufficient probability mass over feasible counterfactuals for rejection sampling to be practical. A visual study on MNIST illustrates how the tilt strength trades proximity against validity.
