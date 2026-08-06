# Capability-Gated Planning: Cost-to-Goal Discovery and the Limits of Myopic Experiment Selection

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ahmed Hassoon, Mark Dredze　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05085)

------

arXiv:2608.05085v1 Announce Type: new

Abstract: Systems that automate scientific discovery must repeatedly decide which experiment to run, which hypothesis to test, which tool to build, and when to stop. Many systems make these decisions by maximizing a myopic score such as expected information gain per unit cost or a learned plausibility score. We identify a structural limitation of this approach. Some actions are constructive: they acquire an epistemic capability (an instrument, assay, pipeline, simulator, or abstraction) whose value lies not in the information returned immediately but in the future actions it makes available. When the least-cost route to a confident answer requires a chain of such constructions, a planner that scores actions only by information obtainable within a bounded horizon cannot value the first construction: it yields no information within the horizon and is dominated by any measurement with positive information, however small. We formulate goal-directed discovery as a stochastic shortest-path problem in belief space in which constructive experiments change the downstream action graph, and prove that for every lookahead depth d there is an instance on which every myopic information-maximizing planner has an unbounded approximation ratio, and a related instance on which it never reaches the goal. The mechanism is a capability-indistinguishability lemma: within the horizon, acquiring a capability can be observationally indistinguishable from paying for a null action. This establishes capability gating as a reachability axis of difficulty distinct from curvature (submodularity) and information order (adaptivity gaps). We introduce CG-Plan, an incremental replanner with a capability-aware cost-to-go heuristic h = h_cap + h_exp. In a controlled testbed, the performance gap appears only under gating, persists for every fixed horizon, and arises when near-miss hypotheses come from a data-consistent proposer.
