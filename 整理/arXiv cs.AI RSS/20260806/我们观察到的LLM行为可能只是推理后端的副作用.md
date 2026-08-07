---
published: 2026-08-06
title: 我们观察到的 LLM 行为可能只是推理后端的副作用
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/What We Observe as LLM Behavior Can Be a Side-effect of Inference Backend.md
source_note: "[[信息源/arXiv cs.AI RSS/What We Observe as LLM Behavior Can Be a Side-effect of Inference Backend]]"
source_sha256: 1c356f6ea3a15c749ced00bf1828423f154f4e447de33fb863c82c7a51f9591c
original_url: https://arxiv.org/abs/2608.04714
processed: 2026-08-07
language: zh-CN
---

# 我们观察到的 LLM 行为可能只是推理后端的副作用

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04714)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/What We Observe as LLM Behavior Can Be a Side-effect of Inference Backend|查看原始文件]]

## 摘要

- 基准分数被当作模型自身属性报告，但产生分数的推理框架（HuggingFace、vLLM、Ollama 等）被认为没有影响，其名称与版本几乎从不披露
- 完全交叉研究（3 个指令微调模型 × 5 个推理框架 × 6 个基准 × 4 种生成模式）表明后端是不可忽略的因素：即使在无采样噪声的贪心解码下，更换后端也会结构性、强模型依赖地改变性能
- 约 39% 的开箱即见性能波动可归因于后端，其余来自采样噪声与框架默认生成参数；建议披露后端、版本与完整生成配置并采用确定性解码

## 正文

基准分数被报告为模型自身的属性，然而用于产出这些分数的推理框架（如 HuggingFace、vLLM 或 Ollama）被认为没有影响，其名称和版本几乎从不披露。在本工作中，我们研究这一选择对模型输出的影响有多大。在一项完全交叉的研究中（三个经过指令微调的模型 × 五个推理框架 × 六个基准 × 四种生成模式），我们研究了不同工具（包装器/后端）如何影响基准分数，以及分数的变化如何受到生成超参数的影响。我们发现后端是一个不可忽略的因素：即使在贪心、无采样噪声的解码下，更换后端也可能显著改变模型性能，而且这种效应是结构性的且强烈依赖于模型。按生成模式分解方差后发现，从业者开箱即见的变化中有相当大的一部分（约 39%）可归因于后端，其余部分则来自采样噪声和每个框架的默认生成参数——这两者都可以通过披露并匹配生成配置来避免。这些差异在事实性基准上比在社会偏见基准上更为明显。总体而言，基准数字并非与后端无关，因此我们建议披露后端、其版本以及完整的生成配置，并在跨后端比较时使用确定性解码。

## 关键词

#LLM #推理后端 #基准测试 #生成配置
