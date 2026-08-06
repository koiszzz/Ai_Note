# EulerLoRA: Rank-Driven Jump Dynamics for Calibrated Parameter-Efficient Fine-Tuning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Srinivas Anumasa, Dianbo Liu　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.01142)

------

arXiv:2608.01142v2 Announce Type: replace

Abstract: Low-Rank Adaptation (LoRA) enables parameter-efficient fine-tuning, but standard LoRA produces a single deterministic model and does not directly support predictive uncertainty estimation. We introduce EulerLoRA, a stochastic extension of LoRA that generates multiple predictive trajectories by sampling structured variations along the rank-one components of shared low-rank adapters, while preserving the deterministic LoRA transformation in expectation. We evaluate EulerLoRA with vision transformers on CIFAR-10, CIFAR-100, and HAM10000, together with out-of-distribution detection on SVHN. Across these benchmarks, EulerLoRA achieves comparable or improved performance relative to strong LoRA-Ensemble baselines. Using two rank-20 adapters, EulerLoRA requires approximately 3 million trainable adapter parameters, compared with about 10 million for a rank-8, 16-adapter LoRA-Ensemble, corresponding to roughly 69% fewer trainable parameters. These results show that useful predictive diversity can be obtained from a small number of shared adapters.
