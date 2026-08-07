---
published: 2026-08-06
title: Radar4D-VLM：跨冻结语言模型的提议锚定时间4D雷达推理
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Radar4D-VLM- Proposal-Grounded Temporal 4D Radar Reasoning Across Frozen Language Models.md
source_note: "[[信息源/arXiv cs.CV RSS/Radar4D-VLM- Proposal-Grounded Temporal 4D Radar Reasoning Across Frozen Language Models]]"
source_sha256: 164da9b6afcfa0dab15e9fe030374cefb628d4fcf4776803eaedffca135d4f01
original_url: https://arxiv.org/abs/2608.04130
processed: 2026-08-07
language: zh-CN
---

# Radar4D-VLM：跨冻结语言模型的提议锚定时间4D雷达推理

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04130)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Radar4D-VLM- Proposal-Grounded Temporal 4D Radar Reasoning Across Frozen Language Models|查看原始文件]]

## 摘要

- 提出 Radar4D-VLM，一个仅使用雷达的时序视觉语言模型，在无相机和 LiDAR 输入的情况下，从连续十帧4D雷达点云扫描中进行推理。
- 提取几何锚定的目标提议，将雷达证据组织为目标、场景、运动学三级紧凑令牌层级，并通过参数高效投影器映射到冻结语言骨干，同时用可审计预测头联合建模目标数量、空间分布、运动状态、碰撞风险、语义类别和径向速度。
- 在序列隔离的 K-Radar 开发验证集上 Top-64 提议召回率达 98.13%（4m），并跨八个冻结 Qwen、Phi、Mistral、Llama、Gemma 骨干验证了雷达令牌接口的兼容性。

## 正文

面向自动驾驶的视觉语言模型主要依赖相机和 LiDAR，而4D雷达作为一个独立的感知模态在很大程度上未被探索，尽管它在不利可见条件下具有鲁棒性，且能直接测量径向速度。我们提出 Radar4D-VLM，一个仅使用雷达的时序视觉语言模型，它在没有相机或 LiDAR 输入的情况下，从连续十帧4D雷达点云扫描中进行推理。

Radar4D-VLM 提取几何锚定的目标提议，并将雷达证据组织为包含目标、场景和运动学令牌的紧凑层级。参数高效投影器将这些令牌映射到冻结的语言骨干中，同时可审计的预测头联合建模目标数量、空间分布、运动状态、碰撞风险、语义类别和径向速度。Radar4D-VLM 在统一的冻结骨干接口中结合了提议锚定的时序目标令牌化、全局场景上下文和显式运动学令牌。

在序列隔离的 K-Radar 开发验证集上，其 Top-64 提议召回率达到 98.13%（4m），分别比固定网格和均匀随机对照高出 6.40 和 22.83 个百分点。我们进一步评估了在相同适配预算下跨越八个冻结 Qwen、Phi、Mistral、Llama 和 Gemma 骨干的 24 次匹配实验。雷达令牌接口在所有五个语言模型家族上保持兼容，而匹配的对齐、置乱和无语言对照表明存在传感器依赖性，但并没有来自对齐语言监督的稳定直接头收益。这些结果为仅雷达的多模态场景和运动推理建立了可复现的基础，同时将接口兼容性与语言监督的收益区分开来。

## 关键词

#4D雷达 #视觉语言模型 #自动驾驶 #多模态推理
