---
published: 2026-08-06
title: "HCRide：以人为本网约车中乘客公平性与司机偏好的协调"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/HCRide- Harmonizing Passenger Fairness and Driver Preference for Human-Centered Ride-Hailing.md"
source_note: "[[信息源/arXiv cs.LG RSS/HCRide- Harmonizing Passenger Fairness and Driver Preference for Human-Centered Ride-Hailing|查看原始文件]]"
source_sha256: 52c41103500c32126cba15b9c49ec4b0637926d7d5c1c07216b1d55a362c8182
original_url: https://arxiv.org/abs/2508.04811
processed: 2026-08-07
language: zh-CN
---

# HCRide：以人为本网约车中乘客公平性与司机偏好的协调

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.04811)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/HCRide- Harmonizing Passenger Fairness and Driver Preference for Human-Centered Ride-Hailing|查看原始文件]]

## 摘要

- 订单派发系统在网约车服务中至关重要，直接影响运营商收入、司机利润与乘客体验；现有工作大多聚焦于提升以运营商收入为目标的系统效率，这可能给乘客和司机都带来糟糕的体验。
- 本文旨在设计以人为本的网约车系统，在不牺牲整体系统效率的前提下同时考虑乘客公平性与司机偏好；难点在于两者可能冲突，优化其一可能牺牲另一。
- 为此设计 HCRide，一个基于新型多智能体强化学习算法 Harmonization-oriented Actor-Bi-Critic（Habic）的以人为本网约车系统，包含三个主要组件（多智能体竞争机制、动态 Actor 网络和 Bi-Critic 网络），在考虑司机偏好的同时优化系统效率与乘客公平性。
- 使用深圳与纽约市两个真实网约车数据集进行广泛评估：相比最先进的基线，HCRide 将系统效率提升 2.02%、公平性提升 5.39%、司机偏好提升 10.21%。

## 正文

订单派发系统在网约车服务中起着至关重要的作用，它直接影响运营商收入、司机利润和乘客体验。大多数现有工作侧重于提升以运营商收入为目标的系统效率，这可能会给乘客和司机双方带来糟糕的体验。因此，在这项工作中，我们的目标是设计一个以人为本的网约车系统，在不损害整体系统效率的前提下，同时考虑乘客公平性和司机偏好。然而，实现这一目标并非易事，因为乘客公平性与司机偏好之间存在潜在冲突，优化其中一方可能牺牲另一方。为应对这一挑战，我们设计了 HCRide，一个基于名为 Harmonization-oriented Actor-Bi-Critic（Habic）的新型多智能体强化学习算法的以人为本网约车系统，它包含三个主要组件（即多智能体竞争机制、动态 Actor 网络和 Bi-Critic 网络），用于在考虑司机偏好的同时优化系统效率和乘客公平性。我们使用来自深圳和纽约市的两个真实世界网约车数据集对 HCRide 进行了广泛评估。实验结果表明，与最先进的基线相比，我们的 HCRide 有效地将系统效率提高了 2.02%，公平性提高了 5.39%，司机偏好提高了 10.21%。

## 关键词

#网约车 #多智能体强化学习 #公平性 #订单派发
