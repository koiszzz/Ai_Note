---
published: 2026-08-05
title: "MerchantBench：评估电商运营中长期连贯性的 LLM 智能体基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MerchantBench- Benchmarking LLM Agents for Long-Term Coherence in E-Commerce Operations.md"
source_note: "[[信息源/arXiv cs.AI RSS/MerchantBench- Benchmarking LLM Agents for Long-Term Coherence in E-Commerce Operations]]"
source_sha256: c93f6d5d1a033bb3ec988bce0ad929e6e81ea26091b297f823f14c594c3ced94
original_url: "https://arxiv.org/abs/2607.28956"
processed: 2026-08-05
language: zh-CN
---

# MerchantBench：评估电商运营中长期连贯性的 LLM 智能体基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qiming Shi、Yulong Tao、Linbo Jin 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28956)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MerchantBench- Benchmarking LLM Agents for Long-Term Coherence in E-Commerce Operations|查看原始文件]]

## 摘要

- 引入 MerchantBench：扎根于 98,843 条真实电商产品记录的 365 天订单级模拟，配备 26 个智能体交互工具；把及时可观测的上游供应商事件与延迟的下游订单结果耦合，要求智能体跟踪单个订单生命周期并重新审视早期决策。
- 评估八个 LLM × 两个智能体框架的 48 次运行（每次覆盖 365 个模拟日）。
- 结果揭示即使最新 LLM 与人类参与者之间也存在巨大差距：最佳 LLM 配置仅达到人类参与者平均最终净资产均值的 27.3%。
- 背景：现实部署需要长期连贯性——在扩展视界上保持有目的行为、同时使决策适应累积证据的能力；卖家侧电商通过产品采购、上架与定价控制、现金流管理与混合延迟反馈适应中的循环与相互依赖决策提供合适设置。

## 正文

论文编号：arXiv:2607.28956v2（更新类型：replace）。以下为摘要全文翻译。

大语言模型智能体日益被评估为自主工具用户，然而大多数基准聚焦于带即时成功标准的有界任务。现实部署往往要求长期连贯性（Long-Term Coherence）：在扩展视界上保持有目的行为，同时使决策适应累积证据的能力。评估这种能力需要一个持久环境：动作约束未来选择、反馈以异构延迟到达、不连贯行为产生可测量的累积效应。卖家侧电商通过产品采购、上架与定价控制、现金流管理与混合延迟反馈适应中的循环与相互依赖决策，为此类评估提供合适设置。我们引入 MerchantBench，一个扎根于 98,843 条真实电商产品记录、配备 26 个智能体交互工具的 365 天订单级模拟。MerchantBench 把及时可观测的上游供应商事件与延迟的下游订单结果耦合，要求智能体跟踪单个订单生命周期并重新审视早期决策。我们在两个智能体框架下评估八个 LLM，共 48 次运行，每次覆盖 365 个模拟日。我们的结果揭示了即使最新 LLM 与人类参与者之间的巨大差距：最佳 LLM 配置仅达到人类参与者实现的平均最终净资产均值的 27.3%。

## 关键词

#电商 #长期连贯性 #LLM智能体 #模拟
