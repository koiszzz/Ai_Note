---
published: 20260806
title: "特权但有偏见：PI 条件教师如何破坏自蒸馏"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Privileged, but Biased- How PI-Conditioned Teachers Break Self-Distillation.md"
source_note: "[[信息源/arXiv cs.AI RSS/Privileged, but Biased- How PI-Conditioned Teachers Break Self-Distillation]]"
source_sha256: 28042ad8c5bc0c18e4658a36418e0969d4654b55be9c628b0f0cc05626ff8389
original_url: "https://arxiv.org/abs/2608.04794"
processed: 2026-08-06
language: zh-CN

---

# 特权但有偏见：PI 条件教师如何破坏自蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sarthak Harne, Chinmay Karkar, Yash Pandya, Ahmed Awadallah, Akshay Nambi
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04794)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Privileged, but Biased- How PI-Conditioned Teachers Break Self-Distillation|查看原始文件]]

## 摘要

- 自蒸馏（SD）已成为带可验证奖励强化学习的计算高效替代方案：条件于答案特权信息（PI）（如参考解）的自教师向永不看到它的学生提供密集逐 token 监督；但报告增益几乎完全来自狭窄、低难度设置。
- 本文复现 SDPO 在简单设置中的报告增益，然后将相同设置应用于困难任务，发现不成立：跨问答、数学、编码和多轮智能体工具使用，跨推理模式、模型大小和 PI 形式，SDPO 和 OPSD 配方下逐 token 损失稳步下降而验证准确率不改进且通常退化。
- 通过单一因果链从损失到其产生的模型解释此失败：链始于 PI 偏见（看到特定参考解后教师逐 token 目标被拉向该轨迹而非一般正确性），训练学生匹配此目标使目标几乎对回滚是否正确失明，损失主要落在停用词、标点、不确定性标记等低信息 token 上；作为独立目标，SD 优化与任务成功解耦的信号。

## 正文

自蒸馏（SD）已成为带可验证奖励强化学习的计算高效替代方案：条件于答案特权信息（PI）（如参考解）的自教师向永不看到它的学生提供密集逐 token 监督。然而，报告增益几乎完全来自狭窄、低难度设置，留下基本问题：作为独立目标（无奖励项），SD 是否教会任何东西？我们复现 SDPO 在简单设置中的报告增益，然后将相同设置应用于困难任务，发现不成立。跨问答、数学、编码和多轮智能体工具使用，跨推理模式、模型大小和 PI 形式，SDPO 和 OPSD 配方下逐 token 损失稳步下降，而验证准确率不改进且通常退化。我们通过单一因果链从损失到其产生的模型解释此失败。链始于 PI 偏见：看到特定参考解后，教师的逐 token 目标被拉向该轨迹而非一般正确性，我们用 PI 偏见分数量化此效应。训练学生到处匹配此目标，学生的目标变得几乎对回滚是否正确失明，且其分配的损失主要落在停用词、标点、不确定性标记等低信息 token 上，而非决定答案的 token；正确回滚内探索性 token 产生最高分歧，因此它惩罚推理所需的犹豫。结果是更扁平、更不果断的学生，推理能力不更好：作为独立目标，SD 优化与任务成功解耦的信号。

## 关键词

#自蒸馏 #特权信息 #偏见 #推理训练 #arXiv