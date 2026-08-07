---
published: 2026-08-06
title: 利用扩散模型进行腰椎 MRI 分割以增强腰痛评估
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Enhancing Low Back Pain Assessment with Diffusion Models for Lumbar Spine MRI Segmentation.md
source_note: "[[信息源/arXiv cs.CV RSS/Enhancing Low Back Pain Assessment with Diffusion Models for Lumbar Spine MRI Segmentation]]"
source_sha256: 66448a568987b52de700316775049f689d9dc5a62bf733aea1ec5a01edb78cd6
original_url: https://arxiv.org/abs/2608.04906
processed: 2026-08-07
language: zh-CN
---

# 利用扩散模型进行腰椎 MRI 分割以增强腰痛评估

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04906)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Enhancing Low Back Pain Assessment with Diffusion Models for Lumbar Spine MRI Segmentation|查看原始文件]]

## 摘要

- 提出一个基于扩散的框架，用于对腰痛（LBP）患者的腰椎 MRI 扫描进行稳健、准确的语义分割，无论扫描是 T1 还是 T2 加权。
- 使用 SPIDER 数据集，与先进模型在椎骨、椎间盘（IVD）和椎管分割任务上进行比较。
- 结果显示 SpineSegDiff 实现了与最先进的非扩散 nnUnet 相当的分割性能，尤其在改进退变椎间盘的识别方面。
- 模型生成的不确定性图为临床审查提供有价值的见解，增强了分割结果的稳健性和可靠性。

## 正文

本研究提出一个基于扩散的框架，用于对腰痛（LBP）患者的腰椎 MRI 扫描进行稳健且准确的语义分割，无论扫描是 T1 加权还是 T2 加权。我们使用 SPIDER 数据集，与先进模型在分割椎骨、椎间盘（IVDs）和椎管方面进行了比较。结果显示，SpineSegDiff 实现了与最先进的非扩散 nnUnet 相当的分割性能，尤其是在改进退变椎间盘（degenerated IVDs）的识别方面。此外，我们模型生成的不确定性图为临床审查提供了有价值的见解，增强了分割结果的稳健性和可靠性。我们的研究结果凸显了扩散模型通过更精确地分析病理性脊柱 MRI 来增强 LBP 诊断与管理的潜力。

## 关键词

#扩散模型 #医学图像分割 #腰椎MRI #腰痛 #椎间盘 #不确定性
