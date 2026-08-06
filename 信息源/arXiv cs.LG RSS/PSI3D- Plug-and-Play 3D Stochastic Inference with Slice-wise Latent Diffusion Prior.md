# PSI3D: Plug-and-Play 3D Stochastic Inference with Slice-wise Latent Diffusion Prior

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Wenhan Guo, Jinglun Yu, Yaning Wang, Jin U. Kang, Yu Sun　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：eess.IV　|　原文：[打开链接](https://arxiv.org/abs/2512.18367)

------

arXiv:2512.18367v2 Announce Type: replace-cross

Abstract: Diffusion models are highly expressive image priors for Bayesian inverse problems. However, most diffusion models cannot operate on large-scale, high-dimensional data due to high training and inference costs. In this work, we introduce a Plug-and-play algorithm for 3D stochastic inference with latent diffusion prior (PSI3D) to address massive ($1024\times 1024\times 128$) volumes. Specifically, we formulate a Markov chain Monte Carlo approach to reconstruct each two-dimensional (2D) slice by sampling from a 2D latent diffusion model. To enhance inter-slice consistency, we also incorporate total variation (TV) regularization stochastically along the concatenation axis. We evaluate our performance on optical coherence tomography (OCT) super-resolution. Our method significantly improves reconstruction quality for large-scale scientific imaging compared to traditional and learning-based baselines, while providing robust and credible reconstructions.
