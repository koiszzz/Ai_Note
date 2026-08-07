---
published: 2026-08-06
title: 我们观察到的 LLM 行为可能是推理后端的副作用
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/What We Observe as LLM Behavior Can Be a Side-effect of Inference Backend.md
source_note: "[[信息源/arXiv cs.LG RSS/What We Observe as LLM Behavior Can Be a Side-effect of Inference Backend]]"
source_sha256: 7f139b3d1266ea300b2972ced864c97101540553611d80064b598811440ba165
original_url: https://arxiv.org/abs/2608.04714
processed: 2026-08-07
language: zh-CN
---

# 我们观察到的 LLM 行为可能是推理后端的副作用

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04714)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/What We Observe as LLM Behavior Can Be a Side-effect of Inference Backend|查看原始文件]]

## 摘要

- 在完全交叉研究（3 个指令微调模型 × 5 个推理框架 × 6 个基准 × 4 种生成模式）中发现，推理后端是影响基准分数的不可忽视因素：即使在贪心、无采样噪声的解码下，更换后端也能结构性、且强烈依赖模型地显著改变性能。
- 开箱即用所见可变性中约 39% 可归因于后端，其余来自采样噪声与各框架默认生成参数；这些分歧在事实性基准上比在社会偏见基准上更明显。
- 基准数字并非与后端无关，建议公开后端及其版本与完整生成配置，并采用确定性解码进行跨后端比较。

## 正文

基准分数被报告为模型的属性，然而用于产生这些分数的推理框架——例如 HuggingFace、vLLM 或 Ollama——被认为是无关紧要的，其名称和版本几乎从不公开。在这项工作中，我们研究这一选择对模型输出的影响有多大。

在一项完全交叉的研究中（三个指令微调模型 × 五个推理框架 × 六个基准 × 四种生成模式），我们考察了不同工具（包装器/后端）如何影响基准分数，以及它们的分数变化如何受生成超参数影响。我们发现后端是一个不可忽视的因素：即使在贪心、无采样噪声的解码下，更换后端也能显著改变模型性能，而且这种效应是结构性的，且强烈依赖于模型。

按生成模式分解方差后发现，实践者开箱即用时所看到的可变性中有相当大的一部分（约 39%）可能来自后端，其余部分则来自采样噪声和各框架的默认生成参数，而这两者都可以通过公开并匹配生成配置来避免。这些分歧在事实性基准上比在社会偏见基准上更为明显。

总体而言，基准数字并非与后端无关，因此我们建议公开后端、其版本以及完整的生成配置，并在跨后端比较时使用确定性解码。

## 关键词

#LLM #推理后端 #基准测试 #可复现性 #vLLM
