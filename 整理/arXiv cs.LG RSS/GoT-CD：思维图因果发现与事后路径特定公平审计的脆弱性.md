---
title: "GoT-CD：思维图因果发现与事后路径特定公平审计的脆弱性"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GoT-CD- Graph-of-Thoughts Causal Discovery and the Fragility of Post-hoc Path-Specific Fairness Audi.md"
source_note: "[[信息源/arXiv cs.LG RSS/GoT-CD- Graph-of-Thoughts Causal Discovery and the Fragility of Post-hoc Path-Specific Fairness Audi.]]"
source_sha256: df9d2aa51b2df72dfa9213507c4359b1ffacb1b641c4f8404dd539effa11723d
original_url: "https://arxiv.org/abs/2608.02877"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# GoT-CD：思维图因果发现与事后路径特定公平审计的脆弱性

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Nitish Nagesh、Elahe Khatibi、Thomas Dean Hughes、Mahdi Bagheri、Pratik Gajane、Amir M. Rahmani
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02877)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/GoT-CD- Graph-of-Thoughts Causal Discovery and the Fragility of Post-hoc Path-Specific Fairness Audi.|查看原始文件]]

## 摘要

- 因果发现从观测数据恢复有向结构，在临床场景中日益用于支持机制推理与预测模型的公平审计；路径特定反事实公平询问受保护属性是否通过非法路径影响结果，但这些估计量相对于给定因果图定义，因此继承了发现步骤引入的任何误差。
- 发现方法通常以加权所有边相等的聚合结构指标评分，且没有既定评估询问审计所依赖的特定路径是否在发现后幸存——或当该路径缺失时审计报告什么。
- 证明全图思维图（Graph-of-Thoughts）推理产生的无环发现图在结构上与 LLM 基线相当，但结构保真度本身并不能保证公平忠实的审计。
- 引入 GoT-CD：推理单元是完整候选边集——并行生成多个图，用确定性有效性函数评分，并在禁止虚构边的硬并约束下合并，用贪心投影在提交前强制 DAG。
- GoT-CD 在全部五个报告基准上返回有效 DAG，并在 Asia、Alzheimer's 与 COVID-Respiratory 数据集上取得 LLM 方法中最佳 DAG 有效 F1 分数。
- 在已知不公平路径的 Alzheimer's 基准上，事后路径特定审计显示：八个发现图中的五个未能恢复从敏感属性到结果的任何路径，因此报告总体效应为零，而中介效应持续存在——这要求在结构发现之外进行下游路径特定公平分析。

## 正文

论文编号：arXiv:2608.02877v1（更新类型：new）。以下为摘要全文翻译。

因果发现从观测数据恢复有向结构，在临床设置中日益被用于支持机制推理与预测模型的公平审计。路径特定反事实公平询问受保护属性是否通过非法路径影响结果，但这些估计量是相对于所提供因果图定义的，因此会继承发现步骤引入的任何误差。发现方法通常以加权所有边相等的聚合结构指标评分，且没有既定评估询问审计所依赖的特定路径能否在发现中幸存——或者当该路径缺失时审计会报告什么。本文表明，全图思维图推理产生的无环发现图在结构上与大型语言模型（LLM）基线相当，但仅靠结构保真度并不能保证公平忠实的审计。我们引入 GoT-CD，其中推理单元是完整的候选边集：并行生成多个图，由确定性有效性函数评分，并在禁止虚构边的硬并约束下合并，用贪心投影在提交前强制 DAG。GoT-CD 在全部五个报告基准上返回有效 DAG，并在 Asia、Alzheimer's 与 COVID-Respiratory 数据集上取得 LLM 方法中最佳的 DAG 有效 F1 分数。在具有已知不公平路径的 Alzheimer's 基准上，事后路径特定审计表明：八个发现图中有五个未恢复从敏感属性到结果的任何路径，因此报告总体效应为零，而中介效应仍然存在，这要求在结构发现之外进行下游的路径特定公平分析。

## 关键词

#因果发现 #思维图 #路径特定公平 #公平审计 #LLM
