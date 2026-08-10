# Search2Skill: Skill Distillation Beyond Knowledge Boundaries Via Rubric-Based Reinforcement Learning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Muyang Ye, Tian Lan, Feihu Jiang, Yongshi Ye, Wuyunsiqin, Bin Zhu, Qianghuai Jia, Zhao Xu, Weihua Luo, Ye Wang, Jinyang Zhang, Longyue Wang, Lingfeng Bao　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.05245)

------

arXiv:2608.05245v1 Announce Type: new

Abstract: Reusable skills, which encapsulate the procedural knowledge required to solve real-world professional tasks, offer LLM-based agents a path toward self-evolution in expert domains. Existing self-evolving skill methods construct skills internally from the model's parametric knowledge or trajectories, and are therefore bounded by what the model already knows. However, the domain conventions and standard procedures underlying professional skills often lie beyond this boundary and are hard to elicit from the agent alone. To address this issue, we therefore propose a novel framework, Search2Skill, that automatically identifies the agent's capability gaps, searches external sources to address them, and distills the retrieved evidence into structured, reusable skills. Specifically, Search2Skill is optimized by a rubric-based reinforcement learning scheme that jointly improves when to search, how to search, and how to generate skills. Experiments on eight expert-level domains from three benchmarks show that Search2Skill consistently outperforms both search-augmented and trajectory-based skill-learning baselines under both streaming and held-out evaluation protocols. Further analyses show that the gains arise from skill abstraction rather than raw retrieved evidence, and that the acquired skills transfer across model scales.
