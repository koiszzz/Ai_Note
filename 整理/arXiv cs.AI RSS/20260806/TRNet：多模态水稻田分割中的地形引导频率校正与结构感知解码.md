---
published: 2026-08-06
title: TRNet：多模态水稻田分割中的地形引导频率校正与结构感知解码
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/TRNet- Topography-Guided Frequency Rectification and Structure-Aware Decoding for Multimodal Paddy R.md
source_note: "[[信息源/arXiv cs.AI RSS/TRNet- Topography-Guided Frequency Rectification and Structure-Aware Decoding for Multimodal Paddy R]]"
source_sha256: 294df3898db42ef482bb1661eca6b17ce652066084d38d2a37354da1d80cd5fd
original_url: https://arxiv.org/abs/2608.04154
processed: 2026-08-07
language: zh-CN
---

# TRNet：多模态水稻田分割中的地形引导频率校正与结构感知解码

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04154)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TRNet- Topography-Guided Frequency Rectification and Structure-Aware Decoding for Multimodal Paddy R|查看原始文件]]

## 摘要

- 在山地丘陵地区，地形会改变光学外观并增加与视觉相似植被的混淆，使得从超高分辨率影像绘制水稻田变得困难
- 提出 TRNet，面向 0.5 米高分一号（GaoJing-1）RGB 影像、5 米 TanDEM-X 数字高程模型（DEM）及派生坡度；独立视觉与地形编码器保留模态特有特征
- 在早期编码器阶段，地形能量-光谱校正（Topographic Energy-Spectral Rectification）通过地形条件化的低频调制与不对称高频调节，抑制陡坡杂波并有条件地增强相容的低坡度稻田线索；地形引导的稻田结构解码器结合语义、稻田-背景边界与内部线索，以粗略地形作为上下文
- 在内部测试集 A 区和留出的地形更陡、稻田占比更低的 B 区，TRNet 的稻田交并比（IoU）分别达 85.10% 和 80.68%，比原始双编码器 U-Net 高出 9.15 和 18.83 个百分点

## 正文

在山地和丘陵地区，从超高分辨率影像绘制水稻田非常困难，因为地形会改变光学外观，并增加与视觉上相似的植被之间的混淆。我们提出了 TRNet，用于处理 0.5 米高分一号（GaoJing-1）红-绿-蓝（RGB）影像、5 米 TanDEM-X 数字高程模型（DEM）以及派生的坡度数据。独立的视觉编码器和地形编码器保留了模态特有的特征。

在早期编码器阶段，地形能量-光谱校正（Topographic Energy-Spectral Rectification）应用地形条件化的低频调制和不对称高频调节，以抑制陡坡杂波，并有条件地增强相容的低坡度稻田线索。地形引导的稻田结构解码器（Topography-guided Paddy Structure Decoder）结合语义、稻田-背景边界和内部线索，并使用粗略地形作为上下文。

实验使用了 A 区内部测试集和留出的 B 区——后者地形更陡、稻田占比更低。TRNet 的稻田交并比（IoU）分别达到 85.10% 和 80.68%，超过原始双编码器 U-Net 9.15 和 18.83 个百分点。消融实验和按坡度分层的结果将这些增益归因于频率校正、结构学习以及更少的陡坡地形假阳性。研究结果支持将粗略地形作为超高分辨率水稻田测绘的上下文先验。

## 关键词

#水稻田分割 #地形引导 #频率校正 #多模态
