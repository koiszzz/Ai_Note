# Divide-and-Conquer: Towards Generalizable Amortized Bayesian Inference for the Drift Diffusion Model

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yufei Wu, Shanqing Gao, Andreas Voss, Francis Tuerlinckx　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.03566)

------

arXiv:2608.03566v1 Announce Type: cross

Abstract: The drift diffusion model (DDM) is a cornerstone of cognitive decision-making research. Although numerous estimation methods exist, researchers continue to seek inference approaches that are both fast and flexible across diverse study designs. Amortized Bayesian inference (ABI) can provide nearly instantaneous inference for complex stochastic models like the DDM, but neural networks trained for one study design cannot generalize to others. In this paper, we propose a divide-and-conquer framework that address this limitation. The core idea is that the DDM's independence assumption allows the full dataset to be decomposed into pairwise shards, each sharing a common structure that a single neural network can learn. Inference is performed on each shard separately and the resulting posteriors are combined via consensus MCMC to approximate the full posterior. Using simulated datasets, we evaluate the accuracy and uncertainty of this method. Our results show that the proposed divide-and-conquer approach achieves accuracy and uncertainty comparable to MCMC while reducing computational cost by several orders of magnitude. This work not only advances DDM estimation but also demonstrates a general strategy for improving the scalability and generalizability of ABI methods across diverse applications.
