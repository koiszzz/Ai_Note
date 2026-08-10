---
published: 2026-08-07
title: "FormBharo：面向印度农村对话式填表的语音智能体设计与评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FormBharo- Designing and Evaluating a Voice Agent for Conversational Form Filling in Rural India.md"
source_note: "[[信息源/arXiv cs.AI RSS/FormBharo- Designing and Evaluating a Voice Agent for Conversational Form Filling in Rural India]]"
source_sha256: f9550e86d67e279bbd83fd85a57aacd84c1066bda044c4a1ec459e2f2ef4a21a
original_url: "https://arxiv.org/abs/2608.06027"
processed: 2026-08-07
language: zh-CN
---

# FormBharo：面向印度农村对话式填表的语音智能体设计与评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Aman Dalmia, Sanskriti Midha, Jigar Doshi
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06027)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FormBharo- Designing and Evaluating a Voice Agent for Conversational Form Filling in Rural India|查看原始文件]]

## 摘要

- 在印度，几乎每项社会福利都始于一张表格，而最需要这些福利的人往往不识字；服务他们需要口语对话，目前这项工作落在逐人登记受益人的一线卫生工作者身上，是对紧张人力的低效使用。
- 构建 FormBharo（印地语"填表"）：在严格延迟与成本预算下通过电话填写的语音智能体，将大语言模型（LLM）与确定性、基于规则的验证及流程控制配对；正与在印度运营大规模母婴移动健康项目的 NGO ARMMAN 试点，为低收入印地语母亲登记产前产后护理——据其所知，这是首个为此人群试点填写登记表的语音智能体。
- 开放发布 FormVoiceAgentBench 基准：人工录制印地语音频配对 960 个模拟通话中的 3,760 个多轮对话测试，评估组件（转录、抽取、回复生成）与真实声学变化下的端到端填表。
- 关键发现：LLM 收到易错真实语音转录而非参考转录时，填表完成度最多下降约 41 点；规则控制可恢复许多回合级抽取错误，使更小、更便宜的模型在填表上匹配或超越前沿模型；组件性能不能预测端到端性能（GPT-5.5 在参考转录上回合级抽取准确率领先 99.8%，但填表排名较低）；没有单一模型同时在准确率、成本与延迟上最优，因此使用帕累托加权和标量化选择平衡三者的可部署配置。

## 正文

在印度，几乎每项社会福利都始于一张表格，但最需要这些福利的人往往无法读写。接触他们需要口语对话。今天这项工作落到逐人登记受益人的一线卫生工作者身上，是对紧张人力的低效使用。我们构建了 FormBharo（印地语"填表"），一个在严格延迟与成本预算下通过电话填写的语音智能体，将大语言模型（LLMs）与确定性、基于规则的验证及流程控制配对。它正与 ARMMAN（一个在印度运营大规模母婴移动健康项目的 NGO）试点，为低收入、讲印地语的母亲登记产前与产后护理。据我们所知，这是首个为此人群试点填写登记表的语音智能体。我们开放发布 FormVoiceAgentBench，一个将人工录制的印地语音频与 960 个模拟通话中 3,760 个多轮对话测试配对的基准，用于在真实声学变化下评估我们智能体的组件（转录、抽取、回复生成）与端到端填表。当 LLM 收到易错的真实语音转录而非参考转录时，填表完成度最多下降约 41 点。基于规则的控制恢复了许多回合级抽取错误，帮助更小、更便宜的模型在填表上匹配或超越前沿模型。组件性能不能预测端到端性能：GPT-5.5 在参考转录上引领回合级抽取准确率（99.8%），但在填表上排名更低。由于错误在流水线中既传播又抵消，最优模型选择只在端到端评估中出现。最后，没有单一模型能在准确率、成本与延迟上同时最优，因此我们使用基于帕累托的加权和标量化选择平衡三者的可部署配置。

## 关键词

#语音智能体 #印度 #对话式填表 #LLM
