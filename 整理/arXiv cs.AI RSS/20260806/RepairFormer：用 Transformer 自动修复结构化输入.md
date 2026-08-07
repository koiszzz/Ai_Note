---
published: 20260806
title: "RepairFormer：用 Transformer 自动修复结构化输入"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/RepairFormer- Automated Repair of Structured Inputs Using Transformers.md"
source_note: "[[信息源/arXiv cs.AI RSS/RepairFormer- Automated Repair of Structured Inputs Using Transformers]]"
source_sha256: 082b447bff653941530fe5fad30fbc4c99cd6f7e98106ba5d2a52f147a76563a
original_url: "https://arxiv.org/abs/2608.05060"
processed: 2026-08-06
language: zh-CN

---

# RepairFormer：用 Transformer 自动修复结构化输入

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ovi Paul, Tom J King, Ali Shokri
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05060)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/RepairFormer- Automated Repair of Structured Inputs Using Transformers|查看原始文件]]

## 摘要

- JSON、DOT、OBJ、INI、S 表达式和 TinyC 等结构化输入文件广泛用于软件系统，但小损坏可导致解析器拒绝原本有用的数据；修复此类输入很重要，因为格式错误的配置、程序和数据文件可中断测试、分析、部署和下游自动化，即使大部分原始内容仍完整。
- 现有修复技术可产生结构有效输入，但常依赖删除或反复搜索，可能丢失原始内容并导致语义不正确；本文呈现 RepairFormer，一个基于 Transformer 的结构化输入修复框架。
- 方法将修复表述为监督序列生成任务，用格式标签、oracle 验证和边界定位修复生成有效输出同时保留内容：边界工作流聚焦生成于检测故障区域，减少输入大小，支持更长文件修复；评估中 RepairFormer 修复率 88%、恢复率 94%，修复成功时显示最强内容保留；基准额外实验显示修复 97.57%、恢复 94.29%，运行时比最先进快 5 倍。

## 正文

JSON、DOT、OBJ、INI、S 表达式和 TinyC 等结构化输入文件广泛用于软件系统，但小损坏可导致解析器拒绝原本有用的数据。修复此类输入很重要，因为格式错误的配置、程序和数据文件可中断测试、分析、部署和下游自动化，即使大部分原始内容仍完整。现有修复技术可产生结构有效输入，但它们常依赖删除或反复搜索，可能丢失原始内容并导致语义不正确。本文呈现 RepairFormer，一个基于 Transformer 的结构化输入修复框架。方法将修复表述为监督序列生成任务，并使用格式标签、oracle 验证和边界定位修复生成有效输出同时保留内容。边界工作流将生成聚焦于检测到的故障区域，减少输入大小，并支持更长文件的修复。评估中，RepairFormer 实现修复率 88%、恢复率 94%，修复成功时显示最强内容保留。我们基准上的额外实验显示，RepairFormer 修复 97.57%、恢复 94.29%，运行时比最先进快 5 倍。

## 关键词

#结构化输入 #修复 #Transformer #序列生成 #arXiv