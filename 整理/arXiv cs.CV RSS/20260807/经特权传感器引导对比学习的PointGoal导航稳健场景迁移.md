---
published: 2026-08-07
title: "经特权传感器引导对比学习的 PointGoal 导航稳健场景迁移"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Robust Scene Transfer for PointGoal Navigation via Privileged Sensor Guided Contrastive Learning.md"
source_note: "[[信息源/arXiv cs.CV RSS/Robust Scene Transfer for PointGoal Navigation via Privileged Sensor Guided Contrastive Learning]]"
source_sha256: 7edb7862ac8e2e9fbcbf709837c9711f961c117f2b2ad3243375c154e43affde
original_url: "https://arxiv.org/abs/2606.05506"
processed: 2026-08-07
language: zh-CN
---

# 经特权传感器引导对比学习的 PointGoal 导航稳健场景迁移

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Amirhossein Zhalehmehrabi, Tiziano Tezze, Alberto Castelini, Alessandro Farinelli
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2606.05506)

## 摘要

- 提出传感器引导自适应对比学习框架，用于 PointGoal 导航的视觉表征学习；训练期间特权 LiDAR 传感经几何感知相似性度量与自适应温度缩放引导对比目标，鼓励视觉嵌入捕捉导航相关结构而非场景特定外观。
- 所得编码器独立预训练、冻结，用作强化学习感知骨干，将表征学习与策略优化解耦；引入表征预训练与策略学习间的跨阶段域错配，抑制环境特定捷径、促进任务相关特征依赖。
- 高保真仿真大量实验显示方法显著改进跨多样室内外环境的策略级场景迁移；部署时智能体仅依赖单目 RGB 观测与目标位置、本体感觉等标准任务相关输入，无需 LiDAR 或其他特权传感器。
- 方法在严重外观与语义漂移下超越大型预训练视觉模型与标准对比基线；发布多模态数据集支持特权引导导航视觉表征学习研究。

## 正文

研究提出一个传感器引导的自适应对比学习框架，用于 PointGoal 导航中的视觉表征学习。训练期间，特权的 LiDAR 传感通过一个几何感知的相似性度量与自适应温度缩放引导对比目标，鼓励视觉嵌入捕捉导航相关的结构，而非场景特定的外观。所得编码器独立预训练、冻结，并用作强化学习的感知骨干，将表征学习与策略优化解耦。研究进一步引入表征预训练与策略学习之间的跨阶段域错配（cross-stage domain mismatch），以抑制环境特定捷径，并促进对任务相关特征的依赖。高保真仿真中的大量实验表明，方法显著改进跨多样室内与室外环境的策略级场景迁移。部署时，智能体仅依赖单目 RGB 观测以及目标位置与本体感觉信号等标准任务相关输入，无需访问 LiDAR 或其他特权传感器。方法在严重的外观与语义漂移下超越大型预训练视觉模型与标准对比基线。研究还发布一个多模态数据集，以支持导航特权引导视觉表征学习的未来研究。

## 关键词

PointGoal 导航、对比学习、特权传感器、场景迁移、表征学习
