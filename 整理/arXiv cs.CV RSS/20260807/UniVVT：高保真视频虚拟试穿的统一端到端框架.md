---
published: 2026-08-07
title: "UniVVT：高保真视频虚拟试穿的统一端到端框架"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/UniVVT- A Unified End-to-End Framework for High-Fidelity Video Virtual Try-on.md"
source_note: "[[信息源/arXiv cs.CV RSS/UniVVT- A Unified End-to-End Framework for High-Fidelity Video Virtual Try-on]]"
source_sha256: bb572dafbcccbf19de9729861b63362760d5feda59214ceba96fb1b8697b1e8c
original_url: "https://arxiv.org/abs/2608.05745"
processed: 2026-08-07
language: zh-CN
---

# UniVVT：高保真视频虚拟试穿的统一端到端框架

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yushe Cao, Shikun Feng, Fei Shen, Haikuo Peng, Jianqiang Xia, Yiheng Zhu, Dianxi Shi, Chun Yu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05745)

## 摘要

- 视频虚拟试穿（VVT）合成人穿目标服装的视频，同时保留身份、运动与场景动力学；主导方法将 VVT 视为掩码条件视频修复，依赖人体解析、姿态估计与服装变形等独立模块。
- 该多阶段设计使部署复杂，且更关键地允许显式几何先验中的错误不可逆传播进生成视频。
- 呈现 UniVVT：统一端到端框架，将 VVT 重构为语义条件视频生成，推理时消除掩码、姿态与变形模块；核心是构建于多模态大语言模型的场景-任务感知器：将源视频、目标服装与任务指令联合编码为紧凑任务感知潜 token，隐式捕捉转移什么、在何处与如何转移。
- 轻量语义桥将这些 token 与基于扩散的视频生成器条件空间对齐，实现连贯服装转移；三阶段渐进训练策略（语义对齐、联合任务适配、灵活分辨率精化）稳健耦合异构组件；大量实验显示 UniVVT 在多个基准取得 SOTA，验证隐式语义引导作为端到端虚拟试穿中脆弱几何预处理的简单有效替代。

## 正文

视频虚拟试穿（Video Virtual Try-On, VVT）合成一个人穿着目标服装的视频，同时保留身份、运动与场景动力学。主导方法将 VVT 视为掩码条件的视频修复，并依赖人体解析、姿态估计与服装变形等独立模块。这种多阶段设计使部署复杂化，而且更关键的是，允许显式几何先验中的错误不可逆地传播到生成的视频中。研究呈现 UniVVT，一个统一端到端框架：将 VVT 重构为语义条件化的视频生成，在推理时消除掩码、姿态与变形模块。其核心是一个构建于多模态大语言模型之上的场景-任务感知器（scene-task perceiver）：将源视频、目标服装与任务指令联合编码为紧凑、任务感知的潜 token，隐式捕捉要转移什么、在何处转移以及如何转移。一个轻量语义桥随后将这些 token 与基于扩散的视频生成器的条件空间对齐，实现连贯的服装转移。为稳健地耦合异构组件，研究设计一个三阶段渐进训练策略：语义对齐、联合任务适配与灵活分辨率精化。大量实验表明，UniVVT 在多个基准上取得最先进性能，验证隐式语义引导作为端到端虚拟试穿中脆弱几何预处理的简单有效替代。

## 关键词

视频虚拟试穿、端到端、MLLM、语义条件、扩散
