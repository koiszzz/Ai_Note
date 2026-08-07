---
published: 2026-08-06
title: FinPerMA：面向 LLM 智能体的理论指导、事件锚定个性化记忆基准
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/FinPerMA- A Theory-Informed, Event-Grounded Personalized-Memory Benchmark for LLM Agents.md
source_note: "[[信息源/arXiv cs.CL RSS/FinPerMA- A Theory-Informed, Event-Grounded Personalized-Memory Benchmark for LLM Agents]]"
source_sha256: 20c955091fc4ef68f699f3924c29f2a59d4ea953d3d70c0f11e60ce9e914a9b1
original_url: https://arxiv.org/abs/2608.04095
processed: 2026-08-07
language: zh-CN
---

# FinPerMA：面向 LLM 智能体的理论指导、事件锚定个性化记忆基准

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04095)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/FinPerMA- A Theory-Informed, Event-Grounded Personalized-Memory Benchmark for LLM Agents|查看原始文件]]

## 摘要

- 现有个性化记忆基准主要测试事实记忆或依赖弱约束的模型生成轨迹，事件驱动的偏好适应研究不足；FinPerMA 以事件为锚定，针对冻结的纵向投资者轨迹评估个性化记忆。
- 生成流水线结合确定性、理论驱动的冲击影响规则、受控 LLM 叙述和自动质量筛查，用"冲击后检查点"隔离智能体是否将重大事件整合进持久用户模型。
- 在 276 个用户画像的 2,994 个问题上，七个前沿 LLM 与最多七种记忆配置远未饱和；基于摘要的记忆常保留事实却丢失偏好信号，简单检索反而能胜过专门构建的记忆系统，且差距在冲击后扩大。

## 正文

本文编号：arXiv:2608.04095v1（公告类型：cross），以下为摘要全文翻译。

大语言模型（LLM）智能体越来越多地被用作金融咨询等高利害领域的个性化助手，但它们能否在长期范围内维护并更新个体化用户模型仍不清楚。现有的个性化记忆基准主要测试事实记忆，或依赖约束较弱的模型生成轨迹，导致由事件驱动的偏好适应这一方向研究不足。我们引入 FinPerMA，一个以事件为锚定的基准，针对冻结的纵向投资者轨迹评估个性化记忆。其生成流水线结合了确定性的、理论驱动的冲击影响规则、受控的 LLM 叙述和自动质量筛查；一个"冲击后检查点"（Post-Shock checkpoint）用于隔离智能体是否已将重大事件整合进其持久用户模型。在来自 276 个用户画像的 2,994 个问题上，七个前沿 LLM 与最多七种记忆配置远未饱和：没有任何全上下文配置的总体准确率超过约 0.47，多项选择题准确率超过约 39%。归因分析表明，基于摘要的记忆通常保留事实细节，却丢失了个性化所需的偏好信号；因此简单的检索有时能胜过专门构建的记忆系统，且这种差距在冲击后会扩大。

## 关键词

#FinPerMA #LLM智能体 #个性化记忆 #金融顾问 #事件驱动
