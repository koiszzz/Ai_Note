---
published: 2026-08-07
title: "SkillTFM：表格基础模型免训练适配的门控技能演化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SkillTFM- Gated Skill Evolution for Training-Free Adaptation of Tabular Foundation Models.md"
source_note: "[[信息源/arXiv cs.LG RSS/SkillTFM- Gated Skill Evolution for Training-Free Adaptation of Tabular Foundation Models]]"
source_sha256: b86b8296f089e530abdb1abd2cb235bee4cdd00f64e0b43f7a599d69014a08e2
original_url: "https://arxiv.org/abs/2608.06137"
processed: 2026-08-07
language: zh-CN
---

# SkillTFM：表格基础模型免训练适配的门控技能演化

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yi He, Zhengkang Guan, Anpeng Wu, Peng Cui, Fei Wu, Kun Kuang
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06137)

## 摘要

- 表格数据在真实应用中无处不在，对科学、工业、金融、医疗与公共服务的数据驱动预测与决策至关重要；表格基础模型（TFM）成为通用表格学习的有前景范式，跨多样数据集提供可复用预测器，大幅减少任务特定训练、调优与模型开发需求。
- 实际部署仍受分布漂移、异质特征语义与任务特定模式制约，这些难以在不昂贵微调或额外标注数据下捕捉。
- 提出 SkillTFM：免训练系统，将 TFM 适配从参数更新转为智能体技能的门控演化；核心是可验证、可扩展的技能库，耦合边界证据识别与门控技能演化：前者刻画任务结构与基座模型失败模式，后者在显式验证下检索与扩展可复用技能。
- 模拟边界设定与真实电价预测中，SkillTFM 提升 AUC 0.128–0.142、将非线性边界 AUC 从 0.699 提至 0.898；跨 TFM 骨干实验证明有效性与通用性。

## 正文

表格数据在真实世界应用中无处不在，对科学、工业、金融、医疗与公共服务的数据驱动预测与决策至关重要。表格基础模型（tabular foundation models, TFMs）已成为通用表格学习的有前景范式，跨多样数据集提供可复用预测器，大幅减少对任务特定训练、调优与模型开发的需求。然而，其实际部署仍受分布漂移、异质特征语义与任务特定模式的制约，这些难以在不昂贵微调或额外标注数据的情况下捕捉。为此，研究提出 SkillTFM，一个免训练系统：将 TFM 适配从参数更新转变为智能体技能的门控演化。SkillTFM 的核心是一个可验证且可扩展的技能库，耦合边界证据识别（boundary evidence identification）与门控技能演化（gated skill evolution）：前者刻画任务结构与基座模型的失败模式，后者在显式验证下检索与扩展可复用技能。在模拟边界设定与真实世界电价预测中，SkillTFM 将 AUC 提升 0.128–0.142，并将非线性边界 AUC 从 0.699 提升到 0.898。此外，跨 TFM 骨干的实验证明了 SkillTFM 的有效性与通用性。

## 关键词

表格基础模型、免训练适配、技能库、门控、分布漂移
