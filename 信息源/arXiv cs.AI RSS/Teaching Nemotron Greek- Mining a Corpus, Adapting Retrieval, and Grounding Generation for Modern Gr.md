# Teaching Nemotron Greek: Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Greek across Specialist Domains

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ayoub Kirouane, Christos Petrocheilos　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：eess.AS　|　原文：[打开链接](https://arxiv.org/abs/2608.05138)

------

arXiv:2608.05138v1 Announce Type: cross

Abstract: Modern Greek is absent from NVIDIA's Nemotron retrieval models and from major multilingual retrieval benchmarks, despite being important for retrieval-augmented generation (RAG) in legal, energy, financial, and medical applications. We present an end-to-end adaptation of the Nemotron retrieval stack for Modern Greek, including corpus mining, synthetic supervision, retrieval model training, reranker adaptation, reader fine-tuning, and a new benchmark called HERA. Our study shows that a parameter-free BM25 baseline outperforms several off-the-shelf multilingual dense retrieval models on specialist Greek corpora. After fine-tuning on 65,773 Greek retrieval pairs, a Nemotron 1B embedder improves nDCG@10 from 0.362 to 0.835 and substantially outperforms its unadapted counterpart. The learned language competence transfers to general-domain Greek, although the advantage over BM25 remains domain-dependent. We further adapt a cross-encoder reranker and demonstrate consistent improvements across specialist domains. Finally, we LoRA-tune a Nemotron 30B-A3B mixture-of-experts reader for grounded generation, increasing judged answer correctness from 29.4% to 66.9% while significantly improving faithfulness and citation quality. We also introduce HERA, the first large-scale Greek benchmark for retrieval-augmented generation, and release our adapted models and benchmark to support future research on Greek-language RAG systems.
