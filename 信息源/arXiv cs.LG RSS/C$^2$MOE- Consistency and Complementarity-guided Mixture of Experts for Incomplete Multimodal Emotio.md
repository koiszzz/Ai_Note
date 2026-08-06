# C$^2$MOE: Consistency and Complementarity-guided Mixture of Experts for Incomplete Multimodal Emotion Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yuntao Shou, Tao Meng, Wei Ai, Keqin Li　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04013)

------

arXiv:2608.04013v1 Announce Type: new

Abstract: Recent advances in Multimodal Emotion Recognition in Conversations (MERC) highlight its reliance on complete multimodal inputs. However, real-world data often suffer from missing modalities due to transmission errors or user behavior, severely degrading model performance. Existing methods enhance robustness via cross-modal consistency learning but largely ignore modality complementarity, leading to biased reconstructions. To address this limitation, we propose C$2$MOE, a novel Consistency and Complementarity-guided Mixture of Experts framework for incomplete multimodal emotion learning. Our approach unifies representation learning and missing modality imputation within a principled information-theoretic framework. Specifically, multimodal knowledge is factorized into consistency and complementarity components via interaction-aware experts. Consistency is captured by maximizing cross-modal predictability, while complementarity is preserved by maximizing conditional entropy between modalities. Building upon this decomposition, C$2$MOE introduces a dual-branch prediction mechanism for robust imputation under missing modalities. The consistency branch aligns imputed features with the joint distribution by minimizing uncertainty, and the complementarity branch exploits modality-unique cues via entropy maximization. Finally, C$2$MOE employs a learnable reweighting module that dynamically assigns importance scores to each expert's output, yielding a robust and adaptive fusion for imputation. Extensive experiments on multiple MERC benchmarks demonstrate that C$2$MOE consistently surpasses state-of-the-art methods across various missing-modality settings, validating its robustness and generalization.
