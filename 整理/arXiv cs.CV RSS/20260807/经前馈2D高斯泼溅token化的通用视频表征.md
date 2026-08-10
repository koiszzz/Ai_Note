---
published: 2026-08-07
title: "经前馈 2D 高斯泼溅 token 化的通用视频表征"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Versatile Video Representation via Feed-Forward 2D Gaussian Splatting Tokenization.md"
source_note: "[[信息源/arXiv cs.CV RSS/Versatile Video Representation via Feed-Forward 2D Gaussian Splatting Tokenization]]"
source_sha256: 8ae0b608351b57a3c35e38c82ae939e7b7f2e30fea73011be3ae8cbcf20a4039
original_url: "https://arxiv.org/abs/2508.11183"
processed: 2026-08-07
language: zh-CN
---

# 经前馈 2D 高斯泼溅 token 化的通用视频表征

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zhenghao Chen, Zicong Chen, Lei Liu, Yiming Wu, Dong Xu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2508.11183)

## 摘要

- 依赖固定网格、补丁式 token 化的近期视频表征方法常展现有限通用性；空间上，均匀分配固定数量 token 常导致低信息区域过度编码；时间上，不显式区分静态与动态内容时减少冗余仍具挑战。
- 引入高斯视频 transformer（GVT）：构建于前馈 2D 高斯泼溅（2DGS）token 化方案的通用视频表征框架；先从视频片段提取潜刚性特征，用所提时空高斯嵌入（STGE）机制前馈生成一组 2D 高斯表示。
- 2D 高斯不仅经光栅化期间为高（低）信息内容区域分配更高（更低）渲染权重增强空间适应性，还经避免逐视频优化改进泛化；引入高斯集划分（GSP）策略将 2D 高斯分为静态与动态集，显式建模跨时间步共享的静态内容与每时间步特定的动态内容，实现紧凑表征。
- UCF101、Kinetics 与 DAVIS 上跨视频重建、视频动作识别、视频压缩与视频生成四个任务评估：重建与压缩 SOTA、动作识别改进、视频生成与基线 MAGVIT-v2 相当。

## 正文

依赖固定网格、补丁式 token 化的近期视频表征方法常常展现有限的通用性。空间上，均匀分配固定数量的 token 常常导致低信息区域过度编码。时间上，不显式区分静态与动态内容时，减少冗余仍具挑战。本文引入高斯视频 transformer（Gaussian Video Transformer, GVT），一个构建于前馈 2D 高斯泼溅（2DGS）token 化方案的通用视频表征框架。研究首先从视频片段提取潜刚性特征，并用所提出的时空高斯嵌入（Spatio-Temporal Gaussian Embedding, STGE）机制，以前馈方式用一组 2D 高斯表示它们。这些 2D 高斯不仅通过光栅化期间给信息量较高（较低）的区域分配更高（更低）的渲染权重来增强空间适应性，还通过避免逐视频优化改进泛化。为增强时间通用性，研究引入高斯集划分（Gaussian Set Partitioning, GSP）策略：将 2D 高斯分离为静态与动态集，显式建模跨不同时间步共享的静态内容与每个时间步特定的动态内容，从而实现紧凑表征。研究在 UCF101、Kinetics 与 DAVIS 数据集上跨四个任务评估 GVT：视频重建、视频动作识别、视频压缩与视频生成。结果展示了最先进的重建与压缩性能、改进的动作识别，以及与基线 MAGVIT-v2 相当的视频生成性能。

## 关键词

视频表征、高斯泼溅、token 化、视频压缩、transformer
