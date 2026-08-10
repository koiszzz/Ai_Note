---
published: 2026-08-07
title: "DBLAST：随机投机解码的依赖块起草"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/DBLAST- Dependent Block Drafting for Stochastic Speculative Decoding.md"
source_note: "[[信息源/arXiv cs.CL RSS/DBLAST- Dependent Block Drafting for Stochastic Speculative Decoding]]"
source_sha256: 2a4d1ad37f35adc873166767bd23ad4522aa1368216bc1cb2d3bde5900365238
original_url: "https://arxiv.org/abs/2608.05448"
processed: 2026-08-07
language: zh-CN
---

# DBLAST：随机投机解码的依赖块起草

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Amirmohammad Karimi, Chao Gao, Negar Hassanpour
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05448)

## 摘要

- 投机解码经用轻量起草器提议多个未来 token、目标模型验证加速 LLM 推理；近期块与扩散风格起草器可单次预测多个位置，但其训练与采样程序通常为贪心解码优化或假设草稿块内位置条件独立。
- 该假设在非贪心投机解码中脆弱：目标分布刻意随机、多个延续变得合理。
- 研究块扩散起草器的该错配：随目标采样分布熵增加，接受草稿长度退化；提出基于 token 位置低秩潜混合的依赖块起草器，辅以直接瞄准期望验证长度的接受导向训练目标。
- Qwen3-4B 与 Qwen3-8B 在 GSM8K、MT-Bench、HumanEval 与创意写作基准实验显示 DBLAST 一致改进相对独立块采样的接受长度，尤其高熵解码机制。

## 正文

投机解码通过使用一个轻量起草器提议多个未来 token、并由目标模型验证它们，来加速大语言模型的推理。虽然近期块与扩散风格的起草器可以在单次传递中预测多个位置，它们的训练与采样程序通常为贪心解码优化，或假设草稿块中的位置条件独立。该假设在非贪心投机解码中变得脆弱：目标分布被刻意设为随机，多个延续都变得合理。研究考察块扩散起草器的该错配，表明随目标采样分布熵的增加，接受的草稿长度退化。研究提出一个基于 token 位置低秩潜混合的依赖块起草器，辅以一个直接瞄准期望验证长度的接受导向训练目标。Qwen3-4B 与 Qwen3-8B 在 GSM8K、MT-Bench、HumanEval 与创意写作基准上的实验表明，该方法（DBLast）一致改进相对独立块采样的接受长度，尤其在更高熵解码机制中。

## 关键词

投机解码、块起草、熵、推理加速、依赖
