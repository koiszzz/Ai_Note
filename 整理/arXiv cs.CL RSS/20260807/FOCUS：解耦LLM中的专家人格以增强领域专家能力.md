---
published: 2026-08-07
title: "FOCUS：解耦 LLM 中的专家人格以增强领域专家能力"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/FOCUS- Decoupling Expert Personas in LLMs to Enhance Domain Expert Capabilities.md"
source_note: "[[信息源/arXiv cs.CL RSS/FOCUS- Decoupling Expert Personas in LLMs to Enhance Domain Expert Capabilities]]"
source_sha256: bde31f75b2db54a5a8d7638313bb06a3c3855873637807bdf05f0d0cafb219b2
original_url: "https://arxiv.org/abs/2608.05611"
processed: 2026-08-07
language: zh-CN
---

# FOCUS：解耦 LLM 中的专家人格以增强领域专家能力

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Guanyu Wang, Zidi Zhang, Xu Chu
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05611)

## 摘要

- LLM 可展现多样人格，激活专家人格已证明可提升领域专业度与任务准确率，但现有方法常受跨领域耦合困扰：高谨慎领域（如医疗）过度激进，风险敏感领域（如金融交易）过度保守。
- 提出 FOCUS（正交控制微调解耦人格）：先自动从 LLM 提取专家人格向量，再应用正交分解解耦领域特定专家人格，最后引入专家门控模块按任务上下文自适应控制人格激活。
- 两阶段训练策略与门控选择正则化使模型学会为单领域与跨领域任务激活合适人格。
- 金融、法律、医疗与跨领域基准上提升任务准确率并超越现有方法；代码公开。

## 正文

大语言模型（LLM）可展现多样人格，激活专家人格已被证明可提升领域专业度与任务准确率。然而，现有控制方法常受跨领域耦合困扰，可能在医疗等高谨慎领域导致过度激进行为，或在金融交易等风险敏感领域导致过度保守。为解决该问题，研究提出 FOCUS（正交控制微调解耦人格）。FOCUS 首先自动从 LLM 提取专家人格向量，随后应用正交分解解耦领域特定专家人格，最后引入专家门控模块按任务上下文自适应控制人格激活。通过两阶段训练策略与门控选择正则化，模型学会为单领域与跨领域任务激活合适的人格。金融、法律、医疗与跨领域基准上的实验表明，FOCUS 提升任务准确率并超越现有方法。代码见 https://anonymous.4open.science/r/openpersona-48F4。

## 关键词

人格控制、正交分解、领域专家、门控、LLM 微调
