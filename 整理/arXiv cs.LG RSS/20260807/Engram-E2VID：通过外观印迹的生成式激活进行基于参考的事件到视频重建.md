---
published: 2026-08-07
title: "Engram-E2VID：通过外观印迹的生成式激活进行基于参考的事件到视频重建"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Engram-E2VID- Reference-Based Event-to-Video Reconstruction via Generative Activation of Appearance .md"
source_note: "[[信息源/arXiv cs.LG RSS/Engram-E2VID- Reference-Based Event-to-Video Reconstruction via Generative Activation of Appearance ]]"
source_sha256: 459aa54ddbb6f9d1775685b5c2d2c53c9717e6d759c85c253363f2d5786049f1
original_url: "https://arxiv.org/abs/2608.05728"
processed: 2026-08-07
language: zh-CN
---

# Engram-E2VID：通过外观印迹的生成式激活进行基于参考的事件到视频重建

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Feiyu Ji, Xiang Li, Hao Ma, Tianxiang Huang, Qingxin Lu, Mengqi Ji, Lei Han, Xiaokang Yang, Xiaoyun Yuan
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05728)

## 摘要

- 基于参考的事件到视频重建旨在从参考帧与参考-目标区间的事件流恢复目标 RGB 帧；事件提供细粒度时序线索但编码稀疏异步对数强度变化而非绝对外观。
- 提出 Engram-E2VID：结构引导框架，通过外观印迹的生成式激活重建目标帧；参考帧编码为 token 空间外观印迹，事件流与参考上下文转为捕捉运动边界与事件诱导结构变化的目标时运动结构支架。
- 一步扩散骨干中，支架派生结构 token 逐层与相关外观印迹渐进交互激活，无需直接像素级对应，扩散先验补充不确定或新揭示区域。
- 三个基准上 PSNR 最高提升 3.29 dB、LPIPS 降低最高 0.08，且重建间隔增大时退化更慢。

## 正文

基于参考的事件到视频重建旨在从参考帧与参考-目标区间捕获的事件流恢复目标 RGB 帧。尽管事件提供细粒度时序线索，它们编码的是稀疏、异步的对数强度变化而非绝对外观，使忠实重建固有困难。核心挑战在于将事件派生的目标时结构与参考帧的相关外观信息关联，尤其在复杂运动与长时间间隔下。本文提出 Engram-E2VID，一个结构引导框架，通过外观印迹（appearance engram）的生成式激活重建目标帧。具体地，参考帧被编码为 token 空间的外观印迹，事件流与参考上下文被转化为捕捉运动边界与事件诱导结构变化的目标时运动结构支架。在一步扩散骨干内，支架派生的结构 token 逐层与相关外观印迹渐进交互并激活，使目标结构无需依赖直接像素级对应即可访问参考外观，而扩散先验补充不确定或新揭示的区域。在三个基准上，Engram-E2VID 相对最强同输入基线将 PSNR 提升最高 3.29 dB、LPIPS 降低最高 0.08，且随重建间隔增大退化更慢。

## 关键词

事件相机、视频重建、扩散模型、外观印迹、参考帧
