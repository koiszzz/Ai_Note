# ChronoVision: Temporal Reasoning via Latent State Reconstruction

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yifan Shen, Jian Xu, Boyi Li, Yuner Zhang, Tianjiao Yu, Bingxuan Li, Houze Yang, Rushi Wang, Xu Cao　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05631)

------

arXiv:2608.05631v1 Announce Type: new

Abstract: Multimodal large language models excel at passive perception but struggle with complex visual cognitive tasks requiring multi-step temporal reasoning. This degradation largely stems from the inherent ambiguity of language-based reasoning, which often fails to accurately articulate continuous visual transformations. To address this, we propose ChronoVision, a multimodal framework designed to align visual logic with latent imagery. During supervised fine-tuning, a Reconstructive Visual Head predicts the latent representation of the final transformed state, while an ROI Attention Locating module focuses the model on key visual evidence via semantic span queries. In post-training, we apply reinforcement learning with an implicit process grounding mechanism, guided by a composite reward function that evaluates outcome correctness, latent process alignment, and unsupervised visual focus. Furthermore, we introduce Vbvr-VQA, a novel dataset that evaluates temporal tracking by reformulating video reasoning into a strict image-ordering task. Experiments demonstrate that ChronoVision achieves state-of-the-art performance on Vbvr-VQA with 74.8% in-domain and 71.6% out-of-domain accuracy, alongside a strong 55.0% accuracy on IntPhys2, a highly challenging cross-domain benchmark.
