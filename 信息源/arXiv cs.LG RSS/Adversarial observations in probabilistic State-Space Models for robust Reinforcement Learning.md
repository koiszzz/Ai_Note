# Adversarial observations in probabilistic State-Space Models for robust Reinforcement Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：M. Santos-Pascual, D. R\'ios Insua　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2606.20880)

------

arXiv:2606.20880v2 Announce Type: replace-cross

Abstract: Decision-making under partial or adversarial observability requires accurate inference of the environment's latent state and its associated uncertainty. This work analyses adversarial attacks on linear state-space models, where the attacker alters observations subject to likelihood constraints that ensure that the perturbations remain statistically consistent with the observation model. We analyse how such adversarial yet plausible observations shift inference about latent states and affect downstream decision-making and the performance of reinforcement learning agents. In addition, we introduce an online Bayesian defence based on directional covariance adaptation, which selectively reduces the influence of observations by comparing their estimated impact with that of the computed most disruptive direction, while preserving information in the remaining orthogonal observation subspace. The proposed framework provides a principled approach to constructing robust inference and decision-making systems, with direct relevance to safety-critical applications such as robotics, where reliable operation under sensor noise, partial failures, and adversarial conditions is essential.
