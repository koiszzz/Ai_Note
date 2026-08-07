---
published: 2026-08-06
title: 面向长时程Web智能体的信号驱动观察
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Signal-Driven Observation for Long-Horizon Web Agents.md
source_note: "[[信息源/arXiv cs.CL RSS/Signal-Driven Observation for Long-Horizon Web Agents]]"
source_sha256: 43d4d89f57e70fb34fad51562a74d621c29be5a8472937f053dc60833fc96fd4
original_url: https://arxiv.org/abs/2606.06708
processed: 2026-08-07
language: zh-CN
---

# 面向长时程Web智能体的信号驱动观察

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.06708)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Signal-Driven Observation for Long-Horizon Web Agents|查看原始文件]]

## 摘要

- 长时程 Web 智能体在每个动作步骤都摄取原始 DOM 与可访问性树——通常数以万计的 token——导致上下文逐步退化，在任务完成前就侵蚀推理能力。
- 本文主张"观察频率与动作频率耦合"是架构性错误；借鉴 Recursive Language Models 的洞见（查询文档优于通读全文），提出信号驱动观察（Signal-Driven Observation, SDO）。
- SDO 中一个专门的子调用读取完整 DOM，但只返回任务相关的元素及其选择器；仅当轻量信号检测器触发时才重新调用——由 URL 跳转、新出现的可交互元素、动作失败或外部浏览器事件触发。
- 概述了 SDO 引入的开放问题，并呼吁社区把观察压缩视为 Web 智能体设计中的核心架构决策。

## 正文

本文编号：arXiv:2606.06708v2（公告类型：replace），以下为摘要全文翻译。

在长时程上运行的 Web 智能体在每个动作步骤都摄取原始 DOM 和可访问性树——通常有数以万计的 token——造成上下文逐步退化，在任务完成之前就侵蚀推理能力。我们认为，把观察频率与动作频率耦合起来是一种架构性错误。借鉴 Recursive Language Models 的洞见——查询文档优于通读全文——我们提出信号驱动观察（Signal-Driven Observation, SDO）：一个专门的子调用读取完整 DOM，但只返回任务相关的元素及其选择器，并且仅在轻量信号检测器触发时才重新调用——触发条件包括 URL 转换、新出现的可交互元素、动作失败或外部浏览器事件。我们概述了 SDO 引入的开放问题，并呼吁社区把观察压缩视为 Web 智能体设计中的核心架构决策。

## 关键词

#Web智能体 #观察压缩 #长时程任务 #上下文管理 #智能体架构
