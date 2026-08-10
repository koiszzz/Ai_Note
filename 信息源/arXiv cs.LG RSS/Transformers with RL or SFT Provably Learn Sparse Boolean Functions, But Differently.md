# Transformers with RL or SFT Provably Learn Sparse Boolean Functions, But Differently

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Bochen Lyu, Yiyang Jia, Xiaohao Cai, Zhanxing Zhu　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2511.17852)

------

arXiv:2511.17852v3 Announce Type: replace

Abstract: Transformers can acquire Chain-of-Thought (CoT) capabilities to solve reasoning tasks via fine-tuning. Reinforcement learning (RL) and supervised fine-tuning (SFT) are two primary approaches to this end. In this work, we examine RL with verifiable process rewards and SFT for learning $k$-sparse Boolean functions with a one-layer transformer through intermediate reasoning steps akin to CoT. In particular, we consider Boolean functions that can be recursively decomposed into fixed 2-sparse Boolean functions. We first analyze the learning dynamics of RL fine-tuning with verifiable process rewards and SFT in a unified way, allowing us to identify sufficient conditions under which the transformer provably learns these functions. We then verify that the conditions hold for three examples, including $k$-PARITY, $k$-AND, and $k$-OR, thus demonstrating their learnability via both RL and SFT. Notably, we reveal that RL and SFT exhibit distinct learning behaviors depending on supervision: RL learns the whole CoT chain simultaneously, whereas SFT without teacher forcing learns the CoT step-by-step. Overall, our findings provide insights on the mechanisms underlying RL and SFT and how they differ in triggering the CoT capabilities of transformers, and suggest that the comparison between RL and SFT should consider the intermediate supervision.
