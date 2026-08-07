---
published: 2026-08-06
title: CardioBench：临床真实心血管诊疗场景下评估大语言模型的真实世界数据基准
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/CardioBench- A Real-World Data Benchmark for Evaluating Large Language Models in Clinically Authenti.md
source_note: "[[信息源/arXiv cs.CL RSS/CardioBench- A Real-World Data Benchmark for Evaluating Large Language Models in Clinically Authenti]]"
source_sha256: 83fc48fcb529fadbf1b3698114351f4331dbcdd6bef02412393632ff098ee3b9
original_url: https://arxiv.org/abs/2607.25186
processed: 2026-08-07
language: zh-CN
---

# CardioBench：临床真实心血管诊疗场景下评估大语言模型的真实世界数据基准

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.25186)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/CardioBench- A Real-World Data Benchmark for Evaluating Large Language Models in Clinically Authenti|查看原始文件]]

## 摘要

- CardioBench 包含来自 13 个任务特定数据集的 2,263 个条目，覆盖心血管诊疗连续体，由 16 名心内科医生标注并由两名资深专家交叉审核
- 七个 LLM 在标准化零样本设置下生成 15,841 个输出，开放任务以关键点覆盖率与整体临床质量评估
- GPT-5.4 以宏平均 62.55 和项目加权均值 62.19 位居第一，CardioAuxReport 表现最佳（86.38）
- 据作者所知，这是覆盖心血管诊疗连续体的最大规模真实世界多任务 LLM 评估基准

## 正文

背景：大多数医学大语言模型（LLM）基准侧重于考试知识或孤立任务，可能无法反映心血管诊疗的纵向、多模态和安全关键工作流程。

目标：开发 CardioBench，一个覆盖心血管诊疗连续体的真实世界基准，并评估 LLM 在临床维度和专科任务上的表现。

方法：CardioBench 包含来自 13 个任务特定数据集的 2,263 个条目，这些数据集源自去标识化的心血管记录和考试数据。十六名心内科医生进行了标注和参考答案构建，随后由两名资深心脏病专家进行交叉审核。七个 LLM 在标准化的零样本设置下生成了 15,841 个输出。开放任务使用关键点覆盖率和整体临床质量进行评估，而 CardioEthics 按准确率计分。

结果：GPT-5.4 取得了最高的宏平均（62.55）和项目加权均值（62.19），其次是 Gemini 3.1 Pro（59.95）和 Qwen 3.6 27B（59.72）。GPT-5.4 在全部三个维度上均排名第一。CardioAuxReport 表现最佳（86.38），而 CardioECGRead（17.25）和 CardioEthics（17.34）最低。整体临床质量与关键点覆盖率差距最大的出现在 CardioComm（52.71）、CardioEmergRescue（52.05）和 CardioTreatPlan（48.80）。

结论：据我们所知，CardioBench 是覆盖心血管诊疗连续体的最大规模真实世界多任务 LLM 评估基准，并提供了迄今报道的最广泛的临床真实心脏病学场景覆盖。它为识别模型优势、临床重要遗漏和未来开发优先级提供了严格的框架。

## 关键词

#医学LLM #心血管 #基准 #临床评估 #CardioBench #arXiv
