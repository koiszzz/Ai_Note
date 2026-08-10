# Handling Missing Data in Probabilistic Regression Trees

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Taiane Schaedler Prass, Alisson Silva Neimaier, Guilherme Pumi　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.06195)

------

arXiv:2608.06195v1 Announce Type: cross

Abstract: Probabilistic Regression Trees (PRTrees) are a smooth and consistent alternative to classical regression trees, producing continuous predictions through probabilistic split assignments. This paper extends the PRTree framework to accommodate missing predictor values directly during tree construction, eliminating the need for prior imputation. Three strategies are proposed, each exploiting the available information differently: a uniform-probability approach, a partial-observation approach, and a dimension-reduced smoothing approach. These modifications are defined to preserve the fundamental probabilistic properties of the original methodology, including probability conservation and marginal compatibility, under arbitrary patterns of missing covariate values. The proposed methods are evaluated on several real-world datasets exhibiting different levels of missingness and are compared with classical regression trees. The results show that the effectiveness of probabilistic tree construction depends strongly on the treatment of missing observations. Across the considered datasets, the fill strategy emerged as the dominant modeling component, often exerting a larger influence on predictive performance than either the smoothing distribution or the proxy-selection criterion. In datasets where a substantial proportion of observations contained missing predictor values, the proposed methods frequently outperformed CART, while maintaining the interpretability and flexibility of tree-based models.
