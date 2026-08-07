---
published: 20260806
title: "A/B Agent：工业 A/B 测试中策略迭代的自我进化智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A-B Agent- A Self-Evolving Agent for Strategy Iteration in Industrial A-B Testing.md"
source_note: "[[信息源/arXiv cs.AI RSS/A-B Agent- A Self-Evolving Agent for Strategy Iteration in Industrial A-B Testing]]"
source_sha256: 354e9aeed0f76ff1434e2431a7529987d731df79c8aebe04f61d3727cb5d3e62
original_url: "https://arxiv.org/abs/2608.04625"
processed: 2026-08-06
language: zh-CN

---

# A/B Agent：工业 A/B 测试中策略迭代的自我进化智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhuohang Jiang, Yuxin Chen, Yongsen Pan, Zheng Hu, Wenqi Fan, Qing Li, Hongyang Wang, Jun Wang, Wenwu Ou
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04625)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A-B Agent- A Self-Evolving Agent for Strategy Iteration in Industrial A-B Testing|查看原始文件]]

## 摘要

- 工业推荐策略迭代严重依赖大规模 A/B 实验，传统调优需要专家反复设计策略、配置实验、分析结果和调整参数，劳动密集且耗时。
- 本文提出 A/B Agent，一个用于工业推荐策略优化的闭环 A/B 智能体，包含三个紧密耦合的核心组件：历史策略知识组织、自主目标感知策略生成和实验引导的策略自我进化。
- 将历史策略组织为分层经验树，通过多路径 Tree-RAG 检索可迁移证据生成可执行策略，持续分析在线 A/B 反馈指导自主调优；在真实短视频电商推荐系统中实现 GMV 提升 4.829%。

## 正文

工业推荐策略迭代严重依赖大规模 A/B 实验。传统调优需要专家反复设计策略、配置实验、分析结果和调整参数，使过程劳动密集且耗时。同时，历史实验中的宝贵知识往往碎片化，仅靠手动专家努力难以系统化复用。现有 RAG 智能体通过检索先前策略部分缓解这一负担，但通常以扁平方式组织经验，忽视业务场景、推荐阶段、优化目标和实验上下文之间的层级关系。这常常导致检索不匹配和跨场景迁移有限，同时阻止智能体通过顺序 A/B 反馈持续改进策略和参数。为解决这些局限，我们提出 A/B Agent，一个用于工业推荐策略优化的闭环 A/B 智能体。该框架包含三个紧密耦合的核心组件：历史策略知识组织、自主目标感知策略生成和实验引导的策略自我进化。它将历史策略组织为分层经验树，通过多路径 Tree-RAG 检索可迁移证据以生成可执行策略，并持续分析在线 A/B 反馈以指导自主调优和更新经验树实现自我进化。广泛的离线和在线评估证明了其有效性，包括在真实短视频电商推荐系统中实现 GMV 提升 4.829%，同时所有护栏指标保持正收益。

## 关键词

#A/B测试 #推荐系统 #智能体 #自我进化 #arXiv