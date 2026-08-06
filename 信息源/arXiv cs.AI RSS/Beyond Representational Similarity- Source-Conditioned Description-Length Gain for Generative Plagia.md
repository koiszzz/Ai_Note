# Beyond Representational Similarity: Source-Conditioned Description-Length Gain for Generative Plagiarism Detection and Candidate Source Reranking

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Peijia Guo, Wenxuan Xie, ZiGuang Li, Ming Li　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03859)

------

arXiv:2608.03859v1 Announce Type: cross

Abstract: Large language models (LLMs) pose challenges to academic integrity and peer review. Yet generative plagiarism detection remains an underexplored and largely unresolved challenge. Prior work on LLM-generated-text detection targets AI involvement, which may be permissible, rather than source reuse, while similarity-based methods struggle after extensive rewriting and multi-source synthesis. Motivated by the description-length view of probabilistic prediction, in which relevant side information can reduce a target sequence's code length, we introduce Source-Conditioned Description-Length Gain (SCDG), a directional, training-free framework that contrasts a frozen language model's description length of a suspicious document $P$ with and without a candidate source $S$. This contrast yields token-level log-likelihood gains that measure the incremental predictive evidence supplied by $S$. We evaluate SCDG on the PAN at CLEF benchmarks for generative plagiarism. On a PAN 2025-derived pairwise benchmark, SCDG achieves 0.92 Precision, 0.97 Recall, and 0.94 F1, outperforming all baselines; on PAN 2026's multi-source retrieval task, it reaches 0.83 nDCG@10 and 0.96 Recall@100, surpassing all baselines. On a same-topic, same-event Multi-News test, the calibrated gain-distribution SCDG classifier predicts source reuse for only $0.125\%$ of pairs, supporting robustness to topical overlap under this evaluation protocol. These results establish SCDG as a unified and token-decomposable signal for source-specific content reuse under extensive transformation.
