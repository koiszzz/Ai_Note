# Beyond Retrieval: Analytic Memory for Multimodal Agents

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Zhoujin Tian, Hao Zhang, Yao Tian, Cheng Chen, Yakun Li, Lei Zhang, Xiaofang Zhou　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2607.29440)

------

arXiv:2607.29440v2 Announce Type: replace

Abstract: Long-term multimodal memory must support not only retrieving relevant information but also computing over observations accumulated across interactions. Existing systems largely emphasize \emph{retrieval memory}, organizing interaction histories through summaries and indexes to return query-relevant information at multiple granularities, from high-level abstractions to underlying records. In this paper, we formulate \emph{analytic memory} as a complementary abstraction that organizes recurring multimodal observations into queryable structures supporting filtering, aggregation, ranking, and temporal comparison. We present AdaMM, a framework that jointly supports retrieval and analytic memory. Rather than relying on application-defined schemas, AdaMM extracts provenance-linked attribute-value observations from dialogue, images, and contextual metadata, discovers recurring field structures, and materializes them for analytical access. At inference time, a memory-aware planner decomposes queries into retrieval and analytic operations and routes each operation to the appropriate tools. Experiments on two long-term multimodal memory benchmarks, MemEye and MemGallery, show that AdaMM improves performance by up to 11.3\% and 6.9\%, respectively.
