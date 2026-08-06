# PRISMA: Improving the Accuracy-Latency Frontier of Diffusion-based PDE Solvers Using Physics-Informed Spectral Attention

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Medha Sawhney, Abhilash Neog, Mridul Khurana, Anuj Karpatne　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2512.01370)

------

arXiv:2512.01370v2 Announce Type: replace

Abstract: Diffusion-based solvers for partial differential equations (PDEs) are often bottle-necked by slow gradient-based test-time optimization routines that use PDE residuals for loss guidance. They additionally suffer from optimization instabilities and are unable to dynamically adapt their inference scheme in the presence of noisy PDE residuals. To address these limitations, we introduce PRISMA (PDE Residual Informed Spectral Modulation with Attention), a conditional diffusion neural operator that embeds PDE residuals directly into the model's architecture via an attention-inspired modulation mechanism in the spectral domain, enabling gradient-descent free inference. In contrast to previous methods that use PDE loss solely as external optimization targets, PRISMA integrates PDE residuals as integral architectural features, making it inherently fast, robust, accurate, and free from sensitive hyperparameter tuning. We show that PRISMA has competitive accuracy, at substantially lower inference costs, compared to previous methods across five benchmark PDEs especially with noisy observations, while using 10x to 100x fewer denoising steps, leading to 15x to 250x faster inference.
