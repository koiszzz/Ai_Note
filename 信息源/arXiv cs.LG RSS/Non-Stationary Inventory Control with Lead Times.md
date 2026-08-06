# Non-Stationary Inventory Control with Lead Times

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nele H. Amiri, Sean R. Sinclair, Maximiliano Udenio　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：math.OC　|　原文：[打开链接](https://arxiv.org/abs/2602.05799)

------

arXiv:2602.05799v2 Announce Type: replace-cross

Abstract: We study non-stationary single-item, periodic-review inventory control problems in which the demand distribution is unknown and may change over time. We analyze how demand non-stationarity affects learning performance across inventory models, including systems with demand backlogging or lost-sales, both with and without lead times. For each setting, we propose an adaptive online algorithm that optimizes over the class of base-stock policies and establish performance guarantees in terms of dynamic regret relative to the optimal base-stock policy at each time step. The algorithms leverage the convexity and one-sided feedback structure of inventory costs to enable counterfactual policy evaluation despite demand censoring. In backlogging systems and lost-sales models with zero lead time, our algorithms adapt to unknown demand changes while matching, up to logarithmic factors, the rates known for the corresponding stationary learning problems. In lost-sales systems with positive lead times, the combination of demand censoring and delayed replenishment restricts counterfactual policy evaluation and leads to weaker regret guarantees. We complement the theoretical analysis with simulation results showing that our methods significantly outperform existing non-oracle benchmarks.
