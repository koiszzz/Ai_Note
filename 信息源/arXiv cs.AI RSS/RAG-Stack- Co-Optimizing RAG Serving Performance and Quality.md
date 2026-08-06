# RAG-Stack: Co-Optimizing RAG Serving Performance and Quality

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Haiqiang Zhang, Yuanqing Lei, Wanting Li, Tao Zhang, Wenqi Jiang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.DB　|　原文：[打开链接](https://arxiv.org/abs/2608.03487)

------

arXiv:2608.03487v1 Announce Type: cross

Abstract: Retrieval-augmented generation (RAG), which augments large language model (LLM) generation with information retrieved from databases, has become a widely used approach for knowledge-intensive applications. Modern RAG systems, however, expose many configuration choices, such as retrieval indexes, model selections, and how models invoke retrieval. Each configuration yields a different trade-off between answer quality and serving performance, making it challenging to choose the optimal setting for a specific application deployment. We present RAG-Stack, a framework for efficiently discovering quality-performance Pareto frontiers across diverse RAG applications and serving systems. RAG-Stack consists of RAG-PE, an iterative design-space exploration algorithm that selects the next RAG configuration to evaluate; RAG-IR, a workload abstraction for diverse RAG algorithms; and RAG-CM, a performance model that predicts the optimal deployment and serving performance on the given hardware. Together, these components allow RAG-Stack to search the joint algorithm-system configuration space without deploying every candidate and to transfer an existing Pareto frontier to a new serving system. Given the same number of optimization iterations across diverse datasets, the Pareto frontiers found by RAG-Stack cover 52.5% to 153.2% more of the normalized quality-performance space than those found by state-of-the-art configuration-search methods evaluated over the same RAG design space.
