---
title: "CUADebug：诊断与修复计算机使用智能体故障"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CUADebug- Diagnosing and Repairing Computer-Use Agent Failures.md"
source_note: "[[信息源/arXiv cs.AI RSS/CUADebug- Diagnosing and Repairing Computer-Use Agent Failures]]"
source_sha256: f968a7c945936a90971d7b23e8f3cd09f05a5d04b6c9ad692713dfb90da989ba
original_url: "https://arxiv.org/abs/2608.02643"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CUADebug：诊断与修复计算机使用智能体故障

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Weijia Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02643)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CUADebug- Diagnosing and Repairing Computer-Use Agent Failures|查看原始文件]]

## 摘要

- 提出 CUADebug，一个诊断与修复计算机使用智能体（CUA）故障的框架，包含 CUA 特定错误分类法、人工标注的 OSWorld 故障基准 CUAErrorBench 与工具增强调试器 CUADebugger。
- CUADebugger 主动用成对的前后截图与动作轨迹检查可疑步骤，然后提交包含根因步骤、错误类型、接地证据与纠正策略的结构化诊断并重新执行。
- 204 条失败轨迹的人工标注显示任务推理与控制是最大故障族（110/204），随后是感知（36）、接地/交互（25）、外部/系统（13）与 20 个 OSWorld 不可行任务案例。
- 在 Claude 智能体主划分上，CUADebugger 将联合子类型与步骤诊断从 11.2% 提升到 19.6%；RCA 条件在单次重执行中任务完成率 29.90%（对比历史延续 13.89%），持续重执行成功率从 12.2% 提升到 25.86%。

## 正文

论文编号：arXiv:2608.02643v1（更新类型：cross）。以下为摘要全文翻译。

计算机使用智能体（CUA）通过截图、鼠标键盘动作与有状态的 UI 反馈操作真实桌面与网页界面，但它们的故障仍然难以诊断与修复。与纯文本智能体不同，CUA 故障源于耦合的视觉感知、空间接地、低层交互、任务推理与环境动态，使调试成为一个独特的多模态因果定位问题。我们引入 CUADebug，一个诊断与修复 CUA 故障的框架。CUADebug 包含 CUA 特定错误分类法、人工标注的 OSWorld 故障基准 CUAErrorBench，以及工具增强调试器 CUADebugger。CUADebugger 不是一次性对整个轨迹提示，而是主动用成对的前后截图与动作轨迹检查可疑步骤，然后提交包含根因步骤、错误类型、接地证据与纠正策略的结构化诊断以供重新执行。对 204 条失败轨迹的人工标注显示，任务推理与控制是最大的故障族（110/204），随后是感知（36）、接地/交互（25）、外部/系统（13），以及 20 个 OSWorld 不可行任务案例。在主要 Claude 智能体划分上，CUADebugger 用 Gemini 2.5 Pro 将联合子类型与步骤诊断从 11.2% 提升到 19.6%，并在不同调试器骨干上一致提升。在单次重执行包评估中，基于 RCA 的条件取得比历史延续更高的任务完成率（机器 RCA 28.47%、我们的方法 29.90%，对比 13.89%）；在持续重执行中，我们的方法将成功率从 12.2% 提升到 25.86%，而人工先知引导达到 29.21%。这些结果表明，CUA 根因诊断能提供可操作的修复信号，而非仅仅是事后解释。

## 关键词

#计算机使用智能体 #调试 #故障诊断 #多模态
