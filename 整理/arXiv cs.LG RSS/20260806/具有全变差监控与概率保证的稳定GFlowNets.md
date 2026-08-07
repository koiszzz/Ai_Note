---
published: 2026-08-06
title: 具有全变差监控与概率保证的稳定GFlowNets
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Stable GFlowNets with TV Monitoring and Probabilistic Guarantees.md
source_note: "[[信息源/arXiv cs.LG RSS/Stable GFlowNets with TV Monitoring and Probabilistic Guarantees]]"
source_sha256: b206604380d1b815aa2fbdd63be4c5751696189743142f8d6687bf46f0115b5a
original_url: https://arxiv.org/abs/2605.01729
processed: 2026-08-07
language: zh-CN
---

# 具有全变差监控与概率保证的稳定GFlowNets

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.01729)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Stable GFlowNets with TV Monitoring and Probabilistic Guarantees|查看原始文件]]

## 摘要

- 评估 GFlowNet 目标函数敏感性，证明学习分布与目标分布之间很小的全变差（TV）距离并不能排除无界的训练损失。
- 建立反向保证，推导损失到 TV 的界，从有界的轨迹平衡损失认证全局保真度。
- 提出 Stable GFlowNets 算法利用理论结果稳定训练，经验上展现出更优的训练行为与分布保真度。

## 正文

生成流网络（GFlowNets）学习按与未归一化奖励成比例的方式采样状态。尽管具有理论前景，实际训练往往不稳定，表现出严重的损失尖峰与模式塌缩。为解决这一问题，我们首先评估 GFlowNet 目标函数的敏感性，证明学习分布与目标分布之间很小的全变差（TV）距离并不能排除无界的训练损失。基于这一不匹配，我们建立反向保证，推导损失到 TV 的界，从而从有界的轨迹平衡损失认证全局保真度。最后，我们提出 Stable GFlowNets，一个利用我们的理论结果来稳定训练的算法，并在经验上展示其改善的训练行为与更优的分布保真度。

## 关键词

#GFlowNets #生成模型 #训练稳定 #全变差距离 #概率保证
