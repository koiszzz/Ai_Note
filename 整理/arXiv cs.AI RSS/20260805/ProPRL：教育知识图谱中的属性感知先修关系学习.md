---
published: 2026-08-05
title: "ProPRL：教育知识图谱中的属性感知先修关系学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ProPRL- Property-Aware Prerequisite Relation Learning in Educational Knowledge Graphs.md"
source_note: "[[信息源/arXiv cs.AI RSS/ProPRL- Property-Aware Prerequisite Relation Learning in Educational Knowledge Graphs]]"
source_sha256: e46c2306d87a1f02fbbc2bd422771eaaf457bc8e149edf2afce264e14d77d9a2
original_url: "https://arxiv.org/abs/2608.03006"
processed: 2026-08-05
language: zh-CN
---

# ProPRL：教育知识图谱中的属性感知先修关系学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xinghe Cheng、Jiapu Wang、Chaobo He 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03006)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ProPRL- Property-Aware Prerequisite Relation Learning in Educational Knowledge Graphs|查看原始文件]]

## 摘要

- 提出 ProPRL，属性感知先修关系学习框架：先从概念-资源超图与有向学习行为图学习互补概念表示（保向个性化传播聚合多跳行为证据）；再用成对条件门控为每个候选有序概念对自适应加权并融合两个视图；最后引入不可逆性约束，用反对称正则化器惩罚同一概念对两个方向同时高置信。
- 先修关系学习对自适应教学至关重要，但现有方法常把它表述为常规链接预测，限制其为单个候选对自适应整合互补教育证据、抑制矛盾反向预测的能力。
- 在多个真实教育数据集上的实验显示 ProPRL 在先修关系学习上取得最先进性能。

## 正文

论文编号：arXiv:2608.03006v1（更新类型：new）。以下为摘要全文翻译。

先修关系学习对自适应教学至关重要，然而现有方法往往把它表述为常规链接预测，限制其为单个候选对自适应整合互补教育证据与抑制矛盾反向预测的能力。我们提出 ProPRL，一个属性感知先修关系学习（Property-aware Prerequisite Relation Learning）框架。ProPRL 首先从概念-资源超图与有向学习行为图学习互补的概念表示，其中保向个性化传播（direction-preserving personalized propagation）聚合多跳行为证据。随后采用成对条件门控（Pair-conditioned Gate），为每个候选有序概念对自适应加权并融合两个视图。最后，不可逆性约束（Irreversibility Constraint）引入反对称正则化器，惩罚同一概念对两个方向同时高置信。在多个真实世界教育数据集上的实验表明，ProPRL 在先修关系学习上取得最先进性能。

## 关键词

#先修关系 #知识图谱 #自适应教学 #教育数据
