---
published: 2026-08-07
title: "通信感知的多智能体强化学习用于去中心化协同 UAV 部署"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Communication-Aware Multi-Agent Reinforcement Learning for Decentralized Cooperative UAV Deployment.md"
source_note: "[[信息源/arXiv cs.LG RSS/Communication-Aware Multi-Agent Reinforcement Learning for Decentralized Cooperative UAV Deployment]]"
source_sha256: e89ed5868862247c3465f76a657872acde18f26f5720fd89a8ead1f2c671dd31
original_url: "https://arxiv.org/abs/2603.16141"
processed: 2026-08-07
language: zh-CN
---

# 通信感知的多智能体强化学习用于去中心化协同 UAV 部署

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Enguang Fan, Yifan Chen, Zihan Shan, Klara Nahrstedt, Matthew Caesar, Jae Kim
> - **发布时间**：2026-08-07
> - **分类**：cs.MA
> - **原文**：[打开链接](https://arxiv.org/abs/2603.16141)

## 摘要

- 提出基于图的 CTDE（集中训练、去中心执行）多智能体强化学习框架：集中评论家与全局状态仅训练时可用，每个 UAV 用局部观测与邻近消息执行共享策略。
- 受限通信下，邻居关系由 SNR 阈值连通图诱导；架构用智能体-实体注意力模块编码局部状态，并经信号质量受限通信图聚合 UAV 间消息。
- 在协作中继部署任务 DroneConnect 上评估：受限通信与部分可观测下，目标覆盖较 MAPPO 提升约 12%。
- 与具备全节点可观测性的混合整数线性规划（MILP）离线上界保持竞争力。

## 正文

自主无人机（UAV）群日益用作快速部署的空中中继与传感平台，但实际部署必须在部分可观测性与间歇性点对点连通性下运行。本文提出一个基于图的 CTDE（集中训练、去中心执行）多智能体强化学习框架：集中评论家与全局状态仅训练时可用，每个 UAV 则使用局部观测与来自附近邻居的消息执行共享策略。在受限通信下，邻居关系由 SNR 阈值连通图诱导。架构用智能体-实体注意力模块编码局部智能体状态与附近实体，并通过由信道模型定义的信号质量受限通信图，用邻居自注意力聚合 UAV 间消息。研究在协作中继部署任务 DroneConnect 上评估该框架。实验结果表明，受限通信与部分可观测下，所提方法的目标覆盖较 MAPPO 提升约 12%，同时与具备全节点可观测性的混合整数线性规划（MILP）离线上界保持竞争力。

## 关键词

多智能体强化学习、UAV、去中心化、通信感知、CTDE
