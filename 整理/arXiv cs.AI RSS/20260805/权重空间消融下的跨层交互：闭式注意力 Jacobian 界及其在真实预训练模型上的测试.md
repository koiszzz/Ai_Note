---
published: 2026-08-05
title: "权重空间消融下的跨层交互：闭式注意力 Jacobian 界及其在真实预训练模型上的测试"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Cross-Layer Interaction under Weight-Space Ablation- A Closed-Form Attention Jacobian Bound and a Te.md"
source_note: "[[信息源/arXiv cs.AI RSS/Cross-Layer Interaction under Weight-Space Ablation- A Closed-Form Attention Jacobian Bound and a Te]]"
source_sha256: 9d61be1c1c437e992fd4275548a5b194e855d1cfe010ded47757f35a4909c449
original_url: "https://arxiv.org/abs/2608.03629"
processed: 2026-08-05
language: zh-CN
---

# 权重空间消融下的跨层交互：闭式注意力 Jacobian 界及其在真实预训练模型上的测试

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Abdallah Khemais
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03629)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Cross-Layer Interaction under Weight-Space Ablation- A Closed-Form Attention Jacobian Bound and a Te|查看原始文件]]

## 摘要

- 将配套论文的单块交互结果推广到跨层：消融跨越若干层的载体时，交互精确分解为每触及一层的同块项之和，外加一个分解未对其大小作出保证的跨层余项。
- 对两层情形，把该余项精确隔离为混合二阶导数的二重积分，并指出有界化所需的缺失要素：注意力子块的 Jacobian 界；文中给出该界的闭式推导，并在 Qwen2.5-1.5B-Instruct 的真实权重上无一违例地验证（尚未跨层串联），同时给出配套论文界中未展示的曲率常数。
- 在同一模型上，用原始激活修补方法搜索并发现一个非预设的间接宾语识别涌现回路，并测试其坍缩、解离与交互：五个测试实例中共享载体出现，坍缩与解离在多数（非全部）实例成立，五个中三个在配套定理覆盖的同块情形之外的层对上可测到非零交互。

## 正文

论文编号：arXiv:2608.03629v1（更新类型：new）。以下为摘要全文翻译。

配套论文研究激活修补与权重空间消融何时一致，其场景是条件计算通过残差流加性执行的理想化模型。对于该模型中两个载体架构相关的那一个组合——注意力头与其所在层的归一化-MLP 组合——它推导出精确的一阶交互公式：仅消融 MLP 时为零，同时消融注意力头时具有二阶有界性。该结果局限于单个残差块，且只在合成任务的小型 Transformer 上检验。本文把结果推广到两个极限之外。第一，消融跨越若干层的载体所产生的交互精确分解为同块项之和（每个触及层一项），外加一个分解未对其大小作出保证的跨层余项。第二，对两层情形，我们精确地把该余项隔离为混合二阶导数的二重积分，并指出有界化所需的缺失要素：注意力子块的 Jacobian 界。我们以闭式推导该界，并针对 Qwen2.5-1.5B-Instruct 的真实权重逐一验证、无一违例，尽管尚未跨层串联使用；我们还以闭式给出配套论文界中未展示的曲率常数。第三，在同一模型上，我们使用该任务的原始激活修补方法，搜索并找到了一个从未被设计进模型中的间接宾语识别涌现回路，并对其测试坍缩、解离与交互。结果是混合的：所有五个测试实例都出现共享载体；坍缩与解离在多数但非全部实例上成立；五个中的三个在配套定理所覆盖的同块情形之外的层对上可测到非零交互。

## 关键词

#机制可解释性 #权重消融 #激活修补 #涌现回路
