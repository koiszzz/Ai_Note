---
published: 2026-08-05
title: "Beckmann 输运模型：从自主流到单步映射"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Beckmann Transport Models- From Autonomous Flows to One-Step Maps.md"
source_note: "[[信息源/arXiv cs.LG RSS/Beckmann Transport Models- From Autonomous Flows to One-Step Maps]]"
source_sha256: e9dac4f2fcb5364192684ab2f7f17cdd6d9101a252b74b9c61be25be3a95e23b
original_url: "https://arxiv.org/abs/2608.01692"
processed: 2026-08-05
language: zh-CN
---

# Beckmann 输运模型：从自主流到单步映射

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Lee Cheuk-Kit、Florentin Coeurdoux、Peter Potaptchik 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01692)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Beckmann Transport Models- From Autonomous Flows to One-Step Maps|查看原始文件]]

## 摘要

- 提出流匹配的实例化：依赖时间无关速度场（自主流）精确映射两个分布，只要目标是奇异的（支撑于低维数据流形）；还表明与该流相关的单步生成映射是简单守恒方程的唯一解，可直接从样本学习映射。
- 这些自主流与映射给 Beckmann 输运问题的通量约束动力学意义；构造提供统一框架，恢复例如闭式 Poisson 流生成模型与二次流匹配回归损失的平衡匹配。
- 说明理论如何校正现有方法的不一致，并演示自主流与单步映射在 ImageNet 256×256 上的有效性。

## 正文

论文编号：arXiv:2608.01692v2（更新类型：replace）。以下为摘要全文翻译。

我们提出流匹配的一个实例化：依赖一个时间无关的速度场（*自主流*）来精确映射两个分布，只要目标是奇异的，即支撑在一个低维数据流形上。我们还表明，与该流相关的单步生成映射是一个简单守恒方程的唯一解，可以直接从样本学习该映射。这些自主流与映射给 Beckmann 输运问题的通量约束一个动力学意义。它们的构造提供一个统一框架：例如恢复闭式的 Poisson 流生成模型，以及带二次流匹配回归损失的平衡匹配。我们说明该理论如何校正现有方法中的不一致，并演示自主流与单步映射在 ImageNet 256×256 上的有效性。

## 关键词

#流匹配 #最优输运 #生成模型 #单步映射
