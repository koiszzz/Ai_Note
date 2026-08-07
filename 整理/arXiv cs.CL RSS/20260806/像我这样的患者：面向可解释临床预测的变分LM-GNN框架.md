---
published: 2026-08-06
title: 像我这样的患者：面向可解释临床预测的变分LM-GNN框架
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Patients-like-me- A Variational LM--GNN Framework for Explainable Clinical Prediction.md
source_note: "[[信息源/arXiv cs.CL RSS/Patients-like-me- A Variational LM--GNN Framework for Explainable Clinical Prediction]]"
source_sha256: 5c948bf0db0e60f7b712723f4071bfb02dc6d345ebf96c146ededf50ba6a98e6
original_url: https://arxiv.org/abs/2608.04193
processed: 2026-08-07
language: zh-CN
---

# 像我这样的患者：面向可解释临床预测的变分LM-GNN框架

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04193)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Patients-like-me- A Variational LM--GNN Framework for Explainable Clinical Prediction|查看原始文件]]

## 摘要

- Patients-like-me（PLM）是整合局部患者语义与全局队列结构的统一 LM-GNN 框架
- 提出变分期望最大化算法，在监督变分目标下交替更新 LM 与 GNN
- 在 MIMIC-III 与 MIMIC-IV 上持续优于最先进方法，并以适度额外开销提供参考患者解释

## 正文

语言模型（LM）为电子健康记录（EHR）提供了强大的文本表征，但它们孤立地编码患者序列，且可解释性有限。图神经网络（GNN）通过纳入患者间关系并支持参考患者归因来补充 LM，然而它们依赖高质量的患者表征。

我们提出了 Patients-like-me（PLM），一个统一的 LM-GNN 框架，整合了局部患者语义与全局队列结构。为高效训练 PLM，我们引入了一种变分期望最大化算法，在监督变分目标下交替进行 LM 和 GNN 更新。

在 MIMIC-III 和 MIMIC-IV 上的广泛实验表明，PLM 持续优于最先进方法，且改进能泛化到编码器专用（encoder-only）和仅解码器（decoder-only）LM 主干。这些增益仅以适度的额外计算开销实现。PLM 还通过检索有影响力的相似患者提供参考患者解释，而边掩蔽实验确认排名最高的参考对模型预测的影响最大。

## 关键词

#PLM #电子健康记录 #图神经网络 #临床预测 #可解释性
