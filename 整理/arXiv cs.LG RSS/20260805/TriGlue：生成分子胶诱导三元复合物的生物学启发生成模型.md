---
published: 2026-08-05
title: "TriGlue：生成分子胶诱导三元复合物的生物学启发生成模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/TriGlue- a Biology-Inspired Generative Model for Generating Molecular Glue-Induced Ternary Complex.md"
source_note: "[[信息源/arXiv cs.LG RSS/TriGlue- a Biology-Inspired Generative Model for Generating Molecular Glue-Induced Ternary Complex.]]"
source_sha256: 8d5150b85ed6c2ecc1f76e04808be7fe7fb18b955fa3cd361e185c0f53793794
original_url: "https://arxiv.org/abs/2607.22143"
processed: 2026-08-05
language: zh-CN
---

# TriGlue：生成分子胶诱导三元复合物的生物学启发生成模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yuliang Yan、Shuo Yan、Haochun Tang、Yiqin Sun、Enyan Dai
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22143)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/TriGlue- a Biology-Inspired Generative Model for Generating Molecular Glue-Induced Ternary Complex.|查看原始文件]]

## 摘要

- 分子胶降解剂通过诱导 E3 泛素连接酶与靶蛋白之间的三元复合物形成，已成为靶向蛋白降解的有前景策略；尽管有治疗潜力，分子胶的计算设计仍基本未被探索。
- 与常规基于结构的药物设计不同，分子胶设计由未知蛋白质—蛋白质界面支配，需要同时建模配体生成、蛋白质—蛋白质对接与三元复合物组装。
- 把分子胶设计形式化为三元复合物生成问题，提出生物学启发生成框架 TriGlue：受分子胶作用机制启发，把三元复合物生成分解为两个耦合阶段——界面估计与界面条件复合物生成。
- 首先开发 SE(3) 等变界面估计模块：从未结合单体结构预测几何约束的蛋白质—蛋白质界面；其次引入界面条件三元流匹配网络：联合生成分子胶并预测组装三元复合物所需的刚体变换。
- 大量实验表明 TriGlue 生成化学有效分子与合理三元复合物，凸显生物学启发生成建模加速分子胶发现的潜力。
- 代码：https://github.com/yuliangyan0807/molecular-glue-design

## 正文

论文编号：arXiv:2607.22143v2（更新类型：replace）。以下为摘要全文翻译。

分子胶降解剂通过诱导 E3 泛素连接酶与靶蛋白之间的三元复合物形成，已成为靶向蛋白降解的一种有前景策略。尽管有治疗潜力，分子胶的计算设计在很大程度上仍未被探索。与常规基于结构的药物设计不同，分子胶设计受未知蛋白质—蛋白质界面的支配，并要求同时建模配体生成、蛋白质—蛋白质对接与三元复合物组装。在这项工作中，我们把分子胶设计形式化为一个三元复合物生成问题，并提出一个生物学启发的生成框架 TriGlue。受分子胶作用机制的启发，我们把三元复合物生成分解为两个耦合阶段：界面估计与界面条件的复合物生成。首先，我们开发一个 SE(3) 等变的界面估计模块，从未结合的单体结构预测几何约束的蛋白质—蛋白质界面。其次，我们引入一个界面条件的三元流匹配网络，联合生成分子胶并预测组装三元复合物所需的刚体变换。大量实验表明，TriGlue 生成化学有效的分子并产生合理的三元复合物，这凸显了生物学启发生成建模加速分子胶发现的潜力。我们的代码可在 https://github.com/yuliangyan0807/molecular-glue-design 获取。

## 关键词

#分子胶 #三元复合物 #蛋白质降解 #流匹配 #生成模型
