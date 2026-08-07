---
published: 2026-08-06
title: 遥感中基于VLM的联邦学习自适应策略有效性研究
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/On the Effectiveness of Adaptation Strategies for VLM-Based Federated Learning in Remote Sensing.md
source_note: "[[信息源/arXiv cs.CV RSS/On the Effectiveness of Adaptation Strategies for VLM-Based Federated Learning in Remote Sensing]]"
source_sha256: 94c0feebb4b3b7bdc1c6d027ef5bcd133b6cded62f79b27a78ae46748bb514b4
original_url: https://arxiv.org/abs/2608.04791
processed: 2026-08-07
language: zh-CN
---

# 遥感中基于VLM的联邦学习自适应策略有效性研究

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04791)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/On the Effectiveness of Adaptation Strategies for VLM-Based Federated Learning in Remote Sensing|查看原始文件]]

## 摘要

- 首次对遥感图像分类联邦学习中的 VLM 自适应策略进行比较研究，覆盖全量微调、仅编码器微调、提示学习和 LoRA 微调。
- 从三个标准分析：非独立同分布数据下的泛化能力、通信开销与本地计算复杂度。
- 在 BigEarthNet-S2、EuroSAT、RESISC45 和 ImageNet 上揭示任务特化、跨域泛化与效率间的权衡，并提出策略选择指导准则。

## 正文

联邦学习（FL）能够在分散的图像档案库上协作训练深度学习模型，而无需集中数据。这一范式在遥感（RS）领域尤其相关，因为法律监管、隐私关切和带宽限制制约了数据共享。然而，各客户端之间训练数据的异构性（即非独立同分布（non-IID）数据）会阻碍收敛并限制聚合后全局模型的泛化能力。为减轻训练数据异构性的不利影响，可以利用视觉语言模型（VLM）进行联邦学习，因为其可迁移的表征在分布偏移下已被证明具有稳健性。然而，VLM 的巨大参数量可能会在联邦环境中显著增加通信开销和本地计算复杂度。因此，选择一种能在泛化能力与通信、计算约束之间取得平衡的合适 VLM 自适应策略至关重要。针对这一问题，本文在 RS 图像分类背景下首次对用于 FL 的 VLM 自适应策略进行了比较研究。我们研究了全量微调、仅编码器微调、提示学习和低秩自适应（LoRA）微调，并从三个标准加以分析：1）非独立同分布数据下的泛化能力；2）通信开销；3）本地计算复杂度。在 BigEarthNet-S2、EuroSAT、RESISC45 和 ImageNet 上的实验揭示了任务特化、跨域泛化与效率之间的明显权衡。基于研究结果，我们得出了在不同运行约束下为 RS 图像分类 FL 选择合适的 VLM 自适应策略的指导准则。本工作代码公开于 https://git.tu-berlin.de/rsim/FL-RS-VLM。

## 关键词

#联邦学习 #遥感 #视觉语言模型 #参数高效微调 #LoRA
