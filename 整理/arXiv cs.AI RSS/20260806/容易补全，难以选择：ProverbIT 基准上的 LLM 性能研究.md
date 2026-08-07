---
published: 20260806
title: "容易补全，难以选择：ProverbIT 基准上的 LLM 性能研究"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Easy to Complete, Hard to Choose- Investigating LLM Performance on the ProverbIT Benchmark.md"
source_note: "[[信息源/arXiv cs.AI RSS/Easy to Complete, Hard to Choose- Investigating LLM Performance on the ProverbIT Benchmark]]"
source_sha256: 1c5bdd769cd7d42d3b7f2f4e5ad07203c801128b1f2e29216743a7213b3d8488
original_url: "https://arxiv.org/abs/2608.04670"
processed: 2026-08-06
language: zh-CN

---

# 容易补全，难以选择：ProverbIT 基准上的 LLM 性能研究

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Enrico Mensa, Lorenzo Zane, Calogero Jerik Scozzaro, Matteo Delsanto, Tommaso Milani, Daniele Paolo Radicioni
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04670)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Easy to Complete, Hard to Choose- Investigating LLM Performance on the ProverbIT Benchmark|查看原始文件]]

## 摘要

- 大语言模型（LLM）变革计算语言学并在众多 NLP 任务上取得显著性能，但在理解这些系统如何处理文化嵌入的语言表达方面仍存在显著差距；本文引入 ProverbIT，一个含 100 道多项选择题的新颖意大利语基准，评估 LLM 补全意大利谚语的能力。
- 评估 13 个前沿模型（含大型推理模型 LRM 和传统 LLM），跨三个任务：谚语补全、带正确答案的多项选择和不带正确答案的多项选择。
- 评估揭示惊人结果：几乎所有模型通过补全任务展示谚语知识，但转向无正确答案多项选择格式时性能急剧下降，即使最先进的推理模型也大幅退化；详细思维链分析揭示模型强烈偏向选择字面同义词，且常提及正确谚语结尾却不识别其从给定选项中缺失。

## 正文

大语言模型（LLM）变革计算语言学，并在众多自然语言处理任务上取得显著性能，然而在理解这些系统如何处理文化嵌入的语言表达方面仍存在显著差距。本文引入 ProverbIT，一个含 100 道多项选择题的新颖意大利语基准，评估 LLM 补全意大利谚语的能力。我们评估 13 个前沿模型，包括大型推理模型（LRM）和传统 LLM，跨三个任务：谚语补全、带正确答案的多项选择和不带正确答案的多项选择。我们的评估揭示惊人结果：虽然几乎所有模型通过成功补全任务展示谚语知识，但转向不带正确答案的多项选择格式时性能急剧下降，即使最先进的推理模型也显示大幅退化。通过两个 LRM 的详细思维链分析，我们发现模型强烈偏向选择字面同义词，且常在推理中提及正确的谚语结尾而不成功识别其从给定选项中缺失。这些发现表明，当前 LLM 严重依赖记忆模式而非对文化基础表达的更深语义理解，突出其在比喻语言理解推理能力上的重要局限。

## 关键词

#谚语 #意大利语 #LLM评估 #比喻语言 #arXiv