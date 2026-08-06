---
title: "AgenticSCR：面向早期漏洞检测的自主智能体安全代码审查"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection.md"
source_note: "[[信息源/arXiv cs.AI RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection]]"
source_sha256: 40e9c5fef506ae98e6f7ec6d9e4e4e445da1fb27600194e8224ce27c6060a55e
original_url: "https://arxiv.org/abs/2601.19138"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# AgenticSCR：面向早期漏洞检测的自主智能体安全代码审查

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.19138)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection|查看原始文件]]

## 摘要

- 安全代码审查在代码集成前至关重要，但开发者通常依赖轻量分析工具，深度安全评估被推迟到后续阶段，导致反馈延迟和修复成本增加。
- 现有静态分析器噪声较大，难以处理依赖上下文或仅部分显现的漏洞；静态大语言模型审查器又受上下文窗口和缺少工具交互的限制。
- 论文提出 AgenticSCR，一种配备安全语义记忆的智能体式安全代码审查器，通过结构化安全知识支撑推理，在漏洞完全显现前进行检测。
- 相较静态 LLM 基线、多智能体审查器和 SAST 工具，AgenticSCR 生成同时具备正确定位、漏洞类型和相关性的评论时，相对提升至少 153%；影子部署中 54% 的评论得到安全工程师确认可供开发者报告。

## 正文

安全代码审查在代码集成前至关重要。Atlassian 开发者通常依赖轻量分析工具，而深度安全评估被推迟到后续阶段，这会延迟反馈并增加修复成本。现有静态分析器往往噪声较大，难以处理依赖上下文或尚未完全显现的漏洞；静态大语言模型（LLM）审查器则受上下文窗口限制，并且缺少工具交互能力。

将大语言模型与代码导航结合的智能体式 AI 展现出潜力，但其在早期安全代码审查中的有效性仍缺乏充分研究。本文提出 AgenticSCR，一种配备安全语义记忆的智能体式安全代码审查器。它通过结构化安全知识支撑推理，以便在漏洞完全显现之前检测漏洞。

与静态 LLM 基线、多智能体审查器和 SAST 工具相比，AgenticSCR 在生成同时具备正确定位、漏洞类型和相关性的评论方面取得至少 153% 的相对提升。在一次影子部署中，其 54% 的评论被安全工程师确认可以用于向开发者报告，这显示出实际效用，同时也说明该任务仍然十分困难。

这些结果表明，面向安全的语义记忆是智能体式安全代码审查的一个有前景方向，能够支持早期漏洞识别，并推动左移安全实践中更可靠的定位、检测和解释。

## 关键词

#安全代码审查 #漏洞检测 #智能体 #语义记忆
