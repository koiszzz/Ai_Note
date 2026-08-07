---
published: 2026-08-06
title: 基于MT-GNN的大脑形态测量预测：基于图度量张量嵌入的连续时间网格演化
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Predicting Brain Morphometry with MT-GNN- Mesh Evolution in Continuous Time with Graph-Based Metric .md
source_note: "[[信息源/arXiv cs.CV RSS/Predicting Brain Morphometry with MT-GNN- Mesh Evolution in Continuous Time with Graph-Based Metric ]]"
source_sha256: 83d182eea2ed859b262e7cd94aac77d520e7441ec68347d5590ccb2fa8b39d9a
original_url: https://arxiv.org/abs/2608.05132
processed: 2026-08-07
language: zh-CN
---

# 基于MT-GNN的大脑形态测量预测：基于图度量张量嵌入的连续时间网格演化

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05132)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Predicting Brain Morphometry with MT-GNN- Mesh Evolution in Continuous Time with Graph-Based Metric |查看原始文件]]

## 摘要

- 提出在连续时间内预测表面内在几何：每结构图网络预测逐顶点第一基本形式（度量张量），以引导时间的傅里叶编码为条件，支持任意多访视历史与任意预测视界。
- 预测度量由可微的尽可能刚性（ARAP）求解器解码为表面，在刚体对齐顶点误差上端到端训练。
- 在 ADNI 14 个皮层下结构上每个视界均预测最优（平均顶点误差相对时间均值 −2.29%，p=6.1×10⁻⁵，14/14 结构胜出），超越 DCM 与 TransforMesh。

## 正文

预测皮层下结构的形状如何从几次先前的扫描演化而来，可为预后和临床试验富集提供支持。现有的纵向网格预测器要么通过高维嵌入外推形状轨迹，要么直接回归顶点形变。我们则预测表面内在几何的连续时间演化：一个针对每个结构的图网络，在以引导时间的傅里叶编码为条件的情况下，为任意的因果多访视历史和任意预测视界预测未来逐顶点的第一基本形式（度量张量）。预测的度量由一个可微的尽可能刚性（As-Rigid-As-Possible）求解器解码为表面，模型在刚体对齐的顶点误差上端到端训练。通过重建进行训练既保证了解码后的预测是有效表面，又持续改善其结果。在来自 ADNI 数据集的 14 个皮层下结构上，所提出的网格演化模型（MT-GNN）在每个预测视界上都是所评估方法中预测最好的（平均顶点误差相对时间均值改善 −2.29%，p=6.1×10⁻⁵，在 14/14 个结构上胜出），领先于测地形状回归（DCM，−0.19%）和网格 Transformer（TransforMesh，−0.45%；p=1.2×10⁻⁴），且随视界增长领先优势进一步扩大。

## 关键词

#医学影像 #形态测量 #网格演化 #度量张量 #图神经网络
