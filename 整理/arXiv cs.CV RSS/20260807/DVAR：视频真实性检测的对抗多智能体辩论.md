---
published: 2026-08-07
title: "DVAR：视频真实性检测的对抗多智能体辩论"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DVAR- Adversarial Multi-Agent Debate for Video Authenticity Detection.md"
source_note: "[[信息源/arXiv cs.CV RSS/DVAR- Adversarial Multi-Agent Debate for Video Authenticity Detection]]"
source_sha256: 8d6e9a9c3d8b966e2a51acde9cbe29fd9b3354326fc3a1ec965b163b20e81efd
original_url: "https://arxiv.org/abs/2604.16987"
processed: 2026-08-07
language: zh-CN
---

# DVAR：视频真实性检测的对抗多智能体辩论

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Hongyuan Qi, Feifei Shao, Ming Li, Hehe Fan, Jun Xiao
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2604.16987)

## 摘要

- 视频生成技术的快速演进对媒体取证构成重大挑战，常规检测方法常无法泛化到训练分布之外。
- 提出 DVAR（基于辩论的视频真实性推理）：免训练框架，将视频检测重构为结构化多智能体取证推理过程。
- 超越模式匹配范式，DVAR 编排生成假说智能体与自然机制智能体之间的竞争；经迭代轮次的交叉质询，这些智能体针对异常证据捍卫各自解释，驱动逻辑收敛，真理从严格压力测试中涌现。
- 用奥卡姆剃刀经最小描述长度（MDL）框架裁决冲突主张：定义解释成本量化每条推理路径的"逻辑负担"；集成 GenVideoKB 动态知识库，提供生成边界与失败模式的高层推理启发；实验显示 DVAR 与监督 SOTA 竞争，对未见生成架构展现优越泛化；将检测转为透明辩论，提供显式可解释推理轨迹。

## 正文

视频生成技术的快速演进对媒体取证构成重大挑战，因为常规检测方法常常无法泛化到训练分布之外。为解决该问题，研究提出 DVAR（基于辩论的视频真实性推理，Debate-based Video Authenticity Reasoning），一个免训练框架：将视频检测重构为结构化的多智能体取证推理过程。超越模式匹配的范式，DVAR 编排一个生成假说智能体（Generative Hypothesis Agent）与一个自然机制智能体（Natural Mechanism Agent）之间的竞争。经迭代轮次的交叉质询，这些智能体针对异常证据捍卫各自的解释，驱动逻辑收敛——真理从严格压力测试中涌现。为裁决这些冲突主张，研究经最小描述长度（Minimum Description Length, MDL）框架应用奥卡姆剃刀：定义解释成本（Explanatory Cost）量化每条推理路径的"逻辑负担"。此外，研究集成 GenVideoKB，一个动态知识库，提供生成边界与失败模式的高层推理启发。大量实验表明，DVAR 取得与监督最先进方法竞争的性能，同时对未见生成架构展现优越泛化。通过将检测转变为透明辩论，DVAR 为稳健的视频真实性评估提供显式、可解释的推理轨迹。

## 关键词

视频取证、深度伪造检测、多智能体辩论、MDL、推理
