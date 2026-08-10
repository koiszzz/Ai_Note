---
published: 2026-08-07
title: "ChronoVision：经潜状态重建的时间推理"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/ChronoVision- Temporal Reasoning via Latent State Reconstruction.md"
source_note: "[[信息源/arXiv cs.CV RSS/ChronoVision- Temporal Reasoning via Latent State Reconstruction]]"
source_sha256: 43fb76c5e0d2437ec9c5c1c1161b83a4206ac5e4f4fc8b9c71e51e67298d9e59
original_url: "https://arxiv.org/abs/2608.05631"
processed: 2026-08-07
language: zh-CN
---

# ChronoVision：经潜状态重建的时间推理

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yifan Shen, Jian Xu, Boyi Li, Yuner Zhang, Tianjiao Yu, Bingxuan Li, Houze Yang, Rushi Wang, Xu Cao
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05631)

## 摘要

- 多模态大语言模型擅长被动感知，但在需要多步时间推理的复杂视觉认知任务上困难；退化主要源于语言基推理的固有歧义，常无法准确表达连续视觉变换。
- 提出 ChronoVision：将视觉逻辑与潜图像对齐的多模态框架；监督微调中，重建视觉头（Reconstructive Visual Head）预测最终变换状态的潜表征，ROI 注意力定位模块经语义跨度查询聚焦关键视觉证据。
- 训练后阶段应用带隐式过程锚定机制的强化学习，由复合奖励函数引导：评估结局正确性、潜过程对齐与无监督视觉聚焦。
- 引入 Vbvr-VQA：通过将视频推理重构为严格图像排序任务评估时间跟踪的新颖数据集；实验显示 ChronoVision 在 Vbvr-VQA 取得 SOTA：域内 74.8%、域外 71.6% 准确率，高度挑战性跨域基准 IntPhys2 上强 55.0%。

## 正文

多模态大语言模型擅长被动感知，但在需要多步时间推理的复杂视觉认知任务上困难。这种退化主要源于语言基推理的固有歧义，它常常无法准确表达连续的视觉变换。为解决该问题，研究提出 ChronoVision，一个将视觉逻辑与潜图像（latent imagery）对齐的多模态框架。监督微调中，重建视觉头（Reconstructive Visual Head）预测最终变换状态的潜表征，而 ROI 注意力定位（ROI Attention Locating）模块经语义跨度查询聚焦关键视觉证据。训练后阶段，研究应用带隐式过程锚定（implicit process grounding）机制的强化学习，由复合奖励函数引导：评估结局正确性、潜过程对齐与无监督视觉聚焦。此外，研究引入 Vbvr-VQA，一个通过将视频推理重构为严格图像排序任务来评估时间跟踪的新颖数据集。实验表明，ChronoVision 在 Vbvr-VQA 上取得最先进性能：域内 74.8%、域外 71.6% 的准确率，并在极具挑战性的跨域基准 IntPhys2 上取得强劲的 55.0% 准确率。

## 关键词

时间推理、潜状态、多模态 LLM、视频推理、强化学习
