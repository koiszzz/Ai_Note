# Task-Oriented Candidate-Latent Feedback for Coarse-to-Fine Sensing in Distributed OFDM-ISAC Networks

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shiv Shankar, Radha Krishna Ganti, J Klutto Milleth　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：eess.SP　|　原文：[打开链接](https://arxiv.org/abs/2608.03319)

------

arXiv:2608.03319v1 Announce Type: cross

Abstract: Future integrated sensing and communication (ISAC) architectures separate the sensing entity (SE) that acquires measurements from the sensing function (SF) that performs inference, creating a need for compact, task-oriented feedback on the SE-SF interface. Forwarding the raw channel frequency response or full per-link delay-Doppler-azimuth-elevation (DDAE) tensor is prohibitively expensive, while peak-only reporting discards target-discriminative structure under clutter. We propose a learning-based coarse-to-fine sensing pipeline with candidate-latent feedback for single-target estimation. At the SE, a lightweight convolutional scorer produces a dense delay-Doppler proposal map from pilot-based OFDM channel estimates, and a learned encoder constructs K compact C-dimensional candidate tokens by fusing per-candidate azimuth-elevation patches, normalized position, and confidence cues. The latents are uniformly quantized post-training to b bits and transmitted under a finite budget B_fb = bKC + 18K + 16 bits to the SF, which performs cross-candidate refinement, reranking, and joint four-parameter estimation. On a ray-traced urban scene with static and dynamic clutter, three operating points in the (K, C, b) design space achieve 96.33-98.88% detection at 107-806 bytes per coherent processing interval, compression ratios of 1.2-9.2 x 10^4 over the 8-bit DDAE magnitude tensor, reducing the SE-SF interface from multi-Gbit/s to sub-Mbit/s rates. Cross-scene evaluation on an independent campus-scale environment achieves 98.79-99.50% detection and at-or-better angular accuracy without retraining, indicating that the learned representation captures target-relevant structure that transports across scenes of comparable or lower clutter density.
