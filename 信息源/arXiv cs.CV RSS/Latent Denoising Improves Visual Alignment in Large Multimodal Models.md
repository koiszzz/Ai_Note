# Latent Denoising Improves Visual Alignment in Large Multimodal Models

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Dhruv Parikh, Jacob Fein-Ashley, Rajgopal Kannan, Viktor Prasanna　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2604.21343)

------

arXiv:2604.21343v2 Announce Type: replace

Abstract: Large Multimodal Models (LMMs) such as LLaVA are typically trained with an autoregressive language modeling objective, providing only indirect supervision to visual tokens. This often yields weak internal visual representations and brittle behavior under distribution shift. Inspired by recent progress on latent denoising for learning high-quality visual tokenizers, we show that the same principle provides an effective form of visual supervision for improving internal visual feature alignment and multimodal understanding in LMMs. We propose a latent denoising framework that corrupts projected visual tokens using a saliency-aware mixture of masking and Gaussian noising. The LMM is trained to denoise these corrupted tokens by recovering clean teacher patch features from hidden states at a selected intermediate LLM layer using a decoder. To prevent representation collapse, our framework also preserves the teacher's intra-image similarity structure and applies intra-image contrastive patch distillation. During inference, corruption and auxiliary heads are disabled, introducing no additional inference-time overhead. Across a broad suite of standard multimodal benchmarks, our method consistently improves visual understanding and reasoning over strong baselines, and yields clear gains on compositional robustness benchmarks (e.g., NaturalBench). Moreover, under ImageNet-C-style non-adversarial common corruptions applied to benchmark images, our method maintains higher accuracy and exhibits reduced degradation at both moderate and severe corruption levels. Our code is available at https://github.com/dhruvashp/latent-denoising-for-lmms.
