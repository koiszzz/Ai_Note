---
published: 2026-08-07
title: "没有 CVE 的漏洞：管理 AI 编码智能体中任务与权限之间的持续差距"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/The Vulnerability With No CVE- Managing Persistent Gaps Between Mandate and Authority in AI Coding A.md"
source_note: "[[信息源/arXiv cs.CL RSS/The Vulnerability With No CVE- Managing Persistent Gaps Between Mandate and Authority in AI Coding A]]"
source_sha256: 4f54215b676dc68c970e07ac61b07643f66b411a123e96b4ddd0b843a566daa5
original_url: "https://arxiv.org/abs/2608.05884"
processed: 2026-08-07
language: zh-CN
---

# 没有 CVE 的漏洞：管理 AI 编码智能体中任务与权限之间的持续差距

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Shayell Aharon Salomon Amir Shaked Matan Noga
> - **发布时间**：2026-08-07
> - **分类**：cs.CR
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05884)

## 摘要

- 现有指引将过度自主性、过度权限、弱任务绑定授权与不充分智能体控制识别为重要风险；控制框架也描述约束、授权、观察、验证与响应智能体活动的能力，但安全项目仍需要管理跨越组件、超越单一事件的持续部署实例的方式。
- 提出智能体姿态漏洞（APV）：任务条件的漏洞管理抽象，即组合智能体控制暴露的持久记录；一种姿态可跨任务产生不同运行时表现，APV 将这些表现链接到不变姿态并保持开放，直至权限收窄、缺失控制加入、风险被接受或关闭得到验证；APV 并非新的根因风险类别，而是操作化现有的过度自主性、授权与控制组合弱点。
- 区分 APV 与 CVE 可寻址产品缺陷、OWASP 过度自主性、智能体基线控制结果与运行时授权-执行差距。
- 提供现场场景、带阈值定义、六个反复出现的 APV 模式、漏洞生命周期、最小记录、控制与关闭矩阵、工具影响与可测试研究议程。

## 正文

现有指引将过度自主性（excessive agency）、过度权限（excessive permission）、弱任务绑定授权（weak task-bound authorization）与不充分的智能体控制识别为重要风险。控制框架也描述了约束、授权、观察、验证与响应智能体活动的能力。然而，安全项目仍然需要一种方式来管理持续的部署实例——这些实例跨越组件并比任何单一事件更长久。研究提出智能体姿态漏洞（agentic posture vulnerability, APV），作为任务条件的漏洞管理抽象：一个组合智能体控制暴露的持久记录。一种姿态可能在跨任务中产生不同的运行时表现；APV 将这些表现链接到不变姿态，并保持开放，直至权限被收窄、缺失的控制被加入、风险被接受或关闭得到验证。APV 并非作为新的根因风险类别提出；它操作化了现有的过度自主性、授权与控制组合弱点。研究区分 APV 与 CVE 可寻址的产品缺陷、OWASP 过度自主性、智能体基线（Agent Baseline）控制结果以及运行时授权-执行差距。随后提供：一个现场场景、一个带阈值的定义、六个反复出现的 APV 模式、一个漏洞生命周期、一个最小记录、一个控制与关闭矩阵、工具影响，以及一个可测试的研究议程。

## 关键词

智能体安全、漏洞管理、过度自主性、授权、控制
