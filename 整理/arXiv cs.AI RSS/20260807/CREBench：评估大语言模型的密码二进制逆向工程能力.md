---
published: 2026-08-07
title: "CREBench：评估大语言模型的密码二进制逆向工程能力"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CREBench- Evaluating Large Language Models in Cryptographic Binary Reverse Engineering.md"
source_note: "[[信息源/arXiv cs.AI RSS/CREBench- Evaluating Large Language Models in Cryptographic Binary Reverse Engineering]]"
source_sha256: 0e3043e84726394eee57bc59c59a4eceff78414fce0bba498467c6fa21412727
original_url: "https://arxiv.org/abs/2604.03750"
processed: 2026-08-07
language: zh-CN
---

# CREBench：评估大语言模型的密码二进制逆向工程能力

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Baicheng Chen, Yu Wang, Ziheng Zhou, Xiangru Liu, Juanru Li, Yilei Chen, Tianxing He
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.03750)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CREBench- Evaluating Large Language Models in Cryptographic Binary Reverse Engineering|查看原始文件]]

## 摘要

- 逆向工程（RE）是软件安全的核心，尤其对处理敏感数据且极易存在漏洞的密码程序至关重要，支持漏洞发现与恶意软件分析等关键任务。
- RE 劳动密集且需要大量专业知识，使 LLM 成为自动化该过程的潜在方案，但其 RE 能力仍缺乏系统探索。
- 引入 CREBench：432 个挑战的基准，由 48 种标准密码算法、3 种不安全密码密钥使用场景与 3 个难度级别构建；每个挑战遵循夺旗（CTF）RE 挑战形式，要求模型分析底层密码逻辑并恢复正确输入；设计涵盖从算法识别到正确 flag 恢复的四个子任务评估框架。
- 评估八个前沿 LLM：最优的 GPT-5.4 得 64.03/100，在 59% 挑战中恢复 flag；人类专家基线 92.19 分，显示人类在密码 RE 任务中仍具优势。

## 正文

逆向工程（Reverse engineering，RE）是软件安全的核心，尤其对处理敏感数据且极易存在漏洞的密码程序至关重要。它支持漏洞发现与恶意软件分析等关键任务。尽管重要，RE 仍劳动密集且需要大量专业知识，使大语言模型（LLMs）成为自动化该过程的潜在解决方案。然而，其 RE 能力仍缺乏系统探索。为填补这一空白，我们研究 LLM 的密码二进制 RE 能力，并引入 CREBench：一个包含 432 个挑战的基准，由 48 种标准密码算法、3 种不安全密码密钥使用场景与 3 个难度级别构建。每个挑战遵循夺旗（Capture-the-Flag，CTF）RE 挑战形式，要求模型分析底层密码逻辑并恢复正确输入。我们设计一个包含四个子任务（从算法识别到正确 flag 恢复）的评估框架。我们在 CREBench 上评估八个前沿 LLM。表现最佳的 GPT-5.4 得分 64.03/100，并在 59% 的挑战中恢复 flag。我们还建立了 92.19 分的强人类专家基线，显示人类在密码 RE 任务中仍保持优势。我们的代码与数据集可在 https://github.com/wangyu-ovo/CREBench 获取。

## 关键词

#逆向工程 #密码学 #LLM基准 #网络安全
