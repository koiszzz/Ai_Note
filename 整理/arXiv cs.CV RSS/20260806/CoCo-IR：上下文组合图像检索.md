---
published: 2026-08-06
title: CoCo-IR：上下文组合图像检索
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/CoCo-IR- Contextual Composed Image Retrieval.md
source_note: "[[信息源/arXiv cs.CV RSS/CoCo-IR- Contextual Composed Image Retrieval]]"
source_sha256: 385ae8755de7137714250b38d5e276b0bd455a1c8e887b48f427be2bf97075f0
original_url: https://arxiv.org/abs/2608.05149
processed: 2026-08-07
language: zh-CN
---

# CoCo-IR：上下文组合图像检索

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05149)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/CoCo-IR- Contextual Composed Image Retrieval|查看原始文件]]

## 摘要

- 提出上下文组合图像检索（CoCo-IR）新任务，支持用户通过多轮交互逐步精化检索结果
- 提出基于大型多模态模型（LMM）的上下文感知推理模型，解读完整交互历史并生成随轮次演化的可变换图像嵌入（TIE）
- 开发全自动、可扩展的数据引擎：利用 LMM 生成高质量上下文检索数据，通过模型引导的验证挖掘困难负样本，避免昂贵的人工标注
- 在 CIRCO 单轮基准上达到 39.4 mAP@5 的新 SOTA；在 CoCo-IR 基准 4 轮对话上达到 44.1 R@1，远超现有方法（28.2）

## 正文

当前的基于指令的图像检索系统功能强大，但仅限于单轮交互，无法捕捉复杂真实世界视觉搜索的迭代特性。为克服这一局限，我们引入上下文组合图像检索（Contextual Composed Image Retrieval，CoCo-IR），这是一个新任务，允许用户通过交互逐步精化搜索结果。我们通过提出一种基于大型多模态模型（LMM）的新模型来解决这一新任务，该模型充当 CoCo-IR 的上下文感知推理器。我们的模型解释完整的交互历史，以生成随轮次演化的可变换图像嵌入（Transformable Image Embeddings，TIE）。为了在无需昂贵人工标注的情况下为模型训练提供数据，我们开发了一个全自动、可扩展的数据引擎，利用 LMM 生成高质量的上下文检索数据，并使用模型引导的验证来挖掘具有挑战性的困难负样本。大量实验表明，我们的方法建立了新的最先进性能：在具有挑战性的单轮基准 CIRCO 上达到 39.4 mAP@5；此外，在我们新的 CoCo-IR 基准上，我们的模型在 4 轮对话中保持稳健性能，R@1 达到 44.1，远超无法处理多轮上下文的现有方法（4 轮 R@1 为 28.2）。项目主页：https://CoCo-IR.github.io。

## 关键词

#图像检索 #多轮交互 #多模态大模型 #组合检索
