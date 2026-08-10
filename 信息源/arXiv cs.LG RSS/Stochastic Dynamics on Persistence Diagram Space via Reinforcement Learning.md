# Stochastic Dynamics on Persistence Diagram Space via Reinforcement Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Farzana Nasrin　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：stat.ML　|　原文：[打开链接](https://arxiv.org/abs/2608.06276)

------

arXiv:2608.06276v1 Announce Type: cross

Abstract: Persistence diagrams (PDs) provide stable and interpretable summaries of multiscale topological structure. While substantial progress has been made in the statistical analysis of PDs, existing literature often treats diagrams as static objects and provide limited frameworks for probabilistic modeling and stochastic evolution on PD space. We introduce a reinforcement learning framework for stochastic dynamics on PD space, where diagrams evolve through topology aware local edit operations. The dynamics define controlled Markov processes on spaces of finite PDs with variable cardinality. We establish conditions under which the induced Markov chains are irreducible, aperiodic, and geometrically ergodic, implying the existence of unique stationary probability laws on PD space. To guide the dynamics toward scientifically relevant topological targets, we formulate objectives that encompass distribution matching, task specific topological statistics, and structure-preserving compression. The resulting rewards balance task specific distributional targets, diagram fidelity, and complexity reduction, and yield a framework for adaptive topological simplification and probabilistic modeling. Experiments on synthetic and neuroimaging PDs demonstrate that the proposed framework can preserve dominant topological structure while reducing diagram complexity.
