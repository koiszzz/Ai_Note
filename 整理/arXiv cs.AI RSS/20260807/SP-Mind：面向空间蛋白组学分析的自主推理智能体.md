---
published: 2026-08-07
title: "SP-Mind：面向空间蛋白组学分析的自主推理智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SP-Mind- An Autonomous Reasoning Agent for Spatial Proteomics Analysis.md"
source_note: "[[信息源/arXiv cs.AI RSS/SP-Mind- An Autonomous Reasoning Agent for Spatial Proteomics Analysis]]"
source_sha256: ab1bb11080e5633d1c667b759d8cf598b9d58ca29744804d97881580b079875e
original_url: "https://arxiv.org/abs/2606.24235"
processed: 2026-08-07
language: zh-CN
---

# SP-Mind：面向空间蛋白组学分析的自主推理智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yucheng Yuan, Yuanfeng Ji, Zhongxiao Li, Ruijiang Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.24235)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SP-Mind- An Autonomous Reasoning Agent for Spatial Proteomics Analysis|查看原始文件]]

## 摘要

- 空间蛋白组学实现组织架构内蛋白表达的单细胞分辨率刻画，对理解肿瘤微环境与指导精准医学至关重要；但当前分析工作流碎片化，需专家手工编排异构工具，限制研究可扩展性与可复现性。
- 呈现 SP-Mind：首个统一空间蛋白组学分析流水线的自主 AI 智能体，从原始多路复用组织成像到下游表型发现——配备专家策划生物分析技能与专用计算工具，SP-Mind 将自然语言查询转化为端到端分析工作流，无需任务特定微调。
- 严格评估能力，引入 SP-Bench：跨多样组织类型、含 18 个不同类别 102 个任务的全方位基准。
- 在 SP-Bench 与既有下游任务的大量评估中，SP-Mind 相对现有开源生物医学智能体基线实现最先进性能；代码公开。

## 正文

空间蛋白组学（spatial proteomics）实现组织架构内蛋白表达的单细胞分辨率刻画，对理解肿瘤微环境与指导精准医学起着关键作用。然而，当前分析工作流仍然碎片化，需要专家对手工编排异构工具，限制研究的可扩展性与可复现性。我们呈现 SP-Mind，首个统一空间蛋白组学分析流水线（从原始多路复用组织成像到下游表型发现）的自主 AI 智能体。配备专家策划的生物分析技能与专用计算工具，SP-Mind 将自然语言查询转化为端到端分析工作流，无需任务特定微调。为严格评估其能力，我们引入 SP-Bench，一个涵盖多样组织类型、由 18 个不同类别 102 个任务组成的综合基准。通过对 SP-Bench 与既有下游任务的大量评估，SP-Mind 相对现有开源生物医学智能体基线实现最先进性能。代码公开于 https://github.com/tomtommyyuan/spmind。

## 关键词

#空间蛋白组学 #生物医学智能体 #自主分析 #肿瘤微环境
