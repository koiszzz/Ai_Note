---
published: 20260806
title: "ExeCRE：自纠正代码生成的执行一致性引导可靠性估计"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ExeCRE- Execution-Consistency Guided Reliability Estimation for Self-Correcting Code Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/ExeCRE- Execution-Consistency Guided Reliability Estimation for Self-Correcting Code Generation]]"
source_sha256: 2d826bd3121c310270c243bc593f70521b4cd4c04cd5d5656e13bad7c368e728
original_url: "https://arxiv.org/abs/2608.04439"
processed: 2026-08-06
language: zh-CN

---

# ExeCRE：自纠正代码生成的执行一致性引导可靠性估计

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yiru Dong, Richong Zhang, Fanshuang Kong, Si Chen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04439)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ExeCRE- Execution-Consistency Guided Reliability Estimation for Self-Correcting Code Generation|查看原始文件]]

## 摘要

- 大语言模型（LLM）在代码生成上取得显著进展，但在需要复杂算法或实现的挑战性任务上仍挣扎；近期方法日益使用代码执行作为反馈，特别是在从生成代码构建验证信号的自纠正流水线中，但这些流水线常依赖可靠性未知的监督信号，可引入误导反馈、不必要修订和错误最终答案。
- 本文提出 ExeCRE，一个执行一致性引导的代码可靠性估计框架：不通过测试或 LLM 反馈评判候选代码，而是通过统计分析大量随机生成输入上执行输出的一致性模式估计代码可靠性。
- 收集生成输入上的执行输出、投影为一致性信号，应用 Dawid-Skene 模型推断潜在代码可靠性；GPT-5.2 上 LiveCodeBench 中，已正确代码上的平均误导反馈案例数从代表性自纠正基线的 113.2 降至 ExeCRE 的 14.0。

## 正文

大语言模型（LLM）在代码生成上取得显著进展，但它们仍在需要复杂算法或复杂实现的任务上挣扎。近期方法日益使用代码执行作为反馈，特别是在从生成代码构建验证信号的自纠正流水线中。然而，这些流水线常依赖可靠性未知的监督信号，可能引入误导反馈、不必要修订和错误最终答案。为解决此问题，我们提出 ExeCRE，一个执行一致性引导的代码可靠性估计（Execution-Consistency guided code Reliability Estimation）框架。ExeCRE 不通过测试或 LLM 反馈评判候选代码，而是通过统计分析大量随机生成输入上执行输出的一致性模式估计代码可靠性。它收集生成输入上的执行输出，将其投影为一致性信号，并应用 Dawid-Skene 模型推断潜在代码可靠性。我们将 ExeCRE 集成到代码生成的自纠正中。实验表明，ExeCRE 持续改进有效性和稳定性，同时大幅减少误导性纠正信号。GPT-5.2 上 LiveCodeBench 中，已正确代码上的平均误导反馈案例数从代表性自纠正基线的 113.2 降至 ExeCRE 的 14.0。作为附加研究，我们将相同可靠性估计策略应用于基于代码的数学推理，观察类似收益。这些结果表明，ExeCRE 使基于执行的流水线中生成代码的使用更可靠。

## 关键词

#代码生成 #自纠正 #可靠性估计 #执行一致性 #arXiv