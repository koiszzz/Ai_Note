---
published: 2026-08-05
title: "LLaDA MoE v2：扩展专家混合扩散语言模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LLaDA MoE v2- Scaling Mixture-of-Experts Diffusion Language Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/LLaDA MoE v2- Scaling Mixture-of-Experts Diffusion Language Models]]"
source_sha256: 43332a5a58db23ea20ca5375c9c1723d65644f9c9c10051a638627d7dbb887ef
original_url: "https://arxiv.org/abs/2608.03457"
processed: 2026-08-05
language: zh-CN
---

# LLaDA MoE v2：扩展专家混合扩散语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Fengqi Zhu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03457)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LLaDA MoE v2- Scaling Mixture-of-Experts Diffusion Language Models|查看原始文件]]

## 摘要

- 系统刻画 MoE dLLM 的优化超参数、计算分配与架构扩展，识别与先前报告的 AR 模型扩展趋势的定量差异：最优标称批大小增长更快，最优学习率随计算量衰减更快；IsoFLOP 分析显示轻微数据侧倾斜（最优 token 预算增长快于激活模型侧计算）；更大规模日益偏向固定激活容量下更大的专家池，而中等专家粒度保持有效，分配给共享专家的激活容量比例跨规模稳定。
- 据此从零训练 LLaDA MoE v2，30B-A3B dLLM，23.5T token；预训练 token 约为 Qwen3 的 65%，在多个知识、推理与编码基准上接近 Qwen3。
- 仅监督微调后，在八个推理与编码基准中的七个上优于 SDAR Chat，并在多个任务上保持接近 Qwen3。
- 为 MoE dLLM 建立实用扩展定律与设计原则。

## 正文

论文编号：arXiv:2608.03457v1（更新类型：new）。以下为摘要全文翻译。

扩散语言模型（dLLM）提供自回归（AR）语言建模的替代方案，然而专家混合（MoE）dLLM 的扩展行为仍鲜为人知。我们系统刻画优化超参数、计算分配与架构如何随 MoE dLLM 扩展，识别出与先前为 AR 模型报告的扩展趋势的定量差异。具体而言，在优化方面，最优标称批大小增长更快，而最优学习率随计算量衰减更快。在模型-数据分配方面，IsoFLOP 分析揭示轻微的数据侧倾斜：最优 token 预算的增长快于激活的模型侧计算。在 MoE 架构方面，更大规模在固定激活容量下日益倾向于更大的专家池，而中等专家粒度保持一致有效，分配给共享专家的激活容量比例跨规模保持稳定。在这些发现的指导下，我们从零训练 LLaDA MoE v2，一个 30B-A3B dLLM，使用 23.5T token。预训练 token 约为 Qwen3 的 65%，LLaDA MoE v2 在多个知识、推理与编码基准上接近 Qwen3。仅监督微调后，它在八个推理与编码基准中的七个上优于 SDAR Chat，并在多个任务上保持接近 Qwen3。这些结果为 MoE dLLM 建立了实用的扩展定律与设计原则。

## 关键词

#扩散语言模型 #专家混合 #扩展定律 #预训练
