---
published: 2026-08-05
title: "量化对生物医学 LLM 可靠性的影响"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Quantization Effects on Biomedical LLM Reliability.md"
source_note: "[[信息源/arXiv cs.LG RSS/Quantization Effects on Biomedical LLM Reliability.]]"
source_sha256: e19bf1b964471357c64b214417c1edf187ec7799d9de853cc4b3cdf9e4813b96
original_url: "https://arxiv.org/abs/2608.03854"
processed: 2026-08-05
language: zh-CN
---

# 量化对生物医学 LLM 可靠性的影响

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Anton Rasmussen、Hong Qin
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03854)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Quantization Effects on Biomedical LLM Reliability.|查看原始文件]]

## 摘要

- 解码器语言模型用作分类器时，预测类别概率取决于实现选择，包括提示模板、言语器（标签到 token 映射）与评分规则，这些很少被当作实验变量。
- 对三个 Mistral-7B 变体（Base、BioMistral 与 Instruct）在 PubMed RCT 句子分类（n=2000）上进行受控评估，覆盖 FP16、INT8 与 INT4 精度与四种回答文本提示模板。
- 主要发现：概率提取协议主导表观校准——从求和切换到平均 token 对数似然评分逆转模型间校准排名：BioMistral 平均期望校准误差从 0.097 升到 0.289，而 Instruct 从 0.237 降到 0.096，同时专门模型的准确率变化不到 1 个百分点，基础模型为 4–6 个百分点。
- 提示模板选择产生 7–24 个百分点的准确率差异，与模型级效应相当或更大；一个模板上 BioMistral 优于 Instruct，尽管整体均值只偏向 Instruct 1.3 个百分点。
- 对 BioMistral 与 Instruct，INT8 量化相对 FP16 只改变准确率与 F1 1–2 个百分点，而基础模型在某些模板上表现更大 INT8 效应（最多 +4.2 个百分点）；INT4 产生异质但非灾难性的效应。
- 温度缩放降低两个模型求和评分下的期望校准误差，但只对该评分规则有效；微调 PubMedBERT 参考达到 82.7% 准确率但用约 176,000 个有标注训练样本，无法直接比较。
- 结果表明提示模板设计与评分归一化是评估解码器语言模型校准时的一阶实验决策。

## 正文

论文编号：arXiv:2608.03854v1（更新类型：new）。以下为摘要全文翻译。

当解码器语言模型被用作分类器时，预测的类别概率取决于实现选择，包括提示模板、言语器（标签到 token 映射）与评分规则，这些很少被当作实验变量。我们呈现三个 Mistral-7B 变体（Base、BioMistral 与 Instruct）在 PubMed RCT 句子分类（n=2000）上、FP16、INT8 与 INT4 精度下、使用四种回答文本提示模板的受控评估。我们的主要发现是，概率提取协议主导表观校准。从求和切换到平均 token 对数似然评分会逆转模型之间的校准排名：BioMistral 的平均期望校准误差从 0.097 增加到 0.289，而 Instruct 从 0.237 减少到 0.096，同时专门模型的准确率变化不到 1 个百分点，基础模型为 4–6 个百分点。提示模板选择产生 7–24 个百分点的准确率差异，与模型级效应相当或更大。在一个模板上，BioMistral 优于 Instruct，尽管整体均值仅偏向 Instruct 1.3 个百分点。对 BioMistral 与 Instruct，INT8 量化相对 FP16 只改变准确率与 F1 1–2 个百分点，而基础模型在某些模板上表现出更大的 INT8 效应（最多 +4.2 个百分点）。INT4 产生异质但非灾难性的效应。温度缩放降低两种模型在求和评分下的期望校准误差，但只对该评分规则有效。一个微调的 PubMedBERT 参考达到 82.7% 的准确率，但使用约 176,000 个有标注训练样本，无法直接比较。这些结果表明，提示模板设计与评分归一化是评估解码器语言模型校准时的一阶实验决策。

## 关键词

#量化 #生物医学 #LLM校准 #提示模板 #可靠性
