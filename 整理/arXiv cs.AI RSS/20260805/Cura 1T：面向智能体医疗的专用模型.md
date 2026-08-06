---
published: 2026-08-05
title: "Cura 1T：面向智能体医疗的专用模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Cura 1T- Specialized Model for Agentic Healthcare.md"
source_note: "[[信息源/arXiv cs.AI RSS/Cura 1T- Specialized Model for Agentic Healthcare]]"
source_sha256: 8d3cc60b81ef71ed10eff40ac5ff786d9f9e70524c61f35b2634428c98ef390b
original_url: "https://arxiv.org/abs/2607.15314"
processed: 2026-08-05
language: zh-CN
---

# Cura 1T：面向智能体医疗的专用模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：actAVA AI 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.15314)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Cura 1T- Specialized Model for Agentic Healthcare|查看原始文件]]

## 摘要

- 提出 Cura 1T，基于开源权重 Kimi-K2.6 构建的医疗专用 LLM，通过人工门控的递归自我改进（RSI）循环训练。
- 每轮 RSI 框架规划目标能力、训练模型、评估基准轨迹，并根据观察到的失败用有针对性的合成与精选示例精炼数据混合，而非单一泛化的医学数据更新。
- 医疗评估套件中，Cura 1T 在前沿基线中排名第一或接近第一，同时在域外推理与智能体基准上保持竞争力。

## 正文

论文编号：arXiv:2607.15314v2（更新类型：replace）。以下为摘要全文翻译。

医疗 AI 智能体处理患者咨询、文本与图像上的临床推理、交互式诊断以及电子健康记录（EHR）工具使用，但能同时覆盖这些用例的专用智能体模型仍然有限。这些能力以不同方式失效，对某一任务的狭窄更新可能损害另一任务。我们提出 Cura 1T，一个基于开源权重 Kimi-K2.6 构建、通过人工门控的递归自我改进（RSI）循环训练的医疗专用 LLM。具体而言，在每一轮中，RSI 框架规划目标能力、训练模型、评估基准轨迹，并根据观察到的失败，用有针对性的合成与精选示例精炼数据混合，而非单一泛化的医疗数据更新。在医疗评估套件中，Cura 1T 在前沿基线中排名第一或接近第一，同时在域外推理和智能体基准上保持竞争力。

## 关键词

#医疗AI #智能体 #LLM #自我改进
