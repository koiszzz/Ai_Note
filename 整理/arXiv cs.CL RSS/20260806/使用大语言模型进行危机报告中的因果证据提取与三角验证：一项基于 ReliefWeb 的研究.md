---
published: 2026-08-06
title: 使用大语言模型进行危机报告中的因果证据提取与三角验证：一项基于 ReliefWeb 的研究
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Causal Evidence Extraction and Triangulation in Crisis Reports using Large Language Models- A Relief.md
source_note: "[[信息源/arXiv cs.CL RSS/Causal Evidence Extraction and Triangulation in Crisis Reports using Large Language Models- A Relief]]"
source_sha256: 53aad348cb98152f31e0b0865a7370cee353825f138d8e5f1d4e6805afdd8573
original_url: https://arxiv.org/abs/2608.04576
processed: 2026-08-07
language: zh-CN
---

# 使用大语言模型进行危机报告中的因果证据提取与三角验证：一项基于 ReliefWeb 的研究

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04576)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Causal Evidence Extraction and Triangulation in Crisis Reports using Large Language Models- A Relief|查看原始文件]]

## 摘要

- 提出两阶段 LLM 流水线，从 ReliefWeb 人道主义报告（2000-2024）中提取带方向与强度属性的结构化干预-结果记录
- 查询条件化提取限制输出到指定干预类别，片段锚定将每条关系链接到支持文本，保证可审计性
- 专家标注的 100 份报告上，最佳闭源 LLM 加权 F1 达 90.73%，监督微调的 Llama-3.1-8B 达 94.15%
- 保留上下文的三角验证显示，现金援助相关的食物类结果呈强正收敛（LoE=0.865）与稳定的长期轨迹

## 正文

人道主义报告篇幅长、噪声大且多主题，使得整合与决策相关的因果证据变得困难。我们提出一项 ReliefWeb 研究（2000-2024）和一个两阶段大语言模型（LLM）流水线，用于提取带有方向和强度属性的结构化干预-结果记录。

查询条件化提取将输出限制在指定的干预类别，减少检索引起的过度提取；而片段锚定将每个关系链接到支持文本，以实现可审计性和分类。在一个由 100 份报告组成的专家标注数据集中，最佳的闭源 LLM 实现了 90.73% 的加权 F1 分数，且成本效率高；而经过监督微调的 Llama-3.1-8B 达到了 94.15% 的加权 F1 分数。

我们进一步提出保留上下文的三角验证，它在灾难×来源单元内聚合强度加权的证据，应用拉普拉斯平滑并对各单元等权，通过证据水平评分量化跨上下文收敛。应用于现金援助时，与食物相关的结果显示出强烈的正向收敛（LoE=0.865）和稳定的长期轨迹。

## 关键词

#LLM #因果证据提取 #人道主义报告 #三角验证 #ReliefWeb #arXiv
