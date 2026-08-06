# RoMeRL: Balancing Feedback Coverage and the Memory-Reward Trap in Self-Evolving Agent Memory via Reduced-Order Utility States

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Yi Yang, Zhennan Chen, Yihong Zhuang, Tiehan Fan, Yinan Chen, Jian Li, Jian Yang, Ying Tai　|　发布时间：Wed, 05 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2608.02508)

------

arXiv:2608.02508v2 Announce Type: replace

Abstract: Learning-based memory systems for self-evolving LLM agents face two tightly coupled challenges. First, trajectory-indexed utilities grow with the interaction history, thereby dispersing limited feedback over an ever-expanding state space. Second, because trajectory-level rewards are jointly assigned to co-retrieved memories, irrelevant experiences may receive misleading utility updates and consequently enter the memory-reward trap. To address these challenges, we introduce Reduced-Order Memory Reinforcement Learning (RoMeRL), which represents the growing trajectory-indexed utility space using a fixed-dimensional per-task memory state factorized by outcome polarity and memory dynamics. RoMeRL incorporates new experiences through a fixed set of semantic coordinates whose contents are updated or replaced over time, thereby concentrating feedback over a bounded utility support. Theoretically, we show that this reduced-order parameterization increases the average feedback received by each utility coordinate and characterize the steady-state occupancy of erroneous coordinates under a generic coordinate-transition model. Empirically, across ALFWorld and LifelongAgentBench, RoMeRL improves task performance, reduces the Cold-Q ratio by 80.0%, increases feedback density by approximately 6.0 times, reduces the maintained memory size by 84.4%, and cuts LLM calls by 21.1%. These results show that reduced-order utility states support efficient self-evolving agent memory while limiting persistent reward contamination. Code is available at: https://github.com/YOUNG-fnxm/RoMeRL
