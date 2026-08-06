# LEAP: Lean Environment-Feedback via Adaptive Pruning for Code RL in GPU Kernel Generation

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Tankun Li, Zhi Chen, Yaohua Tang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.01804)

------

arXiv:2608.01804v2 Announce Type: replace

Abstract: Post-training large language models (LLMs) via reinforcement learning (RL) has significantly advanced code generation capabilities. To bypass the heavy memory footprint of critic networks, current state-of-the-art frameworks leverage critic-free paradigms like Group Relative Policy Optimization (GRPO) tied to rule-based verification sandboxes. However, applying these frameworks to low-level systems programming, such as CUDA kernel generation-presents severe challenges: binary pass/fail rewards introduce severe signal sparsity, while multi-turn environmental feedback loops suffer from prohibitive compilation latencies and reward dilution across trajectories. In this work, we introduce LEAP (Lean Environment-Feedback via Adaptive Pruning), a scalable and computationally efficient multi-turn RL framework optimized for low-level hardware accelerator alignment. LEAP features Difficulty-Conditioned Pruning (DCP), a dynamic gating mechanism that adaptively cuts off simple and overly catastrophic tasks from multi-turn expansion, focusing resource-heavy compilation and hardware exploration exclusively on high-value, complex tasks. To fully operationalize these paths without manual hyperparameter engineering, we propose a Rank-Based Reward formulation. By deriving scale-free relative advantages from pairwise tournament outcomes within the GRPO rollout group, our method inherently penalizes token inefficiency on simple prompts while maximizing learning gradients on challenging distributions. Empirical evaluations show that LEAP achieves superior first-turn proficiency and robust multi-turn debugging resilience while converging faster than unpruned multi-turn baselines, establishing a practical paradigm for low-level code RL.
