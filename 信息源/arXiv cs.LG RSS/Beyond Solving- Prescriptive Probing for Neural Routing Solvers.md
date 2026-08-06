# Beyond Solving: Prescriptive Probing for Neural Routing Solvers

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Reuben Narad, L\'eonard Boussioux, Michael Wagner　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2602.07216)

------

arXiv:2602.07216v2 Announce Type: replace

Abstract: Neural combinatorial optimization (NCO) trains fast heuristics for routing problems, but planners often need more than a single solve: they ask which stop to drop, which transition to preserve, or which subset of stops to remove if a route is infeasible. Answering such counterfactual questions by re-solving each candidate is expensive even when the action set is small. We introduce Prescriptive Probing: using the frozen representations of a trained NCO model to rank candidate interventions for what-if decision support. While recent interpretability work descriptively probes what NCO solvers encode, we ask whether those same representations can prescriptively guide intervention choices on real-road routing problems. Where exhaustive labels are available, we train supervised probes from offline re-solve labels; where they are not (e.g., combinatorial action spaces), we train a lightweight reinforcement learning intervention head. Across real-road benchmarks on the Asymmetric Traveling Salesperson Problem and Capacitated Vehicle Routing Problem, probes built on frozen model representations achieve the strongest performance on a majority of intervention tasks and improve over local-repair heuristics on edge-forbiddance and on key node- and multi-node-removal metrics. We further investigate probeability as a property of the routing model itself, varying model quality, the mix of supervised learning and reinforcement learning, and the architecture family. Overall, our results suggest a new use case for NCO solvers: representations learned for route construction can transfer to decision support.
