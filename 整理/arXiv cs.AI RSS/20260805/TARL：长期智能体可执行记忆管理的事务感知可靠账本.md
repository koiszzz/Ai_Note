---
published: 2026-08-05
title: "TARL：长期智能体可执行记忆管理的事务感知可靠账本"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TARL- Transaction-Aware Reliable Ledgers for Executable Memory Management in Long-Term Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/TARL- Transaction-Aware Reliable Ledgers for Executable Memory Management in Long-Term Agents]]"
source_sha256: 14bb09c806609e28be81d4dc74ead899902cbc689bd3bb1dbefcde06edb92c44
original_url: "https://arxiv.org/abs/2608.03699"
processed: 2026-08-05
language: zh-CN
---

# TARL：长期智能体可执行记忆管理的事务感知可靠账本

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Han Xiao、Hongjun Xu、Xin Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03699)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TARL- Transaction-Aware Reliable Ledgers for Executable Memory Management in Long-Term Agents|查看原始文件]]

## 摘要

- 提出 TARL，记忆状态更新框架：把每个陈述映射到五种可执行动作之一——识别受影响记忆、解析其时间范围、比较来源可靠性、更新接受/待定/拒绝账本；通过比较替代更新操作产生的记忆状态训练，鼓励模型选择导向正确结果的操作。
- 持久记忆帮助长期智能体保留知识，但单个更新错误可反复扭曲未来检索与推理；多数现有系统把记忆更新简化为二元写/保持决策，无法区分新信息应添加、忽略、用于修订过时信念、拒绝为不可靠还是延后验证——这些选择可能共享相同二元标签却产生根本不同的记忆状态。
- 引入 TARL-Mem 基准，带细粒度动作标签与下一状态目标。
- 域内、跨来源、时间、反事实与顺序评估中，TARL 改善动作预测与状态恢复、减少记忆污染、保留冲突证据并限制累积损坏；完整模型实现在补充材料中。

## 正文

论文编号：arXiv:2608.03699v1（更新类型：new）。以下为摘要全文翻译。

持久记忆帮助长期智能体保留知识，然而单个更新错误可以反复扭曲未来的检索与推理。大多数现有系统把记忆更新简化为二元的写/保持决策，无法区分新信息应该被添加、忽略、用于修订过时的信念、作为不可靠而被拒绝，还是延后验证。这些选择可能共享相同的二元标签，却产生根本不同的记忆状态。我们引入 TARL，一个记忆状态更新框架：把每个陈述映射到五种可执行动作之一。TARL 识别受影响的记忆、解析其时间范围、比较来源可靠性，并更新接受、待定与拒绝账本。它还通过比较替代更新操作产生的记忆状态进行训练，鼓励模型选择导向正确结果的操作。我们还引入 TARL-Mem，一个带细粒度动作标签与下一状态目标的基准。在域内、跨来源、时间、反事实与顺序评估中，TARL 改善动作预测与状态恢复、减少记忆污染、保留冲突证据并限制累积损坏。完整的模型实现包含在补充材料中。

## 关键词

#长期记忆 #智能体记忆 #账本 #记忆更新
