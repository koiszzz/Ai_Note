---
published: 2026-08-07
title: "可信的患者，不可能的人群：审计 LLM 心理健康模拟中的流行病学保真度"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Plausible Patients, Impossible Populations- Auditing Epidemiological Fidelity in Large Language Mode.md"
source_note: "[[信息源/arXiv cs.AI RSS/Plausible Patients, Impossible Populations- Auditing Epidemiological Fidelity in Large Language Mode]]"
source_sha256: a6b3bf4544760fdb58682dcab79f06e10377611f62a0d2f859c8d6a52a09534c
original_url: "https://arxiv.org/abs/2604.17359"
processed: 2026-08-07
language: zh-CN
---

# 可信的患者，不可能的人群：审计 LLM 心理健康模拟中的流行病学保真度

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Patrick Keough
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.17359)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Plausible Patients, Impossible Populations- Auditing Epidemiological Fidelity in Large Language Model Men|查看原始文件]]

## 摘要

- 被要求模拟精神科患者的语言模型产生的案例逐个检查能通过，但组成的人群不匹配任何真实人群。
- 论文给 GPT-4o-mini、Gemini-3-Flash、DeepSeek-V3 与 GLM-4.7 各 120 个人口统计队列，在两种框架下（一种如临床医生录入患者、一种如个人自述），并对照源自 NHANES 微观数据、经调查加权的 PHQ-8 锚点对所有 28,800 个响应评分。
- 案例层面输出成立：97.3% 的高表现满足 DSM-5 门户规则，违规率 2.68%（机会零假设 10.4%）；作为人群则同时四方面失败：每个可基准组返回值通胀 2.8 到 5.5 个 PHQ-8 点，18.2% 模拟患者达到治疗阈值（成人 7.5%）；人群黑-白与西班牙裔-白差异在模拟中不成立，两个模型衰减每个差距、两个压平或反转；症状协方差按队列重组，使误差超出任何重新校准，人口统计偏移不叠加，边缘拟合的校正两侧各偏差约 0.4 点；答案不稳定：部署继承的解码下，三分一患者在两次同一提示抽取间改变严重性类别，五分一跨越从观察等待到治疗的界线。
- 将四者合并为一次失败，命名案例级合理性到人群级失败的差距为连贯-保真分离（coherence-fidelity dissociation）：单个案例通过案例审查会应用的形式规则，其组成人群却未通过我们能构造的对照真实人群的任何比较；性别身份在症状结构与再生稳定性上均极端，且不存在联邦基准可检查任何内容；患者看起来正确，但不代表真实人群。

## 正文

被要求模拟精神科患者的语言模型产生的案例逐个检查能通过，但组成的人群匹配不上任何真实人群。我们给 GPT-4o-mini、Gemini-3-Flash、DeepSeek-V3 与 GLM-4.7 各 120 个人口统计队列，在两种框架下（一种如临床医生录入患者，一种如个人自述），并对照源自 NHANES 微观数据、经调查加权的 PHQ-8 锚点对所有 28,800 个响应评分。案例层面输出成立：97.3% 的高表现满足 DSM-5 门户规则，违规率 2.68%，对照机会零假设 10.4%。作为人群，四件事同时失败。每个可基准组返回值通胀 2.8 到 5.5 个 PHQ-8 点，且 18.2% 的模拟患者达到治疗阈值，而成人中为 7.5%。人群黑-白与西班牙裔-白差异在模拟中不成立，两个模型衰减每个差距，两个压平或反转它。症状协方差按队列重组，将误差置于任何重新校准之外，且人口统计偏移不叠加，因此边缘拟合的校正两侧各偏差约 0.4 点。答案还不稳定：在部署继承的解码下，三分之一的患者在两次同一提示抽取之间改变严重性类别，五分之一的患者跨越从观察等待到治疗的界线。我们将这四者合并为一次失败，并命名案例级合理性与人群级失败之间的差距为连贯-保真分离（coherence-fidelity dissociation）。单个案例通过案例审查会应用的形式规则；它们组成的人群却未通过我们可对照真实人群构造的任何比较。性别身份在症状结构与再生稳定性上均极端，且没有任何联邦基准可检查其中任何内容。患者看起来正确。它们不代表真实人群。

## 关键词

#心理健康模拟 #流行病学保真度 #LLM审计 #人群模拟
