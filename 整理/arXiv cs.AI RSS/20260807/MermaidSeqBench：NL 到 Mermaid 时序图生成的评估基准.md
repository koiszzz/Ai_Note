---
published: 2026-08-07
title: "MermaidSeqBench：NL 到 Mermaid 时序图生成的评估基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MermaidSeqBench- An Evaluation Benchmark for NL-to-Mermaid Sequence Diagram Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/MermaidSeqBench- An Evaluation Benchmark for NL-to-Mermaid Sequence Diagram Generation]]"
source_sha256: 8d6e4511c4bd3f77d1614c3b7a038360173424e8caf919ecad7148625b1ea998
original_url: "https://arxiv.org/abs/2511.14967"
processed: 2026-08-07
language: zh-CN
---

# MermaidSeqBench：NL 到 Mermaid 时序图生成的评估基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Basel Shbita, Farhan Ahmed, Chad DeLuca
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.14967)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MermaidSeqBench- An Evaluation Benchmark for NL-to-Mermaid Sequence Diagram Generation|查看原始文件]]

## 摘要

- 大语言模型（LLM）在从自然语言描述生成结构化图表（尤其用于软件工程的 Mermaid 时序图）上显示巨大潜力，但缺乏评估 LLM 在该任务正确性的现有基准，阻碍严格、系统化评估与模型能力的有原则比较。
- 引入 MermaidSeqBench：人工验证与合成扩展的基准，评估 LLM 从自然语言提示生成 Mermaid 时序图的能力——由 132 个样本组成，通过人工验证流程、基于 LLM 的增强与基于规则的扩展混合方法开发。
- 评估使用 LLM 作为裁判模型，跨语法正确性、激活处理、错误处理与实际可用性等细粒度指标评估生成。
- 展示基准有效性与灵活性：对多个最先进 LLM 与多个 LLM 裁判进行初步评估，揭示跨模型与评估模式的显著能力差距；MermaidSeqBench 为评估结构化图表生成提供基础，并推进对 LLM 在结构化生成任务中能力与局限的科学理解。

## 正文

大语言模型（LLMs）在从自然语言描述生成结构化图表方面显示出巨大潜力，尤其是用于软件工程的 Mermaid 时序图。然而，缺乏现有基准来评估 LLM 在此任务上的正确性，阻碍了严格、系统化的评估以及模型能力的有原则比较。为弥补这一不足，我们引入 MermaidSeqBench，一个人工验证与合成扩展的基准，用于评估 LLM 从自然语言提示生成 Mermaid 时序图的能力。该基准由 132 个样本组成，通过人工验证流程、基于 LLM 的增强与基于规则的扩展混合方法开发。评估使用 LLM 作为裁判模型，跨语法正确性、激活处理、错误处理与实际可用性等各类细粒度指标评估生成。为展示基准的有效性与灵活性，我们对多个最先进 LLM 与多个 LLM 裁判进行初步评估，揭示跨模型与评估模式的显著能力差距。MermaidSeqBench 为评估结构化图表生成提供基础，并推进对 LLM 在结构化生成任务中能力与局限的科学理解。

## 关键词

#时序图 #Mermaid #NL生成 #LLM评估
