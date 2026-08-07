---
published: 2026-08-06
title: TRNet：面向多模态水稻分割的地形引导频率校正与结构感知解码
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/TRNet- Topography-Guided Frequency Rectification and Structure-Aware Decoding for Multimodal Paddy R.md
source_note: "[[信息源/arXiv cs.CV RSS/TRNet- Topography-Guided Frequency Rectification and Structure-Aware Decoding for Multimodal Paddy R]]"
source_sha256: 66ee57f730ab3fefd1338a0159bc6786128a6d60f11c91d81e59a97ffdac391e
original_url: https://arxiv.org/abs/2608.04154
processed: 2026-08-07
language: zh-CN
---

# TRNet：面向多模态水稻分割的地形引导频率校正与结构感知解码

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04154)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/TRNet- Topography-Guided Frequency Rectification and Structure-Aware Decoding for Multimodal Paddy R|查看原始文件]]

## 摘要

- 提出 TRNet，融合 0.5 米高景一号（GaoJing-1）RGB 影像、5 米 TanDEM-X DEM 与派生坡度进行山区水稻制图，视觉与地形编码器分离以保留模态特定特征。
- 地形能量-频谱校正对陡坡杂波进行抑制并有条件增强低坡度水稻线索；地形引导的水稻结构解码器融合语义、边界与内部线索。
- 内部测试集 A 与留出集 B（地形更陡、水稻占比更低）上水稻 IoU 分别达 85.10% 与 80.68%，较原双编码器 U-Net 提升 9.15 与 18.83 个百分点。

## 正文

在山区与丘陵地区，从甚高分辨率影像制图水稻十分困难，因为地形改变光学外观并增加与视觉相似植被的混淆。我们提出 TRNet，用于 0.5 米高景一号（GaoJing-1）红绿蓝（RGB）影像、5 米 TanDEM-X 数字高程模型（DEM）及派生坡度。分离的视觉与地形编码器保留模态特定特征。在编码器早期阶段，地形能量-频谱校正（Topographic Energy-Spectral Rectification）应用地形条件的低频调制与不对称高频调节，以抑制陡坡杂波并有条件地增强兼容的低坡度水稻线索。地形引导的水稻结构解码器（Topography-guided Paddy Structure Decoder）结合语义、水稻—背景边界与内部线索，以粗略地形为上下文。实验使用 A 区内测测试集与留出的 B 区（地形更陡、水稻占比更低）。TRNet 的水稻交并比（IoU）分别达到 85.10% 与 80.68%，超过原始双编码器 U-Net 9.15 与 18.83 个百分点。消融与按坡度分层的结果将这些增益归因于频率校正、结构学习以及更少的陡坡误报。结果表明，粗略地形可作为甚高分辨率水稻制图的上下文先验。

## 关键词

#水稻分割 #多模态 #地形引导 #高分辨率遥感 #频率校正
