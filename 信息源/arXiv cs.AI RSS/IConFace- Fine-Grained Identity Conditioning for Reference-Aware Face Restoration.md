# IConFace: Fine-Grained Identity Conditioning for Reference-Aware Face Restoration

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Axi Niu, Jinyang Zhang, Senyan Qing　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2605.02814)

------

arXiv:2605.02814v2 Announce Type: replace-cross

Abstract: Severe face degradation can remove person-specific evidence, making restoration underdetermined. A generative prior may recover a sharp, plausible face yet miss localized traits that persist across images of the same person. Same-identity references supply this missing evidence, while the degraded observation anchors target structure. We propose \textbf{IConFace}, a fine-grained identity-conditioned framework that optionally conditions restoration on up to three same-identity references. Its hybrid concat backbone retains degraded and reference observations as dense visual tokens, preserving localized reference evidence. An identity pathway provides compact multi-reference guidance, while a degraded-structure pathway injects full-field and local-residual memories to reinforce target-aligned structure. We also introduce a human-audited benchmark that measures whether persistent localized identity details survive restoration. IConFace achieves leading reference compatibility, especially under severe degradation, and the highest observed preservation rate on this benchmark. Without references, it achieves leading learned perceptual quality across five blind-restoration benchmarks. Joint reference-based and paired-target evaluations show that reference-supported identity recovery and exact target agreement are complementary.
