---
published: 2026-08-07
title: "CREBench：评估大语言模型的密码学二进制逆向工程能力"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/CREBench- Evaluating Large Language Models in Cryptographic Binary Reverse Engineering.md"
source_note: "[[信息源/arXiv cs.CL RSS/CREBench- Evaluating Large Language Models in Cryptographic Binary Reverse Engineering]]"
source_sha256: 1484edb1d817994091cc289106718c5206485fb40c9f51b70e4f9f55983c5e38
original_url: "https://arxiv.org/abs/2604.03750"
processed: 2026-08-07
language: zh-CN
---

# CREBench：评估大语言模型的密码学二进制逆向工程能力

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Baicheng Chen, Yu Wang, Ziheng Zhou, Xiangru Liu, Juanru Li, Yilei Chen, Tianxing He
> - **发布时间**：2026-08-07
> - **分类**：cs.CR
> - **原文**：[打开链接](https://arxiv.org/abs/2604.03750)

## 摘要

- 逆向工程（RE）是软件安全核心，尤其对处理敏感数据且极易受漏洞影响的密码学程序；支持漏洞发现与恶意软件分析等关键任务。
- 尽管重要，RE 仍劳动密集且需大量专业知识，使 LLM 成为自动化过程的潜在解；但其 RE 能力仍系统性未充分探索。
- 研究 LLM 密码学二进制 RE 能力并引入 CREBench：432 个挑战的基准，由 48 个标准密码算法、3 种不安全密码密钥使用场景与 3 个难度级别构建；每个挑战遵循夺旗（CTF）RE 挑战，要求模型分析底层密码逻辑并恢复正确输入。
- 设计四子任务评估框架（算法识别至正确旗标恢复）；评估八个前沿 LLM：GPT-5.4 最佳，100 分中 64.03，59% 挑战恢复旗标；确立人类专家基线 92.19 分，人类在密码学 RE 任务保持优势；代码与数据集公开。

## 正文

逆向工程（reverse engineering, RE）是软件安全的核心，尤其对处理敏感数据且极易受漏洞影响的密码学程序。它支持漏洞发现与恶意软件分析等关键任务。尽管重要，RE 仍劳动密集且需要大量专业知识，使大语言模型（LLMs）成为自动化该过程的潜在解决方案。然而，它们的 RE 能力仍被系统性低估探索。为弥合该差距，研究考察 LLM 的密码学二进制 RE 能力，并引入 CREBench：一个由 432 个挑战组成的基准，基于 48 个标准密码算法、3 种不安全密码密钥使用场景与 3 个难度级别构建。每个挑战遵循夺旗（Capture-the-Flag, CTF）RE 挑战，要求模型分析底层密码逻辑并恢复正确的输入。研究设计一个包含四个子任务的评估框架，从算法识别到正确旗标恢复。研究在 CREBench 上评估八个前沿 LLM。最佳模型 GPT-5.4 取得 100 分中的 64.03，并在 59% 的挑战中恢复旗标。研究还确立了一个 92.19 分的强人类专家基线，显示人类在密码学 RE 任务中保持优势。代码与数据集见 https://github.com/wangyu-ovo/CREBench。

## 关键词

逆向工程、密码学、LLM、基准、CTF
