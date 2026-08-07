---
published: 2026-08-06
title: HomoEnsNER：语言对齐在古吉拉特语命名实体识别中是否优于架构复杂度？
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/HomoEnsNER- Does Language Alignment Outperform Architectural Complexity in Gujarati Named Entity Rec.md
source_note: "[[信息源/arXiv cs.CL RSS/HomoEnsNER- Does Language Alignment Outperform Architectural Complexity in Gujarati Named Entity Rec|查看原始文件]]"
source_sha256: 148501992ca7900b2b5b4f7073f44f3a2f078a10b5c227cfd32bd99c0c17f85f
original_url: https://arxiv.org/abs/2608.03105
processed: 2026-08-07
language: zh-CN
---

# HomoEnsNER：语言对齐在古吉拉特语命名实体识别中是否优于架构复杂度？

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03105)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/HomoEnsNER- Does Language Alignment Outperform Architectural Complexity in Gujarati Named Entity Rec|查看原始文件]]

## 摘要

- 古吉拉特语命名实体识别（NER）研究不足，面临缺乏大小写线索、词法丰富、词汇歧义和自由语序等障碍。
- 此前集成工作强调架构多样性，通过组合异质分类器、多语言编码器或经典序列模型实现，而未利用语言对齐的单语预训练。
- 研究问题：对古吉拉特语这类低资源、形态丰富的语言，同质集成（单一单语编码器的多个副本）是否胜过架构多样性？
- 提出 HomoEnsNER：五个独立微调的 GujaratiBERT 模型经多数投票组成的同质集成，与单一 GujaratiBERT 基线和六个异质方案对比（包括 MuRIL-base、MuRIL-large、IndicBERT、mBERT、BiLSTM、CRF 以及堆叠的 BiLSTM-CRF-GujaratiBERT 架构）。
- 八个模型在一致的预算下训练，在 Naamapadam 古吉拉特语测试集上用实体级 F1 评估：HomoEnsNER 取得最高 F1（0.8442），超过基线（0.8347）和所有异质方案（最低 0.7855），表明对低资源印度语言 NER，语言对齐是比架构复杂度更有效、更省预算的集成策略。

## 正文

古吉拉特语的命名实体识别（Named Entity Recognition, NER）仍未得到充分探索，其困难来自缺乏大小写线索、丰富的形态变化、词汇歧义和自由语序。以往的集成工作强调架构多样性，通过组合异质分类器、多语言编码器或经典序列模型实现，而不是利用语言对齐的单语预训练。本研究要问：对古吉拉特语这种低资源、形态丰富的语言，由单一单语编码器构成的同质集成是否优于此类架构多样性？我们提出 HomoEnsNER，一个由五个独立微调的 GujaratiBERT 模型经多数投票组合而成的同质集成，并与单一 GujaratiBERT 基线以及六个异质方案进行对比，后者包括与 MuRIL-base、MuRIL-large、IndicBERT、mBERT、BiLSTM、CRF 的组合，以及一个堆叠的 BiLSTM-CRF-GujaratiBERT 架构。全部八个模型都在一致的预算下训练，并使用实体级 F1 在 Naamapadam 古吉拉特语测试集上评估。HomoEnsNER 取得了最高的 F1（0.8442），超过基线（0.8347）和每一个异质方案（最低 0.7855），这表明对低资源印度语言 NER 而言，语言对齐是一种比架构复杂度更有效、也更节约预算的集成策略。

## 关键词

#命名实体识别 #古吉拉特语 #集成学习 #低资源语言 #语言对齐
