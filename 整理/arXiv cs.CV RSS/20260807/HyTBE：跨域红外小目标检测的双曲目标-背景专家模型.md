---
published: 2026-08-07
title: "HyTBE：跨域红外小目标检测的双曲目标-背景专家模型"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/HyTBE- Hyperbolic Target-Background Expert Model for Cross-Domain Infrared Small Target Detection.md"
source_note: "[[信息源/arXiv cs.CV RSS/HyTBE- Hyperbolic Target-Background Expert Model for Cross-Domain Infrared Small Target Detection]]"
source_sha256: ea565d2112f1e75d90157c575b232990b48a8a5bf77c68512459eeacd9f267b0
original_url: "https://arxiv.org/abs/2608.05771"
processed: 2026-08-07
language: zh-CN
---

# HyTBE：跨域红外小目标检测的双曲目标-背景专家模型

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Aohua Li, Jin Kuang, Yubing Lu, Pingping Liu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05771)

## 摘要

- 红外小目标检测（IRSTD）在域一致评估下取得显著进展，但检测器泛化到未见红外域时性能常明显退化。
- 现有方法主要通过增强目标响应与抑制背景干扰改进检测；但仅在有限源域集合训练时，其学习决策规则不可避免地建立在受限范围的源域目标-背景关系模式上。
- 将跨域失败形式化为目标-背景关系漂移：未见域可能表现训练期间未观察到的关系模式，削弱从源域学到的判别能力。
- 提出 HyTBE：双曲目标-背景专家模型，扩展源域关系模式并用显式关系线索自适应调整视觉表征；目标-背景关系干预选择性扰动目标或背景，拓宽训练期间可观察关系模式同时保持有效监督；双曲关系建模将多尺度视觉线索映射进庞加莱球，按每个特征 token 到目标与背景锚点的相对距离刻画目标-背景关系；双曲引导 MoE 适配器用这些双曲关系表征校准多尺度视觉特征，为不同关系模式聚合专家特定特征校正；NUAA-SIRST、NUDT-SIRST 与 IRSTD-1K 留一域实验显示 HyTBE 跨域泛化强于竞争基线。

## 正文

红外小目标检测（infrared small target detection, IRSTD）在域一致评估下取得显著进展，然而检测器泛化到未见红外域时性能常明显退化。现有方法主要通过增强目标响应与抑制背景干扰改进检测。然而，仅在有限源域集合上训练时，它们学习到的决策规则不可避免地建立在受限范围的源域目标-背景关系模式上。研究将该跨域失败形式化为目标-背景关系漂移（target-background relation shift）：未见域可能表现训练期间未观察到的关系模式，从而削弱从源域学到的判别能力。为解决该问题，研究提出 HyTBE，一个双曲目标-背景专家（Hyperbolic Target-Background Expert）模型：扩展源域关系模式，并用显式关系线索自适应调整视觉表征。目标-背景关系干预（Target-Background Relation Intervention）选择性扰动目标或背景，在保持有效监督的同时拓宽训练期间可观察的关系模式。随后，双曲关系建模（Hyperbolic Relation Modeling）将多尺度视觉线索映射进庞加莱球，并根据每个特征 token 到目标与背景锚点的相对距离刻画其目标-背景关系。双曲引导 MoE 适配器（Hyperbolic-guided MoE Adapter）进一步用这些双曲关系表征校准多尺度视觉特征，并为不同关系模式聚合专家特定的特征校正。NUAA-SIRST、NUDT-SIRST 与 IRSTD-1K 上的留一域实验表明，HyTBE 取得比竞争基线更强的跨域泛化。

## 关键词

红外小目标检测、跨域、双曲几何、专家混合、目标-背景关系
