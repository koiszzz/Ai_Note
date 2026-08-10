# MOSAIK: Multi-Patch Content-Aware Spatial Allocation of Image Tokens for Efficient Generation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Mohammadreza Hami, Mohammadreza Samadi, Chao Gao, Negar Hassanpour　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05450)

------

arXiv:2608.05450v1 Announce Type: new

Abstract: Pixel-space diffusion models avoid the reconstruction ceiling of latent diffusion models by generating directly in image space. However, their substantially higher token count makes generation expensive due to the quadratic complexity of self-attention. Several existing efficiency methods reduce this cost by using larger patches at selected denoising steps, thereby representing the image with fewer tokens. Yet, each step still uses a single patch size uniformly across the entire image, overlooking that different regions suffer different fidelity losses when coarsened. We introduce MOSAIK, a damage-guided framework that varies patch size across regions and denoising steps. MOSAIK adapts the PixelDiT backbone to generate arbitrary heterogeneous patch layouts, and a lightweight predictor uses intermediate denoising features to estimate the fidelity loss caused by coarsening each region. Given a token budget, our damage-guided layout predictor assigns fine patches to sensitive regions and coarse patches elsewhere. Remarkably, while reducing FLOPs by 70% and token count by 83%, MOSAIK matches the full-compute PixelDiT on GenEval and its DPG-Bench score drops by only 1.0 point. Compared to diverse efficiency paradigms, including temporal patch scheduling and feature caching, our approach delivers highly competitive performance at moderate budgets and consistently outperforms these baselines in highly constrained compute regimes.
