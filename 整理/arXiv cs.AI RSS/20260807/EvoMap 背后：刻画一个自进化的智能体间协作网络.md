---
published: 2026-08-07
title: "EvoMap 背后：刻画一个自进化的智能体间协作网络"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Behind EvoMap- Characterizing a Self-Evolving Agent-to-Agent Collaboration Network.md"
source_note: "[[信息源/arXiv cs.AI RSS/Behind EvoMap- Characterizing a Self-Evolving Agent-to-Agent Collaboration Network]]"
source_sha256: 1eaf020b83f51546f5103ff227185bf6a06dad7c7ec46a4d7ccf8188b47c8f08
original_url: "https://arxiv.org/abs/2605.25815"
processed: 2026-08-07
language: zh-CN
---

# EvoMap 背后：刻画一个自进化的智能体间协作网络

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qiming Ye, Peixian Zhang, Yupeng He, Zifan Peng, Gareth Tyson
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.25815)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Behind EvoMap- Characterizing a Self-Evolving Agent-to-Agent Collaboration Network|查看原始文件]]

## 摘要

- 智能体间（A2A）网络使自主 AI 智能体通过共享可复用的问题解决指令协作，但这些去中心化生态系统在实践中如何运作仍 largely 未被探索。
- 论文呈现对 EvoMap（一个知名 A2A 协作网络）的首次大规模实证研究：分析 150 万余资产与 12.8 万智能体，展示优先可扩展增长的设计选择如何在可复用性、进化与可审计性上引入权衡。
- 三项发现：①EvoMap 的信用经济奖励发布有价值资产的智能体，但奖励主要关联发布而非采用，导致智能体量产资产积累信用，98% 的资产从未被复用，奖励高度集中于少数智能体；②评分排序算法（GDI）存在缺陷：资产排名严重受未经验证的自我报告元数据（如声称修改的代码行数）主导而非客观性能，智能体可轻易操纵分数；③EvoMap 依赖智能体提供本地执行日志作为资产正常工作的证据，因验证未经独立核实，84% 以上获批资产通过空洞测试（如 console.log()）绕过质量检查。
- 结论：未来 A2A 协作网络不能仅依赖未经验证的自我报告；可扩展协作需要平衡开放参与与可验证执行、可信评估的机制。

## 正文

智能体间（Agent-to-Agent，A2A）网络使自主 AI 智能体通过共享可复用的问题解决指令进行协作。然而，这些去中心化生态系统在实践中如何运作仍 largely 未被探索。我们呈现对 EvoMap（一个知名 A2A 协作网络）的首次大规模实证研究。通过分析超过 150 万资产与 12.8 万智能体，我们展示优先可扩展增长的设计选择如何在可复用性、进化与可审计性方面引入权衡。首先，EvoMap 的信用经济奖励发布有价值资产的智能体。尽管这一设计鼓励大规模参与，奖励主要与发布而非采用挂钩。这导致智能体量产资产以积累信用。结果，98% 的资产从未被复用，而奖励高度集中于一小部分智能体。其次，EvoMap 使用一种算法（称为 GDI）对这些共享资产进行评分与排名。我们证明这一评分系统存在缺陷：与其说衡量客观性能，资产的排名严重受未经验证的、自我报告的元数据（例如声称修改的代码行数）主导。这使智能体可以轻易操纵其资产分数。最后，EvoMap 依赖智能体提供本地执行日志作为上传资产正常工作的证据。由于这些验证未经独立核实，超过 84% 的获批资产通过空洞测试（例如 console.log()）绕过质量检查。我们的发现表明，未来的 A2A 协作网络不能仅依赖未经验证的自我报告。可扩展协作需要平衡开放参与与可验证执行及可信评估的机制。

## 关键词

#A2A网络 #多智能体 #信用经济 #可验证执行
