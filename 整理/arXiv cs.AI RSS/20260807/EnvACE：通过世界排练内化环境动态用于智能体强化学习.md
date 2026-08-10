---
published: 2026-08-07
title: "EnvACE：通过世界排练内化环境动态用于智能体强化学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/EnvACE- Internalizing Environment Dynamics via World Rehearsal for Agentic Reinforcement Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/EnvACE- Internalizing Environment Dynamics via World Rehearsal for Agentic Reinforcement Learning]]"
source_sha256: 4abf5b723e0dfe074cb4a7eb87ada502a48bc40a4fdf1431296ce5c8aaad5f89
original_url: "https://arxiv.org/abs/2608.06197"
processed: 2026-08-07
language: zh-CN
---

# EnvACE：通过世界排练内化环境动态用于智能体强化学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zishan Xu, Zhiyuan Yao, Yuxin Chen, Yifu Guo, Zhengxi Lu, Yuquan Lu, Jinyang Huang, Yan Xu, Yasheng Wang, Weinan Zhang, Xingshan Zeng, Weiwen Liu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06197)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/EnvACE- Internalizing Environment Dynamics via World Rehearsal for Agentic Reinforcement Learning|查看原始文件]]

## 摘要

- 训练长时程工具使用的 LLM 智能体通常依赖与真实或合成可执行环境的交互（构建与验证成本高昂），或依赖难以接地的外部模拟器。
- 引入 EnvACE：智能体强化学习方法，用世界排练（world rehearsal）替代训练期间的外部环境交互——策略在行动与排练间交替：先生成工具调用，然后扮演环境角色产生该动作诱导的响应，并基于排练响应条件化后续决策；两个角色用任务成功奖励端到端联合优化。
- 通过世界排练，策略将动作与其环境响应之间的关系内化到参数中，产生直接支持决策的智能体世界模型。
- 在 BFCL-v4、tau²-Bench、VitaBench 与 FinMCP-Bench 上，EnvACE 取得强劲且可迁移的性能，总体评估中优于环境扩展基线；受控研究显示世界排练在模型规模上一致改进策略学习；测试时，内化的世界模型支持在承诺执行前进行私有排练，在中等排练预算下无需额外外部交互即可获得进一步增益；代码公开。

## 正文

训练长时程工具使用的 LLM 智能体通常依赖与真实或合成可执行环境的交互，其构建与验证成本高昂，或依赖难以接地的外部模拟器。我们引入 EnvACE，一种智能体强化学习方法，用世界排练（world rehearsal）替代训练期间的外部环境交互。策略在行动与排练之间交替：它首先生成工具调用，然后扮演环境角色，产生该动作诱导的响应，并基于排练响应条件化后续决策。两个角色使用任务成功奖励端到端联合优化。通过世界排练，策略将动作与其环境响应之间的关系内化到参数中，产生直接支持决策的智能体世界模型。在 BFCL-v4、tau²-Bench、VitaBench 与 FinMCP-Bench 上，EnvACE 取得强劲且可迁移的性能，在总体评估中优于环境扩展基线。受控研究进一步表明，世界排练在模型规模上一致改进策略学习。测试时，内化的世界模型支持在承诺执行前进行私有排练，在中等排练预算下无需额外外部交互即可获得进一步增益。我们的发现确立世界排练作为超越外部环境约束扩展 LLM 智能体训练的新路径。代码公开于 https://github.com/Within-yao/EnvACE。

## 关键词

#世界排练 #智能体强化学习 #工具使用 #环境动态
