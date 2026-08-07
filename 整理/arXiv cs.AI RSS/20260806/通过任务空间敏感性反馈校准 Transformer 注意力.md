---
published: 20260806
title: "通过任务空间敏感性反馈校准 Transformer 注意力"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Calibrating Transformer Attention via Task-Space Sensitivity Feedback.md"
source_note: "[[信息源/arXiv cs.AI RSS/Calibrating Transformer Attention via Task-Space Sensitivity Feedback]]"
source_sha256: c8a21fb099e313e44028bb51ba924ff746916beb06c098a047268ab310f78a8e
original_url: "https://arxiv.org/abs/2512.20661"
processed: 2026-08-06
language: zh-CN

---

# 通过任务空间敏感性反馈校准 Transformer 注意力

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yawei Liu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.20661)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Calibrating Transformer Attention via Task-Space Sensitivity Feedback|查看原始文件]]

## 摘要

- 基于 Transformer 的预训练语言模型（PLM）在文本分类中表现出色，但遭受注意力稀释和注意力汇效应，迫使模型过度聚焦任务无关 token；现有注意力监督方法依赖昂贵的 token 级人类标注或静态启发式，无法扩展或捕捉上下文相关 token 重要性。
- 本文提出 AttCal，一个通过任务空间敏感性反馈的自监督、无标注注意力校准框架：将注意力分布视为随机策略引导 token 删除扰动，从语义偏移推断上下文相关 token 重要性，通过策略梯度优化注意力参数。
- AttCal 冻结 PLM 骨干仅更新注意力投影层确保训练效率；跨五个数据集基准显示 AttCal 显著优于原始 PLM（Llama3-8B 准确率最高提升 15.8%），在分类和可解释性上超越 SOTA 监督基线。

## 正文

基于 Transformer 的预训练语言模型（PLM）在文本分类中表现出色，但遭受注意力稀释和注意力汇（attention sink）效应，迫使模型过度聚焦任务无关 token。现有注意力监督方法依赖昂贵的 token 级人类标注或静态启发式，无法扩展或捕捉上下文相关的 token 重要性。为解决此问题，我们提出 AttCal，一个通过任务空间敏感性反馈的自监督、无标注注意力校准框架。AttCal 将注意力分布视为随机策略以引导 token 删除扰动，从语义偏移推断上下文相关的 token 重要性，并通过策略梯度优化注意力参数。关键的是，AttCal 冻结 PLM 骨干，仅更新注意力投影层以确保训练效率。跨五个数据集的基准表明，AttCal 显著优于原始 PLM——Llama3-8B 准确率最高提升 15.8%——并在分类和可解释性方面超越 SOTA 监督基线。

## 关键词

#注意力校准 #文本分类 #自监督 #Transformer #arXiv