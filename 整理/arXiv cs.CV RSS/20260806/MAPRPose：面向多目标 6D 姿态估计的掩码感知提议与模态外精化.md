---
published: 2026-08-06
title: MAPRPose：面向多目标 6D 姿态估计的掩码感知提议与模态外精化
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MAPRPose- Mask-Aware Proposal and Amodal Refinement for Multi-Object 6D Pose Estimation.md
source_note: "[[信息源/arXiv cs.CV RSS/MAPRPose- Mask-Aware Proposal and Amodal Refinement for Multi-Object 6D Pose Estimation]]"
source_sha256: 7bd134e731e403f071d1b5826a1ca512021e2e54b5720a65a6479cdbed7c1e1c
original_url: https://arxiv.org/abs/2604.20650
processed: 2026-08-07
language: zh-CN
---

# MAPRPose：面向多目标 6D 姿态估计的掩码感知提议与模态外精化

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.20650)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MAPRPose- Mask-Aware Proposal and Amodal Refinement for Multi-Object 6D Pose Estimation|查看原始文件]]

## 摘要

- 提出两阶段框架 MAPRPose：掩码感知姿态提议（MAPP）阶段将 2D 对应提升到 3D 空间，基于对应级评分生成几何一致的姿态假设并选出 top-$K$ 候选。
- 精化阶段用张量化渲染-比较流水线集成模态外掩码预测与 ROI 重新对齐（AMPR）模块，重建完整目标几何并动态调整 ROI 以缓解重遮挡下的错位。
- GPU 加速的 RGB-XYZ 重投影使全部 $N \times B$ 个姿态假设可在单次前向传播中同时精化。

## 正文

在杂乱场景中进行 6D 目标姿态估计仍具挑战性，原因在于严重的遮挡和传感器噪声。我们提出 MAPRPose——一个两阶段框架，利用掩码感知的对应关系进行姿态提议，并利用模态外（amodal）驱动的感兴趣区域（ROI）预测进行稳健精化。

在掩码感知姿态提议（MAPP）阶段，我们将 2D 对应关系提升到 3D 空间以建立可靠的关键点匹配，并基于对应级评分生成几何一致的姿态假设，从中选出 top-$K$ 候选。在精化阶段，我们引入一个张量化渲染-比较流水线，并与模态外掩码预测和 ROI 重新对齐（AMPR）模块集成。通过重建完整的目标几何并动态调整 ROI，AMPR 减轻了重遮挡下的定位误差和空间错位。

此外，我们的 GPU 加速 RGB-XYZ 重投影能够在单次前向传播中同时精化全部 $N \times B$ 个姿态假设。

## 关键词

#6D姿态估计 #遮挡处理 #模态外分割 #目标检测
