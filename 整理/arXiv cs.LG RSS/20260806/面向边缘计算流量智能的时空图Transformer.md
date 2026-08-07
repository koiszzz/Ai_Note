---
published: 2026-08-06
title: 面向边缘计算流量智能的时空图Transformer
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Spatiotemporal Graph Transformer for Traffic Intelligence in Edge Computing.md
source_note: "[[信息源/arXiv cs.LG RSS/Spatiotemporal Graph Transformer for Traffic Intelligence in Edge Computing]]"
source_sha256: 4c762bc19ea09c9e48ef994d9068d337cd75a14ae0ccbf3c312cd0764bff6f0b
original_url: https://arxiv.org/abs/2608.04075
processed: 2026-08-07
language: zh-CN
---

# 面向边缘计算流量智能的时空图Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04075)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Spatiotemporal Graph Transformer for Traffic Intelligence in Edge Computing|查看原始文件]]

## 摘要

- 提出时空图 Transformer 框架，联合建模空间交互与时间依赖，用于边缘计算中的流量预测。
- 图神经网络捕捉服务区域间的空间相关性，Transformer 自注意力学习长程时间模式，并将空间表示学习与时间推理解耦。
- 在真实蜂窝网络数据集上始终优于 GCN-RNN、GCN-LSTM、GCN-GRU 等循环图基线，支持更有效的主动资源预配置。

## 正文

准确的流量预测对于边缘计算中的主动资源管理至关重要，在边缘计算中服务需求随空间与时间动态演变。在实际蜂窝边缘系统中，流量在相邻服务区域之间表现出强空间相关性，并因用户移动性与应用行为而具有长程时间依赖性。现有循环预测方法能捕捉短期动态，但在非平稳条件下往往难以建模长时域的流量演变。为应对这一挑战，我们提出一个时空图 Transformer 框架，在边缘计算的流量预测中联合建模空间交互与时间依赖。该框架利用图神经网络捕捉服务区域间的空间相关性，并借助基于 Transformer 的自注意力从历史流量观测中学习长程时间模式。通过将空间表示学习与时间推理解耦，所提方法为大尺度时空流量建模提供了一种有效机制。在真实蜂窝网络数据集上的大量实验表明，所提出的图 Transformer 在多个预测时域上始终优于循环图基线，包括 GCN-RNN、GCN-LSTM 与 GCN-GRU 模型。与被动式管理策略相比，由此得到的预测能支持更有效的主动资源预配置并降低过载风险。这些结果凸显了图增强注意力机制在构建智能自适应边缘计算系统方面的潜力。

## 关键词

#时空预测 #图Transformer #边缘计算 #流量预测 #GNN
