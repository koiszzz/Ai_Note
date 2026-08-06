# TerraZero: Procedural Driving Simulation for Zero-Demonstration Self-Play at Scale

> 数据源：arXiv cs.LG RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.LG)

> 作者：Zhouchonghao Wu, Akshay Rangesh, Weixin Li, Wei-Jer Chang, Zachary Lee, Saeed Bonab, Tim Wang, Wei Zhan　|　发布时间：Thu, 06 Aug 2026 00:00:00 -0400　|　分类：cs.LG　|　原文：[打开链接](https://arxiv.org/abs/2607.13028)

------

arXiv:2607.13028v2 Announce Type: replace

Abstract: Training robust autonomous driving agents requires a simulator fast enough for reinforcement learning at scale, realistic enough to ground behavior in real-world map structure, and diverse enough to cover the safety-critical long tail that logged data rarely contains. We present TerraZero, a procedural driving simulator and self-play training stack that meets these goals. A configurable C engine runs simulation on the CPU and policy inference on the GPU over a zero-copy path, sustaining 1.3M agent-steps per second on a single server-grade GPU, far faster than existing object-level simulators, while keeping fidelity lighter single-agent systems omit: heterogeneous agents, multiple dynamics models, and full traffic-rule enforcement. TerraZero uses logged data only as a source of real-world map geometry, populating each map with randomized rule-based road users and signal controllers and randomizing agent dynamics, rewards, and sizes per episode, so one map yields an effectively unbounded set of scenarios. Every reported policy trains from scratch by reinforcement learning alone, with zero human demonstrations, no imitation, no logged trajectories, and no fallback planner at inference, on a compute-efficient self-play recipe scaled across GPUs. The policies generalize zero-shot across cities and datasets, including emergent left-hand-traffic driving without explicit supervision. As an ego policy, a single checkpoint is, to our knowledge, the first fully learned policy to top both val14 and the interactive long-tail InterPlan suite. On Waymo Open Sim Agents realism the same recipe outperforms other demonstration-free methods and is competitive with the strongest reference-anchored self-play method. One stack serves both roles: state-of-the-art demonstration-free driving policies across dynamics for cars and trucks, and sim agents that jointly control vehicles, pedestrians, and cyclists.
