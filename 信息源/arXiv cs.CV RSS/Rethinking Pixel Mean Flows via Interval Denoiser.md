# Rethinking Pixel Mean Flows via Interval Denoiser

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Alexander Zaytsev, Dmitry Baranchuk, Alexander Korotin, Aibek Alanov　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04818)

------

arXiv:2608.04818v1 Announce Type: new

Abstract: Modern diffusion and flow-based models are increasingly moving toward few-step, latent-free generation to bypass the computational overhead of multi-step sampling and the reconstruction bottlenecks of external autoencoders. We propose the Interval Denoiser, a theoretically rigorous framework for latent-free generation. Derived directly from the flow matching ODE, it establishes an exact analytical mapping for intermediate trajectory states. Unlike prior formulations, our prediction is shown to reside on a low-dimensional manifold across any time interval, making the regression tractable for a network operating directly on pixels. Furthermore, by avoiding empirical algebraic substitutions, our formulation correctly isolates the pure time derivative to prevent biased gradient evaluations and ensure exact first-order optimization. By analyzing this objective, we equip our framework with residual clipping and a time-sampling curriculum, enabling effective long-interval training and improving few-step performance. Trained from scratch on ImageNet 256x256, our model achieves an FID of 4.55 in one step (1-NFE) and 3.98 in two steps (2-NFE) without perceptual losses.
