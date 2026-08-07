---
published: 20260805
title: "AgenticSCR：用于早期漏洞检测的自主智能体安全代码审查"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection.md"
source_note: "[[信息源/arXiv cs.AI RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection]]"
source_sha256: 40e9c5fef506ae98e6f7ec6d9e4e4e445da1fb27600194e8224ce27c6060a55e
original_url: "https://arxiv.org/abs/2601.19138"
processed: 2026-08-06
language: zh-CN

---

# AgenticSCR：用于早期漏洞检测的自主智能体安全代码审查

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Wachiraphan Charoenwet, Kla Tantithamthavorn, Patanamon Thongtanunam, Hong Yi Lin, Minwoo Jeong, Ming Wu
> - 发布时间：20260805
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.19138)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection|查看原始文件]]

## 摘要

- 安全代码审查在集成前阶段至关重要，Atlassian 开发者依赖轻量分析工具，深度安全评估推迟到后期，延迟反馈并增加修复成本；现有静态分析器常含噪声，难以处理上下文相关或部分显现的漏洞，静态 LLM 审查者受上下文窗口限制且缺乏工具交互。
- 本文提出 AgenticSCR，一个以安全聚焦语义记忆增强的智能体安全代码审查器，将推理锚定在结构化安全知识中以在漏洞完全显现前检测。
- AgenticSCR 在生成具有正确定位、漏洞类型和相关性的评论上，比静态 LLM 基线、多智能体审查器和 SAST 工具实现至少 153% 的相对改进；影子部署中 54% 的评论被安全工程师验证用于开发者报告。

## 正文

安全代码审查在集成前阶段至关重要，Atlassian 开发者依赖轻量分析工具，而深度安全评估推迟到后期阶段，延迟反馈并增加修复成本。现有静态分析器往往含噪声，且难以处理上下文相关或部分显现的漏洞，而静态大语言模型（LLM）审查者受上下文窗口限制且缺乏工具交互。结合 LLM 与代码导航的智能体 AI 显示出前景；然而，其对早期安全代码审查的有效性仍未充分探索。我们提出 AgenticSCR，一个以安全聚焦语义记忆增强的智能体安全代码审查器，将推理锚定在结构化安全知识中，在漏洞完全显现前检测它们。AgenticSCR 在生成具有正确定位、漏洞类型和相关性的评论上，比静态 LLM 基线、多智能体审查器和 SAST 工具实现至少 153% 的相对改进。在影子部署中，其 54% 的评论被安全工程师验证用于开发者报告，展示实际效用，同时强调任务的难度。这些发现将安全聚焦语义记忆定位为智能体安全代码审查的有前景方向，实现早期漏洞识别。我们的方法为左移（shift-left）安全实践中可靠的定位、检测和解释迈出重要一步。

## 关键词

#安全代码审查 #智能体 #漏洞检测 #语义记忆 #arXiv