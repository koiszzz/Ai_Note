---
published: 2026-08-05
title: "DeepLesion 检测分割与短报告生成的统一二维框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Unified 2D Framework for DeepLesion Detection, Segmentation and Short Report Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Unified 2D Framework for DeepLesion Detection, Segmentation and Short Report Generation]]"
source_sha256: 425402287ccef04b5f6762bb372baf054559743ac1f1420d1dbf4b8ca347dafd
original_url: "https://arxiv.org/abs/2608.02805"
processed: 2026-08-05
language: zh-CN
---

# DeepLesion 检测分割与短报告生成的统一二维框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02805)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Unified 2D Framework for DeepLesion Detection, Segmentation and Short Report Generation|查看原始文件]]

## 摘要

- 论文提出一个统一的二维病灶分析框架，将大语言模型推理、病灶边界框检测、分割和放射学短报告生成整合在原始 DeepLesion 数据集上。
- 测试阶段病灶边界框检测 mAP50 为 70.1%、mAP50-95 为 46.4%，病灶分割 Dice 为 62.6%。
- 短报告生成的 BLEU-1、BLEU-4、METEOR 和 ROUGE-L 分数分别为 64.3%、49.6%、34.7% 和 60.1%。
- 与 nnUNet 病灶分割模型相比，Dice 分数提升 28.5%；框架还将空间和解剖上下文整合进短报告生成，并公开实现、数据集和模型。

## 正文

此前的工作基于 ULS23 DeepLesion 数据集，将大语言模型（LLM）整合进病灶分割模型，并使用报告中的简短发现。本研究在原始 DeepLesion 数据集上开发了一个统一的二维病灶分析框架，整合基于 LLM 的推理、病灶边界框检测、分割以及放射学报告生成。

在测试阶段，病灶边界框检测取得了较高准确率，mAP50 为 70.1%，mAP50-95 为 46.4%；病灶分割 Dice 分数为 62.6%。短报告生成的 BLEU-1 为 64.3%，BLEU-4 为 49.6%，METEOR 为 34.7%，ROUGE-L 为 60.1%。

本文解决了原始 DeepLesion 数据集中的困难分割问题，相较 nnUNet 病灶分割模型，Dice 分数提高了 28.5%。作者还将空间和解剖上下文整合到 DeepLesion 短报告生成中，并在 GitHub 上公开实现、数据集和模型。

## 关键词

#医学影像 #病灶检测 #图像分割 #报告生成
