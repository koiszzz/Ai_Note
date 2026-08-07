---
published: 20260806
title: "通过约束混合策略 GroupDRO 实现公平系统提示选择"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Equitable System-Prompt Selection via Constrained Mixed-Strategy GroupDRO.md"
source_note: "[[信息源/arXiv cs.AI RSS/Equitable System-Prompt Selection via Constrained Mixed-Strategy GroupDRO]]"
source_sha256: 33a1518863edf8c85c857a060ff4b33d8994138053ac2bc29b8c6f58fa3936b8
original_url: "https://arxiv.org/abs/2608.04339"
processed: 2026-08-06
language: zh-CN

---

# 通过约束混合策略 GroupDRO 实现公平系统提示选择

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mengyu Xu, Qiaoxin Yang, Zhihan Liu, Ruiyao Xu, Zachary Liu, Kezhen Chen, Chongyang Gao
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04339)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Equitable System-Prompt Selection via Constrained Mixed-Strategy GroupDRO|查看原始文件]]

## 摘要

- 大语言模型日益用于信息寻求，但语义等价、措辞不同的问题可能收到质量差异显著的答案；系统提示广泛用于引导响应行为，但通常为平均案例质量优化，因此某些问题措辞仍可能收到不完整或低质量答案。
- 本文表述一个用于系统提示选择的约束混合策略 GroupDRO 框架：不优化系统提示文本，而是为现有提示池中的系统提示分配权重，最小化跨评估指标和组的最坏情况信息质量损失，同时约束平均损失保持接近基于平均选择。
- 池生成和选择解耦使方法适用于任何系统提示池，可利用互补系统提示集成而非单一提示；跨五个 LLM 两个双语医疗和消费者金融基准，约束方法相对无缓解平均降低 Overall Mean 13.1%、Worst 25% Mean 13.2% 和 Worst 13.7%，同时保持整体质量接近平均选择。

## 正文

大语言模型日益用于信息寻求，然而语义等价、措辞不同的问题可能收到质量差异显著的答案。系统提示广泛用于引导响应行为，但通常为平均案例质量优化，因此某些问题措辞仍可能收到不完整或低质量答案。为解决此问题，我们表述一个用于系统提示选择的约束混合策略 GroupDRO 框架。该框架不优化系统提示文本，而是为现有提示池中的系统提示分配权重，最小化跨评估指标和组的最坏情况信息质量损失，同时约束平均损失保持接近基于平均选择。由于池生成和选择解耦，该方法适用于任何系统提示池，并可利用互补系统提示集成而非单一提示。跨五个 LLM 在两个双语医疗和消费者金融基准上，约束方法相对无缓解平均降低 Overall Mean 13.1%、Worst 25% Mean 13.2% 和 Worst 13.7%，同时保持整体质量接近平均选择。其多提示权重揭示跨指标-组对的互补性。代码和数据可在此获取：https://github.com/Rainxu09/equitable-system-prompt-selection。

## 关键词

#系统提示 #公平性 #GroupDRO #LLM #arXiv