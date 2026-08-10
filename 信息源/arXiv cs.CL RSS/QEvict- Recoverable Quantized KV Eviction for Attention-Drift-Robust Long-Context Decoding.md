# QEvict: Recoverable Quantized KV Eviction for Attention-Drift-Robust Long-Context Decoding

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Ayushman Garg, Akshita Gupta, Shaswata Bhattacharya, Abhishek Gupta, Sandeep Kumar, Manoj Kumar　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05326)

------

arXiv:2608.05326v1 Announce Type: cross

Abstract: Autoregressive large language model inference is increasingly constrained by the memory footprint of the Key-Value (KV) cache. A dominant line of work reduces this footprint by evicting tokens that appear unimportant under attention-derived scores. However, such policies make an implicit irreversible decision: once a token is evicted, it cannot become useful again. We show that this assumption is brittle during decoding. Token and window importance drift as generated queries evolve, causing standard eviction policies to permanently discard states that later receive substantial attention under the full-cache model. To characterize this behaviour, we introduce Future Missed Mass and Global LIR, two diagnostics that measure future attention assigned to discarded states and the reactivation of historically inactive regions. We propose QEvict, a three-tier KV-cache management scheme that replaces binary retain-or-delete eviction with recoverable eviction. QEvict maintains high-confidence windows in full precision, stores intermediate windows in a quantized recoverable tier, and deletes only the lowest-confidence windows. During decoding, cumulative attention scores update window importance and when a quantized window becomes important again, it is dequantized and promoted to the full-precision. Under a fixed memory budget, this design preserves broader historical context while retaining exact full precision for the most important regions. Across long-context understanding, retrieval, and reasoning benchmarks, QEvict consistently improves over representative eviction and quantization baselines, reducing missed attention and improving information retention
