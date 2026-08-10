# Potential Matching Optimal Transport: Continuous Normalizing Flows for Exact $p$-Wasserstein Dynamics

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Lishuo Zhang (School of Mathematical Sciences, Shanghai Jiao Tong University), Ruizhi Huang (School of Mathematical Sciences, Shanghai Jiao Tong University), Yang Yu (School of Mathematical Sciences, Shanghai Jiao Tong University), Lei Li (School of Mathematical Sciences, Shanghai Jiao Tong University, Institute of Natural Sciences, MOE-LSC, Shanghai Jiao Tong University)　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05666)

------

arXiv:2608.05666v1 Announce Type: new

Abstract: We introduce Potential Matching Optimal Transport (PMOT), a potential-flow framework for general $p$-cost optimal transport with $c_p(x,y)=\|x-y\|^p$. PMOT parameterizes the CNF velocity field with a scalar potential in the generalized Benamou--Brenier form for the chosen exponent $p$. It trains the potential gradient with a self-induced matching loss along straight bridges determined by the model's own endpoints, while allowing flexible terminal distribution matching. Our main result establishes zero-loss exactness: under the stated regularity, exact terminal matching, and uniqueness assumptions, any zero-loss solution satisfies the generalized Benamou--Brenier optimality system and recovers the corresponding $p$-optimal transport map and dynamics. On synthetic benchmarks, PMOT learns $p$-specific maps that agree with the corresponding $p$-matched OT references. It also remains competitive as a likelihood-based density model on high-dimensional tabular data, and an MMD-based color transformation experiment demonstrates flexible sample-based terminal matching.
