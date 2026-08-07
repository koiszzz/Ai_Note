---
published: 20260806
title: "ExtractBench：模式引导企业文档提取基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ExtractBench- A Benchmark for Schema-Guided Enterprise Document Extraction.md"
source_note: "[[信息源/arXiv cs.AI RSS/ExtractBench- A Benchmark for Schema-Guided Enterprise Document Extraction]]"
source_sha256: e181f2c34137ba321bb209bfde685e8f33c0c6cd18caa7a8088c8cb51bc84c3c
original_url: "https://arxiv.org/abs/2607.29677"
processed: 2026-08-06
language: zh-CN

---

# ExtractBench：模式引导企业文档提取基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Boyang Zhang, Adrian Lyjak, Eli Stewart, Zhaoqi Li, Simon Suo
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.29677)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ExtractBench- A Benchmark for Schema-Guided Enterprise Document Extraction|查看原始文件]]

## 摘要

- 企业工作流日益依赖智能体进行模式引导提取：给定文档和用户定义模式，智能体忠实遵循模式产生正确输出，附来源证据作为接地元数据；本文呈现 ExtractBench，一个模式引导提取基准，据我们所知是首个同时评分值准确率、大规模记录完整性、接地和测量成本。
- 评估系统包含跨 370 个企业文档、8 个业务域和 67 种文档类型的 4,869 页，带清晰标签区分挑战场景；可扩展模式和地面真值策展流水线结合真实文档的独立系统一致性、合成列表的已知值和表单的人工验证。
- 报告顺序不敏感值 F1 用于值准确率，加两个接地指标（词级和页级 F1）；商业 VLM 在短文档表现良好但长文档常截断记录列表，编码智能体以高得多的成本保持更高准确率；LlamaExtract Agentic Plus 在全部三项指标排名第一，准确率与编码智能体相当而成本为其一小部分。

## 正文

企业工作流日益依赖智能体进行模式引导提取（schema-guided extraction）：给定文档和用户定义模式，智能体忠实遵循模式产生正确输出，附来源证据作为接地元数据。我们呈现 ExtractBench，一个模式引导提取基准，据我们所知是首个同时评分值准确率、大规模记录完整性、接地和测量成本。评估系统包含跨 370 个企业文档、8 个业务域和 67 种文档类型的 4,869 页，带清晰标签区分挑战场景。可扩展模式和地面真值策展流水线结合真实文档的独立系统一致性、合成列表的已知值和表单的人工验证。我们报告顺序不敏感值 F1 用于值准确率，加两个用于来源可追溯性的接地指标：词级和页级 F1。商业 VLM 在短文档上表现良好，但长文档上常截断记录列表，而编码智能体以高得多的成本保持更高准确率。LlamaExtract Agentic Plus 在全部三项指标排名第一，准确率与编码智能体相当，成本为其一小部分。数据集和评估代码可在 HuggingFace（https://huggingface.co/datasets/llamaindex/ExtractBench）和 GitHub（https://github.com/run-llama/ExtractBench）获取。

## 关键词

#文档提取 #模式引导 #基准 #企业AI #arXiv