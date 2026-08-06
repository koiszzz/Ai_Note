---
published: 2026-08-05
title: "AS-FedBridge：异构 ANN-SNN 联邦学习的伪脉冲桥蒸馏"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AS-FedBridge- Pseudo-Spike Bridge Distillation for Heterogeneous ANN-SNN Federated Learning.md"
source_note: "[[信息源/arXiv cs.LG RSS/AS-FedBridge- Pseudo-Spike Bridge Distillation for Heterogeneous ANN-SNN Federated Learning]]"
source_sha256: cde8e4ac9589b85cda6e16174b5e2357573e8dcd32b0bd73fc60bfabade2383c
original_url: "https://arxiv.org/abs/2608.03324"
processed: 2026-08-05
language: zh-CN
---

# AS-FedBridge：异构 ANN-SNN 联邦学习的伪脉冲桥蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Shengyang Li、Yiting Dong、Liuyang Song 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03324)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/AS-FedBridge- Pseudo-Spike Bridge Distillation for Heterogeneous ANN-SNN Federated Learning|查看原始文件]]

## 摘要

- 提出 AS-FedBridge，为混合 ANN-SNN 客户端定制的联邦学习框架：带伪脉冲接口的轻量桥有效把连续信号投影进脉冲兼容空间，促进 ANN-SNN 对齐。
- 联邦学习使分布式边缘设备协作训练模型，同时严格保持数据隐私；为促进资源受限边缘设备实际部署，脉冲神经网络（SNN）凭稀疏计算机制与高能效成为传统人工神经网络（ANN）的有前景替代；但联合训练 ANN 与 SNN 暴露表示错配挑战：ANN 连续实值激活与 SNN 离散时空脉冲之间的语义差距。
- 现有混合 ANN-SNN 联邦框架缺失，建立综合基准评估多个先进异构 FL 方法：实证分析显示 ANN-SNN 对齐程度与协作 FL 性能正相关。
- 四个数据集上 AS-FedBridge 一致展示先进准确率，同时缓解极端规模、架构与客户端异构挑战；框架实现模型性能与资源效率间高度可控权衡，仅引入边际计算开销——为混合 ANN-SNN 联邦学习系统建立稳健实用基础。

## 正文

论文编号：arXiv:2608.03324v1（更新类型：new）。以下为摘要全文翻译。

联邦学习使分布式边缘设备能够协作训练模型，同时严格保持数据隐私。为促进资源受限边缘设备上的实际部署，脉冲神经网络（SNN）凭其稀疏计算机制与高能效成为传统人工神经网络（ANN）的有前景替代。然而，联合训练 ANN 与 SNN 暴露了表示错配的挑战：这由信息表示差异内在导致，具体是 ANN 连续实值激活与 SNN 离散时空脉冲之间的语义差距。为克服这一障碍，我们提出 AS-FedBridge，一个为混合 ANN-SNN 客户端定制的新颖联邦学习框架。AS-FedBridge 配备一个带伪脉冲接口（Pseudo-Spike Interface）的轻量桥：有效把连续信号投影进脉冲兼容空间，以促进 ANN-SNN 对齐。鉴于现有混合 ANN-SNN 联邦框架的缺失，我们建立一个综合基准，对照多个先进异构 FL 方法评估。我们的实证分析显示 ANN-SNN 对齐程度与协作 FL 性能之间存在正相关。在四个数据集上，AS-FedBridge 一致展示先进准确率，同时缓解极端规模、架构与客户端异构的挑战。此外，我们的框架实现模型性能与资源效率之间高度可控的权衡。AS-FedBridge 在只引入边际计算开销的情况下实现这些稳健性能增益，为混合 ANN-SNN 联邦学习系统建立稳健且实用的基础。

## 关键词

#联邦学习 #脉冲神经网络 #异构客户端 #知识蒸馏
