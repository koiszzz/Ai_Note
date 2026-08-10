# Cross-Architecture Steering Transfer in Language Models: A Systematic Empirical Study

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ayushi Agarwal　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05164)

------

arXiv:2608.05164v1 Announce Type: cross

Abstract: Independently trained large language models may develop shared internal representations of semantic concepts despite architectural differences -- but whether this geometric similarity has functional consequences for cross-model behavioural control remains untested. We present the first systematic evaluation of cross-model steering transfer and show that shared LLM geometry is functionally exploitable, conditionally: concept directions from one model can steer a different independently trained model when sufficient representational capacity exists. We study five open-weight models spanning three parameter scales (0.8B--8B) and two architectural lineages, training one Sparse Autoencoder per model across 15 semantic domains and testing alignment across all 20 directed model pairs. We observe a suggestive discontinuity near 1.7B parameters: at >= 1.7B scale, 47--49% of cross-model feature pairs validate (Pearson r >= 0.60, Procrustes cosines 0.895--0.956), while alignment degrades sharply below 0.8B. Cross-model steering vectors (B3-TI) achieve a 71.0% win rate across 15 supervised concepts versus 68.0% for same-model native vectors; a single universal vector achieves 67.3% in 4 of 5 models without any per-model supervision. Transfer degrades for models below 1.7B and for one model with generation instability, confirming that functional exploitability requires sufficient representational capacity. Our findings underscore the importance of scale thresholds in mechanistic interpretability: tools validated at 7B scale may not transfer to smaller models without revalidation. We provide the first functional complement to the Platonic Representation Hypothesis -- geometric convergence across independently trained LLMs supports cross-model behavioural control without fine-tuning, under the identified scale conditions.
