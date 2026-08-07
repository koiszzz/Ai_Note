---
published: 2026-08-06
title: WorldCycle：面向长程视频世界模型的自验证强化学习
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/WorldCycle- Self-Verifiable Reinforcement Learning for Long-Horizon Video World Models.md
source_note: "[[信息源/arXiv cs.AI RSS/WorldCycle- Self-Verifiable Reinforcement Learning for Long-Horizon Video World Models]]"
source_sha256: 0ea7a1a0990987c0986e3e5a01082e79313ffbc06e6eda2af826cb1978a38f78
original_url: https://arxiv.org/abs/2608.04964
processed: 2026-08-07
language: zh-CN
---

# WorldCycle：面向长程视频世界模型的自验证强化学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04964)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/WorldCycle- Self-Verifiable Reinforcement Learning for Long-Horizon Video World Models|查看原始文件]]

## 摘要

- 交互式视频世界模型的 RL 后训练遇到验证瓶颈：任意动作序列没有真实未来状态可测量长期漂移
- 关键洞见：可逆动作循环使验证成为可能——序列与其逆复合后必须解析地返回初始状态，提供免标注的长程正确性监督
- WorldCycle 构造闭合动作循环与重复执行，优化空间闭合奖励（镜像正反片段对称性）与时间一致性奖励；状态返回漂移最多降 44%，复合动作准确率提升近 4 倍，并发布 CycleBench 诊断基准

## 正文

交互式视频世界模型对长程规划与探索至关重要，但它们饱受误差累积之苦。强化学习（RL）等后训练方法可以改进这些模型，却遇到验证瓶颈：对于任意的动作序列，不存在可测量长期漂移的真实未来状态。我们的关键洞见是：可逆动作循环使这种验证成为可能——一个序列与其逆序列复合后必须解析地返回初始状态，从而在长程正确性上提供免标注的监督。基于此，我们提出 WorldCycle，一个自验证的 RL 框架：从普通动作序列构造闭合动作循环及其重复执行，并优化两个互补奖励：空间闭合奖励（强制镜像的正向与反向片段之间的对称性）与时间一致性奖励（对齐跨重复循环执行的状态）。这些奖励迫使模型把动作学成一致的状态算子而非记忆的时间模式，并自然扩展到基础模型处理不佳的分布外复合动作循环。我们进一步发布 CycleBench，一个用于在复杂动作结构下测试状态返回能力的诊断基准。WorldCycle 将状态返回漂移最多降低 44%，并将复合动作准确率较基础模型提升近 4 倍，为物理接地世界模型提供了重要基础。

## 关键词

#世界模型 #强化学习 #自验证 #视频生成
