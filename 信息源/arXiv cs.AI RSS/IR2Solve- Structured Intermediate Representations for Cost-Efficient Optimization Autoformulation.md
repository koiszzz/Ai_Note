# IR2Solve: Structured Intermediate Representations for Cost-Efficient Optimization Autoformulation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Penglin Zhu, Linhai Zhang, Jungang Xu, Xinchi Wei, Xiuqi Wu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.SE　|　原文：[打开链接](https://arxiv.org/abs/2608.02641)

------

arXiv:2608.02641v1 Announce Type: cross

Abstract: Large language models (LLMs) can translate natural-language optimization problems into solver-ready formulations, but direct code generation is brittle: schema, indexing, and semantic errors can cause compilation failures, infeasible models, or incorrect objectives, while iterative repair, search, and multi-agent workflows increase inference cost. We present IR2Solve, an intermediate-representation-first autoformulation pipeline that uses a single semantic LLM call to produce a schema-constrained ModelIR, followed by two deterministic stages: verification and IR-to-solver compilation. ModelIR explicitly represents sets, parameters, variables, objectives, and constraints using restricted Python-like expression strings. A concrete scalar-constraint convention represents finite per-index constraint families as individual entries, reducing free-index and implicit-quantification errors while simplifying downstream verification and compilation. Across six cleaned optimization benchmarks, IR2Solve achieves strong objective correctness and remains competitive with recent optimization-modeling systems. A controlled ablation on 153 IndustryOR and ComplexLP instances shows sequential gains from the structured IR interface, the scalar-constraint instruction, and deterministic verification. On a matched ten-instance cost panel, IR2Solve uses one semantic call per instance, whereas Chain-of-Experts and SAC-Opt use 8 and 39 calls per instance and consume 3.3 and 22.9 times the token volume of IR2Solve, respectively. These results show that structured intermediate representations, combined with deterministic post-generation processing, provide a practical accuracy-cost trade-off for LLM-based optimization autoformulation.
