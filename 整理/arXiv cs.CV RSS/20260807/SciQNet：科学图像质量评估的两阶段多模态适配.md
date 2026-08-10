---
published: 2026-08-07
title: "SciQNet：科学图像质量评估的两阶段多模态适配"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/SciQNet- Two-Stage Multimodal Adaptation for Scientific Image Quality Assessment.md"
source_note: "[[信息源/arXiv cs.CV RSS/SciQNet- Two-Stage Multimodal Adaptation for Scientific Image Quality Assessment]]"
source_sha256: c16715d4d99c98ee8eae89060535bf40a0591cbf2147223c8d8ec43f4c41450f
original_url: "https://arxiv.org/abs/2608.05691"
processed: 2026-08-07
language: zh-CN
---

# SciQNet：科学图像质量评估的两阶段多模态适配

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yin-Loon Khor, Yi-Jie Wong, Jing Jie Tan, Ming Jie Lee
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05691)

## 摘要

- 科学图像对传达实验观测、定量证据与概念知识必不可少；与自然图像不同，其质量既依赖视觉清晰度又依赖科学信息量，使评估具挑战。
- 呈现 SciQNet：科学图像质量评估的两阶段多模态适配框架；第一阶段在科学文档图像上域自适应预训练，第二阶段以联合评分与理解监督进行任务特定微调。
- 评分导向监督结合指令调优与从评分词 logits 导出的 Huber 损失，理解导向监督形式化为多项选择视觉问答。
- 实验显示用 40% 分层域自适应数据子集在评估预训练比例中表现最佳，提示预训练数据相关性可能如规模一样重要；最终模型 SIQA-S 92.21、SIQA-U 47.38、综合 69.80；该工作为 ICME 2026 科学图像质量评估挑战赛解决方案，评分赛道排名第 2。

## 正文

科学图像对传达实验观测、定量证据与概念知识必不可少。与自然图像不同，它们的质量既依赖视觉清晰度，又依赖科学信息量，使评估具有挑战性。本文呈现 SciQNet，一个用于科学图像质量评估的两阶段多模态适配框架。第一阶段在科学文档图像上执行域自适应预训练；第二阶段以联合评分与理解监督进行任务特定微调。对于评分导向监督，研究将指令调优与从评分词 logits 导出的 Huber 损失结合；理解导向监督则形式化为多项选择视觉问答。实验表明，使用 40% 的分层域自适应数据子集在所评估的预训练比例中给出最佳性能，提示预训练数据的相关性可能与预训练数据的规模一样重要。最终模型取得 SIQA-S 分数 92.21、SIQA-U 分数 47.38 与综合分数 69.80。该工作呈现研究对 ICME 2026 科学图像质量评估挑战赛的解决方案，在评分赛道排名第 2。

## 关键词

图像质量评估、科学图像、多模态、两阶段、适配
