---
title: "IPPRO：面向幅度无关结构化剪枝的投影偏移重要性剪枝"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/IPPRO- Importance-based Pruning with PRojective Offset for Magnitude-indifferent Structural Pruning.md"
source_note: "[[信息源/arXiv cs.AI RSS/IPPRO- Importance-based Pruning with PRojective Offset for Magnitude-indifferent Structural Pruning]]"
source_sha256: f1e0f08f9d8f873f6ffbfe5acdc2a64f1a7574c58ffbb761c1593d33140290b6
original_url: "https://arxiv.org/abs/2507.14171"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# IPPRO：面向幅度无关结构化剪枝的投影偏移重要性剪枝

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jaeheun Jung、Jaehyuk Lee、Yeajin Lee 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2507.14171)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/IPPRO- Importance-based Pruning with PRojective Offset for Magnitude-indifferent Structural Pruning|查看原始文件]]

## 摘要

- 提出 IPPRO（投影偏移重要性剪枝），扎根于射影几何的尺度不变剪枝框架：把滤波器嵌入实射影空间（ℝℙᴺ），解决原点处的奇异性，使所有滤波器与零滤波器处于相等角距离。
- 定义 PROscore：通过测量滤波器在单次梯度步下向零的角度位移（方向坍缩）捕获功能重要性；并把 PROscore 与精确 L0 松弛联系，证明该一次性准则可靠预测多步剪枝动力学。
- 在 CNN、视觉 Transformer 与 LLM（如 ResNet、DeiT、LLaMA）上的大量实验显示，IPPRO 一致优于现有方法，在高压缩与免微调场景下尤其显著。
- 建立稳健、架构无关的神经网络压缩范式。

## 正文

论文编号：arXiv:2507.14171v3（更新类型：replace-cross）。以下为摘要全文翻译。

基于重要性的结构化剪枝压倒性地依赖滤波器幅度。这个代理从根本上是有缺陷的：由于尺度不变性，功能相同的滤波器在重缩放下可以获得任意不同的重要性分数。我们提出 IPPRO（Importance-based Pruning with PROjective Offset，投影偏移重要性剪枝），一个扎根于射影几何的尺度不变剪枝框架。通过把滤波器嵌入实射影空间（ℝℙᴺ），IPPRO 解决原点处的奇异性，使所有滤波器与零滤波器处于相等的角距离。我们定义 PROscore，通过测量滤波器在单次梯度步下向零的角度位移（方向坍缩）来捕获功能重要性。我们进一步把 PROscore 与精确的 L0 松弛联系起来，证明这一一次性准则能可靠预测多步剪枝动力学。在 CNN、视觉 Transformer 与 LLM（例如 ResNet、DeiT、LLaMA）上的大量实验表明，IPPRO 一致优于现有方法，在高压缩与免微调场景下尤其取得显著增益。IPPRO 为神经网络压缩建立了稳健、架构无关的范式。

## 关键词

#结构化剪枝 #模型压缩 #尺度不变 #射影几何
