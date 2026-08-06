# Feature Bagging Provides Stability

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yuheng Ma, Qiang Sun　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2607.26964)

------

arXiv:2607.26964v2 Announce Type: replace-cross

Abstract: We study feature bagging through the lens of algorithmic stability. Feature bagging is an ensemble strategy that aggregates base learners trained on randomly subsampled feature subsets, possibly in a data-dependent manner. We introduce feature instability (FI), the feature-axis analogue of instance instability (II), which measures sensitivity to removing a single feature. Smaller values of II or FI correspond to stronger stability, and our experiments show that FI captures generalization-relevant information complementary to II. Within this framework, we analyze feature bagging in both a parametric linear model and a model-free setting inspired by recursive feature subsampling in random forests. In both settings, we establish formal guarantees showing that feature bagging improves the relevant stability relative to its non-bagged counterpart, with larger improvements under more aggressive subsampling. We further show that a modest number of bagging rounds is sufficient to approach the infinite-bagging stability level.
