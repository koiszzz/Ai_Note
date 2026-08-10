# EqDeepRx: Learning a Scalable and Interference Mitigating MIMO Receiver

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Mikko Honkala, Dani Korpi, Elias Raninen, Janne M. J. Huttunen　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：eess.SP　|　原文：[打开链接](https://arxiv.org/abs/2602.11834)

------

arXiv:2602.11834v2 Announce Type: replace-cross

Abstract: While machine learning (ML)-based receiver algorithms have received a great deal of attention in the recent literature, they often suffer from poor scaling with increasing spatial multiplexing order and lack of explainability and generalization. This paper presents EqDeepRx, a practical deep-learning-aided multiple-input multiple-output (MIMO) receiver, which is built by augmenting linear receiver processing with carefully engineered ML blocks. At the core of the receiver model is a shared-weight DetectorNN that operates independently on each spatial stream or layer, enabling near-linear complexity scaling with respect to multiplexing order. To ensure better explainability and generalization, EqDeepRx retains conventional channel estimation and augments it with a lightweight DenoiseNN that learns frequency-domain smoothing. To reduce the dimensionality of the DetectorNN inputs, the receiver utilizes two linear equalizers in parallel: a linear minimum mean-square error (LMMSE) equalizer with interference-plus-noise covariance estimation and a regularized zero-forcing (RZF) equalizer. The parallel equalized streams are jointly consumed by the DetectorNN, after which a compact DemapperNN produces bit log-likelihood ratios for channel decoding. 5G/6G-compliant end-to-end simulations across multiple channel scenarios, pilot patterns, and inter-cell interference conditions show improved error rate and spectral efficiency over a conventional baseline, while maintaining low-complexity inference and support for different MIMO configurations without retraining.
