---
published: 2026-08-07
title: "EmoWorld：可控情感视频生成的解耦情感场"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/EmoWorld- A Decoupled Affective Field for Controllable Emotional Video Generation.md"
source_note: "[[信息源/arXiv cs.CV RSS/EmoWorld- A Decoupled Affective Field for Controllable Emotional Video Generation]]"
source_sha256: 01a585fce91e28ee1df222571ff962988ae15844654d24eadecc6dd26f154769
original_url: "https://arxiv.org/abs/2608.06231"
processed: 2026-08-07
language: zh-CN
---

# EmoWorld：可控情感视频生成的解耦情感场

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Bingyuan Wang, Baistan Zhyldyzbekov, Kunyu Feng, Zeyu Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06231)

## 摘要

- 情感塑造观众对场景的解读，现有视频生成器将全局氛围、承载情感的语义线索与时间进展纠缠在单一文本条件中。
- 提出 EmoWorld：冻结流匹配视频扩散 transformer（Video DiT）内解耦这些因素的框架；一次性准备阶段从保几何中性与情感编辑全景提取逐层情感方向与可复用线索库。
- 推理时视觉氛围引导（VAS）将氛围方向注入隐藏状态，语义情感引导（SAS）隔离可独立缩放的提示残差用于语义线索，时间情感引导（TAS）跨去噪与视频时间插值端点残差场。
- Wan2.2 上 VAS 提升目标情感对齐 19% 同时降低时间波动代理 48%；SAS 提升目标情感对齐 37%、检测情感线索增加 36%；TAS 相对最强基线改进过渡单调性 15%；27 个情感类别文本到视频与图像到视频设定评估，跨多个 Video-DiT 骨干可移植，支持无需更新生成器参数的相机条件化组合。

## 正文

情感塑造观众如何解读场景，然而现有视频生成器将全局氛围、承载情感的语义线索与时间进展纠缠在单一文本条件中。研究提出 EmoWorld，一个在冻结流匹配视频扩散 transformer（Video DiT）内解耦这些因素的框架。一次性准备阶段从保几何的中性与情感编辑全景中提取逐层情感方向与可复用线索库。推理时，视觉氛围引导（Visual Atmosphere Steering, VAS）将氛围方向注入隐藏状态；语义情感引导（Semantic Affective Steering, SAS）为语义线索隔离一个可独立缩放的提示残差；时间情感引导（Temporal Affective Steering, TAS）跨去噪与视频时间插值端点残差场。在 Wan2.2 上，VAS 将目标情感对齐提升 19%，同时将时间波动代理降低 48%；SAS 将目标情感对齐提升 37%，并将检测到的情感线索增加 36%；TAS 相对最强基线将过渡单调性改进 15%。EmoWorld 在文本到视频与图像到视频设定的 27 个情感类别中评估，展示跨多个 Video-DiT 骨干的可移植性，并支持无需更新生成器参数的相机条件化组合。

## 关键词

情感视频生成、解耦、引导、Video DiT、可控生成
