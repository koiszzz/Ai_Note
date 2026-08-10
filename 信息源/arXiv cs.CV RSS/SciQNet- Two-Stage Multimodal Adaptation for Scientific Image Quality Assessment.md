# SciQNet: Two-Stage Multimodal Adaptation for Scientific Image Quality Assessment

> 数据源：arXiv cs.CV RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CV)

> 作者：Yin-Loon Khor, Yi-Jie Wong, Jing Jie Tan, Ming Jie Lee　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.05691)

------

arXiv:2608.05691v1 Announce Type: new

Abstract: Scientific images are essential for communicating experimental observations, quantitative evidence and conceptual knowledge. Unlike natural images, their quality depends on both visual clarity and scientific informativeness, making assessment challenging. In this work, we present SciQNet, a two-stage multimodal adaptation framework for scientific image quality assessment. The first stage performs domain-adaptive pretraining on scientific document images and the second stage conducts task-specific fine-tuning with joint scoring and understanding supervision. For scoring-oriented supervision, we combine instruction tuning with a Huber loss derived from rating-word logits, while understanding-oriented supervision is formulated as multiple-choice visual question answering. Experiments show that using a 40% stratified subset of the domain-adaptive data gives the best performance among the evaluated pretraining fractions, suggesting that pretraining-data relevance may be as important as pretraining-data scale. The final model achieves an SIQA-S score of 92.21, an SIQA-U score of 47.38 and a combined score of 69.80. This work presents our solution to the ICME 2026 Scientific Image Quality Assessment Challenge, which ranked 2nd in the scoring track.
