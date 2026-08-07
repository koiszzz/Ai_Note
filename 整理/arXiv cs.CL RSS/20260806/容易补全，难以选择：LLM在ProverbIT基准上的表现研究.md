---
published: 2026-08-06
title: "容易补全，难以选择：LLM 在 ProverbIT 基准上的表现研究"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Easy to Complete, Hard to Choose- Investigating LLM Performance on the ProverbIT Benchmark.md
source_note: "[[信息源/arXiv cs.CL RSS/Easy to Complete, Hard to Choose- Investigating LLM Performance on the ProverbIT Benchmark]]"
source_sha256: 1346255b4790b51eee02da129d036fabf17910efd4eb3c7716a0abd4d97bec49
original_url: https://arxiv.org/abs/2608.04670
processed: 2026-08-07
language: zh-CN
---

# 容易补全，难以选择：LLM 在 ProverbIT 基准上的表现研究

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04670)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Easy to Complete, Hard to Choose- Investigating LLM Performance on the ProverbIT Benchmark|查看原始文件]]

## 摘要

- 大语言模型在众多 NLP 任务上表现卓越，但处理文化嵌入的语言表达仍存在显著差距
- 提出 ProverbIT：全新意大利语基准，含 100 道多项选择题，评估 LLM 补全意大利谚语的能力；评测 13 个前沿模型（含 LRM 与传统 LLM）在补全、含正确答案选择、无正确答案选择三项任务上的表现
- 令人意外的结果：几乎所有模型都能通过补全任务展现谚语知识，但转向无正确答案的多项选择格式时性能骤降，连最先进的推理模型也大幅退化
- 对两个 LRM 的详细思维链分析揭示：模型强烈偏向选择字面同义词，常在推理中提及正确谚语结尾却未能识别其不在给定选项中——说明 LLM 依赖记忆模式而非对文化表达的深层语义理解

## 正文

大语言模型（LLMs）变革了计算语言学，并在众多自然语言处理任务上取得了卓越的性能，但在理解这些系统如何处理文化嵌入的语言表达方面，仍存在显著的差距。本文介绍了 ProverbIT，一个全新的意大利语基准，包含 100 道多项选择题，旨在评估 LLM 补全意大利谚语的能力。我们评估了 13 个前沿模型，包括大型推理模型（LRMs）和传统 LLM，涵盖三项任务：谚语补全、含正确答案的多项选择、以及不含正确答案的多项选择。我们的评估揭示了令人惊讶的结果：尽管几乎所有模型都能通过成功的补全任务展现出对谚语的知识，但当转向不含正确答案的多项选择格式时，性能大幅下降，即使是状态最先进的推理模型也表现出显著的退化。通过对两个 LRM 的详细思维链分析，我们发现模型表现出强烈的选择字面同义词的倾向，并且经常在推理过程中提到正确的谚语结尾，却未能成功识别出该结尾在给定选项中并不存在。这些发现表明，当前的 LLM 严重依赖记忆的模式，而非对植根于文化的表达的更深层语义理解，凸显了它们在比喻语言理解推理能力上的重要局限。

## 关键词

#谚语理解 #意大利语基准 #大语言模型 #思维链 #文化语言表达
