---
published: 2026-08-07
title: "GROM：无梯度快速一次性机器遗忘"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GROM- Gradient-Free Rapid One-Shot Machine Unlearning.md"
source_note: "[[信息源/arXiv cs.AI RSS/GROM- Gradient-Free Rapid One-Shot Machine Unlearning]]"
source_sha256: cdd378f3a84e21514a9f644a0e5bb4cbfd0df261fa76fdfe7db74dabd19adc38
original_url: "https://arxiv.org/abs/2608.05783"
processed: 2026-08-07
language: zh-CN
---

# GROM：无梯度快速一次性机器遗忘

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Pawe{\l} Batorski, Przemys{\l}aw Spurek, Paul Swoboda
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05783)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GROM- Gradient-Free Rapid One-Shot Machine Unlearning|查看原始文件]]

## 摘要

- 机器遗忘已成为安全地从大语言模型（LLM）移除特定敏感知识的关键能力；现有最优方法主要依赖迭代、训练时微调遗忘，但即使使用 LoRA 等参数高效降维技术，基于梯度的优化仍计算昂贵且缺乏显式解析表述，还可能只把目标知识隐藏而非移除——仅量化遗忘模型就能恢复大部分本应抹除的内容。
- 提出新颖一次性遗忘方法：放弃迭代优化，采用直接、精确的解析解——将遗忘过程表述为岭正则最小二乘优化问题，推导目标权重矩阵的闭式加性更新；该更新强制所选层抑制不想要内容，同时严格保留其在保留数据上的行为。
- 仅由无梯度前向传递计算，无反向传播、无迭代收敛，GROM 数秒内应用权重编辑，比传统微调快数个数量级。
- 大量评估显示 GROM 在 TOFU-5%、TOFU-10%、MUSE-Books、MUSE-News 与 WMDP 上取得最优遗忘-效用权衡，显著降低计算开销而不牺牲整体模型性能；因更新从权重中移除而非掩蔽目标内容，GROM 还经受住恢复梯度基线看似遗忘的大部分内容的低位量化攻击。

## 正文

机器遗忘已成为安全地从大语言模型（LLMs）移除特定、敏感知识的关键能力。当前最先进方法主要依赖迭代的、训练时的微调遗忘。然而，即使使用 LoRA 等参数高效降维技术，基于梯度的优化仍计算昂贵且缺乏显式解析表述。它还可能只把目标知识隐藏而非移除，以至于仅量化遗忘模型就能恢复大部分本应抹除的内容。为解决此问题，我们提出一种新颖的一次性遗忘方法，放弃迭代优化，转而采用直接、精确的解析解。我们将遗忘过程表述为岭正则最小二乘优化问题，推导目标权重矩阵的闭式加性更新。该更新强制所选层抑制不想要的内容，同时严格保留其在保留数据上的行为。仅由无梯度前向传递计算，无反向传播、无迭代收敛，GROM 在数秒内应用权重编辑，比传统微调快数个数量级。大量评估表明，GROM 在 TOFU-5%、TOFU-10%、MUSE-Books、MUSE-News 与 WMDP 上取得最优的遗忘-效用权衡，显著降低计算开销而不牺牲整体模型性能。由于该更新从权重中移除而非掩蔽目标内容，GROM 还经受住恢复梯度基线看似遗忘的大部分内容的低位量化攻击。代码公开于 https://github.com/Batorskq/GROM。

## 关键词

#机器遗忘 #LLM安全 #解析解 #闭式更新
