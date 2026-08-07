---
published: 20260805
title: "使用临床数据对 AI 模型更新风险的经验评估：稳定性、任意性与公平性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/An empirical evaluation of the risks of AI model updates using clinical data- stability, arbitrarine.md"
source_note: "[[信息源/arXiv cs.AI RSS/An empirical evaluation of the risks of AI model updates using clinical data- stability, arbitrarine]]"
source_sha256: 3a24667782dcac625c236aecbcf875258df967f12719c840c215204690e81908
original_url: "https://arxiv.org/abs/2604.23954"
processed: 2026-08-06
language: zh-CN

---

# 使用临床数据对 AI 模型更新风险的经验评估：稳定性、任意性与公平性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ioannis Bilionis, Ricardo C. Berrios, Luis Fernandez-Luque, Carlos Castillo
> - 发布时间：20260805
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.23954)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/An empirical evaluation of the risks of AI model updates using clinical data- stability, arbitrarine|查看原始文件]]

## 摘要

- 临床环境中使用的 AI/ML 模型日益部署支持临床决策，但训练数据因人口统计、环境或患者行为变化而过时时，模型性能可能大幅下降；更新模型虽必要，也可能引入新风险。
- 本文在四个公开的美国 1 型糖尿病数据集（约 496 名 20 岁以下参与者的 11,300 条周观测）上评估所提监控框架，以儿童严重高血糖事件预测为案例研究。
- 检验不同模型更新策略如何通过导致重训练后大量案例预测变化损害模型稳定性、增加预测任意性并恶化亚组公平性和跨人群错误率平衡，提出多个持续监控维度检测这些问题。

## 正文

临床环境中使用的人工智能（AI）和机器学习（ML）模型日益部署以支持临床决策。然而，当训练数据因人口统计、环境或患者行为变化而过时时，模型性能可能大幅下降。虽然用新训练数据更新模型是必要的，此类更新也可能引入新风险。我们在四个公开的美国 1 型糖尿病数据集上评估所提监控框架，这些数据集包含高分辨率连续血糖监测（CGM）数据，约 496 名 20 岁以下参与者的 11,300 条周观测。所有数据集包含结构化社会人口统计信息。以儿童 1 型糖尿病严重高血糖事件预测为案例研究，我们检验不同模型更新策略如何通过导致重训练后大量案例预测变化损害模型稳定性、增加预测任意性，并恶化亚组公平性和跨人群错误率平衡。我们提出多个持续监控维度检测这些问题，并论证此类监控对开发可信临床决策支持系统至关重要。

## 关键词

#临床AI #模型更新 #稳定性 #公平性 #arXiv