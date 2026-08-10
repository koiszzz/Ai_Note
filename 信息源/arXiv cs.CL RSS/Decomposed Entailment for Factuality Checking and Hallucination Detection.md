# Decomposed Entailment for Factuality Checking and Hallucination Detection

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Achir Oukelmoun, Nasredine Semmar, Ga\"el De Chalendar　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05823)

------

arXiv:2608.05823v1 Announce Type: new

Abstract: The reliability of Large Language Models (LLMs) is often compromised by factual inconsistencies, including hallucinations---cases where generated content is not supported by the underlying source. We present HallDetect, a lightweight, reference-free, and black-box framework for hallucination detection that we evaluate not only on summarization but across a broader range of source-grounded generation settings. HallDetect builds on decomposition-based factuality evaluation: generated content is decomposed into atomic claims, each verified by a compact encoder-based entailment model through a contrastive formulation over a multi-scale library of source chunks, and aggregated with an asymmetric score in which a single confidently contradicted claim flags the response. Under a controlled protocol in which all methods share the same 4-bit quantized backbones and consumer-grade hardware budget, HallDetect outperforms comparably resourced generative and embedding-based baselines on three of four benchmarks while remaining stable across backbone families, and yields a claim-to-span audit trail that localizes each error.
