# Dual-Attention and Adversarial Transfer Networks for Sim-to-Real Cross-Orientation Wireless Sensing

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Linfeng Du, Kehan Wu, Tong Zhang, Rui Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05664)

------

arXiv:2608.05664v1 Announce Type: new

Abstract: Millimeter-wave human activity recognition suffers significant performance degradation when the user's orientation changes relative to the sensing system, yet collecting labeled multi-orientation data is labor-intensive and costly. To eliminate the need for exhaustive multi-orientation measured data, we develop a physics-guided simulator that synthesizes orientation-diverse wireless training data from single-orientation motion. Specifically, to suppress orientation-induced feature variations, we propose a dual-attention network that extracts activity-discriminative and orientation-robust representations from dual-link Doppler spectrograms. To bridge the simulation-to-reality gap, we introduce an adversarial unsupervised transfer learning mechanism that aligns feature distributions using only a small number of unlabeled target-domain samples. The S2M-Sense platform shows high fidelity in reproducing real-world signatures, validated against 60.48 GHz mmWave measured data with an average structural similarity index measure (SSIM) of 0.84 between simulated and measured Doppler spectrograms across all 4 activities and 4 orientations. Experimental results show that S2M-Sense achieves 88.33% recognition accuracy using only the dual-link multi-orientation simulated dataset, which improves to 95% after simulation-to-reality transfer learning with as few as 16 unlabeled measured samples. Both cases with and without transfer learning outperform state-of-the-art cross-domain sensing methods.
