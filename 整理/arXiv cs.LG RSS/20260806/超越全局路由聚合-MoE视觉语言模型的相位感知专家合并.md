---
published: 2026-08-06
title: 超越全局路由聚合：MoE视觉语言模型的相位感知专家合并
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Beyond Global Routing Aggregation- Phase-Aware Expert Merging for MoE Vision-Language Models.md
source_note: "[[信息源/arXiv cs.LG RSS/Beyond Global Routing Aggregation- Phase-Aware Expert Merging for MoE Vision-Language Models]]"
source_sha256: ee612539cb9687b7ac03b324129f2c1b634f17e67cea6ec7d669fe9e64e27ce2
original_url: https://arxiv.org/abs/2608.04454
processed: 2026-08-07
language: zh-CN
---

# 超越全局路由聚合：MoE视觉语言模型的相位感知专家合并

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04454)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Beyond Global Routing Aggregation- Phase-Aware Expert Merging for MoE Vision-Language Models|查看原始文件]]

## 摘要

- 指出 MoE-VLM 推理具有相位结构，全局路由聚合会过度强调图像上下文处理、掩盖相位条件下的专家角色，导致合并后性能下降。
- 提出免训练的 RoleMerge：从相位归一化路由统计构建专家的路由角色画像（RRP），在专家-相位信息损失引导下合并兼容专家。
- 在三个模型与多个基准上，匹配专家保留率下比替代方法保留更多性能，六任务平均性能相对提升最高 9.6%。

## 正文

混合专家视觉语言模型（Mixture-of-experts vision-language models, MoE-VLMs）通过稀疏专家激活增加模型容量，但部署时要求存储全部专家池。免训练的专家合并可以减轻这一负担，许多基于路由的方法聚合所有 token 上的路由统计信息以确定合并兼容性。

然而，MoE-VLM 推理是相位结构的（phase-structured）：图像上下文 token 承载视觉内容，问题 token 指明查询，答案 token 产生输出，它们具有不同的数量和路由分布。由于图像上下文 token 数量要多得多，全局聚合可能过度强调图像上下文处理并掩盖相位条件下的专家角色，使服务不同相位的专家看起来可以互换，从而降低模型性能。

因此我们认为，MoE-VLM 的专家合并应保留相位条件下的专家角色，根据专家如何服务不同相位而非全局聚合的路由统计信息来判断兼容性。基于这一观点，我们提出 RoleMerge，一种免训练方法，它从相位归一化的路由统计信息中为每个专家构建路由角色画像（Routing Role Profile, RRP），捕捉其相对的相位偏好。在专家-相位信息损失（expert-phase information loss）的引导下，RoleMerge 合并具有兼容画像的专家及其相应的路由条目，同时保留答案解码专家的区分度。

在三个模型和多个基准上的实验表明，在匹配的专家保留率下，RoleMerge 比替代的专家合并方法保留了完整模型更多的性能，在六个任务的平均性能（six-task macro-average）上相对提升高达 9.6%。这些结果验证了相位条件下的专家角色是 MoE-VLM 专家合并比全局路由聚合更有效的基础。

## 关键词

#混合专家 #视觉语言模型 #专家合并 #模型压缩 #路由
