# XGrammar-2: Dynamic and Efficient Structured Generation Engine for Agentic LLMs

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Linzhang Li, Yixin Dong, Guanjie Wang, Ziyi Xu, Alexander Jiang, Tianqi Chen　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2601.04426)

------

arXiv:2601.04426v4 Announce Type: replace

Abstract: Modern LLM agents increasingly rely on dynamic structured generation, such as tool calling and response protocols. Unlike traditional structured generation with static structures, these workloads vary both across requests and within a request, posing new challenges to existing engines. We present XGrammar-2, a structured generation engine for dynamic agentic workloads. Our design is based on two key ideas: first-class support for tag-triggered structure switching, and fine-grained reuse across requests with different output structures. Concretely, XGrammar-2 introduces TagDispatch for dynamic structural dispatching and Cross-Grammar Cache for substructure-level cache reuse across grammars. It further improves efficiency with an Earley-based adaptive token mask cache, just-in-time compilation, and repetition state compression. Experiments show that XGrammar-2 achieves over 6x faster compilation than prior structured generation engines, and incurs near-zero end-to-end overhead in modern LLM serving systems.
