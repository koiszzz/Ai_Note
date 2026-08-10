---
published: 2026-08-07
title: "当前 AI 基准未测量的：模态、搜索、引用及其对安全评估的启示"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/What Current AI Benchmarks Leave Unmeasured- Modality, Search, Citations, and Implications (for Safe.md"
source_note: "[[信息源/arXiv cs.AI RSS/What Current AI Benchmarks Leave Unmeasured- Modality, Search, Citations, and Implications (for Safe]]"
source_sha256: 7040531a055886784991f30a8a30100f8ceaba13739ce66b1cc6599491cab1cb
original_url: "https://arxiv.org/abs/2608.06202"
processed: 2026-08-07
language: zh-CN
---

# 当前 AI 基准未测量的：模态、搜索、引用及其对安全评估的启示

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ro Encarnaci\'on, Tina Behzad, Emma Lurie, Dana\'e Metaxa
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06202)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/What Current AI Benchmarks Leave Unmeasured- Modality, Search, Citations, and Implications (for Safety|查看原始文件]]

## 摘要

- 大语言模型（LLM）基准评估常规用于支持关于模型安全、可靠性与部署就绪的主张；但大多数评估依赖单一访问模态（模型 API）、每提示单次运行、以准确率为主要结果指标，未计入网络搜索等可能影响部署中模型行为的条件。
- 审计其中一个最广泛使用 LLM 的假设：比较两种模态（ChatGPT 聊天 UI 与 OpenAI API），有与无网络搜索——用两个流行基准 BBQ 与 SafetyBench 的分层总样本 401 个提示，收集每次提示三次重复运行的 4,812 个总响应。
- 标准性能指标之外，评估响应一致性、响应文本相似性、引用接地与弃权行为等模型输出维度——例如聊天 UI 响应在搜索关闭时两基准上均不如 API 准确；启用网络搜索将准确率降低最多 8 个百分点，甚至反转一个基准的模态性能趋势方向；同一提示重复运行在最多 21% 提示中产生不一致响应；两模态还用不同引用接地答案，弃权行为跨模态也不一致。
- 结果显示即使模型家族内，仅报告简单准确率指标也能掩盖与 AI 安全评估相关的模型行为变异重要形式——论证 AI 安全评估应系统计入模态、多运行一致性、搜索条件与响应级行为，更好反映部署 AI 系统实际行为。

## 正文

大语言模型（LLM）基准评估常规用于支持关于模型安全、可靠性与部署就绪的主张。然而，大多数评估依赖单一访问模态（模型 API），对每个提示进行单次运行，并以准确率作为主要结果指标，未计入网络搜索等可能影响部署中模型行为的条件。我们审计这些假设，针对一个最广泛使用的 LLM，比较两种模态——ChatGPT 的聊天 UI 与 OpenAI 的 API——有与无网络搜索。我们使用来自两个流行基准 BBQ 与 SafetyBench 的分层总样本 401 个提示，在每次提示三次重复运行中收集 4,812 个总响应。在标准性能指标之外，我们评估响应一致性、响应文本相似性、引用接地与弃权行为等模型输出维度。例如，聊天 UI 响应在搜索关闭时在两个基准上都比 API 响应更不准确。启用网络搜索将准确率降低最多 8 个百分点，甚至反转一个基准的模态性能趋势方向。相同提示的重复运行在最多 21% 的提示中产生不一致的响应。两种模态还在不同引用中接地答案，且弃权行为跨模态也不一致。这些结果说明，即使在模型家族内部，仅报告简单的准确率指标也能掩盖与 AI 安全评估相关的重要模型行为变异形式。我们论证，AI 安全评估应系统性地计入模态、多运行一致性、搜索条件与响应级行为，以更好地反映部署的 AI 系统在实践中如何表现。

## 关键词

#AI基准 #模态 #网络搜索 #安全评估
