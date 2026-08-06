---
title: "评估 OpenAI 隐私过滤器：跨 42 个基准的跨语言、跨域 PII 检测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Evaluating OpenAI's Privacy Filter- Cross-Lingual, Cross-Domain PII Detection Across 42 Benchmarks.md"
source_note: "[[信息源/arXiv cs.AI RSS/Evaluating OpenAI's Privacy Filter- Cross-Lingual, Cross-Domain PII Detection Across 42 Benchmarks]]"
source_sha256: 6aacbbcce1d9ff0ef13d2679f128f757b87b6943c5354e4788a2aab25620dbcf
original_url: "https://arxiv.org/abs/2608.02616"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 评估 OpenAI 隐私过滤器：跨 42 个基准的跨语言、跨域 PII 检测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Rohith Uppala
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02616)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Evaluating OpenAI's Privacy Filter- Cross-Lingual, Cross-Domain PII Detection Across 42 Benchmarks|查看原始文件]]

## 摘要

- 首次独立、系统评估 OpenAI 隐私过滤器（OPF），一个 15 亿参数的双向 PII 检测器，覆盖 22 种语言、5 个领域的 42 个合成基准。
- 零样本下 OPF 在 AI4Privacy 取得 F1=0.855、SPY 医疗 0.464，优于 Presidio（0.431、0.273）与 XLM-RoBERTa（0.269、0.111）；多语言 NER 上 XLM-RoBERTa 在全部 13 种印度语系与非拉丁语言领先 OPF。
- GPT-4o 在医疗、法律与金融 PII 领先（SPY：0.643 平均，Gretel：0.527），OPF 在结构化合成 PII（0.71 平均）与客户支持（0.60）领先；PII 嵌入叙事散文时 OPF 急剧退化（NER 基准 F1=0.04–0.57，非拉丁文字崩溃：阿拉伯语 0.04、西里尔文 0.03）。
- 错误分析：OPF 在结构规则 PII（邮箱 0.78、电话 0.76）最强，在文化可变 PII（人名 0.40、地址 0.49）最弱；客户支持与医疗/法律 PII 上召回偏高（P=0.31–0.54、R=0.70–0.85），全局精度跨域 0.31–0.86。

## 正文

论文编号：arXiv:2608.02616v1（更新类型：cross）。以下为摘要全文翻译。

我们提出对 OpenAI 隐私过滤器（OPF）——一个 15 亿参数的双向 PII 检测器——的首次独立、系统评估，覆盖 22 种语言、5 个领域的 42 个合成基准。零样本下，OPF 在 AI4Privacy 取得 F1=0.855、在 SPY 医疗取得 0.464，在 PII 标注基准上优于 Presidio（0.431、0.273）与 XLM-RoBERTa（0.269、0.111）；在多语言 NER 上，XLM-RoBERTa 在全部 13 种印度语系与非拉丁语言上领先 OPF。GPT-4o 在医疗、法律与金融 PII 上领先（SPY：0.643 平均，Gretel：0.527），而 OPF 在结构化合成 PII（0.71 平均）与客户支持（0.60）上领先。当 PII 嵌入叙事散文时，OPF 急剧退化：NER 基准上 F1=0.04–0.57，非拉丁文字崩溃（阿拉伯语：0.04，西里尔文：0.03）。错误分析表明，OPF 在结构规则的 PII 类型（邮箱：0.78，电话：0.76）上最强，在文化可变的类型上最弱（人名：0.40，地址：0.49），并且在客户支持与医疗/法律 PII 上偏向召回（P=0.31–0.54，R=0.70–0.85）；全局精度在所有领域上为 0.31–0.86。

## 关键词

#隐私 #PII检测 #多语言 #安全评估
