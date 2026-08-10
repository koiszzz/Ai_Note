# Accelerating Q-learning through Efficient Value-Sharing across Actions

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Prabhat Nagarajan, Brett Daley, Martha White, Marlos C. Machado　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2606.29806)

------

arXiv:2606.29806v2 Announce Type: replace-cross

Abstract: Action values are foundational to many control algorithms such as Q-learning. Therefore, efficient action-value learning is central to reinforcement learning (RL). However, learning them can be slow, requiring many updates to move values from their initialization, typically near zero, to their true values, which may be far from zero. Moreover, action-value learning algorithms typically update each state-action pair independently, without learning a value that is common to all actions within a state. In this paper, we address these inefficiencies by introducing the mean-expansion layer, which accelerates action-value learning by sharing values across actions within a state and by changing the problem from directly learning potentially large action-values to learning a lower-norm representation of them. In deep RL, this layer can be applied as a parameter-free addition to Q-network architectures without altering the underlying algorithm. Applied to deep Q-networks and implicit quantile networks, it improves aggregate performance across 57 Atari 2600 games while increasing action gaps and dramatically reducing value overestimation.
