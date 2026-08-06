---
title: "超越单位激励与光滑性的随机鞍点规避：路径式 Lyapunov-Perron 框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Stochastic Saddle Avoidance Beyond Unit Excitation and Smoothness- A Pathwise Lyapunov-Perron Framew.md"
source_note: "[[信息源/arXiv cs.LG RSS/Stochastic Saddle Avoidance Beyond Unit Excitation and Smoothness- A Pathwise Lyapunov-Perron Framew.]]"
source_sha256: 1faea38d927e4641bb792f6f1927848a55a0e5bc9bcd82ff3e69a46c5978e4c6
original_url: "https://arxiv.org/abs/2608.03001"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 超越单位激励与光滑性的随机鞍点规避：路径式 Lyapunov-Perron 框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Junwen Qiu、Bohao Ma、Andre Milzarek、Junyu Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03001)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Stochastic Saddle Avoidance Beyond Unit Excitation and Smoothness- A Pathwise Lyapunov-Perron Framew.|查看原始文件]]

## 摘要

- 单位激励（UE）是随机鞍点规避中的常见假设：随机误差必须在期望上沿每个方向有均匀正分量；该条件给出排除收敛到严格鞍点的直接方式，但过度简化实际噪声结构，不匹配许多随机优化情境。
- 过参数化或插值模型中，噪声在接近平稳处可能消失；有限和问题中随机梯度噪声可能位于低维、数据依赖子空间；这些常见场景中 UE 自然不满足。
- 证明无需 UE 的随机递归抽象几乎必然规避定理：用可验证路径式条件替代 UE 型要求；应用中这些条件来自标准 i.i.d. 采样下的局部光滑性与有限矩假设，或来自无放回采样下的有限和结构。
- 由于随机采样映射一般没有公共不动点，确定性分析中著名的中心稳定流形论证不能直接应用；改用路径依赖变量替换与路径式 Lyapunov-Perron 证明策略。
- 应用：获得随机镜像下降（含 SGD）与随机重排的严格鞍点规避；对非光滑复合目标证明近端型随机梯度方法的规避结果；结合合适迭代收敛保证，建立收敛到原目标函数局部最小值的结论。

## 正文

论文编号：arXiv:2608.03001v1（更新类型：cross）。以下为摘要全文翻译。

单位激励（Unit Excitation，UE）是随机鞍点规避中的常见假设：随机误差必须在期望上沿每个方向都有一个均匀正的分量。这个条件给出排除收敛到严格鞍点的直接方式，但它也过度简化了实际的噪声结构，并且不匹配许多随机优化情境。在过参数化或插值模型中，噪声在接近平稳处可能消失。在有限和问题中，随机梯度噪声可能位于低维的、数据依赖的子空间。在这些（常见的）场景中，UE 自然不满足。在本文中，我们为不需要 UE 的随机递归证明一个抽象的几乎必然规避定理。该定理用可验证的路径式条件替代 UE 型要求。在应用中，这些条件例如来自标准 i.i.d. 采样下的局部光滑性与有限矩假设，或来自无放回采样下的有限和结构。由于随机采样的映射一般不会共享一个不动点，确定性分析中著名的中心稳定流形论证不能直接应用。相反，我们使用一个路径依赖的变量替换，配合一个路径式 Lyapunov-Perron 证明策略。作为应用，我们获得随机镜像下降（包括 SGD）与随机重排的严格鞍点规避。对非光滑复合目标，我们证明近端型随机梯度方法的规避结果。将这些洞见与合适的迭代收敛保证结合，这允许建立收敛到原目标函数局部最小值的结论。

## 关键词

#鞍点规避 #随机优化 #Lyapunov-Perron #SGD #非凸优化
