# HyPASE: Hyperbolic Geometry for Parameter-Efficient Speech Emotion Fine-Tuning Framework for Large Audio-Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Tian Jin, Ruikang Zhang, Zefeng Zhao, Ding Luo, Jin Zeng　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2608.04351)

------

arXiv:2608.04351v1 Announce Type: cross

Abstract: Large Audio-Language Models (LALMs) excel at general speech understanding; however, adapting them to fine-grained tasks like Speech Emotion Recognition (SER) remains a significant bottleneck. Current Parameter-Efficient Fine-Tuning (PEFT) methods typically operate in flat Euclidean space, and this geometry fails to capture the multi-granularity nature of emotion cues, which range from low-level prosody to high-level semantics. To address this, we propose HyPASE, a hyperbolic PEFT framework for LALM-based SER. HyPASE leverages the Poincare ball model, using the hyperbolic radius as an explicit proxy for representational granularity. The framework consists of two core components: a Hyperbolic Geometric Adapter (HGA) for layer-adaptive weight modulation, and an Emotion-aware Multi-capacity Cross-modal Aggregator (EMCA) that compresses multi-scale features into compact audio prefixes. Empirical results on standard benchmarks show that HyPASE outperforms Euclidean PEFT baselines across all metrics on MELD and achieves a notable Unweighted Accuracy gain on IEMOCAP, particularly in class-imbalanced emotion recognition, with the accompanying slight Weighted Accuracy trade-off reflecting hyperbolic space's geometric prioritization of minority-class representations; furthermore, HyPASE achieves robust zero-shot cross-dataset generalization within a constrained parameter budget. By grounding the adaptation process in hyperbolic geometry, HyPASE offers a highly efficient path for LALM fine-tuning.
