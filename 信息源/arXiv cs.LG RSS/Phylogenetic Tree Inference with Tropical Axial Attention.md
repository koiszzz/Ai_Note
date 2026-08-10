# Phylogenetic Tree Inference with Tropical Axial Attention

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Chris Teska, Kurt Pasque, Ruriko Yoshida, Baran Hashemi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：q-bio.PE　|　原文：[打开链接](https://arxiv.org/abs/2605.13894)

------

arXiv:2605.13894v2 Announce Type: replace-cross

Abstract: In this work, we introduce a Tropical Axial Attention neural reasoning architecture that replaces vanilla softmax dot-product attention with max-plus operators, inducing a piecewise-linear structure aligned with dynamic programming formulations. From multi-species sequence alignments, our model learns all possible pairwise distances and is trained using a combination of $\ell_1$ and tropical symmetric distance metric losses with an ultrametric violation penalty. We leverage the well known isomorphic relationship between the space of all phylogenetic trees with $n$ species and tropical Grassmannian to show that tropical attention provides a natural geometric framework for phylogenetic inference.

On empirical $DS1-DS11$ alignments, where true trees are unknown, the tropical model achieves the lowest MAE to its FastME-induced tree metric on every dataset, with a MAE reductions averaging 81.5% relative to Phyloformer and 98.4% relative than Phyloformer 2. These results suggest that tropical attention is a useful geometric inductive bias for neural phylogenetic inference, especially under distribution shift and when tree-metric consistency is important.
