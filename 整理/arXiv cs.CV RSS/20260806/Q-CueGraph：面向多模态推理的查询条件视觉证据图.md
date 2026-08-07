---
published: 2026-08-06
title: Q-CueGraph：面向多模态推理的查询条件视觉证据图
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning.md
source_note: "[[信息源/arXiv cs.CV RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning]]"
source_sha256: b212d23b2b232a5e9ef2c3050b6ec1a9e961a44414a92a7dcee58a245e9d3db9
original_url: https://arxiv.org/abs/2608.04452
processed: 2026-08-07
language: zh-CN
---

# Q-CueGraph：面向多模态推理的查询条件视觉证据图

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04452)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning|查看原始文件]]

## 摘要

- 提出 Q-CueGraph：将问题与图像表示映射为面向冻结阅读器的预算化、坐标级观测，显式决定"在哪里检查"。
- 文本密集图像用可复用 OCR/布局图，自然图像搜索在相同接口背后实例化查询条件视觉节点；可选效用精炼无需区域框监督。
- 冻结 Qwen2.5-VL-7B 阅读器在 V*Bench 以 19% 面积预算达 0.833（全图 0.696），InfographicVQA 以约一半面积达全图 ANLS 的 92%。

## 正文

高分辨率像素以及裁剪或缩放工具赋予多模态大语言模型检查图像的能力，但它们并未提供可靠的、任务条件化的策略来决定检查何处。Q-CueGraph 使这一决策显式化。它将问题与图像表示映射为面向冻结阅读器的、有预算的、坐标级观测。文本密集图像使用可复用的 OCR/布局图；自然图像搜索在同一选择、组合和预算接口背后实例化查询条件的视觉节点。可选的效用精炼从训练-答案正确性学习冻结阅读器可用哪些候选裁剪，无需区域框监督。使用冻结的 Qwen2.5-VL-7B 阅读器，Q-CueGraph 在 V*Bench 上以 19% 的图像面积预算达到 0.833 的准确率（全图推理为 0.696），并在 InfographicVQA 上以约一半的图像面积达到全图 ANLS 的 92%。在六个基准上，显式观测在证据可定位、问题能判别其位置且分辨率限制全图阅读时最具价值。

## 关键词

#多模态推理 #视觉证据 #查询条件化 #文档理解 #多模态大语言模型
