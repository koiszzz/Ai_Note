---
published: 20260806
title: "基于 LLM 的软件工程中的反馈循环与代码扰动：C 到 Rust 翻译系统案例研究"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Feedback Loops and Code Perturbations in LLM-based Software Engineering- A Case Study on a C-to-Rust.md"
source_note: "[[信息源/arXiv cs.AI RSS/Feedback Loops and Code Perturbations in LLM-based Software Engineering- A Case Study on a C-to-Rust]]"
source_sha256: 3f142cbfdc459770f06f7b1bfe71daa362706b3aa47ed555ce74a944cbeba79b
original_url: "https://arxiv.org/abs/2512.02567"
processed: 2026-08-06
language: zh-CN

---

# 基于 LLM 的软件工程中的反馈循环与代码扰动：C 到 Rust 翻译系统案例研究

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Martin Weiss, Jesko Hecking-Harbusch, Jochen Quante, Matthias Woehrle
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.02567)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Feedback Loops and Code Perturbations in LLM-based Software Engineering- A Case Study on a C-to-Rust|查看原始文件]]

## 摘要

- 强生成式 AI 的出现对代码修复、测试生成或语言翻译等各种软件工程任务产生相当影响；虽然 GitHub Copilot 等工具已在交互设置广泛使用，自动化方法在用于工业实践前需要更高可靠性。
- 本文聚焦直接影响结果质量的三个方面：a）自动反馈循环的效果，b）大语言模型（LLM）的选择，c）行为保持代码变更的影响；在自动 C 到 Rust 翻译系统上研究这三个变量的效果。
- 结果显示无反馈循环时 LLM 选择对翻译成功影响大，但系统使用反馈循环时模型间差异缩小；代码扰动提供的多样性甚至可产生改进的系统性能。

## 正文

强生成式 AI 的出现对代码修复、测试生成或语言翻译等各种软件工程任务产生相当影响。虽然 GitHub Copilot 等工具已在交互设置广泛使用，自动化方法在用于工业实践前需要更高水平的可靠性。在本文中，我们聚焦直接影响结果质量的三个方面：a）自动反馈循环的效果，b）大语言模型（LLM）的选择，c）行为保持代码变更的影响。我们在自动 C 到 Rust 翻译系统上研究这三个变量的效果。从 C 到 Rust 的代码翻译因 Rust 的安全保证而成为工业中有吸引力的用例。翻译系统基于生成-检查模式，其中 LLM 生成的 Rust 代码自动检查可编译性和与原 C 代码的行为等价性。检查结果为负时，LLM 在反馈循环中被重新提示以修复其输出。这些检查还使我们能够评估和比较翻译系统在变化三个变量时的相应成功率。我们的结果显示，无反馈循环时 LLM 选择对翻译成功影响大。然而，翻译系统使用反馈循环时模型间差异缩小。我们在系统平均性能及其代码扰动鲁棒性上观察到这一点。最后，我们还识别出代码扰动提供的多样性甚至可产生改进的系统性能。

## 关键词

#代码翻译 #反馈循环 #LLM #软件工程 #arXiv