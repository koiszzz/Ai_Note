---
published: 20260806
title: "边缘计算交通智能的时空图 Transformer"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Spatiotemporal Graph Transformer for Traffic Intelligence in Edge Computing.md"
source_note: "[[信息源/arXiv cs.AI RSS/Spatiotemporal Graph Transformer for Traffic Intelligence in Edge Computing]]"
source_sha256: 1312f7b86083b274182427c1584772f2ef37c533263747e316af4ca16a5c5912
original_url: "https://arxiv.org/abs/2608.04075"
processed: 2026-08-06
language: zh-CN

---

# 边缘计算交通智能的时空图 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Laha Ale, Letian Lin, Na Cao, Zheng Ma, Peng Yu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04075)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Spatiotemporal Graph Transformer for Traffic Intelligence in Edge Computing|查看原始文件]]

## 摘要

- 准确交通预测对边缘计算中的主动资源管理至关重要，服务需求在空间和时间动态演变；实际蜂窝边缘系统中，交通显示相邻服务区域间强空间相关性和由用户移动和应用行为驱动的长程时间依赖。
- 现有递归预测方法可捕捉短期动态，但常难以在非平稳条件下建模长时程交通演变；本文提出时空图 Transformer 框架，联合建模边缘计算交通预测的空间交互和时间依赖。
- 框架用图神经网络捕捉服务区域间空间相关性，用基于 Transformer 的自注意力从历史交通观测学习长程时间模式；通过解耦空间表示学习与时间推理，为大规模时空交通建模提供有效机制；真实蜂窝网络数据集广泛实验显示图 Transformer 跨多个预测视界持续优于 GCN-RNN、GCN-LSTM 和 GCN-GRU 等递归图基线。

## 正文

准确交通预测对边缘计算中的主动资源管理至关重要，服务需求在空间和时间动态演变。实际蜂窝边缘系统中，交通显示相邻服务区域间强空间相关性和由用户移动和应用行为驱动的长程时间依赖。现有递归预测方法可捕捉短期动态，但常难以在非平稳条件下建模长时程交通演变。为应对此挑战，我们提出时空图 Transformer 框架，联合建模边缘计算交通预测的空间交互和时间依赖。框架用图神经网络捕捉服务区域间的空间相关性，并用基于 Transformer 的自注意力从历史交通观测学习长程时间模式。通过解耦空间表示学习与时间推理，所提方法为大规模时空交通建模提供有效机制。真实世界蜂窝网络数据集上的广泛实验表明，所提图 Transformer 跨多个预测视界持续优于 GCN-RNN、GCN-LSTM 和 GCN-GRU 等递归图基线。所得预测支持更有效的主动资源供给，并相对反应式管理策略降低过载风险。这些结果突出图增强注意力机制构建智能、自适应边缘计算系统的潜力。

## 关键词

#交通预测 #图Transformer #边缘计算 #时空建模 #arXiv