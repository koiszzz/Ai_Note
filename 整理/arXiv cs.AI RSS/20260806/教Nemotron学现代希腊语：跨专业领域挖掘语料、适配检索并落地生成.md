---
published: 2026-08-06
title: 教Nemotron学现代希腊语：跨专业领域挖掘语料、适配检索并落地生成
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/Teaching Nemotron Greek- Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Gr.md
source_note: "[[信息源/arXiv cs.AI RSS/Teaching Nemotron Greek- Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Gr]]"
source_sha256: 03fc75da12a0471d2ea3dc51785cd560e65a26b1152ae32cad62e53bc96dd09a
original_url: https://arxiv.org/abs/2608.05138
processed: 2026-08-07
language: zh-CN
---

# 教Nemotron学现代希腊语：跨专业领域挖掘语料、适配检索并落地生成

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05138)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Teaching Nemotron Greek- Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Gr|查看原始文件]]

## 摘要

- 针对现代希腊语完成 Nemotron 检索技术栈的端到端适配：语料挖掘、合成监督、检索模型训练、重排序器适配、阅读器微调
- 发布首个面向希腊语检索增强生成的基准 HERA
- 在 65,773 个希腊语检索对上微调后，Nemotron 1B 嵌入器将 nDCG@10 从 0.362 提升至 0.835，远超未适配版本
- LoRA 微调 Nemotron 30B-A3B 混合专家阅读器后，判定答案正确率从 29.4% 提升到 66.9%，忠实度与引文质量显著改善

## 正文

现代希腊语缺席于 NVIDIA 的 Nemotron 检索模型以及主流的多语言检索基准，尽管它在法律、能源、金融和医疗应用的检索增强生成（RAG）中十分重要。我们提出了对现代希腊语 Nemotron 检索技术栈的端到端适配，涵盖语料挖掘、合成监督、检索模型训练、重排序器适配、阅读器微调，以及一个名为 HERA 的新基准。

我们的研究表明，在专业希腊语语料上，无参数 BM25 基线优于若干开箱即用的多语言稠密检索模型。在 65,773 个希腊语检索对上微调之后，Nemotron 1B 嵌入器将 nDCG@10 从 0.362 提升到 0.835，并且大幅优于其未适配的对应版本。学到的语言能力可迁移到通用领域的希腊语，不过相对 BM25 的优势仍依赖于领域。

我们进一步适配了一个交叉编码器重排序器，并在各专业领域上展示了持续一致的改进。最后，我们通过 LoRA 微调了 Nemotron 30B-A3B 混合专家（MoE）阅读器以进行有依据的生成，将判定答案正确率从 29.4% 提升到 66.9%，同时显著提高了忠实度和引文质量。

我们还推出了 HERA，首个大规模希腊语检索增强生成基准，并发布了我们适配后的模型与基准，以支持未来希腊语 RAG 系统的研究。

## 关键词

#arXiv #检索增强生成 #多语言 #希腊语 #RAG
