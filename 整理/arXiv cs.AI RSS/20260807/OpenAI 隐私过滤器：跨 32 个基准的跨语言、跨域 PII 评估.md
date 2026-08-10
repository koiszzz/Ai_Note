---
published: 2026-08-07
title: "OpenAI 隐私过滤器：跨 32 个基准的跨语言、跨域 PII 评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OpenAI Privacy Filter- A Cross-Lingual, Cross-Domain PII Evaluation Across 32 Benchmarks.md"
source_note: "[[信息源/arXiv cs.AI RSS/OpenAI Privacy Filter- A Cross-Lingual, Cross-Domain PII Evaluation Across 32 Benchmarks]]"
source_sha256: e38612c0affb9b556fa384072c1f72c533ad90f4128d5109291c4928efc14ae6
original_url: "https://arxiv.org/abs/2608.02616"
processed: 2026-08-07
language: zh-CN
---

# OpenAI 隐私过滤器：跨 32 个基准的跨语言、跨域 PII 评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Rohith Uppala
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02616)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OpenAI Privacy Filter- A Cross-Lingual, Cross-Domain PII Evaluation Across 32 Benchmarks|查看原始文件]]

## 摘要

- 呈现据其所知的首次系统评估：OpenAI 隐私过滤器（OPF），1.5B 参数模型，将自回归语言模型转换为双向 PII 检测器，跨 14 种语言与 5 个领域的 32 个基准。
- 最实际可操作发现是域依赖标注数据交叉：微调 XLM-RoBERTa 仅用约 500 个英语合成 PII 标注示例（非英语 Kiji 约 100 个）与约 1000 个合成医疗 PII 即超越 OPF 零样本性能；关键的是，逐类微调（17 个 PII 实体类型，OPF 33 的子集）在小 n 下比二值标签数据效率低——n=100 时二值 F1=0.634 vs 逐类 0.360。
- 零样本下，OPF 在 SPY 医疗基准达 F1=0.464、AI4Privacy 达 0.855，大幅优于 Presidio 与 XLM-RoBERTa-large-NER；但 OPF 在其 PII 训练分布外急剧退化：一般 NER 基准 F1=0.04-0.40，非拉丁文字崩溃（阿拉伯语 0.04、西里尔 0.03）。
- 误差分析显示 OPF 在结构规则 PII（email 0.78、phone 0.76）上出色，但挣扎于文化可变实体（人名 0.40、地址 0.49），且跨大多数 PII 领域偏召回（精度 0.31-0.54、召回 0.70-0.85）。
- 提供决策启发：何时使用 OPF 零样本、何时微调 XLM-RoBERTa、避免哪些语系。

## 正文

我们呈现据我们所知的首次系统评估：OpenAI 隐私过滤器（OpenAI Privacy Filter，OPF），一个将自回归语言模型转换为双向 PII 检测器的 1.5B 参数模型，跨 14 种语言与 5 个领域的 32 个基准。我们最实际可操作的发现是一个域依赖的标注数据交叉：微调的 XLM-RoBERTa 仅用约 500 个英语合成 PII 标注示例（非英语 Kiji 约 100 个）与约 1000 个合成医疗 PII 即超越 OPF 的零样本性能。关键的是，逐类微调（17 个 PII 实体类型，OPF 33 的子集）在小 n 下比二值标签数据效率更低——在 n=100 时，二值 F1=0.634 对比逐类 0.360。零样本下，OPF 在 SPY 医疗基准上实现 F1=0.464、在 AI4Privacy 上实现 F1=0.855，大幅优于 Presidio 与 XLM-RoBERTa-large-NER。然而，OPF 在其 PII 训练分布外急剧退化：一般 NER 基准上 F1=0.04--0.40，并在非拉丁文字上崩溃（阿拉伯语 0.04、西里尔 0.03）。误差分析揭示，OPF 在结构规则的 PII（email 0.78、phone 0.76）上出色，但在文化可变的实体（人名 0.40、地址 0.49）上挣扎，且跨大多数 PII 领域偏召回（精度 0.31--0.54、召回 0.70--0.85）。我们提供一个决策启发：何时使用 OPF 零样本、何时微调 XLM-RoBERTa，以及避免哪些语系。

## 关键词

#PII检测 #隐私过滤器 #跨语言评估 #NER
