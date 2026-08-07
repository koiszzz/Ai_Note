---
published: 2026-08-06
title: Q-CueGraph：面向多模态推理的查询条件化视觉证据图
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning.md
source_note: "[[信息源/arXiv cs.CL RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning]]"
source_sha256: 9eab926aeb84f2dbfb19066fdb37d55f792f3672ca42f0a16d4d9138fb6b9eb1
original_url: https://arxiv.org/abs/2608.04452
processed: 2026-08-07
language: zh-CN
---

# Q-CueGraph：面向多模态推理的查询条件化视觉证据图

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04452)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning|查看原始文件]]

## 摘要

- Q-CueGraph 将问题与图像表征映射为冻结阅读器的有预算、坐标级观测，显式化"在何处检视"的决策
- 文本密集型图像使用可复用 OCR/布局图；自然图像搜索实例化查询条件化视觉节点
- 以 19% 图像面积预算在 V*Bench 上达 0.833 准确率（全图推理 0.696），在 InfographicVQA 上以约一半面积达全图 ANLS 的 92%

## 正文

高分辨率像素和裁剪或缩放工具赋予多模态大语言模型检视图像的能力，但并未提供决定在何处检视的可靠任务条件化策略。Q-CueGraph 使这一决策显式化。它将一个问题和一个图像表征映射为冻结阅读器的有预算、坐标级观测。

文本密集型图像使用可复用的 OCR/布局图；自然图像搜索在相同的选择、组合和预算接口背后实例化查询条件化视觉节点。可选的效用精化利用训练答案的正确性来学习冻结阅读器可以利用哪些候选裁剪，无需区域框监督。

在使用冻结的 Qwen2.5-VL-7B 阅读器时，Q-CueGraph 在 V*Bench 上以 19% 图像面积预算达到 0.833 的准确率，而全图推理为 0.696；在 InfographicVQA 上以约一半图像面积达到全图 ANLS 的 92%。在六个基准上，当证据可定位、问题能区分其位置、且分辨率限制全图阅读时，显式观测最有价值。

## 关键词

#Q-CueGraph #多模态推理 #视觉证据图 #OCR #VLM
