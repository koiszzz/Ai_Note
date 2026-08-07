---
published: 2026-08-06
title: SiMDex：挖掘相似第一人称视频用于跨形态灵巧操作
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SiMDex- Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation.md
source_note: "[[信息源/arXiv cs.CV RSS/SiMDex- Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation]]"
source_sha256: 74ce81dd1f5a4fab683b2a0a0b866b83753a486ad5fa1dabe9df84ad51c4ba38
original_url: https://arxiv.org/abs/2608.04196
processed: 2026-08-07
language: zh-CN
---

# SiMDex：挖掘相似第一人称视频用于跨形态灵巧操作

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04196)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SiMDex- Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation|查看原始文件]]

## 摘要

- 提出 SiMDex，一个基于相似性的数据挖掘框架，将灵巧操作中 VLA 后训练的人体数据选择问题建模为推荐问题。
- 采用"召回-排序-重排序"三层流水线，从约 3200 万第一人称人体样本池中提取任务相关子集，无需改变 VLA 架构或训练方式。
- 仅用约 149 万挖掘样本（不足样本池 5%），将整体成功率从 47.7% 提升到 61.1%，表明选择性策展优于不加区分的混合数据。

## 正文

近年来，扩展第一人称人体视频用于机器人操作的趋势呈爆炸式增长，但究竟哪些数据真正有益于灵巧操作仍不清楚。我们提出 SiMDex，一个基于相似性的数据挖掘框架，将灵巧操作中 VLA（视觉-语言-动作模型）后训练的人体数据选择问题建模为推荐问题。对于每条机器人演示，SiMDex 采用三层"召回-排序-重排序"流水线，从约 3200 万个第一人称人体样本池中提取任务相关子集，在形态无关的动作空间中运行，无需对 VLA 架构或训练做出任何改变。与使用等量随机采样人体数据训练的强基线相比，SiMDex 仅使用约 149 万个挖掘样本（不足样本池的 5%），却将整体成功率从 47.7% 提升到 61.1%，表明选择性策展优于不加区分的混合数据。

## 关键词

#机器人操作 #VLA #数据挖掘 #第一人称视频 #灵巧操作
