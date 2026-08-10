# DistMedVL: Distributional Vision-Language Alignment for Uncertainty-Aware Medical Image Segmentation

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Jiaxuan Li, Qing Xu, Xiangjian He, Yue Li, Daokun Zhang, Fiseha B. Tesema, Rong Qu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05683)

------

arXiv:2608.05683v1 Announce Type: new

Abstract: Cross-modal alignment of visual and textual representations is fundamental to multimodal medical image understanding, yet remains hindered by uncertainty in both modalities under real-world clinical conditions. Existing vision-language segmentation methods rely on deterministic cross-modal matching, which overlooks aleatoric uncertainty from ambiguous boundaries and epistemic uncertainty from limited training data, leading to fragile performance under domain shift. To address this issue, we propose DistMedVL, a probabilistic vision-language framework that introduces a lightweight Probabilistic Cross-Modal Adapter (PCM-Adapter) upon frozen encoders to explicitly model representational uncertainty. Specifically, the PCM-Adapter comprises two sequential modules for progressive probabilistic alignment. We first devise a Mahalanobis Alignment Module (MAM) that models textual tokens as Gaussian distributions and computes patch-text compatibility via Mahalanobis distance, yielding variance-conditioned matching that downweights unreliable feature dimensions. Moreover, we devise a Distribution Flow Module (DFM) that estimates modality-wise confidence parameters and performs vision-guided refinement of textual distributions, accommodating distributional variation across imaging modalities. Extensive experiments across eight medical segmentation benchmarks demonstrate that DistMedVL outperforms state-of-the-art methods with only 6.3M trainable parameters, exhibiting superior data efficiency, perturbation robustness and cross-dataset generalization.
