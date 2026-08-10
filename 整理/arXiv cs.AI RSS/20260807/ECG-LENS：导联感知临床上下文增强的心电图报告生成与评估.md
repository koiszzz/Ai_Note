---
published: 2026-08-07
title: "ECG-LENS：导联感知临床上下文增强的心电图报告生成与评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ECG-LENS- Lead-Aware Clinical Context Enriched ECG Report Generation and Evaluation.md"
source_note: "[[信息源/arXiv cs.AI RSS/ECG-LENS- Lead-Aware Clinical Context Enriched ECG Report Generation and Evaluation]]"
source_sha256: 49329edf385aff324456206518da6affcbe309adffe0ebaaa1d97c3b8c4c9d2a
original_url: "https://arxiv.org/abs/2608.05893"
processed: 2026-08-07
language: zh-CN
---

# ECG-LENS：导联感知临床上下文增强的心电图报告生成与评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Akanta Das, Tasinul Islam Ahon, Ahmed Mahir Sultan Rumi, Md Mahbubur Rahman, Tausif Amim Shadly, Tanzima Hashem
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05893)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ECG-LENS- Lead-Aware Clinical Context Enriched ECG Report Generation and Evaluation|查看原始文件]]

## 摘要

- 心电图（ECG）是诊断心血管疾病最广泛使用的非侵入性工具之一，但将多导联 ECG 记录转化为可靠临床报告仍有挑战；自动化 ECG 报告生成可减轻临床医生解读负担、提升诊断效率、扩大欠服务社区的心脏评估可及性。
- 与基于图像的报告生成任务不同，ECG 解读需要分析细微时间形态，随后以密集临床术语进行连贯诊断推理；现有系统主要聚焦分类，当前报告生成方法常产生对实际临床使用不足的输出。
- 提出 ECG-LENS：端到端 ECG 报告生成框架，联合集成多导联信号建模、诊断感知表示与临床接地文本生成——结合保留局部波形形态的逐导联编码器与捕获导联间依赖的全局编码器；用临床增强文本提示融合信号表示，条件化 GPT-2 解码器引导报告生成；引入 ECG 特定报告预处理策略帮助模型聚焦临床有意义的发现。
- 因词法指标可能低估或高估报告质量，提出 F1-ECGBERT：基于 BERT 的 ECG 特定指标，衡量生成与参考报告提取诊断标签之间的一致性；PTB-XL 域内实验与 MIMIC-IV-ECG 跨域评估显示，ECG-LENS 在 METEOR、ROUGE-L 与 F1-ECGBERT 上相对最强基线分别绝对提升 4.0%、6.3% 与 11.5%。

## 正文

心电图（Electrocardiography，ECG）是诊断心血管疾病最广泛使用的非侵入性工具之一，但将多导联 ECG 记录转化为可靠临床报告仍有挑战。自动化 ECG 报告生成可减轻临床医生的解读工作量、提升诊断效率，并扩大欠服务社区的心脏评估可及性。与基于图像的报告生成任务不同，ECG 解读需要分析细微的时间形态，随后以密集临床术语进行连贯的诊断推理。现有系统主要聚焦分类，而当前报告生成方法常产生对实际临床使用不足的输出。为应对这些挑战，我们提出 ECG-LENS，一个端到端 ECG 报告生成框架，联合集成多导联信号建模、诊断感知表示与临床接地文本生成。ECG-LENS 结合保留局部波形形态的逐导联编码器与捕获导联间依赖的全局编码器。为引导报告生成，我们将信号表示与临床增强的文本提示融合，条件化 GPT-2 解码器。我们进一步引入 ECG 特定报告预处理策略，帮助模型聚焦临床有意义的发现。最后，由于词法指标可能低估或高估报告质量，我们提出 F1-ECGBERT，一个基于 BERT 的 ECG 特定指标，衡量从生成与参考报告中提取的诊断标签之间的一致性。PTB-XL 上的域内实验与 MIMIC-IV-ECG 上的跨域评估表明，ECG-LENS 在 METEOR、ROUGE-L 与 F1-ECGBERT 上相对最强基线分别取得 4.0%、6.3% 与 11.5% 的绝对增益。

## 关键词

#心电图 #报告生成 #多导联 #临床AI
