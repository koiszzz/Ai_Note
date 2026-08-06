# FraQ: Efficient Coordinate-Space Recompression for Federated Low-Rank Adaptation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Shenghui Li, Thiemo Voigt　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.03605)

------

arXiv:2608.03605v1 Announce Type: new

Abstract: Federated fine-tuning with Low-Rank Adaptation (LoRA) enables efficient collaborative adaptation of Large Language Models (LLMs) without centralizing private data. However, LoRA's two-factor parameterization creates an aggregation mismatch across clients: naively averaging the factors does not recover the average of their induced updates. This mismatch can be avoided by forming the exact aggregate in the full weight space and then recompressing it, but decomposing the resulting dense matrix is computationally expensive and memory-intensive. We propose FraQ, an efficient coordinate-space recompression method for federated LoRA. Starting from stacked factors that exactly represent the aggregate, FraQ factorizes it into an orthonormal basis and a compact coordinate matrix. It then recovers the singular spectrum from a small Gram matrix, selects the smallest rank satisfying a prescribed energy threshold, and maps the selected coordinate subspace back through the basis to construct the global adapter. Experiments on text classification and commonsense reasoning benchmarks show that FraQ achieves accuracy close to uncompressed baselines while substantially reducing downlink communication with low server-side recompression overhead.
