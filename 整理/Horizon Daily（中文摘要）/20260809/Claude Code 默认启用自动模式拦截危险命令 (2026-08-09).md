---
title: "Claude Code 默认启用自动模式拦截危险命令"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-09 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-09 (ZH)]]"
source_fragment: "Claude Code 默认启用自动模式拦截危险命令"
source_sha256: 1f9fae47d0f1419b9e913e9b6f5e1db7f2c6e749b3bab3db85b7ff133a1f81a4
original_url: "https://claude.com/blog/auto-mode-default-in-claude-code"
published: 2026-08-09
processed: 2026-08-09
language: zh-CN
---

# Claude Code 默认启用自动模式拦截危险命令

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-09
> - 原文链接：[打开原文](https://claude.com/blog/auto-mode-default-in-claude-code)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-09 (ZH)|查看原始日报]]

## 摘要

- Anthropic 宣布 Claude Code 将从 8 月 14 日起，面向 Pro、Max 和 Team 计划的新会话默认启用自动模式，通过分类器检查每次工具调用，尝试拦截不可逆、破坏性或越出用户环境的操作，并且该功能的额外开销自即日起不再向这些用户收费。Enterprise、Claude API 及多种云平台用户暂时仍须主动启用，官方计划在未来一个月内逐步改为默认。Anthropic 表示，在涉及 1,053 名付费测试者的研究中，自动模式拦截了 89% 的危险命令，……

## 正文

Anthropic 宣布 Claude Code 将从 8 月 14 日起，面向 Pro、Max 和 Team 计划的新会话默认启用自动模式，通过分类器检查每次工具调用，尝试拦截不可逆、破坏性或越出用户环境的操作，并且该功能的额外开销自即日起不再向这些用户收费。Enterprise、Claude API 及多种云平台用户暂时仍须主动启用，官方计划在未来一个月内逐步改为默认。Anthropic 表示，在涉及 1,053 名付费测试者的研究中，自动模式拦截了 89% 的危险命令，而测试者仅识别出 13.6%。

telegram · zaihuapd · 8月8日 03:02

「背景」 Claude Code 是 Anthropic 推出的命令行 AI 编程助手，此前默认采用保守的权限模式，每次文件写入或 shell 命令都需要用户手动批准。Anthropic 的研究表明，人类难以可靠识别危险命令，因此 Claude Code 将自动模式设为默认，利用 AI 分类器检查每次工具调用，自动放行约 95% 的安全操作，同时拦截不可逆、破坏性或越出用户环境的命令。

「影响」 对 Pro、Max 和 Team 付费用户而言，从 8 月 14 日起新会话将自动获得危险命令拦截，显著降低误操作风险；企业、API 和云平台用户则需要等待后续默认启用或手动开启。

参考链接

- [Anthropic makes auto mode the default in Claude Code starting...](https://cryptobriefing.com/anthropic-claude-code-auto-mode-default/)

- [PSA: Claude Code enabling auto mode as default next... - 9to5Mac](https://9to5mac.com/2026/08/07/psa-claude-code-enabling-auto-mode-as-default-next-week-anthropic-says/)

- [Claude Code Auto Mode Guide: Automate Dev Workflows (2026)](https://www.codegateway.dev/en/blog/claude-code-auto-mode-guide)

标签: #Claude Code, #AI safety, #Anthropic, #developer tools, #automation

## 关键词

#Claude-Code #AI-safety #Anthropic #developer-tools #automation #科技新闻
