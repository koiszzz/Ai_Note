# HexMIL: Hierarchical Attention MIL for Ante-Hoc Explainable Detection of AI-Manipulated CT Volumes

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Orazio Pontorno, Luca Guarnera, Zahid Akhtar, Sebastiano Battiato　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05101)

------

arXiv:2608.05101v1 Announce Type: new

Abstract: The emergence of medical deepfakes, i.e., medical images manipulated by deep generative models, poses a significant threat to clinical workflows. However, existing detectors suffer from two critical limitations: poor generalization to unseen generative architectures for manipulation detection and lack of interpretability. In this context, we present HexMIL (Hierarchical EXplainable Multiple Instance Learning), a mask-free medical deepfake detector that simultaneously addresses both limitations using only binary volume-level supervision. HexMIL decomposes each CT volume into a two-level hierarchy of patches and slices, aggregated via independent Gated Attention modules whose weights are directly combined into a full-resolution 3D attention volume that localizes the manipulated sub-region without any pixel-level annotation. Unlike post-hoc methods such as Grad-CAM, HexMIL's attention weights constitute the exact forward computation driving the classification decision, providing ante-hoc and structurally faithful spatial attribution. We evaluate HexMIL on M3DSynth and CT-GAN datasets under a rigorous cross-generator generalization protocol, training on a single generative architecture and testing on unseen ones. HexMIL outperforms all baselines by $+9.1$ AUC and $+9.4$ F1 in out-of-domain classification, and achieves the best average IoU and Pointing Game score in localization. Project page: opontorno.github.io/hexmil.
