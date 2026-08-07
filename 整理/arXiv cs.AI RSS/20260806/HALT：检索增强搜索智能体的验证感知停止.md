---
published: 20260806
title: "HALT：检索增强搜索智能体的验证感知停止"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HALT- Verification-Aware Stopping for Retrieval-Augmented Search Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/HALT- Verification-Aware Stopping for Retrieval-Augmented Search Agents]]"
source_sha256: 35886534df104168ff1885e41ac6a70b0ce5c7b2afd8956a4d5004acf8ea3b90
original_url: "https://arxiv.org/abs/2608.02009"
processed: 2026-08-06
language: zh-CN

---

# HALT：检索增强搜索智能体的验证感知停止

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Daeyoung Roh, Donghee Han
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02009)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HALT- Verification-Aware Stopping for Retrieval-Augmented Search Agents|查看原始文件]]

## 摘要

- 检索增强搜索智能体通过反复发出搜索查询和积累证据回答多跳问题，这产生停止问题：必要证据出现后，进一步检索常增加成本、延迟和干扰上下文而非有用信息。
- 本文将停止表述为证据覆盖而非生成器置信度，引入 HALT，一个轻量验证感知策略，不改变搜索智能体：给定期望跳数声明，HALT 仅在累积证据支持每个必需声明时停止。
- 三个多跳 QA 基准上，HALT 减少冗余搜索同时基本保持精确匹配；分离可部署设置（从问题生成跳数声明）与使用金支持事实标注的诊断上限：生成声明产生较小但仍保持精确匹配的节省，金声明显示跳数目标干净时更大的节省。

## 正文

检索增强搜索智能体通过反复发出搜索查询和积累证据回答多跳问题。这产生停止问题：必要证据出现后，进一步检索常增加成本、延迟和干扰上下文而非有用信息。我们将停止表述为证据覆盖（evidence coverage）而非生成器置信度，并引入 HALT，一个轻量验证感知策略，不改变搜索智能体。给定期望跳数声明，HALT 仅在累积证据支持每个必需声明时停止。三个多跳 QA 基准上，HALT 减少冗余搜索同时基本保持精确匹配。我们分离可部署设置（跳数声明从问题生成）与使用金支持事实标注的诊断上限：生成声明产生较小但仍保持精确匹配的节省，而金声明显示跳数目标干净时可用的更大节省。基线比较和消融表明，此行为由声明-证据对齐驱动，而非一般充分性、固定停止位置或词汇重叠。开放语料试点进一步表明，HALT 在覆盖无法可靠验证时弃权。总体而言，证据覆盖为改进检索增强智能体提供实用运行时控制信号，无需重训练或修改宿主智能体。

## 关键词

#检索增强 #停止策略 #多跳QA #搜索智能体 #arXiv