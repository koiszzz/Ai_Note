---
published: 2026-08-05
title: "验证器引导的物理动力系统模型发现与预训练符号 Transformer"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Verifier-Guided Model Discovery for Physical Dynamical Systems with Pretrained Symbolic Transformers.md"
source_note: "[[信息源/arXiv cs.AI RSS/Verifier-Guided Model Discovery for Physical Dynamical Systems with Pretrained Symbolic Transformers]]"
source_sha256: 64597086c8b847fd72a7f32d22ad89e4c0eee6b1a62ecd29f9a930089e675e50
original_url: "https://arxiv.org/abs/2608.02662"
processed: 2026-08-05
language: zh-CN
---

# 验证器引导的物理动力系统模型发现与预训练符号 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Farbod Faraji、Francesco Belardinelli
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02662)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Verifier-Guided Model Discovery for Physical Dynamical Systems with Pretrained Symbolic Transformers|查看原始文件]]

## 摘要

- 开发验证器引导（VG）工作流：以 ODEFormer 为符号骨干，用动力学与物理可接受性准则从多轨迹候选方程池选择，实现迁移。
- 非线性物理系统的可靠预测支撑科学发现与工程决策；但高保真模拟成本过高，机器学习代理可能不透明并编码系统动力学假设，限制泛化；把合成 ODE 轨迹映射到方程的预训练 transformer 提供可解释替代，承诺无系统特定方程知识的迁移——但可靠迁移到高维物理数据仍是开放挑战。
- 规范 Van der Pol 振荡器上，VG 在留出初始条件下优于原 ODEFormer 工作流；随后处理涡脱落（大气与等离子体系统中与社会相关的现象）：通过坐标缩减与固定及变化雷诺数下的符号发现——VG 发现恢复基本脱落振荡器与高次谐波的固定参数降阶方程，无需尾流特定候选库或规定 Navier-Stokes 结构，跨参数模型泛化到保留机制。
- 重建保真度本身不决定符号可发现性，凸显潜动力学与骨干预训练分布兼容性的重要性——建立验证器引导的神经到符号方法论，用于自然科学中可解释、物理可审计的预测。

## 正文

论文编号：arXiv:2608.02662v1（更新类型：cross）。以下为摘要全文翻译。

非线性物理系统的可靠预测支撑科学发现与工程决策。然而，高保真模拟成本过高，而机器学习代理可能不透明并编码关于系统动力学的假设，限制泛化。把合成 ODE 轨迹映射到方程的预训练 transformer 提供可解释的替代方案，承诺在无系统特定方程知识的情况下迁移。然而，把它们可靠迁移到高维物理数据仍是开放挑战。我们围绕 ODEFormer 作为符号骨干开发一个验证器引导（VG）工作流：使用动力学与物理可接受性准则从多轨迹候选方程池中选择，实现迁移。在规范 Van der Pol 振荡器上，VG 在留出初始条件下优于原始 ODEFormer 工作流。随后我们处理涡脱落——大气与等离子体系统中与社会相关的现象——通过坐标缩减与固定及变化雷诺数下的符号发现。VG 发现恢复基本脱落振荡器与高次谐波的固定参数降阶方程，无需尾流特定候选库或规定的 Navier-Stokes 结构，而跨参数模型泛化到保留机制。重建保真度本身不能决定符号可发现性，凸显潜动力学与骨干预训练分布之间兼容性的重要性。本工作建立了验证器引导的神经到符号方法论，用于自然科学中可解释且物理可审计的预测。

## 关键词

#符号回归 #动力系统 #验证器引导 #物理可审计
