---
published: 2026-08-06
title: Any3DAvatar：单张人像图像快速高质量全头3D化身重建
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Any3DAvatar- Fast and High-Quality Full-Head 3D Avatar Reconstruction from Single Portrait Image.md
source_note: "[[信息源/arXiv cs.CV RSS/Any3DAvatar- Fast and High-Quality Full-Head 3D Avatar Reconstruction from Single Portrait Image|查看原始文件]]"
source_sha256: 1cfb3a2b7cca0aede1babc517fe631cf41b98be68433b32a2d501e83bbdf9c83
original_url: https://arxiv.org/abs/2604.13856
processed: 2026-08-07
language: zh-CN
---

# Any3DAvatar：单张人像图像快速高质量全头3D化身重建

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.13856)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Any3DAvatar- Fast and High-Quality Full-Head 3D Avatar Reconstruction from Single Portrait Image|查看原始文件]]

## 摘要

- 从单张人像重建完整 3D 头部仍具挑战，现有方法面临质量-速度的尖锐权衡：高保真流程常依赖多阶段处理和逐主体优化，快速前馈模型则在完整几何与精细外观细节上力不从心。
- 提出 Any3DAvatar，一种单图像 3D 高斯头部化身生成方法，最快设置下可在 1 秒内重建完整头部并保持高保真几何与纹理；构建了统一数据集 AnyHead，整合身份多样性、密集多视角监督和逼真配饰。
- 从 Plücker 感知的结构化 3D 高斯骨架初始化并执行单步条件去噪，将全头重建整合为单次前向传播；实验表明其在渲染保真度上优于此前方法且速度显著更快。

## 正文

从单张人像重建完整的 3D 头部仍具挑战性，因为现有方法仍面临尖锐的质量-速度权衡：高保真管线往往依赖多阶段处理和逐主体优化，而快速的前馈模型难以兼顾完整的几何形状与精细的外观细节。为弥合这一差距，本文提出 Any3DAvatar，一种快速且高质量的单图像 3D 高斯头部化身生成方法，其最快设置可在 1 秒内重建完整头部，同时保持高保真度的几何和纹理。首先，构建了 AnyHead，一个统一的数据集套件，结合身份多样性、密集多视角监督和逼真的配饰，填补了现有头部数据在覆盖范围、完整头部几何和复杂外观方面的主要空白。其次，本文不再采样无结构噪声，而是从 Plücker 感知的结构化 3D 高斯骨架初始化，并执行单步条件去噪，将全头重建形式化为单次前向传播，同时保持高保真度。第三，在 3D 高斯重建的同时，引入在相同潜在标记上的辅助视角条件外观监督，以零额外推理成本改善新视角的纹理细节。实验表明，Any3DAvatar 在渲染保真度上优于先前的单图像全头重建方法，同时速度大幅提升。

## 关键词

#3D化身重建 #3D高斯泼溅 #单图像重建 #全头重建 #生成模型 #神经渲染
