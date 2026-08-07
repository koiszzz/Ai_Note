---
published: 2026-08-06
title: VQ-VAD：面向以人为中心的视频异常检测的矢量量化运动表示学习
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/VQ-VAD- Vector-quantized Motion Representation Learning for Human-centric Video Anomaly Detection.md
source_note: "[[信息源/arXiv cs.CV RSS/VQ-VAD- Vector-quantized Motion Representation Learning for Human-centric Video Anomaly Detection]]"
source_sha256: e2a3517278da076fceec2797f7bf8cc4a0d21c8a48e50a63cf6900b1274c1e53
original_url: https://arxiv.org/abs/2608.05069
processed: 2026-08-07
language: zh-CN
---

# VQ-VAD：面向以人为中心的视频异常检测的矢量量化运动表示学习

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05069)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/VQ-VAD- Vector-quantized Motion Representation Learning for Human-centric Video Anomaly Detection|查看原始文件]]

## 摘要

- 提出 VQ-VAD，一个学习离散运动表示的以人为中心的视频异常检测框架，将 VQ-GAN 适配到关键点序列并构建正常行为的运动码本。
- 仅用正常运动序列训练，通过高重建误差识别无法映射到码本的异常序列。
- 在四个异常检测基准的域内、跨域和跨数据集三种评估设置下进行实验。
- 域内准确率 81.83%（HR-SHT），从 CMU Panoptic 跨域迁移到 HR-SHT 达到 76.69% 且无需重训练。

## 正文

视频异常检测（VAD）由于异常样本稀少以及监控画面中的巨大视觉变异性（包括光照、视角和人体外观的变化）而固有地具有挑战性。为减轻视觉噪声并解决隐私问题，近期工作转向基于姿态的 VAD，它专注于运动动力学而非原始视频数据。然而，现有基于姿态的方法在连续潜在空间中建模人类行为，限制了其学习稳健行为分析所需的紧凑运动模式的能力。

我们通过提出矢量量化视频异常检测（VQ-VAD）来解决这一问题，这是一个学习离散运动表示的以人为中心的异常检测新框架。VQ-VAD 将最初为图像生成开发的矢量量化 GAN（VQ-GAN）适配到关键点序列上，构建正常行为的运动码本。VQ-VAD 仅使用正常运动序列训练，通过识别观察到的运动序列无法映射到学习码本时的高重建误差来检测异常。我们在四个异常检测基准上进行了三种互补评估设置的大量实验，包括域内、跨域和跨数据集泛化。VQ-VAD 取得了强大的域内准确率（HR-SHT [15] 上为 81.83%）、有效的跨域迁移（无需重新训练即可在 HR-SHT [15] 上达到 76.69%，源自 CMU Panoptic [14]），以及有竞争力的跨数据集鲁棒性。本工作的代码库可在 https://github.com/TeCSAR-UNCC/VQ-VAD 获取。

## 关键词

#视频异常检测 #矢量量化 #姿态估计 #码本学习
