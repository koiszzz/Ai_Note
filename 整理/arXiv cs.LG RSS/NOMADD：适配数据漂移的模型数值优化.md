---
title: "NOMADD：适配数据漂移的模型数值优化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/NOMADD- Numerical Optimization of Models Adapting to Data Drift.md"
source_note: "[[信息源/arXiv cs.LG RSS/NOMADD- Numerical Optimization of Models Adapting to Data Drift.]]"
source_sha256: 033af5a1da0b7ad8d2ecbfe3caf9d3153f6a6baff96ea35f01ec54f75cf9f4f6
original_url: "https://arxiv.org/abs/2608.02845"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# NOMADD：适配数据漂移的模型数值优化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Swapn Shah、Keith Burghardt
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02845)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/NOMADD- Numerical Optimization of Models Adapting to Data Drift.|查看原始文件]]

## 摘要

- 特征分布随时间变化（数据漂移）或特征与结果变量关系随时间变化（概念漂移）时，表格模型性能退化；这些问题难以实时缓解，因为标注数据可能无法立即获得，或重训练模型不切实际。
- 现有减少漂移的工具通常为神经网络架构定制并适配训练方式；本文提供一个替代的事后方法减少概念漂移，适用于从树到神经网络再到表格基础模型的多种模型。
- 该工具在约束（如高模型准确率、有界推理时间或模型规模要求用户在特定用例中选择不同模型）下尤其有用。
- 算法把基础模型分别拟合到每个有标注训练期，测量其参数相对在所有期间汇总的单一锚模型的演化，用低秩分解压缩这些变化，并用阻尼正则化预测把每个潜在因子向前外推。
- 在 18 数据集 Drift-Resilient TabPFN 基准上（按该基准自己的协议与指标评估）：外推改善其应用到的每个基础家族，取得与最先进 Drift-Resilient TabPFN 相当的性能，训练只需数秒；而 Drift-Resilient TabPFN 需要在约 1,300 GPU 时上对数百万合成数据集预训练，推理慢数个数量级（取决于模型）。
- 讨论中探索把该工具扩展到其他模态的前景与挑战。

## 正文

论文编号：arXiv:2608.02845v1（更新类型：new）。以下为摘要全文翻译。

当特征分布随时间变化（数据漂移）或特征与结果变量之间的关系随时间变化（概念漂移）时，表格模型性能会退化。这些问题难以实时缓解，因为标注数据可能无法立即获得，或者重训练模型可能不切实际。虽然存在减少漂移的工具，但它们通常为神经网络架构定制并适配模型的训练方式。在本文中，我们提供一个替代的事后方法以减少概念漂移，适用于从树到神经网络再到表格基础模型的多种模型。该新工具在以下约束下尤其有用：高模型准确率、有界推理时间或模型规模等要求用户为特定用例在不同模型之间做出选择。我们的算法把基础模型分别拟合到每个有标注训练期，测量其参数相对在所有这些期间汇总的单一锚模型的演化，用低秩分解压缩这些变化，并用阻尼、正则化的预测把每个潜在因子向前外推。在 18 数据集 Drift-Resilient TabPFN 基准上，按该基准自己的协议与指标评估，外推改善它应用到的每个基础家族，并以数秒的训练取得与最先进的 Drift-Resilient TabPFN 竞争的性能。相比之下，Drift-Resilient TabPFN 需要在约 1,300 GPU 时上对数百万合成数据集预训练，且（取决于模型）推理慢数个数量级。在讨论中，我们探索把该工具扩展到其他模态的前景与挑战。

## 关键词

#概念漂移 #数据漂移 #低秩分解 #表格模型 #后处理
