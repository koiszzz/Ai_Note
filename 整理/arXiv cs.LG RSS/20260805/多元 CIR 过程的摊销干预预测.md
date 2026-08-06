---
published: 2026-08-05
title: "多元 CIR 过程的摊销干预预测"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Amortized Interventional Forecasting for Multivariate CIR Processes.md"
source_note: "[[信息源/arXiv cs.LG RSS/Amortized Interventional Forecasting for Multivariate CIR Processes]]"
source_sha256: 5ac97df4bb1888840beaf137b4ea1afcf67e978af5bddd66a62c263bdcbc5466
original_url: "https://arxiv.org/abs/2608.03715"
processed: 2026-08-05
language: zh-CN
---

# 多元 CIR 过程的摊销干预预测

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Andreas Sauter、Sumit Sourabh、Drona Kandhai 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03715)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Amortized Interventional Forecasting for Multivariate CIR Processes|查看原始文件]]

## 摘要

- 两项贡献：第一，分布因果效应估计的摊销模型——把轨迹视为带时间戳观测，无需按场景重训即可预测校准的多视界冲击响应；第二，因果多元 CIR 数据生成过程——提供真实市场无法提供的配对观测与干预真值。
- 均值回归动力学在金融中普遍存在，Cox–Ingersoll–Ross（CIR）过程是短利率到信用违约互换（CDS）利差等时间序列的标准模型；但 CIR 模型只捕获*相关*联动，不捕获序列间*因果*影响，无法回答一序列受外部冲击时系统如何响应——观测条件分布与历史联动混杂。
- 在 CDS 利差上实例化并校准框架：CIR-ACTIVA 有效性在合成真值上确立（与模拟器匹配现实程度无关），实践接地经对真实 CDS 数据回测生成轨迹评估。
- 相对观测与摊销因果推断基线，CIR-ACTIVA 在联合分布因果选择性与视界解析校准上领先，干预律随视界变化时保持选择性，增益集中于短视界——为耦合利差系统（含 CDS 压力测试）打开观测预测器无法回答的一类假设查询。

## 正文

论文编号：arXiv:2608.03715v1（更新类型：new）。以下为摘要全文翻译。

均值回归动力学在金融中普遍存在，Cox–Ingersoll–Ross（CIR）过程是从短期利率到信用违约互换（CDS）利差等时间序列的标准模型。然而，CIR 模型只捕获序列之间*相关*的联动，而不捕获*因果*影响，因此无法回答当一个序列受到外部冲击时系统的响应——观测条件分布与历史联动混杂。我们做出两项贡献。第一，一个分布因果效应估计的摊销模型：把轨迹视为带时间戳的观测，无需按场景重训即可预测校准的多视界冲击响应。第二，一个因果多元 CIR 数据生成过程：提供真实市场无法提供的配对观测与干预真值。我们以 CDS 利差为测试平台实例化并校准该框架。CIR-ACTIVA 的有效性在合成真值上确立，独立于模拟器与现实的匹配程度，而实践接地通过把生成轨迹对真实 CDS 数据回测来评估。相对观测与摊销因果推断基线，CIR-ACTIVA 在联合分布的因果选择性与视界解析校准上领先，在干预律随视界变化时保持其选择性，增益集中在短视界。这为耦合利差系统（包括 CDS 压力测试）打开了一类观测预测器无法回答的假设查询。

## 关键词

#CIR过程 #干预预测 #因果推断 #金融时间序列
