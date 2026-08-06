# Compound and Parallel Modes of Tropical Convolutional Neural Networks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Mingbo Li, Liying Liu, Charles Wiranto, Ye Luo　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2504.06881)

------

arXiv:2504.06881v2 Announce Type: replace-cross

Abstract: Convolutional neural networks (CNNs) are foundational to many state-of-the-art computer vision systems, yet their reliance on multiplication-intensive computations poses challenges for deployment on resource-constrained devices. While tropical convolutional neural networks (TCNNs) reduce this computational burden by replacing multiplications with cheaper min/maxplus operations, they often do so at the cost of reduced model accuracy. To address this tradeoff, we introduce two novel extensions of tropical convolution: compound tropical convolution (cTCNN) and parallel tropical convolution (pTCNN). These operators combine minplus and maxplus algebraic operations within a single layer to enhance representational capacity while maintaining low computational cost. We provide an open-source implementation of these operators in a PyTorch-compatible framework, featuring optimized GPU kernels developed with TileLang. Through extensive experiments on image classification and semantic segmentation benchmarks, we demonstrate that our proposed cTCNN and pTCNN layers achieve competitive performance against standard CNNs while significantly reducing the number of multiplications. Moreover, we show that hybrid models, which integrate both tropical and conventional convolutions, can further improve the accuracy-efficiency balance. Our findings suggest that these tropical convolution variants are viable and effective components for building efficient deep learning models
