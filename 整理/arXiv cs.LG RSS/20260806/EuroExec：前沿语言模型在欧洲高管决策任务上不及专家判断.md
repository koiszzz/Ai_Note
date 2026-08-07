---
published: 2026-08-06
title: EuroExec：前沿语言模型在欧洲高管决策任务上不及专家判断
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/EuroExec- Frontier Language Models Fall Short of Expert Judgment on European Executive Decision Task.md
source_note: "[[信息源/arXiv cs.LG RSS/EuroExec- Frontier Language Models Fall Short of Expert Judgment on European Executive Decision Task]]"
source_sha256: 46695b45f25adb9c3b21a23862b4fc97431c0699e830be2d58ac336fc60934c5
original_url: https://arxiv.org/abs/2608.04549
processed: 2026-08-07
language: zh-CN
---

# EuroExec：前沿语言模型在欧洲高管决策任务上不及专家判断

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04549)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/EuroExec- Frontier Language Models Fall Short of Expert Judgment on European Executive Decision Task|查看原始文件]]

## 摘要

- 投入超过 4,000 小时人工专家时间，在 EuroExec 基准上评估六款前沿 LLM
- EuroExec 由 47 位经审核领域专家撰写的 413 个开放式长文欧洲高管任务组成
- 最强模型仅解决 56.9% 任务，专家参考回答在 74% 的直接排名中优于所有模型

## 正文

前沿 LLM 越来越多地被用于开放式的复杂问题，这类问题在本质上不同于它们通常被评估的那些问题。我们在这一类问题的一个成员上投入了超过 4,000 小时的人类专家时间，以评估六款前沿 LLM：EuroExec，这是我们引入的、基于人类专家的基准，由 47 位经过审核的领域专家撰写的 413 个开放式长文欧洲高管任务（European executive tasks）组成，每个问题都源自真实案例的经验。

每份回答都通过多属性评分标准（multi-attribute rubric）、一份针对具体条目的需求检查清单以及偏好排序进行人工评估，最终得出聚合指标"解决率"（Solve Rate）。最强的模型仅解决了 56.9% 的任务，而专家撰写的参考回答（在盲评中）达到了接近天花板的解决水平，并且在 74% 的直接排名中被认为优于每一个模型回答——这使得前沿生成系统远远低于它们已被实际用于的专业工作标准。

我们发现，得出此类结论的最佳方式是采用人工评估者，并通过严格的统计分析仔细检验他们之间的一致性；同时我们也观察到，在评估这类具有主观真值的真实世界开放式问题时，自动测量同样有所欠缺。

## 关键词

#大语言模型 #基准测试 #专家评估 #真实世界任务 #EuroExec
