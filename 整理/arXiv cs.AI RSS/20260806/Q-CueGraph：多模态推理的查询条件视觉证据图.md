---
published: 20260806
title: "Q-CueGraph：多模态推理的查询条件视觉证据图"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning]]"
source_sha256: a7687ca9f0f4466d5b088e943d45c19ef9407715e9c3af14adaf0b3753a268a6
original_url: "https://arxiv.org/abs/2608.04452"
processed: 2026-08-06
language: zh-CN

---

# Q-CueGraph：多模态推理的查询条件视觉证据图

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Pengcheng Pan, Xinfang Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04452)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Q-CueGraph- Query-Conditioned Visual Evidence Graphs for Multimodal Reasoning|查看原始文件]]

## 摘要

- 高分辨率像素和裁剪或缩放工具给多模态大语言模型检查图像的能力，但不提供决定检查何处的可靠任务条件策略；Q-CueGraph 使此决策显式：将问题和图像表示映射到冻结阅读器的预算、坐标级观测。
- 文本丰富图像用可复用 OCR/布局图；自然图像搜索在同一选择、组合和预算接口后实例化查询条件视觉节点；可选效用精炼从训练答案正确性学习冻结阅读器可用哪些候选裁剪，无需区域框监督。
- 冻结 Qwen2.5-VL-7B 阅读器下，Q-CueGraph 在 V*Bench 达 0.833 准确率（全图像推理 0.696），从 19% 图像面积预算；InfographicVQA 上约一半图像面积达全图像 ANLS 的 92%；六个基准中，显式观测在证据可定位、问题区分其位置且分辨率限制全图像阅读时最有价值。

## 正文

高分辨率像素和裁剪或缩放工具给多模态大语言模型检查图像的能力，但它们不提供决定检查何处的可靠任务条件策略。Q-CueGraph 使此决策显式。它将问题和图像表示映射到冻结阅读器的预算、坐标级观测。文本丰富图像使用可复用 OCR/布局图；自然图像搜索在同一选择、组合和预算接口后实例化查询条件视觉节点。可选效用精炼从训练答案正确性学习冻结阅读器可用哪些候选裁剪，无需区域框监督。冻结 Qwen2.5-VL-7B 阅读器下，Q-CueGraph 在 V*Bench 从 19% 图像面积预算达 0.833 准确率，对比全图像推理 0.696，并在 InfographicVQA 上从约一半图像面积达全图像 ANLS 的 92%。跨六个基准，显式观测在证据可定位、问题区分其位置且分辨率限制全图像阅读时最有价值。

## 关键词

#多模态推理 #视觉证据 #查询条件 #观测选择 #arXiv