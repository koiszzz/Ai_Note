---
published: 2026-08-07
title: "ABC：无先验知识下满足本地差分隐私的数值数据收集"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ABC- Numerical Data Collection under Local Differential Privacy without Prior Knowledge.md"
source_note: "[[信息源/arXiv cs.AI RSS/ABC- Numerical Data Collection under Local Differential Privacy without Prior Knowledge]]"
source_sha256: 74545807d2208bbcccb8f1427d8d6fe01b9c506f181a168ad463c5eb965b4f43
original_url: "https://arxiv.org/abs/2608.05737"
processed: 2026-08-07
language: zh-CN
---

# ABC：无先验知识下满足本地差分隐私的数值数据收集

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Incheol Baek, Hyungbin Kim, Yon Dohn Chung
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05737)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ABC- Numerical Data Collection under Local Differential Privacy without Prior Knowledge|查看原始文件]]

## 摘要

- 本地差分隐私（LDP）为数值数据收集提供强隐私保证，但现有机制要求预定义数据域，实际中常未知，导致两难：域过窄则越界值被裁剪造成信息损失，域过宽则引入过多噪声降低数据质量。
- 提出自适应 LDP 框架：每个用户发送扰动数值数据与一个指示其原始值是否被当前域裁剪的私有化信号。
- 通过聚合这些信号，所提出的自适应裁剪区域界定（ABC）方法在无先验知识下迭代调整数据域以适配底层数据分布；理论分析表明估计数据域收敛到合适范围。
- 实证评估显示该框架在多种数据集与底层 LDP 机制上显著提升数值数据收集质量，估计范围在实践中成功收敛，且对超参数稳健。

## 正文

本地差分隐私（Local Differential Privacy，LDP）为收集数值数据提供了强隐私保证。然而一个根本性挑战是：现有 LDP 机制需要预定义的数据域，而该域在实践中往往未知。缺乏先验知识给数据收集者造成两难困境：若所选域过窄，越界值会被裁剪，导致信息损失；反之若域过宽，私有化过程中会加入过多噪声，降低收集数据的质量。这凸显了对能动态估计数据域的方法的需求。

在这项工作中，我们提出一个解决该问题的自适应 LDP 框架。在我们的方法中，每个用户发送两条信息：扰动后的数值数据，以及一个指示其原始值是否被当前域裁剪的私有化信号。通过聚合这些信号，我们提出的自适应裁剪区域界定（Adaptive Bounding of Clipping regions，ABC）方法在无先验知识的情况下迭代调整数据域以适配底层数据分布。我们的理论分析表明，估计的数据域收敛到合适的范围。

实证评估表明，我们的框架在多种数据集与底层 LDP 机制上显著提升了数值数据收集的质量。我们还展示估计范围在实践中成功收敛，并通过全面消融实验证明方法对超参数稳健。

## 关键词

#本地差分隐私 #数值数据收集 #自适应机制 #隐私保护
