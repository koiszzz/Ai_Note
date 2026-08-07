---
published: 2026-08-06
title: "DeepImagine：通过逐步局部反事实想象预测临床试验结果"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations.md
source_note: "[[信息源/arXiv cs.CL RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations]]"
source_sha256: f1d310bf6f8e8e59f6daafa333277c620c6a17e8ca4d7ab039eb002bf4422e8f
original_url: https://arxiv.org/abs/2604.23054
processed: 2026-08-07
language: zh-CN
---

# DeepImagine：通过逐步局部反事实想象预测临床试验结果

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.23054)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations|查看原始文件]]

## 摘要

- 预测前瞻性临床试验结果仍是重大挑战；结果源于药物干预、受试者人口统计与方案等因素的复杂相互作用
- 提出 DeepImagine：以有观测结果的既往试验为锚点，逐步反事实想象——每次只修改一个差异因素，向 LLM 提问"当前想象结果在该扰动下如何变化"，直至与目标配置完全匹配
- 多路径聚合（从不同历史锚点出发）能带来额外增益；训练专用"局部反事实转移算子"模型后显著优于通用 LLM 基线
- 逐步反事实想象区别于相关性预测与显式结构因果建模，是临床试验结果预测的有前景方向

## 正文

预测前瞻性临床试验的结果仍然是一项重大挑战。临床试验结果是药物干预、受试者人口统计学特征和方案等实验因素之间复杂相互作用的结果。在此，我们介绍 DeepImagine——一个以具有已观测结果的既往试验为锚点、通过逐步反事实想象来预测目标试验结果的框架。从一个相关的历史试验出发，DeepImagine 每次只顺序修改一个不同的实验因素。每一步都会向大语言模型（LLM）提出一个局部反事实问题：当前的想象结果在受到这一单一扰动后会如何变化？更新后的结果会被作为下一步的输入继续传递，直到历史配置与目标完全匹配，从而产生最终预测。实验表明，在多种现成的 LLM 上，DeepImagine 始终优于直接的一步预测，而当从不同历史锚点出发的多条想象路径被聚合时，还能获得进一步的增益。我们还构建了带有合成推理轨迹的自然反事实，并训练了一组专用语言模型，每个模型专门学习某一因素的局部反事实转移。将这些学习到的局部算子整合进 DeepImagine，相比通用 LLM 基线带来了实质性的改进。我们的发现将逐步反事实想象定位为临床试验结果预测的一个有前景的方向，它既不同于相关性预测，也不同于显式的结构因果建模。所有代码、训练脚本和评估脚本均可在 https://github.com/deepimagine-counterfactual/DeepImagine 获取。

## 关键词

#临床试验预测 #反事实推理 #大语言模型 #医学AI #因果推理
