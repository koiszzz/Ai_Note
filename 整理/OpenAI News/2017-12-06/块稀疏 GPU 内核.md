---
published: 2017-12-06
title: "块稀疏 GPU 内核"
source: "OpenAI News"
original_file: "信息源/OpenAI News/Block-sparse GPU kernels.md"
source_note: "[[信息源/OpenAI News/Block-sparse GPU kernels]]"
source_sha256: 4bf06b4538b0bf4534d5088d6ed7e9d49a00ac7fe08875aca6a9e527966c9ca2
original_url: "https://openai.com/index/block-sparse-gpu-kernels"
processed: 2026-08-06
language: zh-CN

---

# 块稀疏 GPU 内核

> [!info] 来源信息
> - 数据源：OpenAI News
> - 作者：原始来源未提供
> - 发布时间：2017-12-06
> - 原文链接：[打开原文](https://openai.com/index/block-sparse-gpu-kernels)
> - Vault 原文件：[[信息源/OpenAI News/Block-sparse GPU kernels|查看原始文件]]

## 摘要

- 我们发布针对一类被忽视的神经网络架构（块稀疏权重网络）高度优化的 GPU 内核。
- 视稀疏度选择而定，这些内核可比 cuBLAS 或 cuSPARSE 快数个数量级，已用于在文本情感分析和文本、图像生成建模中取得最优结果。

## 正文

我们发布了针对一类少有人探索的神经网络架构——具有块稀疏权重（block-sparse weights）的网络——高度优化的 GPU 内核。根据所选稀疏度，这些内核的运行速度可比 cuBLAS 或 cuSPARSE 快数个数量级。我们已用它们在文本情感分析以及文本和图像生成建模中取得了最先进的结果。

## 关键词

#OpenAI #GPU #稀疏网络 #内核