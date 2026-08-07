---
published: 2026-08-06
title: SIGNPOST-Bench：多模态大语言模型中文本-视觉冲突消解的基准测试
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/SIGNPOST-Bench- Benchmarking Text-Vision Conflict Resolution in Multimodal Large Language Models.md
source_note: "[[信息源/arXiv cs.CL RSS/SIGNPOST-Bench- Benchmarking Text-Vision Conflict Resolution in Multimodal Large Language Models]]"
source_sha256: 961cb0eca590e40e8b1ec78532926298626a8dad92293588b2f8e2b59509059f
original_url: https://arxiv.org/abs/2608.04244
processed: 2026-08-07
language: zh-CN
---

# SIGNPOST-Bench：多模态大语言模型中文本-视觉冲突消解的基准测试

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04244)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/SIGNPOST-Bench- Benchmarking Text-Vision Conflict Resolution in Multimodal Large Language Models|查看原始文件]]

## 摘要

- 多模态大语言模型（MLLM）结合视觉与文本线索在真实场景中做出有依据的预测，但现有基准很少揭示二者冲突时模型如何裁决。
- 引入 SIGNPOST-Bench——一个用于评估文本-视觉冲突消解的受控反事实基准：每张源图像被变换为 Original、Blank、Similar、Random、Adversarial 五种反事实变体；合成、局部的场景文本干预被设计为保留非文本内容，从而能配对测量定位性能变化与冲突文本引入的、朝地理目标的定向偏移。
- SIGNPOST-Bench 包含来自四个数据集的 5111 个反事实组和 25555 个图像变体；评估了来自七个提供商的 20 个 MLLM。
- 相比 Original 图像，Adversarial 变体将定位误差中位数从 282 km 抬升至 1347 km（4.8 倍）；在可地理编码的对抗样本中，各模型有 6.5-20.1% 的预测距注入目标不足 50 km，且每个受测模型在 Blank 到 Adversarial 之间都表现出目标距离的正向平均配对缩减。
- 兼容、无关与冲突的文本替换对模型预测产生不同影响，而干净输入下的定位性能不能完全预测对冲突文本的鲁棒性；结果将视觉地理定位确立为场景文本裁决的连续诊断，并提供了受控的评估框架。

## 正文

本文编号：arXiv:2608.04244v1（公告类型：cross），以下为摘要全文翻译。

多模态大语言模型（MLLM）通过结合视觉和文本线索在真实世界场景中做出有依据的预测，然而现有基准很少揭示这些证据来源相互冲突时模型如何裁决。我们引入 SIGNPOST-Bench——一个用于评估文本-视觉冲突消解的受控反事实基准。每张源图像都被变换为一个反事实五元组：Original（原始）、Blank（空白）、Similar（相似）、Random（随机）和 Adversarial（对抗）变体。合成、局部的场景文本干预被设计为保留非文本内容，从而能够配对测量定位性能的变化，以及冲突文本引入的、朝地理目标方向的定向偏移。SIGNPOST-Bench 包含来自四个数据集的 5111 个反事实组和 25555 个图像变体。我们评估了来自七个提供商的 20 个 MLLM。与 Original 图像相比，Adversarial 变体将定位误差中位数从 282 km 提高到 1347 km，增幅达 4.8 倍。在可地理编码的对抗样本中，各模型有 6.5-20.1% 的预测位于距注入目标 50 km 以内，且每个受测模型在从 Blank 到 Adversarial 之间都表现出目标距离的正向平均配对缩减。兼容、无关和冲突的文本替换对模型预测产生截然不同的影响，而干净输入下的定位性能并不能完全预测对冲突文本的鲁棒性。这些结果将视觉地理定位确立为场景文本裁决的连续诊断，并提供了一个受控框架，用于评估 MLLM 如何消解冲突的多模态证据。

## 关键词

#SIGNPOST-Bench #多模态大语言模型 #冲突消解 #场景文本 #地理定位
