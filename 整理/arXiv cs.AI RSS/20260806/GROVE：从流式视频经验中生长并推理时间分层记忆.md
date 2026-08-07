---
published: 20260806
title: "GROVE：从流式视频经验中生长并推理时间分层记忆"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GROVE- Growing and Reasoning over Temporally Stratified Memory from Streaming Video Experience.md"
source_note: "[[信息源/arXiv cs.AI RSS/GROVE- Growing and Reasoning over Temporally Stratified Memory from Streaming Video Experience]]"
source_sha256: 2d9e1515aff1b32024757212f245f2daeb72a31cbc475326ee471f10f9cd01fd
original_url: "https://arxiv.org/abs/2608.02392"
processed: 2026-08-06
language: zh-CN

---

# GROVE：从流式视频经验中生长并推理时间分层记忆

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sitong Gong, Caixin Kang, Tianyu Yan, Guo Chen, Bo Zheng, Kaipeng Zhang, Yunzhi Zhuge, Xiang Ruan, Huchuan Lu, Yifei Huang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02392)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GROVE- Growing and Reasoning over Temporally Stratified Memory from Streaming Video Experience|查看原始文件]]

## 摘要

- 可穿戴助手应能回答关于其视觉历史的问题，并识别该历史何时对当前情境有用；现有视频记忆系统主要支持问题条件回忆，而主动助手通常使用分离的记忆和控制机制。
- 本文引入 GROVE，一个免训练框架，用一个从连续视频流因果生长的记忆支持两种行为：保留细粒度感知证据，并增量整合为带时间戳时刻、连贯情节和反复跨日模式。
- 每层配对规模原生检索技能，用于定位观测、重放活动或遍历长程规律；反应式 QA 和主动式协助共享此记忆和访问界面，区别仅在于检索由用户查询还是当前情境发起；跨多个基准（含挑战性 MM-lifelong 和 EgoServe），GROVE 在所比较方法中达最佳结果。

## 正文

可穿戴助手应能回答关于其视觉历史的问题，并识别该历史何时对当前情境有用。现有视频记忆系统主要支持问题条件回忆，而主动助手通常使用分离的记忆和控制机制。我们引入 GROVE，一个免训练框架，用一个从连续视频流因果生长的记忆支持两种行为。GROVE 保留细粒度感知证据，并增量将其整合为带时间戳的时刻、连贯情节和反复的跨日模式。每层配对规模原生检索技能，用于定位观测、重放活动或遍历长程规律。反应式 QA 和主动式协助共享此记忆和访问界面，区别仅在于检索由用户查询还是当前情境发起。跨多个基准，包括挑战性的 MM-lifelong 和 EgoServe，GROVE 在所比较方法中达到最佳结果。受控消融表明，时间分层及其访问技能互补，证据跨多天时模式提供最大收益。代码将在此获取：https://github.com/SitongGong/GROVE。

## 关键词

#视频记忆 #可穿戴助手 #时间记忆 #主动协助 #arXiv