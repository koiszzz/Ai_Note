---
published: 2026-08-06
title: 基于 ASRS 报告的可追溯 LLM 生成危险场景用于航空系统运行安全分析
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/Traceable LLM-Generated Hazard Scenarios for Operational Safety Analysis of Aviation Systems Using A.md
source_note: "[[信息源/arXiv cs.AI RSS/Traceable LLM-Generated Hazard Scenarios for Operational Safety Analysis of Aviation Systems Using A]]"
source_sha256: fabb445550d0b13a5c1f2f10811127e3d243dff0c4a92dd8a2377d407c398c34
original_url: https://arxiv.org/abs/2608.04697
processed: 2026-08-07
language: zh-CN
---

# 基于 ASRS 报告的可追溯 LLM 生成危险场景用于航空系统运行安全分析

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04697)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Traceable LLM-Generated Hazard Scenarios for Operational Safety Analysis of Aviation Systems Using A|查看原始文件]]

## 摘要

- 航空系统运行层面的危险分析必须考虑天气、ATC 行动、空域约束、飞机运行与人为因素之间的交互，这不同于飞机系统层面的功能危害评估
- 提出一种 AI 辅助方法，从 NASA 航空安全报告系统（ASRS）生成候选危险场景：针对目标不利结果，产生由类别化因素构成的结构化假设，以及与该结构一致的叙述性事件序列场景
- 每个场景附带基于历史共现证据的可信度评分，并可追溯到最相似的留出 ASRS 报告
- 提出混合变体：将叙述生成建立在通过进化溯因得到的结构化假设之上，提高了正确性并降低了变异性

## 正文

航空系统运行层面的危险分析必须考虑天气、ATC（空中交通管制）行动、空域约束、飞机运行和人为因素之间的交互——这与应用于飞机系统层面的功能危害评估是截然不同的。我们提出一种 AI 辅助方法，从 NASA 的航空安全报告系统（ASRS）生成候选危险场景。

给定一个目标不利结果，该方法会产生一个结构化的假设，形式为类别化因素，以及一个描述与该结构一致的操作事件序列的叙述性场景。每个场景都附带一个基于历史共现证据的可信度评分，以及到最相似的留出（held-out）ASRS 报告的可追溯性。

随后我们提出一种混合变体，将叙述生成建立在通过进化溯因（evolutionary abduction）产生的结构化假设之上，从而改进正确性并降低变异性。我们评估了多个大语言模型、零样本与少样本提示方式，以及可选的微调，衡量提示方式和模型选择如何影响所生成结构与叙述的有效性和真实性。

## 关键词

#航空安全 #危险场景 #LLM #ASRS
