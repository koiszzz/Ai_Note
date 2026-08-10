---
published: 2026-08-07
title: "RICE-PO：将检索交互转为推理智能体的信用信号"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/RICE-PO- Turning Retrieval Interactions into Credit Signals for Reasoning Agents.md"
source_note: "[[信息源/arXiv cs.CL RSS/RICE-PO- Turning Retrieval Interactions into Credit Signals for Reasoning Agents]]"
source_sha256: 194b26d031d3c03600a89e0952d643692148f4957a1c25fad79a98b8734cd395
original_url: "https://arxiv.org/abs/2605.26352"
processed: 2026-08-07
language: zh-CN
---

# RICE-PO：将检索交互转为推理智能体的信用信号

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Mingchen Li, Hansi Zeng, Zhuo Qian, Jiatan Huang, Sunjae Kwon, Hamed Zamani, Hong Yu
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2605.26352)

## 摘要

- 检索日益从一次性匹配转向交互推理：语言智能体迭代检查证据、重构查询并再次搜索；训练此类智能体提出信用分配挑战：查询或摘要等可执行动作可直接被检索器评估，而潜推理步不可直接观测、仅影响未来可执行动作。
- 该不对称使结局级奖励分配不可靠：相同最终奖励可能为实际未塑造检索成功的推理步记功。
- 提出 RICE-PO：免评论家策略优化框架，将检索交互转为局部学习信号；选择高不确定性可执行动作作为锚点，用检索度量评估局部反事实分支，仅当推理到动作影响强且未来残差效应稳定时将信用传播到潜推理步。
- BRIGHT 与 BEIR 上 RICE-PO 在相同检索器设定一致优于提示基智能体与组基 RL 基线；智能体-环境交互结构本身可为训练推理基检索智能体提供有用监督。

## 正文

检索正日益从一次性匹配转向交互推理，其中语言智能体迭代地检查证据、重构查询并再次搜索。训练此类智能体提出了一个信用分配（credit-assignment）挑战：查询或摘要等可执行动作可以直接由检索器评估，而潜在的推理步骤不可直接观察，只影响未来的可执行动作。这种不对称使结局级奖励分配不可靠，因为相同的最终奖励可能为实际上没有塑造检索成功的推理步骤记功。研究提出 RICE-PO，一个免评论家的策略优化框架：将检索交互转化为局部化的学习信号。RICE-PO 选择高不确定性的可执行动作作为锚点，使用检索指标评估局部的反事实分支，并仅当推理到动作的影响强且未来的残差效应稳定时，才将信用传播到潜在的推理步骤。在 BRIGHT 与 BEIR 上，RICE-PO 在相同检索器设定下一致优于基于提示的智能体与基于组的 RL 基线。这些结果表明，智能体-环境交互的结构本身可以为训练基于推理的检索智能体提供有用的监督。

## 关键词

检索、推理智能体、信用分配、策略优化、反事实
