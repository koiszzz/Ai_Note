# NeSy-RAG: Neuro-Symbolic RAG for Explainable Question Answering

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Jonas Gann, Michael Gertz　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.06292)

------

arXiv:2608.06292v1 Announce Type: new

Abstract: Retrieval-augmented generation (RAG) improves question answering by grounding large language models (LLMs) in external knowledge such as text corpora. However, its reasoning process remains largely opaque: intermediate reasoning steps are difficult to verify and cannot be reliably attributed to specific evidence. Moreover, missing user-specific context is rarely detected systematically, often leading to incomplete or incorrect output.

We propose NeSy-RAG, a modular neuro-symbolic RAG framework that synthesizes attributable Prolog modules from retrieved text chunks. For each chunk, the system generates semantically meaningful predicates that encode Boolean claims, which may depend on user facts. Using joint natural language-code embeddings, predicates are retrieved and composed into Prolog queries. To address incomplete user context, we introduce a symbolic knowledge-gap detection mechanism that identifies missing user facts whose truth values affect the query outcome and automatically triggers follow-up interactions.

Executing the resulting Prolog queries yields deterministic answers together with transparent execution traces that link each reasoning step to its originating source. On the ShARC benchmark, without domain-specific training, NeSy-RAG achieves 61.1% accuracy, outperforming a same-model RAG baseline that achieves 42.8% accuracy.
