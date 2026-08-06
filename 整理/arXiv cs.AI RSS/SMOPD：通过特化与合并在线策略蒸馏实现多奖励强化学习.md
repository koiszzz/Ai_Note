---
title: "SMOPD：通过特化与合并在线策略蒸馏实现多奖励强化学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SMOPD- Multi-Reward Reinforcement Learning via Specialize-and-Merge Online Policy Distillation.md"
source_note: "[[信息源/arXiv cs.AI RSS/SMOPD- Multi-Reward Reinforcement Learning via Specialize-and-Merge Online Policy Distillation]]"
source_sha256: 20f975083f8549e2347f35ca583ad24a354d3fcf039801d5455f7cb8a91de013
original_url: "https://arxiv.org/abs/2608.03092"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SMOPD：通过特化与合并在线策略蒸馏实现多奖励强化学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Wen Wang、Jiahua Bao、Tu Yongsiqi 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03092)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SMOPD- Multi-Reward Reinforcement Learning via Specialize-and-Merge Online Policy Distillation|查看原始文件]]

## 摘要

- 提出特化与合并在线策略蒸馏（SMOPD），两阶段多奖励优化训练方法：特化阶段用奖励优先级配置训练多个奖励特化教师，使每个奖励在其信号能有效驱动优化的条件下被学习；合并阶段用在线策略蒸馏把教师的奖励特化能力合并进单一学生策略，同时保持平衡的任务级优化。
- 现有组奖励解耦归一化策略优化（GDPO）通过聚合前分别归一化每个奖励维度缓解了直接标量化中奖励信号相互掩蔽的问题；但实验显示 GDPO 仍难以平衡不同粒度的奖励信号——模型可能同时收到给 0.1 到 1.0 细粒度分数的密集奖励与只给 0/1 二元反馈的稀疏奖励，稀疏奖励可能提供不足的优化信号。
- 在互补奖励（工具调用准确率与格式）与冲突奖励（有用与无害奖励）两种多奖励设置上验证：1.5B、3B 与 7B 骨干下 SMOPD 都优于 GDPO。

## 正文

论文编号：arXiv:2608.03092v1（更新类型：cross）。以下为摘要全文翻译。

我们旨在改善多奖励强化学习训练过程中的模型性能。现有的组奖励解耦归一化策略优化（GDPO）通过在聚合前分别归一化每个奖励维度，缓解了直接标量化期间奖励信号相互掩蔽的问题。然而，我们的实验表明，GDPO 仍难以平衡不同粒度的奖励信号。具体而言，在某些特定训练任务中，模型可能收到一个分配 0.1 到 1.0 细粒度分数的密集奖励，同时收到一个只提供 0 或 1 二元反馈的稀疏奖励。在这种情况下，我们发现稀疏奖励可能提供不足的优化信号，阻止其对应能力被有效强化。因此，如何在不牺牲已从细粒度奖励学到的能力的情况下强化稀疏奖励的优化信号？为克服这一局限，我们提出特化与合并在线策略蒸馏（Specialize-and-Merge Online Policy Distillation，SMOPD），一种两阶段的多奖励优化训练方法。特化阶段（Stage1-Specialize）：SMOPD 首先采用奖励优先级配置训练多个奖励特化教师，使每个奖励在其信号可以有效驱动优化的条件下被学习。合并阶段（Stage2-Merge）：SMOPD 随后利用在线策略蒸馏把这些教师的奖励特化能力合并进单一学生策略，同时保持平衡的任务级优化。为验证我们的方法，我们在两种多奖励设置上实验：互补奖励（工具调用准确率与格式）与冲突奖励（有用与无害奖励）。基于上述设置，SMOPD 在 1.5B、3B 与 7B 骨干上都优于 GDPO。

## 关键词

#多奖励强化学习 #策略蒸馏 #奖励平衡 #LLM训练
