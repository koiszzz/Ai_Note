---
published: 2026-08-07
title: "用开放权重大语言模型零样本标注胸部、腹部与骨盆 CT 报告的多疾病标签：标注惯例的影响"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Zero-Shot Multi-Disease Labeling of Chest, Abdomen, and Pelvis CT Reports Using Open-Weight Large La.md"
source_note: "[[信息源/arXiv cs.CL RSS/Zero-Shot Multi-Disease Labeling of Chest, Abdomen, and Pelvis CT Reports Using Open-Weight Large La]]"
source_sha256: 7928530e3885135aa721b35df672f3846acd35ff4c634eebda00879c00d28d1f
original_url: "https://arxiv.org/abs/2506.03259"
processed: 2026-08-07
language: zh-CN
---

# 用开放权重大语言模型零样本标注胸部、腹部与骨盆 CT 报告的多疾病标签：标注惯例的影响

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Michael E. Garcia-Alcoser, Mobina Ghojoghnejad, Fakrul Islam Tushar, David Kim, Kyle J. Lafata, Geoffrey D. Rubin, Joseph Y. Lo
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2506.03259)

## 摘要

- 目的：比较五个轻量开放权重 LLM 与基于规则的算法（RBA）及微调 RadBERT 在零样本标注胸部-腹部-骨盆（CAP）CT 报告上的表现，并考察标注惯例如何影响测量性能。
- 材料与方法：回顾性研究，分析 2012-2017 年间检查的 29,540 名患者的 40,833 份 CAP CT 报告（年龄与性别不可得）；五个 LLM 被零样本提示分配跨三个器官系统的 15 个标签，与 RBA 及微调 RadBERT 比较；12,197 份保留报告上用 Cohen kappa 评估模型间一致性；对 1,789 份放射科医生监督标注（同一标注忽略临床可行动性的简化版及 CT-RATE 数据集）计算宏平均 F1；不重叠 bootstrap 95% CI 指示相关差异。
- 结果：MedGemma 27B 与 MedGemma-1.5 4B 中位一致性最高（kappa=0.90）；对照人工标注，Gemma-3 27B 宏平均 F1 最高（0.82 [95% CI: 0.80, 0.83]），RadBERT 0.66、RBA 0.64，多数投票集成 0.84；主观类别得分平均最低：肾病变 0.44、肺不张 0.67；重新标注提高所有模型肾病变 F1，但肺不张仅 LLM 提高，RBA 与 RadBERT 下降；所有模型对 CT-RATE 的 F1 超过人工标注，反映其更字面的惯例。
- 结论：轻量开放权重 LLM 以零样本提示胜过基于规则与微调 BERT 的 CAP CT 报告标注；模型与标注者分歧主因应用不同标注标准。

## 正文

目的：比较五个轻量开放权重大语言模型（LLMs）与一个基于规则的算法（RBA）及微调后的 RadBERT，在胸部-腹部-骨盆（CAP）CT 报告的零样本标注上的表现，并考察标注惯例如何影响测量的性能。材料与方法：在这项回顾性研究中，分析了 2012 年至 2017 年间检查的 29,540 名患者的 40,833 份 CAP CT 报告；年龄与性别不可得。五个 LLM 被零样本提示分配跨三个器官系统的 15 个标签，并与 RBA 及微调后的 RadBERT 比较。用 Cohen kappa 在 12,197 份保留报告上评估模型间一致性。对 1,789 份放射科医生监督的标注（同一标注的简化版忽略临床可行动性）及 CT-RATE 数据集计算宏平均 F1。不重叠的 bootstrap 95% CI 指示相关差异。结果：MedGemma 27B 与 MedGemma-1.5 4B 显示最高的中位一致性（kappa=0.90）。对照人工标注，Gemma-3 27B 达到最高的宏平均 F1（0.82 [95% CI: 0.80, 0.83]），而 RadBERT 为 0.66、RBA 为 0.64；多数投票集成得 0.84。得分跨模型平均最低的是主观类别：肾病变（0.44）与肺不张（0.67）。重新标注提高了所有模型在肾病变上的 F1，但在肺不张上仅对 LLM 提高；RBA 与 RadBERT 下降。所有模型对 CT-RATE 的 F1 都超过对人工标注的 F1，反映其更字面的惯例。结论：轻量开放权重 LLM 以零样本提示在 CAP CT 报告标注上胜过基于规则与微调 BERT。模型与标注者分歧主要源于他们应用了不同的标注标准。

## 关键词

零样本标注、CT 报告、开放权重 LLM、医学影像、标注惯例
