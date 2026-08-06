# Sublogarithmic Swap Regret in Multiplayer General-Sum Games via Hybrid Regularization

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Taira Tsuchiya　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.GT　|　原文：[打开链接](https://arxiv.org/abs/2608.04149)

------

arXiv:2608.04149v1 Announce Type: cross

Abstract: Swap regret governs the rate at which uncoupled learning dynamics converge to correlated equilibria in multiplayer general-sum games. Under full-information feedback, the best previous guarantee when every player follows the same dynamics grows logarithmically in the horizon $T$. We construct uncoupled dynamics under which every player incurs only $O(nm^2\sqrt{\log m\log T})$ swap regret, where $n$ is the number of players and $m$ bounds the number of actions per player. To our knowledge, this is the first sublogarithmic individual guarantee in this setting, and it implies that the time-averaged product distribution of play is an $O(nm^2\sqrt{\log m\log T}/T)$-approximate correlated equilibrium. The key algorithmic choice is to combine the Blum--Mansour reduction with optimistic follow-the-regularized-leader using a hybrid regularizer that separately weights negative Shannon entropy and the log-barrier: the entropy controls the optimistic prediction error, whereas the log-barrier controls the transition-matrix movement through its Bregman divergence. A new sensitivity theorem for stationary distributions of Markov chains, which involves neither mixing parameters nor the smallest transition probability, transfers this control to the played strategies and yields a simpler analysis without local-norm or self-concordance arguments. The guarantee is preserved by an adversarially robust variant that additionally ensures $O(nm^2\sqrt{\log m\log T}+\sqrt{mT\log m})$ swap regret against arbitrary utility sequences, and by a horizon-free variant that requires no prior knowledge of $T$.
