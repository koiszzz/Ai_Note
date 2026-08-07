---
published: 2026-08-06
title: 并非所有冗余Token都一样：通过Token角色分析视觉Token剪枝
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Not All Redundant Tokens Are Alike- Analyzing Visual Token Pruning through Token Roles.md
source_note: "[[信息源/arXiv cs.CV RSS/Not All Redundant Tokens Are Alike- Analyzing Visual Token Pruning through Token Roles|查看原始文件]]"
source_sha256: e02b17e291f67e3367f65e318b656b51dcbbe458c487b629bce33c38e4b39c2f
original_url: https://arxiv.org/abs/2608.04483
processed: 2026-08-07
language: zh-CN
---

# 并非所有冗余Token都一样：通过Token角色分析视觉Token剪枝

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04483)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Not All Redundant Tokens Are Alike- Analyzing Visual Token Pruning through Token Roles|查看原始文件]]

## 摘要

- 视觉语言模型（VLM）将图像处理为视觉 Token 序列，在推理时造成显著计算瓶颈；近期视觉 Token 剪枝方法通过移除看似冗余的 Token 应对，但剪枝决策与视觉 Token 功能角色的关系仍不清楚
- 通过 EmbedLens 识别的 Token 角色分析剪枝：代表性剪枝方法表现出不同的 Token 角色偏差，但这些偏差与下游性能并无直接关联
- 精炼 Token 角色分配流程并评估角色保护式剪枝变体：保留非存活（non-alive）Token 有时可维持甚至提升性能，说明直接语义对齐较弱的 Token 在剪枝下仍可能影响模型行为

## 正文

视觉语言模型（VLM）将图像处理为视觉 Token 序列，这在推理期间造成了可观的计算瓶颈。近期的视觉 Token 剪枝方法通过移除看似冗余的 Token 来应对这一问题，但这些剪枝决策与视觉 Token 的功能角色之间存在何种关系仍不清楚。

在这项工作中，我们从 EmbedLens 所识别的 Token 角色视角分析视觉 Token 剪枝。我们首先展示，具有代表性的剪枝方法表现出不同的 Token 角色偏差（token-role biases），但这些偏差与下游性能并不直接相关。为更好地理解这一行为，我们精炼了 Token 角色分配流程，并评估了角色保护的（role-protected）剪枝变体。结果表明，保留非存活（non-alive）Token 有时可以维持甚至提升性能，这提示直接语义对齐较弱的 Token 在剪枝条件下仍可能影响模型行为。我们的代码公开于 https://github.com/jaykim9870/Not_All_Redundant_Tokens_Are_Alike。

## 关键词

#视觉Token剪枝 #视觉语言模型 #Token角色 #推理加速 #Token分析
