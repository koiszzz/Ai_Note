---
published: 2026-08-07
title: "MOSAIK：高效生成的图像 token 多补丁内容感知空间分配"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/MOSAIK- Multi-Patch Content-Aware Spatial Allocation of Image Tokens for Efficient Generation.md"
source_note: "[[信息源/arXiv cs.CV RSS/MOSAIK- Multi-Patch Content-Aware Spatial Allocation of Image Tokens for Efficient Generation]]"
source_sha256: 59ddf04d635905195ba84d087a4533a4f042d08618d68e79f6d3ea7ec9c6ce8b
original_url: "https://arxiv.org/abs/2608.05450"
processed: 2026-08-07
language: zh-CN
---

# MOSAIK：高效生成的图像 token 多补丁内容感知空间分配

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Mohammadreza Hami, Mohammadreza Samadi, Chao Gao, Negar Hassanpour
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05450)

## 摘要

- 像素空间扩散模型经直接在图像空间生成避免潜在扩散模型的重建上限；但其高得多的 token 数因自注意力二次复杂度使生成昂贵。
- 现有效率方法在选定去噪步用更大补丁减少成本，但每步仍跨整幅图像统一使用单补丁大小，忽视不同区域粗化时遭受不同保真度损失。
- 引入 MOSAIK：损伤引导框架，跨区域与去噪步变化补丁大小；适配 PixelDiT 骨干生成任意异构补丁布局，轻量预测器用中间去噪特征估计粗化每区域造成的保真度损失。
- 给定 token 预算，损伤引导布局预测器给敏感区域分配细补丁、其他区域粗补丁；FLOPs 减少 70%、token 数减少 83% 时在 GenEval 匹配全计算 PixelDiT，DPG-Bench 仅降 1.0 点；相对时间补丁调度与特征缓存等多样效率范式，中预算下高度竞争，高约束计算机制下一致超越这些基线。

## 正文

像素空间扩散模型通过直接在图像空间生成，避免了潜在扩散模型的重建上限。然而，它们显著更高的 token 数使生成昂贵，因为自注意力具有二次复杂度。若干现有效率方法通过在选择去噪步使用更大补丁降低成本，从而用更少 token 表示图像。然而，每步仍跨整幅图像统一使用单一补丁大小，忽视了不同区域在粗化时遭受不同保真度损失。研究引入 MOSAIK，一个损伤引导（damage-guided）框架：跨区域与去噪步变化补丁大小。MOSAIK 适配 PixelDiT 骨干以生成任意的异构补丁布局，一个轻量预测器使用中间去噪特征估计粗化每个区域造成的保真度损失。给定 token 预算，损伤引导布局预测器给敏感区域分配细补丁，给其他区域分配粗补丁。值得注意的是，在 FLOPs 减少 70%、token 数减少 83% 的同时，MOSAIK 在 GenEval 上匹配全计算 PixelDiT，其 DPG-Bench 分数仅下降 1.0 点。与包括时间补丁调度与特征缓存的多样效率范式相比，该方法在中预算下提供高度竞争的性能，并在高度受限的计算机制中一致超越这些基线。

## 关键词

扩散模型、token 分配、补丁、高效生成、PixelDiT
