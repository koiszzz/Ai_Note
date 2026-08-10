---
published: 2026-08-07
title: "MermaidSeqBench：自然语言到 Mermaid 时序图生成的评估基准"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MermaidSeqBench- An Evaluation Benchmark for NL-to-Mermaid Sequence Diagram Generation.md"
source_note: "[[信息源/arXiv cs.LG RSS/MermaidSeqBench- An Evaluation Benchmark for NL-to-Mermaid Sequence Diagram Generation]]"
source_sha256: 73c388d6df46b5b1be34c193c0958894d277fc245d83927a7108ab9d6e3ddd69
original_url: "https://arxiv.org/abs/2511.14967"
processed: 2026-08-07
language: zh-CN
---

# MermaidSeqBench：自然语言到 Mermaid 时序图生成的评估基准

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Basel Shbita, Farhan Ahmed, Chad DeLuca
> - **发布时间**：2026-08-07
> - **分类**：cs.SE
> - **原文**：[打开链接](https://arxiv.org/abs/2511.14967)

## 摘要

- LLM 在从自然语言描述生成结构化图表（尤其软件工程的 Mermaid 时序图）上显示巨大潜力，但缺乏评估该任务正确性的现有基准，阻碍严格系统评估与模型能力的原则性比较。
- 引入 MermaidSeqBench：人工验证与合成扩展的基准，评估 LLM 从自然语言提示生成 Mermaid 时序图的能力；132 个样本，经人工验证流程、LLM 增广与规则扩展混合方法开发。
- 评估用 LLM-as-a-judge 模型跨语法正确性、激活处理、错误处理与实用可用性等细粒度指标评定生成。
- 对多个 SOTA LLM 用多个 LLM 评审的初步评估揭示跨模型与评估模式的显著能力差距；为结构化图表生成评估提供基础。

## 正文

大语言模型（LLM）在从自然语言描述生成结构化图表（尤其面向软件工程的 Mermaid 时序图）上显示巨大潜力。然而，缺乏评估 LLM 在此任务上正确性的现有基准，阻碍了该任务上严格、系统的评估与模型能力的原则性比较。为弥补该不足，研究引入 MermaidSeqBench，一个用于评估 LLM 从自然语言提示生成 Mermaid 时序图能力的人工验证与合成扩展基准。基准包含 132 个样本，经人工验证流程、基于 LLM 的增广与规则扩展的混合方法开发。评估使用 LLM-as-a-judge 模型，跨语法正确性、激活处理、错误处理与实用可用性等各种细粒度指标评定生成。为展示基准的有效性与灵活性，研究对多个最先进 LLM 用多个 LLM 评审进行初步评估，揭示跨模型与评估模式的显著能力差距。MermaidSeqBench 为评估结构化图表生成奠定基础，并推进对 LLM 在结构化生成任务中能力与局限的科学理解。

## 关键词

Mermaid、时序图、基准、LLM 评估、结构化生成
