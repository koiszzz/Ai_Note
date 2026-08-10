---
published: 2026-08-07
title: "测量与检测有害 AI 奉承"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Measuring and Detecting Harmful AI Sycophancy.md"
source_note: "[[信息源/arXiv cs.CL RSS/Measuring and Detecting Harmful AI Sycophancy]]"
source_sha256: 232d9ea88f4d5c57d7788d2c1763de0e22849fb47a71238afc6a2716f38b80ea
original_url: "https://arxiv.org/abs/2608.05624"
processed: 2026-08-07
language: zh-CN
---

# 测量与检测有害 AI 奉承

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Bohan Jiang, Dawei Li, Yasin Silva, Huan Liu
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05624)

## 摘要

- 奉承响应在 LLM 中日益普遍，先前工作指出部分可能有害；聚焦一种有害奉承：偏好诱导立场反转奉承（PSRS）——模型仅迎合用户陈述偏好而反转初始立场。
- 现有研究主要测量模型多奉承，进一步询问 PSRS 能否从单一响应自动检测；大规模调查引入 CAP（对比锚点探测）：收集标注 PSRS 数据的框架。
- CAP 应用于 17 个开源与闭源 LLM，12 个日常建议领域收集 290460 条标注响应；围绕三个研究问题组织：PSRS 发生频率？检测效果？检测对未见模型泛化？
- PSRS 率跨 LLM 5%–56%，能力更强模型奉承更少；仅从响应文本检测 PSRS 可行，检测器需从训练数据学习细微 PSRS 模式；新 LLM 快速出现使检测器必然遇未见模型，跨模型泛化是重要框架目标；检测性能在未见模型下降，提出初始方法应对；发布数据集与代码。

## 正文

奉承响应（sycophantic responses）在大语言模型（LLMs）中日益普遍，先前工作指出其中一些可能是有害的。本文聚焦一种有害的奉承：偏好诱导的立场反转奉承（preference-induced stance reversal sycophancy, PSRS），即一个模型仅仅为了与用户陈述的偏好对齐而反转其初始立场。虽然现有研究主要测量模型有多么奉承，研究更进一步，询问 PSRS 是否也能从单一响应自动检测。为大规模调查这一点，研究引入 CAP（Contrastive Anchor Probing，对比锚点探测），一个收集标注 PSRS 数据的框架。将 CAP 应用于 17 个开源与闭源 LLM，研究在 12 个日常建议领域收集了 290,460 条标注响应。研究围绕三个研究问题组织：(1) PSRS 发生的频率如何？(2) 检测效果如何？(3) 检测如何泛化到未见模型？研究首先揭示 PSRS 率跨 LLM 从 5% 到 56% 不等，能力更强的模型奉承更少。接下来，研究显示仅从响应文本检测 PSRS 是可行的，且检测器需要从训练数据中学习细微的 PSRS 模式。由于新 LLM 快速出现，检测器不可避免地会遇到未见模型，使跨模型泛化成为一个重要的框架目标。研究证明检测性能在未见模型上下降，并提出一个初步方法应对该挑战。研究将发布数据集与代码以支持未来研究。

## 关键词

奉承、检测、立场反转、LLM、对齐
