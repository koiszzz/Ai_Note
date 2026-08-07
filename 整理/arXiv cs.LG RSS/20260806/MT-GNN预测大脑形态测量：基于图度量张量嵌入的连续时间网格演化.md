---
published: 2026-08-06
title: MT-GNN预测大脑形态测量：基于图度量张量嵌入的连续时间网格演化
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Predicting Brain Morphometry with MT-GNN- Mesh Evolution in Continuous Time with Graph-Based Metric .md
source_note: "[[信息源/arXiv cs.LG RSS/Predicting Brain Morphometry with MT-GNN- Mesh Evolution in Continuous Time with Graph-Based Metric ]]"
source_sha256: 57a9b44481a9cb7afff22068ac49fd45a4cfc89bc7cedc6b456dcfc04e002a64
original_url: https://arxiv.org/abs/2608.05132
processed: 2026-08-07
language: zh-CN
---

# MT-GNN预测大脑形态测量：基于图度量张量嵌入的连续时间网格演化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05132)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Predicting Brain Morphometry with MT-GNN- Mesh Evolution in Continuous Time with Graph-Based Metric |查看原始文件]]

## 摘要

- 预测皮层下结构形状如何从少数几次先前扫描中演化，可能有助于预后判断与临床试验富集。
- 提出 MT-GNN 模型：在连续时间中预测表面的内在几何，通过可微的 ARAP 求解器将预测度量解码为表面，并以顶点误差端到端训练。
- 在 ADNI 数据集的 14 个皮层下结构上，MT-GNN 在所有评估方法中预测最佳，且随视界增长优势扩大。

## 正文

预测皮层下结构的形状如何从少数几次先前的扫描中演化，可能有助于预后和临床试验富集。现有的纵向网格预测器要么通过高维嵌入外推形状轨迹，要么直接回归顶点形变。我们转而预测表面在连续时间中的内在几何：一个单一的结构级图网络，在任意因果多次访问历史和任意预测视界下，预测未来逐顶点第一基本形式（度量张量），并以引导时间（lead time）的傅里叶编码为条件。预测的度量通过可微的"尽可能刚硬"（As-Rigid-As-Possible, ARAP）求解器解码为表面，模型以刚体对齐的顶点误差端到端训练。通过重建进行训练可使解码后的预测保持为有效的表面，并持续改进预测。

在来自 ADNI 数据集的 14 个皮层下结构上，所提出的网格演化模型（MT-GNN）在每个视界上都取得了所评估方法中的最佳预测（平均顶点误差相对时间均值改善 `-2.29%`，`p=6.1×10^-5`，在 14/14 个结构上优于它），领先于测地线形状回归（DCM，`-0.19%`）和网格 Transformer（TransforMesh，`-0.45%`；`p=1.2×10^-4`），且随着视界增长差距进一步扩大。

## 关键词

#大脑形态测量 #网格演化 #连续时间 #度量张量 #图神经网络 #MT-GNN
