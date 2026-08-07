---
published: 2026-08-06
title: HiResNets：带中央凹残差流的原生全高清视频识别
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/HiResNets- Native Full-HD Video Recognition with Foveal Residual Streams.md
source_note: "[[信息源/arXiv cs.CV RSS/HiResNets- Native Full-HD Video Recognition with Foveal Residual Streams]]"
source_sha256: 3ab4481bd3f1beace4c1c222556afe6f4fe394d0e4b33fb95a203fb949d8d34c
original_url: https://arxiv.org/abs/2608.02140
processed: 2026-08-07
language: zh-CN
---

# HiResNets：带中央凹残差流的原生全高清视频识别

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02140)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/HiResNets- Native Full-HD Video Recognition with Foveal Residual Streams|查看原始文件]]

## 摘要

- 提出 HiResNets：卷积块为对数平方（logarithmic-square）内存与计算增长的残差网络，可快速处理超高分辨率视频，摆脱网格采样带来的二次或更高复杂度
- 关键洞见：利用残差架构的残差流作为高分辨率缓冲区，卷积块仅通过对数极坐标图像扭曲（log-polar image warp）读写；各层自适应聚焦帧内不同部分，仅焦点附近保持极高分辨率
- 完整高分辨率表征在残差流中逐步构建（类比生物视觉的扫视），并给出消除残差流分辨率二次依赖的理论构造；实验显示学会类人注视策略，在困难的自我中心视频识别（小物体、细粒度）上表现优越

## 正文

近期图像与视频识别的大量进展是以内存为代价换来的：更大的模型、更高的分辨率和更长的时序上下文。不可避免的组成部分是内存与计算随图像分辨率的二次（或更高）增长，这是卷积网络与视觉 Transformer 中网格采样的固有属性。在这项工作中，我们研究卷积块为对数平方增长（logarithmic-square growth）的残差网络，使其能够快速处理超高分辨率视频。关键洞见是利用残差架构的残差流作为高分辨率缓冲区，卷积块仅通过对数极坐标图像扭曲（log-polar image warp）操作对缓冲区进行读写。各层自适应地聚焦每帧的不同部分，仅在焦点附近保持非常高的分辨率。完整的高分辨率表征在残差流中逐步构建，类比生物视觉中眼球扫视（saccades）形成完整图像，并给出消除残差流分辨率二次依赖的理论构造。实验表明，我们提出的 HiResNets 学会像人类视觉一样围绕场景进行中央凹注视（foveate），在困难的自我中心视频识别任务中表现优越，尤其是含小物体与细粒度识别的自我中心视频。

## 关键词

#视频识别 #高效架构 #中央凹视觉 #自我中心视频
