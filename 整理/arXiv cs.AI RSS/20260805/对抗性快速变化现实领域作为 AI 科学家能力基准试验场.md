---
published: 2026-08-05
title: "对抗性快速变化现实领域作为 AI 科学家能力基准试验场"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities.md"
source_note: "[[信息源/arXiv cs.AI RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities]]"
source_sha256: 615461cfc1826716d91247eb92b788a5134c411379fb1e52b9d724bb1f68ad19
original_url: "https://arxiv.org/abs/2608.03569"
processed: 2026-08-05
language: zh-CN
---

# 对抗性快速变化现实领域作为 AI 科学家能力基准试验场

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03569)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities|查看原始文件]]

## 摘要

- 评估 AI 科学家生成新颖想法的能力非常困难；现有基准往往依赖合成任务或回顾性目标，可能受到模型事先接触的影响。
- 论文提出，复杂、对抗性且快速变化的现实领域可以作为实用试验场，因为专家会在其中独立产生可观察输出，从而评估推理、新颖性和假设形成能力。
- 作者在两个结构不同的领域实例化框架：2026 赛季一级方程式赛车设计，以及基于近期更新卡池构筑《万智牌》套牌。
- 模型能够生成看似合理的输出，但很少与现实专家方案一致；结果表明 AI 科学家的关键能力缺口不在想法生成，而在筛选、排序和连贯的新颖性。

## 正文

评估 AI 科学家生成新颖想法的能力一直非常困难。该领域的现有基准已经在评估科学推理和研究复现方面取得进展，但通常依赖合成任务或回顾性目标，而模型可能事先接触过这些目标，从而造成混淆。

本文提出，复杂、对抗性且快速变化的现实领域可以提供一种实用解决方案。这些领域中的专家实践者会独立生成可观察的输出，因此可以用来评估 AI 科学家所需的推理、新颖性和假设形成能力。作者在两个结构不同的领域中实例化这一框架：一级方程式赛车（F1）领域，模型围绕 2026 赛季的赛车设计概念提出想法，并以真实季前创新作为事实标准；以及《万智牌》（MTG）领域，模型根据近期更新的卡池构筑套牌，并与 19 份职业巡回赛套牌列表比较。

在两个领域中，模型都能产生合理的输出，但很少与现实世界的专家方案一致。在 F1 领域，表现最佳的 GPT-5.2 在多次运行提出的 166 个想法中，匹配了 40 项真实创新中的 10 项。在 MTG 领域，Gemini 3 Flash 生成的最佳套牌从第三名职业巡回赛套牌中找回了 7 张新系列卡牌中的 5 张；在全部 108 套牌中，模型最常选择的卡牌也正是职业巡回赛套牌最广泛采用的卡牌（Spearman ρ=0.74，p=0.0003）。

结果表明，AI 科学家的关键能力缺口可能不是生成想法，而是筛选、优先级排序以及形成连贯的新颖性。

## 关键词

#AI科学家 #基准测试 #科学推理 #新颖性
