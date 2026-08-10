---
published: 2026-08-07
title: "CogVis：开放词汇变化检测必须为每个查询重新感知场景吗？"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/CogVis- Must Open-Vocabulary Change Detection Perceive the Scene Anew for Every Query-.md"
source_note: "[[信息源/arXiv cs.CV RSS/CogVis- Must Open-Vocabulary Change Detection Perceive the Scene Anew for Every Query-]]"
source_sha256: ceab5ea709f1125116f6227296aaa438ba0b66d70dc5445ca4fbf4841e30d569
original_url: "https://arxiv.org/abs/2608.06150"
processed: 2026-08-07
language: zh-CN
---

# CogVis：开放词汇变化检测必须为每个查询重新感知场景吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zijie Wang, Chen Zhong, Wei He
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06150)

## 摘要

- 地表监测需要能识别任意语义类别的变化检测模型；开放词汇变化检测（OVCD）满足该需求，但现有方法常纠缠时间感知、语义判别与区域验证，导致结果不稳定与冗余计算。
- 受人类视觉变化感知启发，提出 CogVis：认知记忆引导框架，将 OVCD 重构为感知-记忆-验证范式。
- CogVis 先用场景变化感知器（SCP）从冻结双时相特征提取可复用、类别无关的变化先验，将时间证据与语义类别决策解耦；语义记忆校准器（SMC）经动态估计图像-查询特定决策阈值补偿类别依赖分数漂移；自适应区域过滤器（ARF）用学习语义、时间与结构可靠性过滤连通候选。
- 七个基准（覆盖语义变化检测、二值变化定位与建筑损坏评估）上 CogVis 实现所有数据集 SOTA；通过共享场景级变化感知，CogVis 避免跨查询重复类别无关时间感知，推理吞吐量提升 28.50%。

## 正文

地表监测需要能够识别任意语义类别的变化检测模型。开放词汇变化检测（Open-Vocabulary Change Detection, OVCD）满足该需求。然而，现有方法常常纠缠时间感知、语义判别与区域验证，导致结果不稳定与冗余计算。受人类视觉变化感知启发，研究提出 CogVis，一个认知记忆引导框架，将 OVCD 重构为感知-记忆-验证（perception-memory-verification）范式。CogVis 首先使用场景变化感知器（Scene Change Perceptron, SCP）从冻结的双时相特征中提取可复用、类别无关的变化先验，从而将时间证据与语义类别决策解耦。语义记忆校准器（Semantic Memory Calibrator, SMC）随后通过动态估计图像-查询特定的决策阈值，补偿类别依赖的分数漂移。最后，自适应区域过滤器（Adaptive Region Filter, ARF）使用学习的语义、时间与结构可靠性过滤连通候选。覆盖语义变化检测、二值变化定位与建筑损坏评估的七个基准实验表明，CogVis 在所有评估数据集上取得最先进性能。通过共享场景级变化感知，CogVis 进一步避免跨查询重复类别无关的时间感知，并将推理吞吐量提升 28.50%。

## 关键词

开放词汇、变化检测、感知-记忆-验证、遥感、认知框架
