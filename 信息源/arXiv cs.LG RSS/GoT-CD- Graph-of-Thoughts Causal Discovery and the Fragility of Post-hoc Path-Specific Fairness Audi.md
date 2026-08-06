# GoT-CD: Graph-of-Thoughts Causal Discovery and the Fragility of Post-hoc Path-Specific Fairness Audits

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Nitish Nagesh, Elahe Khatibi, Thomas Dean Hughes, Mahdi Bagheri, Pratik Gajane, Amir M. Rahmani　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02877)

------

arXiv:2608.02877v1 Announce Type: new

Abstract: Causal discovery recovers directed structure from observational data and is increasingly used in clinical settings to support mechanism reasoning and fairness audits of predictive models. Path-specific counterfactual fairness asks whether a protected attribute influences an outcome through illegitimate pathways, but these estimands are defined relative to a supplied causal graph and therefore inherit whatever errors the discovery step introduces. Discovery methods are routinely scored on aggregate structural metrics that weight all edges equally, and no established evaluation asks whether the specific pathway an audit depends on survives discovery---or what the audit reports when that pathway is missing. Here we show that full-graph Graph-of-Thoughts reasoning yields acyclic discovered graphs that are structurally competitive with large language model (LLM) baselines, yet that structural fidelity alone does not guarantee fairness-faithful audits. We introduce GoT-CD, in which the reasoning unit is a complete candidate edge set: multiple graphs are generated in parallel, scored by a deterministic validity function, and merged under a hard union constraint that forbids invented edges, with greedy projection enforcing a DAG before commitment. GoT-CD returns a valid DAG on all five reported benchmarks and achieves the best DAG-valid F1 score among LLM methods on Asia, Alzheimer's, and COVID-Respiratory datasets. On an Alzheimer's benchmark with known unfair path, a post-hoc path-specific audit shows that five of eight discovered graphs recover no path from the sensitive attribute to the outcome and therefore report a null overall effect while mediated effects persist, necessitating downstream path-specific fairness analysis along with structural discovery.
