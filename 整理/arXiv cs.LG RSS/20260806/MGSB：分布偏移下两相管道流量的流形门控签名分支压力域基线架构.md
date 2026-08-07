---
published: 2026-08-06
title: MGSB：分布偏移下两相管道流量的流形门控签名分支压力域基线架构
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MGSB- Manifold Gated Signature Branch Pressure-Domain Baseline Architecture for Two-Phase Pipeline F.md
source_note: "[[信息源/arXiv cs.LG RSS/MGSB- Manifold Gated Signature Branch Pressure-Domain Baseline Architecture for Two-Phase Pipeline F]]"
source_sha256: a54dcc27771151fdfb46694fb93d951d1abf223377665ed3cc692c0fe70bb1b6
original_url: https://arxiv.org/abs/2608.04805
processed: 2026-08-07
language: zh-CN
---

# MGSB：分布偏移下两相管道流量的流形门控签名分支压力域基线架构

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04805)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MGSB- Manifold Gated Signature Branch Pressure-Domain Baseline Architecture for Two-Phase Pipeline F|查看原始文件]]

## 摘要

- 提出流形门控签名偏置（MGSB）：一种流型感知架构，结合流型条件特征融合、TT-RoughPath 编码器与 Mean-Teacher 一致性正则化，提升分布偏移下的鲁棒性
- 在留一组的评估下，MGSB 取得检测 F1 0.930 与 OOD F1 0.783，在严重特征破坏下大幅超越 CNN-LSTM 与全连接基线
- 消融表明所提架构（而非训练流程）是 OOD 鲁棒性的主要来源；Mahalanobis 距离分析确认保留条件确实处于分布外

## 正文

多相管道的泄漏检测模型在部署到与训练时不同的流型下时往往性能退化。现有评估通常只考察分布内运行条件下的性能，掩盖了气泡流向段塞流等流型转换引起的失效。我们提出流形门控签名偏置（MGSB，Manifold Gated Signature Bias），这是一种流型感知架构，将流型条件特征融合、TT-RoughPath 编码器与 Mean-Teacher 一致性正则化相结合，以提升分布偏移下的鲁棒性。在留一组评估（leave-one-group-out）下，MGSB 取得检测 F1 0.930 与 OOD F1 0.783，在严重特征破坏下大幅优于 CNN-LSTM 与全连接基线。消融研究表明，是所提架构（而非训练流程）构成了 OOD 鲁棒性的主要贡献，而 Mahalanobis 距离分析确认保留条件确实是分布外的。这些结果表明，显式的流型感知建模是工业多相管道中实现鲁棒、传感器无关泄漏检测的可行路径。

## 关键词

#泄漏检测 #多相管道 #分布偏移 #流型感知 #Mean-Teacher
