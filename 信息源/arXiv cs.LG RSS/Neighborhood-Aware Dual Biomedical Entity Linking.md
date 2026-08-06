# Neighborhood-Aware Dual Biomedical Entity Linking

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yicheng Tao, Jie Liu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2608.04144)

------

arXiv:2608.04144v1 Announce Type: cross

Abstract: Biomedical entity linking grounds mentions in clinical and scientific text to entities in a curated knowledge base (KB) with ontological structure, which supports downstream applications such as literature-scale information extraction and patient-record normalization. The task has several challenges at once: the KB contains large numbers of entities, mentions are often ambiguous, and gold labels follow annotation conventions specific to each corpus. To address these challenges, we propose PILOT, a three-stage framework made up of neighborhood-aware retrieval, dual reranking, and score fusion. The retriever injects ontological structure from both the query and KB side, by reformulating mentions and pooling entity embeddings. The retrieved pool is then scored from two complementary views, one over surface forms and one over context, and fused together. PILOT achieves the state of the art on average across five widely-used benchmarks and remains efficient at inference.
