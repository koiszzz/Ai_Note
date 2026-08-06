# Multimodal Alignment Through Joint Kernel Entropic Gromov--Wasserstein Optimal Transport

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yixuan Florence Wu, Yilun Zhu, Naichen Shi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：math.ST　|　原文：[打开链接](https://arxiv.org/abs/2608.04234)

------

arXiv:2608.04234v1 Announce Type: cross

Abstract: We study the problem of aligning data from multiple modalities into a shared representation space, focusing on settings where strong pretrained unimodal encoders are available but cross-modal paired data are scarce. We propose a structure-preserving alignment framework, joint kernel entropic Gromov--Wasserstein Optimal Transport (JK-EGW), which maps multiple modalities into a common latent space by minimizing a quadratic optimal transport objective. JK-EGW leverages fine-grained similarity relationships within and across modalities to construct a global affinity kernel instead of relying on raw feature-space distances. Our framework naturally provides explicit control over the geometry and distribution of the latent embedding. On the theory side, we establish parametric sample complexity rate of $n^{-1/2}$, matching the corresponding rates for standard, entropic and Gromov--Wasserstein optimal transport. On the algorithmic side, we derive a scalable alternating procedure to solve JK-EGW with entropic optimal transport (EOT) updates through a low-rank kernel approximation and a variational lifting. This lifting scheme effectively relieves the burden of a quadratic objective, and allowing us to take the advantage of existing EOT solvers. Empirically, we focus on post-hoc alignment of embeddings from pretrained encoders in data-scarce regimes, and show that our proposed method achieves improved multimodal retrieval performance compared to existing alignment baselines.
