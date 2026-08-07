---
published: 20260806
title: "RESample：通过探索采样实现机器人操作的稳健数据增强框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/RESample- A Robust Data Augmentation Framework via Exploratory Sampling for Robotic Manipulation.md"
source_note: "[[信息源/arXiv cs.AI RSS/RESample- A Robust Data Augmentation Framework via Exploratory Sampling for Robotic Manipulation]]"
source_sha256: 5f118f283e316e027cf0cf193239daca8cc5294f6872b3edd8767bd5aaf7c973
original_url: "https://arxiv.org/abs/2510.17640"
processed: 2026-08-06
language: zh-CN

---

# RESample：通过探索采样实现机器人操作的稳健数据增强框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuquan Xue, Guanxing Lu, Zhenyu Wu, Chuanrui Zhang, Bofang Jia, Zhengyi Gu, Ziwei Wang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.17640)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/RESample- A Robust Data Augmentation Framework via Exploratory Sampling for Robotic Manipulation|查看原始文件]]

## 摘要

- 视觉-语言-动作（VLA）模型用大规模模仿学习数据集训练时显示强操作能力，但这些主要由成功轨迹组成的数据集在执行偏离标准示范时很少提供所需纠正监督；部署期间物理偏差导致分布偏移驱动策略进入失败场景，但缺失失败恢复数据阻止策略纠正这些执行偏差。
- 本文提出覆盖引导数据增强框架 RESample，主动补充失败恢复示范数据集：训练保守覆盖函数识别存在于实际数据分布但在标准成功示范缺失的失败案例，引导增强并生成可能出现在现实中的失败模式。
- 在评估覆盖差异引导下执行探索采样，主动采样探索行为后接恢复动作，用失败恢复轨迹扩展训练数据覆盖；LIBERO 基准和真实世界操作实验显示 RESample 一致改进策略成功率，最多 12% 绝对增益，仅需不超过 20% 额外样本。

## 正文

视觉-语言-动作（VLA）模型用大规模模仿学习数据集训练时显示强操作能力。然而，这些主要由成功轨迹组成的数据集，在执行偏离标准示范时很少提供所需纠正监督。部署期间，物理偏差导致分布偏移（distributional shift）驱动策略进入失败场景，但缺失失败恢复数据阻止策略纠正这些执行偏差。为解决此失败恢复问题，我们提出覆盖引导数据增强框架 RESample，主动补充失败恢复示范数据集。具体来说，为引导增强并生成可能出现在现实中的失败模式，RESample 训练保守覆盖函数识别存在于实际数据分布但在标准成功示范缺失的失败案例。在评估覆盖差异引导下，我们执行探索采样（exploratory sampling），主动采样探索行为后接恢复动作，用失败恢复轨迹扩展训练数据覆盖。借助增强轨迹，在真实设置中偏离的精炼策略可从失败恢复。LIBERO 基准和真实世界操作任务实验表明，RESample 一致改进策略成功率，实现最多 12% 绝对增益，且额外样本不超过 20%。

## 关键词

#机器人操作 #数据增强 #失败恢复 #VLA #arXiv