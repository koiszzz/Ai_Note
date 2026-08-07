---
published: 2026-08-06
title: MIDAS：多LLM迭代数据自适应摘要
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/MIDAS- Multi-LLM Iterative Data-Adaptive Summarization.md
source_note: "[[信息源/arXiv cs.CL RSS/MIDAS- Multi-LLM Iterative Data-Adaptive Summarization|查看原始文件]]"
source_sha256: 3d47e43e3dfcb0fce6a786b1000fe09d4b2912f079b144a9c00fd2432616247c
original_url: https://arxiv.org/abs/2608.04307
processed: 2026-08-07
language: zh-CN
---

# MIDAS：多LLM迭代数据自适应摘要

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04307)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/MIDAS- Multi-LLM Iterative Data-Adaptive Summarization|查看原始文件]]

## 摘要

- 文本摘要看似简单实则极难：真实世界的企业摘要（支持工单、法律文件、事件报告等）要求严格遵守领域特定指南、输出格式和组织惯例，手工编写提示词成本高昂且需随需求演化持续维护。
- 现有自动提示优化方法通过 LLM 批判驱动的精炼减轻负担，但受限于静态提示，无法适应摘要应用的多样性。
- 本文提出 MIDAS（Multi-LLM Iterative Data-Adaptive Summarization），一个多 LLM 框架，通过数据驱动的模式学习和用例特定个性化扩展了这一范式，无需人工提示工程即可自动适配不同摘要需求。
- 应用于跨五种输出格式的企业客户工单摘要时，MIDAS 相对 CriSPO 和 ZERA 等最先进的批判驱动优化框架取得最强综合性能：ROUGE-1 最高提升 11.0%，ROUGE-2 最高 18.2%，ROUGE-L 最高 8.0%，并在所有格式和输出类型上持续提升 BERTScore F1。
- 还通过多 LLM 配置和金融领域摘要基准展示了跨模型与跨领域的泛化能力。

## 正文

文本摘要的难度极具欺骗性。虽然压缩信息看似直接，但现实世界中企业级摘要——支持工单、法律文件、事件报告等——要求严格遵守领域特定的指南、输出格式和组织惯例。编写能可靠满足这些约束的提示词需要大量劳动，需要重要的人类专业知识，并且随着需求演化还需要持续维护。

现有的自动提示优化方法通过大语言模型（LLM）批判驱动的精炼来减轻这一负担，但仍然受到静态提示的限制，无法适应摘要应用的多样性。我们提出 MIDAS（Multi-LLM Iterative Data-Adaptive Summarization），一个多 LLM 框架，通过数据驱动的模式学习和用例特定的个性化扩展了这一范式，从而无需人工提示工程即可自动适配不同的摘要需求。

应用于跨五种输出格式的企业客户工单摘要时，MIDAS 相对 CriSPO 和 ZERA 等最先进的批判驱动优化框架取得了最强的综合性能，ROUGE-1 最高提升 11.0%，ROUGE-2 最高提升 18.2%，ROUGE-L 最高提升 8.0%，并在所有格式和输出类型上持续改进 BERTScore F1。我们还通过多 LLM 配置和金融领域摘要基准展示了跨模型和跨领域的泛化能力。

## 关键词

#摘要 #提示优化 #多LLM #企业应用 #arXiv
