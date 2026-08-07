---
published: 2026-08-06
title: 使用冻结自蒸馏特征进行 CT 病灶检测：SALT 空间自适应标签引导温度
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Lesion Detection in CT with Frozen Self-Distilled Features- SALT, a Spatially Adaptive Label-Guided .md
source_note: "[[信息源/arXiv cs.CV RSS/Lesion Detection in CT with Frozen Self-Distilled Features- SALT, a Spatially Adaptive Label-Guided ]]"
source_sha256: 0bad67480428a61d538232bf5cbc5003b95a86cbe09e5255c56d464737b9e2c8
original_url: https://arxiv.org/abs/2608.05100
processed: 2026-08-07
language: zh-CN
---

# 使用冻结自蒸馏特征进行 CT 病灶检测：SALT 空间自适应标签引导温度

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05100)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Lesion Detection in CT with Frozen Self-Distilled Features- SALT, a Spatially Adaptive Label-Guided |查看原始文件]]

## 摘要

- 提出 SALT（空间自适应标签引导温度）：仅用预训练期可得的弱框标签在编码器 patch 网格的紧凑区域内锐化教师 softmax 温度并加权掩蔽 patch 损失，直接调节自蒸馏目标而非视图。
- 冻结编码器仅训练轻量级多深度 CenterNet 风格头，在四个 CT 队列上检测 3D 病灶，并与无目标调节的同构骨干隔离对比机制效果。
- 报告 patch 级可分性、按队列与病灶大小的 3D 检测、框质量，以及单个冻结 patch 嵌入在无配准随访扫描中重新识别病灶的无检测器探针。

## 正文

自监督预训练目标在空间上是均匀的：教师温度和逐 patch 损失权重在图像处处相同，因此一个仅数 patch 宽的病灶对训练信号的贡献并不大于周围实质。先前的工作将视图偏向标注区域，这改变了模型所见，但对目标本身没有增加压力。

我们转而调节自蒸馏的目标——称之为 SALT（Spatially Adaptive Label-guided Temperature，空间自适应标签引导温度）。仅在预训练期间可用的、由框导出的弱标签在编码器的 patch 网格上定义一个紧凑区域，在该区域内教师的 softmax 温度被锐化，掩蔽 patch 损失被加权提升。目标、掩蔽策略和中心化统计量均保持不变，且在所有下游使用中，编码器只是一个普通的特征提取器，不带有任何标签或条件。

我们冻结编码器，仅训练一个轻量级多深度 CenterNet 风格头，在四个 CT 队列上检测 3D 病灶，并将该机制与一个架构、预训练数据、日程和标签引导裁剪完全相同但无目标调节的骨干进行隔离对比。我们报告 patch 级可分性、按队列和病灶大小分层的 3D 检测、框质量，以及一种无检测器的探针——单个冻结 patch 嵌入在无配准、无掩码、无微调的情况下于随访扫描中重新识别病灶。

由于条件是通过空间指示而非标签语义表达的，该公式可接受任何弱空间标注；我们以病灶为例进行了实例化和验证。

## 关键词

#医学影像 #CT病灶检测 #自蒸馏 #自监督预训练
