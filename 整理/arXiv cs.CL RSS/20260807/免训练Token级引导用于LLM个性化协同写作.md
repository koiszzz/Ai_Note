---
published: 2026-08-07
title: "免训练 Token 级引导用于 LLM 个性化协同写作"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Training-Free Token-Level Steering for LLM Personalized Co-Writing.md"
source_note: "[[信息源/arXiv cs.CL RSS/Training-Free Token-Level Steering for LLM Personalized Co-Writing]]"
source_sha256: 04e6058532eeebb78ee1014f89819e0af923efcbaacc389559db703543ff9a8e
original_url: "https://arxiv.org/abs/2608.06069"
processed: 2026-08-07
language: zh-CN
---

# 免训练 Token 级引导用于 LLM 个性化协同写作

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Wenhao Mao, Chengbin Hou, Weixiao Wang, Jialiang Zhu, Min Liu, Yibin Hao, Hairong Lv
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06069)

## 摘要

- LLM 在个性化方面前景广阔，但常缺乏专门领域知识；微调等常规方案受高计算成本与快速数据更新困扰，检索增强生成则无法提供细粒度 token 级引导；此外聊天式界面仍占主导，而编码领域之外的生产性协同写作范式尚未被充分利用。
- 引入 SteerWrite：面向个性化协同写作的免训练框架，无需梯度更新即可将基座模型有效适配到专门领域，并针对小数据集定制设计。
- 实验表明 SteerWrite 跨多样数据集、指标与模型实现最先进性能，显著减少人工编辑工作量。

## 正文

虽然大语言模型（LLMs）在个性化方面展现出巨大前景，但它们常常缺乏专门的领域知识。微调等常规解决方案受高计算成本与快速数据更新的困扰，而检索增强生成无法提供细粒度的 token 级引导。此外，基于聊天的界面仍然占据主导，而编码领域之外的生产性协同写作范式尚未被充分利用。为此，研究引入 SteerWrite，一个面向个性化协同写作的免训练框架。该方法无需梯度更新即可有效地将基座模型适配到专门领域，并针对小数据集进行了专门设计。实验表明，SteerWrite 在多样化的数据集、指标与模型上实现了最先进的性能，显著减少了人工编辑工作量。

## 关键词

个性化、协同写作、token 级引导、免训练、LLM
