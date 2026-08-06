# MultiPathFormer: Towards a Foundation Model for Multipath Wireless Propagation

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Blessed Guda, Kayley Sze, Carlee Joe-Wong　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05076)

------

arXiv:2608.05076v1 Announce Type: cross

Abstract: Recent advances in machine learning have enabled training of wireless foundation models, which aim to support tasks such as channel estimation, beam prediction, and localization based on wireless signals. Existing wireless foundation models typically pretrain on channel tensors using masked reconstruction over subcarriers, antennas, or time but ignore the physical characteristics of wireless propagation. In this work, we propose to instead use multipath propagation as the fundamental pretraining object. We present MultiPathFormer, an autoregressive foundation model that represents each transmitter-receiver link as an ordered sequence of continuous-valued path tokens and pretrains with next-path prediction. We introduce an Environmental RAG (retrieval-augmented generation) mechanism and a first-path codebook on top of the transformer backbone, leveraging environment knowledge to improve path statistics estimation like delay and power by up to 59%. MultiPathFormer pretrained on 27 environments transfers to unseen users and, after scenario-specific fine-tuning, outperforms training the corresponding models from scratch in new environments. Across downstream tasks, it outperforms SOTA channel-based foundation models, achieving 5.57 m mean localization error, 0.914 top-3 beam accuracy, 0.994 line-of-sight classification accuracy, and 0.561 channel estimation NMSE. These results show that path-level pretraining can learn reusable representations of wireless propagation.
