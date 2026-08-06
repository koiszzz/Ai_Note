---
published: 2026-08-05
title: "对抗性快速变化的真实世界领域作为 AI 科学家能力基准测试平台"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities.md"
source_note: "[[信息源/arXiv cs.LG RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities]]"
source_sha256: 4e3a774b13207210a2dc9c92691ac5973a939c33a59b535a26826efeaa1ee9a9
original_url: "https://arxiv.org/abs/2608.03569"
processed: 2026-08-05
language: zh-CN
---

# 对抗性快速变化的真实世界领域作为 AI 科学家能力基准测试平台

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：William Bolton、Philip Torr
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03569)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Adversarial Fast-Moving Real-World Domains as Test Beds for Benchmarking AI Scientist Capabilities|查看原始文件]]

## 摘要

- 假设复杂、对抗性、快速变化的真实世界领域（专家从业者独立产生可观测输出）可提供实用解决方案，评估 AI 科学家所需能力（推理、新颖性与假设形成）；在两个结构不同领域实例化：F1（模型围绕 2026 赛季赛车设计概念构想，真实季前创新提供真值）与万智牌 MTG（模型从近期更新卡池提出套牌，对照 19 个职业巡回赛 PT 套牌列表评估）。
- 基准化 AI 科学家产生新颖想法的能力臭名昭著地困难；现有基准在评估科学推理与研究复现上取得进展，但常依赖合成任务或回顾性目标，可能受先前接触混淆。
- 两个领域模型都产生看似合理输出，但很少与真实世界专家方案对齐：F1 中最佳模型 GPT-5.2 跨运行提出 166 个想法，匹配 40 个真实创新中的 10 个；MTG 中 Gemini 3 Flash 最佳套牌从第三名 PT 套牌恢复 7 张新系列卡中的 5 张，跨全部 108 套牌，模型最常选的卡也是 PT 套牌最广泛采用的卡（Spearman ρ=0.74，p=0.0003）。
- 结果提示 AI 科学家的关键能力差距不是想法生成，而是过滤、优先级排序与连贯新颖性。

## 正文

论文编号：arXiv:2608.03569v1（更新类型：cross）。以下为摘要全文翻译。

基准化 AI 科学家产生新颖想法的能力是出了名的困难。该领域的现有基准在评估科学推理与研究复现方面取得进展，但往往依赖合成任务或回顾性目标，这些可能被先前接触混淆。我们假设，复杂、对抗性、快速变化的真实世界领域（专家从业者独立产生可观测输出）可以为填补这一空白提供实用解决方案，并评估 AI 科学家所需的能力，包括推理、新颖性与假设形成。我们在两个结构不同的领域实例化该框架：一级方程式（F1），模型围绕 2026 赛季的赛车设计概念展开构想，真实季前创新提供真值；以及万智牌（MTG），模型从近期更新的卡池提出套牌，对照 19 份职业巡回赛（PT）套牌列表评估。在两个领域，模型都产生看似合理的输出，但很少与真实世界专家方案对齐。在 F1 中，最佳模型 GPT-5.2 跨运行提出 166 个想法，匹配 40 个真实创新中的 10 个。在 MTG 中，来自 Gemini 3 Flash 的最佳套牌从第三名 PT 套牌中恢复 7 张新系列卡中的 5 张；跨全部 108 套牌，模型最常选择的卡也是 PT 套牌最广泛采用的卡（Spearman ρ=0.74，p=0.0003）。这些结果表明，AI 科学家的关键能力差距不是想法生成，而是过滤、优先级排序与连贯的新颖性。

## 关键词

#AI科学家 #基准测试 #新颖性 #真实世界领域
