---
published: 2026-08-06
title: OmniVR：用于修复退化历史胶片的联合视频-音频条件生成
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/OmniVR- Joint Video-Audio Conditional Generation for Restoring Degraded Historical Films.md
source_note: "[[信息源/arXiv cs.CV RSS/OmniVR- Joint Video-Audio Conditional Generation for Restoring Degraded Historical Films]]"
source_sha256: bcb0d84dded8b6d8194ce26309064c210998123882faeb7bde80323c7de3e8a2
original_url: https://arxiv.org/abs/2608.04224
processed: 2026-08-07
language: zh-CN
---

# OmniVR：用于修复退化历史胶片的联合视频-音频条件生成

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04224)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/OmniVR- Joint Video-Audio Conditional Generation for Restoring Degraded Historical Films|查看原始文件]]

## 摘要

- 首个联合音频-视频生成式修复模型：基于 220 亿参数生成主干，将修复建模为统一多模态 DiT 中的条件生成。
- 三大关键设计：联合音视频退化流水线、保架构的 T2AV 到 AV2AV 转换（提示退火）、首帧 I2V 锚定（损失重加权与波形监督）。
- 提出 OmniVRBench 基准（200 个真实历史片段），在六项视觉指标、音频质量与着色上全面超越此前方法。

## 正文

历史胶片往往同时存在视觉与音频退化——模糊、噪声、闪烁、嘶声、削波和信号中断——而现有方法各自独立地修复每种模态，导致质量差距和跨模态不一致。我们提出了 OmniVR，这是首个联合音频-视频生成式修复模型。OmniVR 基于一个 220 亿（22B）参数的音频-视频生成主干构建，将修复建模为统一多模态 DiT 中的条件生成：低质量视频和音频被编码为潜在条件，与固定的修复提示相结合，并在一个协调一致的目标下联合去噪，以恢复视觉结构、时间运动和声学细节。三个关键设计促成了这一适配：（1）一个联合音频-视频退化流水线，用于从互联网收集的数据中模拟真实旧胶片特征；（2）一种保持架构的从文本到音频-视频（T2AV）到音频-视频到音频-视频（AV2AV）的转换，并带有提示退火，以最大程度保留生成先验；（3）首帧图像到视频（I2V）锚定，配合损失重加权和波形监督，用于长视频外推和音频保真。我们还提出了 OmniVRBench，这是首个在 200 个真实历史片段上同时评估视觉质量、音频质量、时间一致性和音视频同步性的音频-视频修复基准。OmniVR 在所有六项视觉指标上超越此前所有方法，达到最佳音频质量，并产生自然的着色效果——成为首个同时解决这三个方面的修复方法。代码和权重将公开发布。项目页面：https://xin1u.github.io/OminiVR_PAGE/

## 关键词

#视频修复 #音频修复 #历史胶片 #多模态生成 #条件扩散
