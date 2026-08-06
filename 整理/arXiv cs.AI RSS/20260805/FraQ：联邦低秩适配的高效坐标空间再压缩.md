---
published: 2026-08-05
title: "FraQ：联邦低秩适配的高效坐标空间再压缩"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FraQ- Efficient Coordinate-Space Recompression for Federated Low-Rank Adaptation.md"
source_note: "[[信息源/arXiv cs.AI RSS/FraQ- Efficient Coordinate-Space Recompression for Federated Low-Rank Adaptation]]"
source_sha256: 1945030fa45cf301ba537968979bb57efb4dc24fc4f5cab4e021bcc4ce81e20d
original_url: "https://arxiv.org/abs/2608.03605"
processed: 2026-08-05
language: zh-CN
---

# FraQ：联邦低秩适配的高效坐标空间再压缩

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shenghui Li、Thiemo Voigt
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03605)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FraQ- Efficient Coordinate-Space Recompression for Federated Low-Rank Adaptation|查看原始文件]]

## 摘要

- 提出 FraQ，联邦 LoRA 的高效坐标空间再压缩方法：从精确表示聚合的堆叠因子出发，把聚合分解为正交基与紧凑坐标矩阵；从小 Gram 矩阵恢复奇异谱，选择满足规定能量阈值的最小秩，把所选坐标子空间通过基映射回去构造全局适配器。
- 避免对稠密矩阵的昂贵分解，同时规避客户端间 LoRA 双因子参数化导致的聚合错配。
- 在文本分类与常识推理基准上，FraQ 达到接近未压缩基线的准确率，同时大幅减少下行通信，服务器端再压缩开销低。

## 正文

论文编号：arXiv:2608.03605v1（更新类型：new）。以下为摘要全文翻译。

使用低秩适配（LoRA）的联邦微调可以在不集中私有数据的情况下实现大语言模型（LLM）的高效协作适配。然而，LoRA 的双因子参数化在客户端之间造成聚合错配：朴素地平均因子并不能恢复其诱导更新的平均值。这种错配可以通过在完整权重空间中形成精确聚合然后重新压缩来避免，但分解由此产生的稠密矩阵在计算上昂贵且占用内存。我们提出 FraQ，联邦 LoRA 的高效坐标空间再压缩方法。从精确表示聚合的堆叠因子出发，FraQ 将其分解为正交基与紧凑坐标矩阵。然后它从小 Gram 矩阵恢复奇异谱，选择满足规定能量阈值的最小秩，并把所选坐标子空间通过基映射回去以构造全局适配器。在文本分类与常识推理基准上的实验表明，FraQ 达到接近未压缩基线的准确率，同时大幅减少下行通信，且服务器端再压缩开销低。

## 关键词

#联邦学习 #LoRA #低秩适配 #通信压缩
