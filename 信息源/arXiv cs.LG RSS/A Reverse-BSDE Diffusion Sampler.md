# A Reverse-BSDE Diffusion Sampler

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Jairon H. N. Batista, Fl\'avio B. Gon\c{c}alves, Yuri F. Saporito, Rodrigo S. Targino　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2505.06800)

------

arXiv:2505.06800v2 Announce Type: replace-cross

Abstract: Diffusion-based generative models have renewed interest in stochastic differential equation methods for sampling from complex distributions. We study a setting in which the target density is known only up to a normalizing constant and reformulate the reverse-time diffusion sampler as a forward-backward stochastic differential equation (FBSDE). This formulation replaces the separate pre-estimation of the time-dependent score with the solution of a coupled stochastic system. We prove the equivalence of these formulations and provide a decomposition of the approximation error arising from initializing the sampler with a standard Gaussian, applying Euler discretization to the dynamics, and solving the FBSDE approximately. We then evaluate the proposed algorithm on synthetic targets, including separated mixtures, anisotropic Gaussian distributions, and banana-shaped and ring-shaped distributions. The results demonstrate the promise of the method, particularly for targets with complex global structure.
