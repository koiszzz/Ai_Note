---
published: 2026-08-07
title: "MapTCL：经双向对齐的时序一致性学习用于矢量化高清地图构建"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/MapTCL- Temporal Consistency Learning via Bidirectional Alignment for Vectorized HD Map Construction.md"
source_note: "[[信息源/arXiv cs.CV RSS/MapTCL- Temporal Consistency Learning via Bidirectional Alignment for Vectorized HD Map Construction]]"
source_sha256: b6815e2e4d6668bb8526c79f3e623ecf7c48c1f00f1773c1e0168eb6b808f872
original_url: "https://arxiv.org/abs/2608.05209"
processed: 2026-08-07
language: zh-CN
---

# MapTCL：经双向对齐的时序一致性学习用于矢量化高清地图构建

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Hyeonseo Kim, Juyeb Shin, Hyeonjun Jeong, Hiwon Shin, Dongsuk Kum
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05209)

## 摘要

- 动态城市环境中构建可靠在线高清地图仍具挑战（移动对象与遮挡）；近期工作采用特征级时间融合，但仅依赖逐帧真值监督，缺乏直接惩罚连续在线高清地图间几何噪声与时间抖动的显式目标。
- 提出 MapTCL：辅助训练策略，经双向对齐在当前与过去帧之间形式化时序一致性损失；双向矢量一致性学习（BVCL）将关联过去与当前矢量实例间的几何与语义差异建模为辅助损失；栅格地图一致性学习（RCL）作为额外损失稳定稠密 BEV 特征。
- 双损失联合训练改进生成高清地图的时间稳定性；两个标准基准实验证明有效性。
- 作为通用即插即用模块，MapTCL 一致增强现有基线模型：nuScenes +3.7 mAP 与 +2.8 C-mAP、Argoverse 2 +3.1 mAP 与 +2.5 C-mAP，无额外推理开销。

## 正文

在动态城市环境中构建可靠的在线高清（HD）地图仍具挑战，因为移动对象与遮挡。虽然近期工作采用特征级时间融合来解决，它们仅依赖逐帧真值监督。因此，它们缺乏直接惩罚连续在线 HD 地图之间几何噪声与时间抖动的显式目标。为解决该问题，研究提出 MapTCL，一个辅助训练策略：经双向对齐（bidirectional alignment）在当前与过去帧之间形式化时序一致性损失。具体地，双向矢量一致性学习（Bidirectional Vector Consistency Learning, BVCL）将关联的过去与当前矢量实例之间的几何与语义差异建模为辅助损失。研究还采用栅格地图一致性学习（Raster map Consistency Learning, RCL）作为额外损失，以稳定稠密 BEV 特征。通过双损失联合训练，MapTCL 改进生成 HD 地图的时间稳定性。两个标准基准上的大量实验证明了方法的有效性。作为通用即插即用模块，MapTCL 一致增强现有基线模型：nuScenes 上 +3.7 mAP 与 +2.8 C-mAP，Argoverse 2 上 +3.1 mAP 与 +2.5 C-mAP，无额外推理开销。

## 关键词

高清地图、时间一致性、双向对齐、矢量化、BEV
