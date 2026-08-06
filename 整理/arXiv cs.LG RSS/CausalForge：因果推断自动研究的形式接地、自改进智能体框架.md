---
title: "CausalForge：因果推断自动研究的形式接地、自改进智能体框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CausalForge- A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal .md"
source_note: "[[信息源/arXiv cs.LG RSS/CausalForge- A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal .]]"
source_sha256: c55b1ea0584640bcd9d34f19b16a186c265af2182333190002ac0935f9f3ed45
original_url: "https://arxiv.org/abs/2607.22511"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CausalForge：因果推断自动研究的形式接地、自改进智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jiyuan Tan、Vasilis Syrgkanis
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22511)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/CausalForge- A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal .|查看原始文件]]

## 摘要

- 提出 CausalForge，接地于 Lean 证明助手的因果推断自动理论研究框架：结合 Causalean（含 7,035 个机器检查声明、在人类设计与审查下用语言模型辅助开发的因果推断基础 Lean 库）与 CausalSmith（自改进智能体流水线：选择研究主题、提出结果、形式化陈述、构造证明并呈现成果供人类检查）。
- 自动化理论研究不仅受候选结果生成约束，还受其可靠评估约束；常见方法用大语言模型（LLM）评审者关闭研究循环，但此类评审者经验上不可靠：可能接受伪造论文、检测率接近偶然（Bad Scientist, 2025）。
- 因机器检查证明只确立形式陈述从其假设推出，不确立陈述忠实捕获预期科学主张，流水线用陈述审计增强内核验证：比较每个形式定理与它预期表达的日常主张。
- 用完成的自主研究运行产生的工件评估系统；源代码、形式库与运行记录：https://github.com/Jiyuan-Tan/CausalForge

## 正文

论文编号：arXiv:2607.22511v2（更新类型：replace-cross）。以下为摘要全文翻译。

自动化理论研究不仅受候选结果的生成约束，还受其可靠评估约束。一种常见方法是用大语言模型（LLM）评审者关闭研究循环。然而，此类评审者经验上仍不可靠：它们可能接受伪造的论文，检测率接近偶然（Bad Scientist，2025）。我们提出 CausalForge，一个接地于 Lean 证明助手的因果推断自动理论研究框架。CausalForge 结合 Causalean——一个因果推断的基础 Lean 库，包含 7,035 个机器检查的声明，在人类设计与审查下经语言模型辅助开发——与 CausalSmith，一个自改进的智能体流水线：选择研究主题、提出结果、形式化陈述、构造证明，并把所得成果呈现给人类检查。由于机器检查的证明只确立形式陈述从其假设推出，而不确立该陈述忠实捕获预期的科学主张，该流水线用一项陈述审计增强内核验证：把每个形式定理与它预期表达的日常主张比较。我们用完成的自主研究运行产生的工件评估该系统。源代码、形式库与运行记录可在 https://github.com/Jiyuan-Tan/CausalForge 获取。

## 关键词

#自动研究 #因果推断 #形式证明 #Lean
