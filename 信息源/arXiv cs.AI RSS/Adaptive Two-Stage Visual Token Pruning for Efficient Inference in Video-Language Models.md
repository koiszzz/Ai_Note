# Adaptive Two-Stage Visual Token Pruning for Efficient Inference in Video-Language Models

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Paribesh Regmi, Qingshuang Chen, Chi Zhang, Heba Aly, Yelin Kim, Hongda Mao　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CV　|　原文：[打开链接](https://arxiv.org/abs/2608.03112)

------

arXiv:2608.03112v1 Announce Type: cross

Abstract: Vision-language models excel at image and video understanding but suffer from high inference latency due to the need to process thousands of tokens per image, limiting their deployment on resource-constrained edge devices and in real-time surveillance applications. This challenge is further amplified in video processing, where multiple frames must be analyzed simultaneously. Existing token reduction techniques are largely developed for single-image inputs and therefore fail to account for the temporal and inter-frame redundancies present in video sequences. In addition, these methods generally rely on a fixed, uniform pruning ratio applied across all inputs, which is suboptimal because the degree of redundancy can vary significantly between different videos, necessitating content-dependent pruning levels to preserve critical information. To address these limitations, we propose a two-stage adaptive token pruning strategy specifically designed for video processing. In the first stage, we prune out the redundant frames, and in the second stage, token-level pruning is applied within the retained frames. Crucially, the pruning ratio in the second stage is determined adaptively based on the content of each video. This is achieved by analyzing the correlation structure of token embeddings to quantify redundancy, which is used to determine the ratio. Importantly, our method is entirely post-hoc and requires no additional training or fine-tuning, while achieving strong empirical gains; notably, it improves accuracy by +7\% on a video captioning benchmark at 10\% token retention, while reducing computation TFLOPs by 95\%.
