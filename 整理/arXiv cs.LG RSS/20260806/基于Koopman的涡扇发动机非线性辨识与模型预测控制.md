---
published: 2026-08-06
title: 基于Koopman的涡扇发动机非线性辨识与模型预测控制
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Koopman-Based Nonlinear Identification and Model Predictive Control of a Turbofan Engine.md
source_note: "[[信息源/arXiv cs.LG RSS/Koopman-Based Nonlinear Identification and Model Predictive Control of a Turbofan Engine]]"
source_sha256: 77901fe616efa8bbc7195c49c37ff41fc1be11ea33d7d4458394f8dddfda89f4
original_url: https://arxiv.org/abs/2604.01730
processed: 2026-08-07
language: zh-CN
---

# 基于Koopman的涡扇发动机非线性辨识与模型预测控制

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.01730)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Koopman-Based Nonlinear Identification and Model Predictive Control of a Turbofan Engine|查看原始文件]]

## 摘要

- 用元启发式扩展动态模态分解构建可复用的单一 Koopman 模型，同时捕捉转子转速与发动机压力比动力学
- 提出带扰动观测器的自适应 Koopman 模型预测控制器（AKMPC），并将非线性限制器表达为线性约束
- 变飞行条件下 AKMPC 性能更优，EPR 控制策略改善推力响应

## 正文

本文研究基于 Koopman 算子的双转子涡扇发动机多变量控制方法。开发了一个基于物理的部件级模型，用于生成训练数据并验证控制器。改进了元启发式扩展动态模态分解（meta-heuristic extended dynamic mode decomposition），其代价函数旨在同时精确捕捉转子转速动力学与发动机压力比（EPR），从而构建一个可在多种控制策略间复用的单一 Koopman 模型。利用辨识得到的时变 Koopman 模型，我们开发了带扰动观测器的自适应 Koopman 模型预测控制器（AKMPC），并与基于 Koopman 的反馈线性化控制器（K-FBLC）及其带积分器增强的版本（K-FBLC-I）进行比较。Koopman 表示还使非线性燃气轮机（GTE）输出限制器——例如转子加速度与涡轮进口温度限制——能够在 AKMPC 中表达为线性约束。在转子转速与 EPR 的两种控制配置下，以及海平面与变飞行条件下评估了各控制器。结果表明，所提出的辨识方法能够对转子转速与 EPR 进行精确预测，使 Koopman 模型能够灵活复用于不同的控制公式。虽然所有策略在海平面条件下表现相当，但 AKMPC 在变飞行条件下表现出更优的性能，因为它能够捕捉非线性动力学、处理约束并补偿模型失配。此外，EPR 控制策略改善了推力响应。该研究凸显了 Koopman 控制的应用价值以及 AKMPC 框架对鲁棒涡扇发动机控制的优势。

## 关键词

#Koopman算子 #模型预测控制 #涡扇发动机 #动态模态分解 #非线性辨识 #EPR
