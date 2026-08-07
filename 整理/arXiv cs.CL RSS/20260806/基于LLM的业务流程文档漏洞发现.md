---
published: 2026-08-06
title: 基于LLM的业务流程文档漏洞发现
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/LLM-based Vulnerability Discovery in Business Process Documentation.md
source_note: "[[信息源/arXiv cs.CL RSS/LLM-based Vulnerability Discovery in Business Process Documentation|查看原始文件]]"
source_sha256: 1a11ba7f3d91b8c7539259c5c5ce2666653f0bd33a0bb651d2dd1b4b46bdc981
original_url: https://arxiv.org/abs/2608.04271
processed: 2026-08-07
language: zh-CN
---

# 基于LLM的业务流程文档漏洞发现

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04271)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/LLM-based Vulnerability Discovery in Business Process Documentation|查看原始文件]]

## 摘要

- 与软件和硬件一样，业务流程也容易受到漏洞影响，这些漏洞可能导致产品质量问题、延误和成本增加。
- 业务流程漏洞的来源多种多样，包括需求冲突、文档含糊、无效的测量规格、缺少质量检查或实现与规格不一致等。
- MIRABELLE 是一个从可用业务流程表示中识别和表征业务逻辑（BL）漏洞的系统，利用 AI/ML 处理业务流程文档并生成带属性图表示。
- 从以自然语言为主的人工产物中提取业务逻辑（如操作执行序列、决策、输入/输出资源）颇具挑战，因为需要领域专业知识、流程本身复杂、信息量有时非常庞大。
- 本文报告了多种 LLM 在漏洞检测各关键阶段的表现，从短措辞中的语法和技术错误标记，到完整的流程结构恢复与提取。

## 正文

与软件和硬件一样，业务流程也容易受到漏洞的影响，这些漏洞可能导致产品质量问题、延误和成本增加。业务流程漏洞可能来源于多种渠道，包括相互冲突的需求、含糊的文档、无效的测量规格、质量检查的缺失，或者与规格不符的实现。

MIRABELLE 是一个能够从可用的业务流程表示中识别和表征业务逻辑（BL）漏洞的系统，其输入包括 ISO 9000/9001 文档、用户指南、工作指令和流程执行日志。MIRABELLE 利用 AI/ML 的最新进展来处理可用的业务流程文档，并生成业务流程逻辑的属性图（attributed graph）表示，这些表示可以通过图方法和形式逻辑方法进行处理，以识别潜在漏洞。

然而，从以自然语言为主的人工产物中提取业务逻辑（例如操作执行序列、决策、输入/输出资源）是颇具挑战的，因为需要领域专业知识、流程本身的固有复杂性，以及有时非常庞大的信息量。本文聚焦于我们使用大语言模型（LLM）的实验及其在 MIRABELLE 中的作用。我们报告了多种 LLM 在漏洞检测各关键阶段的表现，从短措辞中的语法和技术错误标记，到完整的流程结构恢复与提取。

## 关键词

#LLM #业务流程 #漏洞发现 #MIRABELLE #arXiv
