---
title: "CaliDist：经对分心的行为鲁棒性校准大语言模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CaliDist- Calibrating Large Language Models via Behavioral Robustness to Distraction.md"
source_note: "[[信息源/arXiv cs.LG RSS/CaliDist- Calibrating Large Language Models via Behavioral Robustness to Distraction]]"
source_sha256: 9579a2d9aa5171e39d6613a06bf2809a41f95c86142f261c3d82093f3828947c
original_url: "https://arxiv.org/abs/2606.05799"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CaliDist：经对分心的行为鲁棒性校准大语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Mohammad Anas Jawad、Cornelia Caragea
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.05799)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/CaliDist- Calibrating Large Language Models via Behavioral Robustness to Distraction|查看原始文件]]

## 摘要

- 引入 CaliDist，新颖事后校准方法：直接测量并惩罚模型对分心的易感性——量化输入提示被语义干扰物扰动时 LLM 预测与不确定性如何变化；该稳定性（或其缺失）信号随后用于自适应缩放模型初始置信分数。
- 大语言模型（LLM）现有校准方法常忽视可信度的关键维度：对无关或误导信息的模型行为鲁棒性；论证模型真实置信度应反映其在认知压力下的稳定性。
- 七个自然语言理解分类基准、六个不同 LLM 的大量实验显示 CaliDist 一致取得比强基线更低的期望校准误差（ECE）与 Brier 分数。
- 方法把 ECE 平均从 23% 降到 7%——70% 相对改善——证明行为稳定性是校准的强大信号；代码与数据集：github.com/anas-jawad/CaliDist

## 正文

论文编号：arXiv:2606.05799v2（更新类型：replace）。以下为摘要全文翻译。

大语言模型（LLM）的现有校准方法往往忽视可信度的关键维度：模型对无关或误导信息的行为鲁棒性。在本文中，我们论证模型的真实置信度应反映其在认知压力下的稳定性。我们引入 CaliDist，一种新颖的事后校准方法：直接测量并惩罚模型对分心的易感性。CaliDist 量化当输入提示被语义干扰物扰动时，LLM 的预测与不确定性如何变化。这一稳定性（或其缺失）信号随后被用于自适应缩放模型的初始置信分数。我们在七个自然语言理解分类基准上、用六个不同的 LLM 进行的大量实验表明，CaliDist 相对强基线一致取得更低的期望校准误差（ECE）与 Brier 分数。值得注意的是，我们的方法把 ECE 平均从 23% 降至 7%——70% 的相对改善——证明行为稳定性是校准的强大信号。我们提供代码与数据集：github.com/anas-jawad/CaliDist

## 关键词

#校准 #大语言模型 #行为鲁棒性 #干扰
