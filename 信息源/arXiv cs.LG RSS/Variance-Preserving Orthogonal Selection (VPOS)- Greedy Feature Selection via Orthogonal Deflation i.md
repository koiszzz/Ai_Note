# Variance-Preserving Orthogonal Selection (VPOS): Greedy Feature Selection via Orthogonal Deflation in PCA Loading Space

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Baran Koseoglu, Berrin Yanikoglu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.23198)

------

arXiv:2607.23198v3 Announce Type: replace

Abstract: We present Variance-Preserving Orthogonal Selection (VPOS), an unsupervised feature-selection method that performs sequential orthogonal deflation in the variance-weighted principal component analysis (PCA) loading space $\mathbf{V}_d\mathbf{\Lambda}_d^{1/2}$. After each feature is selected, its loading direction is projected out of all remaining candidates, so subsequent selections cover complementary directions of the rank-$d$ covariance approximation while returning original variables. We establish rank-reduction guarantees and a determinant-growth interpretation, and distinguish VPOS from greedy selection on raw data, unweighted eigenvector pivoting, Principal Feature Analysis (PFA), and Principal Variable Selection (PVS). Experiments enforce $k\leq d$, tune method-specific parameters on validation observations, and evaluate on unseen outer folds. Across seven labelled benchmarks, VPOS improves held-out normalised reconstruction error over matched PCA without deflation on every dataset, with reductions of 1--78%. It obtains the lowest mean reconstruction error on Wine, Breast Cancer, and MNIST and is within 1.7% of the lowest error on CIFAR-10 and HighDim. On CIFAR-10, VPOS is approximately 24$\times$ faster than the closely related PVS baseline while incurring a 1.7% reconstruction gap. These results establish VPOS as an efficient covariance-coverage method, particularly when correlated high-dimensional data must be represented by a small set of identifiable original variables.
