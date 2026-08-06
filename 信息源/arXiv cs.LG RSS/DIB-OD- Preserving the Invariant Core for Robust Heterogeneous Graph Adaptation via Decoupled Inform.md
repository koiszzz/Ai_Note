# DIB-OD: Preserving the Invariant Core for Robust Heterogeneous Graph Adaptation via Decoupled Information Bottleneck and Online Distillation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yang Yan, Yunxuan Li, Qiuyan Wang, Tianjin Huang, Qiudong Yu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2604.10882)

------

arXiv:2604.10882v3 Announce Type: replace

Abstract: Graph pre-training can facilitate knowledge transfer across graph datasets, but severe structural and feature shifts may cause negative transfer and adaptation-induced overwriting of reusable knowledge. We propose DIB-OD, a heterogeneous graph adaptation framework that combines a Decoupled Information Bottleneck with Online Distillation. A multiview teacher first learns a compressed, task-relevant representation, which is distilled into a transferable core branch and a complementary residual branch. Mutual-information objectives and HSIC-based dependence regularization discourage information overlap between the branches, while a confidence-aware semantic regularizer and a frozen teacher anchor reliable pretrained information during target-domain adaptation. Experiments on seven graph-classification datasets spanning chemical, biological, and social-network domains show consistent improvements over representative baselines, particularly under challenging cross-type transfer.
