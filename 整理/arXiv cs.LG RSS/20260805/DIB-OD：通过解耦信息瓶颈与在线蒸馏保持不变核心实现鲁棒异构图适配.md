---
published: 2026-08-05
title: "DIB-OD：通过解耦信息瓶颈与在线蒸馏保持不变核心实现鲁棒异构图适配"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DIB-OD- Preserving the Invariant Core for Robust Heterogeneous Graph Adaptation via Decoupled Inform.md"
source_note: "[[信息源/arXiv cs.LG RSS/DIB-OD- Preserving the Invariant Core for Robust Heterogeneous Graph Adaptation via Decoupled Inform]]"
source_sha256: 3c98d739b172612902399273f5f6920dd88fbb7c56571506de0ede3b44a2aeae
original_url: "https://arxiv.org/abs/2604.10882"
processed: 2026-08-05
language: zh-CN
---

# DIB-OD：通过解耦信息瓶颈与在线蒸馏保持不变核心实现鲁棒异构图适配

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yang Yan、Yunxuan Li、Qiuyan Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.10882)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DIB-OD- Preserving the Invariant Core for Robust Heterogeneous Graph Adaptation via Decoupled Inform|查看原始文件]]

## 摘要

- 提出 DIB-OD，结合解耦信息瓶颈与在线蒸馏的异构图适配框架：多视图教师先学习压缩的、任务相关表示，蒸馏为可迁移核心分支与互补残差分支；互信息目标与基于 HSIC 的依赖正则化阻止分支间信息重叠；置信度感知语义正则化器与冻结教师在目标域适配期间锚定可靠预训练信息。
- 图预训练可促进跨图数据集知识迁移，但严重结构与特征偏移可能导致负迁移与适配诱导的可复用知识覆盖。
- 七个图分类数据集（化学、生物与社会网络域）实验显示相对代表性基线一致改善，尤其挑战性跨类型迁移下。

## 正文

论文编号：arXiv:2604.10882v3（更新类型：replace-cross）。以下为摘要全文翻译。

图预训练可以促进跨图数据集的知识迁移，但严重的结构与特征偏移可能导致负迁移，以及适配引起的对可复用知识的覆盖。我们提出 DIB-OD，一个结合解耦信息瓶颈（Decoupled Information Bottleneck）与在线蒸馏（Online Distillation）的异构图适配框架。多视图教师首先学习一个压缩的、任务相关的表示，并将其蒸馏为可迁移的核心分支与互补的残差分支。互信息目标与基于 HSIC 的依赖正则化阻止分支之间的信息重叠，而置信度感知的语义正则化器与冻结教师则在目标域适配期间锚定可靠的预训练信息。在覆盖化学、生物与社会网络领域的七个图分类数据集上的实验表明，相对代表性基线取得一致改进，尤其是在具有挑战性的跨类型迁移场景下。

## 关键词

#异构图 #图预训练 #信息瓶颈 #域适配
