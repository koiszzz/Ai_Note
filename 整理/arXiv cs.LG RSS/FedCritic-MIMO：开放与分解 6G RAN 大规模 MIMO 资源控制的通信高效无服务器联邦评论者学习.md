---
title: "FedCritic-MIMO：开放与分解 6G RAN 大规模 MIMO 资源控制的通信高效无服务器联邦评论者学习"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/FedCritic-MIMO- Communication-Efficient Serverless Federated Critic Learning for Massive-MIMO Resour.md"
source_note: "[[信息源/arXiv cs.LG RSS/FedCritic-MIMO- Communication-Efficient Serverless Federated Critic Learning for Massive-MIMO Resour]]"
source_sha256: 4d6260df46ffa972e429490f1aa8f82ce81f73a97e9556a7f15802007abbc84d
original_url: "https://arxiv.org/abs/2608.03852"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# FedCritic-MIMO：开放与分解 6G RAN 大规模 MIMO 资源控制的通信高效无服务器联邦评论者学习

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Amin Farajzadeh、Melike Erol-Kantarci
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03852)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/FedCritic-MIMO- Communication-Efficient Serverless Federated Critic Learning for Massive-MIMO Resour|查看原始文件]]

## 摘要

- 提出 FedCritic-MIMO，开放与分解 6G RAN 中独立可部署小区级控制器 AI 原生资源控制的通信高效无服务器联邦多智能体强化学习框架：控制器不共享训练器、保留本地演员与个性化评论者组件、只交换兼容共享评论者参数。
- 面向 reuse-1 多小区大规模 MIMO OFDMA 部署（RAN 控制器联合管理用户调度、每流功率分配、波束成形、干扰与长期 QoS，控制器间信令有限）：每基站本地执行其演员（无集中训练或演员联邦），评论者知识经干扰感知图对等交换；经无线感知事件触发、带误差反馈的自适应逐层 top-k 稀疏评论者交换与平衡干扰感知融合实现协作。
- 固定策略、冻结目标评论者回归模型下建立平衡压缩对等评论者递归的条件有限时平稳性与共识保证。
- 强干扰耦合 reuse-1 仿真：FedCritic-MIMO 在启发式、独立学习、集中训练与通信消融基线中取得最佳性能-通信权衡：最高留出吞吐、改善用户速率分布与平均 SINR、提高 QoS 满意度、每交付比特干扰成本最低；评论者通信开销相对未压缩分布式交换降低 76%——无服务器交换兼容共享评论者参数可在无集中轨迹收集或参数服务器聚合下协调 RAN 控制器。

## 正文

论文编号：arXiv:2608.03852v1（更新类型：new）。以下为摘要全文翻译。

本文提出 FedCritic-MIMO：一个通信高效的无服务器联邦多智能体强化学习框架，用于开放与分解 6G RAN 中、跨独立可部署小区级控制器的 AI 原生资源控制。控制器不共享训练器，保留本地演员与个性化的评论者组件，并且只交换兼容的共享评论者参数。FedCritic-MIMO 面向 reuse-1 多小区大规模 MIMO OFDMA 部署：RAN 控制器在控制器间信令有限的情况下联合管理用户调度、每流功率分配、波束成形、干扰与长期 QoS。每个基站本地执行其演员，无需集中训练或演员联邦，而评论者知识经一个干扰感知图对等交换。它通过无线感知的事件触发、带误差反馈的自适应逐层 top-k 稀疏评论者交换与平衡的干扰感知融合实现这一协作。我们在固定策略、冻结目标评论者回归模型下，为平衡、压缩的对等评论者递归建立条件有限时平稳性与共识保证。在强干扰耦合的 reuse-1 仿真中，FedCritic-MIMO 在启发式、独立学习、集中训练与通信消融基线中取得最佳性能-通信权衡。它实现最高的留出吞吐、改善用户速率分布与平均 SINR、提高 QoS 满意度，并在学习基线中取得每交付比特的最低干扰成本。它相对未压缩的分布式评论者交换把评论者通信开销降低 76%。这些结果表明，无服务器交换兼容的共享评论者参数可以在没有集中轨迹收集或参数服务器聚合的情况下协调 RAN 控制器。

## 关键词

#6G RAN #大规模MIMO #联邦学习 #资源控制
