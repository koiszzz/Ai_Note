# Contrastive Diffusion Alignment: Learning Structured Latents for Controllable Generation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ruchi Sandilya, Sumaira Perez, Charles Lynch, Lindsay Victoria, Benjamin Zebley, Derrick Matthew Buchanan, Mahendra T. Bhati, Nolan Williams, Timothy J. Spellman, Faith M. Gunning, Conor Liston, Logan Grosenick　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2510.14190)

------

arXiv:2510.14190v3 Announce Type: replace

Abstract: Diffusion models excel at generation, but their latent spaces are high dimensional and not explicitly organized for interpretation or control. We introduce ConDA (Contrastive Diffusion Alignment), a plug-and-play geometry layer that applies contrastive learning to pretrained diffusion latents using auxiliary variables (e.g., time, stimulation parameters, facial action units). ConDA learns a low-dimensional embedding whose directions align with underlying dynamical factors, consistent with recent contrastive learning results on structured and disentangled representations. In this embedding, simple nonlinear trajectories support smooth interpolation, extrapolation, and counterfactual editing while rendering remains in the original diffusion space. ConDA separates editing and rendering by lifting embedding trajectories back to diffusion latents with a neighborhood-preserving kNN decoder and is robust across inversion solvers. Across fluid dynamics, neural calcium imaging, therapeutic neurostimulation, facial expression dynamics, and monkey motor cortex activity, ConDA yields more interpretable and controllable latent structure than linear traversals and conditioning-based baselines, indicating that diffusion latents encode dynamics-relevant structure that can be exploited by an explicit contrastive geometry layer.
