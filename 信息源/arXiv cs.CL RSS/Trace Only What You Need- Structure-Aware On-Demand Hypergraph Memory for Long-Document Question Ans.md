# Trace Only What You Need: Structure-Aware On-Demand Hypergraph Memory for Long-Document Question Answering

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Xiangjun Zai, Xingyu Tan, Chen Chen, Xiaoyang Wang, Wenjie Zhang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2606.10921)

------

arXiv:2606.10921v2 Announce Type: replace

Abstract: Long-document question answering (QA) requires large language models (LLMs) to reason over evidence scattered across lengthy documents, where answers often depend on event order, section-level context, and cross-part evidence connections. Although retrieval-augmented generation (RAG) reduces the input context by retrieving relevant evidence, existing structured RAG methods still face three limitations: costly query-agnostic knowledge organization, insufficient use of original document structure, and no reuse of historical reasoning experience. To address these limitations, we propose DocTrace, a multi-agent RAG framework for long-document QA that supports query-triggered knowledge organization, document-structure-aware and experience-guided reasoning. DocTrace preserves document hierarchy with a lightweight document structural tree index, constructs agent-shared hypergraph-structured working memory on demand during reasoning, and stores successful reasoning plans in graph-structured experience memory for future reuse, enabling adaptive exploration across related long-document questions. Experiments on four long-document QA datasets show that DocTrace outperforms the strongest baseline, ComoRAG, with average relative gains of 16.91% in F1 and 15.50% in EM on open-form QA benchmarks, and by up to 20.67% and 23.78%, respectively, on NarrativeQA.
