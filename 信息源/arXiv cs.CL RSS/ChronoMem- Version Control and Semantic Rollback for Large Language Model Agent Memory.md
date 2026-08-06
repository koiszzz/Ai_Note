# ChronoMem: Version Control and Semantic Rollback for Large Language Model Agent Memory

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Yongye Su, Wujiang Xu, Chaoji Zuo, Elisa Bertino　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2607.27773)

------

arXiv:2607.27773v2 Announce Type: replace

Abstract: LLM agents increasingly rely on long-term memory to support multi-session interaction and personalization. However, existing agent memory systems are designed around forward-only evolution, continuously accumulating, consolidating, and overwriting knowledge, with no principled mechanism to inspect, version, or revert prior states. This makes agents brittle under corrections, concept drift, and memory corruption, particularly after they have already been exposed to subsequent information. We present ChronoMem, a semantic version-control layer for agentic memory integrated into the production-ready, open-source Agent Development Kit by Google. ChronoMem commits whole-memory snapshots at each memory write, maintains structured version histories, and supports natural-language rollback requests by mapping undo intents to concrete historical versions through hybrid lexical and semantic retrieval, rank fusion, and reranking. We further introduce a post-exposure evaluation protocol that tests whether an agent can behave counterfactually after rollback by answering queries and summarizing history as if future updates had never occurred. On long-horizon conversational benchmarks augmented with evolving memory states and rollback tasks, ChronoMem substantially improves rollback-consistent question answering and history summarization relative to prompt-only and retrieval-only baselines, while achieving strong performance in semantic version selection. To our knowledge, ChronoMem is the first open-source system and benchmark for systematic semantic global memory rollback in LLM agents.
