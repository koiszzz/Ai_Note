---
published: 20260806
title: "Patients-like-me：可解释临床预测的变分 LM-GNN 框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Patients-like-me- A Variational LM--GNN Framework for Explainable Clinical Prediction.md"
source_note: "[[信息源/arXiv cs.AI RSS/Patients-like-me- A Variational LM--GNN Framework for Explainable Clinical Prediction]]"
source_sha256: f1277461fdbb1d06755586ec5c740fef590d378f6748d030d89fddb99a1bea1f
original_url: "https://arxiv.org/abs/2608.04193"
processed: 2026-08-06
language: zh-CN

---

# Patients-like-me：可解释临床预测的变分 LM-GNN 框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xinyu Wang, Yixuan Li, Hanwei Wu, Qincheng Lu, Chi-Kuang Yeh, Xiao-Wen Chang, Ziyang Song
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04193)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Patients-like-me- A Variational LM--GNN Framework for Explainable Clinical Prediction|查看原始文件]]

## 摘要

- 语言模型（LM）为电子健康记录（EHR）提供强文本表示，但隔离编码患者序列且可解释性有限；图神经网络（GNN）通过融入患者间关系并支持参考患者归因补充 LM，但依赖高质量患者表示。
- 本文提出 Patients-like-me（PLM），一个统一 LM-GNN 框架，集成局部患者语义与全局队列结构；为高效训练 PLM，引入变分期望最大化算法，在监督变分目标下交替 LM 和 GNN 更新。
- MIMIC-III 和 MIMIC-IV 广泛实验显示 PLM 持续优于最先进方法，改进跨编码器专用和解码器专用 LM 骨干泛化，仅需适度额外计算开销；PLM 还通过检索有影响力的相似患者提供参考患者解释，边掩蔽实验确认最高排名参考对模型预测影响最大。

## 正文

语言模型（LM）为电子健康记录（EHR）提供强文本表示，但它们在隔离中编码患者序列并提供有限可解释性。图神经网络（GNN）通过融入患者间关系并实现参考患者归因补充 LM，然而它们依赖高质量患者表示。我们提出 Patients-like-me（PLM），一个统一 LM-GNN 框架，集成局部患者语义与全局队列结构。为高效训练 PLM，我们引入变分期望最大化（Variational Expectation-Maximization）算法，在监督变分目标下交替 LM 和 GNN 更新。MIMIC-III 和 MIMIC-IV 的广泛实验表明，PLM 持续优于最先进方法，改进跨编码器专用和解码器专用 LM 骨干泛化。这些增益仅以适度额外计算开销实现。PLM 还通过检索有影响力的相似患者提供参考患者解释，而边掩蔽实验确认最高排名参考对模型预测影响最大。

## 关键词

#电子健康记录 #图神经网络 #临床预测 #可解释性 #arXiv