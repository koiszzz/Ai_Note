---
published: 2026-08-07
title: "CoordRefer：多视图图像的坐标感知 3D 视觉定位"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/CoordRefer- Coordinate-Aware 3D Visual Grounding from Multiview Images.md"
source_note: "[[信息源/arXiv cs.CV RSS/CoordRefer- Coordinate-Aware 3D Visual Grounding from Multiview Images]]"
source_sha256: c9e386e4d3221127986e9672eda951d6da3af7c591b1db1f880e29872424238a
original_url: "https://arxiv.org/abs/2608.05569"
processed: 2026-08-07
language: zh-CN
---

# CoordRefer：多视图图像的坐标感知 3D 视觉定位

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Haijie Li, Jiaxin Zhang, Dave Zhenyu Chen, Youyu Chen, Yanmin Wu, Jian Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05569)

## 摘要

- 多视图图像基 3D 视觉定位预测坐标帧定义坐标系，再回归 3D 包围框定位；现有方法联合优化坐标帧选择与包围框回归，导致坐标相对框模糊与定位性能退化。
- 模糊源于同一框跨坐标帧接受不同数值表示，产生多个优化目标与无效折中预测。
- 提出 CoordRefer：坐标感知框架，解耦坐标帧选择与坐标条件定位；先选择参考帧定义坐标系，再让 3D 框预测条件化于坐标系；执行坐标感知监督微调建立坐标帧选择与坐标条件框回归，再用带 3D IoU 奖励的组相对策略优化对齐两阶段与下游定位质量。
- ScanRefer 上 Qwen3-VL-2B，CoordRefer 相对坐标无关基线 Acc@0.25 提升 11%、Acc@0.5 提升 7%；几何精化变体超越用显式 3D 输入的方法。

## 正文

多视图图像基 3D 视觉定位先预测一个坐标帧来定义坐标系，再回归 3D 包围框进行定位。然而，现有方法联合优化坐标帧选择与包围框回归，导致坐标相对的框模糊（coordinate-relative box ambiguity）与定位性能退化。该模糊源于同一框跨坐标帧接受不同数值表示，创造多个优化目标并产生无效的折中预测。为应对该挑战，研究提出 CoordRefer，一个将坐标帧选择与坐标条件定位解耦的坐标感知框架。CoordRefer 首先选择参考帧定义坐标系，然后使 3D 框预测条件化于该坐标系。研究执行坐标感知的监督微调，建立坐标帧选择与坐标条件框回归，随后应用带 3D IoU 奖励的组相对策略优化（Group Relative Policy Optimization），将两阶段与下游定位质量对齐。在 ScanRefer 上使用 Qwen3-VL-2B，CoordRefer 相对坐标无关基线在 Acc@0.25 取得 11% 增益、Acc@0.5 取得 7% 增益，而其几何精化变体超越使用显式 3D 输入的方法。

## 关键词

3D 视觉定位、坐标感知、多视图、GRPO、ScanRefer
