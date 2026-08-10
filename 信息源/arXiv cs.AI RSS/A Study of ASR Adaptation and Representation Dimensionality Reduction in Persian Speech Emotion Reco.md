# A Study of ASR Adaptation and Representation Dimensionality Reduction in Persian Speech Emotion Recognition Using Whisper

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ali Shendabadi, Parnia Izadirad, Mostafa Salehi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05165)

------

arXiv:2608.05165v1 Announce Type: cross

Abstract: Speech Emotion Recognition (SER) in low-resource languages remains a challenging problem due to limited labeled data. In this work, we study the use of Whisper for Persian SER with a particular focus on representation dimensionality reduction and language-specific model adaptation. We propose a SER framework in which frame-level embeddings extracted from the Whisper encoder are reduced in dimensionality using PCA, eliminating the need for learned projection layers and substantially reducing the number of trainable parameters. The reduced representations are aggregated using an attention-based pooling mechanism and classified with a lightweight prediction head. In addition, we investigate whether fine-tuning Whisper on a Persian automatic speech recognition (ASR) task improves downstream SER performance. Experiments conducted on the ShEMO dataset under a speaker-independent evaluation protocol show that PCA-based dimensionality reduction consistently improves emotion recognition performance while reducing training latency and memory usage. ASR fine-tuning yields only modest gains for SER, suggesting limited transfer from language adaptation to emotion-related representations under the evaluated conditions. These findings provide practical insights into the efficient use of large pretrained speech models for emotion recognition in low-resource languages.
