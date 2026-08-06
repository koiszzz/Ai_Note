---
title: "多样性不等于歧义：面向开放域 QA 的准确高效歧义检测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Diversity is Not Ambiguity- Toward Accurate and Efficient Ambiguity Detection for Open-Domain QA.md"
source_note: "[[信息源/arXiv cs.AI RSS/Diversity is Not Ambiguity- Toward Accurate and Efficient Ambiguity Detection for Open-Domain QA]]"
source_sha256: 751a3a11703f11211fecf50b0046bc8b516edd3c1538f2c0565678a389513f5a
original_url: "https://arxiv.org/abs/2608.03177"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 多样性不等于歧义：面向开放域 QA 的准确高效歧义检测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiwon Lee、Yong-chan Park、Jungin Hong 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03177)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Diversity is Not Ambiguity- Toward Accurate and Efficient Ambiguity Detection for Open-Domain QA|查看原始文件]]

## 摘要

- 提出 ARCHIVE（通过级联假设检查与冲突验证进行歧义识别）：通过逻辑冲突检测歧义——当查询的有效答案无法在单一解释下全部为真时，查询就是歧义的。
- 结合用于表层可检测案例的轻量早退编码器与建模答案间逻辑关系的冲突推理模块，并用不变性目标增强对噪声答案集的鲁棒性。
- 提出 QuireQA，4,703 条查询的基准，涵盖事实型、非事实型与格式不当查询。
- 实验显示 ARCHIVE 优于竞争对手，F1-amb 提升最高 10.4%、F1-unamb 提升最高 21.6%，同时比最佳竞争对手快 16 倍。

## 正文

论文编号：arXiv:2608.03177v1（更新类型：new）。以下为摘要全文翻译。

问答（QA）系统如何判断查询是否歧义？歧义检测在开放域 QA 中至关重要，因为误分类会导致回答错误的解释或不必要的澄清。然而，现有方法把答案多样性与歧义混为一谈，导致预测不准确；它们还统一处理查询，造成浪费性计算。我们提出 ARCHIVE（Ambiguity Recognition via Cascaded Hypothesis Inspection and Conflict Verification，通过级联假设检查与冲突验证进行歧义识别），一个通过逻辑冲突检测歧义的准确高效框架：当查询的有效答案无法在单一解释下全部为真时，该查询就是歧义的。ARCHIVE 结合用于表层可检测案例的轻量早退编码器，与一个建模答案间逻辑关系的冲突推理模块，并用不变性目标增强对噪声答案集的鲁棒性。我们提出 QuireQA，一个 4,703 条查询的基准，涵盖事实型、非事实型与格式不当的查询。实验表明，ARCHIVE 优于竞争对手，F1-amb 提升最高 10.4%、F1-unamb 提升最高 21.6%，同时运行速度比最佳竞争对手快 16 倍。

## 关键词

#开放域问答 #歧义检测 #逻辑冲突 #早退机制
