# Grad-CAM for Vision Transformers: A Systematic Taxonomy and Audit of Methodological Ambiguity in Explainable AI

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Casey Wall, Longwei Wang, Rodrigue Rizk, KC Santosh　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05258)

------

arXiv:2608.05258v1 Announce Type: new

Abstract: Gradient-weighted Class Activation Mapping (Grad-CAM) is widely used to visualize model decisions, but it was originally formulated for convolutional neural networks, where spatial feature maps and channel dimensions have clear architectural meanings. Vision Transformers (ViTs) do not provide the same structure, instead representing images through tokens, attention, residual streams, and multimodal interactions. This paper presents a systematic taxonomy and literature audit of how Grad-CAM and related methods are adapted, justified, and reported for ViT-based architectures. From an initial search of more than 550 papers, we identify 175 papers that apply Grad-CAM or Grad-CAM-adjacent methods to ViTs. We find that most papers do not provide a full mathematical or implementation-level account of how Grad-CAM is adapted to transformer representations. To characterize this gap, we introduce a descriptive taxonomy of ViT Grad-CAM adaptations that makes explicit the feature locations, gradient targets, spatial reconstruction steps, and aggregation choices that are often left implicit. This taxonomy is not intended to prescribe a single correct adaptation, but to clarify the range of methodological choices being made. The study shows that Grad-CAM on ViTs is often treated as a trivial extension of CNN-based Grad-CAM, despite requiring nontrivial choices that affect rigor, reproducibility, and interpretation.
