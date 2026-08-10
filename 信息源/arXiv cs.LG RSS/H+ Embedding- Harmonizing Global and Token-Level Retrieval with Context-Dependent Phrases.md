# H+ Embedding: Harmonizing Global and Token-Level Retrieval with Context-Dependent Phrases

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Shusen Zhang, Junyi Hu, Ye Feng, Ziteng Wang, Zhaoyuan Pan, Guosheng Dong, Xiaojun Yuan, Jiangshou Hong, Xiangzhi Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.00065)

------

arXiv:2608.00065v2 Announce Type: replace-cross

Abstract: Terminology-intensive retrieval, especially in medical settings, depends on preserving multi-word entities, abbreviations, numerical constraints, and compositional concepts. However, existing representations lie at two extremes: single-vector retrievers often over-compress local relevance signals, while token-level late interaction retains every tokenizer subword at substantial indexing, storage, and scoring cost. This mismatch raises a natural question: can context-dependent phrases provide a useful retrieval unit between global vectors and tokens? We introduce H+ Embedding, a unified multi-granularity retriever that predicts variable-length phrase partitions, preserves uncovered tokens as singletons, and applies importance-guided unit selection with weighted MaxSim interaction. Across 16 scientific, medical, and bilingual tasks, its phrase retrieval branch exceeds the global retrieval branch by 6.91 macro nDCG@10. It also nearly matches Token while using 13.7% fewer document vectors and outperforms content-independent grouping rules under moderate vector budgets. Context-dependent phrase interaction therefore provides an intermediate quality-cost point between global compression and token-level interaction for practical retrieval systems.
