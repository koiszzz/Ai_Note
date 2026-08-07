---
published: 2026-08-06
title: DeepImagine：通过逐步局部反事实想象进行临床试验结局预测
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations.md
source_note: "[[信息源/arXiv cs.LG RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations]]"
source_sha256: ccbb0b615d49a92926947812a1291020830a919927473c7996cd50f8c963cc31
original_url: https://arxiv.org/abs/2604.23054
processed: 2026-08-07
language: zh-CN
---

# DeepImagine：通过逐步局部反事实想象进行临床试验结局预测

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.23054)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations|查看原始文件]]

## 摘要

- 提出 DeepImagine，以历史试验为锚点，通过逐步局部反事实想象预测目标试验结局
- 每次修改一个差异实验因素，向 LLM 提出局部反事实问题，直到配置与目标完全匹配
- 多种现成 LLM 上始终优于一步直接预测，聚合多条想象路径可进一步提升
- 训练专注单因素局部反事实转移的专门语言模型，整合后大幅超越通用 LLM 基线

## 正文

预测前瞻性临床试验的结局仍然是一项重大挑战。临床试验结局源于药物干预、参与者人口统计学特征与试验方案等实验因素之间的复杂相互作用。

在此，我们引入 DeepImagine，一个通过以具有观测结局的历史试验为锚点、进行逐步反事实想象来预测目标试验结局的框架。从一项相关的历史试验出发，DeepImagine 一次只修改一个存在差异的实验因素。在每一步中，向大语言模型（LLM）提出一个局部反事实问题：当前想象的结局会如何随这一单次扰动而改变？更新后的结果被作为下一步的输入向前传递，直到历史配置与目标完全匹配，从而产生最终预测。

实验表明，在多种现成的 LLM 上，DeepImagine 始终优于直接的一步预测，而当从不同历史锚点起始的多条想象路径被聚合时，性能进一步提升。我们还构建了带有合成推理轨迹增强的自然反事实，并训练了一系列专门的语言模型，每个模型致力于学习一个因素的局部反事实转移。将这些学习到的局部算子整合进 DeepImagine，相比通用 LLM 基线带来了实质性改进。

我们的发现将逐步反事实想象——区别于相关性预测与显式结构因果建模——定位为临床试验结局预测的一个有前景的方向。所有代码、训练脚本与评估脚本均可从 https://github.com/deepimagine-counterfactual/DeepImagine 获取。

## 关键词

#临床试验 #结局预测 #反事实推理 #大语言模型 #因果建模
