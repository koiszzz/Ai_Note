# GENESIS: Towards Explainable Causal Discovery

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Abhinav Thorat, Ravi Kumar Kolla, Vishak K Bhat, Harsh Vardhan Singh Chauhan, Niranjan Pedanekar　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03868)

------

arXiv:2608.03868v1 Announce Type: cross

Abstract: Causal Discovery (CD) from observational data faces two fundamental challenges. First, purely statistical methods often lack the power to resolve structural ambiguities in low-sample regimes. Second, although LLM-assisted hybrid approaches improve structure recovery through semantic reasoning, the influence of that reasoning on individual edge decisions remains largely opaque. Consequently, existing hybrid methods fail to satisfy a fundamental requirement: explaining why a particular edge is included or excluded in the learned directed acyclic graph (DAG). This is critical in real-world applications, where no ground-truth DAG exists and every structural decision must be independently justified. We formalize this requirement as decision traceability, requiring every inferred edge to be supported by auditable statistical evidence, Markov Blanket consistency, or explicit domain reasoning. We propose GENESIS, an explainable hybrid CD framework that decomposes graph construction into interpretable decision points. GENESIS first identifies and scores three-node structural motifs, including chains, forks, and colliders, to establish transparent structural priors, then progressively refines the graph by integrating these priors with observational evidence, invoking domain knowledge only when statistical evidence is insufficient. By design, every edge decision is resolved through an auditable source of evidence. Experiments show that GENESIS achieves 100% decision traceability across all settings, establishing explainability as a first-class objective in causal discovery. Despite this additional requirement, GENESIS consistently outperforms purely statistical CD methods on the majority of benchmark datasets across all sample regimes in terms of Structural Hamming Distance (SHD), while achieving performance comparable to state-of-the-art LLM-assisted approaches.
