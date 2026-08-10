---
published: 2026-08-07
title: "CP-MoE：保持一致性的一致性专家混合持续学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CP-MoE- Consistency-Preserving Mixture-of-Experts for Continual Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/CP-MoE- Consistency-Preserving Mixture-of-Experts for Continual Learning]]"
source_sha256: 0e1dfdf24120b347dacbf90a7f9f6357b6091b33abfa36ee376bd9d8d5a5e1fe
original_url: "https://arxiv.org/abs/2605.20247"
processed: 2026-08-07
language: zh-CN
---

# CP-MoE：保持一致性的一致性专家混合持续学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yang Liu, Toan Nguyen, Flora D. Salim
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.20247)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CP-MoE- Consistency-Preserving Mixture-of-Experts for Continual Learning|查看原始文件]]

## 摘要

- 灾难性遗忘仍是 LLM 与视觉-语言模型（VLM）持续学习的重大障碍；尽管专家混合（MoE）架构提供高效扩展路径，现有基于 LoRA 的 MoE 持续学习方法仍面临根本权衡：要么过度隔离专家限制跨任务知识迁移，要么允许任务特定更新覆盖重要现有参数导致严重遗忘。
- 提出 CP-MoE：围绕瞬态专家（transient expert）构建的持续学习框架，捕获早期任务特定更新并引导其融入稳定专家。
- CP-MoE 引入保持一致性的路由偏差（用瞬态专家估计与稳定专家的表示相似性，引导路由选择更兼容专家）与瞬态专家引导正则化机制（合并时有选择地保护重要历史参数），共同减少参数干扰与遗忘，同时保留跨任务知识迁移。
- 在单模态与多模态持续学习基准上用基于 LLM 与 VLM 的 MoE 模型验证：SuperNI 基准（多样顺序语言任务）上取得最优性能与更强的未见任务零样本迁移；VQA v2 数据集上有效扩展到多模态视觉推理，一致减少遗忘并优于强 MoE 基线。

## 正文

灾难性遗忘仍是大型语言模型（LLMs）与视觉-语言模型（VLMs）中持续学习的重大障碍。尽管专家混合（Mixture-of-Experts，MoE）架构提供了高效的扩展路径，现有基于 LoRA 的 MoE 持续学习方法仍面临根本权衡：它们要么过度隔离专家，限制跨任务知识迁移；要么允许任务特定更新覆盖重要现有参数，导致严重遗忘。为解决这一问题，我们提出 CP-MoE，一个围绕瞬态专家（transient expert）构建的持续学习框架，捕获早期任务特定更新并引导其融入稳定专家。CP-MoE 引入保持一致性的路由偏差（consistency-preserving routing bias），使用瞬态专家估计与稳定专家的表示相似性，引导路由选择更兼容的专家；以及瞬态专家引导的正则化机制，在合并过程中有选择地保护重要历史参数。这些组件共同减少参数干扰与遗忘，同时保留跨任务知识迁移。我们在单模态与多模态持续学习基准上使用基于 LLM 与基于 VLM 的 MoE 模型验证 CP-MoE。在涵盖多样顺序语言任务的 SuperNI 基准上，CP-MoE 取得最优性能与对未见任务更强的零样本迁移。在 VQA v2 数据集上，它有效扩展到多模态视觉推理，一致减少遗忘，并优于强 MoE 基线。

## 关键词

#持续学习 #专家混合 #灾难性遗忘 #LoRA
