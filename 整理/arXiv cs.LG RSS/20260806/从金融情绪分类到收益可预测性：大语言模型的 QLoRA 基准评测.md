---
published: 2026-08-06
title: "从金融情绪分类到收益可预测性：大语言模型的 QLoRA 基准评测"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/From Financial Sentiment Classification to Return Predictability- A QLoRA Benchmark of Large Languag.md"
source_note: "[[信息源/arXiv cs.LG RSS/From Financial Sentiment Classification to Return Predictability- A QLoRA Benchmark of Large Languag|查看原始文件]]"
source_sha256: e491faa1eba321095e814c0ba4a3dd0183a6ed0d3b77501e5345eb9cc144ca22
original_url: https://arxiv.org/abs/2608.04200
processed: 2026-08-07
language: zh-CN
---

# 从金融情绪分类到收益可预测性：大语言模型的 QLoRA 基准评测

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04200)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/From Financial Sentiment Classification to Return Predictability- A QLoRA Benchmark of Large Languag|查看原始文件]]

## 摘要

- 金融情绪分类器通常以人工标注为基准进行评估，但出色的语言学表现并不必然意味着具有经济上有用的收益可预测性；本研究通过两个实验将这两个问题分开考察。
- 实验一从五个金融文本数据集构建统一的三分类基准，对比 TF–IDF 朴素贝叶斯、现成的 FinBERT 与 Financial-RoBERTa 编码器、零样本 Qwen2.5-7B 以及经 QLoRA 适配的 Qwen2.5-7B、LLaMA3-8B 和 Mistral-7B 模型；Mistral-7B 取得最佳测试准确率（0.8840）与宏 F1（0.8771），QLoRA 将 Qwen2.5 的宏 F1 从 0.7274 提升到 0.8615。
- 实验二在时间上分离的 2019 年 Benzinga 样本（含 10,637 条唯一标题和 13,115 条标题-股票观测，固定 S&P 100 股票池）中评估经济有效性：七个下游模型在一天期都产生正但很小的平均秩信息系数（最大为 FinBERT 的 0.0143），经 Newey–West 推断与错误发现率校正后，28 个模型-期限测试均不显著。
- 结论：QLoRA 对金融情绪适配有效，但分类准确率与可交易的横截面信号之间存在明显差距，组合结果也无法确立最优分类器的稳健优势。

## 正文

金融情绪分类器通常以人工标注为基准进行评估，但较强的语言学表现并不必然意味着具有经济上有用的收益可预测性。本研究通过两个实验将这两个问题分开考察。首先，我们从五个金融文本数据集构建了一个统一的三分类基准，并比较了 TF–IDF 朴素贝叶斯、现成的 FinBERT 与 Financial-RoBERTa 编码器、零样本 Qwen2.5-7B，以及经 QLoRA 适配的 Qwen2.5-7B、LLaMA3-8B 和 Mistral-7B 模型。其中 Mistral-7B 取得了最佳测试准确率（0.8840）和宏 F1（0.8771），而 QLoRA 将 Qwen2.5 的宏 F1 从 0.7274 提升至 0.8615。基于逆频率的类别加权损失并未改善 Qwen2.5 的表现。其次，我们在时间上分离的 2019 年 Benzinga 样本上评估其经济有效性，该样本包含 10,637 条唯一标题和 13,115 条标题-股票观测，针对固定的 S&P 100 股票池。模型概率被转换为连续情绪分数，按股票与信号日期聚合，并与未来一、二、三和五天期限的下一交易日收益对齐。七个下游模型在一天期均产生正但很小的平均秩信息系数，其中最大的是 FinBERT 的 0.0143。在经 Newey–West 推断和错误发现率校正后，28 个模型-期限测试均不再显著。组合结果同样未能为表现最好的分类器确立稳健优势。研究结果表明，QLoRA 对金融情绪适配是有效的，同时也记录了分类准确率与可交易横截面信号之间的明显差距。

## 关键词

#金融情绪 #QLoRA #收益可预测性 #大语言模型
