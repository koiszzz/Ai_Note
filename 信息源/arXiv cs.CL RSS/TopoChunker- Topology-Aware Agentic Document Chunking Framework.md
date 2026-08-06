# TopoChunker: Topology-Aware Agentic Document Chunking Framework

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Xiaoyu Liu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2603.18409)

------

arXiv:2603.18409v2 Announce Type: replace

Abstract: Current document chunking methods for Retrieval-Augmented Generation (RAG) typically linearize text. This forced linearization strips away intrinsic topological hierarchies, creating ``semantic fragmentation'' that degrades downstream retrieval quality. In this paper, we propose TopoChunker, an agentic framework that maps heterogeneous documents onto a Structured Intermediate Representation (SIR) to explicitly preserve cross-segment dependencies. To balance structural fidelity with computational cost, TopoChunker employs a dual-agent architecture. An Inspector Agent dynamically routes documents through cost-optimized extraction paths, while a Refiner Agent performs capacity auditing and topological context disambiguation to reconstruct hierarchical lineage. Evaluated on unstructured narratives (GutenQA) and complex reports (GovReport), TopoChunker demonstrates state-of-the-art performance. It outperforms the strongest LLM-based baseline by 8.0% in absolute generation accuracy and achieves an 83.26% Recall@3, while simultaneously reducing token overhead by 23.5%, offering a scalable approach for structure-aware RAG.
