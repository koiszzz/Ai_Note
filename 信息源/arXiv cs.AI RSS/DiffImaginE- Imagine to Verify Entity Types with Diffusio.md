# DiffImaginE: Imagine to Verify Entity Types with Diffusio

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Feng Zhang, Feiyu Han, Rongxin Yang, Yang Liu, Yancheng Chen, Rui Wang, Yingguang Yang, Tian Xueyun, Chongyang Zhang, Hao Zheng, Xu Kefu, Congjing Ran, Fuhai Chen, Bin Chong　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03025)

------

arXiv:2608.03025v1 Announce Type: new

Abstract: Multimodal named entity recognition (MNER) determines whether each candidate span and entity-type hypothesis is supported by joint textual and visual evidence. Existing imagine-and-compare verifiers map each (span, type) pair to one predicted visual feature, compressing diverse visual realisations into a single prototype and providing a compatibility score without explicit probabilistic semantics. We introduce DiffImaginE, which formulates MNER type verification as conditional latent diffusion inference. Given span-localised visual evidence, a type-conditioned denoiser predicts noise injected into its standardised latent. The resulting denoising error provides an ELBO-consistent surrogate for type-conditional negative log-likelihood, allowing competing type hypotheses to be ranked by how well they explain the observation. DiffImaginE retains a standard multimodal encoder stack and replaces the deterministic verifier with a classifier-free-guided diffusion scorer trained using Min-SNR weighting. We directly supervise per-type diffusion scores as classification logits, learn aggregation across noise levels, and use antithetic sampling to reduce Monte Carlo comparison variance. Our analysis shows that classifier-free guidance sharpens the induced type posterior and characterises when antithetic pairing reduces variance at equal denoiser cost. Experiments on Twitter-2015 and Twitter-2017 show consistent gains over a matched deterministic ImaginE control under the same encoder, auxiliary objectives, and evaluation protocol, supported by ablations and paired significance tests.
