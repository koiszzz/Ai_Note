# Attention Fusion for Bridge Deck Delamination Detection

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Alireza Moayedikia, Amirhossein Moayedikia　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2512.20113)

------

arXiv:2512.20113v4 Announce Type: replace

Abstract: Subsurface delaminations in reinforced concrete bridge decks escape conventional visual inspection, and the two principal sensing techniques used to find them are individually incomplete: Ground Penetrating Radar (GPR) penetrates deeply but degrades near the surface, while Infrared Thermography (IRT) resolves shallow defects but cannot reach deeper structure. This paper presents a framework for fusing the two modalities through hierarchical attention: temporal self-attention over GPR A-scans, channel-spatial attention over IRT patches, and cross-modal multi-head attention with learnable modality embeddings, coupled with decomposed aleatoric/epistemic uncertainty estimation. Beyond the architecture itself, which is lightweight at approximately 0.53M parameters with a closed-form accounting of where capacity resides, we contribute an elementary formal analysis. Two-token cross-modal attention is shown to be exactly a bank of per-sample learned gates; a gradient-allocation proposition quantifies how class imbalance starves attention parameters of minority-class signal and how loss reweighting trades that starvation for gradient variance; and closed-form metric floors under majority-class collapse anchor a diagnostic divergence between ranking metrics (AUC) and thresholded metrics (F1). The analysis suggests that adaptively weighted fusion, precisely because its feature-selection policy is learned, may be distinctively vulnerable to the severe class imbalance typical of operational bridge decks; establishing whether and when this occurs is deferred to empirical evaluation.
