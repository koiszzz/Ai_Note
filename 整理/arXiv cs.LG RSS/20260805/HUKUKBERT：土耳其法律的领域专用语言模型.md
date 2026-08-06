---
published: 2026-08-05
title: "HUKUKBERT：土耳其法律的领域专用语言模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/HUKUKBERT- Domain-Specific Language Model for Turkish Law.md"
source_note: "[[信息源/arXiv cs.LG RSS/HUKUKBERT- Domain-Specific Language Model for Turkish Law.]]"
source_sha256: cb09845097607ddea44bff52a881e0e7b0611a0c4f032039ad663c2dcbe8ca2f
original_url: "https://arxiv.org/abs/2604.04790"
processed: 2026-08-05
language: zh-CN
---

# HUKUKBERT：土耳其法律的领域专用语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Mehmet Utku Öztürk、Tansu Türkoğlu、Buse Buz-Yalug
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.04790)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/HUKUKBERT- Domain-Specific Language Model for Turkish Law.|查看原始文件]]

## 摘要

- NLP 进展催生了一代法律科技系统，但土耳其法律仍缺少领域专用数据与模型；英语已有 LEGAL-BERT 等法律编码器，土耳其语缺乏同等规模的对应物。
- 引入 HukukBERT，一个土耳其法律语言模型：在 19 GB 清洗语料上训练，使用混合领域自适应预训练（DAPT）方案，混合整词掩码、token 跨度掩码、词跨度掩码与定向关键词掩码。
- 将 48K WordPiece 分词器与 DAPT 流水线同通用及现有领域专用土耳其语模型比较；在 Legal Cloze Test（针对土耳其法院判决的掩码法律术语预测基准）上，HukukBERT 达到 84.40% 的 Top-1 准确率，击败所有测试基线。
- Legal Cloze Test 为合成构建，其段落按构造不含于预训练语料，消除了训练—测试污染；在官方土耳其法院判决的结构化切分下游任务上达到 92.8% 的文档通过率。
- 发布 HukukBERT 以支持命名实体识别、判决预测与文档分类等土耳其法律 NLP 工作。

## 正文

论文编号：arXiv:2604.04790v2（更新类型：replace-cross）。以下为摘要全文翻译。

自然语言处理（NLP）的进展催生了一代法律科技（LegalTech）系统，但土耳其法律仍缺乏领域专用的数据与模型。英语拥有 LEGAL-BERT 等法律编码器；土耳其语没有可比的高容量对应物。我们引入 HukukBERT，一个在 19 GB 清洗语料上训练、采用混合领域自适应预训练（DAPT）方案的土耳其法律语言模型，该方案混合了整词掩码、token 跨度掩码、词跨度掩码与定向关键词掩码。我们将 48K WordPiece 分词器与 DAPT 流水线与通用及现有的领域专用土耳其语模型做了比较。在 Legal Cloze Test——一个针对土耳其法院判决的掩码法律术语预测基准——上，HukukBERT 达到 84.40% 的 Top-1 准确率，击败我们测试的所有基线。Legal Cloze Test 是合成构建的，因此其段落按构造不在预训练语料中，消除了训练—测试污染。在官方土耳其法院判决的结构化切分这一下游任务上，它达到 92.8% 的文档通过率。我们发布 HukukBERT，以支持土耳其法律 NLP 在命名实体识别、判决预测与文档分类方面的工作。

## 关键词

#土耳其语 #法律NLP #领域自适应预训练 #BERT #LegalTech
