# Mapping Similarity Spaces across Embedding Models with Synthetic Query Probing

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Marcin Rozmus, Peter van der Putten　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05857)

------

arXiv:2608.05857v1 Announce Type: new

Abstract: Retrieval-Augmented Generation systems rely on similarity scores to retrieve relevant content, yet scores are not directly comparable across embedding models due to differing geometric properties, complicating model migration and limiting threshold reuse. We study how similarity scores can be related by learning mappings between score distributions rather than embeddings. We introduce Synthetic Query Probing, generating queries from documents to create controlled query-chunk pairs, enabling large-scale, reference-free analysis of cross-model similarity behavior. We evaluate the approach on multiple embedding configurations and learn score conversion functions using linear, isotonic, and quantile mappings. Experiments on SciFact and a proprietary corpus show that while models largely agree on rankings, their absolute scores exhibit systematic distortions. Learned mappings partially align these spaces and improve threshold portability, with isotonic regression performing best. Our results highlight the need for cross-model calibration and position Synthetic Query Probing as a scalable framework for analyzing embedding comparability.
