---
published: 2026-08-07
title: "测量与检测有害的 AI 谄媚"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Measuring and Detecting Harmful AI Sycophancy.md"
source_note: "[[信息源/arXiv cs.AI RSS/Measuring and Detecting Harmful AI Sycophancy]]"
source_sha256: cbcb2a97a36c1561b987e3c5f170e97db1438b61ec1ba6c33e95d34789be66ae
original_url: "https://arxiv.org/abs/2608.05624"
processed: 2026-08-07
language: zh-CN
---

# 测量与检测有害的 AI 谄媚

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Bohan Jiang, Dawei Li, Yasin Silva, Huan Liu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05624)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Measuring and Detecting Harmful AI Sycophancy|查看原始文件]]

## 摘要

- 谄媚式响应在大语言模型（LLM）中日益普遍，先前工作指出其中一些可能有害；论文聚焦一种有害谄媚：偏好诱导立场反转谄媚（PSRS）——模型仅为了与用户陈述偏好对齐而反转初始立场。
- 现有研究主要测量模型谄媚程度，论文更进一步，询问 PSRS 是否也能从单次响应自动检测。
- 为大规模研究，引入 CAP（对比锚点探测）：收集标注 PSRS 数据的框架——应用于 17 个开源与闭源 LLM，收集 12 个日常建议领域共 290,460 个标注响应。
- 围绕三个研究问题组织研究：①PSRS 多久发生一次？②检测效果如何？③检测如何泛化到未见模型？首先揭示 PSRS 率跨 LLM 从 5% 到 56%，能力更强模型谄媚更少；其次证明从响应文本单独检测 PSRS 可行，检测器需从训练数据学习微妙 PSRS 模式；因新 LLM 快速出现，检测器不可避免遇到未见模型，使跨模型泛化成为重要框架目标——展示未见模型上检测性能下降，并提出应对挑战的初步方法；将发布数据集与代码支持未来研究。

## 正文

谄媚式（sycophantic）响应在大语言模型（LLMs）中日益普遍，先前工作指出其中一些可能有害。本文聚焦一种有害谄媚：偏好诱导立场反转谄媚（preference-induced stance reversal sycophancy，PSRS），即模型仅为了与用户陈述偏好对齐而反转初始立场。虽然现有研究主要测量模型的谄媚程度，我们更进一步，询问 PSRS 是否也能从单次响应自动检测。为大规模研究此问题，我们引入 CAP（Contrastive Anchor Probing，对比锚点探测），一个收集标注 PSRS 数据的框架。将 CAP 应用于 17 个开源与闭源 LLM，我们收集 12 个日常建议领域共 290,460 个标注响应。我们围绕三个研究问题组织研究：（1）PSRS 多久发生一次？（2）检测效果如何？（3）检测如何泛化到未见模型？我们首先揭示 PSRS 率跨 LLM 从 5% 到 56%，能力更强的模型谄媚更少。其次，我们证明从响应文本单独检测 PSRS 是可行的，且检测器需要从训练数据学习微妙的 PSRS 模式。由于新 LLM 快速出现，检测器不可避免地遇到未见模型，使跨模型泛化成为重要的框架目标。我们展示检测性能在未见模型上下降，并提出应对这一挑战的初步方法。我们将发布数据集与代码以支持未来研究。

## 关键词

#谄媚 #LLM安全 #立场反转 #检测
