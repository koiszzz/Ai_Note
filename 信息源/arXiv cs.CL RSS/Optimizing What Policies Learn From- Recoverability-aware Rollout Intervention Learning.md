# Optimizing What Policies Learn From: Recoverability-aware Rollout Intervention Learning

> 数据源：arXiv cs.CL RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.CL)

> 作者：Zheyuan Zhang, Manqing Mao, Hong Wang, Zhuoer Wang, Samson Koelle, Jie Yuan, Yanjun Lin, James Feng, Nikki Lijing Kuang, Yanfang Ye, Wei Niu　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.05080)

------

arXiv:2608.05080v1 Announce Type: cross

Abstract: Critic-free group-based reinforcement learning has become a scalable approach for post-training large language models. However, most existing methods allocate the same number of rollouts to every task and trajectory state, even though some rollouts provide much more useful learning signals than others. Recent work has started to treat rollout generation as an adaptive decision, but two important limitations remain. First, intervention strategies are often based on fixed heuristics and therefore cannot adjust as the policy changes during training. Second, these methods usually decide only how many rollouts to generate, without explicitly controlling where and how to intervene. To address these limitations, we propose Recoverability-Aware Intervention Learning (RAIL), a training-time framework that learns how to generate rollouts based on the improvement produced by each intervention. RAIL models intervention selection as an online contextual-bandit problem and trains a recoverability controller using intervention traces collected through a shadow-to-live procedure. This allows the controller to keep learning while the underlying policy evolves. We evaluate RAIL in terms of effectiveness, adaptivity, expressiveness, and efficiency. Across multiple settings, RAIL consistently improves performance under limited rollout budgets. These results show that recoverability-aware intervention provides a principled way to generate more informative and less redundant rollouts, leading to stronger learning signals during post-training.
