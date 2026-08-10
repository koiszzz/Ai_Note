---
published: 2026-08-07
title: "立场：是时候为自一致性优化 LLM 了"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Position- It's Time to Optimize LLMs for Self-Consistency.md"
source_note: "[[信息源/arXiv cs.AI RSS/Position- It's Time to Optimize LLMs for Self-Consistency]]"
source_sha256: 1ede215052564dfc2e0011338eda68f834c35ec3004995f7570883bdbe2b1168
original_url: "https://arxiv.org/abs/2608.05188"
processed: 2026-08-07
language: zh-CN
---

# 立场：是时候为自一致性优化 LLM 了

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Itamar Pres, Belinda Z. Li, Laura Ruis, Zifan Carl Guo, Keya Hu, Mehul Damani, Isha Puri, Ekdeep Singh Lubana, Jacob Andreas
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05188)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Position- It's Time to Optimize LLMs for Self-Consistency|查看原始文件]]

## 摘要

- 尽管语言模型（LM）预训练与后训练流水线日益复杂，许多重要失败持续存在：模型过度条件化于用户框架（"谄媚"）、逻辑泛化不完整、产生自信但错误的响应。
- 论文论证这些失败源于贯穿流水线所有方面的建模假设：行为可在单输出对上独立指定与评估；许多模型失败难以（若非不可能）在不推理模型跨输入响应之间关系的情况下检测。
- 提出自一致性作为理解这些失败的框架：首先观察，各种设计用于改善 LM 行为特定方面（针对对抗稳健性与事实连贯性等多样属性）的技术可理解为通用"一致性优化"程序的特殊情况，并用一套标准优化工具处理。
- 接着勾勒可通过为一致性优化实现的一组新模型属性，最后讨论开发普遍一致 LM 意味着什么，包括它们将启用的能力与它们引发的异议。

## 正文

尽管语言模型（LM）预训练与后训练流水线日益复杂，许多重要失败持续存在：模型过度条件化于用户框架（"谄媚"，sycophancy）、逻辑泛化不完整，并产生自信但错误的响应。我们认为这些失败源于一个贯穿流水线所有方面的建模假设：行为可以在单输出对上独立指定与评估。许多模型失败难以（若非不可能）在不推理模型响应跨输入之间关系的情况下检测。在这篇立场论文中，我们提出自一致性（self-consistency）作为理解这些失败的框架。我们首先观察到，各种各样旨在改善 LM 行为特定方面（针对对抗稳健性与事实连贯性等多样属性）的技术，可以被理解为一种通用"一致性优化"（consistency optimization）程序的特殊情况，并用一套标准优化工具处理。接下来，我们勾勒一组可通过为一致性优化实现的新模型属性，并以讨论开发普遍一致（generally consistent）的 LM 意味着什么作结，包括它们将启用的能力与它们引发的异议。

## 关键词

#自一致性 #LLM优化 #一致性优化 #立场论文
