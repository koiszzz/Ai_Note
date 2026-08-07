---
published: 20260805
title: "对抗性快速变化的现实世界领域作为 AI 科学家能力基准测试床"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities.md"
source_note: "[[信息源/arXiv cs.AI RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities]]"
source_sha256: 615461cfc1826716d91247eb92b788a5134c411379fb1e52b9d724bb1f68ad19
original_url: "https://arxiv.org/abs/2608.03569"
processed: 2026-08-06
language: zh-CN

---

# 对抗性快速变化的现实世界领域作为 AI 科学家能力基准测试床

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：William Bolton, Philip Torr
> - 发布时间：20260805
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03569)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities|查看原始文件]]

## 摘要

- 基准测试 AI 科学家产生新颖想法的能力以困难著称；现有基准在评估科学推理和研究复现方面取得进展，但常依赖合成任务或回顾性目标，可能被先前暴露混淆。
- 本文假设复杂、对抗性、快速变化的现实世界领域（专家实践者独立生成可观察输出）可提供实用解决方案，在 F1 和万智牌两个结构不同的领域实例化该框架。
- 跨两个领域，模型产生看似合理的输出，但少有与现实专家解决方案一致；结果表明 AI 科学家的关键能力差距不是想法生成，而是过滤、优先级排序和连贯新颖性。

## 正文

基准测试 AI 科学家产生新颖想法的能力以困难著称。该领域现有基准在评估科学推理和研究复现方面取得进展，但往往依赖合成任务或回顾性目标，可能被先前暴露混淆。我们假设复杂、对抗性、快速变化的现实世界领域——专家实践者独立生成可观察输出——可以提供实用解决方案填补这一差距，并评估 AI 科学家所需的能力，包括推理、新颖性和假设表述。我们在两个结构不同的领域实例化此框架：一级方程式（F1），模型围绕 2026 赛季汽车设计概念构思，真实的季前创新提供地面真值；以及万智牌（MTG），模型从最近更新的卡池提出套牌，对照 19 份职业巡回赛（PT）套牌列表评估。跨两个领域，模型产生看似合理的输出，但少有与现实专家解决方案一致。在 F1 中，最佳模型 GPT-5.2 在跨运行提出的 166 个想法中匹配 40 项真实创新中的 10 项。在 MTG 中，Gemini 3 Flash 的最佳套牌从季军 PT 套牌中恢复 7 张新系列卡中的 5 张，跨全部 108 副套牌，模型最常选择的卡也是 PT 套牌最广泛采用的卡（Spearman ρ = 0.74，p = 0.0003）。这些结果表明，AI 科学家的关键能力差距不是想法生成，而是过滤、优先级排序和连贯新颖性。

## 关键词

#AI科学家 #基准 #F1 #万智牌 #arXiv