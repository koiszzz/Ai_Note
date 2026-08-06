# Lightweight Chunk Selection for Mobile Retrieval-Augmented Generation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Sicong Chang, Yidan Shen, Wen Yu, Jiefu Chen, Xin Fu, Renjie Hu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03148)

------

arXiv:2608.03148v1 Announce Type: cross

Abstract: RAG improves the factual grounding of LLM by incorporating external knowledge, but deploying RAG on mobile and edge devices remains challenging because retrieved context increases computation and memory. A direct way to reduce this cost is to retain only one retrieved chunk before generation, but the top-ranked retrieved chunk is not always the most evidence-supporting one, since retrieval similarity does not necessarily imply evidential sufficiency. Existing context-reduction methods can improve context quality, but often require additional LLMs or compressors that are costly under a strict mobile budget. In this paper, we study lightweight RAG chunk selection as an evidence-alignment problem. Our selector combines three complementary feature sources: question hidden states that represent LLM-side query intent, MoE routing-derived expert signals that capture the generator's internal routing structure, and retrieved chunk embeddings that preserve candidate-side evidence geometry. A compact multilayer perceptron maps these features to an evidence prototype in the chunk embedding space, and the candidate most aligned with this prototype is selected by cosine similarity. For stricter deployment budgets, we further introduce an optional task-aware feature selection strategy to reduce the selector input dimension. To support supervised evaluation, we construct semantic chunk-correctness labels based on evidence sufficiency rather than answer-string containment. Experiments show that the proposed selector consistently improves rank-1 evidence selection over mobile-applicable baselines by an average of 2.5%. These results suggest that using LLM-side query representations and MoE routing information and aligning them with retrieval-side candidate embedding is an effective and parameter-efficient strategy for mobile-applicable RAG chunk selection.
