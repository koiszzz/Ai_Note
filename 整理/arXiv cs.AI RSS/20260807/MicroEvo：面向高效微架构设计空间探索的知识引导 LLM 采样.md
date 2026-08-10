---
published: 2026-08-07
title: "MicroEvo：面向高效微架构设计空间探索的知识引导 LLM 采样"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MicroEvo- Knowledge-Guided LLM Sampling for Efficient Microarchitecture Design Space Exploration.md"
source_note: "[[信息源/arXiv cs.AI RSS/MicroEvo- Knowledge-Guided LLM Sampling for Efficient Microarchitecture Design Space Exploration]]"
source_sha256: e5278f4cd498d2a6224ea0074cff824fbf6c3bfe49413d2b19e944963ee9345d
original_url: "https://arxiv.org/abs/2608.06183"
processed: 2026-08-07
language: zh-CN
---

# MicroEvo：面向高效微架构设计空间探索的知识引导 LLM 采样

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jia Xiong, Runkai Li, Chenxu Niu, Guangyuan Gao, Changwen Xing, Yifan Zhang, Xinlai Wan, Jieran Cui, Chen Bai, Yusheng Hua, Ying Wang, Ming Ling, Xi Wang, Tao Xie
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06183)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MicroEvo- Knowledge-Guided LLM Sampling for Efficient Microarchitecture Design Space Exploration|查看原始文件]]

## 摘要

- 微架构设计空间探索受巨大搜索空间与昂贵 PPA 评估困扰，仅留少量仿真预算用于设计决策；现有方法执行盲搜索而不考虑微架构依赖，且未能有效从迭代搜索学习，导致浪费评估与弱帕累托收敛。
- 提出 MicroEvo：知识引导框架，将现成 LLM 与蒙特卡洛树搜索（MCTS）结合用于多目标微架构优化——组合 LLM 驱动进化算子、平衡帕累托贡献与多样性的帕累托感知树策略、提取并复用优化洞见的主动知识积累机制，以及在线自适应搜索行为的状态感知指令。
- 实验表明 MicroEvo 相对 NSGA-II 提升帕累托前沿质量最多 36.2%，实现 10.6 倍更高搜索效率，并展示对复杂工业规模核心的强可扩展性。
- 代码仓库见 https://github.com/GEAR-SEU/MicroEvo-ICCAD-26。

## 正文

微架构设计空间探索受巨大搜索空间与昂贵的 PPA 评估困扰，仅留下少量仿真预算用于设计决策。现有方法执行盲搜索而不考虑微架构依赖，并未能有效从迭代搜索中学习，导致浪费评估与弱帕累托收敛。本文中，我们提出 MicroEvo，一个知识引导框架，将现成 LLM 与蒙特卡洛树搜索（Monte Carlo Tree Search，MCTS）结合用于多目标微架构优化。MicroEvo 组合 LLM 驱动的进化算子、平衡帕累托贡献与多样性的帕累托感知树策略、提取并复用优化洞见的主动知识积累机制，以及在线自适应搜索行为的状态感知指令。实验表明，MicroEvo 相对 NSGA-II 提升帕累托前沿质量最多 36.2%，实现 10.6 倍更高的搜索效率，并展示对复杂工业规模核心的强可扩展性。代码仓库见 https://github.com/GEAR-SEU/MicroEvo-ICCAD-26。

## 关键词

#微架构 #设计空间探索 #LLM #蒙特卡洛树搜索
