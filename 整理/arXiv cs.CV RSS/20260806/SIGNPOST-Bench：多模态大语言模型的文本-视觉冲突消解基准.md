---
published: 2026-08-06
title: SIGNPOST-Bench：多模态大语言模型的文本-视觉冲突消解基准
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SIGNPOST-Bench- Benchmarking Text-Vision Conflict Resolution in Multimodal Large Language Models.md
source_note: "[[信息源/arXiv cs.CV RSS/SIGNPOST-Bench- Benchmarking Text-Vision Conflict Resolution in Multimodal Large Language Models]]"
source_sha256: c70f527886e25497604a2c99648ecd228974391ebef8ec10b6debe3523e04bf2
original_url: https://arxiv.org/abs/2608.04244
processed: 2026-08-07
language: zh-CN
---

# SIGNPOST-Bench：多模态大语言模型的文本-视觉冲突消解基准

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04244)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SIGNPOST-Bench- Benchmarking Text-Vision Conflict Resolution in Multimodal Large Language Models|查看原始文件]]

## 摘要

- 提出 SIGNPOST-Bench，一个受控反事实基准，用于评估多模态大语言模型（MLLM）的文本-视觉冲突消解能力。
- 每张源图像被转换为原始（Original）、空白（Blank）、相似（Similar）、随机（Random）与对抗（Adversarial）五种反事实变体，实现定位性能变化的配对测量。
- 评估 7 个提供方的 20 个 MLLM：对抗变体将中位定位误差从 282 km 提高到 1347 km（4.8 倍）；可地理编码的对抗样本中 6.5%–20.1% 的预测距离注入目标不足 50 km。

## 正文

多模态大语言模型（MLLM）通过结合视觉与文本线索在真实世界场景中做出有依据的预测，然而现有基准很少揭示当这两类证据冲突时模型如何在它们之间仲裁。我们提出 SIGNPOST-Bench，一个受控反事实基准，用于评估文本-视觉冲突消解。每张源图像被转换为由原始（Original）、空白（Blank）、相似（Similar）、随机（Random）和对抗（Adversarial）变体构成的反事实五元组。合成、局部的场景文本干预被设计为保留非文本内容，从而能够对定位性能的变化以及冲突文本引入的、朝向地理目标的定向偏移进行配对测量。SIGNPOST-Bench 包含来自四个数据集的 5111 个反事实组和 25555 个图像变体。我们评估了来自七个提供方的 20 个 MLLM。与原始图像相比，对抗变体将中位定位误差从 282 km 提高到 1347 km，增幅为 4.8 倍。在可地理编码的对抗样本中，各模型有 6.5%–20.1% 的预测距离注入目标不到 50 km，且每个被评估模型在"从空白到对抗"的配对目标距离缩减上都表现出正的平均值。兼容、无关和冲突的文本替换对模型预测产生不同的影响，而干净输入下的定位性能并不能完全预测模型对冲突文本的鲁棒性。这些结果将视觉地理位置定位确立为场景文本仲裁的连续诊断手段，并为评估 MLLM 如何消解冲突的多模态证据提供了受控框架。

## 关键词

#多模态大模型 #视觉定位 #基准测试 #对抗样本
