---
published: 2026-08-05
title: "AgenticSCR：用于早期脆弱漏洞检测的自主智能体安全代码评审"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection.md"
source_note: "[[信息源/arXiv cs.LG RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection]]"
source_sha256: e568032296895b1a0903b909f1306fd2ee3c3587622b44ce03c1b490421ae311
original_url: "https://arxiv.org/abs/2601.19138"
processed: 2026-08-05
language: zh-CN
---

# AgenticSCR：用于早期脆弱漏洞检测的自主智能体安全代码评审

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Wachiraphan Charoenwet、Kla Tantithamthavorn、Patanamon Thongtanunam 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.19138)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/AgenticSCR- An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection|查看原始文件]]

## 摘要

- 提出 AgenticSCR，带安全聚焦语义记忆的智能体安全代码评审器：把推理接地于结构化安全知识，在漏洞完全显现前检测——相对静态 LLM 基线、多智能体评审者与 SAST 工具，在生成带正确定位、漏洞类型与相关性的评论上实现至少 153% 相对改善。
- 安全代码评审在预集成阶段至关重要：Atlassian 开发者依赖轻量分析工具，深度安全评估被延后到后期阶段，延迟反馈并增加修复成本；现有静态分析器常带噪且难处理上下文依赖或部分显现的漏洞，静态 LLM 评审者受上下文窗口限制且缺乏工具交互；结合 LLM 与代码导航的智能体 AI 显示出前景，但其早期阶段安全代码评审的有效性仍未充分探索。
- 影子部署中 54% 评论经安全工程师验证可用于开发者报告，展示实用效用，同时强调任务难度。
- 定位安全聚焦语义记忆为智能体安全代码评审的有前景方向，实现早期漏洞识别——为向左转移安全实践中的可靠定位、检测与解释建立重要一步。

## 正文

论文编号：arXiv:2601.19138v2（更新类型：replace-cross）。以下为摘要全文翻译。

安全代码评审在预集成阶段至关重要：Atlassian 开发者依赖轻量分析工具，而深度安全评估被延后到后期阶段，延迟反馈并增加修复成本。现有静态分析器往往带噪，且难以处理上下文依赖或部分显现的漏洞；静态大语言模型（LLM）评审者受上下文窗口限制，缺乏工具交互。结合 LLM 与代码导航的智能体 AI 显示出前景；然而，其对早期阶段安全代码评审的有效性仍未充分探索。我们提出 AgenticSCR，一个带安全聚焦语义记忆的智能体安全代码评审器：把推理接地于结构化安全知识，以在漏洞完全显现之前检测它们。AgenticSCR 在生成带正确定位、漏洞类型与相关性的评论上，相对静态 LLM 基线、多智能体评审者与 SAST 工具实现至少 153% 的相对改善。在一次影子部署中，其 54% 的评论被安全工程师验证可用于开发者报告，展示实用效用，同时强调任务难度。这些发现把安全聚焦语义记忆定位为智能体安全代码评审的有前景方向，实现早期阶段的漏洞识别。我们的方法为向左转移（shift-left）安全实践中的可靠定位、检测与解释建立了重要一步。

## 关键词

#安全代码评审 #智能体 #语义记忆 #漏洞检测
