---
published: 2026-08-07
title: "UniVVT：高保真视频虚拟试穿的统一端到端框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/UniVVT- A Unified End-to-End Framework for High-Fidelity Video Virtual Try-on.md"
source_note: "[[信息源/arXiv cs.AI RSS/UniVVT- A Unified End-to-End Framework for High-Fidelity Video Virtual Try-on]]"
source_sha256: 751123dc5dea75911acf6a9500c28032309d249bf6e922c5e773c4d02c077153
original_url: "https://arxiv.org/abs/2608.05745"
processed: 2026-08-07
language: zh-CN
---

# UniVVT：高保真视频虚拟试穿的统一端到端框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yushe Cao, Shikun Feng, Fei Shen, Haikuo Peng, Jianqiang Xia, Yiheng Zhu, Dianxi Shi, Chun Yu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05745)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/UniVVT- A Unified End-to-End Framework for High-Fidelity Video Virtual Try-on|查看原始文件]]

## 摘要

- 视频虚拟试穿（VVT）合成一个人穿着目标服装的视频，同时保留身份、动作与场景动态；主流方法将 VVT 作为掩码条件视频修补，依赖人体解析、姿态估计与服装扭曲的独立模块——该多阶段设计复杂化部署，更关键地允许显式几何先验中的错误不可逆传播进生成视频。
- 呈现 UniVVT：统一端到端框架，将 VVT 重构为语义条件视频生成，消除推理时掩码、姿态与扭曲模块——核心是基于多模态大语言模型的场景-任务感知器，联合将源视频、目标服装与任务指令编码为紧凑、任务感知潜在 token，隐式捕获转移什么、在何处与如何转移；轻量语义桥随后将这些 token 与扩散视频生成器的条件空间对齐，实现连贯服装转移。
- 为稳健耦合异构组件，设计三阶段渐进训练策略：语义对齐、联合任务适配与灵活分辨率精炼。
- 大量实验表明 UniVVT 在多个基准实现最先进性能，验证隐式语义引导作为脆弱几何预处理简单有效替代用于端到端虚拟试穿。

## 正文

视频虚拟试穿（Video Virtual Try-On，VVT）合成一个人穿着目标服装的视频，同时保留身份、动作与场景动态。主流方法将 VVT 作为掩码条件视频修补（mask-conditioned video inpainting），依赖人体解析、姿态估计与服装扭曲的独立模块。这种多阶段设计使部署复杂化，且更关键地，允许显式几何先验中的错误不可逆地传播到生成的视频中。我们呈现 UniVVT，一个统一端到端框架，将 VVT 重构为语义条件视频生成（semantically conditioned video generation），在推理时消除掩码、姿态与扭曲模块。其核心是一个构建于多模态大语言模型之上的场景-任务感知器（scene-task perceiver），联合将源视频、目标服装与任务指令编码成紧凑、任务感知的潜在 token，隐式捕获要转移什么以及在哪里与如何转移。一个轻量语义桥（semantic bridge）随后将这些 token 与基于扩散的视频生成器的条件空间对齐，实现连贯的服装转移。为稳健耦合异构组件，我们设计一个三阶段渐进训练策略，包括语义对齐、联合任务适配与灵活分辨率精炼。大量实验表明，UniVVT 在多个基准上实现最先进性能，验证隐式语义引导是脆弱几何预处理在端到端虚拟试穿上简单而有效的替代。

## 关键词

#视频虚拟试穿 #端到端 #MLLM #语义引导
