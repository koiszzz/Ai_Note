# Information-Geometric Forward Policy Training in GFlowNets

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yordan Raykov, Rodrigo Veiga　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.03967)

------

arXiv:2608.03967v1 Announce Type: cross

Abstract: Generative Flow Networks (GFlowNets) have emerged as a flexible framework for amortised inference over discrete and mixed discrete-continuous objects, requiring only an unnormalised target density specified through a reward. In this work, we formulate forward-policy training in GFlowNets through the information geometry of the induced trajectory sampler. Treating the forward policy as an induced trajectory sampler, we show that its intrinsic first-order geometry is given by the Fisher-Rao metric of the trajectory family, and that the associated natural gradient provides the canonical local update whenever the corresponding Fisher information is computable or accurately approximable. We derive an exact decomposition of the trajectory Fisher into per-step conditional second moments, which clarifies when temporal score interactions vanish and when dense couplings remain under shared parameterisation. This leads to three computational regimes: settings with tractable exact Fisher information, settings where Monte Carlo estimators of the expected Fisher are sufficient, and structure-exploitable settings in which target locality or factorisation yields accurate approximations of the Fisher expectation. In the latter case, graphical-model tools such as exact marginalisation, separator methods, and belief propagation provide principled surrogates for natural-gradient updates. The resulting framework turns target structure into optimisation geometry and yields a tractable route to structure-aware forward-policy training in GFlowNets. We illustrate the framework empirically through examples comparing convergence and exploration behaviour under Riemannian and Euclidean optimisation.
