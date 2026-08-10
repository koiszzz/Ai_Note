---
published: 2026-08-07
title: "EvReflection：反射移除的事件驱动微动力学"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/EvReflection- Event-Driven Micro-Dynamics for Reflection Removal.md"
source_note: "[[信息源/arXiv cs.CV RSS/EvReflection- Event-Driven Micro-Dynamics for Reflection Removal]]"
source_sha256: 47a9cb7fd97535e6296e6bdaab7c6f4f964d9dd31d1f159a707b86493366b7b2
original_url: "https://arxiv.org/abs/2608.06184"
processed: 2026-08-07
language: zh-CN
---

# EvReflection：反射移除的事件驱动微动力学

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jiaxiao Wang, Dachun Kai, Huyue Zhu, Quanquan Hu, Zhenyang Xu, Xiaoyan Sun
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06184)

## 摘要

- 尽管反射移除取得显著进展，当前方法主要利用单帧静态图像先验，仍受反射与透射层间固有歧义导致的严重残余伪影困扰。
- 提出利用事件信号打破该歧义：用事件相机捕捉微动力学，揭示两层间的差分运动。
- 呈现新颖事件驱动反射移除网络 EvReflection：利用动态线索进行层分离；设计微动力学解耦器从事件流解缠层特定运动作为先验，引导视差注意力矫正器干净移除 RGB 图像伪影。
- 应对数据稀缺：开发视差感知仿真流水线并构建 EVR² 基准数据集——该任务首个真实数据集；大量实验显示 EvReflection 在合成与真实基准均达 SOTA，PSNR 分别超越最佳竞争方法 1.6 dB 与 1.2 dB；代码、数据集与预训练模型公开。

## 正文

尽管反射移除取得显著进展，当前方法主要利用来自单帧的静态图像先验，并仍遭受由反射与透射层之间固有歧义引起的严重残余伪影。本文提出利用事件信号打破该歧义。通过使用事件相机捕捉微动力学（micro-dynamics），研究揭示这两层之间的差分运动。研究由此呈现一个新的事件驱动反射移除网络 EvReflection，利用这些动态线索进行层分离。具体地，研究设计一个微动力学解耦器（Micro-Dynamics Decoupler），从事件流解缠层特定运动作为先验，然后引导一个视差注意力矫正器（Parallax-Attention Rectifier）干净地移除 RGB 图像中的伪影。此外，为应对数据稀缺，研究开发一个视差感知仿真流水线，并构建 EVR² 基准数据集——该任务的第一个真实世界数据集。大量实验表明，EvReflection 在合成与真实世界基准上均取得最先进性能，PSNR 分别超越最佳竞争方法 1.6 dB 与 1.2 dB。代码、数据集与预训练模型见 https://github.com/JiaxiaoWang/EvReflection。

## 关键词

反射移除、事件相机、微动力学、层分离、视差
