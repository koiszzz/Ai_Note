# Representational separation between unitary and channel quantum generative models via shared classical randomness at shallow depth

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Arunava Majumder, Marius Krumm, Hendrik Poulsen Nautrup, Hans J. Briegel　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：quant-ph　|　原文：[打开链接](https://arxiv.org/abs/2608.05110)

------

arXiv:2608.05110v1 Announce Type: cross

Abstract: Near-term quantum hardware limits circuit depth and often imposes geometrically local connectivity for quantum generative models, restricting the output distributions accessible to shallow unitary Born models. Introducing stochasticity into a unitary quantum Born model can improve the empirical generative performance of the resulting channel model and, for a restricted small-scale architecture, has been proven to represent a strictly larger family of distributions than its unitary counterpart. However, whether such randomness provides a provable separation at fixed shallow depth for arbitrarily large systems has remained open. Here, we show that shared classical randomness, a comparatively weak resource from entanglement theory, is sufficient to establish such a strict scalable representational separation over the corresponding shallow unitary Born model. More specifically, we augment bounded-connectivity shallow unitary circuits, followed by computational-basis measurements, with spatially separated local Pauli operations, whose joint application is controlled by a single classically sampled random bit. The resulting shallow-depth channel model generates long-range correlations in the classical output distribution that no purely unitary shallow-depth model with bounded connectivity can reproduce. For one-dimensional nearest-neighbour architectures, reproducing such distributions with a purely unitary model can require depth $\Omega(N)$ in the worst case. We further show that measurement-based quantum computation (MBQC) provides a natural implementation of the required shared classical randomness through suitable adaptation of the random measurement outcomes. Numerical experiments on MBQC-based generative models support the analytical results.
