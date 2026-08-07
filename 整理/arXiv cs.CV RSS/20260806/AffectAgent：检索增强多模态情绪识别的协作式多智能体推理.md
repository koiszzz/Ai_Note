---
published: 2026-08-06
title: AffectAgent：检索增强多模态情绪识别的协作式多智能体推理
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/AffectAgent- Collaborative Multi-Agent Reasoning for Retrieval-Augmented Multimodal Emotion Recognit.md
source_note: "[[信息源/arXiv cs.CV RSS/AffectAgent- Collaborative Multi-Agent Reasoning for Retrieval-Augmented Multimodal Emotion Recognit|查看原始文件]]"
source_sha256: ffc10692a7ac380521b4e13e34e252a0c2e490d925caf21eaa668bf3a1ef4fd8
original_url: https://arxiv.org/abs/2604.12735
processed: 2026-08-07
language: zh-CN
---

# AffectAgent：检索增强多模态情绪识别的协作式多智能体推理

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.12735)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/AffectAgent- Collaborative Multi-Agent Reasoning for Retrieval-Augmented Multimodal Emotion Recognit|查看原始文件]]

## 摘要

- 基于 LLM 的多模态情绪识别依赖静态参数记忆，解读细微情感状态时经常产生幻觉
- 提出 AffectAgent：面向情感的协作式多智能体检索增强生成框架，由查询规划器、证据过滤器与情绪生成器三个联合优化的专用智能体协同完成分析推理
- 使用多智能体近端策略优化（MAPPO）与共享情感奖励端到端优化；引入模态平衡专家混合（MB-MoE）与检索增强自适应融合（RAAF）
- 在 MER-UniBench 上广泛实验证明 AffectAgent 在复杂场景下性能优越

## 正文

基于 LLM 的多模态情绪识别依赖静态的参数记忆，在解读细腻的情感状态时经常产生幻觉。本文中，考虑到单轮检索增强生成高度易受模态歧义影响，难以捕捉跨模态的复杂情感依赖，我们引入 AffectAgent——一个面向情感的协作式多智能体检索增强生成框架，利用智能体间的协同决策实现细粒度的情感理解。

具体而言，AffectAgent 由三个联合优化的专用智能体组成：查询规划器（query planner）、证据过滤器（evidence filter）与情绪生成器（emotion generator）。它们协作执行分析性推理，检索跨模态样本、评估证据并生成预测。这些智能体通过多智能体近端策略优化（Multi-Agent Proximal Policy Optimization，MAPPO）配合共享情感奖励进行端到端优化，以确保情感理解的一致性。

此外，我们引入了模态平衡专家混合（Modality-Balancing Mixture of Experts，MB-MoE）与检索增强自适应融合（Retrieval-Augmented Adaptive Fusion，RAAF）。其中 MB-MoE 动态调节不同模态的贡献，以缓解跨模态异质性导致的表征失配；RAAF 通过在缺失模态条件下纳入检索到的视听嵌入，增强语义补全。在 MER-UniBench 上的广泛实验表明，AffectAgent 在复杂场景下取得了优越的性能。我们的代码将发布在：https://github.com/Wz1h1NG/AffectAgent。

## 关键词

#多模态 #情绪识别 #多智能体 #检索增强生成 #情绪计算
