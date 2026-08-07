---
published: 2026-08-06
title: LoRetta：面向全球尺度遥感稠密图像匹配的基础模型与大规模数据集
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/LoRetta- A Foundation Model and Extensive Dataset for Global-Scale Remote Sensing Dense Image Matchi.md
source_note: "[[信息源/arXiv cs.CV RSS/LoRetta- A Foundation Model and Extensive Dataset for Global-Scale Remote Sensing Dense Image Matchi]]"
source_sha256: 675522123732fb4b2df9d54c190e73008cb87faaf2e8acfc675baaef4b06a18c
original_url: https://arxiv.org/abs/2608.04106
processed: 2026-08-07
language: zh-CN
---

# LoRetta：面向全球尺度遥感稠密图像匹配的基础模型与大规模数据集

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04106)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/LoRetta- A Foundation Model and Extensive Dataset for Global-Scale Remote Sensing Dense Image Matchi|查看原始文件]]

## 摘要

- 将稠密匹配重构为定位-配准（localization-and-registration）：先定位可匹配重叠与仿射几何，再在对齐框架内精化稠密残差；据此提出基础模型 LoRetta，耦合可匹配性感知仿射定位与引导式稠密配准。
- 引入 LEVIR-GM 基准：全球尺度多时相光学匹配，103K 对齐对、827K 增强对、六大洲、五年、0.5-1024 米分辨率，含数据集原生可匹配性标签与统一评估协议。
- 在 LEVIR-GM 上 AUC 达 83.3%，优于最强基线 RoMa v2 1.6 个百分点，推理延迟降低 47.8%；宇航员-卫星与 UAV-卫星地理定位实验证明其可迁移性。

## 正文

稠密图像匹配建立像素级对应关系，支撑计算机视觉和摄影测量中的广泛应用。然而，将稠密匹配扩展到全球尺度遥感仍具挑战性，因为图像对可能在采集时间、季节、视角、空间分辨率和地表覆盖状态上存在差异。由此产生的大几何偏移、部分重叠以及本质上不可匹配的区域，使直接的稠密对应预测既不可靠又低效。

我们因此将稠密匹配重构为定位-配准（localization-and-registration）：首先定位可匹配的重叠区域和仿射几何，然后在对齐的框架内精化稠密残差。基于这一公式，我们提出 LoRetta——一个将可匹配性感知的仿射定位与引导式稠密配准耦合的基础模型。我们还引入 LEVIR-GM——一个带有数据集原生可匹配性标签的全球尺度多时相光学匹配基准（103K 对齐对、827K 增强对、六大洲、五年、0.5-1024 米分辨率）。我们进一步为稀疏、半稠密和稠密匹配器建立统一的评估协议。

在 LEVIR-GM 上，LoRetta 达到 83.3% 的曲线下面积（AUC），比最强基线 RoMa v2 高 1.6 个百分点，在 1 和 2 像素处的正确关键点百分比（PCK）增益更大，分别为 6.5 和 8.2 个百分点，同时推理延迟降低 47.8%。宇航员视角到卫星和无人机（UAV）到卫星的地理定位实验进一步证明了其作为可复用几何对齐器的迁移能力。

## 关键词

#遥感 #稠密匹配 #基础模型 #地理定位
