---
published: 2026-08-05
title: "没有效度的测量：智能体 AI 评估中叠加的可靠性问题"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Measurement Without Validity- The Compounding Reliability Problem in Agentic AI Evaluation.md"
source_note: "[[信息源/arXiv cs.AI RSS/Measurement Without Validity- The Compounding Reliability Problem in Agentic AI Evaluation]]"
source_sha256: 5d408b8a52993fe859a61d5ac0ff945522b0b44487a4e1add93e4d242e2c3f6a
original_url: "https://arxiv.org/abs/2608.00794"
processed: 2026-08-05
language: zh-CN
---

# 没有效度的测量：智能体 AI 评估中叠加的可靠性问题

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：William Caban
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00794)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Measurement Without Validity- The Compounding Reliability Problem in Agentic AI Evaluation|查看原始文件]]

## 摘要

- 提出三层叠加效度模型 V_total ≤ V₁×V₂×V₃，刻画跨任务生成（V₁）、人类-模拟器校准（V₂）与自动化判断（V₃）的乘性退化：在经验接地估计下，每阶段保持 70% 效度的流水线对预期构念至多 34% 有效（范围 0.22–0.54）。
- 对 55 篇已发表智能体评估论文的结构化调查验证模型：约 82% 应用结构错配、不完整或缺失的评估者间信度（IRR）指标——与系统性 V₃ 坍缩一致的模式。
- 识别 V₁ 失败（10 个流行基准中 7 个存在任务效度缺陷）与 V₂ 校准错误（最多 9 个百分点的模拟器间方差，非标准美国英语使用者的系统性人口统计差异）的实证证据。
- 提出扎根于心理测量科学、带领域分层信度阈值（ICC≥0.70；alpha 按后果级别 ≥0.67/0.70/0.80）的八项处方，从业者与基准作者可立即应用。

## 正文

论文编号：arXiv:2608.00794v2（更新类型：replace）。以下为摘要全文翻译。

智能体 AI 评估流水线产生支撑部署决策、安全认证与合规声明的主张的基准分数。目前还没有形式框架刻画效度如何跨这些流水线的阶段退化。我们提出一个三层叠加效度模型，V_total ≤ V₁×V₂×V₃，捕获跨任务生成（V₁）、人类-模拟器校准（V₂）与自动化判断（V₃）的乘性退化。在经验接地的估计下，每阶段保留 70% 效度的流水线对预期构念至多 34% 有效（范围 0.22–0.54）。我们对照 55 篇已发表智能体评估论文的结构化调查验证该模型，发现约 82% 应用结构错配、不完整或缺失的评估者间信度（IRR）指标——与系统性 V₃ 坍缩一致的模式。我们进一步识别 V₁ 失败（10 个流行基准中 7 个的任务效度缺陷）与 V₂ 校准错误（最多 9 个百分点的模拟器间方差，以及非标准美国英语使用者的系统性人口统计差异）的实证证据。我们推导出扎根于心理测量科学、带领域分层信度阈值（ICC≥0.70；alpha 按后果级别为 ≥0.67/0.70/0.80）的八项处方，从业者与基准作者可以立即应用。该框架为在部署决策之前诊断与纠正评估流水线效度提供了易于使用的基于知识的工具。

## 关键词

#智能体评估 #效度 #可靠性 #基准测试
