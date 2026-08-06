---
published: 2026-08-05
title: "UrbanAgent：跨系统城市任务的工具增强智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/UrbanAgent- A Tool-Augmented Agent for Cross-System Urban Tasks.md"
source_note: "[[信息源/arXiv cs.AI RSS/UrbanAgent- A Tool-Augmented Agent for Cross-System Urban Tasks]]"
source_sha256: 96e0b32609fe24b6f65d51f1fccab30fb311a82822d63acef242210684275f01
original_url: "https://arxiv.org/abs/2608.03018"
processed: 2026-08-05
language: zh-CN
---

# UrbanAgent：跨系统城市任务的工具增强智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiayu Cao、Xingyuan Zeng、feiyu Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03018)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/UrbanAgent- A Tool-Augmented Agent for Cross-System Urban Tasks|查看原始文件]]

## 摘要

- 提出 Urban-Agent，跨系统城市任务的工具增强智能体框架：把 LLM 的认知与推理能力与支持代码执行、API 调用与 Model Context Protocol 的工具集耦合——通过一个自适应闭环，在行动前澄清缺失信息、把工具使用接地于实时观测、使最终响应与观测证据与任务约束对齐。
- 现代城市依赖日益增多的数字服务运行，但居民的日常需求仍难满足：服务碎片化、互操作性差，给用户带来沉重操作负担；现有数字平台、城市基础模型与智能助手各只解决城市任务的一个孤立方面，难以把复杂自然语言请求可靠转换为可执行跨系统工作流。
- 引入 Urban-Eval 基准专门评估跨系统城市请求：不同于先前只评估通用工具使用或城市知识与推理的基准，Urban-Eval 同时评估任务结果与执行质量（含所需工具覆盖、依赖有效性与证据可追溯性）。
- 实验显示 Urban-Agent 达 71% 任务成功率，比最强基线高 10 分；该领先在 GPT-5-mini、Gemini-2.5-flash、DeepSeek-V4-flash 与 Qwen3-235B-A22B 上保持。

## 正文

论文编号：arXiv:2608.03018v1（更新类型：new）。以下为摘要全文翻译。

现代城市依赖日益增多的数字服务运行，但居民的日常需求仍然难以满足。服务碎片化且互操作性差，给用户带来沉重的操作负担。现有数字平台、城市基础模型与智能助手各自只解决城市任务的一个孤立方面，但它们难以可靠地把复杂自然语言请求转换为可执行的跨系统工作流。我们提出 Urban-Agent，一个面向跨系统城市任务的工具增强智能体框架。它把大语言模型的认知与推理能力与支持代码执行、API 调用与 Model Context Protocol 的工具集耦合。通过一个自适应闭环，它在行动前澄清缺失信息、把工具使用接地于实时观测，并使最终响应与观测证据和任务约束对齐。为弥补评估空白，我们引入 Urban-Eval，一个专门为跨系统城市请求设计的基准。与先前只评估通用工具使用或城市知识与推理的基准不同，Urban-Eval 同时评估任务结果与执行质量，包括所需工具覆盖、依赖有效性与证据可追溯性。实验结果表明，Urban-Agent 达到 71% 的任务成功率，比最强基线高 10 分。这一领先在 GPT-5-mini、Gemini-2.5-flash、DeepSeek-V4-flash 与 Qwen3-235B-A22B 上均保持。

## 关键词

#城市智能体 #跨系统任务 #工具使用 #MCP
