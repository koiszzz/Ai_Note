---
published: 2026-08-06
title: "从非凸自协调正则化到可扩展的 PINN 拟牛顿训练"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/From Non-Convex Self-Concordant Regularization to Scalable Quasi-Newton Training of PINNs.md"
source_note: "[[信息源/arXiv cs.LG RSS/From Non-Convex Self-Concordant Regularization to Scalable Quasi-Newton Training of PINNs|查看原始文件]]"
source_sha256: 0a41c332f9a51ef58d168c2f8943f1f347a0ba1a3ac419abeb138371e920aacd
original_url: https://arxiv.org/abs/2608.04206
processed: 2026-08-07
language: zh-CN
---

# 从非凸自协调正则化到可扩展的 PINN 拟牛顿训练

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04206)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/From Non-Convex Self-Concordant Regularization to Scalable Quasi-Newton Training of PINNs|查看原始文件]]

## 摘要

- 物理信息神经网络（PINN）通常需要高精度的拟牛顿精化才能获得可靠的偏微分方程解，但其残差目标可能表现出不定、近似奇异且缩放不良的局部曲率。
- 本文提出 SCORE：一种受自协调性启发的拟牛顿方法，其核心机制是用从学习到的逆度量中计算出的单一拟牛顿减量，同时决定一个经强 Wolfe 检验的候选步长和定义下一步割线几何的自适应平移；平移位移表示平均平移度量沿已接受步长的作用，且无需构造 Hessian 或计算 Hessian-向量积。
- 在局部谱等价条件下，拟牛顿减量与候选步长仍与正平移度量中的对应量可比，并在匹配度量情形下恢复归一化自协调规则；强 Wolfe 接受、回退线搜索与标准曲率保护提供了全局化能力，无需修改底层 PINN 目标。
- 在粘性 Burgers、Kuramoto–Sivashinsky、Korteweg–de Vries 和复 Ginzburg–Landau 方程上的实验表明，SCORE 取得了低于所测 BFGS 与自缩放 Broyden 基线的最终误差；Burgers 消融进一步显示，平移曲率稳定化与基于减量的步长选择对高精度精化有互补贡献。

## 正文

物理信息神经网络（PINN）通常需要高精度的拟牛顿精化，才能获得可靠的偏微分方程解，但其残差目标可能表现出不定、近似奇异且缩放不良的局部曲率。正则化拟牛顿方法为稳定割线模型提供了成熟的机制，而自协调方法则为基于曲率的步长选择提供了局部度量规则。基于这两条研究脉络，我们提出了 SCORE——一种受自协调性启发的拟牛顿方法，将减量耦合的平移割线几何用于 PINN 训练。其独特机制在于：由学习到的逆度量计算出的单一拟牛顿减量，同时决定了一个经强 Wolfe 检验的候选步长，以及用于定义下一步割线几何的自适应平移。该平移位移表示平均平移度量沿已接受步长的作用，而既不需要构造 Hessian，也不需要计算 Hessian-向量积。在局部谱等价条件下，我们证明拟牛顿减量与候选步长仍与正平移度量中的对应量可比，并在匹配度量情形下恢复归一化自协调规则。强 Wolfe 接受准则、回退线搜索和标准曲率保护提供了全局化能力，且无需修改底层 PINN 目标。在粘性 Burgers、Kuramoto–Sivashinsky、Korteweg–de Vries 和复 Ginzburg–Landau 方程上的实验表明，SCORE 相比所测的 BFGS 和自缩放 Broyden 基线取得了更低的最终误差。Burgers 消融实验进一步表明，平移曲率稳定化与基于减量的步长选择对高精度精化做出了互补的贡献。

## 关键词

#PINN #拟牛顿方法 #自协调 #偏微分方程
