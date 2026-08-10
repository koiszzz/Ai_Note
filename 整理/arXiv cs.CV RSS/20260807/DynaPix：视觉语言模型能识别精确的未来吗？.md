---
published: 2026-08-07
title: "DynaPix：视觉语言模型能识别精确的未来吗？"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DynaPix- Can Vision-Language Models Identify the Exact Future-.md"
source_note: "[[信息源/arXiv cs.CV RSS/DynaPix- Can Vision-Language Models Identify the Exact Future-]]"
source_sha256: 4cafb7749b48e8312136aa7c1aed08f2c87c2e215db8d5604df372acf79ce45a
original_url: "https://arxiv.org/abs/2608.05505"
processed: 2026-08-07
language: zh-CN
---

# DynaPix：视觉语言模型能识别精确的未来吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Thong Nguyen, Vinh-Hien Do, Quynh Vo, Cong-Duy Nguyen, See-Kiong Ng
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05505)

## 摘要

- 在物理场景中行动需要知道其真实的后继状态，而非看似合理的状态；当前评估常接受文字或看似真实的图像，因此预测状态从未对照真实状态检查。
- 引入 DynaPix（动态像素）：使预测可检查的基准；给定在关键事件前停止的视频片段与关于后续时刻的问题，模型必须从接近候选或大画廊中挑选真实未来图像。
- 场景来自物理模拟器，正确图像与其时间精确已知，错误选项刻意相似；模型在可见事件标记目标时刻时常常成功，但仅经过时间标记时近乎机会水平；画廊搜索更难，真图很少排名第一。
- 人类处理经过时间项良好，困难在模型而非问题；用模拟器真实记录（而非教师猜测）绘制的场景账户训练修复大部分，但不修复更长的经过时间情形；DynaPix 暴露时间锚定差距：模型将预测附着到事件远好于附着到时间本身。

## 正文

在物理场景中行动需要知道其真实的后继状态，而非一个看似合理的状态。当前评估常常接受文字或一个看似真实的图像，因此预测状态从未对照真实状态检查。研究引入 DynaPix（动态像素，Dynamic Pixels），一个使预测可检查的基准。给定一个在关键事件前停止的视频片段，以及一个关于后续时刻的问题，模型必须从接近候选或大画廊中挑选真实的未来图像。场景来自物理模拟器，因此正确图像及其时间精确已知，错误选项被刻意设为相似。模型在可见事件标记目标时刻时常常成功，但仅由经过时间标记时近乎机会水平。画廊搜索更难，真实图像很少排名第一。人类处理经过时间项良好，因此困难在于模型而非问题。用从模拟器真实记录（而非教师猜测）绘制的场景账户进行训练修复了大部分，但不修复更长的经过时间情形。DynaPix 因此暴露一个时间锚定（temporal-anchoring）差距：模型将预测附着到事件远好于附着到时间本身。

## 关键词

视频预测、未来识别、基准、时间锚定、物理模拟
