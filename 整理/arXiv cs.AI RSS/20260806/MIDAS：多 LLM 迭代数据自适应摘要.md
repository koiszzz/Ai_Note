---
published: 20260806
title: "MIDAS：多 LLM 迭代数据自适应摘要"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MIDAS- Multi-LLM Iterative Data-Adaptive Summarization.md"
source_note: "[[信息源/arXiv cs.AI RSS/MIDAS- Multi-LLM Iterative Data-Adaptive Summarization]]"
source_sha256: 55c858a3cf8b503e54153af4e3f1698e65359f657dee089fe5320bcc7ef20cff
original_url: "https://arxiv.org/abs/2608.04307"
processed: 2026-08-06
language: zh-CN

---

# MIDAS：多 LLM 迭代数据自适应摘要

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Karen Lee, Dhanashree Balaram, Seojun Shon, Umair Rasheed
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04307)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MIDAS- Multi-LLM Iterative Data-Adaptive Summarization|查看原始文件]]

## 摘要

- 文本摘要看似简单实则困难：企业支持工单、法律文件、事件报告等的真实摘要要求严格遵守领域特定指南、输出格式和组织约定；制作可靠满足这些约束的提示劳动密集，需要显著人类专长和随需求演变的持续维护。
- 现有自动提示优化方法通过 LLM 批评驱动精炼减少此负担，但仍受限于无法适应摘要应用多样性的静态提示；本文提出多 LLM 迭代数据自适应摘要（MIDAS），一个扩展此范式的多 LLM 框架，带数据驱动模式学习和用例特定个性化，无需手动提示工程即可自动适应不同摘要需求。
- 应用于五种输出格式的企业客户工单摘要，MIDAS 相对 CriSPO 和 ZERA 等最先进批评驱动优化框架实现最强整体性能，ROUGE-1 改进最多 11.0%、ROUGE-2 最多 18.2%、ROUGE-L 最多 8.0%，并跨所有格式和输出类型一致改进 BERTScore F1。

## 正文

文本摘要看似简单实则困难。虽然浓缩信息似乎直接，真实世界的企业支持工单、法律文件、事件报告等摘要要求严格遵守领域特定指南、输出格式和组织约定。制作可靠满足这些约束的提示劳动密集，需要显著人类专长和随需求演变的持续维护。现有自动提示优化方法通过大语言模型（LLM）批评驱动精炼减少此负担，但仍受限于无法适应摘要应用多样性的静态提示。我们提出多 LLM 迭代数据自适应摘要（Multi-LLM Iterative Data-Adaptive Summarization，MIDAS），一个扩展此范式的多 LLM 框架，带数据驱动模式学习和用例特定个性化，无需手动提示工程即可自动适应不同摘要需求。应用于五种输出格式的企业客户工单摘要，MIDAS 相对 CriSPO 和 ZERA 等最先进批评驱动优化框架实现最强整体性能，ROUGE-1 改进最多 11.0%、ROUGE-2 最多 18.2%、ROUGE-L 最多 8.0%，同时跨所有格式和输出类型一致改进 BERTScore F1。我们还通过多 LLM 配置和金融领域摘要基准展示跨模型和跨领域泛化。

## 关键词

#文本摘要 #提示优化 #多LLM #企业文档 #arXiv