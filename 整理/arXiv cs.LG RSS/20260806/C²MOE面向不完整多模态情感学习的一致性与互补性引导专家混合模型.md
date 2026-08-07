---
published: 2026-08-06
title: C²MOE面向不完整多模态情感学习的一致性与互补性引导专家混合模型
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/C$^2$MOE- Consistency and Complementarity-guided Mixture of Experts for Incomplete Multimodal Emotio.md
source_note: "[[信息源/arXiv cs.LG RSS/C$^2$MOE- Consistency and Complementarity-guided Mixture of Experts for Incomplete Multimodal Emotio]]"
source_sha256: 5692193dbf8977e6de043bb62405e1fd1cf838feba5b23a66f82eb46bcd738a9
original_url: https://arxiv.org/abs/2608.04013
processed: 2026-08-07
language: zh-CN
---

# C²MOE面向不完整多模态情感学习的一致性与互补性引导专家混合模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04013)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/C$^2$MOE- Consistency and Complementarity-guided Mixture of Experts for Incomplete Multimodal Emotio|查看原始文件]]

## 摘要

- 提出 C²MOE：在信息论框架内统一表示学习与缺失模态填补，将多模态知识分解为一致性与互补性分量。
- 一致性分支通过最小化不确定性对齐联合分布，互补性分支通过熵最大化利用模态特有线索，实现双分支稳健填补。
- 可学习重加权模块动态分配各专家输出的重要性分数，在多个 MERC 基准上超越最先进方法。

## 正文

多模态对话情感识别（MERC）的最新进展凸显了其对完整多模态输入的依赖。然而，现实世界的数据常常因传输错误或用户行为而出现模态缺失，严重降低模型性能。现有方法通过跨模态一致性学习来增强鲁棒性，但在很大程度上忽略了模态互补性，导致有偏的重构。为解决这一局限，我们提出了 C²MOE，一个新颖的基于一致性与互补性引导的专家混合（Mixture of Experts）框架，用于不完整的多模态情感学习。我们的方法在一个严谨的信息论框架内统一了表示学习和缺失模态填补。具体而言，多模态知识通过交互感知的专家被分解为一致性分量和互补性分量。一致性通过最大化跨模态可预测性来捕获，而互补性通过最大化模态间的条件熵来保留。在此分解的基础上，C²MOE 引入了一个双分支预测机制，用于在模态缺失下进行稳健填补。一致性分支通过最小化不确定性使填补的特征与联合分布对齐，而互补性分支通过熵最大化利用模态特有的线索。最后，C²MOE 采用一个可学习的重新加权模块，为每个专家的输出动态分配重要性分数，为填补产生稳健且自适应的融合。在多个 MERC 基准上的大量实验表明，C²MOE 在各种模态缺失设置下始终优于最先进的方法，验证了其鲁棒性和泛化能力。

## 关键词

#多模态情感识别 #专家混合 #缺失模态 #一致性 #互补性 #信息论
