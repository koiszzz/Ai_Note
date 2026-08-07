---
published: 2025-10-29
title: "gpt-oss-safeguard 技术报告"
source: "OpenAI News"
original_file: "信息源/OpenAI News/gpt-oss-safeguard technical report.md"
source_note: "[[信息源/OpenAI News/gpt-oss-safeguard technical report]]"
source_sha256: 519f1615f4e9a3d8c3f1c879f627546abebe1516889500a8a3a08730e0370333
original_url: "https://openai.com/index/gpt-oss-safeguard-technical-report"
processed: 2026-08-06
language: zh-CN

---

# gpt-oss-safeguard 技术报告

> [!info] 来源信息
> - 数据源：OpenAI News
> - 作者：原始来源未提供
> - 发布时间：2025-10-29
> - 原文链接：[打开原文](https://openai.com/index/gpt-oss-safeguard-technical-report)
> - Vault 原文件：[[信息源/OpenAI News/gpt-oss-safeguard technical report|查看原始文件]]

## 摘要

- gpt-oss-safeguard-120b 和 gpt-oss-safeguard-20b 是两个开放权重推理模型。
- 从 gpt-oss 模型后训练而来，训练目的是根据给定政策进行推理，从而依据该政策为内容打标签；本报告描述其能力，并以底层 gpt-oss 模型为基线提供基础安全评估。

## 正文

gpt-oss-safeguard-120b 和 gpt-oss-safeguard-20b 是两个开放权重推理模型，从 gpt-oss 模型后训练而来，训练目标是依据提供的政策进行推理，从而在该政策下为内容打标签。在本报告中，我们描述 gpt-oss-safeguard 的能力，并以底层 gpt-oss 模型为基线，提供对 gpt-oss-safeguard 模型的基础安全评估。有关底层 gpt-oss 模型的开发和架构的更多信息，请参阅原始的 gpt-oss 模型卡。

## 关键词

#OpenAI #gpt-oss-safeguard #技术报告 #安全分类