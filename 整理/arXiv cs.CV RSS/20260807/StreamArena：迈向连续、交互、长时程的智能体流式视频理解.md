---
published: 2026-08-07
title: "StreamArena：迈向连续、交互、长时程的智能体流式视频理解"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/StreamArena- Toward Continuous, Interactive, and Long-Horizon Agentic Streaming Video Understanding.md"
source_note: "[[信息源/arXiv cs.CV RSS/StreamArena- Toward Continuous, Interactive, and Long-Horizon Agentic Streaming Video Understanding]]"
source_sha256: f1ef054f136573b0192d9e2e731dd769bece9a4d53493f6a32ac9849b104541f
original_url: "https://arxiv.org/abs/2608.05703"
processed: 2026-08-07
language: zh-CN
---

# StreamArena：迈向连续、交互、长时程的智能体流式视频理解

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Xichen Zhang, Guankai Li, Yinghao Zhu, Shijian Wang, Sitong Wu, Shaozuo Yu, Meng Chu, Yuan Lu, Jiaya Jia
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05703)

## 摘要

- 在连续真实环境中部署自主多模态智能体要求它们摄取无界音视频流并保持小时级记忆；当前评估主要依赖短视频片段与多项选择格式。
- 该设计允许只处理最后四帧的最小基线匹配或超越复杂流式模型，答案选项还暴露语言捷径。
- 引入 StreamArena：小时级、交互式流式视频理解基准；含 243 个全长视频（平均 88.8 分钟）与 3646 个严格标注开放问答对，评估实时感知、历史回溯、主动交互与多模态工具利用。
- 跨多样系统评估暴露连续交互与长时程多模态理解间的张力：只保留近期帧的方法无法恢复遥远事件、将过去观测转为文本的方法丢失视觉证据、反复压缩视觉记忆的方法难以随时间保留细粒度细节；用 StreamMind 应对：双层架构，将延迟关键交互与主动监控分配给独立调度前端工作器，后端工作器异步构建持久多模态记忆并执行历史回溯与外部搜索；StreamMind 在全部四项能力上超越现有流式基线，并复用持久状态降低查询到答案延迟。

## 正文

在连续、真实世界环境中部署自主多模态智能体，要求它们摄取无界的音视频流并保持小时级记忆。然而，当前评估主要依赖短视频片段与多项选择格式。这种设计允许只处理最后四帧的最小基线匹配或超越复杂的流式模型，而答案选项也暴露语言捷径。研究引入 StreamArena，一个用于小时级、交互式流式视频理解的基准。StreamArena 包含 243 个全长视频（平均 88.8 分钟）与 3,646 个严格标注的开放式问答对，评估实时感知、历史回溯、主动交互与多模态工具利用。跨多样系统的评估暴露了连续交互与长时程多模态理解之间的张力。只保留近期帧的方法无法恢复遥远事件；将过去观测转换为文本的方法丢失视觉证据；反复压缩视觉记忆的方法难以随时间保留细粒度细节。研究用 StreamMind 应对该张力：一个双层架构，将延迟关键的交互与主动监控分配给独立调度的前端工作器，而后端工作器异步构建持久的多模态记忆并执行历史回溯与外部搜索。StreamMind 在全部四项能力上超越现有流式基线，并通过复用持久状态降低查询到答案的延迟。

## 关键词

流式视频理解、智能体、长时程、多模态记忆、基准
