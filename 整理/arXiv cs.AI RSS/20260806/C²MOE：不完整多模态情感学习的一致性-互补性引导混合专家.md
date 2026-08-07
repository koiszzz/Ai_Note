---
published: 20260806
title: "C²MOE：不完整多模态情感学习的一致性-互补性引导混合专家"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/C$^2$MOE- Consistency and Complementarity-guided Mixture of Experts for Incomplete Multimodal Emotio.md"
source_note: "[[信息源/arXiv cs.AI RSS/C$^2$MOE- Consistency and Complementarity-guided Mixture of Experts for Incomplete Multimodal Emotio]]"
source_sha256: ffbc92e5cc7caadbf93d06892ee364d8a5afa2c960a9232b0c75518fc1601ce4
original_url: "https://arxiv.org/abs/2608.04013"
processed: 2026-08-06
language: zh-CN

---

# C²MOE：不完整多模态情感学习的一致性-互补性引导混合专家

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuntao Shou, Tao Meng, Wei Ai, Keqin Li
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04013)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/C$^2$MOE- Consistency and Complementarity-guided Mixture of Experts for Incomplete Multimodal Emotio|查看原始文件]]

## 摘要

- 对话多模态情感识别（MERC）的近期进展强调其对完整多模态输入的依赖，但真实世界数据常因传输错误或用户行为遭受模态缺失，严重降低模型性能；现有方法通过跨模态一致性学习增强鲁棒性，但大多忽略模态互补性，导致有偏重建。
- 本文提出 C²MOE，一个用于不完整多模态情感学习的一致性-互补性引导混合专家框架：在原则性信息论框架内统一表示学习和缺失模态插补，通过交互感知专家将多模态知识分解为一致性和互补性组件。
- 一致性通过最大化跨模态可预测性捕捉，互补性通过最大化模态间条件熵保留；引入双分支预测机制实现缺失模态下的稳健插补，跨多个 MERC 基准实验显示 C²MOE 在各种缺失模态设置中持续超越最先进方法。

## 正文

对话多模态情感识别（MERC）的近期进展强调其对完整多模态输入的依赖。然而，真实世界数据常因传输错误或用户行为遭受模态缺失，严重降低模型性能。现有方法通过跨模态一致性学习增强鲁棒性，但大多忽略模态互补性，导致有偏重建。为解决此局限，我们提出 C²MOE，一个用于不完整多模态情感学习的一致性-互补性引导混合专家（Consistency and Complementarity-guided Mixture of Experts）框架。我们的方法在原则性信息论框架内统一表示学习和缺失模态插补。具体来说，多模态知识通过交互感知专家分解为一致性和互补性组件。一致性通过最大化跨模态可预测性捕捉，而互补性通过最大化模态间条件熵保留。基于此分解，C²MOE 引入双分支预测机制，实现缺失模态下的稳健插补。一致性分支通过最小化不确定性将插补特征与联合分布对齐，互补性分支通过熵最大化利用模态独特线索。最后，C²MOE 采用可学习重加权模块，动态为每个专家输出分配重要性分数，产生稳健自适应的插补融合。跨多个 MERC 基准的广泛实验表明，C²MOE 在各种缺失模态设置中持续超越最先进方法，验证其鲁棒性和泛化能力。

## 关键词

#多模态情感识别 #混合专家 #缺失模态 #信息论 #arXiv