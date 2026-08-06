# An interpretable Good--Turing restart criterion for k-means++

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Renato Cordeiro de Amorim　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.08243)

------

arXiv:2607.08243v2 Announce Type: replace

Abstract: The k-means++ algorithm is commonly restarted multiple times to avoid poor local optima, yet the number of restarts is almost always chosen arbitrarily and applied uniformly regardless of data set difficulty. This undermines any comparison relying on such a choice and wastes computation on easy data sets while potentially under-serving hard ones. Here, we introduce the Good-Turing Restart Criterion (GTRC). This combines a Good-Turing estimate, a proven unconditional bound, and a confidence-based bound on the probability that a further restart would improve on the current result, stopping once this probability falls below a user-specified tolerance. Our experiments on 34 real-world data sets show that GTRC identifies the point beyond which further k-means++ restarts yield only negligible improvement, achieving a more favourable balance between the number of restarts used and clustering quality than three existing stopping rules for multistart local search and popular fixed restart counts. Software: https://github.com/RCdeAmorim/Good-Turing-Restart-Criterion.
