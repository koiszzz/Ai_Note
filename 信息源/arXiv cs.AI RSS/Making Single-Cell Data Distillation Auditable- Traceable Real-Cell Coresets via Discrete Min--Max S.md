# Making Single-Cell Data Distillation Auditable: Traceable Real-Cell Coresets via Discrete Min--Max Selection

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yaodi Luo, Peize He, Lingbei Meng, Bowen Han, Zheng Lu, Jianqing Zhu, Lian Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：q-bio.GN　|　原文：[打开链接](https://arxiv.org/abs/2607.19426)

------

arXiv:2607.19426v2 Announce Type: replace-cross

Abstract: Large single-cell datasets are expensive to store, curate, and repeatedly reuse for model training. Data distillation can reduce this burden by building smaller training sets. However, many existing methods rely on synthetic cells. These synthetic cells do not retain direct correspondence with assayed cells and genes. This limits source-level inspection and biological traceability. Moreover, real-cell expression matrices are often sparse and noisy. In light of these challenges, we propose Minmax-CF, a label-aware characteristic-function selector for traceable single-cell data distillation. Minmax-CF formulates compression as a discrete min--max selection problem over characteristic-function directions. It uses entropy-regularized maximization to emphasize the least preserved directions. Greedy minimization ranks cells and genes by how much they reduce the resulting weighted error. The method alternates cell and gene selection under explicit axis-specific budgets. Across five coarse-lineage benchmarks and five compression budgets, Minmax-CF retains 95.3% of the Full-reference macro-F1 on average, with gaps that exceed one per-seed standard deviation. It also retains exact source-cell indices and original gene symbols. Compared with size-matched synthetic PCA-Centroid and Distribution Matching (DM) baselines, Minmax-CF achieves higher coarse-lineage macro-F1 in 24 of 25 comparisons against each baseline. It exceeds their average performance by 10.4% and 17.4%, respectively. Retained cells can also be projected onto independently computed embeddings for direct biological interpretation.
