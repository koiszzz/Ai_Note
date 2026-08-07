---
published: 2026-08-06
title: 面向约束感知房间布局合成的BIM原生分词方法
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/BIM-Native Tokenization for Constraint-Aware Room Layout Synthesis.md
source_note: "[[信息源/arXiv cs.LG RSS/BIM-Native Tokenization for Constraint-Aware Room Layout Synthesis]]"
source_sha256: ce71095e5b9771c9aae4386ce533f0e2ecb673e1cb9d97f19c7f3af6e3f91798
original_url: https://arxiv.org/abs/2512.04832
processed: 2026-08-07
language: zh-CN
---

# 面向约束感知房间布局合成的BIM原生分词方法

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.04832)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/BIM-Native Tokenization for Constraint-Aware Room Layout Synthesis|查看原始文件]]

## 摘要

- 提出 BIM 原生的房间级布局合成分词方案，将每个房间编码为 BIM-Token Bundle（属性-特征矩阵的列），统一墙体、开口与实体的类别和连续属性。
- 单一 Transformer 主干双模式训练：仅编码器用于房间嵌入与检索，编码器-解码器用于自回归实体放置（DDEP）。
- 同数据基准上 DDEP 优于桥接后的 ATISS 与 BLT 基线；消融表明联合连续特征嵌入与实体排序是主要驱动因素。

## 正文

我们提出一种 BIM 原生的分词（tokenization）方法，用于建筑信息建模（BIM）场景中的房间级布局合成。核心贡献在于表示层面：我们将每个房间编码为一系列 BIM-Token Bundle（BIM 令牌束），实现为稀疏属性-特征矩阵的列，该矩阵在基于墙体参考（平移/尺度不变）的坐标系下统一了墙体、开口和实体的类别属性与连续属性。一个混合类型嵌入模块从该矩阵产生统一的令牌向量；随后，一个 Transformer 主干以两种模式进行训练：仅编码器模式用于房间嵌入与检索，编码器-解码器模式用于自回归实体放置，我们称之为数据驱动实体预测（DDEP）。在一个共享本体和评估框架的可控同数据基准上，DDEP 优于桥接到我们表示中的 ATISS 和 BLT 基线，消融实验表明联合连续特征嵌入与实体排序是主要驱动因素。编码器嵌入在按类型聚类房间方面比大型通用文本编码器更紧凑，而后者在类型内排序上仍保有优势。我们将这项工作定位为证据：规模适中、领域专用的序列模型叠加精心设计的 BIM 分词，是约束感知空间生成的有用原语，可补充我们也做了基准测试的通用 LLM/VLM。

## 关键词

#BIM #房间布局合成 #分词 #Transformer #DDEP #空间生成
