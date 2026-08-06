---
title: "HERO：通过先推理后总结实现放射报告生成的层级证据推理优化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HERO- Hierarchical Evidential Reasoning Optimization for Radiology Report Generation via Reason-then.md"
source_note: "[[信息源/arXiv cs.AI RSS/HERO- Hierarchical Evidential Reasoning Optimization for Radiology Report Generation via Reason-then]]"
source_sha256: 6e0364cf228c32d5e188ef93a8cc229d78b2f74be62de657fd655663160ed27a
original_url: "https://arxiv.org/abs/2601.03321"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# HERO：通过先推理后总结实现放射报告生成的层级证据推理优化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Kun Zhao、Guodong Liu、Hui Ji 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.03321)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HERO- Hierarchical Evidential Reasoning Optimization for Radiology Report Generation via Reason-then|查看原始文件]]

## 摘要

- 提出 HERO（层级证据推理优化），分解式策略优化框架：以三种优化粒度对齐异构监督——通过互补的片段级、token 级与完成级优化分别优化推理、诊断与证据接地，异构奖励公式覆盖诊断准确率、推理质量与思考-答案一致性。
- 香草 GRPO 在整个生成上分配均匀信用，导致片段干扰、token 稀释与证据-诊断解耦，加剧临床幻觉。
- 在 MIMIC-CXR 与 IU-Xray 上，HERO 优于强监督与强化学习基线，取得最先进临床效能，同时产生更接地、更一致的思考-答案报告，大幅缓解临床幻觉。

## 正文

论文编号：arXiv:2601.03321v3（更新类型：replace-cross）。以下为摘要全文翻译。

多模态大语言模型（MLLM）显著推进了放射报告生成（RRG），但由于异构的医学监督，通过强化学习（RL）对齐它们仍然具有挑战性。香草组相对策略优化（GRPO）在整个生成上分配均匀信用，导致片段干扰、token 稀释与证据-诊断解耦，加剧临床幻觉。我们提出 HERO（Hierarchical Evidential Reasoning Optimization，层级证据推理优化），一个分解式策略优化框架，以三种优化粒度对齐异构监督。HERO 通过互补的片段级、token 级与完成级优化分别优化推理、诊断与证据接地，异构奖励公式覆盖诊断准确率、推理质量与思考-答案一致性。在 MIMIC-CXR 与 IU-Xray 上的实验表明，HERO 优于强监督与强化学习基线，取得最先进的临床效能，同时产生更接地、思考-答案更一致的报告，从而大幅缓解临床幻觉。

## 关键词

#放射报告生成 #强化学习 #医学影像 #证据推理
