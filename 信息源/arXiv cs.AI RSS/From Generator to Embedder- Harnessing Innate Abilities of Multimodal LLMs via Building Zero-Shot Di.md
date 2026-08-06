# From Generator to Embedder: Harnessing Innate Abilities of Multimodal LLMs via Building Zero-Shot Discriminative Embedding Model

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yeong-Joon Ju, Seong-Whan Lee　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2508.00955)

------

arXiv:2508.00955v3 Announce Type: replace-cross

Abstract: Adapting generative Multimodal Large Language Models (MLLMs) into universal embedding models typically demands resource-intensive contrastive pre-training, while traditional hard negative mining methods suffer from severe false negative contamination. In this paper, we propose a highly data-efficient framework that bypasses extensive pre-training to build a robust multimodal representation space. We first introduce a hierarchical embedding prompt that provides strong latent conditioning. By explicitly anchoring task definitions at the system level, this prompting strategy effectively bridges the modality gap and unlocks powerful zero-shot embedding capabilities. Building upon this latent conditioning, we present Self-aware Hard Negative Sampling (SaHa). Unlike conventional candidate-space mining, SaHa shifts the mechanism to the query-space by mapping retrieved candidates back to their owner queries to rigorously filter out semantic false negatives. Furthermore, our method constructs mutually hard clusters, maximizing intra-task discrimination and batch efficiency without redundant forward passes. Extensive experiments demonstrate that our unified approach achieves highly competitive fine-tuning performance on the Massive Multimodal Embedding Benchmark using only a fraction of standard training data.
