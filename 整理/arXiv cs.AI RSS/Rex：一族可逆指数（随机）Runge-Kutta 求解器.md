---
title: "Rex：一族可逆指数（随机）Runge-Kutta 求解器"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Rex- A Family of Reversible Exponential (Stochastic) Runge-Kutta Solvers.md"
source_note: "[[信息源/arXiv cs.AI RSS/Rex- A Family of Reversible Exponential (Stochastic) Runge-Kutta Solvers]]"
source_sha256: e9d184e7690a4f1a31722a8890927f66e5717b53d162cfd3bdfd264cc8685271
original_url: "https://arxiv.org/abs/2502.08834"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Rex：一族可逆指数（随机）Runge-Kutta 求解器

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zander W. Blasingame、Chen Liu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2502.08834)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Rex- A Family of Reversible Exponential (Stochastic) Runge-Kutta Solvers|查看原始文件]]

## 摘要

- 提出 Rex，一族可逆指数（随机）Runge-Kutta 求解器：应用 Lawson 方法把任何显式（随机）Runge-Kutta 方案转换为代数可逆方案，用于扩散 ODE 与 SDE。
- 基于神经微分方程的深度生成模型已成为许多生成任务的最先进方法；这些模型依赖从先验分布积分到数据分布的 ODE/SDE 求解器，许多应用中逆向积分也高度可取；标准求解器累积的离散化误差禁止精确反转，这种不精确在精度关键应用中不可接受；现有反转方法稳定差、收敛阶低且严格限于 ODE 设置。
- 严格理论分析建立任意阶收敛与非线性稳定区域；实证显示 Rex 实现近机器精度重建，并改善流模型的玻尔兹曼采样以及扩散模型的图像生成与编辑。

## 正文

论文编号：arXiv:2502.08834v5（更新类型：replace-cross）。以下为摘要全文翻译。

基于神经微分方程的深度生成模型已成为许多生成任务的最先进方法。这些模型依赖从先验分布积分到数据分布的 ODE/SDE 求解器；在许多应用中，沿逆方向积分也高度可取。然而，标准求解器累积的离散化误差禁止精确反转，这种不精确在精度关键应用中不可接受。现有反转方法遭受稳定性差与收敛阶低，并且严格限于 ODE 设置。在本工作中，我们提出 Rex，一族可逆指数（随机）Runge-Kutta 求解器：通过应用 Lawson 方法，把任何显式（随机）Runge-Kutta 方案转换为扩散 ODE 与 SDE 的代数可逆方案。除严格的理论分析（建立任意阶收敛与非零线性稳定区域）外，我们实证表明，Rex 实现近机器精度的重建，并改善流模型的玻尔兹曼采样以及扩散模型的图像生成与编辑。

## 关键词

#可逆求解器 #扩散模型 #Runge-Kutta #流模型
