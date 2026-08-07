---
published: 20260806
title: "Compass：通过原位反思持续对齐社交媒体信息流"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Compass- Continuously Aligning Social Media Feeds via In-Situ Reflections.md"
source_note: "[[信息源/arXiv cs.AI RSS/Compass- Continuously Aligning Social Media Feeds via In-Situ Reflections]]"
source_sha256: efa587747f99a6a24270f4f47b62fbfd304f28a54e43fbf122905f59317e8420
original_url: "https://arxiv.org/abs/2608.04274"
processed: 2026-08-06
language: zh-CN

---

# Compass：通过原位反思持续对齐社交媒体信息流

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Aadit Barua, Leijie Wang, Amy X. Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04274)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Compass- Continuously Aligning Social Media Feeds via In-Situ Reflections|查看原始文件]]

## 摘要

- 社交媒体推荐信息流常优化用户即时冲动而非深度反思后会持有的偏好；一些系统通过配置页或信息流内控制纳入用户显式偏好，但用户偏好通常不断演变，且陈述偏好与行为自然分歧，需要持续反思和信息流重新对齐。
- 本文提出 Compass，一个通过帮助用户反思并表达其偏好（基于其行为）来对齐用户信息流与反思偏好的系统：通过轻量通知浮现原位反思，通过周期模拟行为信号和直接操纵信息流内容实现信息流对齐。
- 将 Compass 嵌入 YouTube Shorts，与无持续支持的基线进行 10 天实地研究（N=15）比较：Compass 促进更反思、更有目的的信息流消费、迭代偏好调整和更强信息流对齐，且不牺牲信息流浏览的随意性。

## 正文

社交媒体推荐信息流常优化用户的即时冲动，而非他们深度反思后会持有的偏好。一些系统通过配置页或信息流内控制纳入用户显式偏好（而非仅行为信号）解决此错位。然而，用户通常有不断演变的偏好，其陈述偏好与行为自然分歧，需要持续反思和信息流重新对齐。但现有策略要求用户主动发起且往往费力；因此实践中很少被调用。我们提出 Compass，一个通过帮助用户基于其行为反思并表达偏好来对齐用户信息流与反思偏好的系统。为在日常浏览中启用持续反思，Compass 通过轻量通知浮现原位反思，而信息流对齐通过周期性模拟行为信号和直接操纵信息流内容实现。我们将 Compass 嵌入 YouTube Shorts，并通过 10 天实地研究（N=15）与无持续支持的基线比较。我们发现 Compass 促进更反思、更有目的的信息流消费、迭代偏好调整和更强信息流对齐，同时不牺牲信息流浏览的随意性。

## 关键词

#社交媒体 #推荐系统 #偏好对齐 #反思 #arXiv