---
published: 20260806
title: "CSGen：通过层级多模态扩散实现多域曲线结构生成模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CSGen- A Multi-Domain Curvilinear Structure Generation Model via Hierarchical Multimodal Diffusion.md"
source_note: "[[信息源/arXiv cs.AI RSS/CSGen- A Multi-Domain Curvilinear Structure Generation Model via Hierarchical Multimodal Diffusion]]"
source_sha256: d1e17a8b92cd803d53bc8f27df1808949a242cfde1a6aa4aa38f3fda40374963
original_url: "https://arxiv.org/abs/2608.04655"
processed: 2026-08-06
language: zh-CN

---

# CSGen：通过层级多模态扩散实现多域曲线结构生成模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhe Shan, Ziming Yang, Lei Zhou, Wenwen Zhang, Cong Lin, Xia Xie
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04655)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CSGen- A Multi-Domain Curvilinear Structure Generation Model via Hierarchical Multimodal Diffusion|查看原始文件]]

## 摘要

- 曲线结构分析是多媒体中重要且基础的任务，但具有精确曲线结构对象的图像可控生成仍是开放挑战。
- 本文提出 CSGen，一个层级多模态扩散模型，合成与多个控制条件精确对齐的高保真图像：构建多域多模态数据集（来自 5 个域和 7 种标注类型的超 2.4 万样本）；提出新颖层级渐进控制策略，通过分阶段信号注入将拓扑线索与视觉上下文解耦；设计稀疏感知损失重加权机制应对曲线结构的极端稀疏性。
- 广泛实验表明 CSGen 生成结构准确性和视觉写实性优越的图像，显著改进下游分割性能，同时保持跨多样提示的鲁棒性。

## 正文

曲线结构分析是多媒体中重要且基础的任务。然而，具有精确曲线结构对象的图像可控生成仍是开放挑战。为解决此问题，我们提出 CSGen，一个层级多模态扩散模型，合成与多个控制条件精确对齐的高保真图像。CSGen 建立在三项关键创新之上：1）我们构建多域多模态数据集，包括来自 5 个域和 7 种不同标注类型的超 2.4 万样本，训练统一生成模型。2）我们提出新颖的层级渐进控制策略，通过分阶段信号注入将拓扑线索与视觉上下文解耦，减轻语义漂移同时确保稀疏结构的拓扑完整性。3）我们设计稀疏感知损失重加权机制，应对曲线结构的极端稀疏性，在优化期间显著增强对细薄脆弱结构的关注。广泛实验表明，CSGen 生成结构准确性和视觉写实性优越的图像，显著改进下游分割性能，同时保持跨多样提示的鲁棒性。我们的结果确认 CSGen 作为多样多媒体应用中复杂曲线结构分析的可扩展、数据中心范式。代码和数据集可在此获取：https://github.com/ShanZard/CSGen。

## 关键词

#曲线结构 #扩散模型 #多模态生成 #图像合成 #arXiv