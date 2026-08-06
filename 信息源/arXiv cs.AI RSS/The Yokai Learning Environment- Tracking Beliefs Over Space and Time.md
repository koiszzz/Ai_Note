# The Yokai Learning Environment: Tracking Beliefs Over Space and Time

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Constantin Ruhdorfer, Matteo Bortoletto, Johannes Forkel, Jakob Foerster, Andreas Bulling　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2508.12480)

------

arXiv:2508.12480v3 Announce Type: replace

Abstract: The ability to cooperate with unknown partners is a central challenge in cooperative AI and widely studied in the form of zero-shot coordination (ZSC), which evaluates an algorithm by measuring the performance of independently trained agents when paired. The Hanabi Learning Environment (HLE) has become the dominant benchmark for ZSC, but recent work has achieved near-perfect inter-seed cross-play performance, limiting its ability to track algorithmic progress. We introduce the Yokai Learning Environment (YLE) - an open-source multi-agent RL benchmark in which effective collaboration requires building common ground by tracking and updating beliefs over moving cards, reasoning under ambiguous hints, and deciding when to terminate the game based on inferred shared knowledge - features absent in the HLE, where beliefs are tied to hand slots and hints are truthful by rule. We evaluate the leading ZSC methods, including High-Entropy IPPO, Other-Play, and Off-Belief Learning, which achieve near-perfect inter-seed cross-play in the HLE, and show that in the YLE they exhibit persistent SP-XP gaps, degraded early-ending calibration, and weaker belief representations in cross-play, indicating failure to maintain consistent internal models with unseen partners. Methods that perform best in the HLE do not perform best in the YLE, indicating that progress measured on a single benchmark may not generalise. Together, these results establish YLE as a challenging new ZSC benchmark.
