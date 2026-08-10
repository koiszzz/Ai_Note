# {\lambda}Split: Self-Supervised Content-Aware Spectral Unmixing for Fluorescence Microscopy

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Federico Carrara, Talley Lambert, Mehdi Seifi, Florian Jug　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2603.23647)

------

arXiv:2603.23647v3 Announce Type: replace

Abstract: In fluorescence microscopy, spectral unmixing aims to recover individual fluorophore concentrations from spectral images that capture mixed fluorophore emissions. Since classical methods operate pixel-wise and rely on least-squares fitting, their performance degrades with increasingly overlapping emission spectra and higher levels of noise, suggesting that a data-driven approach that can learn and utilize a structural prior might lead to improved results. Learning-based approaches for spectral imaging do exist, but they are either not optimized for microscopy data or are developed for very specific cases that are not applicable to fluorescence microscopy settings. To address this, we propose {\lambda}Split, a physics-informed deep generative model that learns a conditional distribution over concentration maps using a hierarchical Variational Autoencoder. A fully differentiable Spectral Mixer enforces consistency with the image formation process, while the learned structural priors enable state-of-the-art unmixing and implicit noise removal. We demonstrate {\lambda}Split on 3 real-world datasets that we synthetically cast into a total of 66 challenging spectral unmixing benchmarks. We compare our results against a total of 10 baseline methods, including classical methods and a range of learning-based methods. Our results consistently show competitive performance and improved robustness in high noise regimes, when spectra overlap considerably, or when the spectral dimensionality is lowered, making {\lambda}Split a new state-of-the-art for spectral unmixing of fluorescent microscopy data. Importantly, {\lambda}Split is compatible with spectral data produced by standard confocal microscopes, enabling immediate adoption without specialized hardware modifications.
