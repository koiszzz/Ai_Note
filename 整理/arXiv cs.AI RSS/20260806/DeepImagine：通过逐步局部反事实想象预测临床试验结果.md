---
published: 20260806
title: "DeepImagine：通过逐步局部反事实想象预测临床试验结果"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations.md"
source_note: "[[信息源/arXiv cs.AI RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations]]"
source_sha256: 5594647805b98ad4f369f656a05b2cbfde13ee910254c76c816834d85ffa94e3
original_url: "https://arxiv.org/abs/2604.23054"
processed: 2026-08-06
language: zh-CN

---

# DeepImagine：通过逐步局部反事实想象预测临床试验结果

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Youze Zheng, Jianyou Wang, Yuhan Chen, Matthew Feng, Longtian Bao, Hanyuan Zhang, Maxim Khan, Aditya K. Sehgal, Christopher D. Rosin, Umber Dube, Ramamohan Paturi
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.23054)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DeepImagine- Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations|查看原始文件]]

## 摘要

- 预测前瞻临床试验结果仍是重大挑战；试验结果源于药物干预、参与者人口统计和方案等实验因素之间的复杂交互。
- 本文引入 DeepImagine，一个通过锚定在有观察结果的历史试验上的逐步反事实想象预测目标试验结果的框架：从相关历史试验开始，一次顺序修改一个不同的实验因素，每步向 LLM 提出局部反事实问题。
- 实证上 DeepImagine 在几个现成 LLM 上持续优于直接一步预测，聚合多个从不同历史锚点出发的想象路径时收益更大；还用合成推理轨迹增强的自然反事实训练专用语言模型家族，将其集成产生显著改进。

## 正文

预测前瞻临床试验的结果仍是重大挑战。临床试验结果源于药物干预、参与者人口统计和方案等实验因素之间的复杂交互。在此，我们引入 DeepImagine，一个通过锚定在有观察结果的历史试验上的逐步反事实想象预测目标试验结果的框架。从相关历史试验开始，DeepImagine 一次顺序修改一个不同的实验因素。每一步向大语言模型（LLM）提出局部反事实问题：当前想象的结局会如何因这一单一扰动而改变？更新结果作为下一步输入，直到历史配置与目标完全匹配，产生最终预测。实证上，DeepImagine 在几个现成 LLM 上持续优于直接一步预测，聚合多个从不同历史锚点出发的想象路径时收益更大。我们还构建带合成推理轨迹增强的自然反事实，训练专门语言模型家族，每个专攻一个因素局部反事实转换的学习。将这些学习到的局部算子集成到 DeepImagine 中，相对通用 LLM 基线产生显著改进。我们的发现将逐步反事实想象——区别于相关预测和显式结构因果建模——定位为临床试验结果预测的有前景方向。所有代码、训练脚本和评估脚本可在此获取：https://github.com/deepimagine-counterfactual/DeepImagine。

## 关键词

#临床试验 #反事实 #LLM #预测 #arXiv