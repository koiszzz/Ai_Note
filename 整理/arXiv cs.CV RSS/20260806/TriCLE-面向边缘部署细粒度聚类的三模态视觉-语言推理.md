---
published: 2026-08-06
title: TriCLE：面向边缘部署细粒度聚类的三模态视觉-语言推理
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/TriCLE- Tri-Modal Vision-Language Reasoning for Edge-Deployed Fine-Grained Clustering.md
source_note: "[[信息源/arXiv cs.CV RSS/TriCLE- Tri-Modal Vision-Language Reasoning for Edge-Deployed Fine-Grained Clustering]]"
source_sha256: 770d736a87ace3b8f08b0131d5180532f0a74dc305a23fe3d86103db43f0a485
original_url: https://arxiv.org/abs/2608.04175
processed: 2026-08-07
language: zh-CN
---

# TriCLE：面向边缘部署细粒度聚类的三模态视觉-语言推理

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04175)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/TriCLE- Tri-Modal Vision-Language Reasoning for Edge-Deployed Fine-Grained Clustering|查看原始文件]]

## 摘要

- 提出 TriCLE，面向边缘约束下飞机分类分组的三模态视觉-语言系统：从单张 RGB 图像生成保结构的 FLIR 风格热视图与伪 LiDAR 深度投影，在紧凑 Qwen3-VL 骨干中融合。
- 模型对齐到基于动力、机体家族、尺寸、设计年代与构型的专家飞机分类体系，输出反映工程相关相似性；序列级 GSPO 取得最强验证性能（验证准确率 88.33%，加权 F1 0.91）。
- 4 比特量化与注意力-显存优化后，对齐的 4B 模型适配 8GB 部署目标，每个三模态三元组处理耗时 1.48 秒。

## 正文

用于空中观测的边缘平台必须在受限显存、受限算力与间歇连接条件下解读飞机图像。这种场景对标准仅 RGB 识别模型和通用视觉-语言模型都很困难，尤其是在没有校准的热成像与 LiDAR 飞机数据时。我们提出 TriCLE，一个面向边缘约束下飞机分类分组的应用导向三模态视觉-语言系统。从单张 RGB 飞机图像出发，TriCLE 生成保结构的 FLIR 风格热视图与伪 LiDAR 深度投影，然后在一个紧凑的 Qwen3-VL 骨干中，将对齐后的视图与任务指令融合。模型对齐到基于推进方式、机体家族、尺寸、设计年代与构型的专家飞机分类体系，因此其输出反映工程相关的相似性，而不仅是表面外观。我们评估了监督微调、旋转保持 SFT 以及三种策略对齐方法：GRPO、GSPO 和 DAPO。序列级 GSPO 取得最强验证性能，在有效飞机输出上达到 88.33% 的验证准确率与 0.91 的加权 F1。在保留的飞机测试分区上，GSPO 达到 78.00% 的准确率与 0.793 的加权 F1，同时保持 94.00% 可解析的输出格式。经过 4 比特量化与注意力-显存优化后，对齐的 4B 模型适配 8GB 部署目标，每个三模态三元组处理耗时 1.48 秒。这些结果支持 TriCLE 作为可解释、边缘可行的飞机分组的实用原型，同时也强调需要在真实对齐的热成像与 LiDAR 传感器数据流上进一步验证。

## 关键词

#三模态 #边缘部署 #飞机分类 #视觉语言模型 #细粒度聚类
