# Season: Spectrum-Aware Orthogonal Gradient Refinement for Transfer-Based Adversarial Attacks

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Tianyi Wang, Zhenghao Gao, Shengjie Xu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04441)

------

arXiv:2608.04441v1 Announce Type: new

Abstract: Transfer-based adversarial attacks often transfer poorly across heterogeneous architectures because CNNs favor local textures while Vision Transformers (ViTs) rely on global shapes. We propose Season, a spectrum-aware orthogonal gradient refinement framework for L-infinity transfer attacks against black-box target models on ImageNet, using a white-box surrogate. Season decomposes each update into a low-frequency branch capturing structural cues and a high-frequency branch capturing textures. A low-saliency guidance scheme reallocates high-frequency energy to background regions, preserving foreground structures that ViTs depend on. An orthogonal projection then forces the textural update to lie in the orthogonal complement of the structural direction, mitigating feature interference. As a training-free plug-and-play wrapper, Season enhances eight gradient-stabilization and input-enhancement attacks without modifying their cores. Across eight CNN, ViT, and MLP targets, Season improves transfer success rate by 6.6 percentage points on average and up to 16.0 points over strong baselines under a unified protocol.
