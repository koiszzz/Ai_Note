---
published: 2026-08-05
title: "CastFSR：面向上下文感知时间序列预测的快慢反思智能体推理框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CastFSR- A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting.md"
source_note: "[[信息源/arXiv cs.AI RSS/CastFSR- A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting]]"
source_sha256: a7200852466c7ed250f4fafc8b91915c0e78dbd79068bb3b0c94795f4b2c51bb
original_url: "https://arxiv.org/abs/2608.03031"
processed: 2026-08-05
language: zh-CN
---

# CastFSR：面向上下文感知时间序列预测的快慢反思智能体推理框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03031)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CastFSR- A Fast--Slow--Reflect Agentic Reasoning Framework for Context-Aware Time Series Forecasting|查看原始文件]]

## 摘要

- 时间序列预测是复杂系统决策的基础，未来动态不仅受历史观测影响，也受不断变化的上下文特征影响。
- 大语言模型的近期进展使预测从数值外推扩展到上下文感知推理，但现有方法通常缺少明确机制来识别相关上下文、推理其影响，并依据时间与领域约束验证预测。
- 论文提出 CastFSR，将上下文感知预测形式化为“快思考—慢思考—反思”工作流。
- 快思考阶段对观测进行画像并选择轻量预测器，构造数据驱动的预测先验；慢思考阶段检索上下文证据，自适应确定有信息量的回看窗口，并推理上下文如何改变未来动态；反思阶段迭代修正预测，确保时间、上下文和领域一致性。
- CastFSR 既支持使用现成大语言模型的免训练推理，也支持通过两阶段监督微调与强化学习将编排能力迁移到小型大语言模型的高效部署。
- 在公开数据集上的大量实验显示，CastFSR 持续优于代表性基线。代码已公开。

## 正文

时间序列预测是复杂系统决策的基础问题。未来动态不仅受到历史观测的影响，也受到不断演化的上下文特征影响。大语言模型的近期进展让预测能力从单纯的数值外推扩展到上下文感知推理，但现有方法往往缺少明确机制来识别相关上下文、推理上下文的影响，并依据时间约束和领域约束验证预测结果。

本文提出 CastFSR，将上下文感知预测形式化为一个“快思考—慢思考—反思”的智能体工作流。在快思考阶段，CastFSR 对观测进行画像，并选择轻量级预测器，构造数据驱动的预测先验。在慢思考阶段，系统检索上下文证据，自适应地确定包含有效信息的回看窗口，并推理上下文如何改变未来动态。在反思阶段，系统迭代修正预测，以保证时间一致性、上下文一致性和领域一致性。

CastFSR 既支持使用现成大语言模型的免训练推理，也支持通过两阶段监督微调和强化学习进行高效部署，将其编排能力迁移到紧凑型大语言模型。在公开数据集上的大量实验表明，CastFSR 持续优于代表性基线。代码已公开于 https://github.com/Xiaoyu-Tao/CastFSR。

## 关键词

#时间序列预测 #上下文感知 #智能体推理 #大语言模型 #反思 #预测工作流
