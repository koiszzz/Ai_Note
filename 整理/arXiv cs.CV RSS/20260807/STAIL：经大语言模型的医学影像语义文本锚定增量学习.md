---
published: 2026-08-07
title: "STAIL：经大语言模型的医学影像语义文本锚定增量学习"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/STAIL- Semantic Text-Anchored Incremental Learning for Medical Imaging via Large Language Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/STAIL- Semantic Text-Anchored Incremental Learning for Medical Imaging via Large Language Models]]"
source_sha256: 3eabf3acc41843178a9d3eb3e9f9eaa9a0ae31fd29f5a59cc3517e2d56b08037
original_url: "https://arxiv.org/abs/2608.05808"
processed: 2026-08-07
language: zh-CN
---

# STAIL：经大语言模型的医学影像语义文本锚定增量学习

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Songpan Gao, Yajie Zhang, Guanxing Chen, Jiayu Qian, Zhenzhen Liu, Shijun Li, Xiaowei Zhu, Yao Hu, Kay Chen Tan, Yu-An Huang, Shiqi Wang, Zhi-An Huang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05808)

## 摘要

- 应用于医学图像分析的深度学习模型在动态环境中持续适配新临床任务时遭受严重灾难性遗忘；主流增量学习方法通常经排练原始历史图像缓解，但像素级排练产生显著存储开销、引发隐私担忧，且稀疏示例无法充分捕捉真实数据分布。
- 受人类认知机制启发，提出语义文本锚定增量学习（STAIL）框架用于序贯临床任务。
- 为克服排练瓶颈，STAIL 引入非对称语义整合缓冲器（SCB）：纳入最少图像锚点与广泛文本描述，SCB 以最小存储成本实现旧任务稠密语义重建；设计 LLM 派生语义锚定机制（LSAM）：利用冻结 LLM 的稳定语义空间作为发展先验，显式将演化视觉特征锚定到文本表征，在宏观与微观层面引导与约束可塑性与稳定性。
- 眼底、超声与 X 光三种异构医学数据集大量实验显示 STAIL 作为高效即插即用模块，全面增强各种现有基线性能：持续性能 AAA-AUC 平均增益 2.24%、遗忘减少 BWT-AUC 增益 3.55%；代码公开。

## 正文

应用于医学图像分析的深度学习模型在动态环境中持续适配新的临床任务时，遭受严重的灾难性遗忘。主流增量学习方法通常通过排练原始历史图像来缓解，然而这种像素级排练产生显著的存储开销、引发隐私担忧，并且无法用稀疏示例充分捕捉真实的数据分布。受人类认知机制启发，研究提出一个名为语义文本锚定增量学习（Semantic Text-Anchored Incremental Learning, STAIL）的新框架，用于序贯临床任务。为克服排练瓶颈，STAIL 引入一个非对称语义整合缓冲器（asymmetric semantic consolidation buffer, SCB）。通过纳入最少量的图像锚点与广泛的文本描述，SCB 以最小的存储成本实现旧任务的稠密语义重建。此外，研究设计一个 LLM 派生的语义锚定机制（LLM-derived Semantic Anchoring Mechanism, LSAM），利用冻结大语言模型的稳定语义空间作为发展先验。该机制显式地将演化的视觉特征锚定到文本表征，在宏观与微观层面引导并约束可塑性与稳定性。跨眼底、超声与 X 光成像的三种异构医学数据集的大量实验表明，STAIL 作为一个高效即插即用模块，全面增强各种现有基线的性能：持续性能（AAA-AUC）平均增益 2.24%，减少遗忘（BWT-AUC）增益 3.55%。代码公开。

## 关键词

增量学习、医学影像、语义锚定、LLM、灾难性遗忘
