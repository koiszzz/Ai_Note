# Aligning Large Vision-Language Models at Test Time: A Trajectory-Guided Structured Sampling Approach

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Tianbao Jiang, Weicong Ni, Gerard de Melo, Linlin Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03204)

------

arXiv:2608.03204v1 Announce Type: cross

Abstract: Post-training reinforcement learning (RL) algorithms are commonly used to align large vision-language models (LVLMs) with human intent and the requirements of visual reasoning tasks. However, existing RL-based alignment methods are often resource-intensive and encounter mismatches between training objectives and inference-time distributions. To bridge this gap, we propose a novel test-time alignment approach that leverages trajectory-guided structured sampling for dynamic inference-time refinement, achieving better alignment with visual grounding and ensuring logical consistency. Our approach begins with curating a reasoning memory bank via a trajectory learning algorithm, which decomposes complex question solving into ordered sequences of predefined reasoning patterns. It subsequently accomplishes inference-time alignment by first collecting trajectories from reasoning memory bank to establish a global structural reasoning prior, and then using an iterative Markov Chain Monte Carlo (MCMC) algorithm for localized multi-objective refinement of the reasoning trace. Experiments across multiple multimodal reasoning datasets demonstrate that our approach significantly improves accuracy without incurring prohibitive inference overhead. These results establish trajectory-guided test-time sampling as a scalable and effective alternative to traditional post-training alignment, particularly for complex visual reasoning tasks.
