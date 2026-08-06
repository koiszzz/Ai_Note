# SP3O: Reinforcement Learning from Segment Preferences without Reward Modeling

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Evan Assmus, Qining Zhang, Lei Ying　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02951)

------

arXiv:2608.02951v1 Announce Type: cross

Abstract: Preference-based reinforcement learning (PbRL) for general stochastic MDPs often requires training a reward model. Existing reward-model-free methods are either restricted to bandits or deterministic MDPs, such as DPO or P3O, or use zeroth-order, gradient-free optimization, which in general exhibits a slower convergence rate than gradient-based algorithms. Furthermore, existing reward-model-free preference-based RL algorithms almost exclusively use trajectory-level feedback, which can require significant effort from a human evaluator when trajectories are long. On the other hand, segments are much shorter, so they are easier to compare and evaluate. In this paper, we introduce a novel reward-model-free, critic-free, and gradient-based PbRL algorithm compatible with segment preferences named Segment Pairwise Proximal Policy Optimization (SP3O). SP3O utilizes segment-level preference feedback to construct an accurate policy value difference estimator via off-policy importance sampling, and then uses the estimator to compute the policy gradient via a PPO-type loss function. We provide a theoretical basis for the algorithm and analyze the tradeoff in choosing the segment length. We also evaluate it experimentally against other PbRL/RLHF algorithms in robotic control and LLM finetuning settings to show its improved performance, especially in long-horizon tasks.
