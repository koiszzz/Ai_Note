# GRALS: GCN-Guided Redundancy-Aware Local Search for Minimum Vertex Cover

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Chanjuan Liu, Qiqi Bao, Yu Zhang, Enqiang Zhu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2503.06396)

------

arXiv:2503.06396v2 Announce Type: replace

Abstract: The minimum vertex cover (MVC) problem seeks to identify the smallest set of vertices that cover all edges in an undirected graph. As a fundamental NP-hard combinatorial optimization problem, MVC has been widely studied due to its applications in network analysis and system design. For large-scale instances, local search heuristics are among the most effective approaches, offering a practical trade-off between solution quality and computational efficiency. Most existing high-performance local search algorithms adopt a break-and-repair framework, where the repair process mainly restores feasibility but provides limited opportunities for enhancing the current solution's structure. We introduce GRALS, a local search framework that integrates vertex probability priors learned from a graph convolutional network with an expansion revelation elimination (ERE) operator. The learned priors guide the search toward promising regions, while the ERE operator dynamically identifies and eliminates redundant vertices to further enhance solution quality. Experiments conducted on 346 benchmark instances demonstrate that GRALS achieves the best-known solution for 335 instances, compared to 302 instances achieved by the strongest baseline. The advantage of GRALS is maintained across different time limits and is particularly evident on large-scale graphs with millions of vertices.
