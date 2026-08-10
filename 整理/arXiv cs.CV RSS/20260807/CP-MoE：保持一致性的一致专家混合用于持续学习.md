---
published: 2026-08-07
title: "CP-MoE：保持一致性的一致专家混合用于持续学习"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/CP-MoE- Consistency-Preserving Mixture-of-Experts for Continual Learning.md"
source_note: "[[信息源/arXiv cs.CV RSS/CP-MoE- Consistency-Preserving Mixture-of-Experts for Continual Learning]]"
source_sha256: 5e515dabeed1a3a428508c0f984619cb1f6e573fbc935cb3a0037f82d23a5db2
original_url: "https://arxiv.org/abs/2605.20247"
processed: 2026-08-07
language: zh-CN
---

# CP-MoE：保持一致性的一致专家混合用于持续学习

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yang Liu, Toan Nguyen, Flora D. Salim
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2605.20247)

## 摘要

- 灾难性遗忘仍是 LLM 与 VLM 持续学习的重大障碍；现有基于 LoRA 的 MoE 持续学习方法面临根本权衡：要么过度隔离专家限制跨任务知识迁移，要么允许任务特定更新覆盖重要既有参数导致严重遗忘。
- 提出 CP-MoE：围绕瞬态专家构建的持续学习框架，捕捉早期任务特定更新并引导其整合进稳定专家。
- 引入保持一致性的路由偏置（用瞬态专家估计与稳定专家的表征相似性，引导路由选择更兼容的专家）与瞬态专家引导正则化机制（合并时选择性保护重要历史参数）。
- 在 SuperNI 基准上取得 SOTA 并实现更强的零样本迁移；在 VQA v2 上有效扩展至多模态视觉推理并一致减少遗忘。

## 正文

灾难性遗忘仍是大型语言模型（LLM）与视觉-语言模型（VLM）持续学习的主要障碍。尽管专家混合（MoE）架构提供了高效扩展路径，现有基于 LoRA 的 MoE 持续学习方法仍面临根本权衡：要么过度隔离专家，限制跨任务知识迁移；要么允许任务特定更新覆盖重要既有参数，导致严重遗忘。为解决该问题，研究提出 CP-MoE，一个围绕瞬态专家构建的持续学习框架：瞬态专家捕捉早期任务特定更新并引导其整合进稳定专家。CP-MoE 引入保持一致性的路由偏置（consistency-preserving routing bias），用瞬态专家估计与稳定专家的表征相似性，引导路由向更兼容的专家选择；以及瞬态专家引导正则化机制，在合并时选择性保护重要历史参数。这些组件共同减少参数干扰与遗忘，同时保留跨任务知识迁移。研究在基于 LLM 与基于 VLM 的 MoE 模型上，于单模态与多模态持续学习基准验证 CP-MoE。在覆盖多样序列语言任务的 SuperNI 基准上，CP-MoE 取得最先进性能与更强的对未见任务的零样本迁移；在 VQA v2 数据集上，它有效扩展至多模态视觉推理，一致减少遗忘，并超越强 MoE 基线。

## 关键词

持续学习、MoE、灾难性遗忘、LoRA、多模态
