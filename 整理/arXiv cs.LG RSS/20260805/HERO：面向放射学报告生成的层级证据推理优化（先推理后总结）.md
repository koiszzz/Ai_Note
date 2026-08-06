---
published: 2026-08-05
title: "HERO：面向放射学报告生成的层级证据推理优化（先推理后总结）"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/HERO- Hierarchical Evidential Reasoning Optimization for Radiology Report Generation via Reason-then.md"
source_note: "[[信息源/arXiv cs.LG RSS/HERO- Hierarchical Evidential Reasoning Optimization for Radiology Report Generation via Reason-then.]]"
source_sha256: a1515afc12626e9a9f7e4e63422e83c6d0dcf4f7528324ca98823eabb1935cfd
original_url: "https://arxiv.org/abs/2601.03321"
processed: 2026-08-05
language: zh-CN
---

# HERO：面向放射学报告生成的层级证据推理优化（先推理后总结）

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Kun Zhao、Guodong Liu、Hui Ji、Siyuan Dai、Pan Wang、Jifeng Song、Chenghua Lin、Liang Zhan、Haoteng Tang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.03321)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/HERO- Hierarchical Evidential Reasoning Optimization for Radiology Report Generation via Reason-then.|查看原始文件]]

## 摘要

- 多模态大语言模型（MLLM）已大幅推进放射学报告生成（RRG），但由于异构医学监督的存在，通过强化学习（RL）对齐仍然具有挑战性。
- 朴素 Group Relative Policy Optimization（GRPO）对整个生成过程分配均匀信用，导致片段干扰、token 稀释与证据—诊断解耦，加剧临床幻觉。
- 提出 HERO（Hierarchical Evidential Reasoning Optimization，层级证据推理优化），一个分解式策略优化框架，以三种优化粒度对齐异构监督。
- HERO 通过互补的片段级、token 级与完成级优化分别优化推理、诊断与证据接地，并采用涵盖诊断准确率、推理质量与思考—回答一致性的异构奖励公式。
- MIMIC-CXR 与 IU-Xray 上的实验显示：HERO 优于强监督与强化学习基线，取得最先进的临床效能，同时产生更具证据接地性与思考—回答一致性的报告，从而显著缓解临床幻觉。

## 正文

论文编号：arXiv:2601.03321v3（更新类型：replace）。以下为摘要全文翻译。

多模态大语言模型（MLLM）已显著推进放射学报告生成（RRG），然而由于异构医学监督的存在，通过强化学习（RL）对齐它们仍然具有挑战性。朴素 Group Relative Policy Optimization（GRPO）对整个生成过程分配均匀信用，导致片段干扰、token 稀释与证据—诊断解耦，这加剧了临床幻觉。我们提出 HERO（Hierarchical Evidential Reasoning Optimization，层级证据推理优化），一个分解式策略优化框架，以三种优化粒度对齐异构监督。HERO 通过互补的片段级、token 级与完成级优化分别优化推理、诊断与证据接地，并采用涵盖诊断准确率、推理质量与思考—回答一致性的异构奖励公式。在 MIMIC-CXR 与 IU-Xray 上的实验表明，HERO 优于强监督与强化学习基线，取得最先进的临床效能，同时产生更具证据接地性与思考—回答一致性的报告，从而显著缓解临床幻觉。

## 关键词

#放射学报告生成 #多模态LLM #强化学习 #GRPO #临床幻觉
