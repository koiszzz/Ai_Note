---
published: 20260806
title: "FinPerMA：LLM 智能体的理论知情、事件接地个性化记忆基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FinPerMA- A Theory-Informed, Event-Grounded Personalized-Memory Benchmark for LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/FinPerMA- A Theory-Informed, Event-Grounded Personalized-Memory Benchmark for LLM Agents]]"
source_sha256: c979b49e7fd2ad7cb7c647272e2fb8ecc4be28f5cfa4064a08a000c9f0417b92
original_url: "https://arxiv.org/abs/2608.04095"
processed: 2026-08-06
language: zh-CN

---

# FinPerMA：LLM 智能体的理论知情、事件接地个性化记忆基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ben Wang, Kang Zhou, Lifan Guo, Feng Chen, Chi Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04095)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FinPerMA- A Theory-Informed, Event-Grounded Personalized-Memory Benchmark for LLM Agents|查看原始文件]]

## 摘要

- LLM 智能体日益用作金融咨询等高利害领域的个性化助手，但尚不清楚它们能否长期维护和更新个体化用户模型；现有个性化记忆基准主要测试事实保留或依赖弱约束模型生成轨迹，使事件驱动偏好适应未充分探索。
- 本文引入 FinPerMA，一个事件接地基准，对照冻结纵向投资者轨迹评估个性化记忆：生成流水线结合确定性、理论知情影响规则、受控 LLM 叙述和自动质量筛选；冲击后检查点隔离智能体是否已将重大事件整合到持久用户模型。
- 在来自 276 个人设的 2,994 个问题上，七个前沿 LLM 和最多七种记忆配置远未饱和：无全上下文配置超过约 0.47 整体准确率或多项选择约 39%；归因分析显示基于摘要的记忆常保留事实细节而丢失个性化所需偏好信号。

## 正文

LLM 智能体日益用作金融咨询等高利害领域的个性化助手，然而尚不清楚它们能否在长时程内维护和更新个体化用户模型。现有个性化记忆基准主要测试事实保留，或依赖弱约束的模型生成轨迹，使事件驱动的偏好适应未充分探索。我们引入 FinPerMA，一个事件接地基准，对照冻结纵向投资者轨迹评估个性化记忆。其生成流水线结合确定性、理论知情影响规则、受控 LLM 叙述和自动质量筛选；冲击后（Post-Shock）检查点隔离智能体是否已将重大事件整合到持久用户模型。在来自 276 个人设的 2,994 个问题上，七个前沿 LLM 和最多七种记忆配置远未饱和：无全上下文配置超过约 0.47 整体准确率，或多项选择问题约 39%。归因分析表明，基于摘要的记忆常保留事实细节，却丢失个性化所需的偏好信号；因此简单检索可优于专门构建的记忆系统，且冲击后差距扩大。

## 关键词

#个性化记忆 #金融顾问 #LLM智能体 #基准 #arXiv