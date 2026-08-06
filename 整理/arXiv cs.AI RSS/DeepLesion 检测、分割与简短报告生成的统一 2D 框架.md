---
title: "DeepLesion 检测、分割与简短报告生成的统一 2D 框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A Unified 2D Framework for DeepLesion Detection, Segmentation and Short Report Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/A Unified 2D Framework for DeepLesion Detection, Segmentation and Short Report Generation]]"
source_sha256: 425402287ccef04b5f6762bb372baf054559743ac1f1420d1dbf4b8ca347dafd
original_url: "https://arxiv.org/abs/2608.02805"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# DeepLesion 检测、分割与简短报告生成的统一 2D 框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ruida Cheng 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02805)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A Unified 2D Framework for DeepLesion Detection, Segmentation and Short Report Generation|查看原始文件]]

## 摘要

- 基于原始 DeepLesion 数据集开发统一 2D 病灶分析框架，集成 LLM 推理、病灶边界框检测、分割与放射报告生成。
- 测试阶段取得病灶检测 mAP50 70.1%、mAP50-95 46.4%；分割 Dice 62.6%；报告生成 BLEU_1 64.3%、BLEU_4 49.6%、METEOR 34.7%、ROUGE_L 60.1%。
- 解决原始 DeepLesion 数据集中具有挑战性的分割问题，Dice 相比 nnUNet 病灶分割模型提升 28.5%；将空间与解剖上下文整合进简短报告生成。
- 已在 GitHub（ruida/2D_DeepLesion_Foundation）开放实现、数据集与模型。

## 正文

论文编号：arXiv:2608.02805v1（更新类型：cross）。以下为摘要全文翻译。

在之前的工作中，我们基于 ULS23 DeepLesion 数据集，利用报告中的简短发现（short-form findings），将大语言模型（LLM）集成到病灶分割模型中。在本研究中，我们开发了一个统一的 2D 病灶分析框架，从原始 DeepLesion 数据集出发，集成基于 LLM 的推理、病灶边界框检测、分割和放射报告生成。在测试阶段，我们取得了相对较高的病灶边界框检测精度：mAP50 为 70.1%，mAP50-95 为 46.4%；病灶分割性能 Dice 分数为 62.6%；简短报告生成的 BLEU_1 分数为 64.3%，BLEU_4 分数为 49.6%，METEOR 为 34.7%，ROUGE_L 为 60.1%。在这项工作中，我们解决了原始 DeepLesion 数据集中具有挑战性的分割问题，与 nnUNet 病灶分割模型相比，Dice 分数提升了 28.5%。我们还将空间与解剖上下文整合进 DeepLesion 简短报告生成。我们已在 GitHub 上发布实现、数据集和模型：https://github.com/ruida/2D_DeepLesion_Foundation

## 关键词

#医学影像 #病灶检测 #分割 #报告生成
