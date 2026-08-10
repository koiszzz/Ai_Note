---
published: 2026-08-07
title: "AISPA：大语言模型应用的以用户为中心系统提示审计"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/AISPA- User-Centric System Prompt Auditing for Large Language Model Applications.md"
source_note: "[[信息源/arXiv cs.CL RSS/AISPA- User-Centric System Prompt Auditing for Large Language Model Applications]]"
source_sha256: ac16d0b234c6fe5007aecdf472f728e3b196266d07287c8234e55fb53ec3bdb6
original_url: "https://arxiv.org/abs/2607.28617"
processed: 2026-08-07
language: zh-CN
---

# AISPA：大语言模型应用的以用户为中心系统提示审计

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Xiangning Lin, Shenzhe Zhu, Shu Yang, Zhenyu Zhang, Haoqian Zhang, Yipeng Zhao, Chengxuan Qian, Tianwei Wang, Ziheng Zhang, Zhenlong Yuan, Dingcheng Wang, Juncheng Wu, Yuan Si, Jiaxin Liu, Baolong Bi, Robert Mahari, Tobin South, Dazza Greenwood, Zexue He, Rishi Bommasani, Sophia Kazinnik, Andreas Haupt, Samuele Marro, Erik Brynjolfsson, Alex Pentland, Jiaxin Pei
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2607.28617)

## 摘要

- 系统提示是开发者配置的指令，管理 AI 应用中基础模型行为；商业 AI 产品普遍使用，但很少向公众或监管者披露，造成 AI 系统广泛部署中严重信任与问责差距。
- 引入 AI 系统提示保障（AISPA）：以用户为中心的系统性审计框架；检查系统提示特定部分并按对用户重要的八个维度评估。
- 用框架审查 88 个商业 AI 产品系统提示的 3249 条指令，将每条分类为保护性（对用户）或问题性；四大核心发现。
- 发现：系统提示设计跨产品与开发者差异巨大（部分组织每产品平均超 60 条保护指令，其他平均少于 5）；保护指令广泛采用但范围浅（98.9% 产品至少一条，仅 24% 覆盖 AISPA 分类学全部八维）；系统提示持续变长且更保护用户；问题性指令仍普遍（约 40% 产品至少一条损害用户利益指令，保护与问题指令常共存于同一提示）；凸显商业 AI 产品系统提示更大透明度、标准化与独立监督需求。

## 正文

系统提示是开发者配置的指令，用于管理 AI 应用中基础模型的行为。它们在整个商业 AI 产品中被使用，但很少向公众或监管者披露，在 AI 系统的广泛部署中造成严重的信任与问责差距。本文引入人工智能系统提示保障（Artificial Intelligence System Prompt Assurance, AISPA），一个以用户为中心的框架，用于系统审计 AI 系统中的系统提示。AISPA 检查系统提示的特定部分，并沿对用户重要的八个维度评估它们。研究随后用该框架审查 88 个商业 AI 产品系统提示中的 3,249 条指令，将每条指令分类为保护性（对用户）或问题性。审计浮现四个核心发现。第一，系统提示设计跨产品与开发者差异巨大：一些组织每个产品平均超过 60 条保护指令，而其他组织平均少于 5 条。第二，保护指令被广泛采用但范围较浅：98.9% 的产品包含至少一条，但只有 24% 覆盖 AISPA 分类学的全部八个维度。第三，系统提示已稳步变得更长且对用户更具保护性，表明用户保护正成为商业提示设计中更可见的关注点。第四，尽管有这些进展，问题性指令仍然普遍：约 40% 的产品包含至少一条违背用户利益的指令，且保护性与问题性指令常常在同一提示中共存。这些发现凸显商业 AI 产品中系统提示需要更大透明度、标准化与独立监督。

## 关键词

系统提示、审计、以用户为中心、透明度、LLM 应用
