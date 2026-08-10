---
published: 2026-08-07
title: "G²ARD-GS：几何引导锚正则化的高斯泼溅蒸馏"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/G$^2$ARD-GS- Geometry-Guided Anchor-Regularized Gaussian Splatting Distillation.md"
source_note: "[[信息源/arXiv cs.CV RSS/G$^2$ARD-GS- Geometry-Guided Anchor-Regularized Gaussian Splatting Distillation]]"
source_sha256: a80e4dd4b46859e8acd1722eea42ed3ea5666a6fd6af47c00c3cb9f3ac7ca2ca
original_url: "https://arxiv.org/abs/2608.05704"
processed: 2026-08-07
language: zh-CN
---

# G²ARD-GS：几何引导锚正则化的高斯泼溅蒸馏

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Puyuan Zhang, Jianming Huang, Wenkai Ye, Wei Dong
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05704)

## 摘要

- 稠密彩色 LiDAR 地图提供准确城市场景几何，但将其提升到 3D 高斯泼溅（3DGS）保留数百万图元，使所得模型存储、传输、渲染与适配昂贵。
- 激进图元缩减缓解该负担，但可移除稳定新颖视图合成与下游几何使用所需的局部表面支撑。
- 引入 G²ARD-GS：几何引导蒸馏方法，将稠密高斯先验（实例化为免训练点云提升或训练 GS 模型）转为紧凑可复用表征；渐进将先验整合为表面感知代表，再在构建时锚约束下于所得固定拓扑恢复外观，恢复期间不增删图元。
- 有限监督下几何感知视图选择分配可用视图预算；MatrixCity 上 5×–30× 匹配压缩预算下取得最佳 PSNR、SSIM 与 LPIPS，PSNR 超越 PUP 3.2–6.8 dB；作冻结几何复用时紧凑模型在离轨外观适配上超 PUP 3D-GS 3.7–4.9 dB，并在 30× 压缩下保持 Cambridge KingsCollege 图像到模型配准精度。

## 正文

稠密彩色 LiDAR 地图提供准确的城市场景几何，但将其提升到 3D 高斯泼溅（3DGS）会保留数百万图元，使所得模型存储、传输、渲染与适配昂贵。激进的图元缩减缓解了该负担，但可能移除稳定新颖视图合成与下游几何使用所需的局部表面支撑。研究引入 G²ARD-GS，一种几何引导蒸馏方法：将稠密高斯先验——实例化为免训练点云提升或训练过的 GS 模型——转换为紧凑、可复用的表征。G²ARD-GS 将先验渐进整合为表面感知的代表，然后在构建时锚约束下于所得固定拓扑恢复外观，恢复期间不添加或移除图元。在有限监督下，几何感知视图选择分配可用视图预算。在 MatrixCity 上，G²ARD-GS 在匹配的 5×–30× 压缩预算下取得最佳 PSNR、SSIM 与 LPIPS，PSNR 超越 PUP 3.2–6.8 dB。当作为冻结几何复用时，紧凑模型在离轨（off-trajectory）外观适配方面超 PUP 3D-GS 3.7–4.9 dB，并在 30× 压缩下保持 Cambridge KingsCollege 的图像到模型配准精度。项目页：https://patrick1159.github.io/gardGS-page/。

## 关键词

高斯泼溅、蒸馏、LiDAR、几何引导、压缩
