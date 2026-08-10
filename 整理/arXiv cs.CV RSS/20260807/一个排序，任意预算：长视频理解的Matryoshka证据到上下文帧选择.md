---
published: 2026-08-07
title: "一个排序，任意预算：长视频理解的 Matryoshka 证据到上下文帧选择"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/One Ranking, Any Budget- Matryoshka Evidence-to-Context Frame Selection for Long-Video Understanding.md"
source_note: "[[信息源/arXiv cs.CV RSS/One Ranking, Any Budget- Matryoshka Evidence-to-Context Frame Selection for Long-Video Understanding]]"
source_sha256: 7abd7f124ff28225cad4d2e286d523dc750837984b3d3a59b2c97ffe4c3ee6b4
original_url: "https://arxiv.org/abs/2608.05707"
processed: 2026-08-07
language: zh-CN
---

# 一个排序，任意预算：长视频理解的 Matryoshka 证据到上下文帧选择

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Wang Chen, Yu Chen, Xiang Wang, Shuai Li, Jinfa Huang, Xiawu Zheng
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05707)

## 摘要

- 帧选择对将大多模态模型（LMM）应用于长视频必不可少（严重帧冗余与有限上下文窗口）；适当帧预算随下游 LMM、推理需求与延迟约束变化，实用选择器应服务多个预算。
- 现有方法通常为每个预定义预算优化孤立帧子集：预算变化时先前选择证据可能被替换而非渐进增广；按固定分数排序帧允许跨预算前缀复用，但忽略不同排序位置的不同角色。
- 将长视频帧选择形式化为 Matryoshka 排序问题：构建单一优先级序列，其小前缀集中查询条件化证据，渐进更大前缀保留证据并添加更广时间上下文；高效构建此类排序本身具挑战（稠密采样长视频与评估帧-查询相关性开销大）。
- 引入 Matryoshka 证据到上下文（MEC）帧选择：免训练框架，构建可复用稀疏视频索引、经稀疏探测与局部缩放发现候选、贪心构建位置自适应排序：早位置强调证据，晚位置渐进偏好时间覆盖同时保留视觉多样性；单一排序可截断到任意目标预算而无需重跑选择器；四个基准六个帧预算下相对均匀采样平均准确率提升 3.77 个百分点，匹配强 SOTA 选择器，端到端选择延迟降低 47.37–51.19%。

## 正文

帧选择对于将大多模态模型（LMMs）应用于长视频必不可少，因为帧冗余严重且上下文窗口有限。由于适当的帧预算随下游 LMM、推理需求与延迟约束而变化，一个实用的选择器应服务多个预算。然而，现有方法通常为每个预定义预算优化一个孤立的帧子集：当预算变化时，先前选择的证据可能被替换而非渐进增广。按固定分数对帧排序将允许跨预算前缀复用，但它忽略不同排序位置的不同角色。本文将长视频帧选择形式化为一个 Matryoshka 排序问题：构建一个单一优先级序列，其小前缀集中查询条件化的证据，而渐进更大的前缀保留该证据并添加更广的时间上下文。高效构建这样的排序本身具有挑战性，因为稠密采样长视频并评估帧-查询相关性会产生大量开销。因此研究引入 Matryoshka 证据到上下文（Matryoshka Evidence-to-Context, MEC）帧选择，一个免训练框架：构建一个可复用的稀疏视频索引，通过稀疏探测与局部缩放发现候选，并贪心构建一个位置自适应排序——早期位置强调证据，后期位置渐进偏好时间覆盖，同时保留视觉多样性。因此，单一排序可被截断到任何目标预算，无需重跑选择器。跨四个基准与六个帧预算，MEC 相对均匀采样将平均准确率提升 3.77 个百分点，匹配强最先进选择器，并将端到端选择延迟降低 47.37–51.19%。

## 关键词

帧选择、长视频、Matryoshka、LMM、高效推理
