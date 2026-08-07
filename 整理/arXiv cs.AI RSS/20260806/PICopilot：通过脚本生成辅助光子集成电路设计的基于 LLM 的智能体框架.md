---
published: 20260806
title: "PICopilot：通过脚本生成辅助光子集成电路设计的基于 LLM 的智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PICopilot- An LLM-based Agentic Framework for Assisting Photonic Integrated Circuit Design via Scrip.md"
source_note: "[[信息源/arXiv cs.AI RSS/PICopilot- An LLM-based Agentic Framework for Assisting Photonic Integrated Circuit Design via Scrip]]"
source_sha256: 752b030baf1dcdc95eef981bfaee19273b74aa01ca71a4e84d225ae722ca9f8f
original_url: "https://arxiv.org/abs/2608.01791"
processed: 2026-08-06
language: zh-CN

---

# PICopilot：通过脚本生成辅助光子集成电路设计的基于 LLM 的智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaohan Jiang, Zeyu Li, Wei Zhang, Jiang Xu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01791)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PICopilot- An LLM-based Agentic Framework for Assisting Photonic Integrated Circuit Design via Scrip|查看原始文件]]

## 摘要

- 光子集成电路（PIC）快速发展正将设计流程从传统图形用户界面（GUI）方法转向脚本方法，以获得更高灵活性、可移植性和可维护性；但脚本设计引入新挑战，要求设计师具备额外工具 API 和编程熟练度，且因不如 GUI 直观和更复杂而需更多努力和时间。
- 本文引入 PICopilot，首个基于大语言模型（LLM）的智能体框架，通过从自然语言指令自动生成设计脚本辅助 PIC 设计：利用带反馈机制的多智能体架构和专门设计的检索增强生成（RAG）流水线，实现高成功率和可靠性。
- 多样 PIC 脚本任务基准实验显示，PICopilot 成功完成全部 48 个任务，优于其他基于 LLM 的方法且不产生实质额外延迟或成本，甚至比带通用 RAG 流水线的高级 GPT-5 模型多解决 21 个任务。

## 正文

光子集成电路（PIC）快速发展正将设计流程从传统图形用户界面（GUI）方法转向脚本方法，以获得更高灵活性、可移植性和可维护性。然而，脚本设计引入新挑战，要求设计师具备额外工具应用程序接口（API）和编程熟练度。它还要求更多努力和时间，因为本质不如 GUI 方法直观且更复杂。随着 PIC 规模和复杂性增长，设计需求与手动脚本能力之间的生产力差距持续扩大。为应对此差距，我们引入 PICopilot，首个基于大语言模型（LLM）的智能体框架，通过从自然语言指令自动生成设计脚本辅助 PIC 设计。PICopilot 利用带反馈机制的多智能体架构和专门设计的检索增强生成（RAG）流水线，实现高成功率和可靠性。多样 PIC 脚本任务基准的实验结果表明，PICopilot 成功完成全部 48 个任务，优于其他基于 LLM 的方法，不产生实质额外延迟或成本，甚至比带通用 RAG 流水线的高级 GPT-5 模型多解决 21 个任务。

## 关键词

#光子集成电路 #脚本生成 #LLM智能体 #设计自动化 #arXiv