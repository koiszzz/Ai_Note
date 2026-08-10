---
published: 2026-08-07
title: "ECHO：带时间记忆、安全护栏与言语评估的本地可部署智能体健康助手"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/ECHO- A Locally-Deployable Agentic Health Assistant with Temporal Memory, Safety Guardrails, and Spe.md"
source_note: "[[信息源/arXiv cs.CL RSS/ECHO- A Locally-Deployable Agentic Health Assistant with Temporal Memory, Safety Guardrails, and Spe]]"
source_sha256: 4334e363a9df1100f0951744c2005851b54ebe9cb6365994e394f0c07546953d
original_url: "https://arxiv.org/abs/2608.06110"
processed: 2026-08-07
language: zh-CN
---

# ECHO：带时间记忆、安全护栏与言语评估的本地可部署智能体健康助手

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Abdulkadir Külçe, Alihan Esen, Çağla Fikir, Berke Kurt, Kuzey Arar, Gökhan Ercan, Faik Boray Tek
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06110)

## 摘要

- 呈现 ECHO（增强关怀与健康观察者）：本地可部署的长期慢病管理对话健康助手；在共享监督下开发的三个互补软件模块集成统一系统。
- 核心模块为基于 ReAct 循环（LangGraph 编排）的智能体聊天机器人，配 17 个临床工具与持久跨会话记忆的时间知识图谱；GPT-5 Mini 下 59 场景基准工具执行通过率 94.9%。
- 两阶段混合安全层拦截所有传入查询：规则基层 1ms 内处理显式危机信号与越狱尝试；带 APPNP 风格传播的签名图神经网络（GNN）按临床意图分类边界案例，2537 查询标注土耳其健康数据集上准确率 88.8%、不安全召回 90.6%，超越包括 Llama 3.3 70B 在内的零样本 LLM 基线。
- 多模态言语评估模块结合 Whisper 声学编码与 BERT 文本编码及交叉注意力融合，估计情绪、抑郁与疼痛，平均宏观 F1 0.652；全系统实现为可在消费级硬件完整运行的 web 应用，无患者数据传输至外部服务，支持 GDPR 与 KVKK 合规。

## 正文

本文呈现 ECHO（Enhanced Care & Health Observer，增强关怀与健康观察者），一个本地可部署的对话健康助手，用于长期慢病管理。ECHO 将在共享监督下开发的三个互补软件模块集成统一系统。核心模块是一个基于 ReAct 循环（通过 LangGraph 编排）的智能体聊天机器人，配备 17 个临床工具与一个用于持久跨会话记忆的时间知识图谱；它在 GPT-5 Mini 下于 59 场景基准上实现 94.9% 的工具执行通过率。一个两阶段混合安全层拦截所有传入查询：一个规则基层在 1ms 内处理显式危机信号与越狱尝试；一个带 APPNP 风格传播的签名图神经网络（GNN）按临床意图分类边界案例，在 2,537 查询的标注土耳其健康数据集上实现 88.8% 准确率与 90.6% 的不安全召回，同时超越包括 Llama 3.3 70B 在内的零样本 LLM 基线。一个多模态言语评估模块结合 Whisper 声学编码与 BERT 文本编码及交叉注意力融合，估计情绪、抑郁与疼痛，达到平均宏观 F1 0.652。整个系统实现为一个可在消费级硬件上完整运行的 web 应用，没有患者数据传输到外部服务，支持 GDPR 与 KVKK 合规。

## 关键词

健康助手、智能体、安全护栏、言语评估、本地部署
