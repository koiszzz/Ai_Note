# Accelerated and Stable Convergence with Anchored Generalized Optimistic Method

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Motahareh Sohrabi, Jianxin You, Simon Lacoste-Julien, Eduard Gorbunov, Gauthier Gidel　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：math.OC　|　原文：[打开链接](https://arxiv.org/abs/2606.21528)

------

arXiv:2606.21528v2 Announce Type: replace-cross

Abstract: We study first-order methods for solving monotone variational inequalities arising in min-max optimization. Classical approaches such as the extragradient method rely on two gradient queries per iteration, which limits their analysis and applicability in the online and stochastic settings. We propose a family of Generalized Optimistic Methods with Anchoring (GOMA), which combine two-time-scale optimistic updates with an anchoring term inspired by Halpern iteration. In the deterministic setting, GOMA achieves the optimal accelerated last-iterate rate $O(1/k^2)$ on the squared gradient norm for monotone Lipschitz operators. In the stochastic setting with unbounded variance, a simplified single-call variant of GOMA achieves a last-iterate convergence rate of $O(1/\sqrt{k})$ on the squared gradient norm. To the best of our knowledge, this is the first such guarantee for stochastic monotone Lipschitz variational inequalities in the unconstrained setting without variance reduction or growing batches.
