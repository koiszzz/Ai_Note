---
published: 2026-08-07
title: "MetaboLLM：用于生化知识整合与预测性代谢物图构建的代谢组学专用大语言模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MetaboLLM- a metabolomics-specialized large language model for biochemical knowledge integration and.md"
source_note: "[[信息源/arXiv cs.LG RSS/MetaboLLM- a metabolomics-specialized large language model for biochemical knowledge integration and]]"
source_sha256: ef5f39c9bd905d4ec54369e85d8ec60a36264f9856872ce23e5326d46b8df2c8
original_url: "https://arxiv.org/abs/2608.06253"
processed: 2026-08-07
language: zh-CN
---

# MetaboLLM：用于生化知识整合与预测性代谢物图构建的代谢组学专用大语言模型

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Dohyun Ku, Min Gu Kwak, Francisco J. Pasquel, Jing Li
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06253)

## 摘要

- 代谢组学知识分布于异构资源且难以转化为预测性表征；开发 MetaboLLM：经持续预训练、监督微调与结构化检索适配的代谢组学专用 LLM，以及 MetaboLLM-GIN：将生成的生化描述转为用于患者级预测的代谢物图（图同构网络）。
- 四个骨干家族上，MetaboLLM 在代谢组学知识、关系与描述任务上优于对应基座与医学适配模型，并迁移到外部公开基准。
- MetaboLLM-GIN 在冠状动脉旁路移植术后应激性高血糖预测（AUC 0.8616）与绝经后激素方案分类（0.8123）上取得最高 AUC，优于常规模型、替代图构建与未适配或非检索 LLM 配置生成的图。
- 模型解释在两个应用中产生生物学意义发现；领域专用语言模型可将异构生化知识组织为预测性、可解释的代谢物图表征。

## 正文

代谢组学知识分布于异构资源，且难以转化为预测性表征。研究开发 MetaboLLM，一个经持续预训练、监督微调与结构化检索适配的代谢组学专用大语言模型，以及 MetaboLLM-GIN，它使用图同构网络将生成的生化描述转换为用于患者级预测的代谢物图。跨四个骨干家族，MetaboLLM 在代谢组学知识、关系与描述任务上优于对应基座与医学适配模型，并迁移到外部公开基准。MetaboLLM-GIN 在冠状动脉旁路移植术后应激性高血糖预测（0.8616）与绝经后激素方案分类（0.8123）上取得最高 AUC，优于常规模型、替代图构建以及从未适配或非检索 LLM 配置生成的图。模型解释进一步在两个应用中产生生物学有意义的结果。这些结果表明，领域专用语言模型可以将异构生化知识组织为预测性且可解释的代谢物图表征。

## 关键词

代谢组学、LLM、图神经网络、患者级预测、生化知识
