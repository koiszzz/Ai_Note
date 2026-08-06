---
title: "UHP 检测：LVLM 在一致性空间中具有独特的幻觉模式"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/UHP Detection- LVLMs have their Unique Hallucination Pattern in the Consistency Space.md"
source_note: "[[信息源/arXiv cs.AI RSS/UHP Detection- LVLMs have their Unique Hallucination Pattern in the Consistency Space]]"
source_sha256: 6839f55a87fcd71c7d3fc34b59fc56d5feea5940043e642e780c088bd8273679
original_url: "https://arxiv.org/abs/2608.03817"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# UHP 检测：LVLM 在一致性空间中具有独特的幻觉模式

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Amir Mohammad Ezzati 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03817)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/UHP Detection- LVLMs have their Unique Hallucination Pattern in the Consistency Space|查看原始文件]]

## 摘要

- 提出独特幻觉模式（UHP）检测，完全黑箱框架：把幻觉建模为由两个轴定义的结构化不确定性模式——扰动模态（图像对文本）与逻辑极性（陈述对其否定）——其交集产生四个互补一致性组，捕获模型不确定性的不同表现，从中提取组内与组间特征训练轻量分类器。
- 大型视觉-语言模型（LVLM）展示强多模态推理能力，但仍易受幻觉影响（模型预测未接地于视觉证据）；现有黑箱幻觉检测方法通过单一一致性度量估计不确定性，隐式假设模型不确定性可由单一度量充分表征；但幻觉在不同行为探针下表现出多样的不确定性表现，单一度量不足以表征其底层行为。
- AMBER 与 PhD 上跨三个 LVLM 的综合实验显示 UHP 检测一致优于先前黑箱与白箱基线：相对最强黑箱方法 AUC-ROC 最高 +18.72%、AUC-PR 最高 +20.07%；广泛消融显示每个一致性组贡献互补信息，组合形成结构化幻觉模式；跨数据集评估显示该学习模式跨基准泛化，指示幻觉行为反映模型特定一致性模式。
- 代码公开：https://github.com/amirezzati/uhpdet

## 正文

论文编号：arXiv:2608.03817v1（更新类型：cross）。以下为摘要全文翻译。

大型视觉-语言模型（LVLM）展示出强大的多模态推理能力，但仍然易受幻觉影响：模型预测未接地于视觉证据。现有黑箱幻觉检测方法通过单一一致性度量估计不确定性，隐式假设模型不确定性可以由单一度量充分表征。然而，幻觉在不同行为探针下表现出多样的不确定性表现，使单一度量不足以表征其底层行为。我们提出独特幻觉模式（UHP）检测，一个完全黑箱的框架：把幻觉建模为由两个轴定义的结构化不确定性模式——扰动模态（图像对文本）与逻辑极性（陈述对其否定）。它们的交集产生四个互补的一致性组，捕获模型不确定性的不同表现，从中提取组内与组间特征训练轻量分类器。通过 AMBER 与 PhD 上跨三个 LVLM 的综合实验，UHP 检测一致优于先前的黑箱与白箱基线：相对最强黑箱方法 AUC-ROC 最高提升 +18.72%、AUC-PR 最高提升 +20.07%。广泛的消融研究表明，每个一致性组贡献互补信息，它们的组合形成结构化的幻觉模式。此外，跨数据集评估表明，这一学习模式跨基准泛化，指示幻觉行为反映模型特定的一致性模式。代码公开于 https://github.com/amirezzati/uhpdet。

## 关键词

#幻觉检测 #LVLM #一致性 #黑箱
