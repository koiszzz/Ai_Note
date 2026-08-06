# Equivariant Music Transformer

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zixun Guo, Simon Dixon　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2608.03920)

------

arXiv:2608.03920v1 Announce Type: cross

Abstract: Humans recognize a musical passage even when it is shifted in time or transposed in pitch, indicating a notion of equivariance in the representation space. Our analysis, however, shows that standard music transformers map such time-shifted or pitch-transposed inputs onto uncorrelated representations: these models become progressively less equivariant as they scale in size or train longer. This suggests that in standard music transformers, additional model capacity is allocated to memorizing absolute patterns rather than capturing shared musical structures. In this paper, we propose the Equivariant Music Transformer (EMT), which enforces equivariance through self-distillation by jointly optimizing a next-token-prediction and an auxiliary equivariance regularization loss. We find that the additional equivariance loss acts as a beneficial regularizer, simultaneously improving next-token prediction and producing equivariant latent representations. Through both objective and subjective evaluations, EMT demonstrates superior equivariance and generative capability compared to data augmentation, feature engineering, and state-of-the-art (SOTA) baselines. More broadly, our findings reveal that standard language modeling methods alone do not capture music's translational symmetries, and dedicated inductive biases are required to produce better music representations. The code, weights and demos are available online.
