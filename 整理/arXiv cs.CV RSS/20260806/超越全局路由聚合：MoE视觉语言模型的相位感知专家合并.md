---
published: 2026-08-06
title: 超越全局路由聚合：MoE视觉语言模型的相位感知专家合并
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Beyond Global Routing Aggregation- Phase-Aware Expert Merging for MoE Vision-Language Models.md
source_note: "[[信息源/arXiv cs.CV RSS/Beyond Global Routing Aggregation- Phase-Aware Expert Merging for MoE Vision-Language Models|查看原始文件]]"
source_sha256: ba851c0d3d8352715c56350b81df9d06337678889f7706350875f5504913de42
original_url: https://arxiv.org/abs/2608.04454
processed: 2026-08-07
language: zh-CN
---

# 超越全局路由聚合：MoE视觉语言模型的相位感知专家合并

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04454)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Beyond Global Routing Aggregation- Phase-Aware Expert Merging for MoE Vision-Language Models|查看原始文件]]

## 摘要

- 混合专家视觉语言模型（MoE-VLM）通过稀疏专家激活增加模型容量，但部署需存储完整专家池；免训练专家合并可减轻负担，但许多基于路由的方法聚合所有令牌的路由统计来决定合并兼容性。
- 观察到 MoE-VLM 推理具有相位结构：图像上下文令牌承载视觉内容、问题令牌指定查询、答案令牌产生输出，数量与路由分布各异；由于图像上下文令牌数量多得多，全局聚合会过度强调图像上下文处理并掩盖相位条件化的专家角色。
- 提出免训练方法 RoleMerge：从相位归一化路由统计构建每个专家的路由角色画像（RRP），在专家-相位信息损失引导下合并兼容画像的专家及相应路由条目，同时保留答案解码专家的区分度；三个模型多个基准上，在相同专家保留率下六任务宏平均性能相对提升最高 9.6%。

## 正文

混合专家视觉语言模型（Mixture-of-experts vision-language models, MoE-VLMs）通过稀疏专家激活增加模型容量，然而部署需要存储完整的专家池。免训练的专家合并可以减轻这一负担，许多基于路由的方法聚合所有令牌的路由统计以确定合并兼容性。然而，MoE-VLM 的推理是相位结构化的：图像上下文令牌承载视觉内容，问题令牌指定查询，答案令牌产生输出，它们的数量与路由分布各不相同。由于图像上下文令牌数量多得多，全局聚合可能过度强调图像上下文处理，并掩盖相位条件化的专家角色，使服务于不同相位的专家看起来可互换，从而降低模型性能。因此，本文认为 MoE-VLM 专家合并应保留相位条件化的专家角色，通过专家如何服务于不同相位来判断兼容性，而非依据全局聚合的路由统计。基于这一观点，本文提出 RoleMerge，一种免训练方法，从相位归一化的路由统计中构建每个专家的路由角色画像（Routing Role Profile, RRP），捕捉其相对的相位偏好。在专家-相位信息损失的引导下，RoleMerge 合并具有兼容画像的专家及其对应的路由条目，同时保留答案解码专家的区分度。在三个模型和多个基准上的实验表明，在匹配的专家保留率下，RoleMerge 比替代专家合并方法保留了更多完整模型的性能，在六任务宏平均性能上相对提升最高达 9.6%。这些结果验证了相位条件化的专家角色是比全局路由聚合更有效的 MoE-VLM 专家合并依据。

## 关键词

#混合专家 #视觉语言模型 #模型合并 #模型压缩 #稀疏激活 #路由
