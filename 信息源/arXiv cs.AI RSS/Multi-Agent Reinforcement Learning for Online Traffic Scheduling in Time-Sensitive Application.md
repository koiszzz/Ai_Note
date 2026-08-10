# Multi-Agent Reinforcement Learning for Online Traffic Scheduling in Time-Sensitive Application

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：Marcos Carvalho, Fatih Temiz, Shavbo Salehi, Melike Erol-Kantarci, Daniel F. Macedo　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.NI　|　原文：[打开链接](https://arxiv.org/abs/2608.05346)

------

arXiv:2608.05346v1 Announce Type: cross

Abstract: Time-sensitive networking (TSN) is increasingly integrated into mobile edge computing (MEC) to support applications with stringent latency requirements, such as extended reality (XR). However, existing TSN scheduling solutions predominantly rely on static optimization techniques or centralized learning models that are based on fixed traffic patterns, limiting their effectiveness in dynamic environments. In practice, MEC environments often host multiple co-located XR traffic flows whose characteristics evolve over time, creating complex inter-queue dependencies that current schedulers fail to capture. Addressing these challenges requires adaptive, decentralized scheduling mechanisms capable of coordinating multiple TSN queues under varying traffic conditions. To this end, this paper proposes a multi-agent reinforcement learning (MARL) framework for TSN scheduling, where each TSN queue is modeled as an autonomous agent. The Heterogeneous-Agent Proximal Policy Optimization (HAPPO) algorithm is employed to explicitly model inter-agent dependencies and jointly optimize service delivery across queues. The simulation results demonstrate that the proposed approach reduces average frame waiting times by up to 26.8% and worst-case delays by approximately 16.8%, highlighting its effectiveness in dynamic XR-driven MEC scenarios.
