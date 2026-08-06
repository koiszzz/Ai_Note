# ACA-GS: Adaptive-Capacity Anchored Gaussian Splatting for Compact Dynamic Radiance Fields

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Seunghyeon Song, Joo Chan Lee, Chanung Park, Jun Young Jeong, Minseo Lee, Eunbyung Park, Jong Hwan Ko　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.04581)

------

arXiv:2608.04581v1 Announce Type: new

Abstract: Recent advances in 4D Gaussian Splatting (4DGS) enable high-fidelity, real-time spatiotemporal rendering, but expose a fundamental trade-off between motion expressiveness and storage efficiency. While anchor-based designs achieve compactness through anchor-level parameter sharing, their rigid uniform parametrization enforces fixed Neural Gaussian counts and feature budgets per anchor. Consequently, insufficient fidelity is addressed by excessive anchor density, rather than lightweight, targeted increases in Neural Gaussian count or feature capacity, resulting in memory waste. To overcome this rigidity, we introduce an adaptive-capacity anchor-based framework that dynamically allocates the representational capacity based on local spatiotemporal demands. Adaptive Anchor Cardinality varies the number of Neural Gaussians per anchor, concentrating primitives in regions of high geometric or motion complexity while suppressing redundancy. In parallel, Adaptive Anchor Feature Masking modulates anchor-level feature channels, assigning rich features to complex regions and lightweight representations to simpler ones. Experiments on MPEG, Panoptic Sports, and N3DV datasets demonstrate substantial storage reduction without degrading visual quality. Notably, on challenging MPEG sequences with complex motion, our method achieves up to 1.5x higher compression than state-of-the-art anchor-based methods while preserving comparable quality.
