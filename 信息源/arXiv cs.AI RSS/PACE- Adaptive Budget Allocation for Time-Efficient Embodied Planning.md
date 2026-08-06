# PACE: Adaptive Budget Allocation for Time-Efficient Embodied Planning

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Yuchen Huang, Xijiang Ying, Zhenhua Ma, Xiaxiang Yuan, Zhijie Gao, Jiayi Huang, Ruichi Mao, Jiazheng Zhang, Hongsheng Ti, Maotao Tian, Rong Shi, Lu Zhao, Shizhuang Zhang, Zhuo Cui, He Wang, Ling Liu, Wei Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.03034)

------

arXiv:2608.03034v1 Announce Type: cross

Abstract: Reasoning-enhanced large language models have achieved remarkable improvements in planning tasks, yet their deployment in embodied systems remains impractical due to prohibitive inference delays-often exceeding minutes per planning instance. The fundamental bottleneck stems from the serial nature of existing paradigms: models must complete all reasoning before any action execution, leaving execution time windows entirely unexploited. We introduce PACE (Planning with Adaptive Cognitive Effort), a framework that enables interleaved reasoning and execution through two key innovations: an Interleaved Think-Act architecture that pipelines cognitive processing with action execution, and a Dynamic Budget Allocator that adapts reasoning token budgets to available execution time windows. On the Robotouille benchmark using Qwen3-8B-AWQ, PACE achieves a 10% success rate-representing a 67% improvement over the ReAct+Think baseline-while delivering 6.9 times acceleration in thinking time compared to unconstrained reasoning. The framework hides 66.8% of thinking time within execution windows, demonstrating that strategic cognitive effort allocation can simultaneously improve both planning quality and time efficiency. These results provide evidence that time-aware architectural innovations enable reasoning models to operate in latency-sensitive embodied domains where they were previously impractical.
