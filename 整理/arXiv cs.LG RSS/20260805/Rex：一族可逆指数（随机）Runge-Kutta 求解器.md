---
published: 2026-08-05
title: "Rex：一族可逆指数（随机）Runge-Kutta 求解器"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Rex- A Family of Reversible Exponential (Stochastic) Runge-Kutta Solvers.md"
source_note: "[[信息源/arXiv cs.LG RSS/Rex- A Family of Reversible Exponential (Stochastic) Runge-Kutta Solvers.]]"
source_sha256: ff8d1dea63f7a57476367c8f546788160967f01424f08fefcf54d6b82bc7304c
original_url: "https://arxiv.org/abs/2502.08834"
processed: 2026-08-05
language: zh-CN
---

# Rex：一族可逆指数（随机）Runge-Kutta 求解器

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Zander W. Blasingame、Chen Liu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2502.08834)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Rex- A Family of Reversible Exponential (Stochastic) Runge-Kutta Solvers.|查看原始文件]]

## 摘要

- 基于神经微分方程的深度生成模型已成为许多生成任务的最先进方法；这些模型依赖从先验分布积分到数据分布的 ODE/SDE 求解器，许多应用中逆向积分也非常可取。
- 标准求解器积累离散化误差，禁止精确反演，这种不准确性在精度关键应用中不可接受；现有反演方法稳定性差、收敛阶低，且严格限于 ODE 设置。
- 提出 Rex，一族可逆指数（随机）Runge-Kutta 求解器：应用 Lawson 方法把任意显式（随机）Runge-Kutta 格式转换为代数可逆格式，同时用于扩散 ODE 与 SDE。
- 除严格理论分析（建立任意阶收敛与非零线性稳定区域）外，实证表明 Rex 实现接近机器精度的重建，并改善流模型的 Boltzmann 采样以及扩散模型的图像生成与编辑。

## 正文

论文编号：arXiv:2502.08834v5（更新类型：replace）。以下为摘要全文翻译。

基于神经微分方程的深度生成模型已成为许多生成任务的最先进方法。这些模型依赖从先验分布积分到数据分布的 ODE/SDE 求解器；在许多应用中，逆向积分也非常可取。然而，标准求解器积累离散化误差，禁止精确反演，这种不准确性在精度关键应用中不可接受。现有的反演方法稳定性差、收敛阶低，并且严格限于 ODE 设置。在这项工作中，我们提出 Rex，一族可逆指数（随机）Runge-Kutta 求解器，通过应用 Lawson 方法把任何显式（随机）Runge-Kutta 格式转换为代数可逆的格式，同时用于扩散 ODE 与 SDE。除严格的理论分析——建立任意阶收敛与非零的线性稳定区域——外，我们实证表明 Rex 实现接近机器精度的重建，并改善流模型的 Boltzmann 采样以及扩散模型的图像生成与编辑。

## 关键词

#Runge-Kutta #可逆求解器 #扩散模型 #流模型 #生成模型
