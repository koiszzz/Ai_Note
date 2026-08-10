# When Experience Becomes Instruction: Trajectory Poisoning in Self-Evolving Agent Skill Systems

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Jialuo Chen, Lingqi Jiang, Xinhao Deng, Xiaohu Du, Jianan Ma, Yunhao Feng, Yuqi Qing, Zhihao Yuan, Linkang Du, Jingyi Wang　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.05563)

------

arXiv:2608.05563v1 Announce Type: cross

Abstract: Self-evolving skill (SES) systems distill agent trajectories into persistent skills, allowing untrusted experience to become trusted instruction. We introduce PoisonedEvolution, a trajectory-poisoning attack on this promotion process. Our skill-visible black-box attacker can inspect a target skill and contribute bounded evidence, but cannot observe private pools or evolution logic or edit the skill bank. Artifact poisoning requires Inclusion, Evolution Attribution, and Realization. Attribution is the distinctive bottleneck: the target behavior must appear causally useful, recurrent, and generalizable before promotion. We evaluate four representative security-effect families using inert canary specifications. At 10% attacker support, across six mainstream LLM evolvers in SkillClaw, PoisonedEvolution embeds target behaviors in 546/600 trials (91.0% SER). On the structurally different Trace2Skill pipeline at the same ratio, it embeds target behaviors in 369/600 trials (61.5% SER), demonstrating transfer across evolution architectures. In a representative controlled study, three consistent attacker records suffice in a 30-record batch, whereas a single record is much weaker. Ablations identify recurring support, causal framing, and domain-aligned encoding as the main determinants of success. These findings expose evidence promotion as a security boundary for self-evolving agents.
