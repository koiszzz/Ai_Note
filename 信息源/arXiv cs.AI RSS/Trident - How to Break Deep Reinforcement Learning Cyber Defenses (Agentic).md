# Trident : How to Break Deep Reinforcement Learning Cyber Defenses (Agentic)

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Ryozo Masukawa, Ian Bryant, Armita Kazeminajafabadi, Sanggeon Yun, Hyunwoo Oh, SungHeon Jeong, Nathaniel D. Bastian, Mahdi Imani, Mohsen Imani　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.CR　|　原文：[打开链接](https://arxiv.org/abs/2608.04317)

------

arXiv:2608.04317v1 Announce Type: cross

Abstract: Autonomous cyber defense systems based on Deep Reinforcement Learning (DRL) have attracted significant research attention, yet remain evaluated almost exclusively against static, heuristic red agents, leaving their robustness against adaptive threats critically understudied. Meanwhile, recent advances in Reinforcement Learning with Verifiable Rewards (RLVR) have improved LLM reasoning, but their integration into cybersecurity remains elusive due to the absence of suitable benchmark environments and interaction datasets. To bridge this gap, we introduce Trident, an agentic LLM red teaming framework comprising three components: a dynamic benchmark with isolated sandbox servers spanning CybORG CAGE 4 and CyberWheel, a dataset comprises over 13,000 high-fidelity red-blue interaction trajectories for RLVR, and a ``Code-as-Policy'' RLVR agentic architecture Trident Agentic). The latter reformulates red agent training as a contextual bandit via a tripartite Log Summarizer--Planner--Coder design, where a trainable Planner generates complete attack strategies from compressed execution logs, which a frozen Coder translates into executable Python policies deployed against live DRL defenders. Empirical evaluations reveal a fundamental brittleness in existing defenses: with a single trainable 7B planner, Trident reduces blue agent defensive performance by an average of 522% compared to static red agent baselines while autonomously discovering emergent behaviors such as decoy avoidance and adaptive state prioritization that static heuristics entirely fail to uncover.
