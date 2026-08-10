# IDperturb: Enhancing Variation in Synthetic Face Generation via Angular Perturbation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Fadi Boutros, Eduarda Caldeira, Tahar Chettaoui, Naser Damer　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2602.18831)

------

arXiv:2602.18831v2 Announce Type: replace

Abstract: Synthetic data has emerged as a practical alternative to authentic face datasets for training face recognition (FR) systems, especially as privacy and legal concerns increasingly restrict the use of real biometric data. Recent advances in identity-conditional diffusion models have enabled the generation of photorealistic and identity-consistent face images. However, many of these models suffer from limited intra-class variation, an essential property for training robust and generalizable FR models. In this work, we propose IDPERTURB, a simple yet effective geometric-driven sampling strategy to enhance diversity in synthetic face generation. IDPERTURB perturbs identity embeddings within a constrained angular region of the unit hyper-sphere, producing a diverse set of embeddings without modifying the underlying generative model. Each perturbed embedding serves as a conditioning vector for a pre-trained diffusion model, enabling the synthesis of visually varied yet identity-coherent face images suitable for training generalizable FR systems. Empirical results demonstrate that training FR on datasets generated using IDPERTURB yields improved performance across multiple FR benchmarks, compared to existing synthetic data generation approaches.
