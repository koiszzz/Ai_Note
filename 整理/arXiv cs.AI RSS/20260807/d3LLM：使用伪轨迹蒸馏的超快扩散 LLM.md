---
published: 2026-08-07
title: "d3LLM：使用伪轨迹蒸馏的超快扩散 LLM"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/d3LLM- Ultra-Fast Diffusion LLM using Pseudo-Trajectory Distillation.md"
source_note: "[[信息源/arXiv cs.AI RSS/d3LLM- Ultra-Fast Diffusion LLM using Pseudo-Trajectory Distillation]]"
source_sha256: dcdfb673e22610c88a2afe0327be312c70791cf2ca8633ed1c7df8993fc0c016
original_url: "https://arxiv.org/abs/2601.07568"
processed: 2026-08-07
language: zh-CN
---

# d3LLM：使用伪轨迹蒸馏的超快扩散 LLM

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yu-Yang Qian, Junda Su, Lanxiang Hu, Peiyuan Zhang, Zhijie Deng, Peng Zhao, Hao Zhang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.07568)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/d3LLM- Ultra-Fast Diffusion LLM using Pseudo-Trajectory Distillation|查看原始文件]]

## 摘要

- 扩散大语言模型（dLLM）提供超越自回归（AR）LLM 的能力，如并行解码与随机顺序生成；但实际实现这些好处不简单，dLLM 固有面临精度-并行度权衡。
- 现有方法通常只关注硬币一面，要么瞄准效率要么瞄准精度；提出 d3LLM（伪蒸馏扩散大语言模型），在精度与并行度之间取得平衡。
- 训练阶段引入伪轨迹蒸馏，教模型哪些 token 可在早期步骤自信解码，从而提升并行度；推理阶段采用基于熵的多块解码与 KV 缓存刷新机制，在高并行度下保持精度。
- 引入 AUP（并行度下精度），同时衡量精度与并行度的新指标；实验表明 d3LLM 相对 vanilla LLaDA/Dream 最高 10 倍加速，相对 AR 模型 5 倍加速且精度损失不大。

## 正文

扩散大语言模型（dLLMs）提供超越自回归（AR）LLMs 的能力，例如并行解码与随机顺序生成。然而，在实践中实现这些好处并不简单，因为 dLLMs 固有地面临精度-并行度权衡。尽管兴趣日益增长，现有方法通常只关注硬币的一面，要么瞄准效率，要么瞄准精度。为解决这一局限，我们提出 d3LLM（Pseudo-Distilled Diffusion Large Language Model，伪蒸馏扩散大语言模型），在精度与并行度之间取得平衡：（i）训练期间，我们引入伪轨迹蒸馏，教模型哪些 token 可以在早期步骤自信地解码，从而提升并行度；（ii）推理期间，我们采用基于熵的多块解码与 KV 缓存刷新机制，在高并行度下保持精度。为更好评估 dLLM，我们还引入 AUP（Accuracy Under Parallelism，并行度下精度），一个同时衡量精度与并行度的新指标。实验表明，我们的 d3LLM 相对 vanilla LLaDA/Dream 实现最高 10 倍加速，相对 AR 模型 5 倍加速，且精度下降不大。代码见 https://github.com/hao-ai-lab/d3LLM。

## 关键词

#扩散LLM #并行解码 #蒸馏 #加速
