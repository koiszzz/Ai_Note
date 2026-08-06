---
title: "FedRings：LEO 卫星星座可扩展、拓扑感知的联邦学习框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/FedRings- A Scalable and Topology-Aware Federated Learning Framework for LEO Satellite Constellation.md"
source_note: "[[信息源/arXiv cs.LG RSS/FedRings- A Scalable and Topology-Aware Federated Learning Framework for LEO Satellite Constellation]]"
source_sha256: 83ca8dc7032042f601560c1ee6f1434a8a604588126f0d1f5f0387d94d393715
original_url: "https://arxiv.org/abs/2608.03436"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# FedRings：LEO 卫星星座可扩展、拓扑感知的联邦学习框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Ziwu Liu、Inês Pinto Gouveia、Rehana Yasmin 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03436)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/FedRings- A Scalable and Topology-Aware Federated Learning Framework for LEO Satellite Constellation|查看原始文件]]

## 摘要

- 提出 FedRings，去中心化框架：把卫星组织为基于环的通信结构——使用带链路感知通信调度的时空路由策略，使模型交换与实际可见窗口及 LEO 时变连接模式对齐；模型更新沿环传播，用自适应稀疏增量聚合（渐进组合压缩更新）减少通信开销；历史补偿机制在通信中断时维持训练连续性。
- 低地球轨道（LEO）卫星网络的联邦学习受频繁链路变化、短接触时间与高度动态拓扑限制，使集中或同步训练低效且难扩展。
- 组合拓扑感知路由、通信调度与高效聚合，FedRings 在动态 LEO 网络实现稳定高效学习并降低通信成本。
- 实验显示现实设置中一致优于现有方法。

## 正文

论文编号：arXiv:2608.03436v1（更新类型：cross）。以下为摘要全文翻译。

低地球轨道（LEO）卫星网络上的联邦学习受频繁链路变化、短接触时间与高度动态拓扑限制，使集中或同步训练低效且难以扩展。为解决这一问题，我们提出 FedRings，一个把卫星组织为基于环通信结构的去中心化框架。它使用带链路感知通信调度的时空路由策略，使模型交换与 LEO 中实际可见窗口和时变连接模式对齐。模型更新沿环传播，使用自适应稀疏增量聚合：渐进组合并压缩更新，减少通信开销。为处理通信中断，一个历史补偿机制维持训练连续性。通过组合拓扑感知路由、通信调度与高效聚合，FedRings 在动态 LEO 网络中实现稳定且高效的学习，同时降低通信成本，而实验表明它在现实设置中一致优于现有方法。

## 关键词

#联邦学习 #LEO卫星 #拓扑感知 #通信调度
