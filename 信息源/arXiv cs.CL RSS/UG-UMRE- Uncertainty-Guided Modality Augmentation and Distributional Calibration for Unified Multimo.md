# UG-UMRE: Uncertainty-Guided Modality Augmentation and Distributional Calibration for Unified Multimodal Relation Extraction

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Bo Kong, Liruiz Jia, Yi Liang, Chao Liu, Dongfang Han, Tianwei Yan, Yuan Liu, Shengquan Liu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04949)

------

arXiv:2608.04949v1 Announce Type: cross

Abstract: Unified Multimodal Relation Extraction (UMRE) aims to identify intra-modal and cross-modal relations between textual entities and visual objects. However, existing UMRE studies still encounter two critical issues: ignoring inherent aleatoric uncertainty causes noise propagation, and deep-seated heterogeneity between distinct modal distributions hinders alignment. To address these issues, we propose the Uncertainty-Guided UMRE Network (UG-UMRE). Specifically, we design an Uncertainty-Driven Unimodal Augmentation (UDUA) module, which models features as Gaussian distributions based on the Variational Information Bottleneck. By incorporating an uncertainty-aware self-supervised contrastive learning mechanism, UDUA effectively filters out noise while maintaining semantic consistency. Furthermore, we introduce the Joint Aleatoric Uncertainty Alignment (JAUA) module as a global semantic pre-calibration mechanism. JAUA leverages probabilistic distribution consistency to construct a shared latent space, eliminating the distributional gap by synchronizing cross-modal statistical properties, thereby laying a robust foundation for fine-grained interaction. Experiments on three benchmark datasets (UMRE, MORE, and MNRE) demonstrate that UG-UMRE achieves state-of-the-art performance. Further analysis validates the pluggable and effective performance of the proposed UDUA and JAUA modules.
