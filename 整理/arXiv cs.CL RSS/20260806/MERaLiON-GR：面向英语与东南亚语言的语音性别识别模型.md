---
published: 2026-08-06
title: MERaLiON-GR：面向英语与东南亚语言的语音性别识别模型
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/MERaLiON-GR- Speech Gender Recognition Model for English and SEA Languages.md
source_note: "[[信息源/arXiv cs.CL RSS/MERaLiON-GR- Speech Gender Recognition Model for English and SEA Languages|查看原始文件]]"
source_sha256: 80b34d4b2f457fd9671d16cff2badec6b613212b606191fe5b140fe10cb83330
original_url: https://arxiv.org/abs/2608.04433
processed: 2026-08-07
language: zh-CN
---

# MERaLiON-GR：面向英语与东南亚语言的语音性别识别模型

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04433)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/MERaLiON-GR- Speech Gender Recognition Model for English and SEA Languages|查看原始文件]]

## 摘要

- 本文提出 MERaLiON-GR，一个对英语和东南亚（SEA）语言执行二分类（女性/男性）的语音性别识别系统。
- 模型对 MERaLiON-SpeechEncoder-2（一个在大规模语音语料上预训练的基于 conformer 的大规模 Transformer）进行微调，通过低秩适配（LoRA）实现参数高效微调以适配性别识别任务。
- 模型附加了一个带注意力池化的多尺度 ECAPA-TDNN 下游网络和一个轻量线性分类器。
- 在多种新加坡及东南亚语言（英语、中文、马来语、泰米尔语、泰语、越南语、印度尼西亚语和高棉语）上的广泛评估表明，MERaLiON-GR 在整句和片段两种评估模式下都持续超越最先进的性别识别模型 Vox-Profile 以及大型 Audio-LLM。
- 结果凸显了专用语音模型在实现准确副语言理解与强跨语言泛化方面的价值。

## 正文

我们提出 MERaLiON-GR，一个对英语和东南亚（SEA）语言执行二分类（女性/男性）的语音性别识别系统。该模型对 MERaLiON-SpeechEncoder-2 进行微调——这是一个在大规模语音语料上预训练的、基于 conformer 的大规模 Transformer——并通过低秩适配（Low-Rank Adaptation，LoRA）应用参数高效微调，将编码器适配到性别识别任务上，同时附加一个带注意力池化的多尺度 ECAPA-TDNN 下游网络和一个轻量线性分类器。

在多种新加坡和东南亚语言（英语、中文、马来语、泰米尔语、泰语、越南语、印度尼西亚语和高棉语）上的广泛评估表明，MERaLiON-GR 在整句（full-utterance）和片段级（segment level）两种评估模式下都持续超越最先进的性别识别模型 Vox-Profile 以及一个大型 Audio-LLM。这些结果凸显了专用语音模型在实现准确副语言理解和强跨语言泛化方面的价值。

## 关键词

#语音性别识别 #LoRA #ECAPA-TDNN #东南亚语言 #arXiv
