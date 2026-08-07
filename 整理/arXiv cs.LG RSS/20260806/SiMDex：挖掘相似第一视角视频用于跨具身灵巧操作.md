---
published: 2026-08-06
title: SiMDex：挖掘相似第一视角视频用于跨具身灵巧操作
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SiMDex- Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation.md
source_note: "[[信息源/arXiv cs.LG RSS/SiMDex- Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation]]"
source_sha256: 15dfd4499621c887fa2187dd37c6cd162a7175c4f4729b92d66e3271c123a216
original_url: https://arxiv.org/abs/2608.04196
processed: 2026-08-07
language: zh-CN
---

# SiMDex：挖掘相似第一视角视频用于跨具身灵巧操作

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04196)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SiMDex- Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation|查看原始文件]]

## 摘要

- 提出 SiMDex，一个基于相似度的数据挖掘框架，将灵巧操作中用于 VLA 后训练的人类数据选择建模为推荐问题。
- 采用三层"召回-排序-重排序"流水线，在与形态无关的动作空间中从约 3200 万条第一视角人类样本中提取任务相关子集，无需改动 VLA 架构或训练。
- 仅使用约 149 万条挖掘样本（不足样本池的 5%）即将整体成功率从 47.7% 提升至 61.1%，证明选择性筛选优于不加区分的混合。

## 正文

近年来，以第一视角（egocentric）人类视频扩展机器人操作的规模呈爆发式增长，但究竟哪些数据真正有利于灵巧操作仍不明确。我们提出 SiMDex，一个基于相似度的数据挖掘框架，它将灵巧操作中用于 VLA 后训练的人类数据选择问题建模为推荐问题。对于每条机器人演示，SiMDex 采用三层"召回-排序-重排序"流水线，从约 3200 万条第一视角人类样本的样本池中提取与任务相关的子集，其运行于与形态无关的动作空间中，无需对 VLA 架构或训练方式做任何改动。与使用等量随机采样人类数据训练的强基线相比，SiMDex 仅使用约 149 万条挖掘样本（不足样本池的 5%），却将整体成功率从 47.7% 提升到 61.1%，表明选择性筛选优于不加区分的混合数据。

## 关键词

#数据挖掘 #灵巧操作 #VLA #第一视角视频 #跨具身
