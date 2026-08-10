---
published: 2026-08-07
title: "如您所愿：精确农业中用 LLM 结合形式化验证的任务规划"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/As You Wish- Mission Planning with Formal Verification using LLMs in Precision Agriculture.md"
source_note: "[[信息源/arXiv cs.AI RSS/As You Wish- Mission Planning with Formal Verification using LLMs in Precision Agriculture]]"
source_sha256: 593dd0787a3b26b150b16c9f787a0fb66eae7618798485bd076a77102d59bee5
original_url: "https://arxiv.org/abs/2606.18519"
processed: 2026-08-07
language: zh-CN
---

# 如您所愿：精确农业中用 LLM 结合形式化验证的任务规划

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Marcos Abel Zuzu\'arregui, Stefano Carpin
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.18519)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/As You Wish- Mission Planning with Formal Verification using LLMs in Precision Agriculture|查看原始文件]]

## 摘要

- 机器人系统正在各行业商业化部署，但许多系统高度专业化，需要高级技能才能操作并确保按指令执行。
- 论文扩展此前基于 LLM 的精确农业任务规划器（从自然语言任务描述合成任务计划），解决自然语言固有歧义问题：在规划架构中引入多个反馈循环，利用线性时序逻辑（LTL）确保任务规划系统满足用户制定的规格，同时仍使用自然语言。
- 为缓解潜在偏差，规格与验证子任务由两个不同的商业 LLM 负责。
- 大量实验凸显将任务验证集成进完全自主流水线的优势与局限（尤其 LLM 生成有价值 LTL 公式的能力），并展示所提实现如何应对与解决这些挑战。

## 正文

尽管机器人系统正在各行业商业化和部署，其中许多系统高度专业化，往往需要高级技能才能操作并确保按指令执行。为缓解这一问题，我们最近引入了一个利用 LLM 的任务规划器，基于自然语言提供的任务描述在精确农业中合成任务计划。虽然该系统表现令人印象深刻，但它也饱受自然语言固有歧义的困扰。在本文中，我们扩展系统以解决这一问题：在规划架构中引入多个反馈循环，利用线性时序逻辑（linear temporal logic，LTL）确保任务规划系统满足用户制定的规格，同时仍使用自然语言。为缓解潜在偏差，规格与验证子任务由两个不同的商业 LLM 负责。通过大量实验，我们突出将任务验证集成到完全自主流水线中的优势与局限，特别是关于 LLM 生成有价值 LTL 公式的能力，并展示我们的实现如何应对与解决这些挑战。

## 关键词

#任务规划 #LTL #形式化验证 #精确农业
