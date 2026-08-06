# E4GEN: Event-level Explainable Extreme-Enhanced Time-series Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Lin Jiang, Dahai Yu, Ximiao Li, Guang Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2606.01634)

------

arXiv:2606.01634v2 Announce Type: replace-cross

Abstract: Generating realistic time series is essential for scientific research and real-world applications. However, existing methods often emphasize overall distributional fidelity while failing to faithfully capture extreme events. To advance existing research, we propose E4GEN, an explainable diffusion framework for extreme event-aware time-series generation. E4GEN provides systematic insights into when, what, and how to control extreme-event generation through three key components. First, E-Activator learns the dataset-adaptive extreme-control signal activation step during the denoising process without interfering with regular temporal components, including trend and seasonality. Second, E-Predictor determines what control signal to enforce through Self-Driven Semantic Prediction, where each sample derives its own control signal by inferring latent extreme-event information during generation. It also includes a novel Data-Conditioned Training, Noise-Initiated Sampling mechanism to address the issue of unavailable training labels. Third, E-Control specifies how to control extreme-event generation through a trainable Extreme Control Network, which transforms the semantic control signal into layer-wise signals and injects it into the denoising process. We evaluate E4GEN on six datasets with 17 metrics, and extensive experiments show that E4GEN outperforms state-of-the-art models across multiple dimensions, including overall fidelity, extreme-event fidelity, and downstream utility.
