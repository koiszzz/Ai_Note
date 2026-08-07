---
published: 2026-08-06
title: ToolArtist：用于智能体图像生成的工具使用统一多模态模型
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/ToolArtist- Tool-Using Unified Multimodal Models for Agentic Image Generation.md
source_note: "[[信息源/arXiv cs.CV RSS/ToolArtist- Tool-Using Unified Multimodal Models for Agentic Image Generation]]"
source_sha256: c4b5541a2eaabe4d82e2b84a2899ffa9bf7405ebb996f9651cb352b93daec705
original_url: https://arxiv.org/abs/2608.04436
processed: 2026-08-07
language: zh-CN
---

# ToolArtist：用于智能体图像生成的工具使用统一多模态模型

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04436)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/ToolArtist- Tool-Using Unified Multimodal Models for Agentic Image Generation|查看原始文件]]

## 摘要

- 提出 ToolArtist，通过对统一多模态模型（UMM）后训练得到的全智能体图像生成模型，在单一统一策略中动态编排推理、外部工具使用与原生图像生成。
- SFT 阶段为教师智能体配备搜索工具与图像生成工具，并将轨迹转为 UMM 兼容格式；RL 阶段提出 Reason-Act-Draw GRPO（RAD-GRPO），以互补的意图与质量奖励联合优化。
- 实验表明将整个开放世界图像生成流程置于智能体策略下，一致优于固定流程或仅部分智能体控制的方法；训练数据与完整后训练基础设施已发布。

## 正文

文生图（T2I）模型能够生成视觉上引人注目的图像，但在需要复杂语义理解、多步推理和外部世界知识整合的开放世界任务上仍然受限。现有工作将智能体能力引入图像生成，但它们要么规定固定工作流，要么只将开放世界图像生成过程的一部分置于智能体控制之下。因此，推理、工具调用与图像生成无法由单一策略统一协调。我们提出 ToolArtist，一种通过对统一多模态模型（UMM）进行后训练得到的全智能体图像生成模型。ToolArtist 在单一统一策略中动态编排推理、外部工具使用与原生图像生成。在监督微调（SFT）阶段，我们为教师智能体配备搜索工具和图像生成工具，然后将收集到的轨迹转换为 UMM 兼容格式，其中图像生成工具被隐藏，而生成的图像被保留。在强化学习（RL）阶段，我们为 UMM 开发了智能体 RL 基础设施，并提出 Reason-Act-Draw GRPO（RAD-GRPO），它使用互补的意图奖励与质量奖励来联合优化模型。实验表明，将整个开放世界图像生成过程置于智能体策略之下，一致优于固定流程或仅部分组件受智能体控制的方法。我们发布了训练数据和完整的后训练基础设施。

## 关键词

#图像生成 #智能体 #工具使用 #统一多模态模型 #强化学习
