---
published: 2026-08-07
title: "通过可微 D-vine Copula 进行局部化异常检测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Localized Anomaly Detection via Differentiable D-vine Copulas.md"
source_note: "[[信息源/arXiv cs.AI RSS/Localized Anomaly Detection via Differentiable D-vine Copulas]]"
source_sha256: 6a907c8f973470ac8931182372edde5173e32655a72321bdbcb2b12223286700
original_url: "https://arxiv.org/abs/2607.25020"
processed: 2026-08-07
language: zh-CN
---

# 通过可微 D-vine Copula 进行局部化异常检测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Nicholas Andrea Pearson, Francesca Zanello, Davide Russo, Luca Bortolussi, Francesca Cairoli
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.25020)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Localized Anomaly Detection via Differentiable D-vine Copulas|查看原始文件]]

## 摘要

- Vine copula 提供灵活框架，通过分层分解为双变量 pair-copula 建模复杂多元分布；拟合 D-vine 需要从编码不同依赖模式的候选集中为每个 pair-copula 选择 copula 族与参数配置，随变量与候选族数量增加，可能配置数组合增长。
- 现有拟合程序通过顺序贪心决策应对该挑战，在每步承诺单一局部最优族，可能丢弃本可产生更好全局拟合的配置。
- 提出新颖估计框架：结合由完全可微实现启用的基于梯度极大似然估计与束搜索策略，在拟合过程中维持多个竞争 D-vine 配置，实现配置空间更广探索同时保持计算可处理。
- 基于拟合 D-vine，引入局部化异常检测框架：利用层级分解产生全局异常分数与边级解释；通过 Mondrian 保形预测提供统计保证，pair-copula 结构将异常定位到特定变量关系；在基准与真实数据集上评估，展示带不确定性量化的可解释异常检测有效性。

## 正文

Vine copula 提供灵活框架，通过分层分解为双变量 pair-copula 建模复杂的多元分布。拟合 D-vine 需要从一组编码不同依赖模式的候选中为每个 pair-copula 选择 copula 族与参数配置。随着变量与候选族数量增加，可能配置的数量组合增长。现有拟合程序通过顺序贪心决策应对该挑战，在每步承诺单一局部最优族，可能丢弃本可产生更好全局拟合的配置。为克服该局限，我们提出一个新奇估计框架，结合由完全可微实现启发的基于梯度的极大似然估计与束搜索（beam-search）策略，在拟合过程中维持多个竞争 D-vine 配置。这允许更广地探索配置空间，同时保持计算可处理。基于拟合的 D-vine，我们引入一个局部化异常检测框架，利用层级分解产生全局异常分数与边级解释。通过 Mondrian 保形预测（Mondrian conformal prediction）提供统计保证，而 pair-copula 结构使异常定位到特定变量关系。我们在基准与真实数据集上评估所提框架，展示其对带不确定性量化的可解释异常检测的有效性。

## 关键词

#Vine copula #异常检测 #保形预测 #可解释性
