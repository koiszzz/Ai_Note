---
published: 2026-08-06
title: VQ-VAD：面向以人为中心的视频异常检测的向量量化运动表征学习
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/VQ-VAD- Vector-quantized Motion Representation Learning for Human-centric Video Anomaly Detection.md
source_note: "[[信息源/arXiv cs.AI RSS/VQ-VAD- Vector-quantized Motion Representation Learning for Human-centric Video Anomaly Detection]]"
source_sha256: c2a7cc337d7103f59a78ba52bc7a93e0b3c647b540dfc56c21f98fc9e346ee5c
original_url: https://arxiv.org/abs/2608.05069
processed: 2026-08-07
language: zh-CN
---

# VQ-VAD：面向以人为中心的视频异常检测的向量量化运动表征学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05069)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/VQ-VAD- Vector-quantized Motion Representation Learning for Human-centric Video Anomaly Detection|查看原始文件]]

## 摘要

- 视频异常检测（VAD）因异常稀缺和监控画面巨大的视觉变异性（光照、视角、人体外观变化）而固有地困难；为减少视觉噪声并解决隐私问题，近期工作转向基于姿态的 VAD，关注运动动力学而非原始视频
- 现有基于姿态的方法在连续潜在空间中对人类行为建模，限制了学习鲁棒行为分析所需的紧凑运动模式的能力
- 提出向量量化视频异常检测（VQ-VAD），一种学习离散运动表征的新颖以人为中心的异常检测框架；它改编了最初为图像生成设计的 VQ-GAN 以处理关键点序列，构建正常行为运动码本
- 仅用正常运动序列训练，VQ-VAD 通过识别无法映射到码本的高重建误差来检测异常；在域内准确率 81.83%（HR-SHT），从 CMU Panoptic 跨域迁移无需重训达到 76.69%（HR-SHT），跨数据集鲁棒性同样有竞争力

## 正文

视频异常检测（VAD）本质上是困难的，原因在于异常样本的稀缺以及监控画面中巨大的视觉变异性，包括光照、视角和人体外观的变化。为减轻视觉噪声并解决隐私问题，近期的研究转向了基于姿态的 VAD，它关注的是运动动力学而非原始视频数据。然而，现有的基于姿态的方法在连续潜在空间中对人类行为进行建模，这限制了它们学习鲁棒行为分析所需的紧凑运动模式的能力。

针对这一问题，我们提出了向量量化视频异常检测（VQ-VAD），一种新颖的以人为中心的异常检测框架，它学习离散的运动表征。VQ-VAD 将最初为图像生成开发的向量量化 GAN（VQ-GAN）改编为在关键点序列上运行，并构建正常行为的运动码本（motion codebook）。VQ-VAD 仅用正常运动序列训练，通过识别观测运动序列无法映射到所学码本时产生的高重建误差来检测异常。

我们在四个异常检测基准上，跨三种互补的评估设置（包括域内、跨域和跨数据集泛化）进行了大量实验。VQ-VAD 取得了强域内精度（在 HR-SHT [15] 上 81.83%），有效的跨域迁移（从 CMU Panoptic [14] 迁移到 HR-SHT [15] 无需重训即达 76.69%），以及有竞争力的跨数据集鲁棒性。本工作的代码库可在 https://github.com/TeCSAR-UNCC/VQ-VAD 获取。

## 关键词

#视频异常检测 #向量量化 #姿态 #运动表征
