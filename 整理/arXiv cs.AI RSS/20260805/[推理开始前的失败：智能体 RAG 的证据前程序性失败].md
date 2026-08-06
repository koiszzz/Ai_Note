---
published: 2026-08-05
title: "推理开始前的失败：智能体 RAG 的证据前程序性失败"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Before Reasoning Can Fail- Pre-Evidence Procedural Failures in Agentic RAG.md"
source_note: "[[信息源/arXiv cs.AI RSS/Before Reasoning Can Fail- Pre-Evidence Procedural Failures in Agentic RAG]]"
source_sha256: 61900367646901aea566233e9ab813ffa73254d98034f9b2fcbe850c27db5647
original_url: "https://arxiv.org/abs/2608.02011"
processed: 2026-08-05
language: zh-CN
---

# 推理开始前的失败：智能体 RAG 的证据前程序性失败

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02011)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Before Reasoning Can Fail- Pre-Evidence Procedural Failures in Agentic RAG|查看原始文件]]

## 摘要

- 智能体检索增强生成（RAG）系统可能在证据条件推理尚未接受检验之前就已经失败：智能体可以检索候选片段，却不检查片段便直接完成回答。
- 论文利用已保存的工具调用轨迹、检索证据、实际阅读的段落和最终答案，研究这一失败模式作为智能体轨迹的一种程序性属性。
- 研究把错误答案分解为证据前纪律失败和读过正确证据后的失败。在 HotpotQA、2WikiMultiHopQA 和 MuSiQue 上的 12000 条成对轨迹中，两类失败大体不重复；使用正则表达式和 spaCy 实体抽取器时，两者同时触发的比例为 11.2%—13.1%。
- 作者评估了 Read-Gate，这是一条要求智能体在搜索后、最终确定答案前进行阅读的最小运行时不变量。
- 强制阅读使原本会跳过阅读的轨迹的 LLM-Acc 提高 14.9—19.9 个百分点，也使完整的最小推理单元提高 3.2—9.4 个百分点。
- 额外诊断表明，更大的隐藏思考预算并不一定会增加证据检查；证据收集应被作为独立于答案推理的轨迹级控制问题进行评估。

## 正文

智能体检索增强生成（RAG）系统可能在证据条件推理尚未接受检验之前就失败。例如，智能体能够检索候选片段，却在没有检查这些片段的情况下直接完成回答。本文把这一失败模式作为智能体轨迹的一种程序性属性进行研究。

作者使用保存下来的工具调用轨迹、检索到的证据、实际阅读的段落和最终答案，把错误答案分解为两类：证据前的纪律失败，以及阅读了正确证据之后发生的失败。在 HotpotQA、2WikiMultiHopQA 和 MuSiQue 三个数据集上，研究分析了 12000 条成对轨迹。

结果显示，两类失败大体不具有冗余性。使用正则表达式实体抽取器和 spaCy 实体抽取器时，两种失败同时触发的比例处于 11.2%—13.1% 区间。作者随后评估 Read-Gate，一条简单的运行时不变量：智能体完成搜索后、最终确定答案前必须进行阅读。

强制阅读使那些原本会跳过阅读的轨迹的 LLM-Acc 提高 14.9—19.9 个百分点；在完整的最小推理单元上，也提高了 3.2—9.4 个百分点。额外诊断显示，增加隐藏思考预算并不一定会让智能体更仔细地检查证据。综合来看，证据收集应当被视为一个轨迹级控制问题，并与答案侧的推理能力分开评估。

## 关键词

#检索增强生成 #智能体 #证据检查 #轨迹控制 #Read-Gate #问答系统
