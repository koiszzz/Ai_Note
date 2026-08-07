---
published: 2026-08-06
title: WorldCycle：长时程视频世界模型的自验证强化学习
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/WorldCycle- Self-Verifiable Reinforcement Learning for Long-Horizon Video World Models.md
source_note: "[[信息源/arXiv cs.LG RSS/WorldCycle- Self-Verifiable Reinforcement Learning for Long-Horizon Video World Models]]"
source_sha256: 23bf364ddb9e5a482fa84a27ef1b74a7a0ef237db7c8d4a8804419736be4ad25
original_url: https://arxiv.org/abs/2608.04964
processed: 2026-08-07
language: zh-CN
---

# WorldCycle：长时程视频世界模型的自验证强化学习

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04964)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/WorldCycle- Self-Verifiable Reinforcement Learning for Long-Horizon Video World Models|查看原始文件]]

## 摘要

- 针对视频世界模型误差累积与 RL 训练验证瓶颈，提出可逆动作循环：序列与其逆序列合成后必须在解析上回到初始状态，从而提供免标注的长时程正确性监督。
- 提出 WorldCycle 自验证 RL 框架：从普通动作序列构造封闭动作循环及重复执行，优化空间闭合奖励与时间一致性奖励，使模型将动作学习为一致的状态算子。
- 发布 CycleBench 诊断基准；WorldCycle 将状态返回漂移降低最多 44%，复合动作准确率较基础模型提升近 4 倍。

## 正文

交互式视频世界模型对长时程规划和探索至关重要，但它们饱受误差累积（compounding errors）之苦。强化学习（RL）等训练后方法可以改进这些模型，但会遭遇验证瓶颈：对于任意的动作序列，不存在真值未来状态来度量长期漂移。

我们的关键洞见是，可逆动作循环使这种验证成为可能：由动作及其逆动作组成的序列在解析上必须返回初始状态，从而为长时程正确性提供免标注监督。在此基础上，我们提出 WorldCycle，一个自验证 RL 框架，它从普通动作序列构造封闭动作循环及其重复执行，并优化两个互补的奖励：空间闭合奖励（spatial closure reward），强制镜像的前向段与反向段之间的对称性；时间一致性奖励（temporal consistency reward），使重复循环执行之间的状态对齐。

这些奖励迫使模型将动作学习为一致的状态算子而非记忆的时间模式，并自然扩展到基础模型处理不佳的分布外复合动作循环。我们还发布了 CycleBench，一个用于在复杂动作结构下评估状态返回能力的诊断基准。

WorldCycle 将状态返回漂移降低最多 44%，并将复合动作准确率相对于基础模型提升近 4 倍，为物理接地世界模型（physically grounded world models）提供了重要基础。

## 关键词

#世界模型 #强化学习 #视频生成 #自验证 #长时程规划
