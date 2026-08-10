---
published: 2026-08-07
title: "PRISM：通过结构化多模态数据合成内化优先级感知的评分准则"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/PRISM- Priority-aware Rubric Internalization via Structured Multimodal Data Synthesis.md"
source_note: "[[信息源/arXiv cs.LG RSS/PRISM- Priority-aware Rubric Internalization via Structured Multimodal Data Synthesis]]"
source_sha256: dc2bf74321b70f171722234ff868508a36b193c55eb1bff2fe1b8087ffa504b4
original_url: "https://arxiv.org/abs/2608.05249"
processed: 2026-08-07
language: zh-CN
---

# PRISM：通过结构化多模态数据合成内化优先级感知的评分准则

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Xiaomin He, Dongling Xiao, Jiahao Xie, Ruiqi Lu, Qianle Wang, Zhongbin Guo, Wanxuan Sun
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05249)

## 摘要

- 真实多模态指令常捆绑重要性不均的多个要求，但多数多模态训练数据仍将指令遵循简化为回答一个自包含问题；通过评分准则理解（rubric comprehension）研究该差距：将模型塑造为遵循准则的执行者而非对照准则测量的生成器——给定图像与带类型、带优先级的准则，模型须先验证每条规则再给出总体判断。
- 提出 PRISM：四阶段数据合成框架，产生人格-任务对、前缀引导规则集、质量过滤准则与结构化验证轨迹。
- 引入 PRISM-Eval：其 Loose 与 Strict 指标用固定标签确定性匹配，无需推理时评审模型。
- 仅 10K 合成样本，PRISM 将 Qwen3-VL-4B 在 PRISM-Eval 的 Strict 准确率从 9.5% 提升到 30.1%，同时保持通用基准平均性能；增益迁移到四个额外开源 MLLM（稠密与 MoE 架构），表明结构化准则监督是通向多规则、优先级感知多模态指令遵循的可扩展路径。

## 正文

真实世界的多模态指令常常捆绑重要性不均的多个要求，然而大多数多模态训练数据仍将指令遵循简化为回答一个自包含的问题。研究通过评分准则理解（rubric comprehension）考察该差距：将模型塑造为遵循准则的执行者（executor），而非对照准则测量的生成器——给定图像与带类型、带优先级的准则，模型必须在给出总体判断前验证每条规则。为支持该设定，研究提出 PRISM，一个四阶段数据合成框架，产生人格-任务对、前缀引导的规则集、质量过滤的准则与结构化验证轨迹。研究还引入 PRISM-Eval，其 Loose 与 Strict 指标使用对固定标签的确定性匹配，因此无需推理时评审模型。仅用 10K 合成样本，PRISM 将 Qwen3-VL-4B 在 PRISM-Eval 上的 Strict 准确率从 9.5% 提升到 30.1%，同时保持通用基准的平均性能；增益迁移到四个额外开源 MLLM，覆盖稠密与 MoE 架构，表明结构化准则监督是通向多规则、优先级感知多模态指令遵循的可扩展路径。

## 关键词

多模态、指令遵循、准则、数据合成、优先级
