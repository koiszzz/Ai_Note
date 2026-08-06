# Joint UAV Flight and Opportunistic Routing under Reinforcement Learning for Delay-Tolerant Networks

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Xiao Wang, Shun-Ren Yang　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.AI　|　原文：[打开链接](https://arxiv.org/abs/2608.04590)

------

arXiv:2608.04590v1 Announce Type: new

Abstract: The growing deployment of delay-tolerant networks (DTNs) has made store-carry-forward (SCF) communication indispensable under sparse connectivity.

However, intermittent contacts, finite buffers, and limited message time-to-live (TTL) often give rise to sparse delivery and congestion, leading to substantial end-to-end performance degradation.

To address this challenge, this study explores the joint optimization of decentralized opportunistic routing and controllable unmanned aerial vehicle (UAV) flight, aiming to enlarge future contacts through discrete UAV headings while enabling per-node replication under contact-limited observations.

Building upon this architecture, we study cooperative factored routing--UAV control under centralized training and decentralized execution (CTDE) and propose JUROR (Joint UAV flight and Opportunistic Routing, based on the proximal policy optimization (PPO) framework.

In our design, we first cast the problem as a factored partially observable Markov decision process with sequential motion--routing coupling and a per-step team reward; subsequently, decentralized actors act on local observations while a training-time critic uses global statistics, and an optional multi-horizon hotspot predictor provides auxiliary supervision.

Simulation results over four traffic modes demonstrate effective gains over PRoPHET and MaxProp, while retaining contact-limited decentralized execution.
