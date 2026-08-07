---
published: 2026-08-06
title: 教 Nemotron 学希腊语：为专业领域现代希腊语挖掘语料、适配检索并接地生成
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Teaching Nemotron Greek- Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Gr.md
source_note: "[[信息源/arXiv cs.CL RSS/Teaching Nemotron Greek- Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Gr]]"
source_sha256: a248b2cde79bac395b75b123668346448fce32b21abd1a23dca718fe966910fc
original_url: https://arxiv.org/abs/2608.05138
processed: 2026-08-07
language: zh-CN
---

# 教 Nemotron 学希腊语：为专业领域现代希腊语挖掘语料、适配检索并接地生成

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05138)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Teaching Nemotron Greek- Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Gr|查看原始文件]]

## 摘要

- 现代希腊语缺席于 NVIDIA 的 Nemotron 检索模型及主要多语言检索基准，尽管它在法律、能源、金融和医疗领域的检索增强生成（RAG）应用中十分重要；本文对 Nemotron 检索栈做现代希腊语端到端适配。
- 在 65,773 个希腊语检索对上微调后，Nemotron 1B 嵌入模型的 nDCG@10 从 0.362 提升到 0.835，大幅优于未适配版本；无参数 BM25 基线在专业希腊语语料上反而胜过多种现成的多语言稠密检索模型。
- 用 LoRA 微调 Nemotron 30B-A3B 混合专家阅读器用于接地生成，判定答案正确率从 29.4% 升至 66.9%，忠实性与引文质量也显著提升；同时发布了首个大规模希腊语 RAG 基准 HERA。

## 正文

现代希腊语缺席于 NVIDIA 的 Nemotron 检索模型和主要的多语言检索基准，尽管它对法律、能源、金融和医疗应用中的检索增强生成（RAG）十分重要。我们提出了 Nemotron 检索栈针对现代希腊语的端到端适配，包括语料挖掘、合成监督、检索模型训练、重排序器适配、阅读器微调，以及一个名为 HERA 的新基准。我们的研究表明，无参数的 BM25 基线在专业希腊语语料上胜过若干现成的多语言稠密检索模型。在 65,773 个希腊语检索对上微调后，Nemotron 1B 嵌入器将 nDCG@10 从 0.362 提升到 0.835，并大幅优于其未适配的对应版本。习得的语言能力可迁移到通用域希腊语，尽管相对 BM25 的优势仍取决于领域。我们进一步适配了一个交叉编码器重排序器，并在各专业领域展示了一致的改进。最后，我们用 LoRA 微调 Nemotron 30B-A3B 混合专家阅读器以进行接地生成，将判定答案正确率从 29.4% 提高到 66.9%，同时显著提升了忠实性和引文质量。我们还发布了 HERA，首个大规模希腊语检索增强生成基准，并公开了我们的适配模型和基准，以支持希腊语 RAG 系统的未来研究。

## 关键词

#RAG #现代希腊语 #Nemotron #检索增强生成 #BM25 #HERA #LoRA
