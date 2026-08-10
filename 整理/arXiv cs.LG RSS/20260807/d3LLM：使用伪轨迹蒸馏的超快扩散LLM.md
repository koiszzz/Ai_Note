---
published: 2026-08-07
title: "d3LLM：使用伪轨迹蒸馏的超快扩散 LLM"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/d3LLM- Ultra-Fast Diffusion LLM using Pseudo-Trajectory Distillation.md"
source_note: "[[信息源/arXiv cs.LG RSS/d3LLM- Ultra-Fast Diffusion LLM using Pseudo-Trajectory Distillation]]"
source_sha256: e3f60701cd188f84f61b785d31084bf347ff993cc9cdcf066011ba6a73286816
original_url: "https://arxiv.org/abs/2601.07568"
processed: 2026-08-07
language: zh-CN
---

# d3LLM：使用伪轨迹蒸馏的超快扩散 LLM

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yu-Yang Qian, Junda Su, Lanxiang Hu, Peiyuan Zhang, Zhijie Deng, Peng Zhao, Hao Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2601.07568)

## 摘要

- 扩散 LLM（dLLM）提供超越自回归（AR）LLM 的能力（并行解码、随机序生成），但面临精度-并行性权衡，现有方法只关注效率或精度单一方面。
- 提出 d3LLM（伪蒸馏扩散 LLM），平衡精度与并行性：训练时引入伪轨迹蒸馏教模型哪些 token 可在早期步骤自信解码；推理时用熵基多块解码与 KV 缓存刷新机制实现高并行且保持精度。
- 引入 AUP（精度下并行度）新指标，联合度量精度与并行性。
- 相对原生 LLaDA/Dream 提速最高 10 倍，相对 AR 模型 5 倍，精度损失小。

## 正文

扩散大语言模型（dLLM）提供超越自回归（AR）LLM 的能力，如并行解码与随机序生成。然而，实际实现这些收益并不平凡，因为 dLLM 天然面临精度-并行性权衡。尽管兴趣增长，现有方法通常只关注硬币的一面，要么针对效率要么针对精度。为解决该局限，研究提出 d3LLM（伪蒸馏扩散大语言模型），在精度与并行性间取得平衡：(i) 训练时引入伪轨迹蒸馏，教模型哪些 token 可以在早期步骤自信解码，从而提升并行性；(ii) 推理时采用熵基多块解码与 KV 缓存刷新机制，在保持精度的同时实现高并行度。为更好评估 dLLM，研究还引入 AUP（并行度下精度，Accuracy Under Parallelism），一个联合度量精度与并行性的新指标。实验表明 d3LLM 相对原生 LLaDA/Dream 提速最高 10 倍、相对 AR 模型 5 倍，且精度下降不大。代码见 https://github.com/hao-ai-lab/d3LLM。

## 关键词

扩散 LLM、蒸馏、并行解码、推理加速、非自回归
