# CVPO: Enhancing LLM Reinforcement Learning Reasoning via Value-Variance Adaptation and Dynamic Curriculum Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ziqi Jia, Yalu Ouyang, Bo Pang, Panpan Li, Hangfei Xu, Shengzhao Wen, Shiyong Li, Yanpeng Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CL　|　原文：[打开链接](https://arxiv.org/abs/2608.03068)

------

arXiv:2608.03068v1 Announce Type: cross

Abstract: Reinforcement learning (RL) has emerged as an effective method for enhancing the reasoning capabilities of large language models (LLMs). However, existing methods suffer from insufficient precision in feedback on generated answer trajectories and exhibit the phenomenon of problem difficulty drift. To address these challenges, we propose CVPO - Curriculum-guided Value-Variance Policy Optimization. At the response trajectory level, we find that token-level value-variance correlates with exploration intensity. Our theoretical analysis shows this variance bounds policy update magnitude. We then use the estimated trajectory value-variance to quantify the intrinsic randomness in generation. Based on this, we design a variance-aware advantage adjustment mechanism for different reward types. At the question level, we introduce a dynamic curriculum weighting method that adapts to question difficulty. This helps the model focus on tasks matched to its current ability during each training stage. Experimental results show our method outperforms strong value-based baselines like VAPO. It achieves better performance and stronger exploration, enabling more accurate and robust reasoning in language models across various math tasks.
