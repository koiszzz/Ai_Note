# Heteroscedasticity of Denoising Score Matching with Generalised Smooth Noise

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Juyan Zhang, Rhys Newbury, Xinyang Zhang, Tin Tran, Dana Kulic, Michael Burke　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2508.01597)

------

arXiv:2508.01597v2 Announce Type: replace

Abstract: Score Matching (SM) is a powerful framework for estimating the log-density derivatives of a distribution without calculating its normalizing constants. This capability has made it a cornerstone across multiple domains, from classical sta- tistical estimation and energy-based models to modern diffusion-based generative models. In practice, these models rely almost exclusively on Denoising Score Matching (DSM) as a tractable proxy for score matching. This ubiquity naturally raises a fundamental question: Is DSM truly "score matching for free"? In this work, we demonstrate that DSM is not a perfect substitute. We prove that the denoising objective is inherently heteroscedastic, the variance of model parame- ters fluctuates unpredictably based on both noise levels and the underlying data geometry. This instability is baked into the mathematical structure of the DSM. To address this, we derive an ideal weighting function that equalizes this variance, yielding a homoscedastic generalization of DSM. Since the ideal weights are of- ten empirically inaccessible, we show that a practical approximation weighting function via Taylor expansion reduces gradient variance during training, at the cost of statistical optimality. Notably, this provides a theoretical justification for an existing heuristic weight used in Isotropic Gaussian Diffusion. We validate our theory across different perturbed distributions and for higher-order scores.
