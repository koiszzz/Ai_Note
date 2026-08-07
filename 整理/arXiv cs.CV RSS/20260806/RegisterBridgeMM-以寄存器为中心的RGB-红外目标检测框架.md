---
published: 2026-08-06
title: RegisterBridgeMM：以寄存器为中心的RGB-红外目标检测框架
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/RegisterBridgeMM- A Register-Centric Framework for RGB-Infrared Object Detection.md
source_note: "[[信息源/arXiv cs.CV RSS/RegisterBridgeMM- A Register-Centric Framework for RGB-Infrared Object Detection]]"
source_sha256: a57f871edbdb54447a7b01b5f7713236f3a9a36657fe6da74b862659c73b1a16
original_url: https://arxiv.org/abs/2608.04833
processed: 2026-08-07
language: zh-CN
---

# RegisterBridgeMM：以寄存器为中心的RGB-红外目标检测框架

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04833)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/RegisterBridgeMM- A Register-Centric Framework for RGB-Infrared Object Detection|查看原始文件]]

## 摘要

- RGB-红外（RGB-IR）目标检测受益于互补的可见光与热红外线索，但光照变化、天气变化和杂乱场景下的有效融合仍有挑战。
- 提出 RegisterBridgeMM，一个以寄存器为媒介的融合框架，组织为三阶段寄存器生命周期：聚合（Aggregate）、桥接（Bridge）与投影（Project），避免了密集的 patch 间跨模态交互。
- 在两个骨干流均冻结的情况下，RegisterBridgeMM 在 LLVIP、M3FD、DroneVehicle 和 FLIR-Aligned 四个基准上取得了所评估方法中最高的 mAP50-95。

## 正文

RGB-红外（RGB-IR）目标检测受益于互补的可见光和热红外线索，但在光照变化、天气变化和杂乱场景下，有效的融合仍具挑战。现有的 RGB-IR 融合方法常常以表达力强的 patch 级交互为代价，换取更轻量但约束更多的适配机制。

我们通过实验观察到，预训练的寄存器令牌（register tokens）在配对 RGB-IR 输入上同时包含模态共享和模态特有的信息，这表明它们可以充当跨模态通信的紧凑基板。基于这一观察，我们提出 RegisterBridgeMM，一个以寄存器为媒介的融合框架，组织为三阶段寄存器生命周期。"聚合"（Aggregate）保留从预训练继承的每模态寄存器汇总；"桥接"（Bridge）执行带共识残差调节的双向寄存器到 patch 读取；"投影"（Project）将所得寄存器汇总转化为 patch 特征的空间自适应校准。这一寄存器通路避免了密集的 patch 到 patch 跨模态交互，同时保留了预训练的 patch 表示。

在两个骨干流均冻结的情况下，RegisterBridgeMM 在全部四个基准——LLVIP、M3FD、DroneVehicle 和 FLIR-Aligned——上取得了所评估方法中最高的 mAP50-95。

## 关键词

#RGB红外融合 #目标检测 #寄存器令牌 #多模态
