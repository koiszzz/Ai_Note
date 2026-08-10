# SemDINO: Foundation Prior-Guided Cross-Temporal Semantic Alignment Network for Remote Sensing Change Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Xinyu Tong, Meihua Zhou, Jinxiao Sun, Zaiyan Zhang, Hongruixuan Chen, Lei Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2606.09772)

------

arXiv:2606.09772v3 Announce Type: replace

Abstract: Semantic change detection (SCD) in remote sensing aims to identify land-cover transitions between bi-temporal observations while suppressing pseudo-changes caused by illumination variations, seasonal differences, and registration errors. Although Vision Foundation Models (VFMs) provide transferable semantic priors, their application to SCD remains challenging due to the mismatch between foundation-model representations and task-specific spatial features, as well as temporal-order sensitivity. To address these issues, this paper proposes SemDINO, a foundation prior-guided framework that integrates transferable vision foundation model priors with hierarchical convolutional representations for cross-temporal semantic reasoning. Specifically, a Gated Pyramid Fusion (PyFu) module is developed to adaptively combine foundation-model semantics with CNN spatial details while reducing domain noise. A Multi-scale Temporal Bi-directional Transformer (M-TBTT) is introduced to achieve symmetric cross-temporal feature interaction and alleviate temporal-order bias. Furthermore, a Feature Change Enhancement (FeaCE) flow is designed to refine aligned representations and distinguish genuine semantic transitions from pseudo variations. Finally, a multi-branch decoupled prediction head jointly generates change masks, bi-temporal semantic maps, and edge constraints. Extensive experiments across five benchmark datasets demonstrate that SemDINO consistently outperforms state-of-the-art methods on both semantic and binary change detection tasks. The results validate the effectiveness of alignment-oriented representation learning for robust remote sensing change analysis.
