# ACE-GraphRAG: Agentic Context Engineering for Hierarchical GraphRAG

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yongfeng Huang, Yuren Lai, Ruiying Chen, Haoyu Huang, Mingming Zhao, James Cheng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.01269)

------

arXiv:2608.01269v2 Announce Type: replace-cross

Abstract: Hierarchical Graph Retrieval-Augmented Generation (GraphRAG) organizes corpus knowledge at multiple levels of granularity, yet fixed context construction may fail to translate these multi-resolution representations into a context suited to the current query. We identify this mismatch as the representation--inference gap. We propose Agentic Context Engineering for Hierarchical GraphRAG (ACE-GraphRAG), an inference-time context policy layer that supplements and adapts the initial context for generation. ACE-GraphRAG formulates context construction as a policy over gap-aware refinement, retrieval branches, and task-conditioned adaptation. Parallel Differential Retrieval acquires supplementary evidence from depth-oriented factual and breadth-oriented semantic branches. These evidence increments are consolidated with the initial context while preserving provenance and abstraction levels. Full-ACE applies the full policy uniformly within each task family, whereas Adaptive-ACE selects task- and topology-specific policies for individual queries. We evaluate ACE-GraphRAG on HotpotQA, 2WikiMultiHopQA, and four UltraDomain subsets across multi-hop QA and query-focused summarization. Full-ACE outperforms the evaluated RAG and GraphRAG baselines across both task families, while Adaptive-ACE further improves multi-hop QA and is preferred over Full-ACE on all four UltraDomain subsets. Ablation and topology analyses support treating context construction as a query- and task-dependent inference policy rather than a fixed procedure.
