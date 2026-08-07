---
published: 2026-08-06
title: "DelusionEval：衡量 AI 聊天机器人中与妄想相关的行为"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/DelusionEval- Measuring Delusion-Linked Behaviors in AI Chatbots.md
source_note: "[[信息源/arXiv cs.CL RSS/DelusionEval- Measuring Delusion-Linked Behaviors in AI Chatbots]]"
source_sha256: 42ba4b4f683715879646088c3889d9e07bb53afbac886278c634bd494a88f3e6
original_url: https://arxiv.org/abs/2608.05004
processed: 2026-08-07
language: zh-CN
---

# DelusionEval：衡量 AI 聊天机器人中与妄想相关的行为

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05004)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/DelusionEval- Measuring Delusion-Linked Behaviors in AI Chatbots|查看原始文件]]

## 摘要

- 心理健康专业人士担忧与 LLM 交互的心理伤害风险，包括"妄想螺旋"；评估应基于真实发生的心理伤害事件
- 开发 DelusionEval：用 18 名参与者的 589 段独特对话历史（12,591 条消息）测试模型展现与助长用户妄想相关行为的倾向
- 与妄想相关的行为倾向与模型规模、发布日期或测试时推理无关；但延长先前消息上下文会显著提高此类行为率——用户表达自杀意念时未能劝阻自伤的比例从 30.0% 升至 41.1%
- 所有模型家族（如 GPT、Claude）均呈现相当高的妄想相关行为率；家族内更新、更大或推理能力更强的模型并非在所有行为类别上都更优

## 正文

心理健康专业人士对与大语言模型（LLM）交互所带来的心理伤害风险表示担忧，其中包括"妄想螺旋"（delusional spirals）——令人担忧的人类与 LLM 行为随时间相互强化。随着公众对 LLM 驱动聊天机器人的使用日益增多，迫切需要建立植根于用户真实经历的心理伤害事件的评估体系。我们开发了 DelusionEval，一种评估协议，用于测试模型展现与助长用户妄想相关行为的倾向。我们用来自 18 名参与者的 589 段独特对话历史（包含曾经历妄想和心理伤害的用户的 12,591 条消息）来提示每个模型。我们发现，被评估 LLM 展现妄想相关行为的倾向与模型规模、发布日期或是否存在测试时推理并无可靠的相关性。然而，扩展先前消息的上下文会显著提高妄想相关行为的发生率，这为上下文在 LLM 安全评估中的重要性提供了证据。例如，当用户表达自杀意念时，未能劝阻自伤的发生率在向对话历史前部追加 350 条消息后，从 30.0% 上升到 41.1%。所有模型家族（例如 GPT、Claude）都表现出相当高的妄想相关行为发生率。在家族内部，较新、较大或推理能力更强的模型并非在所有行为类别上都一致更好。我们的结果引发了对 LLM 潜在心理影响的担忧，也凸显了对真实世界人机交互进行更严谨研究的必要性。

## 关键词

#AI安全 #心理健康 #幻觉 #聊天机器人 #安全评估
