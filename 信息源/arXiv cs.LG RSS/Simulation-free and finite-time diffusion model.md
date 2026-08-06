# Simulation-free and finite-time diffusion model

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Kentaro Kaba, Masayuki Ohzeki, Yuki Sughiyama　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03117)

------

arXiv:2608.03117v1 Announce Type: new

Abstract: The performance of generative diffusion models is determined by the choice of the reference diffusion process connecting the empirical and prior distributions. Conventional approaches typically trade off simulation-free training against finite-time generation. We propose a framework for designing the reference process that achieves both simultaneously. The key idea is to prescribe tractable time-dependent conditional distributions and then construct the reference process realizing them as its marginals. This framework reveals that score matching is not fundamental to diffusion-model training but instead emerges naturally through reversal of the reference process. We further show that conditional flow matching arises as the small-noise limit of the proposed framework.
