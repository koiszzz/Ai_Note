# Hierarchical Latent Prediction for Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Chang Shi, Tim Pearce, Manan Tomar, Siddhartha Sen, John Langford　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.05806)

------

arXiv:2608.05806v1 Announce Type: cross

Abstract: While standard Next-Token Prediction (NTP) lays the foundation of language model pre- training, its teacher-forced training paradigm may not be optimal for long-horizon reasoning and planning. Recent works such as Multi-Token Prediction (MTP) and Next-Latent prediction (NextLat) try to mitigate the problem through predicting multiple future tokens and self-supervised prediction in the latent space. However, those auxiliary objectives either have a limited horizon or suffer from compounding error from multi-step rollout. We introduce Hierarchical Latent Prediction (HiLP), which introduces an auxiliary higher-level abstract latent to help reduce the error accumulation effect in latent-space rollouts. Experiments show that HiLP can lead to longer-horizon coherent belief state representation and demonstrate the effectiveness of our method across coding and multi-step reasoning benchmarks, and offers more speculative decoding efficiency.
