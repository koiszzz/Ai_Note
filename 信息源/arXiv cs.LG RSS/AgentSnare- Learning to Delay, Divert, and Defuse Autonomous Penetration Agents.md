# AgentSnare: Learning to Delay, Divert, and Defuse Autonomous Penetration Agents

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Ruoyu Wang, Heng Zhao, Renjie Wu, Mengnan Zhao, Zhixuan Chu, Wanyu Lin, Tianhang Zheng　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2607.26998)

------

arXiv:2607.26998v2 Announce Type: replace-cross

Abstract: Large language model (LLM) agents automate penetration testing through an observation-action loop, selecting actions based on observations returned by tools. This dependence allows defenders to inject deceptive observations that can mislead the agent's decision-making process. However, existing defenses rely heavily on static, isolated artifacts planted in the environment prior to an attack. Advanced agents can progressively recognize and bypass these artifacts, ultimately refocusing their exploitation attempts on the real target. To address this issue, we introduce AgentSnare, a trajectory-adaptive deception system that dynamically unfolds a decoy environment to continually steer the penetration agent away from the real target. Specifically, AgentSnare employs an artifact-construction policy model that constructs candidate artifacts conditioned on the agent's interaction history and decoy state. AgentSnare then validates these candidates and incrementally incorporates valid artifacts into a factually consistent decoy environment, thereby delaying the attack by absorbing its tool calls, diverting its post-entry trajectory within the decoy, and defusing it by inducing completion reports grounded in decoy evidence. Across 15 CVE-Bench web applications and three attacker models, AgentSnare absorbs 46.8% of the agent's tool calls in the decoy and retains 55.9% of post-entry actions there, while 90.0% of completion attempts are grounded in decoy evidence; across all 45 attacker-CVE pairs, no real target is successfully exploited at pass@3.
