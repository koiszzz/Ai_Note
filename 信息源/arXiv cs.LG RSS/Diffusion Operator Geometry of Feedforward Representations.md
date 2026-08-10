# Diffusion Operator Geometry of Feedforward Representations

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kanishka Reddy　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2605.01107)

------

arXiv:2605.01107v2 Announce Type: replace

Abstract: Feedforward neural networks transform data through learned representations whose geometry shapes how classes separate and relate across successive layers. We study that geometry through diffusion operators. Each feature-cloud snapshot is assigned a Gaussian-kernel Markov operator, giving a smooth description of one-step transport between classes from which spectral, boundary, and local geometric information can be read. We define the empirical class chain, state the condition under which it is an exact Markov quotient, and derive both the corresponding population transition and a simpler overlap chain based on expected class affinities. For balanced shared-covariance Gaussian class-conditional snapshots these affinities have closed forms controlled by a regularized Mahalanobis separation, which yields explicit expressions for leakage and coarse spectral behaviour. We further show that operator observables vary smoothly under feature perturbations, whereas hard neighborhood graphs are controlled by neighbor-order margins. Experiments on CIFAR-10 and CIFAR-100 ResNet-18 representations find that class transport becomes increasingly persistent with depth while retaining structured relations between classes, and that the diffusion class chain is more stable than its $k$-nearest-neighbor counterpart under matched perturbations.
