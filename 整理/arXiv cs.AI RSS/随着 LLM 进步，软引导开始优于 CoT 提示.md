---
title: "随着 LLM 进步，软引导开始优于 CoT 提示"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Soft Guidance Starts to Outperform CoT Prompting as LLMs Improve.md"
source_note: "[[信息源/arXiv cs.AI RSS/Soft Guidance Starts to Outperform CoT Prompting as LLMs Improve]]"
source_sha256: d8cf5331e3f821e82ef6d00b34e025e5bb25dd618676c68f5cbde406142813ae
original_url: "https://arxiv.org/abs/2608.03550"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 随着 LLM 进步，软引导开始优于 CoT 提示

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Denys Pushkin、Albert Q. Jiang、Aryo Lotfi 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03550)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Soft Guidance Starts to Outperform CoT Prompting as LLMs Improve|查看原始文件]]

## 摘要

- 在数学解题任务上评估多个现代中等规模语言模型：推理专用模型在简单零样本设置中比用少样本 CoT 示例取得更好性能——无额外成本显著超越官方报告结果（Mathstral 在 GSM8K 上从约 77% 到约 84%）；测试的通用模型用零样本 CoT 提示也足以超越少样本 CoT 基线。
- 归因于“引导-分心”权衡：标准 CoT 提示还要求风格适配、格式合规与可能不必要的上下文化，可能分散模型对核心推理任务的注意力。
- 思维链（CoT）提示仍是评估模型推理能力的标准基线；最初引入该技术是为了引出 LLM 的逐步推理，否则模型往往直接输出最终答案；但许多现代 LLM 面对推理任务时*原生*产生 CoT 风格响应。
- 结论：随着模型更强，使用标准 CoT 提示日益成为分心来源。

## 正文

论文编号：arXiv:2608.03550v1（更新类型：new）。以下为摘要全文翻译。

思维链（CoT）提示仍是评估模型推理能力的标准基线。最初，这一技术被引入以引出大语言模型（LLM）的逐步推理，否则它们往往直接输出最终答案。然而，许多现代 LLM 面对推理任务时会*原生*产生 CoT 风格响应，这促使我们重新审视标准 CoT 提示的有效性。我们在数学解题任务上评估几个现代中等规模语言模型，发现推理专用模型在简单零样本设置中比使用少样本 CoT 示例取得更好的性能——无额外成本显著超越官方报告的结果（例如 Mathstral 在 GSM8K 上从约 77% 到约 84%）。对测试的通用模型，零样本 CoT 提示也足以超越少样本 CoT 基线。我们把这归因于一个“引导-分心”权衡：标准 CoT 提示还要求风格适配、格式合规与潜在不必要的上下文化，这可能分散模型对核心推理任务的注意力。我们的发现表明，随着模型变得更强，使用标准 CoT 提示日益成为分心来源。

## 关键词

#思维链 #提示工程 #数学推理 #零样本
