---
title: "IPPRO：面向幅度无关结构剪枝的基于重要性的投影偏移剪枝"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/IPPRO- Importance-based Pruning with PRojective Offset for Magnitude-indifferent Structural Pruning.md"
source_note: "[[信息源/arXiv cs.LG RSS/IPPRO- Importance-based Pruning with PRojective Offset for Magnitude-indifferent Structural Pruning.]]"
source_sha256: 9501ae7acd1e8d69670756b3afbba0242557e7204e32bcaf1fdbaadcd80f9eb0
original_url: "https://arxiv.org/abs/2507.14171"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# IPPRO：面向幅度无关结构剪枝的基于重要性的投影偏移剪枝

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jaeheun Jung、Jaehyuk Lee、Yeajin Lee、Donghun Lee
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2507.14171)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/IPPRO- Importance-based Pruning with PRojective Offset for Magnitude-indifferent Structural Pruning.|查看原始文件]]

## 摘要

- 基于重要性的结构剪枝严重依赖滤波器幅度；该代理指标存在根本缺陷：由于尺度不变性，功能相同的滤波器在重缩放下可获得任意不同的重要性分数。
- 提出 IPPRO（Importance-based Pruning with PROjective Offset），一个基于射影几何的尺度不变剪枝框架：把滤波器嵌入实射影空间（ℝP^N），解决原点处的奇异性，使所有滤波器与零滤波器保持相等的角距离。
- 定义 PROscore，通过测量滤波器在单次梯度步下向零的角位移（方向坍缩）来捕捉功能重要性；把 PROscore 与精确 L0 松弛联系起来，证明这一单次准则能可靠预测多步剪枝动力学。
- 在 CNN、视觉 Transformer 与 LLM（如 ResNet、DeiT、LLaMA）上的大量实验表明 IPPRO 持续优于现有方法，在高压缩率与无微调情境下尤其突出。
- IPPRO 为神经网络压缩确立了一个鲁棒、架构无关的范式。

## 正文

论文编号：arXiv:2507.14171v3（更新类型：replace）。以下为摘要全文翻译。

基于重要性的结构剪枝绝大多数依赖滤波器幅度。这个代理指标存在根本缺陷：由于尺度不变性，功能相同的滤波器在重缩放下可以得到任意不同的重要性分数。我们提出 IPPRO（Importance-based Pruning with PROjective Offset），一个基于射影几何的尺度不变剪枝框架。通过把滤波器嵌入实射影空间（ℝP^N），IPPRO 化解了原点处的奇异性，使所有滤波器与零滤波器保持相等的角距离。我们定义 PROscore，通过测量滤波器在单次梯度步下朝零的角位移（方向坍缩）来捕捉功能重要性。我们进一步把 PROscore 与精确 L0 松弛联系起来，证明这一单次准则能可靠预测多步剪枝动力学。在 CNN、视觉 Transformer 和 LLM（例如 ResNet、DeiT、LLaMA）上的大量实验表明，IPPRO 持续优于现有方法，在高压缩率与无微调情境下取得尤为显著的收益。IPPRO 为神经网络压缩确立了一个鲁棒、架构无关的范式。

## 关键词

#结构剪枝 #尺度不变 #射影几何 #模型压缩 #L0松弛
