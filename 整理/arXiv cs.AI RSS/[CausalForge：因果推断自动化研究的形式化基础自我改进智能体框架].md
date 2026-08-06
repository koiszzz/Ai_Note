---
title: "CausalForge：因果推断自动化研究的形式化基础自我改进智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CausalForge- A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal .md"
source_note: "[[信息源/arXiv cs.AI RSS/CausalForge- A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal ]]"
source_sha256: 3a6f2a69f5569154cd63ad962c322306e7a038352050c69dc7cdbd0e60da5628
original_url: "https://arxiv.org/abs/2607.22511"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CausalForge：因果推断自动化研究的形式化基础自我改进智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22511)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CausalForge- A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal |查看原始文件]]

## 摘要

- 自动化理论研究不仅受候选结果生成限制，也受可靠评估限制。常见做法是用大语言模型审阅者闭合研究循环，但此类审阅者在经验上仍不可靠，可能接受伪造论文，检测率接近随机水平。
- 论文提出 CausalForge，一个以 Lean 证明助手为基础的因果推断自动化理论研究框架。
- CausalForge 结合 Causalean 与 CausalSmith：前者是包含 7035 条机器检查声明的因果推断基础 Lean 库，这些声明在人工设计和审阅下借助语言模型协助开发；后者是自我改进的智能体流水线，负责选择研究主题、提出结果、形式化陈述、构造证明，并呈现结果供人工检查。
- 机器检查证明只能保证形式化命题从其假设中推出，不能保证命题准确表达预期科学主张。因此，流水线在内核验证之外增加陈述审计，将每个形式化定理与其要表达的非形式化主张进行比较。
- 作者使用已完成的自主研究运行所产生的工件评估系统；源代码、形式化库和运行记录均已公开。

## 正文

自动化理论研究受到两方面限制：不仅要生成候选结果，还要可靠地评估这些结果。一个常见做法是使用大语言模型审阅者闭合研究循环。然而，现有审阅者在经验上仍然不可靠，可能接受伪造论文，其检测率接近随机水平。

本文提出 CausalForge，一个以 Lean 证明助手为形式化基础的因果推断自动化理论研究框架。CausalForge 由 Causalean 和 CausalSmith 组成。Causalean 是因果推断基础 Lean 库，包含 7035 条经过机器检查的声明；这些声明在人工设计和审阅的基础上借助语言模型协助开发。CausalSmith 则是一个自我改进的智能体流水线，负责选择研究主题、提出结果、形式化命题、构造证明，并把最终工件呈现给人类检查。

不过，机器检查证明只能建立这样一个事实：形式化命题确实从其假设中推出。它不能保证形式化命题忠实地表达了预期的科学主张。因此，CausalForge 在内核验证之外增加了陈述审计，将每个形式化定理与它试图表达的非形式化主张进行比较。

作者使用已完成的自主研究运行所生成的工件评估该系统。源代码、形式化库和运行记录已公开于 https://github.com/Jiyuan-Tan/CausalForge。

## 关键词

#因果推断 #Lean #形式化验证 #自动化研究 #智能体工作流 #定理证明
