---
published: 20260806
title: "棋盘上的幻觉：LLM 国际象棋解说的工具增强评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Hallucinations on the Board- Tool-Augmented Evaluation of LLM Chess Commentary.md"
source_note: "[[信息源/arXiv cs.AI RSS/Hallucinations on the Board- Tool-Augmented Evaluation of LLM Chess Commentary]]"
source_sha256: cd977eabefc155bdbd3e857d98e8fe3fe044822161828e14b49e73d80c8de906
original_url: "https://arxiv.org/abs/2608.04240"
processed: 2026-08-06
language: zh-CN

---

# 棋盘上的幻觉：LLM 国际象棋解说的工具增强评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：S. Ashwin Hebbar, Peiyao Sheng, Sewoong Oh, Pramod Viswanath
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04240)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Hallucinations on the Board- Tool-Augmented Evaluation of LLM Chess Commentary|查看原始文件]]

## 摘要

- 国际象棋等领域的超人游戏引擎使专家级评估易于获取，但它们传达真实情况而无需使这种专长对专家和非专家具有教育价值的自然语言解释；LLM 原则上可弥合此差距，但常因领域特定知识有限而幻觉，标准基于参考或 LLM 作为评判者的框架无法可靠检测这些错误。
- 本文呈现 ACT-Eval，一个将国际象棋解说分解为原子声明并将其路由到引擎支持工具和专家标注金参考的评估框架，评估事实正确性、概念覆盖和走棋质量判断；发布 325 个局面-走棋对基准，覆盖教学、锦标赛和关键局面，含 125 个带专家验证金原子的局面和五类错误分类法。
- 评估领先专有和开放权重模型发现事实幻觉在国际象棋解说中仍普遍：无工具 GPT-5.4 产生错误子声明 22.0% 的时间，较小开放权重模型超 40%；工具增强大幅改进事实正确性和走棋质量评估，但专家战略和战术思想覆盖在所有模型中仍有限。

## 正文

国际象棋等领域的超人游戏引擎使专家级评估易于获取，然而它们传达真实情况，无需使这种专长对专家和非专家具有教育价值的自然语言解释。大语言模型原则上可弥合此差距，但常因领域特定知识有限而幻觉，且标准基于参考或 LLM 作为评判者的框架无法可靠检测这些错误。在本工作中，我们呈现 ACT-Eval，一个将国际象棋解说分解为原子声明并将其路由到引擎支持工具和专家标注金参考的评估框架，评估事实正确性、概念覆盖和走棋质量判断。我们发布一个 325 个局面-走棋对基准，覆盖教学、锦标赛和关键局面，包括 125 个带专家验证金原子的局面和五类错误分类法。评估领先专有和开放权重模型，我们发现事实幻觉在国际象棋解说中仍普遍存在：无工具 GPT-5.4 产生不正确子声明 22.0% 的时间，而较小开放权重模型超 40%。虽然工具增强大幅改进事实正确性和走棋质量评估，专家战略和战术思想覆盖在所有模型中仍有限。人类校准表明，ACT-Eval 的事实判断落在观察到的跨人类一致性范围内，而其覆盖分数与人类对战略完整性的评估强相关。

## 关键词

#国际象棋 #LLM幻觉 #工具增强评估 #解说 #arXiv