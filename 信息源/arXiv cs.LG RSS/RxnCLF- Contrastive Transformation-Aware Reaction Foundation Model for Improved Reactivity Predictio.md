# RxnCLF: Contrastive Transformation-Aware Reaction Foundation Model for Improved Reactivity Prediction

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yiting Zheng, Cheng Fang, Anthony Donofrio, Haote Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.06259)

------

arXiv:2608.06259v1 Announce Type: new

Abstract: Reaction yield prediction remains challenging because labeled data are scarce and reaction space is both combinatorially large and sparsely populated, limiting the generalization of existing reaction representations. String-, fingerprint-, and graph-based reaction encodings only partially capture chemical transformations, making accurate prediction difficult for reactions with complex substrates. We propose reaction contrastive learning foundation (RxnCLF), a self-supervised contrastive framework for reaction representation learning. RxnCLF is built on a condensed reaction graph (CRG) that unifies reactant and product information into a single graph, enabling the model to learn explicit and enriched transformation structure rather than disconnected graphs. Pretrained on 1.7 million Pistachio reactions, RxnCLF learns a compact and continuous latent space that captures both reaction-center features and broader side chain contexts, making it transformation-aware and chemically interpretable. Fine-tuned on multiple yield prediction benchmarks, including Buchwald-Hartwig, Pd-catalyzed BH coupling, and proprietary HTE C-N coupling and amide formation datasets, RxnCLF consistently outperforms graph and sequence-based baselines, improving R2 and achieving the best performance overall. Our results highlight the promise of CRG-based RxnCLF as a scalable reaction foundation model, with the potential to generalize across broader reaction spaces and support diverse downstream reaction informatics tasks, including regioselectivity prediction, enantioselectivity prediction, and reaction condition optimization.
