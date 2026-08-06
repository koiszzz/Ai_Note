# An Efficient Black-Box Reduction from Online Learning to Multicalibration, and a New Route to $\Phi$-Regret Minimization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Gabriele Farina, Juan Carlos Perdomo　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2604.19592)

------

arXiv:2604.19592v2 Announce Type: replace

Abstract: We give a Gordon-Greenwald-Marks (GGM) style black-box reduction from online learning to online multicalibration. Concretely, we show that to achieve high-dimensional multicalibration with respect to a class of functions $\mathcal{H}$, it suffices to combine any no-regret learner over $\mathcal {H} $ with an expected variational inequality (EVI) solver. We also prove a converse statement showing that efficient multicalibration implies efficient EVI solving, highlighting how EVIs in multicalibration mirror the role of fixed points in the GGM result for $\Phi$-regret.

This first set of results addresses the high-dimensional analogue of the open question in Garg, Jung, Reingold, and Roth (SODA '24), showing that oracle-efficient online multicalibration with $\sqrt{T}$-type guarantees is possible in full generality. Furthermore, our GGM-style reduction unifies the analyses of existing algorithms, transfers guarantees from online learning to multicalibration for challenging environments with delayed observations or censored outcomes, and yields the first efficient black-box reduction between online learning and multiclass omniprediction.

Our second main result is a fine-grained reduction from high-dimensional online multicalibration to (contextual) $\Phi$-regret minimization. Together with our first result, this establishes a new route from external regret to $\Phi$-regret that bypasses sophisticated fixed-point or semi-separation machinery, dramatically simplifies a result of Daskalakis, Farina, Fishelson, Pipis, and Schneider (STOC '25) while improving rates, and yields new algorithms that are robust to richer deviation classes, such as those belonging to any reproducing kernel Hilbert space.
