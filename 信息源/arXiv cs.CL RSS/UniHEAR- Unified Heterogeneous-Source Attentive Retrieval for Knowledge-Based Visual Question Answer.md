# UniHEAR: Unified Heterogeneous-Source Attentive Retrieval for Knowledge-Based Visual Question Answering

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Ganzhong Luo, Yang Ren, Hanyong Wang, Shuyu Zheng, Menglong Yang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.IR　|　原文：[打开链接](https://arxiv.org/abs/2608.01147)

------

arXiv:2608.01147v2 Announce Type: replace-cross

Abstract: Knowledge-Based Visual Question Answering (KB-VQA) requires retrieving entity knowledge from external sources to answer visually grounded questions. Existing retrieval-augmented systems suffer from two critical limitations. First, relying on a single retrieval modality creates a Single-Source Retrieval Bottleneck, missing ground-truth entities that are only accessible through complementary sources. Second, dual-tower pointwise rerankers suffer from Retrieval-Source-Blind Reranking, as they overlook retrieval origins and candidate-level retrieval priors, leading to redundant modality reliance. To address these challenges, we propose UniHEAR, a unified lightweight framework for heterogeneous-source entity retrieval and reranking. UniHEAR constructs a Coarse Retrieval Descriptor for each candidate entity, and introduces Retrieval-Guided Attentive Modality Gating to condition modality attention weights on this descriptor, complemented by Entropy-Weighted Source Fusion of coarse retrieval priors. A hybrid training strategy combining contrastive learning with an auxiliary modality-preserving loss unifies entity-level and section-level retrieval within a single model. Extensive experiments on E-VQA and InfoSeek demonstrate that UniHEAR achieves state-of-the-art retrieval and VQA performance, improving Recall@1 by 6.7 and 1.2 points over the strongest baselines while maintaining a lightweight reranking architecture. Code and model are available at https://github.com/iven-luo/UniHEAR.
