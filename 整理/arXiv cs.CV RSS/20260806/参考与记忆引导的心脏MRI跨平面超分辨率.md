---
published: 2026-08-06
title: 参考与记忆引导的心脏MRI跨平面超分辨率
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Cardiac MRI Through-Plane Super-Resolution Guided by Reference and Memory.md
source_note: "[[信息源/arXiv cs.CV RSS/Cardiac MRI Through-Plane Super-Resolution Guided by Reference and Memory|查看原始文件]]"
source_sha256: 65a285e190cb13afa1a32ee10de5c9ae402871504bd78432e87d871f62263de7
original_url: https://arxiv.org/abs/2607.07581
processed: 2026-08-07
language: zh-CN
---

# 参考与记忆引导的心脏MRI跨平面超分辨率

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.07581)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Cardiac MRI Through-Plane Super-Resolution Guided by Reference and Memory|查看原始文件]]

## 摘要

- 临床心脏 MRI 通常平面内分辨率高但跨平面分辨率粗，以缩短扫描时间并适应屏气与心脏运动约束，这限制了 3D 分析与诊断准确性。
- 提出 STRMSR，一种参考与记忆引导的跨平面超分辨率（SR）框架：利用同一受试者的高分辨率（HR）参考视图与中间 SR 结果作为记忆重建 HR 心脏体数据；采用由粗到细的上下文匹配在空间未对齐下建立低分辨率目标与参考/记忆图像间的稳健对应。
- 可学习的逐块动态特征聚合模块为每个局部块预测内容自适应混合权重，抑制不可靠特征迁移；实验在 WHS 心脏 MRI 数据集、两种参考协议（正交平面视图与长轴心室视图）、4x 与 8x 上采样下均持续优于基线；代码见 https://github.com/030108ming/STRMSR。

## 正文

临床心脏 MRI 通常以高平面内分辨率但粗跨平面分辨率采集，以减少扫描时间并适应屏气和心脏运动约束，这限制了 3D 分析和诊断准确性。本文提出 STRMSR，一个参考与记忆引导的跨平面超分辨率（super-resolution, SR）框架，通过利用从同一受试者采集的 HR 参考视图以及中间 SR 结果作为记忆，重建高分辨率（HR）心脏体数据。该方法使用由粗到细的上下文匹配，在空间未对齐的情况下建立低分辨率目标与参考/记忆图像之间的稳健对应关系。一个可学习的逐块动态特征聚合模块为每个局部块预测内容自适应的混合权重，有效融合动态信息，同时抑制不可靠的特征迁移。存储在记忆库中的中间 SR 结果确保了超分辨 3D 体数据的逐层一致性。在 WHS 心脏 MRI 数据集上，两种参考协议（正交平面视图和长轴心室视图）下、4 倍和 8 倍上采样因子的实验表明，该方法相对于基线始终取得一致的改进。代码可在 https://github.com/030108ming/STRMSR 获取。

## 关键词

#心脏MRI #超分辨率 #跨平面重建 #医学影像 #注意力机制 #3D重建
