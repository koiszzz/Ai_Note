---
published: 2026-08-06
title: YOLOv14：具有自适应多视角表示的跨域统一实时目标检测
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/YOLOv14-Unified Cross-Domain Real-Time Object Detectionwith Adaptive Multi-View Representation.md
source_note: "[[信息源/arXiv cs.CV RSS/YOLOv14-Unified Cross-Domain Real-Time Object Detectionwith Adaptive Multi-View Representation]]"
source_sha256: 784c0aefa739f74e962d8e40d9923fd5e0c37ff90584c703c55515c44c5fba49
original_url: https://arxiv.org/abs/2608.04720
processed: 2026-08-07
language: zh-CN
---

# YOLOv14：具有自适应多视角表示的跨域统一实时目标检测

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04720)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/YOLOv14-Unified Cross-Domain Real-Time Object Detectionwith Adaptive Multi-View Representation|查看原始文件]]

## 摘要

- YOLOv14 通过四项协同创新应对鱼眼畸变、游戏角色、航空视角与 360 度全景等非理想输入。
- 可变形区域注意力（D-AAttn）用学习的 2D 变形场替换刚性注意力网格，实现几何畸变下的自适应采样。
- Game2Real 域适应结合自适应实例归一化（AdaIN）与对抗域混淆；多视角条件化配合跨视角对比损失拉近同类别特征。
- 自适应增强策略按场景类型路由最优增强，DynamicScaleRouter 学习逐输入特征金字塔权重；T4 GPU 上 2.91 ms 达到 COCO val2017 49.1 mAP。

## 正文

实时目标检测器在受控条件下取得了显著的准确率，但在非理想输入上急剧退化：鱼眼畸变、游戏渲染角色、航空视角和 360 度全景。我们提出 YOLOv14，一个通过四项协同创新应对这些挑战的统一检测框架。（1）可变形区域注意力（D-AAttn）用学习的 2D 变形场替换刚性注意力网格，能够在几何畸变下进行自适应采样。（2）Game2Real 域适应通过自适应实例归一化（AdaIN）和对抗域混淆对齐渲染游戏与摄影特征分布，使游戏角色能够被检测为真实人类。（3）多视角条件化将学习的视角嵌入注入主干，并采用跨视角对比损失将不同视角的同类别特征拉近。（4）自适应增强策略自动分类每个输入的场景类型并路由到最优增强，而 DynamicScaleRouter 学习每个输入的独有特征金字塔权重。综合起来，YOLOv14 在 T4 GPU 上以 2.91 毫秒在 COCO val2017 上实现 49.1 mAP，并在鱼眼（+4.1 mAP）、全景（+6.6 mAP）、无人机（+6.4 mAP）和游戏角色（+26.1 mAP）基准上取得显著提升。

## 关键词

#实时目标检测 #域适应 #YOLO #多视角
