# Design Choices That Matter: A Functional ANOVA Analysis for Remote Sensing Multi-Label Classification

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Maryam Gholami Shiri, Eva Tuba, Sa\v{s}o D\v{z}eroski, Tome Eftimov, Ana Nikolikj　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.04702)

------

arXiv:2608.04702v1 Announce Type: new

Abstract: Benchmarking deep learning (DL) models for multi-label classification (MLC) of remote sensing images (RSI) typically yields rankings that do not generalize beyond the evaluated datasets. In this work, we move beyond rankings by employing functional analysis of variance (fANOVA) to systematically quantify the contributions of individual design choices and their interactions to performance variability. We conduct two empirical analyses covering 48 and 20 DL models, respectively, spanning design choices such as network architecture, fine-tuning strategy, learning strategy, and initialization. By applying fANOVA across seven MLC RSI datasets, we construct dataset meta-representations that capture design-choice sensitivity profiles. Hierarchical clustering of these meta-representations reveals that datasets naturally group according to how they respond to design decisions, with patterns strongly linked to intrinsic dataset properties such as scale, spatial resolution, and label space complexity. Our findings show that for large-scale datasets, fine-tuning strategy and architecture are dominant factors, while in data-limited regimes, initialization becomes decisive. For intermediate regimes, the interaction between architecture and learning strategy governs performance.
