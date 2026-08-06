# Agentic Reinforcement Learning with Self-Distilled Reward Shaping

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ranxu Zhang, Guinan Chen, Chenshaodong, Jinghao Lin, Xiaozhou Xu, Sunzhe, Yanyong Zhang, Chao Wang　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.03223)

------

arXiv:2608.03223v1 Announce Type: cross

Abstract: Agentic reinforcement learning enables LLM agents to learn through interaction, but sparse trajectory-level rewards reveal success without identifying which intermediate decisions deserve credit. Training-only privileged skills can provide denser supervision by allowing the same frozen policy snapshot to rescore fixed tokens from skill-free trajectories while conditioned on task-matched procedural skills. Existing methods, however, do not jointly calibrate teacher scores across interaction steps, relate teacher confidence to realized returns, and integrate the resulting signal into native reward-to-advantage construction. We introduce Agentic Reinforcement Learning with Self-Distilled Reward Shaping (ADRS), a framework for constructing return-associated token-level credit for multi-turn language agents. ADRS centers and normalizes privileged token scores within each step, modulates them with a return-associated Teacher Value Advantage (TVA) gate based on within-group confidence--return association, and incorporates the gated token signal into native RL credit construction. Together, these components determine what the teacher prefers, when that preference is return-relevant, and how it enters the native reinforcement-learning credit path, while keeping rollouts and inference skill-free. Finally, experiments across three interactive benchmarks show that ADRS consistently improves performance on long-horizon tasks, with gains persisting across RL backbones, reduced-data settings, unseen tasks, and extended training. For anonymous review, our code is available at the following the link: https://github.com/gitrxh/ADRS-arxiv
