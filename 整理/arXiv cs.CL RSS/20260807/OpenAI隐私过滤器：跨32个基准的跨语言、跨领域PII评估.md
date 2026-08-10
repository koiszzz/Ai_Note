---
published: 2026-08-07
title: "OpenAI 隐私过滤器：跨 32 个基准的跨语言、跨领域 PII 评估"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/OpenAI Privacy Filter- A Cross-Lingual, Cross-Domain PII Evaluation Across 32 Benchmarks.md"
source_note: "[[信息源/arXiv cs.CL RSS/OpenAI Privacy Filter- A Cross-Lingual, Cross-Domain PII Evaluation Across 32 Benchmarks]]"
source_sha256: ed37145a15c0f2296f41b96666673de209c5efdc52443dbd1fd3cd700b55213f
original_url: "https://arxiv.org/abs/2608.02616"
processed: 2026-08-07
language: zh-CN
---

# OpenAI 隐私过滤器：跨 32 个基准的跨语言、跨领域 PII 评估

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Rohith Uppala
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.02616)

## 摘要

- 呈现据研究所知首个 OpenAI 隐私过滤器（OPF）系统评估：1.5B 参数模型将自回归语言模型转为双向 PII 检测器，跨 32 个基准（14 种语言、5 个领域）。
- 最可操作发现是领域依赖标注数据交叉：微调 XLM-RoBERTa 仅约 500 个英文合成 PII 标注示例（非英语 Kiji 约 100、合成医学 PII 约 1000）即超越 OPF 零样本性能；关键：逐类微调（17 种 PII 实体类型，OPF 33 的子集）小 n 时数据效率低于二值标签（n=100 时二值 F1=0.634 对比逐类 0.360）。
- 零样本下 OPF 在 SPY 医学基准 F1=0.464、AI4Privacy F1=0.855，大幅超越 Presidio 与 XLM-RoBERTa-large-NER；但 OPF 在 PII 训练分布外急剧退化：通用 NER 基准 F1=0.04–0.40、非拉丁脚本坍缩（阿拉伯语 0.04、西里尔 0.03）。
- 错误分析显示 OPF 擅长结构规则 PII（邮箱 0.78、电话 0.76），文化变异实体困难（人名 0.40、地址 0.49），多数 PII 领域召回偏置（精确率 0.31–0.54、召回 0.70–0.85）；提供决策启发：何时用 OPF 零样本、何时微调 XLM-RoBERTa、哪些语言家族避免。

## 正文

研究呈现据研究所知对 OpenAI 隐私过滤器（OpenAI Privacy Filter, OPF）的首次系统评估：这是一个 1.5B 参数模型，将自回归语言模型转化为双向 PII 检测器，跨 32 个基准、14 种语言与 5 个领域。最实际可操作的发现是一个领域依赖的标注数据交叉：微调 XLM-RoBERTa 仅用约 500 个英文合成 PII 标注示例（非英语 Kiji 约 100 个，合成医学 PII 约 1,000 个）即超越 OPF 的零样本性能。关键的是，在小 n 时，逐类微调（17 种 PII 实体类型，OPF 33 种的子集）的数据效率低于二值标签——在 n=100 时，二值 F1=0.634，而逐类为 0.360。零样本下，OPF 在 SPY 医学基准上实现 F1=0.464、AI4Privacy 上 F1=0.855，大幅超越 Presidio 与 XLM-RoBERTa-large-NER。然而，OPF 在其 PII 训练分布之外急剧退化：在通用 NER 基准上 F1=0.04–0.40，并对非拉丁脚本坍缩（阿拉伯语 0.04、西里尔文 0.03）。错误分析揭示，OPF 在结构规则的 PII（邮箱 0.78、电话 0.76）上表现出色，但在文化可变的实体上困难（人名 0.40、地址 0.49），并在大多数 PII 领域中是召回偏置的（精确率 0.31–0.54、召回 0.70–0.85）。研究提供一个决策启发：何时使用 OPF 零样本、何时微调 XLM-RoBERTa，以及应避免哪些语言家族。

## 关键词

PII 检测、隐私、跨语言、基准、OPF
