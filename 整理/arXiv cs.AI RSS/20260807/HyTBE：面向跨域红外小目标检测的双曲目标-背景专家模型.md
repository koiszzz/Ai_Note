---
published: 2026-08-07
title: "HyTBE：面向跨域红外小目标检测的双曲目标-背景专家模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HyTBE- Hyperbolic Target-Background Expert Model for Cross-Domain Infrared Small Target Detection.md"
source_note: "[[信息源/arXiv cs.AI RSS/HyTBE- Hyperbolic Target-Background Expert Model for Cross-Domain Infrared Small Target Detection]]"
source_sha256: d3d161375a412e80844703be8c3b1908ff0cecbcf86bd3facfcd792dd4aaf3fa
original_url: "https://arxiv.org/abs/2608.05771"
processed: 2026-08-07
language: zh-CN
---

# HyTBE：面向跨域红外小目标检测的双曲目标-背景专家模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Aohua Li, Jin Kuang, Yubing Lu, Pingping Liu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05771)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HyTBE- Hyperbolic Target-Background Expert Model for Cross-Domain Infrared Small Target Detection|查看原始文件]]

## 摘要

- 红外小目标检测（IRSTD）在域一致评估下取得实质进展，但检测器泛化到未见红外域时性能常显著下降；现有方法主要通过增强目标响应与抑制背景干扰改进检测，但当仅在有限源域集训练时，其学习决策规则不可避免地建立在受限源域目标-背景关系模式范围内。
- 将跨域失败表述为目标-背景关系偏移：未见域可能展现训练中未观察的关系模式，从而削弱从源域学到的判别能力。
- 提出 HyTBE：双曲目标-背景专家模型，扩展源域关系模式并用显式关系线索自适应调整视觉表示——目标-背景关系干预有选择地扰动目标或背景，拓宽训练期间可观察的关系模式同时维持有效监督；双曲关系建模将多尺度视觉线索映射到庞加莱球，按各特征 token 相对目标与背景锚点的相对距离刻画目标-背景关系；双曲引导 MoE 适配器用这些双曲关系表示校准多尺度视觉特征，并为不同关系模式聚合专家特定特征修正。
- 在 NUAA-SIRST、NUDT-SIRST 与 IRSTD-1K 上的留一域外实验表明，HyTBE 实现比竞争基线更强的跨域泛化。

## 正文

红外小目标检测（infrared small target detection，IRSTD）在域一致评估下取得实质进展，但检测器泛化到未见红外域时性能往往显著下降。现有方法主要通过增强目标响应与抑制背景干扰来改进检测。然而，当仅在有限源域集上训练时，它们学到的决策规则不可避免地建立在受限源域目标-背景关系模式范围内。我们将这种跨域失败表述为目标-背景关系偏移（target-background relation shift）：未见域可能展现训练期间未观察到的关系模式，从而削弱从源域学到的判别能力。为解决该问题，我们提出 HyTBE，一个双曲目标-背景专家模型（Hyperbolic Target-Background Expert model），扩展源域关系模式，并使用显式关系线索自适应调整视觉表示。目标-背景关系干预（Target-Background Relation Intervention）有选择地扰动目标或背景，拓宽训练期间可观察的关系模式，同时维持有效监督。随后，双曲关系建模（Hyperbolic Relation Modeling）将多尺度视觉线索映射到庞加莱球，并根据每个特征 token 相对目标与背景锚点的相对距离刻画其目标-背景关系。双曲引导 MoE 适配器（Hyperbolic-guided MoE Adapter）进一步使用这些双曲关系表示校准多尺度视觉特征，并为不同关系模式聚合专家特定特征修正。在 NUAA-SIRST、NUDT-SIRST 与 IRSTD-1K 上的留一域外实验表明，HyTBE 取得比竞争基线更强的跨域泛化。

## 关键词

#红外小目标检测 #跨域泛化 #双曲几何 #MoE
