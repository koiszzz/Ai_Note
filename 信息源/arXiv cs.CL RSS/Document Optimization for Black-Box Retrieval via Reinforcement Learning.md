# Document Optimization for Black-Box Retrieval via Reinforcement Learning

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Omri Uzan, Ron Polonsky, Douwe Kiela, Christopher Potts　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2604.05087)

------

arXiv:2604.05087v3 Announce Type: replace

Abstract: Document expansion is a classical technique for improving retrieval quality, and is attractive since it shifts computation offline, avoiding additional query-time processing. However, when applied to modern retrievers, it has been shown to degrade performance, often introducing noise that obfuscates the discriminative signal. We recast document expansion as a document optimization problem: a language model or a vision language model is fine-tuned to transform documents into representations that better align with the expected query distribution under a target retriever, using GRPO with the retriever's ranking improvements as rewards. This approach requires only black-box access to retrieval ranks, and is applicable across single-vector, multi-vector and lexical retrievers. We evaluate our approach on code retrieval and visual document retrieval (VDR) tasks. We find that learned document transformations yield retrieval gains and in many settings enable smaller, more efficient retrievers to outperform larger ones. For example, applying document optimization to OpenAI text-embedding-3-small model improves nDCG5 on code (58.7 to 66.8) and VDR (53.3 to 57.6), even slightly surpassing the 6.5X more expensive OpenAI text-embedding-3-large model (66.3 on code; 57.0 on VDR). When retriever weights are accessible, document optimization is often competitive with fine-tuning, and in some settings their combination performs best, improving Jina-ColBERT-V2 from 55.8 to 63.3 on VDR and from 48.6 to 61.8 on code retrieval.
