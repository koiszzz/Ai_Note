# Beyond Feature Importance: A Comparative Analysis of Pattern Detection Methods in Cluster Interpretation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Benjamin Connor, Anna Jurek-Loughrey, Lu Bai, Muhammad Fahim　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05880)

------

arXiv:2608.05880v1 Announce Type: new

Abstract: Interpreting clustering outcomes remains a fundamental challenge in data analysis, particularly in domains such as healthcare where meaningful patterns must be extracted from high-dimensional data. While numerous explainability techniques exist, they are primarily designed to assess feature importance or provide local instance-level explanations rather than to identify structured patterns present within clusters. This work presents a comparative evaluation of commonly used post-hoc analysis methods for pattern detection in clustering results. To enable controlled evaluation, we introduce a suite of synthetic datasets in which predefined patterns are systematically injected. Three widely used techniques are evaluated: a Random Forest surrogate model with permutation feature importance, LIME (Local Interpretable Model-agnostic Explanations), and principal component analysis. Results demonstrate that although each method can successfully recover relevant features, none consistently detects all injected pattern types. These findings high- light a critical gap between existing explainability tools and the requirements of pattern-level cluster interpretation, motivating the development of dedicated pattern detection methodologies.
