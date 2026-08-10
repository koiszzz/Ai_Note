---
published: 2026-08-07
title: "SemiAdapt-Instruct：通过潜在领域专用适配器的可扩展指令调优"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SemiAdapt-Instruct- Extensible Instruction Tuning via Latent Domain-Specialised Adapters.md"
source_note: "[[信息源/arXiv cs.LG RSS/SemiAdapt-Instruct- Extensible Instruction Tuning via Latent Domain-Specialised Adapters]]"
source_sha256: a629f79565f46febed8b9f4c93c58c9b4621e23204ce529135244cfa5a5a4f8d
original_url: "https://arxiv.org/abs/2608.05161"
processed: 2026-08-07
language: zh-CN
---

# SemiAdapt-Instruct：通过潜在领域专用适配器的可扩展指令调优

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Josh McGiff, Salma Mekaoui, Robert Shanahan, Nikola S. Nikolov
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05161)

## 摘要

- 指令调优 LLM 部署于领域演化的环境，但无需完全重训即扩展微调模型能力仍是未解决的实践挑战。
- 提出 SemiAdapt-Instruct：模块化框架，发现潜在指令领域、并行训练逐领域 LoRA 适配器并执行无参数路由，通过单适配器训练纳入新领域而无需修改现有组件。
- SemiAdapt-Instruct 在 ROUGE-L 与 LLM-as-a-judge 评估的所有配置上都优于全模型微调，同时匹配单一 LoRA 微调并提供单体方法无法提供的可扩展性。
- 实证演示可扩展性：用新领域数据更新单一适配器即优于所有单体基线；独立发现方法收敛于相同专业化友好领域；将异构指令数据分解为潜在领域可实现可扩展 NLP 系统，演化领域只需针对性单适配器更新，消除全模型重训需求。

## 正文

指令调优的 LLM 被部署到领域不断演化的环境中，然而无需完全重训即扩展微调模型能力仍是一个未解决的实践挑战。研究提出 SemiAdapt-Instruct，一个模块化框架：发现潜在指令领域、并行训练逐领域 LoRA 适配器、执行无参数路由，并通过单适配器训练纳入新领域而无需修改现有组件。SemiAdapt-Instruct 在 ROUGE-L 与 LLM-as-a-judge 评估的所有配置上都优于全模型微调，同时匹配单一 LoRA 微调，并提供单体方法无法提供的可扩展性。研究通过显示用新领域数据更新单一适配器优于所有单体基线，实证演示该可扩展性。研究还发现独立发现方法收敛于相同的专业化友好领域。这些发现表明，将异构指令数据分解为潜在领域可实现可扩展的 NLP 系统：演化领域只需针对性单适配器更新，无需完全模型重训。

## 关键词

指令调优、LoRA、领域发现、模块化、可扩展性
