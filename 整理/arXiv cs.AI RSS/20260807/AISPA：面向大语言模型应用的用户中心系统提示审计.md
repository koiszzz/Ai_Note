---
published: 2026-08-07
title: "AISPA：面向大语言模型应用的用户中心系统提示审计"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AISPA- User-Centric System Prompt Auditing for Large Language Model Applications.md"
source_note: "[[信息源/arXiv cs.AI RSS/AISPA- User-Centric System Prompt Auditing for Large Language Model Applications]]"
source_sha256: 9f67811ac59e09d4afaf790b43f8b9af38ed0583dc5806c8a4f708ef79be4d63
original_url: "https://arxiv.org/abs/2607.28617"
processed: 2026-08-07
language: zh-CN
---

# AISPA：面向大语言模型应用的用户中心系统提示审计

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiangning Lin 等（23 位作者，含 Robert Mahari, Erik Brynjolfsson, Alex Pentland 等）
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28617)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AISPA- User-Centric System Prompt Auditing for Large Language Model Applications|查看原始文件]]

## 摘要

- 系统提示是开发者配置以控制 AI 应用中基础模型行为的指令，广泛应用于商业 AI 产品却很少向公众或监管机构披露，造成严重信任与问责缺口。
- 提出 AISPA（人工智能系统提示保证），一个用户中心的系统提示审计框架：检查系统提示的特定部分，并沿八个对用户重要的维度评估。
- 用该框架审查 88 个商业 AI 产品系统提示中的 3,249 条指令，将每条分类为保护性（保护用户）或问题性。
- 四项核心发现：①系统提示设计跨产品与开发者差异巨大（有的组织平均每产品 60+ 条保护指令，有的不足 5 条）；②保护指令广泛采用但范围浅（98.9% 产品至少含一条，但仅 24% 覆盖全部八个维度）；③系统提示持续变长且更保护用户；④问题指令仍普遍存在（约 40% 产品含至少一条损害用户利益的指令，且保护性与问题性指令常共存于同一提示）。

## 正文

系统提示是开发者配置以控制 AI 应用中基础模型行为的指令。它们被广泛用于商业 AI 产品，但很少向公众或监管机构披露，在 AI 系统的广泛部署中造成严重的信任与问责缺口。本文中，我们介绍人工智能系统提示保证（Artificial Intelligence System Prompt Assurance，AISPA），一个用户中心的系统审计框架，用于系统化审计 AI 系统中的系统提示。AISPA 检查系统提示的特定部分，并沿八个对用户重要的维度评估它们。随后我们用该框架审查了 88 个商业 AI 产品系统提示中的 3,249 条指令，将每条指令分类为保护性（保护用户）或问题性。我们的审计揭示了四项核心发现。第一，系统提示设计跨产品与开发者差异巨大，一些组织平均每产品超过 60 条保护指令，而其他组织平均不足 5 条。第二，保护指令被广泛采用但范围较浅：98.9% 的产品至少包含一条，但只有 24% 覆盖 AISPA 分类法的全部八个维度。第三，系统提示已稳步变长且对用户更具保护性，表明用户保护正成为商业提示设计中日益可见的关切。第四，尽管取得进展，问题指令仍然普遍：约 40% 的产品包含至少一条损害用户利益的指令，且保护性与问题性指令经常共存于同一提示中。我们的发现凸显了对商业 AI 产品系统提示加强透明度、标准化与独立监督的需求。

## 关键词

#系统提示 #审计 #LLM应用 #用户保护
