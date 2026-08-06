# InvFlowFD: Reference-Free and Background-Set-Free Perceptual Music Quality Metric with Flow Matching Inversion

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Alon Ziv, Harel Pogoda, Yossi Adi　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.SD　|　原文：[打开链接](https://arxiv.org/abs/2608.04142)

------

arXiv:2608.04142v1 Announce Type: cross

Abstract: Existing reference-free methods for evaluating music perceptual quality alleviate the need for paired noisy-clean data, but they still rely on a background set, which is used to compute aggregated statistics of clean audio samples. In this work, we propose a novel approach that eliminates this requirement, achieving background-set-free and reference-free quality estimation using only a pre-trained Flow Matching backbone. We demonstrate that unconditional Flow Matching inversion via simple Euler integration is sufficient to detect various artificial distortions and accurately rank music generation models against human perceptual judgments. We introduce InvFlowFD, which performs flow inversion and compares a group of inverted samples to the prior distribution. We evaluate our method against prior work, quantitatively and with a thorough human study. Results suggest that InvFlowFD is highly correlated with human perception of sound distortions, as well as generative models' quality, while being more flexible and less restrictive than existing metrics.
