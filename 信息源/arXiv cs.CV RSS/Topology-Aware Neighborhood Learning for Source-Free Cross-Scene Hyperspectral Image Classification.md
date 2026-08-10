# Topology-Aware Neighborhood Learning for Source-Free Cross-Scene Hyperspectral Image Classification

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Qingmei Li, Juepeng Zheng, Jiarui Zhang, Jianxi Huang, Haohuan Fu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05964)

------

arXiv:2608.05964v1 Announce Type: new

Abstract: Domain adaptation has advanced cross-scene hyperspectral image classification, significantly improving discriminative capability in complex scenarios. However, privacy rules or storage limits often block access to data from the source domain. Conventional domain adaptation methods become impractical, severely restricting their utility in realistic remote sensing scenarios. To tackle this challenge, we propose a topology-aware source-free learning framework. We first introduce the entropy momentum pseudo-labeling (EMP) to refine k-means assignments by leveraging entropy-aware confidence and temporal prediction momentum. Under the guidance of the refined pseudo-labels, we further utilize the contextual neighborhood topology (CNT) to exploit the intrinsic geometric structure of the target feature space. Combining the global structural information extracted by collaborative representation with the local similarity information modeled by nearest neighbor search, the CNT accomplishes the comprehensive encoding of manifold-level geometric properties in the target domain feature space. The overall objective integrates cross-entropy on refined pseudo-labels, log inner product-based topology consistency, and an information-maximization term for balanced classification, ensuring stable adaptation in the source-free setting. Extensive experiments on three typical cross-scenarios demonstrate that the proposed method exceeds state-of-the-art performance, and ablation studies further validate the contribution of each module. The results highlight the critical role of topology-aware modeling in achieving robust and accurate classification without source data.
