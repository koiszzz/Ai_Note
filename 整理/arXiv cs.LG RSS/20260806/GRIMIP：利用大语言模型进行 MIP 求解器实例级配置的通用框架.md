---
published: 2026-08-06
title: "GRIMIP：利用大语言模型进行 MIP 求解器实例级配置的通用框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GRIMIP- A General Framework for Instance-Specific Configuration of MIP Solvers Using LLMs.md"
source_note: "[[信息源/arXiv cs.LG RSS/GRIMIP- A General Framework for Instance-Specific Configuration of MIP Solvers Using LLMs|查看原始文件]]"
source_sha256: 84473f89d22cf9d9d4e810559e7090d0a9f3f4e075c8d53ea4fed0bc6a03113e
original_url: https://arxiv.org/abs/2606.23299
processed: 2026-08-07
language: zh-CN
---

# GRIMIP：利用大语言模型进行 MIP 求解器实例级配置的通用框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.23299)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/GRIMIP- A General Framework for Instance-Specific Configuration of MIP Solvers Using LLMs|查看原始文件]]

## 摘要

- 配置混合整数规划（MIP）求解器的超参数是一个高维、依赖实例的优化问题，次优设置可能使求解时间恶化数个数量级；默认配置往往次优，而传统调优方法要么受"冷启动"问题与低效搜索之苦，要么严重依赖专家经验。
- 本文提出 GRIMIP（General Reasoning for Instance-specific MIP configuration），一个新型混合智能框架，协同整合大语言模型（LLM）的语义推理能力与贝叶斯优化（BO）的样本高效搜索。
- GRIMIP 让 LLM 在 BO 循环中充当完整概率代理模型，显著提升性能并降低采样与评估成本；在包括 MIPLIB 在内的七个基准上，GRIMIP 在困难实例上将原始对偶积分（Primal-Dual Integral）降低超过 40%，优于 SMAC 及其他 LLM 辅助的 BO 方法。
- 通过赋予 LLM 足够的自主性，GRIMIP 将 LLM 的专家级推理与 BO 的高效搜索相结合，达到了最先进的性能。

## 正文

配置混合整数规划（MIP）求解器的超参数是一个高维、依赖实例的优化问题，次优的设置可能使求解时间恶化数个数量级。默认配置往往次优，而传统的调优方法要么受"冷启动"（cold-start）问题和低效搜索之苦，要么严重依赖专家经验。本文提出了 GRIMIP（General Reasoning for Instance-specific MIP configuration），一个新型混合智能框架，协同整合了大语言模型（LLM）的语义推理能力与贝叶斯优化（BO）的样本高效搜索。GRIMIP 使 LLM 能在 BO 循环中充当完整的概率代理模型，显著提升性能并降低采样和评估成本。在包括 MIPLIB 在内的七个基准上，GRIMIP 在困难实例上实现了超过 40% 的原始对偶积分（Primal-Dual Integral）降低，优于 SMAC 和其他 LLM 辅助的 BO 方法。通过赋予 LLM 足够的自主性，GRIMIP 将 LLM 的专家级推理与 BO 的高效搜索相结合，达到了最先进的性能。

## 关键词

#MIP求解器 #大语言模型 #贝叶斯优化 #超参数配置
