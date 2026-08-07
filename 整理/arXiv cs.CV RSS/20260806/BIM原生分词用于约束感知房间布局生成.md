---
published: 2026-08-06
title: BIM原生分词用于约束感知房间布局生成
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/BIM-Native Tokenization for Constraint-Aware Room Layout Synthesis.md
source_note: "[[信息源/arXiv cs.CV RSS/BIM-Native Tokenization for Constraint-Aware Room Layout Synthesis|查看原始文件]]"
source_sha256: 713f7b33ca18ed7864bae32b63fd9825dd5ba9d7514bbcbfc07fe4b8b57c46ca
original_url: https://arxiv.org/abs/2512.04832
processed: 2026-08-07
language: zh-CN
---

# BIM原生分词用于约束感知房间布局生成

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.04832)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/BIM-Native Tokenization for Constraint-Aware Room Layout Synthesis|查看原始文件]]

## 摘要

- 提出用于建筑信息模型（BIM）场景中房间级布局生成的 BIM 原生分词方法，核心贡献在于表示层面：将每个房间编码为 BIM 令牌束（BIM-Token Bundles）序列，实现为稀疏属性-特征矩阵的列，在墙参考（平移/尺度不变）坐标下统一墙壁、开口和实体的分类与连续属性。
- 混合类型嵌入模块从该矩阵产生统一令牌向量；单个 Transformer 骨干以两种模式训练：仅编码器用于房间嵌入与检索，编码器-解码器用于自回归实体放置（数据驱动实体预测 DDEP）。
- 在共享本体与评估框架的受控同数据基准上，DDEP 优于桥接到本表示的 ATISS 与 BLT 基线；消融识别出联合连续特征嵌入和实体排序为主要驱动因素；编码器嵌入按类型聚类房间比大型通用文本编码器更紧密。

## 正文

本文提出了一种用于建筑信息模型（Building Information Modeling, BIM）场景中房间级布局生成的 BIM 原生分词方法。核心贡献在于表示层面：将每个房间编码为 BIM 令牌束（BIM-Token Bundles）序列，并将其实现为稀疏属性-特征矩阵的列，该矩阵在墙参考（平移/尺度不变）坐标下统一了墙壁、开口和实体的分类属性与连续属性。混合类型嵌入模块从该矩阵产生统一的令牌向量；随后单个 Transformer 骨干以两种模式训练：仅编码器模式用于房间嵌入和检索，编码器-解码器模式用于自回归实体放置，本文称之为数据驱动实体预测（Data-Driven Entity Prediction, DDEP）。在共享本体和评估框架的受控同数据基准上，DDEP 优于桥接到本表示的 ATISS 和 BLT 基线，消融研究确定联合连续特征嵌入和实体排序是主要驱动因素。编码器嵌入对房间按类型进行聚类，比大型通用文本编码器更紧密，而后者在类型内排序方面仍保持优势。本文将这项工作定位为证据：在精心设计的 BIM 分词之上使用适度规模的领域专用序列模型，是约束感知空间生成的有用原语，可补充本文同样进行了基准测试的通用 LLM/VLM。

## 关键词

#建筑信息模型 #房间布局生成 #分词 #Transformer #空间生成 #实体放置
