---
title: "FACTWASH：捕捉把传闻洗成事实的 AI 改写"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FACTWASH- Catching AI Rewrites That Wash Hearsay into Fact.md"
source_note: "[[信息源/arXiv cs.AI RSS/FACTWASH- Catching AI Rewrites That Wash Hearsay into Fact]]"
source_sha256: f91b61ce7034a97c598aff5654a360708e4b63485115ed91e8d7479b63d8e153
original_url: "https://arxiv.org/abs/2608.03372"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# FACTWASH：捕捉把传闻洗成事实的 AI 改写

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Alex Kwon
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03372)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FACTWASH- Catching AI Rewrites That Wash Hearsay into Fact|查看原始文件]]

## 摘要

- 定义“事实洗涤”（factwashing）：AI 改写保留主张的同时，洗掉使其可核查的内容——谁说的、多确定、何时成立；发布开源写入时门控 factwash，用命名标志与证据而非 LLM 评判者确定性捕获该失败。
- 决定因素是属性是否有有界的表层线索清单：显式否定线索接近可枚举，词表即可完成并迁移（未调优文本 F1 0.91）；对冲与归因的实现在开放，词表在半召回附近平台化，一个问题式 LLM 见证者以相同精度恢复 +17 与 +15 个点的线索检测召回。
- 在 105,596 个独立标注句子上测量线索检测；盲标记忆写入语料定位失败：55% 的不良写入在会话式传闻中，7% 在商务邮件中（p<0.001）。
- 在未修改的 mem0 2.0.7 上，门控标记出 8 次对冲传闻写入中的 5 次。

## 正文

论文编号：arXiv:2608.03372v1（更新类型：cross）。以下为摘要全文翻译。

AI 系统不断改写信息：对话变成存储的记忆，文档变成答案。改写可以保留主张，同时洗掉使其可核查的东西——谁说的、他们有多确定、何时成立。我们称这种失败为事实洗涤（factwashing），并发布 factwash，一个开源的写入时门控，用命名标志与证据（而非 LLM 评判者）确定性捕获它。构建它回答一个实际问题：便宜的检查何时足够，何时需要模型？决定因素是该属性是否具有有界的表层线索清单。显式否定线索接近可枚举，因此一个词表就能完成并迁移，在未调优文本上达到 0.91 的 F1。对冲与归因的实现在开放，因此词表在半召回附近平台化，而一个问题式 LLM 见证者以相同精度恢复 +17 与 +15 个点的线索检测召回。部署时，该见证者可能只会降低判定，因此它买来的是精度而非覆盖率。我们在 105,596 个独立标注句子上测量线索检测。一个盲标记忆写入语料随后定位失败：55% 的不良写入发生在会话式传闻中，7% 在商务邮件中（p<0.001），因此第一个部署问题不是使用哪个检测器，而是失败是否会发生。在未修改的 mem0 2.0.7 上，该门控标记出 8 次对冲传闻写入中的 5 次。

## 关键词

#事实洗涤 #AI记忆 #可核查性 #开源工具
