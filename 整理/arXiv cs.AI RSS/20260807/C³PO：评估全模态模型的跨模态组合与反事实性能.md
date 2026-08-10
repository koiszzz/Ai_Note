---
published: 2026-08-07
title: "C³PO：评估全模态模型的跨模态组合与反事实性能"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/C$^3$PO- Evaluating Cross-Modal Composition and Counterfactual Performance in Omnimodal Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/C$^3$PO- Evaluating Cross-Modal Composition and Counterfactual Performance in Omnimodal Models]]"
source_sha256: c00ced5c9f4169b07863f015ee8ecd6ce382a0213089773be49131b01850fb42
original_url: "https://arxiv.org/abs/2608.05381"
processed: 2026-08-07
language: zh-CN
---

# C³PO：评估全模态模型的跨模态组合与反事实性能

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Swapnanil Mukherjee, Agyeya Negi, Tanuja Ganu, Ponnurangam Kumaraguru
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05381)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/C$^3$PO- Evaluating Cross-Modal Composition and Counterfactual Performance in Omnimodal Models|查看原始文件]]

## 摘要

- 当前多模态大语言模型（MLLM）能处理多种感官输入，但其推理仍严重偏向主导模态，导致跨模态推理脆弱。
- 引入 C³PO：3,404 个样本的基准，覆盖视频、音频、图像与文本，评估两种能力：信息组合（融合分散证据）与反事实冲突（解决蓄意矛盾）；其配对 IC/CC 结构与四层设计可针对性诊断跨模态推理何时为何失败。
- 通过 25 个逻辑接地模板的全自动流水线构建，C³PO 揭示人类准确率 88.64%，最佳模型（Gemini-3.1-Pro）仅 73.17%，开源模型在冲突下崩溃。
- 通过注意力探针发现 86-95% 的失败源于模态主导：模型承诺单一模态而忽略矛盾证据，将 87-95% 注意力集中于文本；中层注意力熵预测正确性——持续探索成功、过早坍缩失败；同等复杂模板间 56 个点的准确率差距显示性能取决于模态在冲突解决中的结构角色而非组合。多模态感知并不保证稳健推理，架构必须支持持续跨模态注意力以避免过早坍缩。

## 正文

当前多模态大语言模型（MLLMs）可以处理多种感官输入，但其推理仍严重偏向主导模态，导致脆弱的跨模态推理。我们引入 C³PO，一个包含 3,404 个样本、覆盖视频、音频、图像与文本的基准，评估两种能力：信息组合（融合分散证据）与反事实冲突（解决蓄意矛盾）。C³PO 的配对 IC/CC 结构与四层设计能够对跨模态推理何时及为何失败进行针对性诊断。通过使用 25 个逻辑接地模板的全自动流水线构建，C³PO 揭示人类达到 88.64% 准确率，而最佳模型（Gemini-3.1-Pro）仅达 73.17%，开源模型在冲突下崩溃。通过注意力探针，我们发现 86-95% 的失败源于模态主导：模型承诺于单一模态而忽略矛盾证据，将 87-95% 的注意力集中于文本。中层注意力熵预测正确性——持续探索成功，过早坍缩失败。同等复杂模板间 56 个点的准确率差距揭示，性能取决于模态在冲突解决中的结构角色，而非组合本身。这些发现表明，多模态感知并不保证稳健推理；架构必须实现持续跨模态注意力以避免过早坍缩。

## 关键词

#多模态LLM #跨模态推理 #基准测试 #反事实
