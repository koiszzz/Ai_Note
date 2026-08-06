# UBLLIE: Unified Backlight and Low-Light Image Enhancement

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yasmin Yasin, Muhammad Usman, Ibrahim Radwan, Saeed Anwar　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04429)

------

arXiv:2608.04429v1 Announce Type: new

Abstract: Backlit and low-light images often suffer from severe exposure imbalance or global underexposure, presenting significant challenges for both visual perception and downstream computer vision tasks. In this paper, we propose a unified, unsupervised enhancement framework that addresses both types of degradation without relying on paired ground-truth data. Our approach builds on CLIP-guided prompt learning to semantically supervise enhancement using learned positive and negative textual prompts. To improve the quality of our improvements over prior work, we design a symmetric residual U-Net backbone augmented with an Atrous Spatial Pyramid Pooling module. This architecture captures multi-scale contextual information, enabling adaptive correction under spatially heterogeneous illumination. During training, the enhancement network is guided by CLIP-based semantic similarity losses and refined via an iterative prompt optimization mechanism. Extensive experiments on both paired and unpaired datasets, including BAID, Backlit300, LOL, and VE-LOL-L, demonstrate that our framework consistently outperforms state-of-the-art supervised and unsupervised methods in terms of fidelity, perceptual quality, and generalization. Furthermore, our work emphasizes the need for stronger benchmarking protocols for backlit enhancement, a relatively underexplored area. The proposed framework provides a robust, scalable solution for real-world illumination enhancement across diverse lighting conditions.
