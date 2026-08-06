---
title: "SkillTrace：遍历查询-技能图构建可组合 LLM 智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SkillTrace- Traversing a Query-Skill Graph for Composable LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/SkillTrace- Traversing a Query-Skill Graph for Composable LLM Agents]]"
source_sha256: 6dd12f7b053ecd9eec02c14f442a7f96a5a62c5b03026705bde0d4c55193231c
original_url: "https://arxiv.org/abs/2608.02356"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SkillTrace：遍历查询-技能图构建可组合 LLM 智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yue Yao、Shengyuan Wang、Xin Chen 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02356)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SkillTrace- Traversing a Query-Skill Graph for Composable LLM Agents|查看原始文件]]

## 摘要

- 论证组合技能检索可在三层图中解决：技能查询之间的组合关系、查询与技能库候选之间的相似性、以及所选候选之间的依赖关系。
- 引入 SkillTrace：把用户查询组织成语义层级，匹配技能查询与候选，并在技能依赖上传播。
- 大语言模型智能体日益通过从库中组合可复用技能解决复杂任务；关键挑战不仅是检索个别相关技能，而是识别完整、可执行的技能组合。
- SkillsBench 与 ALFWorld 上的实验显示 SkillTrace 取得最先进性能：SkillsBench 成功率 53.17%、ALFWorld 91.43%；跨不同骨干语言模型一致改善，展示基于图的技能检索的通用性与鲁棒性。

## 正文

论文编号：arXiv:2608.02356v2（更新类型：replace）。以下为摘要全文翻译。

大语言模型智能体日益通过从库中组合可复用技能来解决复杂任务。为此，关键挑战不仅是检索个别相关的技能，而是识别完整且可执行的技能组合。在本文中，我们论证这个问题可以在一个三层图中解决：技能查询之间的组合关系、查询与技能库候选之间的相似性，以及所选候选之间的依赖关系。我们引入 SkillTrace，它把用户查询组织成语义层级，匹配技能查询与候选，并在技能依赖上传播。在 SkillsBench 与 ALFWorld 上的实验表明，SkillTrace 取得最先进性能：在 SkillsBench 上达到 53.17% 的成功率，在 ALFWorld 上达到 91.43%。SkillTrace 还在不同的骨干语言模型上提供一致改善，展示了基于图的技能检索的通用性与鲁棒性。

## 关键词

#技能组合 #图检索 #LLM智能体 #技能库
