---
published: 2026-08-07
title: "如何识别新词：上下文偏置方法与语音 LLM 的比较"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/How to Recognize New Words- A Comparison Between Context Biasing Methods and Speech LLMs.md"
source_note: "[[信息源/arXiv cs.CL RSS/How to Recognize New Words- A Comparison Between Context Biasing Methods and Speech LLMs]]"
source_sha256: 4598ef383448df4e7e2758d43476b1fba585f23daf8ae8536fd85e719dde00f0
original_url: "https://arxiv.org/abs/2608.05759"
processed: 2026-08-07
language: zh-CN
---

# 如何识别新词：上下文偏置方法与语音 LLM 的比较

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Christian Huber, Alexander Waibel
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05759)

## 摘要

- 识别新词与罕见词（命名实体、缩写、领域特定特殊词与训练数据稀缺的其他项）仍是自动语音识别（ASR）关键挑战。
- 比较两种策略：上下文偏置方法（扩展 ASR 模型使推理时可提供词表）与直接带上下文提示的语音大语言模型（LLM）。
- 评估两个基于 Whisper 的上下文偏置方法与三个语音 LLM，跨朗读与非朗读语音，报告偏置、非偏置与总体词错误率（WER）。
- 上下文偏置方法将偏置 WER 相对降低最多 88%，同时其他词大体不受影响；语音 LLM 朗读语音出色但非朗读泛化差，且对干扰项数量与提示词序敏感；刻画所得权衡指导方法选择。

## 正文

识别新词与罕见词——命名实体、缩写、领域特定的特殊词，以及其他在训练数据中稀缺的项——仍然是自动语音识别（ASR）的关键挑战。研究比较两种策略：上下文偏置（context biasing）方法，其中 ASR 模型被扩展，使推理期间可以提供一个词表；以及直接以上下文提示的语音大语言模型（LLMs）。研究评估两个基于 Whisper 的上下文偏置方法与三个语音 LLM，覆盖朗读与非朗读语音，报告偏置、非偏置与总体词错误率（WER）。上下文偏置方法将偏置 WER 相对降低最多 88%，同时使其他词大体不受影响。语音 LLM 在朗读语音上表现出色，但对非朗读语音泛化较差，并被证明对干扰项数量与提示词序敏感。研究刻画由此产生的权衡，以指导方法选择。

## 关键词

ASR、上下文偏置、语音 LLM、新词、WER
