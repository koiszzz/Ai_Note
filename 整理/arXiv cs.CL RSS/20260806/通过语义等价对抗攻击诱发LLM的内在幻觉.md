---
published: 2026-08-06
title: "通过语义等价对抗攻击诱发 LLM 的内在幻觉"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Eliciting Intrinsic Hallucinations in LLMs via Semantically Equivalent Adversarial Attacks.md
source_note: "[[信息源/arXiv cs.CL RSS/Eliciting Intrinsic Hallucinations in LLMs via Semantically Equivalent Adversarial Attacks]]"
source_sha256: 5609243343960a9f18cc73198110c2946baa5d25395ef54fcd2e453c973580e8
original_url: https://arxiv.org/abs/2608.04286
processed: 2026-08-07
language: zh-CN
---

# 通过语义等价对抗攻击诱发 LLM 的内在幻觉

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04286)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Eliciting Intrinsic Hallucinations in LLMs via Semantically Equivalent Adversarial Attacks|查看原始文件]]

## 摘要

- LLM 常借助外部知识源（如 RAG）提升事实准确性、减少幻觉，但仍易受"内在幻觉"影响——模型生成检索证据不支持的不忠实或编造信息
- 提出新框架：通过对抗优化发现用户查询的自然、语义等价变体进行压力测试，评估模型对内在幻觉的鲁棒性；框架强制严格的语义等价约束与内在幻觉目标
- 在白盒、灰盒与黑盒对抗设置下应用于多种对抗攻击技术；在 5 个开源与 5 个闭源生成模型、3 个数据集上评估
- 即使是状态最先进的模型也极易受保义扰动影响，显著降低上下文忠实度（GPT-5-mini 最高下降 50%）；保真使用上下文证据在最先进 LLM 中依然脆弱，需要强制稳健接地（不依赖查询表面形式）的架构与训练目标

## 正文

大语言模型（LLMs）经常与外部知识源结合使用，通过诸如检索增强生成（RAG）等方法提高事实准确性并减少幻觉。然而，这些系统仍然易受内在幻觉（intrinsic hallucinations）的影响，即模型生成检索证据不支持的不忠实或编造的信息。我们提出了一个新的框架来评估模型对此现象的鲁棒性，方法是利用通过对抗优化发现的用户查询的自然、语义等价的变体进行压力测试。我们将该框架（它强制执行严格的语义等价约束和内在幻觉目标）应用于白盒、灰盒和黑盒对抗设置中的一系列对抗攻击技术。在 3 个数据集上、对 5 个开源和 5 个闭源生成模型评估这些攻击后，我们证明即使是状态最先进的模型也极易受保义扰动的影响，这些扰动显著降低了上下文忠实度（对 GPT-5-mini 最多下降 50%）。我们的发现表明，即使是最先进的 LLM，其忠实使用上下文证据的能力仍然是脆弱的，这促使我们需要采用那些强制稳健接地、不依赖查询表面形式的架构和训练目标。代码可在 https://github.com/atriviveksharma/intrinsic_hall 获取。

## 关键词

#幻觉 #对抗攻击 #检索增强生成 #语义等价 #模型鲁棒性
