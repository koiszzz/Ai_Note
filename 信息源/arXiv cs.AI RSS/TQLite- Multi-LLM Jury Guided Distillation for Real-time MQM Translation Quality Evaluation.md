# TQLite: Multi-LLM Jury Guided Distillation for Real-time MQM Translation Quality Evaluation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Bhavin Jawade, Cameron R. Wolfe　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.02975)

------

arXiv:2608.02975v1 Announce Type: cross

Abstract: Large language models (LLMs) have demonstrated impressive performance in MQM-based translation quality (TQ) evaluation, and recent advances in large reasoning models (LRMs) promise even greater improvements. However, both LLMs and LRMs are computationally expensive to deploy at scale, while small language models (SLMs)---though much more efficient---struggle with the complex reasoning required for evaluation tasks. In this work, we present an extensive empirical study benchmarking SLMs, LLMs, and LRMs across a wide range of TQ evaluation setups, providing a comprehensive view of the current landscape and establishing best practices. To address the scalability challenge, we introduce TQLite, a novel distillation framework that enables SLMs to approach the MQM evaluation performance of the best LRM-based evaluators. Our approach leverages a multi-LRM jury to generate high-quality synthetic training data via practical data curation techniques and aggregation of evaluation responses across a diverse panel of models. Our results demonstrate that SLMs trained via TQLite achieve strong MQM evaluation performance that far exceeds off-the-shelf evaluation capabilities of standard SLMs, offering a scalable and cost-effective alternative to LLM- and LRM-based evaluators.
