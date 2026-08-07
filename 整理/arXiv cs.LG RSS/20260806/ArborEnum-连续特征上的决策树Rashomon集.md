---
published: 2026-08-06
title: ArborEnum：连续特征上的决策树Rashomon集
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/ArborEnum- Decision Tree Rashomon Sets over Continuous Features.md
source_note: "[[信息源/arXiv cs.LG RSS/ArborEnum- Decision Tree Rashomon Sets over Continuous Features]]"
source_sha256: d7ed706e39efc9d7319290b57ccb4c33e3cb4bca4ddb65d95ee1b4775a84083e
original_url: https://arxiv.org/abs/2608.04310
processed: 2026-08-07
language: zh-CN
---

# ArborEnum：连续特征上的决策树Rashomon集

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04310)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ArborEnum- Decision Tree Rashomon Sets over Continuous Features|查看原始文件]]

## 摘要

- 提出首个在利用连续特征有序结构的同时精确枚举决策树 Rashomon 集的算法。
- 进一步开发近似枚举的松弛方法，以及逐步细化候选阈值集合、收敛到连续特征 Rashomon 集的随时（anytime）算法。
- 实验表明粗二值化会遗漏许多树、重要特征与预测多样性；新算法相比现有枚举方法获得数量级加速。

## 正文

Rashomon 效应描述了这样一种现象：许多模型可以在同一学习任务上达到近乎相同的性能，这对鲁棒性、特征重要性和可定制性具有重大影响。这些用例促使人们计算 Rashomon 集：所有正则化损失接近最优的模型的集合。

决策树是少数可以完整枚举 Rashomon 集的模型类别之一，但这一计算一直以对原始数据的二值化（binarization）为前提，要么限制每棵树允许进行的划分，要么大大增加本已困难的组合问题的复杂度。我们引入了第一个在利用连续特征有序结构的同时精确枚举决策树 Rashomon 集的算法。

我们进一步开发了一种用于近似枚举的松弛（relaxation）方法，以及一种随时（anytime）算法，它逐步细化候选阈值集合，产生越来越精细的近似，并收敛到连续特征 Rashomon 集。实验表明，粗糙的二值化会遗漏许多树、重要特征和预测多样性（predictive multiplicity）；我们的算法比现有枚举方法实现了数量级的加速，近似方法在保持近乎完美的召回率的同时提供了进一步的加速。

## 关键词

#Rashomon集 #决策树 #可解释机器学习 #枚举算法 #连续特征
