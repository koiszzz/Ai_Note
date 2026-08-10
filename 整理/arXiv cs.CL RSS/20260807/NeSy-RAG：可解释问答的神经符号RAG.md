---
published: 2026-08-07
title: "NeSy-RAG：可解释问答的神经符号 RAG"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/NeSy-RAG- Neuro-Symbolic RAG for Explainable Question Answering.md"
source_note: "[[信息源/arXiv cs.CL RSS/NeSy-RAG- Neuro-Symbolic RAG for Explainable Question Answering]]"
source_sha256: 0fd4f91f599c945fe09c3b9d919133beb3dee1b9a1ae420ec80ba873405bdb6b
original_url: "https://arxiv.org/abs/2608.06292"
processed: 2026-08-07
language: zh-CN
---

# NeSy-RAG：可解释问答的神经符号 RAG

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Jonas Gann, Michael Gertz
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06292)

## 摘要

- 检索增强生成（RAG）经将 LLM 锚定于文本语料等外部知识改进问答；但其推理过程大体不透明：中间推理步难验证、无法可靠归因特定证据；缺失用户特定情境也极少被系统检测，常致不完整或错误输出。
- 提出 NeSy-RAG：模块化神经符号 RAG 框架，从检索文本块合成可归因 Prolog 模块；每个块系统生成语义有意义谓词编码布尔主张（可依赖用户事实）；用联合自然语言-代码嵌入检索与组合谓词成 Prolog 查询。
- 应对不完整用户情境：引入符号知识差距检测机制，识别真值影响查询结局的缺失用户事实并自动触发后续交互。
- 执行 Prolog 查询产生确定性答案与透明执行轨迹（链接每个推理步到来源）；ShARC 基准无领域特定训练下 NeSy-RAG 达 61.1% 准确率，超越同模型 RAG 基线 42.8%。

## 正文

检索增强生成（retrieval-augmented generation, RAG）通过将大语言模型（LLMs）锚定在外部知识（如文本语料）中来改进问答。然而，其推理过程大体仍然不透明：中间推理步骤难以验证，不能可靠地归因于特定证据。此外，缺失的用户特定情境很少被系统性地检测到，常常导致不完整或不正确的输出。研究提出 NeSy-RAG，一个模块化的神经符号 RAG 框架：从检索到的文本块合成可归因的 Prolog 模块。对每个块，系统生成语义上有意义的谓词，编码可能依赖用户事实的布尔主张。使用联合的自然语言-代码嵌入，谓词被检索并组合成 Prolog 查询。为应对不完整的用户情境，研究引入一个符号知识差距检测机制：识别真值会影响查询结局的缺失用户事实，并自动触发后续交互。执行所得的 Prolog 查询产生确定性的答案，以及透明的执行轨迹，将每个推理步骤链接到其来源。在 ShARC 基准上，无需领域特定训练，NeSy-RAG 实现 61.1% 的准确率，优于达到 42.8% 准确率的同模型 RAG 基线。

## 关键词

RAG、神经符号、Prolog、可解释、问答
