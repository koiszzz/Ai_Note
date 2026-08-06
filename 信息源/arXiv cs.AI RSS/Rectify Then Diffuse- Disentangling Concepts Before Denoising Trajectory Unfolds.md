# Rectify Then Diffuse: Disentangling Concepts Before Denoising Trajectory Unfolds

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ning Zhu, An Chen, Mengfei Zhao, Juntao Xu, Jingze Liang, Boyuan Gu, Liang-Jian Deng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03135)

------

arXiv:2608.03135v1 Announce Type: cross

Abstract: Text-to-image diffusion models can generate individual concepts well, but they often omit or merge concepts incorrectly with multiple concepts. We trace these failures to an early coordination bottleneck: before denoising begins, prompt-conditioned attention may allocate different concepts to strongly overlapping spatial support, which can keep their attention coupled as denoising proceeds. This observation motivates treating compositional generation as a boundary-condition problem rather than repeatedly controlling the evolving trajectory. To this end, we propose Rectify-then-Diffuse (RTD), a training-free framework that rectifies the initial allocation once before standard denoising. Firstly, we propose Soft-Overlap Disentanglement (SOD), which converts normalized overlap between pilot concept maps into a differentiable and layout-agnostic separation objective. Secondly, we introduce Isotropic Gradient Rectification (IGR), which normalizes the SOD gradient and applies a bounded latent displacement with a consistent scale across prompts and initializations. Extensive experiments show that RTD achieves state-of-the-art compositional fidelity and robust gains. On the AE-Bench object pair subset, RTD improves BLIP-VQA by 45.8% and ImageReward by 19.6% over CO3 while running 2.3$\times$ faster. Code will be released at https://github.com/Z-yiwei/rectify-then-diffuse
