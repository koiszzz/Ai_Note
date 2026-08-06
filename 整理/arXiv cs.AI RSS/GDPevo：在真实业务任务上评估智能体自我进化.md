---
title: "GDPevo：在真实业务任务上评估智能体自我进化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GDPevo- Evaluating Agent Self-Evolution on Real Business Tasks.md"
source_note: "[[信息源/arXiv cs.AI RSS/GDPevo- Evaluating Agent Self-Evolution on Real Business Tasks]]"
source_sha256: 3dced1143f6a376c30d7b47f209bd1054c79ccda1e5bca41936853c2433d2298
original_url: "https://arxiv.org/abs/2608.03764"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# GDPevo：在真实业务任务上评估智能体自我进化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Leijun Zhou 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03764)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GDPevo- Evaluating Agent Self-Evolution on Real Business Tasks|查看原始文件]]

## 摘要

- 提出 GDPevo，扎根于 GDP 相关企业工作流的进化原生基准及全自动数据流水线：核心机制“规则杂交”把每个企业工作流分解为原子业务规则，在训练任务间分配规则子集，并在留出测试任务中重组，使测试期收益可归因。
- 覆盖 CRM、ERP、金融、医疗、法律与数据中心工作流；V1 含 12 组 120 个任务（每组 5 个训练与 5 个留出测试任务），V2 两天内扩展到 24 组 240 个任务。
- 四种监督类型下评估四个智能体：自我进化一致提升留出准确率最高 16.44 个百分点，但最优进化智能体仍远低于全知先知的 91.6% 上限。
- 流水线、基准与完整评估结果开源：https://github.com/Prism-Shadow/GDPevo

## 正文

论文编号：arXiv:2608.03764v1（更新类型：new）。以下为摘要全文翻译。

智能体自我进化根据先前经验更新智能体的持久状态，并复用它更有效地解决相关任务。评估自我进化很困难：现有基准对经济价值高的任务领域覆盖有限，不总是设计训练与测试任务使测试期收益可归因于训练经验，并且易受数据污染影响。我们提出 GDPevo，一个扎根于 GDP 相关企业工作流的进化原生基准，以及生成它的全自动数据流水线。其核心机制“规则杂交”（rule hybridization）把每个企业工作流分解为原子业务规则，在训练任务间分配这些规则的子集，并在留出测试任务中重组它们，使测试期收益可归因。GDPevo 覆盖 CRM、ERP、金融、医疗、法律与数据中心工作流。其 V1 发布包含 12 组 120 个任务，每组 5 个训练与 5 个留出测试任务。完全自动化使流水线能在两天内把套件扩展到 24 组 240 个任务（V2），为污染问题提供实际应对。使用 GDPevo，我们在四种监督类型下评估了四个智能体（各含框架与模型）。自我进化一致提升留出准确率最高 16.44 个百分点。但最优的进化智能体仍远低于全知先知的 91.6% 上限，表明当前智能体的自我进化能力远未完全实现。我们在 https://github.com/Prism-Shadow/GDPevo 公开发布流水线、基准与完整评估结果。

## 关键词

#智能体自我进化 #业务工作流 #基准测试 #规则杂交
