---
published: 2026-08-05
title: "TriGlue：生成分子胶诱导三元复合物的生物学启发生成模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TriGlue- a Biology-Inspired Generative Model for Generating Molecular Glue-Induced Ternary Complex.md"
source_note: "[[信息源/arXiv cs.AI RSS/TriGlue- a Biology-Inspired Generative Model for Generating Molecular Glue-Induced Ternary Complex]]"
source_sha256: 77b9719a83d8f07fe470d2ddfee708d236b9228e029e3677be07e5198035d1ee
original_url: "https://arxiv.org/abs/2607.22143"
processed: 2026-08-05
language: zh-CN
---

# TriGlue：生成分子胶诱导三元复合物的生物学启发生成模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuliang Yan、Shuo Yan、Haochun Tang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22143)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TriGlue- a Biology-Inspired Generative Model for Generating Molecular Glue-Induced Ternary Complex|查看原始文件]]

## 摘要

- 把分子胶设计表述为三元复合物生成问题，提出生物学启发生成框架 TriGlue：受分子胶作用机制启发，把三元复合物生成分解为两个耦合阶段——接口估计与接口条件复合物生成；先开发 SE(3) 等变接口估计模块，从未结合单体结构预测几何约束的蛋白-蛋白接口；再引入接口条件三元流匹配网络，联合生成分子胶并预测组装三元复合物所需的刚体变换。
- 分子胶降解剂已成为靶向蛋白降解的有前景策略：诱导 E3 泛素连接酶与靶蛋白之间的三元复合物形成；尽管有治疗潜力，分子胶的计算设计仍基本未探索——与常规基于结构的药物设计不同，分子胶设计由未知蛋白-蛋白接口支配，需要同时建模配体生成、蛋白-蛋白对接与三元复合物组装。
- 大量实验显示 TriGlue 生成化学有效分子与合理三元复合物，凸显生物学启发生成建模加速分子胶发现的潜力；代码：https://github.com/yuliangyan0807/molecular-glue-design

## 正文

论文编号：arXiv:2607.22143v2（更新类型：replace-cross）。以下为摘要全文翻译。

分子胶降解剂已成为靶向蛋白降解的有前景策略：通过诱导 E3 泛素连接酶与靶蛋白之间的三元复合物形成。尽管有治疗潜力，分子胶的计算设计在很大程度上仍未探索。与常规基于结构的药物设计不同，分子胶设计由未知的蛋白-蛋白接口支配，需要同时建模配体生成、蛋白-蛋白对接与三元复合物组装。在本工作中，我们把分子胶设计表述为三元复合物生成问题，并提出生物学启发生成框架 TriGlue。受分子胶作用机制启发，我们把三元复合物生成分解为两个耦合阶段：接口估计与接口条件的复合物生成。首先，我们开发一个 SE(3) 等变接口估计模块，从未结合的单体结构预测几何约束的蛋白-蛋白接口。其次，我们引入一个接口条件的三元流匹配网络：联合生成分子胶，并预测组装三元复合物所需的刚体变换。大量实验表明，TriGlue 生成化学有效的分子并产生合理的三元复合物，凸显生物学启发生成建模加速分子胶发现的潜力。我们的代码可在 https://github.com/yuliangyan0807/molecular-glue-design 获取。

## 关键词

#分子胶 #靶向蛋白降解 #生成模型 #药物设计
