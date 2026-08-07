---
published: 2026-08-06
title: 更好的编码手册还不够：LLM 政治事件编码中的预测性能与行为可靠性
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/When Better Codebooks Are Not Enough- Predictive Performance and Behavioral Reliability in LLM Polit.md
source_note: "[[信息源/arXiv cs.CL RSS/When Better Codebooks Are Not Enough- Predictive Performance and Behavioral Reliability in LLM Polit|查看原始文件]]"
source_sha256: 45b33f37a952015de90232aadf54849468aa7e9be5b9c639e7894a377f691fa3
original_url: https://arxiv.org/abs/2606.06781
processed: 2026-08-07
language: zh-CN
---

# 更好的编码手册还不够：LLM 政治事件编码中的预测性能与行为可靠性

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.06781)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/When Better Codebooks Are Not Enough- Predictive Performance and Behavioral Reliability in LLM Polit|查看原始文件]]

## 摘要

- 高准确率并不必然意味着 LLM 是忠实的编码器，而许多社会科学研究依赖专家编写的编码手册将文本转为结构化数据
- 研究政治事件编码：比较仅标签名、简洁定义与含示例/事件模式指令/边界规则的增强指导，并评估提示与检索方法
- 增强指导将平均根级宏 F1 从 0.457 提升至 0.633；移除有意义的标签名后定义类方法仍有效
- 一旦重排标签-定义映射，所有方法加权 F1 均不超过 0.20，说明预测性能与对编码规则的遵循应分开评估

## 正文

高准确率并不必然使 LLM 成为忠实的编码器。这一问题之所以重要，是因为许多社会科学研究依赖专家编写的编码手册（codebook）来把文本转化为结构化数据。我们研究政治事件编码任务，模型需要在详细编码规则下识别一个行为体对另一个行为体采取的行动。

我们比较了仅标签名、简洁定义，以及加入示例、事件模式指令和边界规则的增强指导（enriched guidance）。我们还评估了替代的提示和检索方法。随后，我们测试了在编码手册顺序、标签名以及标签-定义映射变化下的行为可靠性。

增强指导将平均根级宏 F1（root-level macro-F1）从 0.457 提升到 0.633。当有意义的标签名被移除时，能够访问定义的方法仍然有效；但在标签-定义映射被重新分配后，没有任何被评估的方法的加权 F1 超过 0.20。这些结果说明，应当将预测性能与对既定编码规则的遵循分开评估。

## 关键词

#LLM #事件编码 #编码手册 #社会科学 #行为可靠性
