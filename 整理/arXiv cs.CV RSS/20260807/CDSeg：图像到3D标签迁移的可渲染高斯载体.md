---
published: 2026-08-07
title: "CDSeg：图像到 3D 标签迁移的可渲染高斯载体"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/CDSeg- A Renderable Gaussian Carrier for Image-to-3D Label Transfer.md"
source_note: "[[信息源/arXiv cs.CV RSS/CDSeg- A Renderable Gaussian Carrier for Image-to-3D Label Transfer]]"
source_sha256: 34a322c3d25d64abe71830eab0e6391fa55d52bb61205f8145122904870db6be
original_url: "https://arxiv.org/abs/2608.05482"
processed: 2026-08-07
language: zh-CN
---

# CDSeg：图像到 3D 标签迁移的可渲染高斯载体

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Wentao Sun, Yiping Chen, Zhengsen Xu, Jonathan Li, John S. Zelek
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05482)

## 摘要

- 现代图像模型对每个视图应分割什么提供强线索，但其掩码本身不决定这些标签应持久存在于 3D 的何处。
- 提出经高斯泼溅的跨域分割（CDSeg）：无需任务特定 3D 分割训练的标签迁移接口，用高斯图元作为可渲染标签载体；外部掩码源提供标签，渲染器派生可见性决定哪些 3D 图元接收它们。
- 载体通过将每个输入点补成一个高斯（保留其索引）或复用优化高斯场景的原生图元实例化；CDSeg 在渲染期间记录像素-图元关联，并经投票与局部滤波器融合多视图掩码；所得标签可返回原始点、保留在原生高斯场景或渲染进其他视图。
- 覆盖可提示、自动实例、语义与 LiDAR 设定，数秒内处理百万图元场景；DesktopObjects-360 上 92.35% mIoU、NeRDS-360 上 95.89%、完整 ScanNet-v2 验证集用所供 2D 语义标注 65.77%；为跨点云、高斯场景与图像视图复用 2D 掩码提供统一接口，无需任务特定 3D 分割网络。

## 正文

现代图像模型对每个视图中应分割的内容（what）提供强线索，但其掩码本身不决定那些标签应在 3D 中持续存在的位置（where）。研究提出经高斯泼溅的跨域分割（Cross-Domain Segmentation via Gaussian Splatting, CDSeg），一个标签迁移接口：无需任务特定 3D 分割训练，使用高斯图元作为可渲染的标签载体。外部掩码源提供标签，而渲染器派生的可见性决定哪些 3D 图元接收它们。载体通过将每个输入点补成一个高斯（保留其索引），或复用优化高斯场景的原生图元实例化。CDSeg 在渲染期间记录像素-图元关联，并通过投票与局部滤波器融合多视图掩码。所得标签可返回原始点、保留在原生高斯场景上，或渲染进其他视图。CDSeg 覆盖可提示、自动实例、语义与 LiDAR 设定，并在数秒内处理含数百万图元的场景。它在 DesktopObjects-360 上取得 92.35% 的 mIoU、NeRDS-360 上 95.89%、完整 ScanNet-v2 验证集（使用所提供的 2D 语义标注）上 65.77%。CDSeg 因此提供一个跨点云、高斯场景与图像视图复用 2D 掩码的接口，无需任务特定 3D 分割网络。

## 关键词

高斯泼溅、标签迁移、跨域分割、3D 场景、语义标注
