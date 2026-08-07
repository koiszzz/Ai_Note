---
published: 20260806
title: "更少 token，更小缓存：奖励协调的高效推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Fewer Tokens, Smaller Cache- Reward-Coordinated Efficient Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/Fewer Tokens, Smaller Cache- Reward-Coordinated Efficient Reasoning]]"
source_sha256: b986904f930552a7884c88d8f0bd066053498dcc8f450a9c6d1b9099df1f7ebd
original_url: "https://arxiv.org/abs/2608.04771"
processed: 2026-08-06
language: zh-CN

---

# 更少 token，更小缓存：奖励协调的高效推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qiyuan Zhu, Dezhi Li, Pengyu Cheng, Tianle Chen, Jiacheng Wang, Ruijie Shen, Hao Gu, Sida Lin, Zirui Liu, Jiacheng Liu, Sirui Han
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04771)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Fewer Tokens, Smaller Cache- Reward-Coordinated Efficient Reasoning|查看原始文件]]

## 摘要

- 大型推理模型（LRM）通过长思维链（CoT）推理在复杂任务上表现出色，但其冗长中间步骤导致严重过度思考，膨胀推理成本；KV 缓存压缩是常见解决方案，但现有面向推理的方法跨轨迹应用统一策略，仅按从缓存移除的内容判断压缩。
- 两个观察指向相反方向：推理状态对上下文损失的容忍度沿轨迹变化，过程奖励跟踪它——删除高奖励步骤的 token 比随机删除相同预算远更保持准确率；压缩在生成侧不免费，更小缓存导致模型生成更多 token，部分抵消节省。
- 本文提出 ReCo（奖励协调压缩），一个逐步框架，轻量过程奖励估计器为每个完成步骤评分并驱动三个组件：奖励自适应 KV 缓存压缩、反射 token 的奖励带惩罚和基于置信度的提前停止；跨三个推理模型和六个基准，ReCo 相对完整 CoT 减少生成 token 37%-65%，端到端延迟降低 2.08-2.35 倍，同时基本保持准确率。

## 正文

大型推理模型（LRM）通过长思维链（CoT）推理在复杂任务上表现出色，但其冗长的中间步骤导致严重过度思考，膨胀推理成本。KV 缓存压缩是常见解决方案，然而现有面向推理的方法跨轨迹应用统一策略，仅按从缓存移除的内容判断压缩。两个观察指向相反方向。第一，推理状态对上下文损失的容忍度沿轨迹变化，过程奖励跟踪它：删除高奖励步骤的 token 比随机删除相同预算远更保持准确率。第二，压缩在生成侧不免费，因为更小缓存导致模型生成更多 token，部分抵消节省。这些共同激励在单一过程奖励下协调两侧。我们提出 ReCo（Reward-Coordinated Compression，奖励协调压缩），一个逐步框架，其中轻量过程奖励估计器为每个完成步骤评分并驱动三个组件：（1）奖励自适应 KV 缓存压缩，在高奖励步骤更狠地缩小保留缓存、低奖励步骤少缩；（2）反射 token 的奖励带惩罚，抑制冗余生成；（3）基于置信度的提前停止，推理可靠时触发。跨三个推理模型和六个基准，ReCo 相对完整 CoT 减少生成 token 37%-65%，端到端延迟降低 2.08-2.35 倍，同时基本保持准确率。

## 关键词

#推理效率 #KV缓存 #思维链 #推理模型 #arXiv