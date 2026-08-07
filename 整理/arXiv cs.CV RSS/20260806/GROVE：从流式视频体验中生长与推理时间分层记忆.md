---
published: 2026-08-06
title: GROVE：从流式视频体验中生长与推理时间分层记忆
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/GROVE- Growing and Reasoning over Temporally Stratified Memory from Streaming Video Experience.md
source_note: "[[信息源/arXiv cs.CV RSS/GROVE- Growing and Reasoning over Temporally Stratified Memory from Streaming Video Experience]]"
source_sha256: cbe7588e0e2cac82b7464194181f9dc947d26148284d618c8f3f72dd14d82cb2
original_url: https://arxiv.org/abs/2608.02392
processed: 2026-08-07
language: zh-CN
---

# GROVE：从流式视频体验中生长与推理时间分层记忆

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02392)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/GROVE- Growing and Reasoning over Temporally Stratified Memory from Streaming Video Experience|查看原始文件]]

## 摘要

- 提出 GROVE：免训练的框架，用单一从连续视频流因果生长的记忆同时支持反应式问答与主动式辅助
- 记忆保留细粒度感知证据并逐步整合为带时间戳的时刻、连贯片段与反复出现的跨日模式，每层配尺度原生检索技能；主动与反应行为仅取决于检索由用户查询还是当前情境发起
- 在 MM-lifelong、EgoServe 等基准上取得最佳结果；受控消融显示时间分层与访问技能互补，证据跨越多天时模式层收益最大

## 正文

可穿戴助手既应能回答关于其视觉历史的问题，也应能识别该历史对当前情境何时有用。现有视频记忆系统主要支持以问题为条件的回忆，而主动式助手的典型做法是使用独立的记忆与控制机制。我们提出 GROVE，一个免训练框架，用单一从连续视频流因果生长出的记忆同时支持这两种行为。GROVE 保留细粒度的感知证据，并逐步将其整合为带时间戳的时刻（time-stamped moments）、连贯的片段（coherent episodes）和反复出现的跨日模式（recurring cross-day patterns）。每一层都配有一个尺度原生检索技能（scale-native retrieval skill），用于定位观察、回放活动或遍历长期规律。反应式问答（QA）与主动式辅助共享这一记忆与访问接口，区别仅在于检索是由用户查询还是当前情境发起。在包括极具挑战性的 MM-lifelong 和 EgoServe 在内的多个基准上，GROVE 在对比方法中取得了最佳结果。受控消融表明，时间分层及其访问技能互补，其中当证据跨越多天时模式层带来最大收益。代码将发布在 https://github.com/SitongGong/GROVE。

## 关键词

#视频记忆 #可穿戴AI #流式视频 #问答系统
