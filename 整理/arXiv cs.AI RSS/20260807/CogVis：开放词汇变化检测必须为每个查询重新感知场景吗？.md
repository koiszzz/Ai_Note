---
published: 2026-08-07
title: "CogVis：开放词汇变化检测必须为每个查询重新感知场景吗？"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CogVis- Must Open-Vocabulary Change Detection Perceive the Scene Anew for Every Query-.md"
source_note: "[[信息源/arXiv cs.AI RSS/CogVis- Must Open-Vocabulary Change Detection Perceive the Scene Anew for Every Query-]]"
source_sha256: c7faf65f5e23f0d745ae1703b068add63efbd99464de10e05752e5e29f86e841
original_url: "https://arxiv.org/abs/2608.06150"
processed: 2026-08-07
language: zh-CN
---

# CogVis：开放词汇变化检测必须为每个查询重新感知场景吗？

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zijie Wang, Chen Zhong, Wei He
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06150)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CogVis- Must Open-Vocabulary Change Detection Perceive the Scene Anew for Every Query-|查看原始文件]]

## 摘要

- 地表监测需要能识别任意语义类别的变化检测模型，开放词汇变化检测（OVCD）满足该需求；但现有方法常纠缠时间感知、语义判别与区域验证，导致结果不稳定与冗余计算。
- 受人类视觉变化感知启发，提出 CogVis：认知记忆引导框架，将 OVCD 重构为"感知-记忆-验证"范式。
- CogVis 先用场景变化感知器（SCP）从冻结的双时相特征中提取可复用、类别无关的变化先验，将时间证据与语义类别决策解耦；语义记忆校准器（SMC）通过动态估计图像-查询特定决策阈值补偿类别依赖的分数偏移；自适应区域过滤器（ARF）用学习到的语义、时间与结构可靠性过滤连通候选。
- 在覆盖语义变化检测、二值变化定位与建筑损伤评估的七个基准上，CogVis 在所有数据集取得最优性能；通过共享场景级变化感知，CogVis 避免跨查询重复类别无关的时间感知，推理吞吐提升 28.50%。

## 正文

地表监测需要能够识别任意语义类别的变化检测模型。开放词汇变化检测（Open-Vocabulary Change Detection，OVCD）满足这一需求。然而，现有方法往往纠缠时间感知、语义判别与区域验证，导致结果不稳定与冗余计算。受人类视觉变化感知的启发，我们提出 CogVis，一个认知记忆引导框架，将 OVCD 重构为感知-记忆-验证（perception-memory-verification）范式。CogVis 首先使用场景变化感知器（Scene Change Perceptron，SCP）从冻结的双时相特征中提取可复用的、类别无关的变化先验，从而将时间证据与语义类别决策解耦。语义记忆校准器（Semantic Memory Calibrator，SMC）随后通过动态估计图像-查询特定的决策阈值，补偿类别依赖的分数偏移。最后，自适应区域过滤器（Adaptive Region Filter，ARF）使用学习到的语义、时间与结构可靠性过滤连通候选。在覆盖语义变化检测、二值变化定位与建筑损伤评估的七个基准上的实验表明，CogVis 在所有被评估数据集上取得最优性能。通过共享场景级变化感知，CogVis 进一步避免跨查询重复类别无关的时间感知，并将推理吞吐提升 28.50%。

## 关键词

#开放词汇变化检测 #遥感 #认知记忆 #感知-记忆-验证
