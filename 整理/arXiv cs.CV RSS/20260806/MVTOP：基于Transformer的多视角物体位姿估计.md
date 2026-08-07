---
published: 2026-08-06
title: MVTOP：基于Transformer的多视角物体位姿估计
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MVTOP- Multi-View Transformer-based Object Pose-Estimation.md
source_note: "[[信息源/arXiv cs.CV RSS/MVTOP- Multi-View Transformer-based Object Pose-Estimation|查看原始文件]]"
source_sha256: 8bea36e9f838cffce3c29d0f4f564da756f522862810b105927c0d8b177cbf4b
original_url: https://arxiv.org/abs/2508.03243
processed: 2026-08-07
language: zh-CN
---

# MVTOP：基于Transformer的多视角物体位姿估计

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.03243)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MVTOP- Multi-View Transformer-based Object Pose-Estimation|查看原始文件]]

## 摘要

- 提出 MVTOP：基于 Transformer 的多视角刚体物体位姿估计方法；通过视角特定特征的早期融合，可解决单视角或单视角位姿后处理无法解决的位姿歧义
- 通过从各相机中心发出的视线（lines of sight）建模多视角几何；假设相机内参与相对朝向已知，但每次推理可变化，方法通用性强
- 提供仅能靠整体多视角方法解决的合成数据集；MVTOP 在该数据集上优于单视角及所有现有方法，在 YCB-V 数据集上取得有竞争力的结果
- 模型端到端可训练，不需要深度等额外数据

## 正文

我们提出 MVTOP，一种新颖的基于 Transformer 的多视角刚体物体位姿估计方法。通过视角特定特征的早期融合，我们的方法能够解决仅靠单视角或对单视角位姿做后处理无法解决的位姿歧义。MVTOP 通过从各相机中心发出的视线来建模多视角几何。虽然该方法假设特定场景的相机内参和相对朝向已知，但它们可以在每次推理中变化，这使得方法具有通用性。

视线的使用使 MVTOP 能够利用合并后的多视角信息正确预测位姿。为展示模型能力，我们提供了一个合成数据集，该数据集只有通过此类整体（holistic）多视角方法才能解决，因为数据集中的位姿无法仅凭单一视角求解。我们的方法在该数据集上优于单视角方法及所有现有的多视角方法，并在 YCB-V 数据集上取得了有竞争力的结果。据我们所知，目前还没有能够可靠解决此类位姿歧义的整体多视角方法。我们的模型端到端可训练，且不需要任何额外数据（例如深度）。

## 关键词

#位姿估计 #多视角 #Transformer #刚体物体 #YCB-V
