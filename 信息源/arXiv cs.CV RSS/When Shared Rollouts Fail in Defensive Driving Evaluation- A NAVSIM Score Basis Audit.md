# When Shared Rollouts Fail in Defensive Driving Evaluation: A NAVSIM Score Basis Audit

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Ziang Wei, Minjun Yu, Zheyuan Lai, Mingjie Pang, Wei Li　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04896)

------

arXiv:2608.04896v1 Announce Type: cross

Abstract: Defensive driving scores are useful only when they preserve distinctions between policies that observe surrounding actors and those that do not. Re-simulation benchmarks may use reference-conditioned forgiveness, under which an agent receives credit when the logged human reference fails a compliance channel. When agent and reference share an unstable rollout transformation, this rule can propagate shared reference failures into broad compliance credit.

We audit this risk in NAVSIM v2.2 original scene single-stage scoring. Under the affected documented-stack condition on the audited numerical backend, the route-blind Ignore-All probe and a route-aware actor-blind probe outrank human replay and PDM-Closed over the complete 12,146-token navtest split. A fresh installation following the public specification reproduces rollout divergence on a fixed 32-token diagnostic set. A same-source dependency stack control and an exact-input diagnostic isolate dependency-sensitive numerical behavior in the shared velocity refit. On a 450-token control pool, replacing only the solver eliminates rollout divergence and restores blind-last ordering while keeping forgiveness enabled. Thus, the numerical instability is the direct trigger. Reference-conditioned forgiveness propagates the resulting shared reference failures into compliance credit. We contribute an audit protocol requiring score basis and stack disclosure, blind probes, overwrite reporting, and rollout stability tests before using such scores for defensive driving claims.
