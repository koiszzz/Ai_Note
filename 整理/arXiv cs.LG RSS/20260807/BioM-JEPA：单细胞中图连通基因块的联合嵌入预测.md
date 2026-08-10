---
published: 2026-08-07
title: "BioM-JEPA：单细胞中图连通基因块的联合嵌入预测"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/BioM-JEPA- joint-embedding prediction of graph-connected gene blocks in single cells.md"
source_note: "[[信息源/arXiv cs.LG RSS/BioM-JEPA- joint-embedding prediction of graph-connected gene blocks in single cells]]"
source_sha256: a25e4b5aa8f95feba03ee0b2f01a83645239b879b7aecd59d82bb058eef60440
original_url: "https://arxiv.org/abs/2608.05928"
processed: 2026-08-07
language: zh-CN
---

# BioM-JEPA：单细胞中图连通基因块的联合嵌入预测

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yuhao Wang, Zelin Zang, Yuxuan Liu, Zhen Lei, Stan Z. Li
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05928)

## 摘要

- 提出 BioM-JEPA：联合嵌入预测架构，预测由蛋白关联与语料共表达证据定义的图连通基因块的聚合表征，而非重建单个基因。
- 学生网络从细胞中其余基因推断每个目标块表征，慢更新教师从完整观测基因集提供对应目标。
- 块级预测的嵌入具有更高有效秩，且与检测基因深度的关联更弱；冻结嵌入保留表达、通路与邻域信息，扰动响应误差最低。
- 线性注意力避免构建二次基因-基因注意力矩阵；匹配单 epoch 实验中，微调吞吐量较 scFoundation 高 5.75 倍，保留嵌入吞吐量高 3.76 倍。

## 正文

单细胞转录组是协调生物程序的空间观测，但多数自监督模型通过重建单个基因学习。本文提出 BioM-JEPA，一种联合嵌入预测架构：预测由蛋白关联与语料派生共表达证据定义的图连通基因块的聚合表征。学生网络从细胞中其余基因推断每个目标块表征，慢更新教师则从完整观测基因集提供对应目标。在所报告的提取流程下，块级预测产生的嵌入相比 token 预测、随机块与重建对照，在测试诊断中具有更高有效秩、与检测基因深度的关联更弱。在 CellBench 任务上，冻结的 BioM-JEPA 嵌入保留表达、通路与邻域信息，并在所评估模型中取得最低的聚合扰动响应误差。表征诊断也与经典胰腺程序及基因扰动的构成关系一致。线性注意力避免了构建二次的基因-基因注意力矩阵；在批大小 8 的匹配单 epoch 人胰腺实验中，BioM-JEPA 的微调吞吐量比 scFoundation 高 5.75 倍，保留嵌入吞吐量高 3.76 倍。综合而言，这些结果支持图连通基因块作为单细胞生物学 JEPA 式表征学习的有效预测单元。

## 关键词

JEPA、单细胞、自监督学习、基因块、表征学习
