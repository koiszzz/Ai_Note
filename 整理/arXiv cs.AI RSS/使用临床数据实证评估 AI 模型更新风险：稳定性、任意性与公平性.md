---
title: "使用临床数据实证评估 AI 模型更新风险：稳定性、任意性与公平性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/An empirical evaluation of the risks of AI model updates using clinical data- stability, arbitrarine.md"
source_note: "[[信息源/arXiv cs.AI RSS/An empirical evaluation of the risks of AI model updates using clinical data- stability, arbitrarine]]"
source_sha256: 3a24667782dcac625c236aecbcf875258df967f12719c840c215204690e81908
original_url: "https://arxiv.org/abs/2604.23954"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 使用临床数据实证评估 AI 模型更新风险：稳定性、任意性与公平性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.23954)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/An empirical evaluation of the risks of AI model updates using clinical data- stability, arbitrarine|查看原始文件]]

## 摘要

- 临床环境中使用的 AI 和机器学习模型越来越多地被部署用于支持临床决策，但人口结构、环境或患者行为变化会使训练数据过时，导致性能显著下降。
- 使用新训练数据更新模型虽然必要，却可能引入新的风险。论文在四个公开的美国 1 型糖尿病数据集上评估监测框架，数据包含 496 名未满 20 岁参与者约 11,300 周的高分辨率连续血糖监测观测。
- 以预测儿童 1 型糖尿病严重高血糖事件为案例，研究发现不同更新策略可能造成大量病例重新训练后预测改变、预测任意性增加、亚组公平性恶化以及不同人群错误率平衡变差。
- 论文提出持续监测的多个维度，以发现这些问题，并强调此类监测对开发可信临床决策支持系统至关重要。

## 正文

临床环境中使用的人工智能（AI）和机器学习（ML）模型越来越多地被部署，以支持临床决策。然而，当人口结构、环境或患者行为发生变化，导致训练数据过时时，模型性能可能显著下降。虽然使用新的训练数据更新模型是必要的，但此类更新也可能引入新的风险。

作者在四个公开的、基于美国数据的 1 型糖尿病数据集上评估所提出的监测框架。这些数据集包含高分辨率连续血糖监测（CGM）数据，涉及 496 名未满 20 岁的参与者，约有 11,300 周的观测记录；所有数据集都包含结构化社会人口学信息。

研究以预测儿童 1 型糖尿病严重高血糖事件为案例，考察不同模型更新策略如何对模型稳定性产生不利影响。结果显示，重新训练后，许多病例的预测会发生改变，预测任意性会增加，亚组公平性会恶化，不同人群之间的错误率平衡也会变差。

论文提出持续监测的多个维度，用于发现这些问题，并认为持续监测是开发可信临床决策支持系统不可或缺的环节。

## 关键词

#临床AI #模型更新 #公平性 #医疗决策支持
