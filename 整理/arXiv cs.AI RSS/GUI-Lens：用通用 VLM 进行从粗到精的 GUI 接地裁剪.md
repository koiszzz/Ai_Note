---
title: "GUI-Lens：用通用 VLM 进行从粗到精的 GUI 接地裁剪"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GUI-Lens- Coarse-to-Fine Cropping for GUI Grounding with General-Purpose VLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/GUI-Lens- Coarse-to-Fine Cropping for GUI Grounding with General-Purpose VLMs]]"
source_sha256: 715f065badb24e7f39229dab7c66e43d49558e75210aa53a99c6ef96a0c9f59a
original_url: "https://arxiv.org/abs/2608.03270"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# GUI-Lens：用通用 VLM 进行从粗到精的 GUI 接地裁剪

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zichuan Fu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03270)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GUI-Lens- Coarse-to-Fine Cropping for GUI Grounding with General-Purpose VLMs|查看原始文件]]

## 摘要

- 提出 GUI-Lens，从粗到精的接地框架：允许通用 VLM 通过主动视觉观察确定目标——提取截图中的 OCR 文本与检测到的 UI 组件并把位置作为坐标参考，VLM 结合指令、当前视图与这些参考选择下一视图的区域与尺度，裁剪放大提供更细视觉细节，逐视图聚焦直至确定目标。
- 整个过程中提议的裁剪与点击都与指令核对，最终局部位置映射回原始屏幕坐标。
- 在四个 GUI 接地基准与三个通用 VLM 骨干上，GUI-Lens 整体接地准确率提升最高 24.9 个百分点，并在 GPT-5.5 上取得最先进性能。

## 正文

论文编号：arXiv:2608.03270v1（更新类型：cross）。以下为摘要全文翻译。

GUI 接地把自然语言指令映射到点击位置，是可靠 GUI 智能体的关键。该任务在高分辨率、元素密集的界面上仍然困难，因为视觉-语言模型（VLM）可能识别出被请求的控件，却无法足够精确地定位以进行交互。大多数现有方法提供各种形式的定位辅助，但仍依赖直接点击预测，使视觉歧义或不准确的初始估计传播到最终结果。在本文中，我们介绍 GUI-Lens，一个从粗到精的接地框架，允许通用 VLM 通过主动视觉观察确定目标。具体而言，GUI-Lens 从截图中提取 OCR 文本与检测到的 UI 组件，并把它们的位置呈现为坐标参考。利用指令、当前视图与这些参考，VLM 选择下一视图的区域与尺度，该区域被裁剪并放大以提供更细的视觉细节。这个过程在连续聚焦的视图上持续，直到确定目标。提议的裁剪与点击在整个过程中与指令核对，最终的局部位置被映射回原始屏幕坐标。在四个 GUI 接地基准与三个通用 VLM 骨干上的实验表明，GUI-Lens 把整体接地准确率提升最高 24.9 个百分点，并在 GPT-5.5 上取得最先进性能。

## 关键词

#GUI智能体 #视觉接地 #VLM #从粗到精
