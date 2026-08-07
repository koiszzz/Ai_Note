---
published: 2026-08-06
title: RESample：一种通过探索性采样实现机器人操作的鲁棒数据增强框架
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/RESample- A Robust Data Augmentation Framework via Exploratory Sampling for Robotic Manipulation.md
source_note: "[[信息源/arXiv cs.LG RSS/RESample- A Robust Data Augmentation Framework via Exploratory Sampling for Robotic Manipulation]]"
source_sha256: 632ed110a7816a5361f7f0c4ed4be931a8e1bbba5eae534ffe4d490dcbbe6f99
original_url: https://arxiv.org/abs/2510.17640
processed: 2026-08-07
language: zh-CN
---

# RESample：一种通过探索性采样实现机器人操作的鲁棒数据增强框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.17640)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/RESample- A Robust Data Augmentation Framework via Exploratory Sampling for Robotic Manipulation|查看原始文件]]

## 摘要

- 视觉-语言-动作（VLA）模型在大型模仿学习数据集上训练时展现出强大的操作能力，但这些以成功轨迹为主的数据集很少提供执行偏离标准示范时所需的纠正性监督，部署中的偏差会导致策略陷入失败场景。
- 提出覆盖度引导的数据增强框架 RESample：训练保守覆盖度函数识别位于真实数据分布内但在标准成功演示中缺失的失败案例，并据此进行探索性采样补充失败恢复轨迹。
- 在 LIBERO 基准和真实世界操作任务上，RESample 以不超过 20% 的额外样本将策略成功率稳定提升，最高获得 12% 的绝对增益。

## 正文

视觉-语言-动作（VLA）模型在利用大规模模仿学习数据集训练时展现出强大的操作能力。然而，这些数据集以成功轨迹为主，极少提供当执行偏离标准示范时所需的纠正性监督。在部署过程中，这些物理偏差会导致分布偏移，将策略推向失败场景，但缺失的失败恢复数据使策略无法纠正这些执行偏差。

为解决这一失败恢复问题，我们提出了覆盖度引导的数据增强框架 RESample，主动补充演示数据集用于失败恢复。具体来说，为引导增强并生成真实世界中可能出现的失败模式，RESample 训练一个保守覆盖度函数，用于识别存在于实际数据分布内但缺失于标准成功演示中的失败案例。在评估得到的覆盖度差异引导下，我们进行探索性采样，主动采样探索行为并随后配合恢复动作，以包含失败恢复轨迹的扩展数据覆盖训练数据。借助增强后的轨迹，在真实环境中发生偏差的改良策略能够从失败中恢复。

在 LIBERO 基准和真实世界操作任务上的实验表明，RESample 稳定提升了策略成功率，在不超过 20% 额外样本的条件下取得了最高 12% 的绝对增益。

## 关键词

#VLA #数据增强 #失败恢复 #机器人操作 #模仿学习 #探索性采样
