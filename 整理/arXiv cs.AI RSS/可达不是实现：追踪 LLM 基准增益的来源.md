---
title: "可达不是实现：追踪 LLM 基准增益的来源"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Reachability Is Not Realization- Tracing the Sources of LLM Benchmark Gains.md"
source_note: "[[信息源/arXiv cs.AI RSS/Reachability Is Not Realization- Tracing the Sources of LLM Benchmark Gains]]"
source_sha256: e6f64badce44f25cdcea83cae2a08b1850c84e17a2039f42b8680d6e60ee566f
original_url: "https://arxiv.org/abs/2608.03219"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 可达不是实现：追踪 LLM 基准增益的来源

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yanchao Li、Wanhao Liu、Jiaqing Xie 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03219)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Reachability Is Not Realization- Tracing the Sources of LLM Benchmark Gains|查看原始文件]]

## 摘要

- 建立固定预算、温度与答案格式下的问题级审计：当默认部署流程产生正确答案时问题被“实现”；当指定探针在固定预算内找到该答案时问题“可达”。
- 测试推理时层路由能否扩展可达性：匹配预算下，随机路由在全部 43 个模型与任务设置中匹敌或超过结构化搜索；盲答案流程几乎不保留任何增益，增益需要访问正确答案。
- 探究可达答案有时未能出现的原因：跨 0.5B 到 31B 的六个案例中，静默一个识别的 MLP 块修复了预定义失败集的 68% 到 92%。
- 测试训练是否通过扩展可达性弥合差距：六个匹配评估中的五个，部署性能上升而可达上限持平或下降——DAPO 部署分数上升 14.7 分而可达上限下降 13.3 分；能力扩展的主张应在匹配评估条件下同时报告实现性能与可达性；代码：https://github.com/LiZaiyuan0619/reachability-not-realization

## 正文

论文编号：arXiv:2608.03219v1（更新类型：new）。以下为摘要全文翻译。

基准增益常被视为 LLM 能力更强的证据。然而，同一增益可能反映模型行为的不同变化。模型可能达到新的答案，或产生本已可达的答案。聚合分数无法逐问题区分这些变化。我们在固定预算、温度与答案格式下建立一个问题级审计。当默认部署流程产生正确答案时，问题被“实现”（realized）。当指定探针在固定预算内找到该答案时，问题“可达”（reachable）。我们首先测试推理时层路由能否扩展可达性。在匹配预算下，随机路由在全部 43 个模型与任务设置中匹敌或超过结构化搜索。盲答案流程几乎不保留任何此类增益，增益反而需要访问正确答案。我们随后追问为什么可达答案有时未能出现。跨 0.5B 到 31B 的六个案例，静默一个识别的 MLP 块修复了预定义失败集的 68% 到 92%。我们接着测试训练是否通过扩展可达性弥合差距。在六个匹配评估中的五个，部署性能上升，而可达上限持平或下降。对 DAPO，部署分数上升 14.7 分，而可达上限下降 13.3 分。在我们审计的设置中，实现与可达因此并不总是一起变化。能力扩展的主张应在匹配评估条件下同时报告实现性能与可达性。代码可在 https://github.com/LiZaiyuan0619/reachability-not-realization 获取。

## 关键词

#LLM评估 #可达性 #层路由 #基准审计
