---
published: 2026-08-07
title: "M³R-Bench：证据锚定多模态隐喻理解的统一基准"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/M$^3$R-Bench- A Unified Benchmark for Evidence-Grounded Multimodal Metaphor Understanding.md"
source_note: "[[信息源/arXiv cs.CL RSS/M$^3$R-Bench- A Unified Benchmark for Evidence-Grounded Multimodal Metaphor Understanding]]"
source_sha256: 01b6f783db2dac270dcd8608d248905654a1ee189d8b442c604fa02f666ddadd
original_url: "https://arxiv.org/abs/2608.05817"
processed: 2026-08-07
language: zh-CN
---

# M³R-Bench：证据锚定多模态隐喻理解的统一基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Hong Jiang, Junnan Zhu, Jingwang Huang, Xiao Sun, Yuming Yang, Jiang Zhong, Ruirui Chen, Jingman Shi, Hao Wu, Nayu Liu, Xinyi Jiang, Kaiwen Wei
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05817)

## 摘要

- 隐喻经跨域映射使抽象概念可理解，同时传达情感态度；多模态场景中视觉与文本信息联合构建目标-来源映射，需概念理解与跨模态推理；现有基准主要经孤立子任务评估隐喻理解、缺乏证据锚定解释，难以评估模型是否建立锚定于视觉与文本线索的映射。
- 引入 M³R-Bench：统一、证据锚定基准，1000 个图像-文本实例带人工验证标注；受概念隐喻理论与非字面语言理解理论引导，提供隐喻出现、目标-来源映射、情感与分阶段解释（"证据识别-映射建立-情感推断"）的联合标注。
- 评估显示现有模型常忽视视觉证据、依赖表面文本线索、产生不准确目标-来源映射，暴露跨模态证据-映射错配。
- 提出 M³R-Reasoner：结合课程基推理监督与任务感知强化学习，使模型推理与隐喻解释对齐；仅 8B 骨干即超越更大专有 MLLM（四个统一任务指标），视觉证据与情感论证分数超 GPT-5.5 28.45 与 30.11 点，平均准则分数超 Claude-Sonnet-4.6 8.00 点；数据集与代码公开。

## 正文

隐喻通过跨域映射使抽象概念能够被理解，同时传达情感态度。在多模态场景中，视觉与文本信息联合构建目标-来源映射，既需要概念理解，也需要跨模态推理。然而，现有基准主要通过孤立的子任务评估隐喻理解，并缺乏证据锚定的解释，使人们难以评估模型是否建立锚定于视觉与文本线索的映射。为克服这些局限，研究引入 M³R-Bench，一个统一且证据锚定的基准，包含 1,000 个带人工验证标注的图像-文本实例。在概念隐喻理论（Conceptual Metaphor Theory）与非字面语言理解理论的引导下，M³R-Bench 为隐喻出现、目标-来源映射、情感以及遵循"证据识别—映射建立—情感推断"的分阶段解释提供联合标注。对 M³R-Bench 的评估揭示，现有模型常常忽视视觉证据、依赖表面的文本线索，并产生不准确的目标-来源映射，暴露一种跨模态证据-映射错配。为应对该错配，研究提出 M³R-Reasoner：结合基于课程（curriculum-based）的推理监督与任务感知强化学习，使模型推理与隐喻解释对齐。实验表明，仅用 8B 参数骨干，M³R-Reasoner 在四个统一任务指标上超越更大的专有 MLLM，并在视觉证据与情感论证分数上分别超过 GPT-5.5 28.45 与 30.11 点，同时平均准则分数超过 Claude-Sonnet-4.6 8.00 点。数据集与代码见 https://github.com/hongshi4/M3R-Bench。

## 关键词

隐喻理解、多模态、基准、证据锚定、推理
