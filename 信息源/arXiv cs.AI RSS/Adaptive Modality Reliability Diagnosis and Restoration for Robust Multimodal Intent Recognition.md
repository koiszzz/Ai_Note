# Adaptive Modality Reliability Diagnosis and Restoration for Robust Multimodal Intent Recognition

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Suraj Kumar, Mohnish Raj, Soumi Chattopadhayay, Chandranath Adak, Ayan Dutta　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.MM　|　原文：[打开链接](https://arxiv.org/abs/2608.03475)

------

arXiv:2608.03475v1 Announce Type: cross

Abstract: Multimodal intent recognition combines linguistic, acoustic, and visual evidence, but individual modalities may be noisy, missing, semantically conflicting, or disproportionately dominant. Existing methods typically infer modality importance implicitly and either reweight or suppress unreliable inputs, without determining whether a degraded modality can be repaired and subsequently trusted. We propose PRIME (Precision-weighted Reliability Inference and Modality rEstoration), a closed-loop reliability guided framework that jointly diagnoses, restores, and reassesses modality quality at the sample level. PRIME represents the weakness of each modality through a contextual log-variance estimated from complementary diagnostic evidence, including predictive confidence, epistemic disagreement, cross-modal consensus, and feature degeneracy. Because modality-reliability annotations are unavailable, the estimator is explicitly trained using controlled modality corruption with known degradation severity, together with a heteroscedastic uncertainty objective. Rather than directly discarding an unreliable modality, PRIME uses its estimated weakness to control a prototype-conditioned variational restoration module that reconstructs the degraded representation from complementary modalities. Crucially, reliability is re-estimated after restoration, allowing the model to determine whether the repaired representation has become sufficiently trustworthy to contribute to prediction. The resulting post-restoration precisions are used for inverse-variance multimodal fusion. Experiments on multimodal intent-recognition benchmarks show that PRIME maintains competitive clean-data performance while improving robustness under missing, noisy, conflicting, and modality-imbalanced conditions.
