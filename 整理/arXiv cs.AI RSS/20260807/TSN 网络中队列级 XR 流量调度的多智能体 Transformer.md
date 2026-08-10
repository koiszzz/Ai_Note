---
published: 2026-08-07
title: "TSN 网络中队列级 XR 流量调度的多智能体 Transformer"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Multi-Agent Transformer for Queue-Level XR Traffic Scheduling in TSN Networks.md"
source_note: "[[信息源/arXiv cs.AI RSS/Multi-Agent Transformer for Queue-Level XR Traffic Scheduling in TSN Networks]]"
source_sha256: 2323cad51e7d5db925c9cee6c4b9d0b9bdde720b0dbf296f4161fc3d6267846b
original_url: "https://arxiv.org/abs/2608.05340"
processed: 2026-08-07
language: zh-CN
---

# TSN 网络中队列级 XR 流量调度的多智能体 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Marcos Carvalho, Fatih Temiz, Shavbo Salehi, Melike Erol-Kantarci, Daniel F. Macedo
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05340)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Multi-Agent Transformer for Queue-Level XR Traffic Scheduling in TSN Networks|查看原始文件]]

## 摘要

- 时间敏感网络（TSN）与移动边缘计算（MEC）对支持扩展现实（XR）等时间敏感应用的超可靠低延迟通信具有强大潜力；但 XR 广泛采用带来显著挑战，因 MEC 环境中共存服务导致共享网络资源竞争。
- XR 流量类型在时序要求上具有不同特性与关键性，进一步增加此类环境的复杂度与动态性；尽管强化学习在动态网络场景的 TSN 调度优化中显示前景，现有方法依赖集中式或高层多智能体设计，且通常针对周期性、可预测的工业流量，限制其对 XR 工作负载的适用性。
- 这些方法因此受（i）粗粒度控制捕获队列间依赖能力有限，与（ii）对高度动态异构 XR 流量适应性差的困扰。
- 提出队列级 XR 流量调度的多智能体强化学习方法：采用多智能体 Transformer（MAT）通过对智能体观测与动作的注意力建模队列间依赖，实现跨异构共存 XR 应用的隐式协调；仿真结果表明所提方法优于基线，实现最多 71.42% 延迟降低与最多 83.2% 失败率降低，同时跨所有队列一致保持高可靠性。

## 正文

时间敏感网络（Time-Sensitive Networking，TSN）与移动边缘计算（Mobile Edge Computing，MEC）对实现时间敏感应用（如扩展现实，eXtended Reality，XR）的超可靠低延迟通信具有强大潜力。然而，XR 的广泛采用带来显著挑战，因为 MEC 环境中的共存服务导致共享网络资源竞争。此外，XR 流量类型在时序要求方面具有不同特性与关键性，进一步增加此类环境的复杂度与动态性。尽管强化学习已在动态网络场景的 TSN 调度优化中显示前景，现有方法依赖集中式或高层多智能体设计，且通常针对周期性、可预测的工业流量，限制其对 XR 工作负载的适用性。因此，这些方法受（i）因粗粒度控制捕获队列间依赖的能力有限，与（ii）对高度动态异构 XR 流量的适应性差的困扰。为填补这些空白，我们提出一个队列级 XR 流量调度的多智能体强化学习方法。我们采用多智能体 Transformer（multi-agent transformer，MAT），通过对智能体观测与动作的注意力建模队列间依赖，实现跨异构共存 XR 应用的隐式协调。我们的仿真结果表明，所提方法优于基线，实现最多 71.42% 的延迟降低与最多 83.2% 的失败率降低，同时跨所有队列一致保持高可靠性。

## 关键词

#TSN #XR流量 #多智能体Transformer #队列调度
