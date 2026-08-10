---
published: 2026-08-07
title: "超越帧选择：用 MLLM 重新思考长视频理解"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Beyond Frame Selection- Rethinking Long-Video Understanding with MLLMs.md"
source_note: "[[信息源/arXiv cs.CV RSS/Beyond Frame Selection- Rethinking Long-Video Understanding with MLLMs]]"
source_sha256: c0ab7e85f52fcbb3a68ae9cc16639869730107969108f155144be8ed33b168de
original_url: "https://arxiv.org/abs/2608.05592"
processed: 2026-08-07
language: zh-CN
---

# 超越帧选择：用 MLLM 重新思考长视频理解

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Ziling Huang, Shin'ichi Satoh
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05592)

## 摘要

- 多模态大语言模型（MLLM）在视频理解取得强进展，但 token 限制使 MLLM 难以捕捉时间稀疏证据；现有方法通常依赖均匀采样或帧选择，这些策略通常优化广时间覆盖或局部相关性，难以同时保留全局故事情节上下文与细粒度证据。
- 提出 VideoRouter（VR）：将长视频理解重新构想为协调互补证据视图而非选择单一帧子集。
- 先将每个视频组织为问题无关的时间层级：划分视频为粗到细的时间连贯段；层级中上层节点捕捉宽故事情节上下文与事件进展，下层节点保留细粒度局部细节与证据承载时刻；自然产生两个互补视图：覆盖导向推理的全局视图与细节导向证据恢复的局部视图。
- 引入验证引导路由器确定哪个视图得到所选证据更好支持并选择最终答案；广泛实验验证设计有效性：VideoMME 上（LLaVA-Video-7B 骨干）方法以 2.9 点超越 SOTA 帧选择方法；代码将发布。

## 正文

多模态大语言模型（MLLMs）在视频理解方面取得强劲进展，然而由于 token 限制，MLLM 难以捕捉时间上稀疏的证据。现有方法通常依赖均匀采样或帧选择，但这些策略通常要么优化宽时间覆盖、要么优化局部相关性，难以同时保留全局故事情节上下文与细粒度证据。研究提出 VideoRouter（VR），将长视频理解重新构想为协调互补的证据视图，而非选择单一帧子集。它首先将每个视频组织为一个问题无关的时间层级，把视频划分为粗到细、时间连贯的段。在该层级中，上层节点捕捉宽故事情节上下文与事件进展，而下层节点保留细粒度的局部细节与承载证据的时刻。这自然产生两个互补视图：用于覆盖导向推理的全局视图，与用于细节导向证据恢复的局部视图。研究进一步引入一个验证引导路由器，确定哪个视图得到所选证据更好的支持，并选择最终答案。研究通过大量实验验证所提设计的有效性，显示验证引导路由器有效协调全局与局部推理，且 VideoMME 上（LLaVA-Video-7B 骨干）方法以 2.9 点超越最先进帧选择方法。代码将发布。

## 关键词

长视频理解、MLLM、时间层级、帧选择、验证引导
