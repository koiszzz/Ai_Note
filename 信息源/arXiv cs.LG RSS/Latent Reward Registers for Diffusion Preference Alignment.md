# Latent Reward Registers for Diffusion Preference Alignment

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yuanshen Guan, Zipeng Feng, Zhiwei Xiong, Peiqin Sun　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03929)

------

arXiv:2608.03929v1 Announce Type: new

Abstract: Aligning diffusion models with human preferences usually relies on a sparse terminal reward evaluated on the final generated samples, presenting a severe temporal credit-assignment challenge across the multi-step denoising process. We propose Latent Reward Registers, a mechanism that estimates terminal preference directly from intermediate noisy latents by prepending learnable, position-free register tokens to the input sequence of a frozen Diffusion Transformer (DiT). This independent readout mechanism extracts latent reward evidence without altering the generator's hidden states or velocity field. The resulting dense, differentiable reward signal throughout the full denoising process facilitates two alignment strategies. For training, Reward-Gradient On-Policy Distillation (RG-OPD) distills reward-guided updates along on-policy trajectories, bypassing the computationally expensive rollouts of standard policy gradients. For inference, Reward-Guided Sampling (RGS) steers trajectories via magnitude-matched reward gradients without parameter updates. Empirically, at high noise levels (u = 0.8), the registers reach the highest pairwise accuracy among the evaluated latent reward models. Furthermore, RG-OPD outperforms online reinforcement learning baselines while reducing GPU hours by up to 33x, and RGS establishes a new state-of-the-art among training-free methods, strictly enhancing both alignment and perceptual metrics. Code and weights are available at https://github.com/Guanys-dar/latent-reward-register
