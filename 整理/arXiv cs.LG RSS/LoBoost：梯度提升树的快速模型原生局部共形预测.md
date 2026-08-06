---
title: "LoBoost：梯度提升树的快速模型原生局部共形预测"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/LoBoost- Fast Model-Native Local Conformal Prediction for Gradient-Boosted Trees.md"
source_note: "[[信息源/arXiv cs.LG RSS/LoBoost- Fast Model-Native Local Conformal Prediction for Gradient-Boosted Trees.]]"
source_sha256: ac41d21950efdbf80cd0cd269ec9367b71b870055665e963f89c1cbdd43f5076
original_url: "https://arxiv.org/abs/2602.22432"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LoBoost：梯度提升树的快速模型原生局部共形预测

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Vagner Santos、Victor Coscrato、Luben Cabezas、Rafael Izbicki、Thiago Ramos
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.22432)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LoBoost- Fast Model-Native Local Conformal Prediction for Gradient-Boosted Trees.|查看原始文件]]

## 摘要

- 梯度提升决策树是表格回归中最强的即用预测器之一，但仅有点预测不量化不确定性；共形预测提供无分布边际覆盖，但标准分割共形使用单一全局残差分位数，对异方差适应不佳。
- 提出 LoBoost，一个模型原生局部共形方法：复用拟合集成树的叶子结构定义特征空间的多尺度划分。
- 每个输入由其沿提升路径访问的叶子序列表示，匹配的叶子前缀定义嵌套组，在其中局部估计残差分位数。
- 通过复用模型已学到的预测结构，LoBoost 不需要辅助划分或干扰模型、不需要重训练、除标准共形校准外不需要额外数据分割。
- 理论把拟合集成的稳定性及其诱导单元的几何与局部残差分数同质性联系起来，提供有限样本覆盖误差控制与渐近逐点有效性（随局部校准规模增长、单元充分同质）。
- 实验显示竞争性的区间质量、低事后校准成本，以及跨局部校准规模设置的稳定行为。

## 正文

论文编号：arXiv:2602.22432v2（更新类型：replace-cross）。以下为摘要全文翻译。

梯度提升决策树是表格回归中最强的即用预测器之一，但仅有点预测不能量化不确定性。共形预测提供无分布边际覆盖，然而标准分割共形使用单一全局残差分位数，对异方差的适应能力较差。我们提出 LoBoost，一个模型原生局部共形方法，复用拟合集成树的叶子结构来定义特征空间的多尺度划分。每个输入由它沿提升路径访问的叶子序列表示，匹配的叶子前缀定义嵌套组，在其中局部估计残差分位数。通过复用模型已学到的预测结构，LoBoost 不需要辅助划分或干扰模型，不需要重训练，除标准共形校准外也不需要额外的数据分割。我们的理论把拟合集成的稳定性及其诱导单元的几何与局部残差分数同质性联系起来，提供有限样本覆盖误差控制与渐近逐点有效性——随局部校准规模增长且单元变得充分同质。实验显示竞争性的区间质量、低的事后校准成本，以及跨局部校准规模设置的稳定行为。

## 关键词

#共形预测 #梯度提升树 #局部校准 #不确定性量化 #异方差
