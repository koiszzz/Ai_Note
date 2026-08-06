---
published: 2026-08-05
title: "AutoSND：从执行证据到自动网络拆解启发式发现的结构策略"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AutoSND- From Execution Evidence to Structural Policies for Automated Network Dismantling Heuristic .md"
source_note: "[[信息源/arXiv cs.AI RSS/AutoSND- From Execution Evidence to Structural Policies for Automated Network Dismantling Heuristic ]]"
source_sha256: 799e870b74e3f091d136df0c7ecf784cf713c67c37e1a5a9b536fcfa96bd30f1
original_url: "https://arxiv.org/abs/2608.03653"
processed: 2026-08-05
language: zh-CN
---

# AutoSND：从执行证据到自动网络拆解启发式发现的结构策略

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03653)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AutoSND- From Execution Evidence to Structural Policies for Automated Network Dismantling Heuristic |查看原始文件]]

## 摘要

- 网络拆解是分析复杂系统稳健性和脆弱性的基础问题；实际启发式方法需要在效果与计算效率之间平衡，而且通常由研究人员手工设计。
- 现有基于大语言模型的自动启发式设计方法能够生成并筛选候选方案，但难以把候选质量或执行期间出现的失败状态进一步转化为结构层面的指导。
- 论文提出 AutoSND，一个用于完整网络拆解程序的三阶段树搜索框架。
- 第一阶段从简单启发式方法出发进行广泛探索，并归档执行证据；第二阶段把候选记录编译为涉及局部信号、邻域访问和状态更新范围的结构策略；第三阶段在这些策略条件下继续树搜索。
- 框架得到质量优先和速度优先的候选方案 AutoSND-Q/S。在 12 个真实网络和 3 个大型真实网络上的实验显示，AutoSND 具有更好的搜索性能和稳定性，并能发现更具竞争力、结构更可解释的网络拆解程序。
- 最终候选方案以剩余度为骨架，使用有界局部信号调整节点顺序，并限制状态更新范围。

## 正文

网络拆解对于分析复杂系统的稳健性和脆弱性至关重要。然而，实际使用的启发式方法必须兼顾有效性与计算效率，通常还需要由研究人员手工设计。现有基于大语言模型的自动启发式设计方法可以生成候选方案并进行筛选，但难以把候选方案的质量或执行过程中的失败状态，进一步转化为供后续生成使用的结构层面指导。

为此，本文提出 AutoSND，一个用于完整网络拆解程序的三阶段树搜索框架。第一阶段从简单启发式方法出发进行广泛探索，并保存执行证据。第二阶段把候选记录编译成结构策略，内容涉及局部信号、邻域访问和状态更新范围。第三阶段以这些策略为条件继续进行树搜索，最终获得质量优先和速度优先的候选方案，分别称为 AutoSND-Q 和 AutoSND-S。

在 12 个真实世界网络和 3 个大型真实世界网络上的实验表明，AutoSND 取得了更好的搜索性能和稳定性，并发现了更具竞争力、结构更易解释的网络拆解程序。最终候选方案形成了一种可解释结构：以剩余度作为骨架，通过有界的局部信号调整节点顺序，并限制状态更新范围。相关代码已公开于 https://github.com/MirrorNew/AutoSND。

## 关键词

#网络拆解 #启发式搜索 #大语言模型 #树搜索 #复杂网络 #自动程序发现
