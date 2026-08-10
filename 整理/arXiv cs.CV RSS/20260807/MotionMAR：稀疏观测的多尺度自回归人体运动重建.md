---
published: 2026-08-07
title: "MotionMAR：稀疏观测的多尺度自回归人体运动重建"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/MotionMAR- Multi-scale Auto-Regressive Human Motion Reconstruction from Sparse Observations.md"
source_note: "[[信息源/arXiv cs.CV RSS/MotionMAR- Multi-scale Auto-Regressive Human Motion Reconstruction from Sparse Observations]]"
source_sha256: de02c895ca2e4d19d414058f9bdb4ff98dc08c305066c4368f335ac15fbed321
original_url: "https://arxiv.org/abs/2606.23000"
processed: 2026-08-07
language: zh-CN
---

# MotionMAR：稀疏观测的多尺度自回归人体运动重建

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yuhua Luo, Junsheng Zhang, Mengyin Liu, Xincheng Lin, Ming Yan, Zhudi Chen, Chenglu Wen, Lan Xu, Siqi Shen, Cheng Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2606.23000)

## 摘要

- 人体运动遵循时间层级结构，从低频全局轨迹过渡到高频细节；受计算机视觉多级自回归模型成功启发，提出 MotionMAR：稀疏观测运动重建的粗到细框架。
- 先估计人体运动全局轨迹，再逐步精化时间细节；架构含四个集成组件：时间多尺度 token 化（TMT）VQ-VAE 在多个时间分辨率编码数据，分离语义运动与微小抖动；运动自回归网络（MAN）在该潜空间运行跨尺度预测运动——先用粗索引建立全局结构，再生成更细索引恢复具体细节。
- 尺度感知控制（SAC）模块整合稀疏跟踪数据确保生成输出与实际观测对齐；运动精化网络（MRN）随后平滑连续姿态并消除量化伪影。
- 实验显示 MotionMAR 在 AMASS 数据集取得 SOTA 精度，为运动重建提供可靠且结构感知的方法；源码公开。

## 正文

人体运动遵循时间层级结构，从低频全局轨迹过渡到高频细节。受计算机视觉多级自回归模型成功的启发，研究提出 MotionMAR，一个用于稀疏观测运动重建的粗到细框架。它首先估计人体运动的全局轨迹，然后逐步精化时间细节。该架构由四个集成组件组成。时间多尺度 token 化（Temporal Multi-scale Tokenization, TMT）VQ-VAE 在多个时间分辨率编码数据，将语义运动与微小抖动分离。运动自回归网络（Motion Autoregressive Network, MAN）在该潜空间运行，跨尺度预测运动：首先通过粗索引建立全局结构，然后生成更细的索引以恢复具体细节。同时，尺度感知控制（Scale-Aware Control, SAC）模块整合稀疏跟踪数据，确保生成输出与实际观测对齐。运动精化网络（Motion Refinement Network, MRN）随后平滑连续姿态并消除量化伪影。实验表明，MotionMAR 在 AMASS 数据集上取得最先进精度，为运动重建提供了一种可靠且结构感知的方法。源代码公开于 http://www.lidarhumanmotion.net/motionmar/。

## 关键词

人体运动重建、自回归、多尺度、稀疏观测、VQ-VAE
