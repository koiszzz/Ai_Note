---
published: 2026-08-07
title: "PromptForSegCXR：带多阶段融合机制的胸部 X 光提示驱动多器官多疾病分割"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/PromptForSegCXR- Prompt-Driven Multi-Organ and Multi-Disease Segmentation in Chest X-rays using a Mu.md"
source_note: "[[信息源/arXiv cs.CV RSS/PromptForSegCXR- Prompt-Driven Multi-Organ and Multi-Disease Segmentation in Chest X-rays using a Mu]]"
source_sha256: 1df96ce5f2303e44a82ea35a2d284d3b913c3a8ceb68df060b80e6b3841b9d37
original_url: "https://arxiv.org/abs/2507.00673"
processed: 2026-08-07
language: zh-CN
---

# PromptForSegCXR：带多阶段融合机制的胸部 X 光提示驱动多器官多疾病分割

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Abduz Zami, Shadman Sobhan, Rounaq Hossain, Md. Sawran Sorker, Mohiuddin Ahmed, Md. Redwan Hossain, Md Palash Uddin
> - **发布时间**：2026-08-07
> - **分类**：eess.IV
> - **原文**：[打开链接](https://arxiv.org/abs/2507.00673)

## 摘要

- 图像分割是自动化医学图像分析的核心，可精确识别解剖结构与病理区域；常规分割模型通常针对单一器官或疾病，限制跨临床场景适应性；多器官多疾病分割已被探索，构建此类数据集需医学专家大量人工标注。
- 提示驱动分割提供灵活、用户引导的替代方案加速标注，但先前无工作在胸部 X 光中跨多器官与疾病处理基于提示的交互式分割。
- 两个主要贡献：引入新颖专家设计涂鸦提示数据集（23 类：六器官与十七疾病），从多个公开胸部 X 光数据集策展用于提示驱动分割；提出 PromptForSegCXR：轻量双输入分割框架，结合胸部 X 光与用户提供涂鸦提示，准确分割多样解剖与病理区域。
- 模型用多阶段特征融合策略整合空间与语义表征，配合深度可分离点残差卷积块与挤压激励注意力实现高效层级特征提取与自适应重校准；实验显示全数据集 Dice 81.62%，超越 SAM 基提示分割模型最多 10%、常规分割架构最多 23%，同时保持轻量；证明所提方法对准确、灵活、提示驱动胸部 X 光分割的有效性。

## 正文

图像分割是自动化医学图像分析的核心，能够精确识别解剖结构与病理区域。常规分割模型通常针对单一器官或疾病，限制其跨临床场景的适应性。虽然多器官与多疾病分割已被探索，构建此类数据集需要医学专家的大量人工标注。提示驱动分割提供一种灵活、用户引导的替代方案，加速标注，但先前没有工作处理胸部 X 光中跨多器官与多疾病的基于提示的交互式分割。本研究做出两个主要贡献。第一，研究引入一个专家设计的涂鸦（doodle）提示数据集：覆盖 23 类（六个器官与十七种疾病），从多个公开胸部 X 光数据集策展，用于提示驱动分割。第二，研究提出 PromptForSegCXR，一个轻量双输入分割框架：结合胸部 X 光与用户提供的涂鸦提示，准确分割多样的解剖与病理区域。该模型使用多阶段特征融合策略整合空间与语义表征，配合一个深度可分离-点-残差卷积块（depthwise-pointwise-residual convolution block）与挤压激励（squeeze-and-excitation）注意力，实现高效的层级特征提取与自适应重校准。实验结果显示，模型在全数据集上取得 81.62% 的 Dice 分数，超越基于 SAM 的提示分割模型最多 10%、常规分割架构最多 23%，同时保持轻量。这些结果证明了所提方法对准确、灵活、提示驱动的胸部 X 光分割的有效性。

## 关键词

胸部 X 光、提示驱动分割、多器官、多疾病、涂鸦提示
