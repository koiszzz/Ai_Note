---
title: "实现因果感知：竞争性 SCM 与情境公平性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Implementing Causal Perception- Competing SCMs and Situated Fairness.md"
source_note: "[[信息源/arXiv cs.AI RSS/Implementing Causal Perception- Competing SCMs and Situated Fairness]]"
source_sha256: 8ad1dc1c8b581b9a0c746ed526b131d929e591e2befb705eb3fd74d3a4fae06f
original_url: "https://arxiv.org/abs/2608.03917"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 实现因果感知：竞争性 SCM 与情境公平性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jose M. Álvarez
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03917)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Implementing Causal Perception- Competing SCMs and Situated Fairness|查看原始文件]]

## 摘要

- 提供 Álvarez 与 Ruggieri（2025）因果感知框架的首个实现：操作化结构性（智能体在因果图上分歧）与参数性（智能体在图一致但在权重上分歧）因果感知。
- 设计计算干预与反事实分布的算法，提出合适的距离度量量化分歧。
- 用德国信用数据集说明因果感知在多专家决策设置中如何影响准确率与公平性：感知判定对距离度量与阈值的选择敏感；因果感知改变公平评估与基于阈值的决策。
- 证明偏差相对于智能体的 SCM 具有情境性，说明公平问题中的竞争性世界观不能被忽视。

## 正文

论文编号：arXiv:2608.03917v1（更新类型：new）。以下为摘要全文翻译。

当对同一系统持有竞争性结构因果模型（SCM）的智能体推断出不同的概率分布（包括在同一组干预下每个智能体 SCM 所隐含的假设分布）时，就会发生因果感知（causal perception）。它塑造智能体对系统的推理方式以及它们对其公平性的感知。因果感知是一个有前景的概率框架，但一直停留在纯理论层面。本工作提供 Álvarez 与 Ruggieri（2025）因果感知框架的首个实现。我们操作化结构性（智能体在因果图上分歧）与参数性（智能体在因果图上一致但在权重上分歧）因果感知。我们设计计算干预与反事实分布的算法，并提出合适的距离度量来量化分歧。使用德国信用数据集，我们说明因果感知如何在多专家决策设置中影响准确率与公平性。我们表明，感知判定对距离度量与阈值的选择敏感。我们还表明，因果感知会改变公平评估与基于阈值的决策。偏差被证明相对于智能体的 SCM 具有情境性，证明公平问题中的竞争性世界观不能被忽视。

## 关键词

#因果感知 #结构因果模型 #公平性 #多专家决策
