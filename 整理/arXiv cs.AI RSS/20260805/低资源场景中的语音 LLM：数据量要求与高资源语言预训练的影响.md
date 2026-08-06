---
published: 2026-08-05
title: "低资源场景中的语音 LLM：数据量要求与高资源语言预训练的影响"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Speech LLMs in Low-Resource Scenarios- Data Volume Requirements and the Impact of Pretraining on Hig.md"
source_note: "[[信息源/arXiv cs.AI RSS/Speech LLMs in Low-Resource Scenarios- Data Volume Requirements and the Impact of Pretraining on Hig]]"
source_sha256: 8e3381841cd328be1ed38c37d4930772fa22df09034bc2f9a94eb354277c4e5e
original_url: "https://arxiv.org/abs/2508.05149"
processed: 2026-08-05
language: zh-CN
---

# 低资源场景中的语音 LLM：数据量要求与高资源语言预训练的影响

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Seraphina Fong、Marco Matassoni、Alessio Brutti
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.05149)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Speech LLMs in Low-Resource Scenarios- Data Volume Requirements and the Impact of Pretraining on Hig|查看原始文件]]

## 摘要

- 调查语音 LLM 用于低资源自动语音识别（ASR）：使用 SLAM-ASR 框架（可训练轻量投影器连接语音编码器与 LLM）。
- 首先评估匹配 Whisper 单独性能所需的训练数据量，重新强调有限数据的挑战；其次表明利用在高资源语言上预训练的单语或多语投影器可降低数据稀缺的影响，尤其在小训练集时。
- 大语言模型（LLM）在处理高资源语言的口语输入方面展现潜力，在各种任务达到最先进性能；但其在低资源设置中的适用性仍较少探索。
- 用多语 LLM（EuroLLM、Salamandra）配 whisper-large-v3-turbo，在多个公开基准上评估性能，为优化面向低资源语言与多语性的语音 LLM 的未来研究提供洞见。

## 正文

论文编号：arXiv:2508.05149v2（更新类型：replace-cross）。以下为摘要全文翻译。

大语言模型（LLM）在处理高资源语言的口语输入方面展现出潜力，在各种任务中达到最先进性能。然而，它们在低资源设置中的适用性仍较少被探索。本工作使用 SLAM-ASR 框架调查语音 LLM 用于低资源自动语音识别（ASR），其中可训练的轻量投影器连接语音编码器与 LLM。首先，我们评估匹配 Whisper 单独性能所需的训练数据量，重新强调有限数据的挑战。其次，我们表明利用在高资源语言上预训练的单语或多语投影器可以降低数据稀缺的影响，尤其在小训练集时。使用多语 LLM（EuroLLM、Salamandra）配 whisper-large-v3-turbo，我们在多个公开基准上评估性能，为优化面向低资源语言与多语性的语音 LLM 的未来研究提供洞见。

## 关键词

#语音LLM #低资源语言 #自动语音识别 #多语言
