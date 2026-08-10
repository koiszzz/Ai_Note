---
published: 2026-08-07
title: "ECHO：带时序记忆、安全护栏与语音评估的可本地部署智能体健康助手"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ECHO- A Locally-Deployable Agentic Health Assistant with Temporal Memory, Safety Guardrails, and Spe.md"
source_note: "[[信息源/arXiv cs.AI RSS/ECHO- A Locally-Deployable Agentic Health Assistant with Temporal Memory, Safety Guardrails, and Spe]]"
source_sha256: 10e36b498ed240fa6695a6a6e7b9acba0c117208fb9a5a98fae91a7d09696e9e
original_url: "https://arxiv.org/abs/2608.06110"
processed: 2026-08-07
language: zh-CN
---

# ECHO：带时序记忆、安全护栏与语音评估的可本地部署智能体健康助手

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Abdulkadir K\"ul\c{c}e, Alihan Esen, Ca\u{g}la Fikir, Berke Kurt, Kuzey Arar, G\"okhan Ercan, Faik Boray Tek
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06110)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ECHO- A Locally-Deployable Agentic Health Assistant with Temporal Memory, Safety Guardrails, and Spe|查看原始文件]]

## 摘要

- 论文呈现 ECHO（增强护理与健康观察者）：面向长期慢性护理管理的可本地部署对话健康助手，集成三个在统一监督下开发的互补软件模块。
- 核心模块是基于 ReAct 循环（经 LangGraph 编排）构建的智能体聊天机器人，配备 17 个临床工具与时序知识图谱用于持久跨会话记忆；在 59 场景基准上以 GPT-5 Mini 达到 94.9% 工具执行通过率。
- 两阶段混合安全层拦截所有入站查询：规则层在 1ms 内处理显式危机信号与越狱尝试；带 APPNP 式传播的符号图神经网络（GNN）按临床意图分类边界案例，在 2,537 查询标注土耳其健康数据集上达到 88.8% 准确率与 90.6% 不安全召回，优于包括 Llama 3.3 70B 在内的零样本 LLM 基线。
- 多模态语音评估模块结合 Whisper 声学编码与 BERT 文本编码及交叉注意力融合，估计情绪、抑郁与疼痛，平均宏 F1 达 0.652；完整系统实现为 Web 应用，可完全在消费硬件上运行，无患者数据传输至外部服务，支持 GDPR 与 KVKK 合规。

## 正文

本文呈现 ECHO（Enhanced Care & Health Observer，增强护理与健康观察者），一个面向长期慢性护理管理的可本地部署对话健康助手。ECHO 集成三个在统一监督下开发的互补软件模块，作为统一系统。核心模块是基于 ReAct 循环（经 LangGraph 编排）构建的智能体聊天机器人，配备 17 个临床工具与时序知识图谱，用于持久跨会话记忆；它在 59 场景基准上以 GPT-5 Mini 达到 94.9% 的工具执行通过率。两阶段混合安全层拦截所有入站查询：规则层在 1ms 内处理显式危机信号与越狱尝试，而带 APPNP 式传播的符号图神经网络（GNN）按临床意图分类边界案例，在 2,537 查询的标注土耳其健康数据集上达到 88.8% 准确率与 90.6% 不安全召回，优于包括 Llama 3.3 70B 在内的零样本 LLM 基线。多模态语音评估模块结合 Whisper 声学编码与 BERT 文本编码及交叉注意力融合，估计情绪、抑郁与疼痛，达到 0.652 的平均宏 F1。完整系统实现为 Web 应用，可完全在消费硬件上运行，不将患者数据传输至外部服务，支持 GDPR 与 KVKK 合规。

## 关键词

#健康助手 #智能体 #本地部署 #安全护栏
