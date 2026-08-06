---
title: "ARCHead：大语言模型输出头的激活度量残差校正"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ARCHead- Activation-Metric Residual Correction for Large Language Model Output Heads.md"
source_note: "[[信息源/arXiv cs.LG RSS/ARCHead- Activation-Metric Residual Correction for Large Language Model Output Heads]]"
source_sha256: 003a9671e2c80ce11d6345d7b336922ed8bc38c579435a0e14d5fd670c68421b
original_url: "https://arxiv.org/abs/2608.02703"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ARCHead：大语言模型输出头的激活度量残差校正

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Suayp Talha Kocabay、Talha Rüzgar Akkuş、Kamer Ali Yuksel
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02703)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ARCHead- Activation-Metric Residual Correction for Large Language Model Output Heads|查看原始文件]]

## 摘要

- 提出 ARCHead，打包的 LM 头压缩器：结合量化低秩核心、分组 INT4 残差与在激活派生度量中拟合的低秩校正——不存储稠密 BF16 头，把持久 LM 头存储减少 3.7–3.9 倍。
- 仅权重量化大幅减少大语言模型（LLM）transformer 块的存储，但实用后端常保留最终语言建模头（LM-head）于 BF16 或 FP16；朴素量化该投影可强烈扰动词表 logit 分布。
- Qwen3-8B-Base 上使用 BF16 头存储的 25.6%，相对困惑度 1.007；存储匹配的朴素 INT4 为 1.14–1.16；替换 AWQ 或 bitsandbytes 遗留的 BF16 头仅增加 0.006–0.007 交叉熵，测得吞吐变化小于 2%。
- ARCHead 因此通过压缩块量化器可能遗留的大输出投影补充块量化器；代码：https://github.com/suayptalha/archead

## 正文

论文编号：arXiv:2608.02703v1（更新类型：cross）。以下为摘要全文翻译。

仅权重量化大幅减少大语言模型（LLM）transformer 块的存储，但实用后端往往把最终语言建模头（LM-head）保留在 BF16 或 FP16。朴素量化该投影可以强烈扰动词表 logit 分布。我们提出 ARCHead，一个打包的 LM 头压缩器：结合量化低秩核心、分组 INT4 残差与在激活派生度量中拟合的低秩校正。ARCHead 不存储稠密 BF16 头，并把持久 LM 头存储减少 3.7–3.9 倍。在 Qwen3-8B-Base 上，它使用 BF16 头存储的 25.6%，同时实现 1.007 的相对困惑度；存储匹配的朴素 INT4 为 1.14–1.16。替换 AWQ 或 bitsandbytes 遗留的 BF16 头只增加 0.006–0.007 的交叉熵，在我们的测量中吞吐变化小于 2%。ARCHead 因此通过压缩块量化器可能遗留的大输出投影来补充块量化器。代码可在 https://github.com/suayptalha/archead 获取。

## 关键词

#模型量化 #LM头 #低秩校正 #压缩
