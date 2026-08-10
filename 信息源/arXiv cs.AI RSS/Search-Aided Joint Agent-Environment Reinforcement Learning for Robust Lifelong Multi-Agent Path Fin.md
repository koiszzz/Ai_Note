# Search-Aided Joint Agent-Environment Reinforcement Learning for Robust Lifelong Multi-Agent Path Finding with Rotations

> 数据源：arXiv cs.AI RSS
> RSS：[打开源文件](https://export.arxiv.org/rss/cs.AI)

> 作者：He Jiang, Jingtian Yan, Yulun Zhang, Yimin Tang, Tanishq Duhan, Rishi Veerapaneni, Guillaume Sartoretti, Jiaoyang Li　|　发布时间：Fri, 07 Aug 2026 00:00:00 -0400　|　分类：cs.RO　|　原文：[打开链接](https://arxiv.org/abs/2608.05588)

------

arXiv:2608.05588v1 Announce Type: cross

Abstract: Lifelong Multi-Agent Path Finding (LMAPF) requires repeatedly planning collision-free paths for agents that continuously receive new goals upon reaching their current ones. While many learning-based planners have been proposed for LMAPF, most rely on oversimplified kinematic assumptions that may overlook motion constraints critical to real-world performance. In this work, we study a more realistic LMAPF model derived from many real-world automated warehouse systems, termed LMAPF-R2, which incorporates robust safety constraints and in-place rotation constraints. These constraints substantially increase coordination difficulty, particularly in highly constrained spaces. To address these challenges, we propose Search-Aided Joint Reinforcement Learning (SJRL). We first augment neural policies with Causal PIBT, a single-step search-based planner that resolves agents' collisions and propagates their intentions. We then introduce a unified RL formulation that jointly optimizes agent and environment policies, where the environment policy learns graph edge costs to provide global movement guidance via backward Dijkstra search. Experiments demonstrate that SJRL achieves significant improvements over the strong search-based planner, Causal-PIBT, across multiple high-density maps. We further validate SJRL in a challenging mixed-reality warehouse environment with 8 physical robots and 248 virtual robots.
