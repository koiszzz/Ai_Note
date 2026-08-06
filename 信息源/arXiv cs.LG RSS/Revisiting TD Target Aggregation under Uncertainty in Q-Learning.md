# Revisiting TD Target Aggregation under Uncertainty in Q-Learning

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Lipeng Zu, Xiaonan Zhang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03069)

------

arXiv:2608.03069v1 Announce Type: new

Abstract: Deep Q-Networks (DQNs) learn value functions through bootstrapped temporal-difference updates, where future returns are approximated using a greedy maximization over next-state action values. While effective, this aggregation rule is inherently sensitive to estimation noise: when Q-values are uncertain, the maximization operator deterministically favors the largest estimate, regardless of its reliability, leading to amplified errors through bootstrapping. In this work, we propose the \textbf{S}uccessor Rollout \textbf{A}ggregation \textbf{D}eep \textbf{Q}-Network (SADQ), a simple modification to Q-learning that regularizes how the TD target is formed. SADQ uses one-step rollout predictions from a learned dynamics model to guide the comparison among candidate next-state actions, introducing additional structure into the aggregation step without altering the underlying learning framework. The resulting mixed Bellman update attenuates unreliable maxima while preserving the standard fixed point under diminishing model error. We provide theoretical analysis showing that SADQ reduces bootstrap-induced overestimation in a pointwise manner. Empirically, SADQ consistently improves training stability across classical control tasks, real-world vector-based environments, and Atari benchmarks when compared to strong DQN variants.
