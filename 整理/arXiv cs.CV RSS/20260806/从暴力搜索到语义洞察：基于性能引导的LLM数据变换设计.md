---
published: 2026-08-06
title: 从暴力搜索到语义洞察：基于性能引导的LLM数据变换设计
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/From Brute Force to Semantic Insight- Performance-Guided Data Transformation Design with LLMs.md
source_note: "[[信息源/arXiv cs.CV RSS/From Brute Force to Semantic Insight- Performance-Guided Data Transformation Design with LLMs]]"
source_sha256: f2c2a2f7b064673d4be2e537136fade4ae08c9fe8ae52213052187d5393f4c89
original_url: https://arxiv.org/abs/2601.03808
processed: 2026-08-07
language: zh-CN
---

# 从暴力搜索到语义洞察：基于性能引导的LLM数据变换设计

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.03808)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/From Brute Force to Semantic Insight- Performance-Guided Data Transformation Design with LLMs|查看原始文件]]

## 摘要

- 提出 NNGPT 项目生态系统中性能感知的闭环解决方案，使 LLM 通过内化经验性能线索自主设计最优数据变换
- 使用低秩适配（LoRA）在超过 6,000 个经实证评估的 PyTorch 增强函数上微调，基于成对性能排序对齐，无需强化学习、奖励模型或符号目标；评估候选数比暴力搜索最多减少 600 倍
- 消融表明结构化思维链（CoT）提示引入句法噪声、损害性能，而直接提示在性能关键型代码任务中更稳定；模型内化的是语义性能线索而非句法记忆

## 正文

大型语言模型（LLM）在代码合成方面取得了显著性能；然而，数据感知的数据增强仍是限制因素，通常通过启发式设计或暴力搜索方式处理。我们在 NNGPT 项目生态系统中引入了一种性能感知的闭环解决方案，使 LLM 能够通过内化经验性能线索来自主设计最优变换。我们使用低秩适配（LoRA）在包含超过 6,000 个经实证评估的 PyTorch 增强函数的新存储库上微调 LLM，每个函数仅由下游模型准确率标注。训练使用成对性能排序（较好—较差变换），通过经验反馈实现对齐，无需强化学习、奖励模型或符号目标。这将穷举搜索的需求大幅减少，相比暴力搜索发现的候选数最多减少 600 倍，同时保持具有竞争力的峰值准确率，并将生成从随机合成转向任务对齐的设计。消融研究表明，结构化思维链（CoT）提示会引入句法噪声并降低性能，而直接提示则能在性能关键型代码任务中确保稳定优化。定性和定量分析表明，模型内化了语义性能线索而非记忆句法。这些结果表明，LLM 可以通过非文本反馈回路展示任务级推理，绕过显式符号奖励。

## 关键词

#LLM #数据增强 #性能引导 #LoRA #代码合成
