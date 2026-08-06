---
title: "评估企业自动化的 LLM 权衡：生产级企业平台工作流生成的经验教训"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Evaluating LLM Trade-offs for Enterprise Automation- Lessons from Workflow Generation in a Productio.md"
source_note: "[[信息源/arXiv cs.AI RSS/Evaluating LLM Trade-offs for Enterprise Automation- Lessons from Workflow Generation in a Productio]]"
source_sha256: 9cd78970efce312ebf98f3445c40428f0d605f2868adfe8d466aa535bd21092c
original_url: "https://arxiv.org/abs/2608.03311"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 评估企业自动化的 LLM 权衡：生产级企业平台工作流生成的经验教训

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xavier Wrenn、Radoslav Raykov、Aleksandar Angelov 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03311)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Evaluating LLM Trade-offs for Enterprise Automation- Lessons from Workflow Generation in a Productio|查看原始文件]]

## 摘要

- 在生产企业平台上评估六个 LLM 的 AI 驱动工作流生成：29 个真实 IT 自动化场景、两种生成流水线架构、每个提示-模型-流水线配置 8 次独立运行（共 2,784 次）。
- 初始整体式流水线结构成功率 31.5–82.8%；重新设计的逐块流水线把工作流构建分解为变量脚手架、基础块装配与嵌套块生成，把全部模型的结构成功率提升到 74.1–97.8%。
- 分析生产成本权衡（每个工作流 0.008–0.20 美元、交互使用延迟 50 秒以下）与模型选择：逐块分解使较小模型达到生产可行性，消除对昂贵前沿模型的依赖。
- 部署经验教训：需要区分结构有效性与语义正确性，并为云工程提供模型无关、可扩展的自动化方案。

## 正文

论文编号：arXiv:2608.03311v1（更新类型：cross）。以下为摘要全文翻译。

企业合规管理要求快速适应不断演进的监管框架（例如 DORA、AI RMF、FedRAMP）与严格的修复 SLA。传统静态编排器在混合云环境中常常失败，因为事件驱动的评估要求自动化代码在数秒内适应运行时上下文。本文介绍了在生产级企业平台上评估六个大语言模型用于 AI 驱动工作流生成的经验教训：在 29 个真实 IT 自动化场景、两种生成流水线架构与每个提示-模型-流水线配置 8 次独立运行（共 2,784 次运行）上基准测试。我们的初始流水线使用整体式工作流生成，结构成功率（JSON schema 有效性与正确 UI 渲染）为 31.5–82.8%，多数模型在复杂 JSON 生成上表现困难。我们开发了重新设计的逐块流水线，把工作流构建分解为变量脚手架、基础块装配与嵌套块生成，把全部模型的结构成功率提升到 74.1–97.8%。我们分析了生产成本权衡，包括每个工作流的成本（0.008–0.20 美元）、延迟（交互使用低于 50 秒）与模型选择。逐块分解使较小的模型（例如 mistral-small，结构成功率 95.7%、每个工作流 0.01 美元）达到生产可行性，消除对昂贵前沿模型的依赖。虽然 mistral-medium-2505 与 gpt-oss-120b 取得最高结构成功率（96.1% 与 97.8%），但 mistral-medium-2505 的成本溢价是 mistral-small 的 19 倍。我们的部署经验教训凸显了区分结构有效性与语义正确性（用户意图的逻辑满足）的必要性，并为云工程中的模型无关、可扩展自动化提供了解决方案。

## 关键词

#企业自动化 #LLM #工作流生成 #成本权衡
