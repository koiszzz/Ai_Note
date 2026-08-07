---
published: 2024-02-18
title: 改进 LoRA：从零实现权重分解低秩适配（DoRA）
source: Sebastian Raschka Blog
original_file: 信息源/Sebastian Raschka Blog/Improving LoRA- Implementing Weight-Decomposed Low-Rank Adaptation (DoRA) from Scratch.md
source_note: "[[信息源/Sebastian Raschka Blog/Improving LoRA- Implementing Weight-Decomposed Low-Rank Adaptation (DoRA) from Scratch]]"
source_sha256: bf2fa5ef1c826ea5d973445f9e9fb36875a228b9f9a8f9cf96308d937ab394f9
original_url: https://magazine.sebastianraschka.com/p/lora-and-dora-from-scratch
processed: 2026-08-07
language: zh-CN
---

# 改进 LoRA：从零实现权重分解低秩适配（DoRA）

> [!info] 来源信息
> - 数据源：Sebastian Raschka Blog
> - 发布时间：2024-02-18
> - 原文链接：[打开原文](https://magazine.sebastianraschka.com/p/lora-and-dora-from-scratch)
> - Vault 原文件：[[信息源/Sebastian Raschka Blog/Improving LoRA- Implementing Weight-Decomposed Low-Rank Adaptation (DoRA) from Scratch|查看原始文件]]

## 摘要

- 关于 LoRA 与 DoRA 的参数高效微调技术教程
- 提供从零编写的 PyTorch 代码
- 讲解权重分解低秩适配（DoRA）的直觉

## 正文

一篇关于 LoRA 与 DoRA 用于参数高效微调（parameter-efficient finetuning）的技术教程，配有从零编写的 PyTorch 代码，并给出权重分解低秩适配（weight-decomposed low-rank adaptation）的直觉解释。

注：原始 RSS 条目仅提供上述摘要，未提供完整正文。完整教程（含 PyTorch 代码）见原文链接。

## 关键词

#LoRA #DoRA #参数高效微调 #PyTorch #低秩适配
