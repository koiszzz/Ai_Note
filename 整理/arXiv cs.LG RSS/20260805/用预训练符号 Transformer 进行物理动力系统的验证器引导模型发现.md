---
published: 2026-08-05
title: "用预训练符号 Transformer 进行物理动力系统的验证器引导模型发现"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Verifier-Guided Model Discovery for Physical Dynamical Systems with Pretrained Symbolic Transformers.md"
source_note: "[[信息源/arXiv cs.LG RSS/Verifier-Guided Model Discovery for Physical Dynamical Systems with Pretrained Symbolic Transformers.]]"
source_sha256: c50573defaf5c1a8193dc82a96b6ff6ccd76a30af414f7cc1adafeab6d4f9695
original_url: "https://arxiv.org/abs/2608.02662"
processed: 2026-08-05
language: zh-CN
---

# 用预训练符号 Transformer 进行物理动力系统的验证器引导模型发现

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Farbod Faraji、Francesco Belardinelli
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02662)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Verifier-Guided Model Discovery for Physical Dynamical Systems with Pretrained Symbolic Transformers.|查看原始文件]]

## 摘要

- 非线性物理系统的可靠预测支撑科学发现与工程决策；但高保真仿真成本过高，机器学习替代可能不透明并编码系统动力学假设，限制泛化。
- 把合成 ODE 轨迹映射到方程的预训练 Transformer 提供可解释替代，承诺无需系统特定方程知识即可迁移；但把它们可靠迁移到高维物理数据仍是开放挑战。
- 围绕 ODEFormer 作为符号骨干开发验证器引导（VG）工作流：用动力学与物理可容许性标准从多轨迹候选方程池中选择，实现迁移。
- 经典 Van der Pol 振荡器上 VG 在留出初始条件下优于原始 ODEFormer 工作流。
- 处理涡街脱落（大气与等离子体系统中具有社会相关性的现象）：经坐标归约与固定及变化雷诺数下的符号发现；VG 发现固定参数降阶方程，无需尾迹特定候选库或规定的 Navier-Stokes 结构即可恢复基本脱落振荡器与高次谐波，而跨参数模型泛化到留出情境。
- 仅重建保真度不决定符号可发现性，凸显潜在动力学与骨干预训练分布兼容性的重要性。
- 工作为自然科学中可解释、物理可审计预测确立验证器引导的神经到符号方法论。

## 正文

论文编号：arXiv:2608.02662v1（更新类型：new）。以下为摘要全文翻译。

非线性物理系统的可靠预测支撑科学发现与工程决策。然而，高保真仿真成本过高，机器学习替代品可能不透明并编码关于系统动力学的假设，限制泛化。把合成 ODE 轨迹映射到方程的预训练 Transformer 提供可解释的替代方案，承诺无需系统特定方程知识即可迁移。然而，把它们可靠迁移到高维物理数据仍然是一个开放挑战。我们围绕 ODEFormer 作为符号骨干开发一个验证器引导（VG）工作流，使用动力学与物理可容许性标准从多轨迹候选方程池中选择，实现迁移。在经典 Van der Pol 振荡器上，VG 在留出初始条件下优于原始 ODEFormer 工作流。随后我们处理涡街脱落——一种出现在具有社会相关性的大气与等离子体系统中的现象——通过固定与变化雷诺数下的坐标归约与符号发现。VG 发现固定参数的降阶方程，在没有尾迹特定候选库或规定的 Navier-Stokes 结构的情况下恢复基本脱落振荡器与更高谐波，而跨参数模型泛化到留出的情境。仅重建保真度并不能决定符号可发现性，凸显了潜在动力学与骨干预训练分布之间兼容性的重要性。这项工作为自然科学中可解释、物理可审计的预测确立了一种验证器引导的神经到符号方法论。

## 关键词

#符号回归 #ODEFormer #物理发现 #验证器引导 #神经符号
