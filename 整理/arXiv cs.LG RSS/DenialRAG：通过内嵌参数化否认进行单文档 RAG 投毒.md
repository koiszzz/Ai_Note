---
title: "DenialRAG：通过内嵌参数化否认进行单文档 RAG 投毒"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DenialRAG- Single-Document RAG Poisoning via Embedded Parametric Denial.md"
source_note: "[[信息源/arXiv cs.LG RSS/DenialRAG- Single-Document RAG Poisoning via Embedded Parametric Denial]]"
source_sha256: ae6857e39e31d3b7036d9e6c9c1150c2dbff766f914c1c26f6a1d86a1a50c251
original_url: "https://arxiv.org/abs/2608.02678"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# DenialRAG：通过内嵌参数化否认进行单文档 RAG 投毒

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Abay Zhurekbay、Tao Liu、Fan Li
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02678)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DenialRAG- Single-Document RAG Poisoning via Embedded Parametric Denial|查看原始文件]]

## 摘要

- 提出 DenialRAG：单文档投毒攻击，明确命名正确答案、否认它并提出攻击者控制的理由支持错误答案——把正确答案与相应投毒答案放在同一检索段落，把冲突直接嵌入生成器看到的上下文。
- 检索增强生成（RAG）系统易受语料投毒：向检索语料插入精心构造文档即可把底层 LLM 引向攻击者选择的错误答案；先前单文档攻击通常避免在投毒段落中明确点名并驳斥正确答案。
- 三个开放域问答数据集、四个已发表单文档投毒攻击、四厂商八个目标 LLM 与五种推理时防御上评估：攻击有效性强烈依赖模型——DenialRAG 在全部三个 Mistral-7B 数据集取得最高攻击成功率（ASR）并在多个其他目标 LLM 保持有效，其他攻击在部分模型区间占优；防御带来有意义 ASR 降低但保护不统一（每防御某些设置留残余 ASR）。
- 组件级与跨模型分析把内嵌否认识别为最有影响组件，不同投毒机制跨模型组以不同速率失效——RAG 投毒风险无法用单一攻击族或单一目标模型完全刻画。

## 正文

论文编号：arXiv:2608.02678v1（更新类型：cross）。以下为摘要全文翻译。

检索增强生成（RAG）系统容易受到语料投毒攻击：攻击者向检索语料插入一份精心构造的文档，就能把底层大语言模型（LLM）引向攻击者选择的错误答案。先前的单文档攻击通常避免在投毒段落中明确点名并驳斥正确答案。在本文中，我们考察一种互补设计，提出 DenialRAG，一种明确命名正确答案、对其否认、并提出攻击者控制理由支持错误答案的单文档投毒攻击。通过把正确答案与相应的投毒答案放在同一检索段落中，DenialRAG 将冲突直接嵌入生成器看到的上下文。我们在三个开放域问答数据集上、针对四个已发表的单文档投毒攻击、来自四个厂商的八个目标 LLM 以及五种推理时防御评估 DenialRAG。结果表明，攻击有效性强烈依赖模型：DenialRAG 在全部三个 Mistral-7B 数据集上取得最高攻击成功率（ASR），并在多个其他目标 LLM 上保持有效，而其他攻击在部分模型区间占优。防御结果表明 ASR 有意义的降低，但保护并不统一：每种防御在某些设置下仍留下残余 ASR。组件级与跨模型分析进一步把内嵌否认识别为最有影响的测试组件，并显示不同投毒机制在不同模型组中以不同速率失效。综合来看，这些结果表明 RAG 投毒风险无法用单一攻击族或单一目标模型完全刻画。

## 关键词

#RAG安全 #投毒攻击 #检索增强生成 #防御
