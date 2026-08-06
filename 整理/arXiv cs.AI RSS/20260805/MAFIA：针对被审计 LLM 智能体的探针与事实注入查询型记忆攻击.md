---
published: 2026-08-05
title: "MAFIA：针对被审计 LLM 智能体的探针与事实注入查询型记忆攻击"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MAFIA- Query-Only Memory Attacks via Probing and Factual Injection against Audited LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/MAFIA- Query-Only Memory Attacks via Probing and Factual Injection against Audited LLM Agents]]"
source_sha256: 7534d3399924018c5354d948a5d487c021a4769c2c558e63fbd308527eb21b68
original_url: "https://arxiv.org/abs/2608.03844"
processed: 2026-08-05
language: zh-CN
---

# MAFIA：针对被审计 LLM 智能体的探针与事实注入查询型记忆攻击

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiaming Chen、Yisen Gao、Yanping Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03844)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MAFIA- Query-Only Memory Attacks via Probing and Factual Injection against Audited LLM Agents|查看原始文件]]

## 摘要

- 提出 MAFIA，面向被审计记忆增强 LLM 智能体的查询型记忆攻击框架：放置策略通过记忆探针、预算分配与调度确保检索竞争的注入；载荷设计用紧凑事实伪装绕过审计，在保持高语义相似性的同时保留恶意效果。
- 现有查询型攻击在两类现实常见设置下失效：大规模良性记忆池与主动输入审计。
- 广泛评估显示 MAFIA 攻击成功率最高 90.7%，同时把审计检测从峰值 83.3% 抑制到至多 7.4%，暴露智能体记忆系统的关键漏洞。
- 代码：https://github.com/JiamingChen1234/MAFIA

## 正文

论文编号：arXiv:2608.03844v1（更新类型：new）。以下为摘要全文翻译。

记忆增强的 LLM 智能体依赖丰富上下文进行长视界推理与行动，然而其记忆模块为恶意记录暴露持久攻击面，使记忆投毒威胁研究势在必行。然而，现有的查询型攻击在两个现实且普遍的设置中往往失效：大规模良性记忆池与主动输入审计。因此，当前方法在面对高检索竞争性与严格语义检查的双重挑战时力不从心。为克服这些局限，我们提出 MAFIA，一个针对被审计（Audit）智能体的、通过探针（Probing）与事实注入（Factual Injection）的查询型记忆攻击（Memory Attack）框架，专为该扩展威胁模型设计。具体而言，MAFIA 引入：（1）放置策略：通过记忆探针、预算分配与调度确保检索竞争的注入；（2）载荷设计：使用紧凑事实伪装绕过审计，在保持高语义相似性的同时保留恶意效果。广泛评估表明，MAFIA 实现最高 90.7% 的攻击成功率，同时把审计检测从峰值 83.3% 抑制到至多 7.4%，暴露智能体记忆系统中的关键漏洞。代码将在 https://github.com/JiamingChen1234/MAFIA 公开发布。

## 关键词

#记忆攻击 #LLM智能体 #投毒 #审计绕过
