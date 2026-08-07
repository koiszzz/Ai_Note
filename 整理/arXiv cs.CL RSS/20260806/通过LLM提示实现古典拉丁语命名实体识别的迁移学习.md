---
published: 2026-08-06
title: 通过 LLM 提示实现古典拉丁语命名实体识别的迁移学习
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Transfer Learning for Named Entity Recognition of Classical Latin through LLM Prompting.md
source_note: "[[信息源/arXiv cs.CL RSS/Transfer Learning for Named Entity Recognition of Classical Latin through LLM Prompting]]"
source_sha256: 24d28d1c89d2b663c2fc42ae63f6415c039d347c61d97c0fd58fd4104ed7a336
original_url: https://arxiv.org/abs/2608.04015
processed: 2026-08-07
language: zh-CN
---

# 通过 LLM 提示实现古典拉丁语命名实体识别的迁移学习

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04015)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Transfer Learning for Named Entity Recognition of Classical Latin through LLM Prompting|查看原始文件]]

## 摘要

- 随着古典拉丁语文本数字化资源的增加与大语言模型（LLM）的现代突破，作者通过参加 EvaLatin 2026 为古代语言研究做出贡献
- 论文描述渥太华大学（uOttawa）团队在命名实体识别（NER）共享任务上的系统描述与结果
- 任务分为两个子任务：11 类粗粒度 NER 与 28 类细粒度 NER，均在严格与模糊两种机制下评估
- 通过对商业 LLM gemini-2.5-pro 和 claude-sonnet-4-5 的提示工程，表明代表性不足的古代拉丁语可以利用更广泛 LLM 开发社区的进展实现跨语言迁移学习
- 所讨论方法表现非常强劲：在两个 NER 子任务中均位列第一，并在所有评估指标与机制中取得最佳分数

## 正文

随着古典拉丁语文本数字化资源的增加和大语言模型（LLM）的现代突破，我通过参加 EvaLatin 2026 为古代语言研究做出贡献。本文描述了渥太华大学（Team uOttawa）团队在命名实体识别（NER）共享任务中的系统描述和结果。该任务分为两个子任务：包含 11 个类别的粗粒度 NER 和包含 28 个类别的细粒度 NER，每个子任务都在严格和模糊两种机制下进行评估。通过对商业 LLM gemini-2.5-pro 和 claude-sonnet-4-5 的提示工程，我表明代表性不足的古代拉丁语可以利用更广泛 LLM 开发社区所取得的进展来受益于跨语言迁移学习。总体而言，本报告讨论的方法表现出非常强劲的结果：在两个 NER 子任务中均位列第一，并在所有提交中取得了所有评估指标和机制下的最佳分数。

## 关键词

#命名实体识别 #古典拉丁语 #迁移学习 #提示工程 #LLM #EvaLatin #arXiv
