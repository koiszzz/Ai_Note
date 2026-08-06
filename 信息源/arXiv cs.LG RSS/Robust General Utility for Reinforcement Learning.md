# Robust General Utility for Reinforcement Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zixuan Liu, Fangzheng Wu, Brian Summa, Zizhan Zheng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03562)

------

arXiv:2608.03562v1 Announce Type: new

Abstract: Reinforcement learning (RL) with general utility extends classic RL by optimizing an arbitrary utility functional of the policy-induced occupancy measure, thereby enabling a broader range of applications. However, previous work on general utility RL typically assumes the evaluation utility is fixed and correctly specified. In practice, the utility used at deployment can deviate from the training one, creating a robustness gap that prior work does not address. Motivated by this, we propose robust general-utility RL, a minimax learning framework that trains policies against utility misspecification within a prescribed uncertainty set. Our framework strictly generalizes standard general-utility RL while also providing a unified view of many existing RL frameworks, including reward-robust RL and constrained RL, through appropriate choices of the utility uncertainty set. We further develop provably convergent stochastic algorithms for two regimes. For concave utilities, we develop a projected stochastic gradient descent-ascent method and establish stationarity guarantees. For the more challenging nonconcave regime, we propose a stochastic prox-extragradient algorithm that mitigates ill-posed behavior induced by nonconcavity, with convergence guarantees to approximate first-order stationarity. Experiments on LLM safety alignment and exploration maximization tasks further corroborate the convergence behavior consistent with our theory.
