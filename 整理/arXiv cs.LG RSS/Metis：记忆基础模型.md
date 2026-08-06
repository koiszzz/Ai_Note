---
title: "Metis：记忆基础模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Metis- Memory Foundation Model.md"
source_note: "[[信息源/arXiv cs.LG RSS/Metis- Memory Foundation Model.]]"
source_sha256: db7022577ed0f8af9a9baa09aae7e9be619142b3848409acf490e6041fe75aa5
original_url: "https://arxiv.org/abs/2607.26760"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Metis：记忆基础模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Zeyu Zhang、Ziliang Guo、Yihang Sun、Xichong Zhang、Xixuan Hao、Zehao Lin、Yang Zhang、Xiaoyan Zhao、Tong Shen、Bo Tang、Zhi-Qin John Xu、Junchi Yan、Haofen Wang、Xu Chen、Feiyu Xiong、Zhiyu Li、Tat-Seng Chua
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.26760)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Metis- Memory Foundation Model.|查看原始文件]]

## 摘要

- AI 智能体的近期进展日益把原生能力内化进其底层基础模型，催生了多模态基础模型与大型推理模型；但智能体记忆仍主要通过外部模块实现，原生记忆能力在很大程度上未被探索。
- 朝该方向迈出第一步：引入记忆基础模型，赋予基础模型原生记忆能力；从两个视角形式化原生记忆：骨干内持久且动态演化的记忆状态，以及通过模型计算自主存储与利用信息的原生记忆程序。
- 表明原生记忆在架构、端到端优化与效率方面具有优势。
- 基于该形式化提出 Metis，记忆基础模型的首个原型：新架构为基础模型配备原生记忆状态，允许把历史信息压缩进模型并通过记忆注意力访问。
- 构建大规模记忆专用训练数据，引入多个优化目标，通过中期训练习得这些原生记忆程序；Metis 的在线记忆维护是无梯度的，记忆更新只需一次前向传播。
- 推理时所有学得的模型权重保持冻结，而原生记忆状态通过标准前向计算自主变换。
- 大量实验显示 Metis 展现原生记忆能力，并详细分析其优势、局限与行为；为促进未来研究，发布项目与模型检查点。

## 正文

论文编号：arXiv:2607.26760v2（更新类型：replace-cross）。以下为摘要全文翻译。

AI 智能体的近期进展日益把原生能力内化进其底层基础模型，催生了多模态基础模型与大型推理模型。然而，智能体记忆仍主要通过外部模块实现，原生记忆能力在很大程度上未被探索。在本文中，我们朝这一方向迈出第一步，引入记忆基础模型，赋予基础模型原生记忆能力。我们从两个视角形式化原生记忆：骨干内持久且动态演化的记忆状态，以及通过模型计算自主存储和利用信息的原生记忆程序。我们表明，原生记忆在架构、端到端优化与效率方面具有优势。基于这一形式化，我们提出 Metis，记忆基础模型的首个原型。Metis 引入一种新架构，为基础模型配备原生记忆状态，使历史信息能被压缩进模型并通过记忆注意力访问。我们构建大规模记忆专用训练数据，并引入多个优化目标，通过中期训练习得这些原生记忆程序。Metis 的在线记忆维护是无梯度的，记忆更新只需一次前向传播。推理时，所有学得的模型权重保持冻结，而原生记忆状态通过标准前向计算自主变换。通过大量实验，我们表明 Metis 展现原生记忆能力，并进一步详细分析其优势、局限与行为。为促进记忆基础模型的未来研究，我们发布项目与模型检查点。

## 关键词

#记忆基础模型 #智能体记忆 #原生记忆 #基础模型 #LLM
