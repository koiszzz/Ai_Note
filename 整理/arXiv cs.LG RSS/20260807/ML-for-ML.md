---
published: 2026-08-07
title: "ML-for-ML"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ML-for-ML.md"
source_note: "[[信息源/arXiv cs.LG RSS/ML-for-ML]]"
source_sha256: 8cbb9cd6e24738d924f2bf5efa52f684eb25966c0ceef2549e70aea8d31ed495
original_url: "https://arxiv.org/abs/2608.06046"
processed: 2026-08-07
language: zh-CN
---

# ML-for-ML

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yutong Zhao, Noga H. Rotman, Gianni Antichi, Ran Ben Basat
> - **发布时间**：2026-08-07
> - **分类**：cs.NI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06046)

## 摘要

- AI 训练工作负载快速增长，其时间、能耗与基础设施成本日益重要；共享云集群中训练与微调任务与并行工作负载争用网络资源，而网络机制与 ML 训练选择通常分开优化。
- 论证这种分离使端到端性能被搁置：网络侧与 ML 侧旋钮在共享的达目标损失时间目标下联合选择。
- 呈现 ML-for-ML 跨层视角；初步原型显示通过共同优化 ML 与网络参数，达目标损失最多快 42%。

## 正文

AI 训练工作负载快速增长，使其时间、能耗与基础设施成本日益重要。在共享云集群中，训练与微调任务与并行运行的工作负载争用网络资源，而网络机制与 ML 训练选择通常被分开优化：网络控制字节如何移动，ML 系统控制通信何时发生与多少。研究论证这种分离使端到端性能被搁置。研究呈现 ML-for-ML，一个跨层视角：在网络侧与 ML 侧旋钮在共享的达目标损失（time-to-target-loss）目标下联合选择。初步原型显示，通过共同优化 ML 与网络参数，达到目标损失最多快 42%。

## 关键词

网络优化、分布式训练、跨层协同、云集群、ML 系统
