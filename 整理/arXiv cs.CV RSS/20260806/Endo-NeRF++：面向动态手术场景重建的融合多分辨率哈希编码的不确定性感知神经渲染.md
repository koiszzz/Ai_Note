---
published: 2026-08-06
title: Endo-NeRF++：面向动态手术场景重建的融合多分辨率哈希编码的不确定性感知神经渲染
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Endo-NeRF++- Uncertainty-Aware Neural Rendering with Multi-Resolution Hash Encoding for Dynamic Surg.md
source_note: "[[信息源/arXiv cs.CV RSS/Endo-NeRF++- Uncertainty-Aware Neural Rendering with Multi-Resolution Hash Encoding for Dynamic Surg]]"
source_sha256: 80f4ed9c5ca99b44701c82dea62b573753382b86167c90ad709fb7408567784e
original_url: https://arxiv.org/abs/2607.27825
processed: 2026-08-07
language: zh-CN
---

# Endo-NeRF++：面向动态手术场景重建的融合多分辨率哈希编码的不确定性感知神经渲染

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27825)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Endo-NeRF++- Uncertainty-Aware Neural Rendering with Multi-Resolution Hash Encoding for Dynamic Surg|查看原始文件]]

## 摘要

- 动态手术场景的重建对机器人辅助微创手术至关重要，但组织变形、遮挡、镜面反射和受限视角使其仍然困难。
- 提出 Endo-NeRF++，一种在动态手术场景重建中考虑不确定性的神经渲染框架。
- 在 EndoNeRF 基础上，融入多分辨率哈希网格编码、时序特征融合和不确定性引导的自适应采样，以提升可变形内窥镜场景的重建精度与时序一致性。
- 在机器人手术视频序列上的实验表明，与 EndoNeRF 基线相比，不确定性引导的自适应采样使 PSNR 提升最高 1.22dB（4.3%），SSIM 提升最高 5.3%，LPIPS 降低最高 55.1%。

## 正文

重建动态手术场景对机器人辅助微创手术至关重要；然而，由于组织变形、遮挡、镜面反射和受限的视角，这一任务仍然困难重重。在本研究中，我们提出 Endo-NeRF++，一个在动态手术场景重建中考虑不确定性的神经渲染框架。在 EndoNeRF 的基础上，所提出的方法融入多分辨率哈希网格编码（multi-resolution hash-grid encoding）、时序特征融合（temporal feature merging）和不确定性引导的自适应采样（uncertainty-informed adaptive sampling），以提升可变形内窥镜场景的重建精度与时序一致性。框架中的多分辨率哈希网格表示能有效捕获粗细两级的解剖细节，而时序特征混合确保了组织变形和手术工具遮挡期间的重建稳定性。此外，不确定性驱动的自适应采样将更多采样点分配给不确定区域，以提升渲染质量和几何一致性。在机器人手术视频序列上的实验表明，与 EndoNeRF 基线相比，所提出的不确定性引导自适应采样将 PSNR 提升最高 1.22dB（4.3%），SSIM 提升最高 5.3%，LPIPS 降低最高 55.1%。

## 关键词

#神经渲染 #NeRF #手术场景重建 #不确定性 #内窥镜 #三维重建
