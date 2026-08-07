---
published: 2026-08-06
title: 循环残差量化：LLM的渐进式多精度表示
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Recurrent Residual Quantization- A Progressive Multi-Precision Representation for LLMs.md
source_note: "[[信息源/arXiv cs.LG RSS/Recurrent Residual Quantization- A Progressive Multi-Precision Representation for LLMs]]"
source_sha256: 44bef2671e321c168e8271d8577c428ab517ed3f4bcffe189a3072f7ecc99325
original_url: https://arxiv.org/abs/2608.04048
processed: 2026-08-07
language: zh-CN
---

# 循环残差量化：LLM的渐进式多精度表示

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04048)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Recurrent Residual Quantization- A Progressive Multi-Precision Representation for LLMs|查看原始文件]]

## 摘要

- 提出循环残差量化（RRQ）训练后量化框架，用低位量化基座加一串量化残差修正，在单个检查点上实现多种有效精度。
- 从 2 位模型出发通过 RTN 渐进构建 4/6/8 位表示，免校准且避免联合多比特优化。
- 在 Qwen3-8B 设置下构建全 RTN 2/4/6/8 位包仅需 1,293 秒，比 MatGPTQ 快 3.3 倍；六个近期 LLM 上 6/8 位精度有竞争力。

## 正文

在多样化的部署约束下服务大语言模型（LLM），需要在准确率、内存占用和吞吐量之间灵活权衡。然而，传统量化方法通常要求每个目标位宽一个单独的检查点。我们引入循环残差量化（Recurrent Residual Quantization, RRQ），一种训练后量化（PTQ）框架，将权重表示为低位量化基座加一串量化的残差修正，从而在单个检查点上实现多种有效精度。

从通过训练后量化（PTQ）或最近舍入（RTN）得到的 2 位模型出发，RRQ 通过 RTN 渐进地加入轻量 2 位残差，构建 4 位、6 位和 8 位表示。该方法免校准，并避免联合多比特优化。在我们的 Qwen3-8B 设置中，完整的全 RTN 2/4/6/8 位包在 1,293 秒内构建完成，比实测的 MatGPTQ 构建快 3.3 倍。在六个近期 LLM 上的实验显示，6 位和 8 位精度具有竞争力，4 位则呈现模型相关行为。代码将在发表后公开。

## 关键词

#量化 #多精度 #大语言模型 #训练后量化 #模型压缩
