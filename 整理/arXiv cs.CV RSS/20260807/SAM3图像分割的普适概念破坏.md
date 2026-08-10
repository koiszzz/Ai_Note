---
published: 2026-08-07
title: "SAM3 图像分割的普适概念破坏"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Universal Concept Disruption for SAM3 Image Segmentation.md"
source_note: "[[信息源/arXiv cs.CV RSS/Universal Concept Disruption for SAM3 Image Segmentation]]"
source_sha256: 91cc8deb3e2052829c82c806e8be8dd02e74b3168e7d340dbb9c13ce0fd27723
original_url: "https://arxiv.org/abs/2608.05983"
processed: 2026-08-07
language: zh-CN
---

# SAM3 图像分割的普适概念破坏

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Hao Wang, Yuxuan Zhang, Wei Yang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05983)

## 摘要

- SAM3 将可提示分割从几何驱动掩码预测扩展到开放词汇概念分割：文本条件化锚定模型决定概念是否存在并分割所有匹配实例；该存在门控设计改进概念级预测，但其对抗稳健性未探索。
- 引入普适概念破坏（UCD）：首个针对 SAM3 图像分割的普适跨概念对抗攻击。
- UCD 从（图像、名词短语）对学习单一有界图像扰动，作为集成概念锚定系统攻击 SAM3；联合破坏文本条件输入路径、最大化提示共享视觉特征分歧、抑制最终存在门控概念分数，并经面积坍缩与干净掩码 Dice 破坏保留掩码空间有效性。
- SACo-Gold、LVIS、RefCOCO、PhraseCut 与 OpenImages 上 UCD 在匹配评估协议下一致优于所有基线：平均掩码 AP 从 59.43 降至 18.73、平均 cgF1 从 50.32 降至 20.49；学习扰动无需重新优化即迁移到 SAM3.1 与 SAM3 视频推理，提示集成、轻量头微调与时间过滤提供有限恢复。

## 正文

SAM3 将可提示分割从几何驱动的掩码预测扩展到开放词汇的概念分割，其中文本条件化的锚定模型决定一个概念是否存在，并分割所有匹配的实例。虽然这种存在门控（presence-gated）设计改进了概念级预测，其对抗稳健性仍未探索。本文引入普适概念破坏（Universal Concept Disruption, UCD），第一个针对 SAM3 图像分割的普适跨概念对抗攻击。UCD 从（图像、名词短语）对学习一个单一有界图像扰动，并作为一个集成的概念锚定系统攻击 SAM3。它联合破坏文本条件化的输入路径，最大化提示共享视觉特征中的分歧，抑制最终的存在门控概念分数，并通过面积坍缩与干净掩码 Dice 破坏来破坏保留掩码的空间有效性。在 SACo-Gold、LVIS、RefCOCO、PhraseCut 与 OpenImages 数据集上，UCD 在匹配的评估协议下一致优于所有基线，将平均掩码 AP 从 59.43 降至 18.73、平均 cgF1 从 50.32 降至 20.49。学习到的扰动还无需重新优化即迁移到 SAM3.1 与 SAM3 视频推理，而提示集成、轻量头微调与时间过滤仅提供有限的恢复。

## 关键词

SAM3、对抗攻击、概念分割、普适扰动、稳健性
