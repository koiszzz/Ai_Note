# ProPRL: Property-Aware Prerequisite Relation Learning in Educational Knowledge Graphs

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xinghe Cheng, Jiapu Wang, Chaobo He, Ruihai Dong, Quanlong Guan　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03006)

------

arXiv:2608.03006v1 Announce Type: new

Abstract: Prerequisite relation learning is central to adaptive instruction, yet existing methods often formulate it as conventional link prediction, limiting their ability to adaptively integrate complementary educational evidence for individual candidate pairs and to discourage contradictory reverse predictions. We propose ProPRL, a Property-aware Prerequisite Relation Learning framework. ProPRL first learns complementary concept representations from a concept-resource hypergraph and a directed learning-behavior graph, where direction-preserving personalized propagation aggregates multi-hop behavioral evidence. It then employs a Pair-conditioned Gate to adaptively weight and fuse the two views for each candidate ordered concept pair. Finally, an \textit{Irreversibility Constraint} introduces an anti-symmetry regularizer that penalizes simultaneously high confidence in both directions of the same concept pair. Experiments on multiple real-world educational datasets show that ProPRL achieves state-of-the-art performance on prerequisite relation learning.
